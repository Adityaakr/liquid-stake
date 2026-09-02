/* @ds-bundle: {"format":4,"namespace":"TideDesignSystem_f6b246","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Meter","sourcePath":"components/display/Meter.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"TokenIcon","sourcePath":"components/display/TokenBadge.jsx"},{"name":"TokenBadge","sourcePath":"components/display/TokenBadge.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"AmountField","sourcePath":"components/forms/AmountField.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/forms/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"480352005af3","components/actions/IconButton.jsx":"ff55e6144eb0","components/display/Badge.jsx":"82e89691a252","components/display/Card.jsx":"be97e0229a45","components/display/Meter.jsx":"64089d163c9a","components/display/Stat.jsx":"5093da1f182e","components/display/TokenBadge.jsx":"ae9bd785f90b","components/feedback/Dialog.jsx":"0ef670728f60","components/feedback/Toast.jsx":"6ae079ea4971","components/feedback/Tooltip.jsx":"7a7f1a026c53","components/forms/AmountField.jsx":"0f6e4ff3ac8e","components/forms/Input.jsx":"0c3625622290","components/forms/Select.jsx":"027f167bb25a","components/forms/Switch.jsx":"b50cd31fa854","components/forms/Tabs.jsx":"2ebf78a50f6b","ui_kits/app/AppShell.jsx":"5d1af90b8605","ui_kits/app/PortfolioView.jsx":"e38b8f8ed795","ui_kits/app/StakeView.jsx":"6c3c3546eccb","ui_kits/app/VaultsView.jsx":"5557bf8b5b45","ui_kits/landing/Closing.jsx":"cd15d9468522","ui_kits/landing/Hero.jsx":"7c765e69d326","ui_kits/landing/Nav.jsx":"079020672abd","ui_kits/landing/Sections.jsx":"a4b9373ef193"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TideDesignSystem_f6b246 = window.TideDesignSystem_f6b246 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = ".t-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:var(--r-sm);font-family:var(--font-body);font-weight:600;letter-spacing:.01em;cursor:pointer;border:1px solid transparent;transition:filter var(--dur-1) var(--ease-out),transform var(--dur-1) var(--ease-out),border-color var(--dur-1) var(--ease-out),background var(--dur-1) var(--ease-out);user-select:none;text-decoration:none;white-space:nowrap}.t-btn:active{transform:scale(.985)}.t-btn:focus-visible{outline:none;box-shadow:var(--focus-ring)}.t-btn-primary{background:var(--grad-btn);color:var(--text-on-accent);box-shadow:inset 0 1px 0 rgba(255,255,255,.25),0 0 0 1px rgba(163,164,255,.35),var(--glow-tide)}.t-btn-primary:hover{filter:brightness(1.08)}.t-btn-secondary{background:var(--surface-raised);color:var(--text-1);border-color:var(--line-2)}.t-btn-secondary:hover{border-color:var(--line-3);background:var(--surface-hover)}.t-btn-ghost{background:transparent;color:var(--text-2)}.t-btn-ghost:hover{color:var(--text-1);background:rgba(163,164,255,.07)}.t-btn-danger{background:var(--danger-soft);color:var(--danger);border-color:rgba(255,107,122,.35)}.t-btn-danger:hover{background:rgba(255,107,122,.2)}.t-btn[data-disabled=true]{opacity:.45;pointer-events:none}.t-spin{width:14px;height:14px;border-radius:99px;border:2px solid rgba(255,255,255,.3);border-top-color:currentColor;animation:tspin .7s linear infinite}@keyframes tspin{to{transform:rotate(360deg)}}";
const _i = () => {
  if (typeof document !== "undefined" && !document.getElementById("t-btn-css")) {
    const s = document.createElement("style");
    s.id = "t-btn-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
};
function Button({
  variant = "primary",
  size = "md",
  block,
  loading,
  disabled,
  href,
  icon,
  children,
  style,
  ...rest
}) {
  _i();
  const H = {
    sm: 32,
    md: 40,
    lg: 48,
    xl: 56
  }[size] || 40;
  const FS = {
    sm: 13,
    md: 14,
    lg: 15,
    xl: 16
  }[size] || 14;
  const PX = {
    sm: 14,
    md: 18,
    lg: 22,
    xl: 26
  }[size] || 18;
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: "t-btn t-btn-" + variant,
    "data-disabled": disabled || loading ? "true" : undefined,
    href: href,
    style: {
      height: H,
      fontSize: FS,
      padding: "0 " + PX + "px",
      width: block ? "100%" : undefined,
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement("span", {
    className: "t-spin"
  }) : icon || null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = ".t-ibtn{display:inline-flex;align-items:center;justify-content:center;border-radius:var(--r-sm);cursor:pointer;border:1px solid transparent;background:transparent;color:var(--text-2);transition:all var(--dur-1) var(--ease-out)}.t-ibtn:hover{color:var(--text-1);background:rgba(163,164,255,.08)}.t-ibtn-outline{border-color:var(--line-2);background:var(--surface-raised);color:var(--text-1)}.t-ibtn-outline:hover{border-color:var(--line-3)}.t-ibtn:active{transform:scale(.94)}.t-ibtn:focus-visible{outline:none;box-shadow:var(--focus-ring)}";
const _i = () => {
  if (typeof document !== "undefined" && !document.getElementById("t-ibtn-css")) {
    const s = document.createElement("style");
    s.id = "t-ibtn-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
};
function IconButton({
  variant = "ghost",
  size = "md",
  label,
  children,
  style,
  ...rest
}) {
  _i();
  const S = {
    sm: 28,
    md: 36,
    lg: 44
  }[size] || 36;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: "t-ibtn" + (variant === "outline" ? " t-ibtn-outline" : ""),
    "aria-label": label,
    title: label,
    style: {
      width: S,
      height: S,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const T = {
  neutral: ["var(--text-2)", "var(--line-2)", "transparent"],
  accent: ["var(--tide-300)", "var(--accent-line)", "var(--accent-soft)"],
  ok: ["var(--ok)", "rgba(54,236,189,.35)", "var(--ok-soft)"],
  warn: ["var(--warn)", "rgba(255,194,75,.35)", "var(--warn-soft)"],
  danger: ["var(--danger)", "rgba(255,107,122,.35)", "var(--danger-soft)"],
  info: ["var(--info)", "rgba(91,209,255,.35)", "var(--info-soft)"]
};
function Badge({
  tone = "neutral",
  dot,
  mono,
  size = "md",
  children,
  style,
  ...rest
}) {
  const [c, b, bg] = T[tone] || T.neutral;
  const sm = size === "sm";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      height: sm ? 22 : 28,
      padding: sm ? "0 9px" : "0 12px",
      borderRadius: "var(--r-pill)",
      border: "1px solid " + b,
      background: bg,
      color: c,
      fontSize: sm ? 11.5 : 12.5,
      fontWeight: 500,
      fontFamily: mono ? "var(--font-mono)" : "var(--font-body)",
      letterSpacing: mono ? "0" : "0.02em",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 99,
      background: c,
      boxShadow: "0 0 8px " + c
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = ".t-card{position:relative;background:var(--surface-card);border:1px solid var(--line-2);border-radius:var(--r-lg);box-shadow:var(--shadow-card)}.t-card-wash{background:var(--grad-card),var(--surface-card)}.t-card-deep{background:var(--bg-deep)}.t-card-hover:hover{border-color:var(--line-3)}";
const _i = () => {
  if (typeof document !== "undefined" && !document.getElementById("t-card-css")) {
    const s = document.createElement("style");
    s.id = "t-card-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
};
function Card({
  variant = "panel",
  pad = 24,
  glow,
  hover,
  radius,
  style,
  children,
  ...rest
}) {
  _i();
  const cls = "t-card" + (variant === "wash" ? " t-card-wash" : variant === "deep" ? " t-card-deep" : "") + (hover ? " t-card-hover" : "");
  const sh = glow === "tide" ? "var(--shadow-card),var(--glow-tide)" : glow === "surf" ? "var(--shadow-card),var(--glow-surf)" : undefined;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: {
      padding: pad,
      borderRadius: radius,
      boxShadow: sh,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Meter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Meter({
  value = 0,
  max = 100,
  label,
  showValue = true,
  marker,
  tone = "auto",
  height = 8,
  style,
  ...rest
}) {
  const pct = Math.min(100, Math.max(0, value / max * 100));
  const t = tone === "auto" ? pct < 65 ? "grad" : pct < 85 ? "warn" : "danger" : tone;
  const fill = t === "grad" ? "var(--grad-tide)" : t === "warn" ? "var(--warn)" : t === "danger" ? "var(--danger)" : "var(--grad-tide)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      ...style
    }
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--text-3)"
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-xs)",
      color: "var(--text-2)"
    }
  }, Math.round(pct * 10) / 10, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height,
      borderRadius: 99,
      background: "var(--ink-700)",
      overflow: "visible"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: 99,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      borderRadius: 99,
      background: fill,
      transition: "width var(--dur-3) var(--ease-out)"
    }
  })), marker != null && /*#__PURE__*/React.createElement("div", {
    title: "kink " + marker + "%",
    style: {
      position: "absolute",
      left: Math.min(100, marker / max * 100) + "%",
      top: -3,
      bottom: -3,
      width: 2,
      background: "var(--text-3)",
      borderRadius: 2
    }
  })));
}
Object.assign(__ds_scope, { Meter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Meter.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Stat({
  label,
  value,
  sub,
  size = "md",
  gradient,
  mono,
  align = "left",
  style,
  ...rest
}) {
  const FS = {
    sm: "var(--fs-num-md)",
    md: "var(--fs-num-lg)",
    lg: "var(--fs-num-xl)"
  }[size] || "var(--fs-num-lg)";
  const grad = gradient ? {
    background: "var(--grad-text)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent"
  } : {
    color: "var(--text-1)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-3)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: mono ? "var(--font-mono)" : "var(--font-display)",
      fontWeight: 600,
      fontSize: FS,
      lineHeight: 1.05,
      letterSpacing: "var(--ls-num)",
      ...grad
    }
  }, value), sub ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--text-3)"
    }
  }, sub) : null);
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/TokenBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const M = {
  VARA: ["V", "--tok-vara", "vara"],
  tideVARA: ["V", "--tok-vara", "tide-vara"],
  wUSDT: ["T", "--tok-usdt", "usdt"],
  USDT: ["T", "--tok-usdt", "usdt"],
  tideUSDT: ["T", "--tok-usdt", "tide-usdt"],
  wUSDC: ["C", "--tok-usdc", "usdc"],
  USDC: ["C", "--tok-usdc", "usdc"],
  tideUSDC: ["C", "--tok-usdc", "tide-usdc"]
};
let ROOT = null;
function root() {
  if (ROOT === null) {
    const s = typeof document !== "undefined" && document.querySelector('script[src*="_ds_bundle"]');
    ROOT = s ? s.src.split("_ds_bundle")[0] : "";
  }
  return ROOT;
}
function TokenIcon({
  token = "VARA",
  size = 28,
  style
}) {
  const e = M[token] || ["?", "--text-3", null];
  const [err, setErr] = React.useState(false);
  const c = "var(" + e[1] + ")";
  if (e[2] && !err) return /*#__PURE__*/React.createElement("img", {
    src: root() + "assets/tokens/" + e[2] + ".png",
    alt: token,
    onError: () => setErr(true),
    style: {
      width: size,
      height: size,
      minWidth: size,
      borderRadius: "50%",
      display: "inline-block",
      verticalAlign: "middle",
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      minWidth: size,
      borderRadius: 99,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: size * .44,
      color: c,
      background: "color-mix(in srgb," + c + " 16%,transparent)",
      border: "1px solid color-mix(in srgb," + c + " 45%,transparent)",
      ...style
    }
  }, e[0]);
}
function TokenBadge({
  token = "VARA",
  size = 28,
  showName = true,
  sub,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(TokenIcon, {
    token: token,
    size: size
  }), showName ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      fontSize: Math.max(12, size * .5)
    }
  }, token), sub ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: "var(--text-3)"
    }
  }, sub) : null) : null);
}
Object.assign(__ds_scope, { TokenIcon, TokenBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TokenBadge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const css = ".t-dlg-ov{position:fixed;inset:0;background:rgba(4,4,12,.74);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);z-index:100;display:flex;align-items:center;justify-content:center;padding:24px;animation:tdlgf var(--dur-2) var(--ease-out)}.t-dlg{background:var(--ink-800);border:1px solid var(--line-2);border-radius:var(--r-xl);box-shadow:var(--shadow-pop);padding:24px;max-height:86vh;overflow:auto;animation:tdlgr var(--dur-2) var(--ease-out)}@keyframes tdlgf{from{opacity:0}}@keyframes tdlgr{from{opacity:0;transform:translateY(10px)}}.t-dlg-x{width:30px;height:30px;border:none;background:transparent;border-radius:8px;cursor:pointer;position:relative;flex-shrink:0}.t-dlg-x:hover{background:rgba(163,164,255,.09)}.t-dlg-x::before,.t-dlg-x::after{content:'';position:absolute;left:8px;right:8px;top:14px;height:1.5px;background:var(--text-2)}.t-dlg-x::before{transform:rotate(45deg)}.t-dlg-x::after{transform:rotate(-45deg)}";
const _i = () => {
  if (typeof document !== "undefined" && !document.getElementById("t-dlg-css")) {
    const s = document.createElement("style");
    s.id = "t-dlg-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
};
function Dialog({
  open,
  onClose,
  title,
  width = 440,
  children,
  footer
}) {
  _i();
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "t-dlg-ov",
    onClick: e => {
      if (e.target === e.currentTarget && onClose) onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-dlg",
    role: "dialog",
    "aria-modal": "true",
    style: {
      width,
      maxWidth: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 20,
      letterSpacing: "var(--ls-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    className: "t-dlg-x",
    "aria-label": "Close",
    onClick: onClose
  })), /*#__PURE__*/React.createElement("div", null, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      justifyContent: "flex-end",
      marginTop: 20
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const T = {
  ok: "var(--ok)",
  warn: "var(--warn)",
  danger: "var(--danger)",
  info: "var(--info)"
};
const css = "@keyframes ttoast{from{opacity:0;transform:translateY(8px)}}";
const _i = () => {
  if (typeof document !== "undefined" && !document.getElementById("t-toast-css")) {
    const s = document.createElement("style");
    s.id = "t-toast-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
};
function Toast({
  tone = "ok",
  title,
  detail,
  action,
  onDismiss,
  floating,
  style
}) {
  _i();
  const c = T[tone] || T.ok;
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: "flex",
      gap: 11,
      alignItems: "flex-start",
      width: 330,
      padding: "13px 14px",
      background: "var(--ink-750)",
      border: "1px solid var(--line-2)",
      borderRadius: "var(--r-md)",
      boxShadow: "var(--shadow-pop)",
      animation: "ttoast var(--dur-2) var(--ease-out)",
      ...(floating ? {
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 120
      } : {}),
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 99,
      background: c,
      boxShadow: "0 0 10px " + c,
      marginTop: 5,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: 600,
      color: "var(--text-1)"
    }
  }, title), detail ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--text-2)",
      lineHeight: 1.5
    }
  }, detail) : null, action || null), onDismiss ? /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    style: {
      border: "none",
      background: "transparent",
      color: "var(--text-3)",
      cursor: "pointer",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      padding: 2
    }
  }, "\u2715") : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const css = ".t-tip{position:relative;display:inline-flex}.t-tip-b{position:absolute;left:50%;bottom:calc(100% + 8px);transform:translateX(-50%) translateY(3px);background:var(--ink-700);border:1px solid var(--line-2);color:var(--text-1);font-size:12px;line-height:1.45;padding:7px 10px;border-radius:8px;white-space:nowrap;max-width:260px;white-space:normal;width:max-content;opacity:0;pointer-events:none;transition:opacity var(--dur-1) var(--ease-out),transform var(--dur-1) var(--ease-out);z-index:50;box-shadow:var(--shadow-pop)}.t-tip:hover .t-tip-b,.t-tip:focus-within .t-tip-b{opacity:1;transform:translateX(-50%) translateY(0)}";
