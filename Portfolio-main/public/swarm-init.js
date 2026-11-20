/*
 * swarm-init.js — boots the SAAI.PRO swarm rebuild engine.
 *
 * Behaviour (full takeover, califa-style):
 *   1. The real page is captured into a blueprint.
 *   2. The page is blanked and repainted by cursor agents, top-down.
 *   3. Scrolling advances the build frontier.
 *   4. "Go live" fades the canvas out and restores the live, interactive page.
 */
(function () {
  "use strict";

  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
  window.scrollTo(0, 0);

  var KEY = "__swarmRebuild";

  var opts = {
    auto: true,
    delayMs: 350,
    waitFonts: true,
    visibilityTimeoutMs: 8000,
    oncePerSession: false
  };

  function q(name) {
    try {
      return new URLSearchParams(location.search).get(name);
    } catch (_) {
      return null;
    }
  }

  function mode() {
    var v = q("swarm");
    if (v === "off" || v === "0") return "off";
    if (v === "once" || v === "session") return "once";
    if (v === "1" || v === "on") return "always";
    return opts.oncePerSession ? "once" : "always";
  }

  function forced() {
    return mode() === "always";
  }

  function disabled() {
    return mode() === "off";
  }

  function alreadyDone() {
    if (mode() !== "once") return false;
    try {
      return sessionStorage.getItem("swarm:done") === "1";
    } catch (_) {
      return false;
    }
  }

  function prefersReducedMotion() {
    if (forced()) return false;
    try {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (_) {
      return false;
    }
  }

  function markDone() {
    try {
      sessionStorage.setItem("swarm:done", "1");
    } catch (_) {}
  }

  function waitVisible(timeoutMs) {
    if (forced() || document.visibilityState === "visible") return Promise.resolve(true);
    return new Promise(function (resolve) {
      var done = false;
      var onVis = function () {
        if ((forced() || document.visibilityState === "visible") && !done) {
          done = true;
          document.removeEventListener("visibilitychange", onVis);
          resolve(true);
        }
      };
      document.addEventListener("visibilitychange", onVis);
      setTimeout(function () {
        if (done) return;
        done = true;
        document.removeEventListener("visibilitychange", onVis);
        resolve(true);
      }, timeoutMs);
    });
  }

  function loadEngine() {
    return new Promise(function (resolve, reject) {
      if (window[KEY]) return resolve(window[KEY]);
      var s = document.createElement("script");
      s.src = "/swarm/swarm.js";
      s.async = false;
      s.onload = function () {
        if (window[KEY]) resolve(window[KEY]);
        else reject(new Error("swarm engine did not register"));
      };
      s.onerror = function () {
        reject(new Error("failed to load swarm engine"));
      };
      document.head.appendChild(s);
    });
  }

  async function boot() {
    if (!opts.auto) return;
    if (disabled()) return;
    if (prefersReducedMotion()) return;
    if (alreadyDone()) return;
    if (window[KEY]) return; // already running

    // Let the real page paint before we snapshot it.
    await new Promise(function (r) {
      if (document.readyState === "complete") r();
      else window.addEventListener("load", r, { once: true });
    });

    var visible = await waitVisible(opts.visibilityTimeoutMs);
    if (!visible) return;

    // In a React SPA, ensure #root has rendered content before snapshotting
    var rootEl = document.getElementById("root");
    var waitedRoot = 0;
    while (rootEl && rootEl.children.length === 0 && waitedRoot < 3000) {
      await new Promise(function (r) { setTimeout(r, 50); });
      waitedRoot += 50;
    }

    if (opts.waitFonts) {
      try {
        await Promise.race([
          document.fonts.ready,
          new Promise(function (r) { setTimeout(r, 1500); })
        ]);
      } catch (_) {}
    }

    await new Promise(function (r) { setTimeout(r, opts.delayMs); });

    if (disabled() || alreadyDone()) return;

    try {
      await loadEngine();
      markDone();

      // Auto-start Tour: visitors get the smooth scroll-driven build
      // from the first paint instead of a static half-built page.
      if (window[KEY] && window[KEY].app && !window[KEY].app.tour) {
        var started = false;
        var start = function () {
          if (started) return;
          started = true;
          setTimeout(function () {
            try {
              var host = document.querySelector("swarm-rebuild");
              var btn = host && host.shadowRoot && host.shadowRoot.querySelector('[data-a="tour"]');
              if (btn && !btn.hidden) btn.click();
            } catch (_) {}
          }, 350);
        };
        var cancel = function () {
          if (!window[KEY] || !window[KEY].app) return;
          try { window[KEY].app.tour = false; } catch (_) {}
        };
        if (document.readyState === "complete") start();
        else window.addEventListener("load", start, { once: true });
        window.addEventListener("wheel", cancel, { passive: true });
        window.addEventListener("touchstart", cancel, { passive: true });
        document.addEventListener("keydown", function (e) {
          if (e.key === "ArrowDown" || e.key === "ArrowUp" ||
              e.key === "PageDown" || e.key === "PageUp" ||
              e.key === " " || e.key === "Home" || e.key === "End") cancel();
        });
      }
    } catch (err) {
      console.error("[swarm] boot failed", err);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true });
  } else {
    boot();
  }

  // Operator escape hatch: ESC drops the swarm immediately.
  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && window[KEY] && window[KEY].app) {
      try { window[KEY].stop(false); } catch (_) {}
    }
  });
})();
