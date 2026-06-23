/*
 * Google Analytics 4 with EU-compliant consent gating.
 *
 * Strict mode: NO contact with Google is made until the visitor explicitly
 * accepts. gtag.js is injected only after consent is granted. Choice is
 * remembered in localStorage so the banner shows once.
 *
 * Self-styled and self-contained so it works on every page regardless of
 * the page's own CSS (site-footer pages and pc-footer pages alike).
 */
(function () {
  "use strict";

  var GA_ID = "G-0KZTKCHX8H";
  var STORAGE_KEY = "vva-ga-consent"; // "granted" | "denied"
  var PRIVACY_URL = "/site-privacy.html";

  function getConsent() {
    try {
      return window.localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null; // storage blocked -> treat as undecided, no tracking
    }
  }

  function setConsent(value) {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* ignore */
    }
  }

  function loadGA() {
    if (window.__vvaGALoaded) return;
    window.__vvaGALoaded = true;

    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID, { anonymize_ip: true });

    attachAppStoreTracking();
  }

  // Fire a dedicated app_store_click event when any App Store link is clicked.
  // Delegated listener so it covers links rendered after load too.
  function attachAppStoreTracking() {
    if (window.__vvaAppStoreTracked) return;
    window.__vvaAppStoreTracked = true;

    document.addEventListener(
      "click",
      function (e) {
        var a = e.target && e.target.closest ? e.target.closest("a[href]") : null;
        if (!a) return;
        var href = a.getAttribute("href") || "";
        if (href.indexOf("apps.apple.com") === -1) return;

        var path = window.location.pathname;
        var app = "unknown";
        if (path.indexOf("/snapback") === 0) app = "snapback";
        else if (path.indexOf("/patter") === 0) app = "patter";

        if (typeof window.gtag === "function") {
          window.gtag("event", "app_store_click", {
            app: app,
            link_url: href,
            page_path: path
          });
        }
      },
      true
    );
  }

  function injectStyles() {
    if (document.getElementById("vva-consent-style")) return;
    var css =
      "#vva-consent{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);" +
      "z-index:2147483647;max-width:640px;width:calc(100% - 32px);box-sizing:border-box;" +
      "background:#1b1b1b;color:#f5f0e8;border-radius:14px;padding:16px 18px;" +
      "box-shadow:0 8px 30px rgba(0,0,0,.35);font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;" +
      "font-size:14px;line-height:1.5;display:flex;flex-wrap:wrap;align-items:center;gap:12px}" +
      "#vva-consent p{margin:0;flex:1 1 260px}" +
      "#vva-consent a{color:#f5f0e8;text-decoration:underline}" +
      "#vva-consent .vva-btns{display:flex;gap:8px;flex:0 0 auto}" +
      "#vva-consent button{font:inherit;cursor:pointer;border-radius:999px;padding:9px 18px;border:1px solid rgba(245,240,232,.4);background:transparent;color:#f5f0e8}" +
      "#vva-consent button.vva-accept{background:#f5f0e8;color:#1b1b1b;border-color:#f5f0e8;font-weight:600}";
    var style = document.createElement("style");
    style.id = "vva-consent-style";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function removeBanner() {
    var el = document.getElementById("vva-consent");
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }

  function showBanner() {
    injectStyles();
    var banner = document.createElement("div");
    banner.id = "vva-consent";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Cookie consent");
    banner.innerHTML =
      '<p>We use Google Analytics cookies to understand site traffic. ' +
      'No tracking happens unless you accept. ' +
      '<a href="' + PRIVACY_URL + '">Learn more</a>.</p>' +
      '<div class="vva-btns">' +
      '<button type="button" class="vva-decline">Decline</button>' +
      '<button type="button" class="vva-accept">Accept</button>' +
      "</div>";
    document.body.appendChild(banner);

    banner.querySelector(".vva-accept").addEventListener("click", function () {
      setConsent("granted");
      removeBanner();
      loadGA();
    });
    banner.querySelector(".vva-decline").addEventListener("click", function () {
      setConsent("denied");
      removeBanner();
    });
  }

  function init() {
    var consent = getConsent();
    if (consent === "granted") {
      loadGA();
    } else if (consent === "denied") {
      /* respect prior decline, do nothing */
    } else {
      showBanner();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