const _i = () => {
  if (typeof document !== "undefined" && !document.getElementById("t-tip-css")) {
    const s = document.createElement("style");
    s.id = "t-tip-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
};
function Tooltip({
  label,
  children,
  style
}) {
  _i();
  return /*#__PURE__*/React.createElement("span", {
    className: "t-tip",
    tabIndex: 0,
    style: style
  }, /*#__PURE__*/React.createElement("span", {
    className: "t-tip-b"
  }, label), children);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/AmountField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = ".t-amt{background:var(--surface-input);border:1px solid var(--line-2);border-radius:var(--r-md);padding:14px 16px;display:flex;flex-direction:column;gap:8px;transition:border-color var(--dur-1) var(--ease-out),box-shadow var(--dur-1) var(--ease-out)}.t-amt:focus-within{border-color:var(--accent-line);box-shadow:var(--focus-ring)}.t-amt input{background:transparent;border:none;outline:none;color:var(--text-1);font-family:var(--font-mono);font-weight:500;font-size:28px;letter-spacing:var(--ls-num);min-width:0;flex:1;padding:0}.t-amt input::placeholder{color:var(--text-3)}.t-amt-x{display:flex;justify-content:space-between;align-items:center;font-size:var(--fs-xs);color:var(--text-3)}.t-amt-max{height:24px;padding:0 9px;border-radius:99px;border:1px solid var(--accent-line);background:var(--accent-soft);color:var(--tide-300);font-family:var(--font-mono);font-size:11px;font-weight:500;cursor:pointer;letter-spacing:.06em}.t-amt-max:hover{background:rgba(139,140,255,.28)}";
const _i = () => {
  if (typeof document !== "undefined" && !document.getElementById("t-amt-css")) {
    const s = document.createElement("style");
    s.id = "t-amt-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
};
function AmountField({
  label = "Amount",
  token = "VARA",
  balance,
  value,
  onChange,
  onMax,
  fiat,
  hint,
  style,
  ...rest
}) {
  _i();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "t-amt",
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "t-amt-x"
  }, /*#__PURE__*/React.createElement("span", null, label), balance != null ? /*#__PURE__*/React.createElement("span", null, "Balance ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--text-2)"
    }
  }, balance)) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    inputMode: "decimal",
    placeholder: "0.00",
    value: value,
    onChange: e => onChange && onChange(e.target.value)
  }), onMax ? /*#__PURE__*/React.createElement("button", {
    className: "t-amt-max",
    onClick: onMax
  }, "MAX") : null, /*#__PURE__*/React.createElement(__ds_scope.TokenBadge, {
    token: token,
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    className: "t-amt-x"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)"
    }
  }, fiat || ""), /*#__PURE__*/React.createElement("span", null, hint || "")));
}
Object.assign(__ds_scope, { AmountField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/AmountField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const css = ".t-in{display:flex;flex-direction:column;gap:7px}.t-in-l{font-size:var(--fs-xs);color:var(--text-3)}.t-in-b{display:flex;align-items:center;gap:10px;background:var(--surface-input);border:1px solid var(--line-2);border-radius:var(--r-sm);padding:0 12px;transition:border-color var(--dur-1) var(--ease-out),box-shadow var(--dur-1) var(--ease-out)}.t-in-b:focus-within{border-color:var(--accent-line);box-shadow:var(--focus-ring)}.t-in-b input{flex:1;background:transparent;border:none;outline:none;color:var(--text-1);font-family:var(--font-body);font-size:var(--fs-sm);min-width:0}.t-in-b input::placeholder{color:var(--text-3)}.t-in-err>.t-in-b{border-color:rgba(255,107,122,.55)}.t-in-msg{font-size:var(--fs-xs);color:var(--text-3)}.t-in-err>.t-in-msg{color:var(--danger)}";
const _i = () => {
  if (typeof document !== "undefined" && !document.getElementById("t-in-css")) {
    const s = document.createElement("style");
    s.id = "t-in-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
};
function Input({
  label,
  hint,
  error,
  prefix,
  suffix,
  size = "md",
  style,
  ...rest
}) {
  _i();
  const H = size === "lg" ? 46 : 38;
  return /*#__PURE__*/React.createElement("div", {
    className: "t-in" + (error ? " t-in-err" : ""),
    style: style
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "t-in-l"
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: "t-in-b",
    style: {
      height: H
    }
  }, prefix || null, /*#__PURE__*/React.createElement("input", rest), suffix || null), error || hint ? /*#__PURE__*/React.createElement("span", {
    className: "t-in-msg"
  }, error || hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = ".t-sel{position:relative;display:inline-flex;align-items:center}.t-sel select{appearance:none;-webkit-appearance:none;background:var(--surface-input);border:1px solid var(--line-2);border-radius:var(--r-sm);color:var(--text-1);font-family:var(--font-body);font-size:var(--fs-sm);height:38px;padding:0 34px 0 12px;cursor:pointer;outline:none;transition:border-color var(--dur-1) var(--ease-out)}.t-sel select:hover{border-color:var(--line-3)}.t-sel select:focus-visible{border-color:var(--accent-line);box-shadow:var(--focus-ring)}.t-sel::after{content:'';position:absolute;right:14px;width:7px;height:7px;border-right:1.5px solid var(--text-3);border-bottom:1.5px solid var(--text-3);transform:rotate(45deg) translateY(-2px);pointer-events:none}";
const _i = () => {
  if (typeof document !== "undefined" && !document.getElementById("t-sel-css")) {
    const s = document.createElement("style");
    s.id = "t-sel-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
};
function Select({
  options = [],
  block,
  style,
  ...rest
}) {
  _i();
  return /*#__PURE__*/React.createElement("span", {
    className: "t-sel",
    style: {
      width: block ? "100%" : undefined,
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    style: {
      width: block ? "100%" : undefined
    }
  }, rest), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked,
  onChange,
  label,
  disabled,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? .45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    role: "switch",
    "aria-checked": !!checked,
    tabIndex: 0,
    onKeyDown: e => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        !disabled && onChange && onChange(!checked);
      }
    },
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      position: "relative",
      width: 40,
      height: 22,
      borderRadius: 99,
      background: checked ? "var(--tide-500)" : "var(--ink-600)",
      boxShadow: checked ? "var(--glow-tide)" : "inset 0 1px 2px rgba(0,0,0,.4)",
      transition: "background var(--dur-2) var(--ease-out),box-shadow var(--dur-2) var(--ease-out)",
      flexShrink: 0
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? 21 : 3,
      width: 16,
      height: 16,
      borderRadius: 99,
      background: checked ? "var(--ink-950)" : "var(--text-2)",
      transition: "left var(--dur-2) var(--ease-spring),background var(--dur-2) var(--ease-out)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--text-2)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const css = ".t-tabs{display:inline-flex;gap:3px;background:var(--surface-input);border:1px solid var(--line-2);border-radius:var(--r-sm);padding:3px}.t-tab{display:inline-flex;align-items:center;justify-content:center;gap:7px;height:34px;padding:0 16px;border:none;border-radius:8px;background:transparent;color:var(--text-3);font-family:var(--font-body);font-weight:500;font-size:var(--fs-sm);cursor:pointer;transition:all var(--dur-1) var(--ease-out);white-space:nowrap}.t-tab:hover{color:var(--text-2)}.t-tab[data-on=true]{background:var(--ink-700);color:var(--text-1);box-shadow:inset 0 0 0 1px var(--line-2),inset 0 1px 0 rgba(234,245,255,.05)}.t-tab:focus-visible{outline:none;box-shadow:var(--focus-ring)}";
const _i = () => {
  if (typeof document !== "undefined" && !document.getElementById("t-tabs-css")) {
    const s = document.createElement("style");
    s.id = "t-tabs-css";
    s.textContent = css;
    document.head.appendChild(s);
  }
};
function Tabs({
  items = [],
  active,
  onChange,
  block,
  style,
  ...rest
}) {
  _i();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "t-tabs",
    role: "tablist",
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : undefined,
      ...style
    }
  }, rest), items.map(it => {
    const o = typeof it === "string" ? {
      id: it,
      label: it
    } : it;
    return /*#__PURE__*/React.createElement("button", {
      key: o.id,
      role: "tab",
      "aria-selected": active === o.id,
      "data-on": active === o.id ? "true" : undefined,
      className: "t-tab",
      style: {
        flex: block ? 1 : undefined
      },
      onClick: () => onChange && onChange(o.id)
    }, o.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppShell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge
} = window.TideDesignSystem_f6b246;
const APP = {
  rate: 1.0482,
  stakeApy: 14.2,
  vaultApy: {
    USDT: 8.4,
    USDC: 7.9
  },
  tvl: "$12.4M",
  buffer: 7.2,
  eraEnds: "6h 32m",
  era: "4,182",
  wallet: "vara1qxt…8k2e",
  balances: {
    VARA: 1240.52,
    tideVARA: 0,
    wUSDT: 500,
    wUSDC: 0,
    tideUSDT: 0,
    tideUSDC: 0
  },
  price: 0.052
};
const fmt = (n, d = 2) => Number(n).toLocaleString("en-US", {
  minimumFractionDigits: d,
  maximumFractionDigits: d
});
const usd = n => "$" + fmt(n * APP.price);
function ABento({
  children,
  pad = 22,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "relative",
      borderRadius: 24,
      border: "1px solid rgba(163,164,255,.16)",
      background: "linear-gradient(180deg,rgba(139,140,255,.09),rgba(28,23,41,.4) 60%,rgba(23,18,33,.2))",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,.05), 0 26px 60px -28px rgba(0,0,0,.7)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ap-stars"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: pad,
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
  }, children));
}
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-3)",
      ...style
    }
  }, children);
}
function GlowBar({
  pct,
  height = 6
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height,
      background: "var(--ink-700)",
      borderRadius: 99,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      borderRadius: 99,
      background: "var(--grad-tide)",
      boxShadow: "0 0 12px rgba(163,164,255,.7)"
    }
  }));
}
function NavItem({
  icon,
  label,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    className: active ? undefined : "ap-nav",
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      width: "100%",
      height: 42,
      padding: "0 13px",
      border: "1px solid " + (active ? "rgba(163,164,255,.45)" : "transparent"),
      borderRadius: 12,
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 500,
      transition: "all var(--dur-1) var(--ease-out)",
      background: active ? "linear-gradient(90deg,rgba(139,140,255,.28),rgba(139,140,255,.08))" : "transparent",
      color: active ? "var(--text-1)" : "var(--text-2)",
      boxShadow: active ? "0 0 22px rgba(139,140,255,.25), inset 0 1px 0 rgba(255,255,255,.08)" : "none"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 17,
      height: 17,
      color: active ? "var(--tide-300)" : "currentColor"
    }
  }), label);
}
function Sidebar({
  view,
  setView
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 236,
      minWidth: 236,
      borderRight: "1px solid var(--line-1)",
      background: "linear-gradient(180deg,rgba(33,28,48,.6),var(--bg-deep) 30%)",
      display: "flex",
      flexDirection: "column",
      padding: "22px 14px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "0 12px",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "../landing/index.html",
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 24,
      letterSpacing: "-0.02em",
      color: "var(--text-1)",
      textDecoration: "none"
    }
  }, "tide"), /*#__PURE__*/React.createElement(Badge, {
    size: "sm",
    mono: true
  }, "app")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: "droplets",
    label: "Stake",
    active: view === "stake",
    onClick: () => setView("stake")
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "vault",
    label: "Vaults",
    active: view === "vaults",
    onClick: () => setView("vaults")
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "wallet",
    label: "Portfolio",
    active: view === "portfolio",
    onClick: () => setView("portfolio")
  })), /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      margin: "24px 13px 8px"
    }
  }, "Resources"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(NavItem, {
    icon: "book-open",
    label: "Docs"
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "shield-check",
    label: "Audits"
  }), /*#__PURE__*/React.createElement(NavItem, {
    icon: "arrow-left",
    label: "Back to site",
    onClick: () => {
      window.location.href = "../landing/index.html";
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement(ABento, {
    pad: 14
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      fontSize: 12.5,
      color: "var(--text-1)",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 99,
      background: "var(--ok)",
      boxShadow: "0 0 10px var(--ok)"
    }
  }), "Vara \xB7 mainnet"), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "10px 0 6px"
    }
  }, /*#__PURE__*/React.createElement(GlowBar, {
    pct: 46,
    height: 5
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "var(--text-3)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "era ", APP.era), /*#__PURE__*/React.createElement("span", null, "ends ", APP.eraEnds)))));
}
function TopBar({
  title,
  sub,
  connected,
  onConnect
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 70,
      borderBottom: "1px solid var(--line-1)",
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "0 30px",
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "rgba(23,18,33,.72)",
      backdropFilter: "blur(16px)",
      WebkitBackdropFilter: "blur(16px)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 19,
      letterSpacing: "var(--ls-heading)",
      lineHeight: 1.2
    }
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--text-3)"
    }
  }, sub)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-3)",
      border: "1px solid var(--line-2)",
      borderRadius: 99,
      padding: "7px 13px",
      background: "rgba(33,28,48,.6)"
    }
  }, "1 tideVARA = ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--tide-300)"
    }
  }, APP.rate), " VARA"), connected ? /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    mono: true,
    dot: true
  }, APP.wallet) : /*#__PURE__*/React.createElement(Button, {
    size: "md",
    onClick: onConnect
  }, "Connect wallet"));
}
Object.assign(window, {
  APP,
  fmt,
  usd,
  ABento,
  Eyebrow,
  GlowBar,
  Sidebar,
  TopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/PortfolioView.jsx
try { (() => {
const {
  Badge,
  Stat,
  TokenBadge,
  Button
} = window.TideDesignSystem_f6b246;
const {
  APP,
  fmt,
  usd,
  ABento,
  Eyebrow
} = window;
function PortfolioView({
  bal,
  setView
}) {
  const stakedV = bal.tideVARA * APP.rate;
  const stableV = bal.tideUSDT * 1.0261 + bal.tideUSDC * 1.0193;
  const totalUsd = stakedV * APP.price + stableV + (bal.unbonding || 0) * APP.price;
  const rows = [{
    tok: "tideVARA",
    amt: bal.tideVARA,
    rate: APP.rate,
    val: usd(stakedV),
    apy: APP.stakeApy + "%",
    status: ["accent", "earning"]
  }, {
    tok: "tideUSDT",
    amt: bal.tideUSDT,
    rate: 1.0261,
    val: "$" + fmt(bal.tideUSDT * 1.0261),
    apy: APP.vaultApy.USDT + "%",
    status: ["ok", "accruing"]
  }, {
    tok: "tideUSDC",
    amt: bal.tideUSDC,
    rate: 1.0193,
    val: "$" + fmt(bal.tideUSDC * 1.0193),
    apy: APP.vaultApy.USDC + "%",
    status: ["ok", "accruing"]
  }].filter(r => r.amt > 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(ABento, {
    pad: 20
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Total value",
    value: "$" + fmt(totalUsd),
    size: "sm",
    gradient: true
  })), /*#__PURE__*/React.createElement(ABento, {
    pad: 20
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Staked",
    value: fmt(bal.tideVARA) + " tideVARA",
    size: "sm",
    mono: true,
    sub: "≈ " + fmt(stakedV) + " VARA"
  })), /*#__PURE__*/React.createElement(ABento, {
    pad: 20
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "In vaults",
    value: "$" + fmt(stableV),
    size: "sm",
    mono: true
  })), /*#__PURE__*/React.createElement(ABento, {
    pad: 20
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Unbonding",
    value: fmt(bal.unbonding || 0) + " VARA",
    size: "sm",
    mono: true,
    sub: bal.unbonding ? "claimable in 6d 23h" : "—"
  }))), /*#__PURE__*/React.createElement(ABento, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 26px 14px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 18
    }
  }, "Positions"), /*#__PURE__*/React.createElement(Badge, {
    size: "sm",
    mono: true
  }, rows.length, " active")), rows.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "40px 24px 48px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-3)",
      fontSize: 14
    }
  }, "No positions yet \u2014 the rate can't rise for a balance of zero."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      justifyContent: "center",
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "md",
    onClick: () => setView("stake")
  }, "Stake VARA"), /*#__PURE__*/React.createElement(Button, {
    size: "md",
    variant: "secondary",
    onClick: () => setView("vaults")
  }, "Explore vaults"))) : /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ["Asset", "Balance", "Rate / share", "Value", "APY", "Status"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: "left",
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-3)",
      fontWeight: 500,
      padding: "10px 26px",
      borderBottom: "1px solid var(--line-2)"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(r => /*#__PURE__*/React.createElement("tr", {
    key: r.tok,
    className: "ap-row"
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 26px"
    }
  }, /*#__PURE__*/React.createElement(TokenBadge, {
    token: r.tok,
    size: 30
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 26px",
      fontFamily: "var(--font-mono)",
      fontSize: 13.5
    }
  }, fmt(r.amt)), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 26px",
      fontFamily: "var(--font-mono)",
      fontSize: 13.5,
      color: "var(--text-2)"
    }
  }, r.rate), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 26px",
      fontFamily: "var(--font-mono)",
      fontSize: 13.5
    }
  }, r.val), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 26px",
      fontFamily: "var(--font-mono)",
      fontSize: 13.5,
      color: "var(--tide-300)"
    }
  }, r.apy), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "14px 26px"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: r.status[0],
    size: "sm",
    dot: true
  }, r.status[1])))))), bal.unbonding > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 26px",
      borderTop: "1px solid var(--line-1)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "info",
    dot: true,
    size: "sm"
  }, "Unbonding"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-2)"
    }
  }, fmt(bal.unbonding), " VARA at full rate")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-3)"
    }
  }, "claim in 6d 23h"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-3)"
    }
  }, "Balances are illustrative. Yield is embedded in rates \u2014 no claiming, ever."));
}
Object.assign(window, {
  PortfolioView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/PortfolioView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/StakeView.jsx
try { (() => {
const {
  Badge,
  Tabs,
  AmountField,
  Button,
  TokenBadge
} = window.TideDesignSystem_f6b246;
const {
  APP,
  fmt,
  usd,
  ABento,
  Eyebrow
} = window;
function Row({
  k,
  v,
  accent,
  tip
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 0",
      fontSize: 13.5,
      borderTop: "1px solid var(--line-1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-3)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: accent ? "var(--tide-300)" : "var(--text-1)"
    }
  }, v));
}
function IRow({
  icon,
  k,
  v,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "11px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      minWidth: 32,
      borderRadius: 99,
      background: "var(--surface-raised)",
      border: "1px solid var(--line-1)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-2)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": icon,
    style: {
      width: 14,
      height: 14
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--text-2)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: 15,
      color: accent ? "var(--tide-300)" : "var(--text-1)"
    }
  }, v));
}
function ExitOption({
  title,
  sub,
  active,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      flex: 1,
      textAlign: "left",
      cursor: "pointer",
      background: active ? "var(--accent-soft)" : "var(--surface-input)",
      border: "1px solid " + (active ? "var(--accent-line)" : "var(--line-2)"),
      borderRadius: 12,
      padding: "11px 14px",
      transition: "all var(--dur-1) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: active ? "var(--tide-300)" : "var(--text-1)",
      fontFamily: "var(--font-body)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--text-3)",
      marginTop: 3
    }
  }, sub));
}
function StakeView({
  bal,
  setBal,
  notify,
  connected,
  onConnect
}) {
  const [tab, setTab] = React.useState("Stake");
  const [amt, setAmt] = React.useState("");
  const [path, setPath] = React.useState("instant");
  React.useEffect(() => {
    if (window.lucide) lucide.createIcons();
  }, [tab, path]);
  const a = parseFloat(amt) || 0;
  const out = tab === "Stake" ? a / APP.rate : path === "instant" ? a * APP.rate * 0.997 : a * APP.rate;
  const can = a > 0 && a <= (tab === "Stake" ? bal.VARA : bal.tideVARA);
  const act = () => {
    if (!connected) {
      onConnect();
      return;
    }
    if (tab === "Stake") {
      setBal(b => ({
        ...b,
        VARA: b.VARA - a,
        tideVARA: b.tideVARA + out
      }));
      notify({
        tone: "ok",
        title: "Staked " + fmt(a) + " VARA",
        detail: "You received " + fmt(out) + " tideVARA at rate " + APP.rate + "."
      });
    } else if (path === "instant") {
      setBal(b => ({
        ...b,
        tideVARA: b.tideVARA - a,
        VARA: b.VARA + out
      }));
      notify({
        tone: "ok",
        title: "Unstaked instantly",
        detail: fmt(out) + " VARA received · 0.3% fee applied."
      });
    } else {
      setBal(b => ({
        ...b,
        tideVARA: b.tideVARA - a,
        unbonding: (b.unbonding || 0) + out
      }));
      notify({
        tone: "info",
        title: "Unbond started",
        detail: fmt(out) + " VARA claimable in 7 days at full rate."
      });
    }
    setAmt("");
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 344px",
      gap: 20,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      background: "var(--surface-card)",
      border: "1px solid var(--line-1)",
      borderRadius: 16,
      padding: "12px 18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 99,
      background: "var(--surface-raised)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-2)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "wallet",
    style: {
      width: 14,
      height: 14
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      color: "var(--text-2)"
    }
  }, "Wallet balance"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-mono)",
      fontSize: 14
    }
  }, fmt(bal.VARA), " VARA ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-3)"
    }
  }, "( ", usd(bal.VARA), " )"))), /*#__PURE__*/React.createElement(ABento, {
    pad: 24
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: ["Stake", "Unstake"],
    active: tab,
    onChange: t => {
      setTab(t);
      setAmt("");
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(AmountField, {
    label: tab === "Stake" ? "You stake" : "You unstake",
    token: tab === "Stake" ? "VARA" : "tideVARA",
    balance: fmt(tab === "Stake" ? bal.VARA : bal.tideVARA),
    value: amt,
    onChange: setAmt,
    onMax: () => setAmt(String(tab === "Stake" ? bal.VARA : bal.tideVARA)),
    fiat: a ? "≈ " + usd(tab === "Stake" ? a : a * APP.rate) : ""
  })), tab === "Unstake" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(ExitOption, {
    title: "Instant",
    sub: "~0.3% fee \xB7 now",
    active: path === "instant",
    onClick: () => setPath("instant")
  }), /*#__PURE__*/React.createElement(ExitOption, {
    title: "Native unbond",
    sub: "free \xB7 7 days",
    active: path === "native",
    onClick: () => setPath("native")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "10px 0 14px"
    }
  }, /*#__PURE__*/React.createElement(IRow, {
    icon: "pie-chart",
    k: "Position",
    v: fmt(bal.tideVARA) + " tideVARA"
  }), /*#__PURE__*/React.createElement(IRow, {
    icon: "star",
    k: "APY",
    v: APP.stakeApy + "%",
    accent: true
  }), /*#__PURE__*/React.createElement(IRow, {
    icon: "coins",
    k: "You receive",
    v: fmt(out) + (tab === "Stake" ? " tideVARA" : " VARA")
  })), /*#__PURE__*/React.createElement(Button, {
    size: "xl",
    block: true,
    disabled: connected && !can,
    onClick: act
  }, !connected ? "Connect wallet" : tab === "Stake" ? "Stake" : path === "instant" ? "Unstake instantly" : "Start unbond"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 20,
      background: "var(--tide-400)",
      padding: "18px 18px 20px",
      boxShadow: "0 18px 44px -18px rgba(163,164,255,.45)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "rgba(27,23,38,.65)"
    }
  }, "TVL"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 27,
      color: "#1B1726",
      marginTop: 6
    }
  }, APP.tvl)), /*#__PURE__*/React.createElement(ABento, {
    pad: 18
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "APY"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 27,
      marginTop: 6,
      background: "var(--grad-text)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, APP.stakeApy, "%"))), /*#__PURE__*/React.createElement(ABento, {
    pad: 20
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      fontFamily: "var(--font-display)"
    }
  }, "Next compound"), /*#__PURE__*/React.createElement(Badge, {
    size: "sm",
    tone: "info"
  }, "era ", APP.era)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 25
    }
  }, APP.eraEnds), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      color: "var(--text-3)"
    }
  }, "rate ", APP.rate)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      margin: "26px 4px 6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 5,
      height: 2,
      background: "var(--ink-700)",
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      position: "relative"
    }
  }, [["4,179", "1.0471", 0], ["4,180", "1.0476", 0], ["4,181", "1.0482", 1]].map(([e, r, hot]) => /*#__PURE__*/React.createElement("div", {
    key: e,
    style: {
      textAlign: "center",
      position: "relative"
    }
  }, hot ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      top: -26,
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      background: "var(--surface-raised)",
      border: "1px solid var(--accent-line)",
      borderRadius: 7,
      padding: "2px 7px",
      color: "var(--tide-300)",
      whiteSpace: "nowrap"
    }
  }, r) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 12,
      height: 12,
      borderRadius: 99,
      margin: "0 auto",
      background: hot ? "var(--tide-400)" : "var(--ink-600)",
      boxShadow: hot ? "0 0 12px rgba(163,164,255,.9)" : "none",
      border: "2px solid var(--ink-800)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--text-3)",
      marginTop: 7
    }
  }, "era ", e))))))));
}
Object.assign(window, {
  StakeView,
  Row
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/StakeView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/VaultsView.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Badge,
  Stat,
  Meter,
  Button,
  TokenBadge,
  TokenIcon,
  AmountField,
  Dialog
} = window.TideDesignSystem_f6b246;
const {
  APP,
  fmt,
  Row,
  ABento,
  Eyebrow
} = window;
function VaultCard({
  sym,
  apy,
  tvl,
  util,
  share,
  since,
  bal,
  setBal,
  notify,
  connected,
  onConnect
}) {
  const [open, setOpen] = React.useState(false);
  const [amt, setAmt] = React.useState("");
  const dep = "w" + sym,
    rec = "tide" + sym;
  const a = parseFloat(amt) || 0;
  const can = a > 0 && a <= bal[dep];
  const doDep = () => {
    if (!connected) {
      onConnect();
      setOpen(false);
      return;
    }
    setBal(b => ({
      ...b,
      [dep]: b[dep] - a,
      [rec]: b[rec] + a / share
    }));
    notify({
      tone: "ok",
      title: "Deposited " + fmt(a) + " " + dep,
      detail: "You hold " + fmt(a / share) + " " + rec + " · interest accrues to share price."
    });
    setOpen(false);
    setAmt("");
  };
  return /*#__PURE__*/React.createElement(ABento, {
    pad: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(TokenBadge, {
    token: rec,
    size: 38,
    sub: "deposit " + dep
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: util < 80 ? "ok" : "warn",
    size: "sm",
    dot: true
  }, util < 80 ? "healthy" : "near kink")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 14,
      margin: "22px 0 16px"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Deposit APY",
    value: apy + "%",
    size: "sm",
    gradient: true
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Vault TVL",
    value: tvl,
    size: "sm"
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Share price",
    value: share.toFixed(4),
    size: "sm",
    mono: true
  })), /*#__PURE__*/React.createElement(Meter, {
    label: "Utilization",
    value: util,
    marker: 80,
    tone: util < 80 ? "grad" : "danger"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "12px 0 20px"
    }
  }, /*#__PURE__*/React.createElement(Row, {
    k: "Collateral accepted",
    v: "tideVARA only"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    block: true,
    size: "lg",
    onClick: () => setOpen(true)
  }, "Deposit ", dep)), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: () => setOpen(false),
    title: "Deposit " + dep,
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setOpen(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      disabled: connected && !can,
      onClick: doDep
    }, connected ? "Confirm deposit" : "Connect wallet"))
  }, /*#__PURE__*/React.createElement(AmountField, {
    label: "You deposit",
    token: dep,
    balance: fmt(bal[dep]),
    value: amt,
    onChange: setAmt,
    onMax: () => setAmt(String(bal[dep])),
    fiat: a ? "→ " + fmt(a / share) + " " + rec : "",
    hint: "APY " + apy + "%"
  })));
}
function FlowChip({
  tok,
  label
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      background: "rgba(33,28,48,.9)",
      border: "1px solid rgba(163,164,255,.3)",
      borderRadius: 99,
      padding: "8px 14px 8px 9px",
      whiteSpace: "nowrap"
    }
  }, tok ? /*#__PURE__*/React.createElement(TokenIcon, {
    token: tok,
    size: 20
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      fontWeight: 500,
      color: "var(--text-1)"
    }
  }, label));
}
function Arrow() {
  return /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 15,
      height: 15,
      color: "var(--tide-400)",
      opacity: .85,
      flexShrink: 0
    }
  });
}
function VaultsView(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20,
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(VaultCard, _extends({
    sym: "USDT",
    apy: APP.vaultApy.USDT,
    tvl: "$4.2M",
    util: 72,
    share: 1.0261,
    since: "2.61"
  }, props)), /*#__PURE__*/React.createElement(VaultCard, _extends({
    sym: "USDC",
    apy: APP.vaultApy.USDC,
    tvl: "$2.8M",
    util: 64,
    share: 1.0193,
    since: "1.93"
  }, props))), /*#__PURE__*/React.createElement(ABento, {
    pad: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 24,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 20
    }
  }, "Where the yield comes from"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      margin: "16px 0 14px",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(FlowChip, {
    tok: "tideVARA",
    label: "tideVARA collateral"
  }), /*#__PURE__*/React.createElement(Arrow, null), /*#__PURE__*/React.createElement(FlowChip, {
    label: "loopers borrow stables"
  }), /*#__PURE__*/React.createElement(Arrow, null), /*#__PURE__*/React.createElement(FlowChip, {
    label: "interest accrues"
  }), /*#__PURE__*/React.createElement(Arrow, null), /*#__PURE__*/React.createElement(FlowChip, {
    tok: "tideUSDT",
    label: "share price rises"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginTop: 2,
      flexWrap: "wrap"
    }
  }, ["max LTV 50%", "liq. threshold 65%", "penalty 8%", "kink 80%"].map(t => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: ".05em",
      color: "var(--text-3)",
      border: "1px solid var(--line-1)",
      borderRadius: 99,
      padding: "4px 10px"
    }
  }, t)))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => props.notify({
      tone: "info",
      title: "Borrowing opens in v1.1",
      detail: "Loop tideVARA → stables → VARA from a single screen."
    })
  }, "Borrow against tideVARA"))));
}
Object.assign(window, {
  VaultsView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/VaultsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Closing.jsx
try { (() => {
const {
  Card,
  Badge,
  Button,
  Stat
} = window.TideDesignSystem_f6b246;
const {
  Sec,
  Wordmark,
  Bento
} = window;
function Parameters() {
  const tiles = [["Max LTV", "50%", "borrow against tideVARA"], ["Liq. threshold", "65%", "price band before seizure"], ["Liq. penalty", "8%", "bounty + insurance fund"], ["Utilization kink", "80%", "rate curve turns steep"], ["Buffer target", "5–10%", "of staked TVL, instant exits"], ["Reward fee", "10%", "of era rewards"]];
  return /*#__PURE__*/React.createElement(Sec, {
    id: "security",
    eyebrow: "Risk, stated plainly",
    title: "Conservative by design.",
    sub: "VARA is a young, low-liquidity asset. Parameters start tight \u2014 you can loosen later; you can't un-lose bad debt."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 18,
      marginTop: 44
    }
  }, tiles.map(([k, v, s]) => /*#__PURE__*/React.createElement(Bento, {
    key: k,
    pad: 22
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-3)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontWeight: 500,
      fontSize: 28,
      margin: "7px 0 3px",
      color: "var(--tide-300)"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--text-3)"
    }
  }, s)))), /*#__PURE__*/React.createElement(Bento, {
    pad: 30,
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 28
    }
  }, [["Insurance first", "10–15% of borrow interest fills the insurance fund before the treasury sees a token. It backstops slashes and bad debt."], ["Slash defer: 7 days", "Vara defers slashes for a week — a governance window for the fund to react before anything applies."], ["Curated validators", "Nominations spread across a screened set — commission, uptime, slash history. Never nominate blind."]].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 17
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: "var(--text-2)",
      marginTop: 7,
      lineHeight: 1.6
    }
  }, d))))));
}
function FAQ() {
  const qs = [["Why tideVARA and not stVARA?", "Nobody “stakes” USDT — st would be a lie on the stable side. One brand prefix truthfully means “Tide's yield-bearing receipt” for every asset, and every token in every wallet is an ad for the protocol. gVARA and wVARA are already taken on Vara anyway."], ["Where does the stable yield actually come from?", "Borrow interest. Each vault lends into an isolated market where tideVARA is the only collateral. Borrowers are leverage stakers amplifying staking yield — they pay the interest your share price accrues."], ["What happens if VARA's price drops fast?", "Positions crossing the 65% liquidation threshold are repaid by liquidators who seize tideVARA at an 8% discount. Bad debt occurs only if price gaps through the band faster than bots act — which is why LTV starts at a conservative 50%."], ["Why doesn't my balance go up?", "tideVARA is non-rebasing: your balance is fixed and the redemption rate rises instead. Rebasing tokens break DEX pools, bridges and lending markets; a rising rate composes with everything."], ["I hold less than 50 VARA. Can I stake?", "Yes — 50 VARA is Vara's minimum nomination, so the protocol pools below-minimum deposits and nominates them together. That's the point."]];
  return /*#__PURE__*/React.createElement(Sec, {
    id: "faq",
    eyebrow: "FAQ",
    title: "Fair questions."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      marginTop: 28
    }
  }, qs.map(([q, a]) => /*#__PURE__*/React.createElement("details", {
    className: "ld-faq",
    key: q
  }, /*#__PURE__*/React.createElement("summary", null, q), /*#__PURE__*/React.createElement("p", null, a)))));
}
function CTABand() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "96px auto 0",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement(Bento, {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--dot-grid)",
      backgroundSize: "var(--dot-grid-size)",
      maskImage: "radial-gradient(560px 260px at 50% 110%,#000,transparent)",
      WebkitMaskImage: "radial-gradient(560px 260px at 50% 110%,#000,transparent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      bottom: -160,
      transform: "translateX(-50%)",
      width: 700,
      height: 340,
      background: "radial-gradient(closest-side,rgba(139,140,255,.24),transparent)",
      filter: "blur(14px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "76px 32px 80px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--fs-h2)",
      fontWeight: 600,
      letterSpacing: "var(--ls-display)"
    }
  }, "Put your VARA to work."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--text-2)",
      margin: "14px auto 0",
      maxWidth: "52ch",
      lineHeight: 1.65
    }
  }, "Stake in one transaction. Exit instantly or unbond natively. The rate does the rest."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "xl",
    href: "../app/index.html"
  }, "Launch app"), /*#__PURE__*/React.createElement(Button, {
    size: "xl",
    variant: "ghost"
  }, "Read the docs")))));
}
function Footer() {
  const col = (t, ls) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-3)",
      marginBottom: 14
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, ls.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    className: "ld-link",
    href: "#top",
    style: {
      fontSize: 13.5
    }
  }, l))));
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 96,
      background: "var(--bg-deep)",
      borderTop: "1px solid var(--line-1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "56px 32px 36px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    size: 26
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: "var(--text-3)",
      marginTop: 12,
      maxWidth: "34ch",
      lineHeight: 1.6
    }
  }, "Liquid staking and stable yield on Vara Network. Two sides, one engine.")), col("Protocol", ["Stake", "Vaults", "Analytics", "Insurance fund"]), col("Resources", ["Docs", "Audits", "GitHub", "Brand"]), col("Community", ["X", "Discord", "Telegram", "Governance"])), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 44,
      paddingTop: 20,
      borderTop: "1px solid var(--line-1)",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--text-3)",
      flexWrap: "wrap",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "tideVARA \xB7 vara1qxt\u20268k2e"), /*#__PURE__*/React.createElement("span", null, "Figures shown are illustrative. Staking involves slashing and liquidation risk."), /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Tide Labs \xB7 Built on Vara"))));
}
Object.assign(window, {
  Parameters,
  FAQ,
  CTABand,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Closing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Hero.jsx
try { (() => {
const {
  Button,
  TokenIcon
} = window.TideDesignSystem_f6b246;
const TRACE = "rgba(163,164,255,.4)";
function Tile({
  token,
  title,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    title: title,
    style: {
      position: "absolute",
      width: 92,
      height: 92,
      borderRadius: 22,
      background: "linear-gradient(180deg,#2A2440,#1B1626)",
      border: "1.5px solid rgba(163,164,255,.5)",
      boxShadow: "0 0 26px rgba(139,140,255,.28), inset 0 1px 0 rgba(255,255,255,.06)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 3,
      ...style
    }
  }, /*#__PURE__*/React.createElement(TokenIcon, {
    token: token,
    size: 52,
    style: {
      filter: "drop-shadow(0 0 14px rgba(139,140,255,.55))"
    }
  }));
}
function Traces() {
  const L = s => /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      ...s
    }
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, L({
    left: 132,
    top: 66,
    width: 332,
    height: 86,
    borderTop: "1.5px solid " + TRACE,
    borderRight: "1.5px solid " + TRACE,
    borderTopRightRadius: 40
  }), L({
    left: 464,
    top: 151,
    width: 68,
    borderTop: "1.5px solid " + TRACE
  }), L({
    left: 112,
    top: 178,
    width: 368,
    height: 101,
    borderBottom: "1.5px solid " + TRACE,
    borderRight: "1.5px solid " + TRACE,
    borderBottomRightRadius: 40
  }), L({
    left: 480,
    top: 177,
    width: 52,
    borderTop: "1.5px solid " + TRACE
  }), L({
    left: 152,
    top: 208,
    width: 304,
    height: 259,
    borderBottom: "1.5px solid " + TRACE,
    borderRight: "1.5px solid " + TRACE,
    borderBottomRightRadius: 44
  }), L({
    left: 456,
    top: 207,
    width: 76,
    borderTop: "1.5px solid " + TRACE
  }), /*#__PURE__*/React.createElement("span", {
    className: "bd-streak",
    style: {
      left: 140,
      top: 64,
      "--d": "280px",
      animationDelay: ".2s"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "bd-streak",
    style: {
      left: 120,
      top: 276,
      "--d": "300px",
      animationDelay: "1.6s"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "bd-streak",
    style: {
      left: 160,
      top: 464,
      "--d": "250px",
      animationDelay: "2.7s"
    }
  }));
}
function Chip() {
  const pads = [.14, .3, .18, .42, .22, .34, .16, .26, .4, .2, .24, .38, .15, .3, .44, .18, .36, .22, .28, .16, .4, .2, .32, .14, .26];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 524,
      top: 90,
      width: 192,
      height: 192,
      borderRadius: 30,
      background: "linear-gradient(180deg,#9FA0F2,#6E6EE6)",
      padding: 9,
      boxShadow: "0 0 70px rgba(139,140,255,.55), 0 0 0 1.5px rgba(163,164,255,.6), inset 0 1px 0 rgba(255,255,255,.25)",
      zIndex: 4
    }
  }, [40, 93, 146].map(y => /*#__PURE__*/React.createElement("span", {
    key: "l" + y,
    style: {
      position: "absolute",
      left: -15,
      top: y,
      width: 15,
      height: 5,
      borderRadius: 3,
      background: "#5D5794"
    }
  })), [40, 93, 146].map(y => /*#__PURE__*/React.createElement("span", {
    key: "r" + y,
    style: {
      position: "absolute",
      right: -15,
      top: y,
      width: 15,
      height: 5,
      borderRadius: 3,
      background: "#5D5794"
    }
  })), [38, 72, 106, 140, 174].map(x => /*#__PURE__*/React.createElement("span", {
    key: "b" + x,
    style: {
      position: "absolute",
      bottom: -15,
      left: x,
      width: 5,
      height: 15,
      borderRadius: 3,
      background: "#5D5794"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "100%",
      borderRadius: 22,
      background: "#211C30",
      boxShadow: "inset 0 2px 10px rgba(0,0,0,.6)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 10,
      display: "grid",
      gridTemplateColumns: "repeat(5,1fr)",
      gap: 6
    }
  }, pads.map((o, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      borderRadius: 4,
      background: "rgba(163,164,255," + o + ")"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      width: 82,
      height: 82,
      borderRadius: 16,
      background: "#171221",
      border: "1px solid rgba(163,164,255,.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0 22px rgba(139,140,255,.45)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 26,
      letterSpacing: "-0.02em",
      background: "var(--grad-text)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, "tide"))));
}
function CircuitBoard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1240,
      height: 566,
      margin: "64px auto 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: 120,
      transform: "translateX(-50%)",
      width: 760,
      height: 420,
      background: "radial-gradient(closest-side,rgba(139,140,255,.2),transparent)",
      filter: "blur(18px)"
    }
  }), /*#__PURE__*/React.createElement(Traces, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      transform: "scaleX(-1)"
    }
  }, /*#__PURE__*/React.createElement(Traces, null)), /*#__PURE__*/React.createElement(Chip, null), [[560, 26], [588, 26], [616, 26], [644, 26], [672, 26]].map(([x], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      left: 560 + i * 28,
      top: 284,
      width: 1.5,
      height: 236,
      background: "linear-gradient(180deg,rgba(163,164,255,.45),transparent)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "bd-fall",
    style: {
      left: 615,
      top: 300,
      animationDelay: ".8s"
    }
  }), /*#__PURE__*/React.createElement(Tile, {
    token: "VARA",
    title: "VARA \u2014 you deposit",
    style: {
      left: 40,
      top: 20
    }
  }), /*#__PURE__*/React.createElement(Tile, {
    token: "wUSDT",
    title: "wUSDT \u2014 you deposit",
    style: {
      left: 20,
      top: 232
    }
  }), /*#__PURE__*/React.createElement(Tile, {
    token: "wUSDC",
    title: "wUSDC \u2014 you deposit",
    style: {
      left: 60,
      top: 420
    }
  }), /*#__PURE__*/React.createElement(Tile, {
    token: "tideVARA",
    title: "tideVARA \u2014 you receive",
    style: {
      right: 40,
      top: 20
    }
  }), /*#__PURE__*/React.createElement(Tile, {
    token: "tideUSDT",
    title: "tideUSDT \u2014 you receive",
    style: {
      right: 20,
      top: 232
    }
  }), /*#__PURE__*/React.createElement(Tile, {
    token: "tideUSDC",
    title: "tideUSDC \u2014 you receive",
    style: {
      right: 60,
      top: 420
    }
  }));
}
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "relative",
      overflow: "hidden",
      paddingBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--dot-grid)",
      backgroundSize: "var(--dot-grid-size)",
      maskImage: "radial-gradient(1000px 520px at 50% 6%,#000 25%,transparent)",
      WebkitMaskImage: "radial-gradient(1000px 520px at 50% 6%,#000 25%,transparent)",
      opacity: .65
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: -280,
      transform: "translateX(-50%)",
      width: 1200,
      height: 640,
      background: "radial-gradient(closest-side,rgba(139,140,255,.28),transparent)",
      filter: "blur(28px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "58%",
      top: -60,
      width: 420,
      height: 300,
      background: "radial-gradient(closest-side,rgba(225,225,255,.1),transparent)",
      filter: "blur(24px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1240,
      margin: "0 auto",
      padding: "92px 32px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      height: 46,
      padding: "6px 20px 6px 7px",
      borderRadius: 999,
      background: "rgba(33,28,48,.75)",
      border: "1px solid rgba(163,164,255,.2)",
      marginBottom: 30
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      background: "#332C4E",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#C6C7FF"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "trending-up",
    style: {
      width: 15,
      height: 15
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "#CBC7DD"
    }
  }, "Stake to earn and grow")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--fs-hero)",
      fontWeight: 600,
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)"
    }
  }, "One Stake, Endless", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--grad-text)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, "Opportunities")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17.5,
      color: "#9B95B5",
      margin: "20px auto 0",
      letterSpacing: ".01em"
    }
  }, "The liquid staking standard on Vara."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    href: "../app/index.html",
    style: {
      borderRadius: 12,
      minWidth: 150
    }
  }, "Go to stake"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    href: "#how",
    style: {
      borderRadius: 12,
      minWidth: 150,
      background: "rgba(33,28,48,.7)"
    }
  }, "Learn More")), /*#__PURE__*/React.createElement(CircuitBoard, null)));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Nav.jsx
try { (() => {
const {
  Button
} = window.TideDesignSystem_f6b246;
function Wordmark({
  size = 24,
  color = "var(--text-1)",
  href = "#top"
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: size,
      letterSpacing: "-0.02em",
      color,
      textDecoration: "none",
      lineHeight: 1
    }
  }, "tide");
}
function LandingNav() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 16,
      zIndex: 60,
      padding: "0 36px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1368,
      margin: "0 auto",
      height: 74,
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "0 14px 0 26px",
      background: "rgba(33,28,48,.8)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      border: "1px solid rgba(255,255,255,.06)",
      borderRadius: 14,
      boxShadow: "var(--shadow-card)"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 34,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "ld-link",
    href: "#how"
  }, "Features"), /*#__PURE__*/React.createElement("a", {
    className: "ld-link",
    href: "#tokens"
  }, "Tokens"), /*#__PURE__*/React.createElement("a", {
    className: "ld-link",
    href: "#security"
  }, "Security"), /*#__PURE__*/React.createElement("a", {
    className: "ld-link",
    href: "#faq"
  }, "FAQ")), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    href: "../app/index.html",
    style: {
      borderRadius: 10,
      background: "#2A2440"
    }
  }, "Log in"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    href: "../app/index.html",
    style: {
      borderRadius: 10
    }
  }, "Sign Up")));
}
Object.assign(window, {
  Wordmark,
  LandingNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/Sections.jsx
try { (() => {
const {
  Card,
  Badge,
  Stat,
  TokenBadge,
  TokenIcon,
  Meter
} = window.TideDesignSystem_f6b246;
function Sec({
  id,
  eyebrow,
  title,
  sub,
  children,
  right
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "104px 32px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-label)",
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--tide-400)",
      marginBottom: 14
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 46,
      fontWeight: 600,
      letterSpacing: "var(--ls-display)",
      lineHeight: 1.16,
      maxWidth: "18ch"
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--text-2)",
      maxWidth: "60ch",
      marginTop: 16,
      lineHeight: 1.65
    }
  }, sub)), right), children);
}
function DotPatch({
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 300,
      height: 130,
      backgroundImage: "var(--dot-grid)",
      backgroundSize: "14px 14px",
      maskImage: "radial-gradient(closest-side,#000 30%,transparent)",
      WebkitMaskImage: "radial-gradient(closest-side,#000 30%,transparent)",
      flexShrink: 0,
      ...style
    }
  });
}
function Bento({
  children,
  pad = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 28,
      border: "1px solid rgba(163,164,255,.16)",
      background: "linear-gradient(180deg,rgba(139,140,255,.10),rgba(28,23,41,.35) 60%,rgba(23,18,33,.15))",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,.05), 0 30px 70px -30px rgba(0,0,0,.7)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ld-stars"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      padding: pad,
      display: "flex",
      flexDirection: "column"
    }
  }, children));
}
function BentoText({
  title,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 27,
      fontWeight: 600,
      letterSpacing: "var(--ls-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-2)",
      marginTop: 10,
      lineHeight: 1.7,
      maxWidth: "46ch"
    }
  }, children));
}
function StatsBand() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 22
    }
  }, [["VARA staked", "8.6M+", "across a curated validator set"], ["tideVARA holders", "12.4K+", "wallets, pools and vaults"], ["Paid to stakers", "940K", "VARA, compounded era by era"]].map(([l, v, s]) => /*#__PURE__*/React.createElement(Bento, {
    key: l,
    pad: 34,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: l,
    value: v,
    sub: s,
    gradient: true,
    size: "lg",
    align: "center"
  })))));
}
function Cube({
  size = 54,
  style
}) {
  const F = (pts, bg) => /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      clipPath: "polygon(" + pts + ")",
      background: bg
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: size,
      height: size * 1.16,
      filter: "drop-shadow(0 8px 16px rgba(139,140,255,.35))",
      ...style
    }
  }, F("50% 0,100% 25%,50% 50%,0 25%", "linear-gradient(135deg,#FFFFFF,#C6C7FF)"), F("100% 25%,100% 75%,50% 100%,50% 50%", "linear-gradient(180deg,#A3A4FF,#7576D8)"), F("0 25%,50% 50%,50% 100%,0 75%", "linear-gradient(180deg,#8B8CFF,#6062C0)"));
}
function Vault() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 196,
      top: 16,
      width: 252,
      height: 316,
      filter: "drop-shadow(0 34px 54px rgba(0,0,0,.55)) drop-shadow(0 0 40px rgba(139,140,255,.25))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: 32,
      background: "linear-gradient(180deg,#8B8CFF,#5F60C8)",
      boxShadow: "inset 0 2px 0 rgba(255,255,255,.22)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -7,
      top: 62,
      width: 13,
      height: 36,
      borderRadius: 7,
      background: "#3A3568"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: -7,
      bottom: 62,
      width: 13,
      height: 36,
      borderRadius: 7,
      background: "#3A3568"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 13,
      borderRadius: 25,
      background: "linear-gradient(160deg,#9EA0FF,#6E6FD8)",
      border: "1px solid rgba(255,255,255,.14)",
      boxShadow: "inset 0 -14px 30px rgba(20,12,70,.45)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 38,
      top: 38,
      width: 66,
      height: 22,
      borderRadius: 99,
      background: "rgba(40,28,110,.5)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 30,
      top: 154,
      width: 50,
      height: 16,
      borderRadius: 99,
      background: "#4A448C",
      boxShadow: "inset 0 2px 3px rgba(0,0,0,.4), 0 1px 0 rgba(255,255,255,.15)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 44,
      top: 140,
      width: 66,
      height: 66,
      borderRadius: 99,
      background: "linear-gradient(180deg,#C6C7FF,#7778E0)",
      border: "5px solid #4A448C",
      boxShadow: "0 0 0 3px rgba(255,255,255,.07), inset 0 2px 4px rgba(255,255,255,.3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 13,
      clipPath: "polygon(50% 0,61% 39%,100% 50%,61% 61%,50% 100%,39% 61%,0 50%,39% 39%)",
      background: "#2A2440"
    }
  })));
}
const WIRE = "rgba(154,130,255,.35)";
function StakeIllo() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 360,
      margin: "26px 0 10px"
    }
  }, [26, 148, 270].map(y => /*#__PURE__*/React.createElement("div", {
    key: y,
    style: {
      position: "absolute",
      left: 36,
      top: y,
      width: 56,
      borderTop: "1.5px solid transparent"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 96,
      top: 57,
      width: 56,
      borderTop: "1.5px solid " + WIRE
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 96,
      top: 179,
      width: 56,
      borderTop: "1.5px solid " + WIRE
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 96,
      top: 301,
      width: 56,
      borderTop: "1.5px solid " + WIRE
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 152,
      top: 57,
      width: 1.5,
      height: 244,
      background: WIRE,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 152,
      top: 178,
      width: 46,
      borderTop: "1.5px solid " + WIRE
    }
  }), /*#__PURE__*/React.createElement(Cube, {
    style: {
      left: 36,
      top: 26
    }
  }), /*#__PURE__*/React.createElement(Cube, {
    style: {
      left: 36,
      top: 148
    }
  }), /*#__PURE__*/React.createElement(Cube, {
    style: {
      left: 36,
      top: 270
    }
  }), /*#__PURE__*/React.createElement(Vault, null));
}
function MiniTile({
  token,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 98,
      height: 98,
      borderRadius: 24,
      background: "linear-gradient(180deg,#2A2160,#151038)",
      border: "1.5px solid rgba(163,164,255,.5)",
      boxShadow: "0 0 28px rgba(139,140,255,.3), inset 0 1px 0 rgba(255,255,255,.08)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2,
      ...style
    }
  }, /*#__PURE__*/React.createElement(TokenIcon, {
    token: token,
    size: 54,
    style: {
      filter: "drop-shadow(0 0 14px rgba(139,140,255,.5))"
    }
  }));
}
function SwapIllo() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 210,
      margin: "6px 0 2px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 66,
      borderTop: "1px solid rgba(163,164,255,.14)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 144,
      borderTop: "1px solid rgba(163,164,255,.14)"
    }
  }), [88, 104, 120].map((y, i) => /*#__PURE__*/React.createElement("div", {
    key: y,
    style: {
      position: "absolute",
      left: "42%",
      top: y,
      width: "16%",
      borderTop: "2px dashed rgba(163,164,255,.45)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "bd-streak",
    style: {
      left: "40%",
      top: 95,
      "--d": "140px",
      width: 52,
      animationDelay: ".4s"
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "bd-streak",
    style: {
      left: "42%",
      top: 127,
      "--d": "120px",
      width: 44,
      animationDelay: "1.8s"
    }
  }), /*#__PURE__*/React.createElement(MiniTile, {
    token: "tideVARA",
    style: {
      left: "14%",
      top: 56
    }
  }), /*#__PURE__*/React.createElement(MiniTile, {
    token: "VARA",
    style: {
      right: "14%",
      top: 56
    }
  }));
}
function BorrowIllo() {
  const dash = {
    width: 44,
    borderTop: "2px dashed rgba(163,164,255,.5)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 230,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 352,
      height: 132,
      borderRadius: 99,
      background: "linear-gradient(180deg,#443D6E,#2A2440)",
      border: "1.5px solid rgba(163,164,255,.45)",
      boxShadow: "0 0 54px rgba(139,140,255,.35), inset 0 2px 0 rgba(255,255,255,.14)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 292,
      height: 92,
      borderRadius: 99,
      background: "#1C1729",
      border: "1px solid rgba(139,140,255,.35)",
      boxShadow: "inset 0 4px 16px rgba(0,0,0,.55)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(TokenIcon, {
    token: "wUSDT",
    size: 30,
    style: {
      opacity: .75
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: dash
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 58,
      height: 58,
      minWidth: 58,
      borderRadius: 99,
      background: "radial-gradient(circle at 32% 28%,#A3A4FF,#8B8CFF)",
      boxShadow: "0 0 30px rgba(163,164,255,.9), inset 0 2px 4px rgba(255,255,255,.35)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(TokenIcon, {
    token: "tideVARA",
    size: 44
  })), /*#__PURE__*/React.createElement("span", {
    style: dash
  }), /*#__PURE__*/React.createElement(TokenIcon, {
    token: "wUSDC",
    size: 30,
    style: {
      opacity: .75
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".08em",
      color: "var(--text-3)",
      border: "1px solid var(--line-2)",
      borderRadius: 99,
      padding: "5px 12px",
      background: "rgba(33,28,48,.7)"
    }
  }, "collateral: tideVARA \xB7 max LTV ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--tide-300)"
    }
  }, "50%")));
}
function HowItWorks() {
  return /*#__PURE__*/React.createElement(Sec, {
    id: "how",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Everything you need to", /*#__PURE__*/React.createElement("br", null), "grow your assets"),
    right: /*#__PURE__*/React.createElement(DotPatch, {
      style: {
        marginTop: 12
      }
    })
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "auto auto",
      gap: 24,
      marginTop: 52
    }
  }, /*#__PURE__*/React.createElement(Bento, {
    pad: 30,
    style: {
      gridRow: "1 / span 2"
    }
  }, /*#__PURE__*/React.createElement(StakeIllo, null), /*#__PURE__*/React.createElement(BentoText, {
    title: "Stake",
    style: {
      marginTop: "auto",
      paddingTop: 26
    }
  }, "Stake VARA through Tide to obtain tideVARA \u2014 instant redemption in minutes, or a free native unbond in 7 days.")), /*#__PURE__*/React.createElement(Bento, {
    pad: 30
  }, /*#__PURE__*/React.createElement(BentoText, {
    title: "Swap"
  }, "Seamless exits at the market rate \u2014 the liquidity buffer fills instantly, the DEX backstops it."), /*#__PURE__*/React.createElement(SwapIllo, null)), /*#__PURE__*/React.createElement(Bento, {
    pad: 30
  }, /*#__PURE__*/React.createElement(BorrowIllo, null), /*#__PURE__*/React.createElement(BentoText, {
    title: "Borrowing",
    style: {
      marginTop: "auto",
      paddingTop: 22
    }
  }, "Post tideVARA as the only collateral, borrow wUSDT or wUSDC, and loop your stake."))));
}
function Flywheel() {
  const R = 220;
  const nodes = [["Stake VARA", "VARA", {
    left: "50%",
    top: 60
  }], ["Mint tideVARA", "tideVARA", {
    left: 500,
    top: "50%"
  }], ["Post tideVARA, borrow stables", "wUSDT", {
    left: "50%",
    top: 500
  }], ["Buy VARA again", "VARA", {
    left: 60,
    top: "50%"
  }]];
  return /*#__PURE__*/React.createElement(Sec, {
    eyebrow: "The flywheel",
    title: "Every loop feeds the next."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,560px) 1fr",
      gap: 48,
      alignItems: "center",
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 560,
      height: 560,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 60,
      borderRadius: "50%",
      border: "1.5px solid rgba(163,164,255,.16)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 60,
      borderRadius: "50%",
      background: "radial-gradient(closest-side,rgba(139,140,255,.12),rgba(139,140,255,.03) 65%,transparent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fw-arc",
    style: {
      position: "absolute",
      inset: 60,
      borderRadius: "50%"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "fw-arc",
    style: {
      position: "absolute",
      inset: 60,
      borderRadius: "50%",
      animationDelay: "-4.5s"
    }
  }), [[436, 124, 45], [436, 436, 135], [124, 436, 225], [124, 124, 315]].map(([x, y, a]) => /*#__PURE__*/React.createElement("span", {
    key: a,
    style: {
      position: "absolute",
      left: x,
      top: y,
      width: 12,
      height: 14,
      clipPath: "polygon(0 0,100% 50%,0 100%)",
      background: "#A3A4FF",
      filter: "drop-shadow(0 0 7px rgba(163,164,255,.9))",
      transform: "translate(-50%,-50%) rotate(" + a + "deg)"
    }
  })), nodes.map(([t, tok, p]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      position: "absolute",
      ...p,
      transform: "translate(-50%,-50%)",
      display: "flex",
      alignItems: "center",
      gap: 9,
      padding: "10px 16px 10px 11px",
      background: "rgba(33,28,48,.94)",
      border: "1px solid rgba(163,164,255,.35)",
      borderRadius: 999,
      boxShadow: "0 0 24px rgba(139,140,255,.25), inset 0 1px 0 rgba(255,255,255,.07)",
      whiteSpace: "nowrap",
      zIndex: 2,
      backdropFilter: "blur(6px)",
      WebkitBackdropFilter: "blur(6px)"
    }
  }, /*#__PURE__*/React.createElement(TokenIcon, {
    token: tok,
    size: 22
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 500,
      color: "var(--text-1)"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      textAlign: "center",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-3)"
    }
  }, "each turn"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 22,
      marginTop: 6,
      lineHeight: 1.3
    }
  }, "more ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--grad-text)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent"
    }
  }, "VARA"), " bonded"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, [["Network security rises", "Every borrowed stable buys VARA that gets bonded back to validators."], ["Stable yield rises", "More loop demand means more borrow interest paid to tideUSDT and tideUSDC holders."], ["The backstop deepens", "Protocol fees fill the insurance fund before anyone pays the treasury."]].map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: 18,
      padding: "24px 0",
      borderTop: i ? "1px solid var(--line-1)" : "none",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      minWidth: 32,
      borderRadius: 9,
      border: "1px solid var(--accent-line)",
      background: "var(--accent-soft)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      color: "var(--tide-300)"
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--ls-heading)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--text-2)",
      marginTop: 6,
      lineHeight: 1.65,
      maxWidth: "50ch"
    }
  }, d)))))));
}
function TokensTable() {
  const rows = [["tideVARA", "VARA", "Era staking rewards, compounded", "Value-accruing", "accent"], ["tideUSDT", "wUSDT", "Borrow interest from loopers", "Vault share · 4626", "info"], ["tideUSDC", "wUSDC", "Borrow interest from loopers", "Vault share · 4626", "info"]];
  return /*#__PURE__*/React.createElement(Sec, {
    id: "tokens",
    eyebrow: "Token architecture",
    title: "One prefix. Every receipt.",
    sub: "tideX truthfully means \u201CTide's yield-bearing receipt for X\u201D \u2014 for every asset, forever. No stVARA semantics stretched over stables, no collisions with gVARA or wVARA."
  }, /*#__PURE__*/React.createElement(Bento, {
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, ["Token", "You deposit", "You receive", "Yield source", "Type"].map(h => /*#__PURE__*/React.createElement("th", {
    key: h,
    style: {
      textAlign: "left",
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "var(--ls-caps)",
      textTransform: "uppercase",
      color: "var(--text-3)",
      fontWeight: 500,
      padding: "16px 26px",
      borderBottom: "1px solid var(--line-2)"
    }
  }, h)))), /*#__PURE__*/React.createElement("tbody", null, rows.map(([tok, dep, src, type, tone]) => /*#__PURE__*/React.createElement("tr", {
    key: tok,
    className: "ld-row"
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "16px 26px"
    }
  }, /*#__PURE__*/React.createElement(TokenBadge, {
    token: tok,
    size: 32
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "16px 26px"
    }
  }, /*#__PURE__*/React.createElement(TokenBadge, {
    token: dep,
    size: 22,
    style: {
      opacity: .85
    }
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "16px 26px",
      fontFamily: "var(--font-mono)",
      fontSize: 14,
      color: "var(--text-1)"
    }
  }, tok), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "16px 26px",
      fontSize: 14,
      color: "var(--text-2)"
    }
  }, src), /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "16px 26px"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: tone,
    size: "sm"
  }, type))))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--text-3)",
      marginTop: 14
    }
  }, "Non-rebasing by design \u2014 fixed balances compose with every DEX, bridge and lending market by default."));
}
function ExitPaths() {
  return /*#__PURE__*/React.createElement(Sec, {
    eyebrow: "Exits",
    title: "Two ways out. Always."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      marginTop: 44
    }
  }, [["zap", "Instant", "Swap tideVARA for VARA from the liquidity buffer or DEX.", [["Speed", "immediate"], ["Cost", "~0.3% + slippage"], ["Via", "buffer → DEX"]], "buffer target 5–10% of TVL"], ["hourglass", "Native unbond", "Burn tideVARA; the protocol unbonds from validators.", [["Speed", "7 days"], ["Cost", "free"], ["Rate", "full exchange rate"]], "Vara unbonding period"]].map(([ic, t, d, rows, foot]) => /*#__PURE__*/React.createElement(Bento, {
    key: t,
    pad: 30
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 13,
      background: "var(--accent-soft)",
      border: "1px solid var(--accent-line)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--tide-300)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": ic,
    style: {
      width: 19,
      height: 19
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 25,
      fontWeight: 600
    }
  }, t)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: "var(--text-2)",
      margin: "14px 0 16px",
      lineHeight: 1.65
    }
  }, d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, rows.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 0",
      borderTop: "1px solid var(--line-1)",
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-3)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      color: "var(--text-1)"
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    size: "sm"
  }, foot))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--text-3)",
      marginTop: 14
    }
  }, "When the buffer drains, instant exits route to the DEX. Native unbond always works."));
}
Object.assign(window, {
  Sec,
  Bento,
  BentoText,
  DotPatch,
  StatsBand,
  HowItWorks,
  Flywheel,
  TokensTable,
  ExitPaths
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Meter = __ds_scope.Meter;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.TokenIcon = __ds_scope.TokenIcon;

__ds_ns.TokenBadge = __ds_scope.TokenBadge;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.AmountField = __ds_scope.AmountField;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
