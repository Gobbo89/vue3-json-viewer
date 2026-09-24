import { openBlock as n, createElementBlock as s, createElementVNode as o, createStaticVNode as Be, defineComponent as we, ref as w, computed as D, watch as _e, resolveComponent as je, normalizeClass as A, normalizeStyle as be, createBlock as U, unref as k, withDirectives as P, withKeys as H, vModelText as Z, toDisplayString as M, Fragment as Q, vModelDynamic as Ae, withModifiers as xe, createCommentVNode as y, createVNode as C, renderList as ae, nextTick as re, onMounted as Je, createTextVNode as ge } from "vue";
const x = (l, r) => {
  const t = l.__vccOpts || l;
  for (const [h, N] of r)
    t[h] = N;
  return t;
}, Oe = {}, Ee = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Te(l, r) {
  return n(), s("svg", Ee, [...r[0] || (r[0] = [
    o("circle", {
      cx: "12",
      cy: "12",
      r: "3"
    }, null, -1),
    o("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "21"
    }, null, -1),
    o("line", {
      x1: "12",
      y1: "9",
      x2: "12",
      y2: "3"
    }, null, -1)
  ])]);
}
const Ie = /* @__PURE__ */ x(Oe, [["render", Te]]), Ve = {}, Me = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Ke(l, r) {
  return n(), s("svg", Me, [...r[0] || (r[0] = [
    o("polyline", { points: "16,18 22,12 16,6" }, null, -1),
    o("polyline", { points: "8,6 2,12 8,18" }, null, -1)
  ])]);
}
const De = /* @__PURE__ */ x(Ve, [["render", Ke]]), Le = {}, He = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Ue(l, r) {
  return n(), s("svg", He, [...r[0] || (r[0] = [
    o("polyline", { points: "7,13 12,18 17,13" }, null, -1),
    o("polyline", { points: "7,6 12,11 17,6" }, null, -1)
  ])]);
}
const $e = /* @__PURE__ */ x(Le, [["render", Ue]]), Fe = {}, qe = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function ze(l, r) {
  return n(), s("svg", qe, [...r[0] || (r[0] = [
    o("polyline", { points: "17,11 12,6 7,11" }, null, -1),
    o("polyline", { points: "17,18 12,13 7,18" }, null, -1)
  ])]);
}
const Ce = /* @__PURE__ */ x(Fe, [["render", ze]]), Pe = {}, Qe = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Re(l, r) {
  return n(), s("svg", Qe, [...r[0] || (r[0] = [
    o("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }, null, -1),
    o("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" }, null, -1)
  ])]);
}
const We = /* @__PURE__ */ x(Pe, [["render", Re]]), Xe = {}, Ge = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Ye(l, r) {
  return n(), s("svg", Ge, [...r[0] || (r[0] = [
    o("path", { d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" }, null, -1),
    o("polyline", { points: "17,21 17,13 7,13 7,21" }, null, -1),
    o("polyline", { points: "7,3 7,8 15,8" }, null, -1)
  ])]);
}
const Ze = /* @__PURE__ */ x(Xe, [["render", Ye]]), et = {}, tt = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function nt(l, r) {
  return n(), s("svg", tt, [...r[0] || (r[0] = [
    o("circle", {
      cx: "12",
      cy: "12",
      r: "10"
    }, null, -1),
    o("line", {
      x1: "15",
      y1: "9",
      x2: "9",
      y2: "15"
    }, null, -1),
    o("line", {
      x1: "9",
      y1: "9",
      x2: "15",
      y2: "15"
    }, null, -1)
  ])]);
}
const ot = /* @__PURE__ */ x(et, [["render", nt]]), lt = {}, st = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function rt(l, r) {
  return n(), s("svg", st, [...r[0] || (r[0] = [
    o("rect", {
      x: "9",
      y: "9",
      width: "13",
      height: "13",
      rx: "2",
      ry: "2"
    }, null, -1),
    o("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" }, null, -1)
  ])]);
}
const at = /* @__PURE__ */ x(lt, [["render", rt]]), it = {}, dt = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function ct(l, r) {
  return n(), s("svg", dt, [...r[0] || (r[0] = [
    o("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }, null, -1),
    o("polyline", { points: "7,10 12,15 17,10" }, null, -1),
    o("line", {
      x1: "12",
      y1: "15",
      x2: "12",
      y2: "3"
    }, null, -1)
  ])]);
}
const ut = /* @__PURE__ */ x(it, [["render", ct]]), yt = {}, ht = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function ft(l, r) {
  return n(), s("svg", ht, [...r[0] || (r[0] = [
    o("circle", {
      cx: "11",
      cy: "11",
      r: "8"
    }, null, -1),
    o("path", { d: "M21 21l-4.35-4.35" }, null, -1)
  ])]);
}
const vt = /* @__PURE__ */ x(yt, [["render", ft]]), pt = {}, kt = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function xt(l, r) {
  return n(), s("svg", kt, [...r[0] || (r[0] = [
    o("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }, null, -1),
    o("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }, null, -1)
  ])]);
}
const gt = /* @__PURE__ */ x(pt, [["render", xt]]), mt = {}, bt = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function wt(l, r) {
  return n(), s("svg", bt, [...r[0] || (r[0] = [
    o("polyline", { points: "9,18 15,12 9,6" }, null, -1)
  ])]);
}
const _t = /* @__PURE__ */ x(mt, [["render", wt]]), $t = {}, Ct = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Nt(l, r) {
  return n(), s("svg", Ct, [...r[0] || (r[0] = [
    o("polyline", { points: "6,9 12,15 18,9" }, null, -1)
  ])]);
}
const St = /* @__PURE__ */ x($t, [["render", Nt]]), Bt = {}, jt = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function At(l, r) {
  return n(), s("svg", jt, [...r[0] || (r[0] = [
    o("line", {
      x1: "12",
      y1: "5",
      x2: "12",
      y2: "19"
    }, null, -1),
    o("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }, null, -1)
  ])]);
}
const Jt = /* @__PURE__ */ x(Bt, [["render", At]]), Ot = {}, Et = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Tt(l, r) {
  return n(), s("svg", Et, [...r[0] || (r[0] = [
    o("polyline", { points: "3,6 5,6 21,6" }, null, -1),
    o("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }, null, -1),
    o("line", {
      x1: "10",
      y1: "11",
      x2: "10",
      y2: "17"
    }, null, -1),
    o("line", {
      x1: "14",
      y1: "11",
      x2: "14",
      y2: "17"
    }, null, -1)
  ])]);
}
const It = /* @__PURE__ */ x(Ot, [["render", Tt]]), Vt = {}, Mt = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Kt(l, r) {
  return n(), s("svg", Mt, [...r[0] || (r[0] = [
    o("polyline", { points: "20,6 9,17 4,12" }, null, -1)
  ])]);
}
const Dt = /* @__PURE__ */ x(Vt, [["render", Kt]]), Lt = {}, Ht = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Ut(l, r) {
  return n(), s("svg", Ht, [...r[0] || (r[0] = [
    o("line", {
      x1: "18",
      y1: "6",
      x2: "6",
      y2: "18"
    }, null, -1),
    o("line", {
      x1: "6",
      y1: "6",
      x2: "18",
      y2: "18"
    }, null, -1)
  ])]);
}
const Ft = /* @__PURE__ */ x(Lt, [["render", Ut]]), qt = {}, zt = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Pt(l, r) {
  return n(), s("svg", zt, [...r[0] || (r[0] = [
    o("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }, null, -1)
  ])]);
}
const Qt = /* @__PURE__ */ x(qt, [["render", Pt]]), Rt = {}, Wt = {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2"
};
function Xt(l, r) {
  return n(), s("svg", Wt, [...r[0] || (r[0] = [
    Be('<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>', 9)
  ])]);
}
const Gt = /* @__PURE__ */ x(Rt, [["render", Xt]]), Yt = {
  key: 0,
  class: "expand-icon"
}, Zt = {
  key: 1,
  class: "expand-placeholder"
}, en = { class: "node-value" }, tn = ["type"], nn = {
  key: 2,
  class: "node-controls"
}, on = ["title"], ln = {
  key: 0,
  class: "children"
}, sn = {
  key: 0,
  class: "add-form"
}, rn = {
  key: 1,
  class: "colon"
}, an = { class: "add-controls" }, dn = /* @__PURE__ */ we({
  __name: "JsonNode",
  props: {
    node: {},
    editable: { type: Boolean, default: !1 },
    searchQuery: { default: "" }
  },
  emits: ["node-click", "node-expand", "node-collapse", "value-change", "key-change", "node-delete", "node-add"],
  setup(l, { emit: r }) {
    const t = l, h = r, N = w(!1), B = w(!1), T = w(""), S = w(""), J = w(!1), O = w(""), p = w(""), L = w(), I = w(), V = D(() => t.node.type === "object" || t.node.type === "array"), ee = D(() => t.node.level > 0), ie = D(() => t.node.level === 0 ? t.node.type === "array" ? "Array" : "Object" : ce() === "array" ? `[${t.node.key}]` : `"${t.node.key}"`), de = D(() => {
      if (!t.searchQuery)
        return !1;
      const i = t.searchQuery.toLowerCase(), c = t.node.key.toLowerCase().includes(i), g = typeof t.node.value == "string" && t.node.value.toLowerCase().includes(i);
      return c || g;
    }), te = D(() => !t.node.children || !t.searchQuery ? t.node.children || [] : t.node.children.filter((i) => {
      const c = t.searchQuery.toLowerCase(), g = i.key.toLowerCase().includes(c), $ = typeof i.value == "string" && i.value.toLowerCase().includes(c), q = R(i, c);
      return g || $ || q;
    })), ce = () => t.node.path.length <= 1 ? null : "object", ue = () => t.node.type === "array" ? `Array[${Array.isArray(t.node.value) ? t.node.value.length : 0}]` : t.node.type === "object" ? `Object{${t.node.value && typeof t.node.value == "object" ? Object.keys(t.node.value).length : 0}}` : "", ye = (i) => i === null ? "null" : typeof i == "string" ? `"${i}"` : typeof i == "boolean" || typeof i == "number" ? i.toString() : String(i), ne = () => {
      switch (t.node.type) {
        case "number":
          return "number";
        case "boolean":
          return "checkbox";
        default:
          return "text";
      }
    }, R = (i, c) => i.children ? i.children.some((g) => {
      const $ = g.key.toLowerCase().includes(c), q = typeof g.value == "string" && g.value.toLowerCase().includes(c), _ = R(g, c);
      return $ || q || _;
    }) : !1, he = () => {
      V.value && oe(), h("node-click", t.node);
    }, oe = () => {
      t.node.expanded ? h("node-collapse", t.node) : h("node-expand", t.node);
    }, fe = () => {
      !t.editable || !ee.value || (T.value = t.node.key, N.value = !0, re(() => {
        var i, c;
        (i = L.value) == null || i.focus(), (c = L.value) == null || c.select();
      }));
    }, le = () => {
      T.value !== t.node.key && h("key-change", {
        node: t.node,
        oldKey: t.node.key,
        newKey: T.value
      }), W();
    }, W = () => {
      N.value = !1, T.value = "";
    }, ve = () => {
      if (!(!t.editable || V.value)) {
        if (t.node.type === "boolean") {
          h("value-change", {
            node: t.node,
            value: !t.node.value
          });
          return;
        }
        S.value = t.node.type === "string" ? t.node.value : String(t.node.value), B.value = !0, re(() => {
          var i, c;
          (i = I.value) == null || i.focus(), (c = I.value) == null || c.select();
        });
      }
    }, X = () => {
      let i = S.value;
      try {
        switch (t.node.type) {
          case "number":
            if (i = parseFloat(S.value), isNaN(i)) {
              alert("Invalid number format");
              return;
            }
            break;
          case "boolean":
            i = S.value === "true";
            break;
          case "string":
            i = S.value;
            break;
          default:
            i = JSON.parse(S.value);
        }
        h("value-change", { node: t.node, value: i });
      } catch (c) {
        console.error(c);
        return;
      }
      F();
    }, F = () => {
      B.value = !1, S.value = "";
    }, se = () => {
      confirm("Are you sure you want to delete this item?") && h("node-delete", t.node);
    }, pe = () => {
      J.value = !0, O.value = "", p.value = "", t.node.type === "array" ? re(() => {
        const i = document.querySelector(".add-form .value-input");
        i == null || i.focus();
      }) : re(() => {
        const i = document.querySelector(".add-form .key-input");
        i == null || i.focus();
      });
    }, G = () => {
      var i;
      try {
        let c = O.value, g = p.value;
        if (t.node.type === "object" && !c.trim()) {
          alert("Key is required for object properties");
          return;
        }
        t.node.type === "array" && (c = (((i = t.node.children) == null ? void 0 : i.length) || 0).toString());
        try {
          g = JSON.parse(p.value);
        } catch {
          p.value === "true" || p.value === "false" ? g = p.value === "true" : !isNaN(Number(p.value)) && p.value.trim() !== "" ? g = Number(p.value) : p.value === "null" ? g = null : g = p.value;
        }
        h("node-add", { parent: t.node, key: c, value: g }), z();
      } catch (c) {
        console.error(c);
      }
    }, z = () => {
      J.value = !1, O.value = "", p.value = "";
    };
    return _e(() => t.searchQuery, (i) => {
      i && V.value && R(t.node, i.toLowerCase()) && h("node-expand", t.node);
    }), (i, c) => {
      const g = je("JsonNode", !0);
      return n(), s("div", {
        class: A(["json-node", `level-${l.node.level}`])
      }, [
        o("div", {
          class: A(["node-header", {
            expandable: V.value,
            expanded: l.node.expanded,
            highlighted: de.value
          }]),
          onClick: he
        }, [
          o("div", {
            class: "indentation",
            style: be({ width: `${l.node.level * 20}px` })
          }, null, 4),
          V.value ? (n(), s("div", Yt, [
            l.node.expanded ? (n(), U(k(St), { key: 1 })) : (n(), U(k(_t), { key: 0 }))
          ])) : (n(), s("div", Zt)),
          o("span", {
            class: A(["node-key", { editable: l.editable && ee.value }])
          }, [
            N.value ? P((n(), s("input", {
              key: 0,
              "onUpdate:modelValue": c[0] || (c[0] = ($) => T.value = $),
              onBlur: le,
              onKeydown: [
                H(le, ["enter"]),
                H(W, ["escape"])
              ],
              class: "key-input",
              ref_key: "keyInput",
              ref: L
            }, null, 544)), [
              [Z, T.value]
            ]) : (n(), s("span", {
              key: 1,
              onDblclick: fe
            }, M(ie.value), 33))
          ], 2),
          c[11] || (c[11] = o("span", { class: "colon" }, ":", -1)),
          o("div", en, [
            V.value ? (n(), s("span", {
              key: 1,
              class: A(["value-summary", `value-${l.node.type}`])
            }, M(ue()), 3)) : (n(), s(Q, { key: 0 }, [
              B.value ? P((n(), s("input", {
                key: 0,
                "onUpdate:modelValue": c[1] || (c[1] = ($) => S.value = $),
                type: ne(),
                onBlur: X,
                onKeydown: [
                  H(X, ["enter"]),
                  H(F, ["escape"])
                ],
                class: A(["value-input", `value-${l.node.type}`]),
                ref_key: "valueInput",
                ref: I
              }, null, 42, tn)), [
                [Ae, S.value]
              ]) : (n(), s("span", {
                key: 1,
                class: A(["value-display", `value-${l.node.type}`, { editable: l.editable }]),
                onDblclick: ve
              }, M(ye(l.node.value)), 35))
            ], 64))
          ]),
          l.editable ? (n(), s("div", nn, [
            V.value ? (n(), s("button", {
              key: 0,
              onClick: xe(oe, ["stop"]),
              class: "control-icon",
              title: l.node.expanded ? "Collapse" : "Expand"
            }, [
              l.node.expanded ? (n(), U(k(Ce), { key: 0 })) : (n(), U(k($e), { key: 1 }))
            ], 8, on)) : y("", !0),
            l.node.type === "object" || l.node.type === "array" ? (n(), s("button", {
              key: 1,
              onClick: xe(pe, ["stop"]),
              class: "control-icon add-icon",
              title: "Add Item"
            }, [
              C(k(Jt))
            ])) : y("", !0),
            o("button", {
              onClick: xe(se, ["stop"]),
              class: "control-icon delete-icon",
              title: "Delete"
            }, [
              C(k(It))
            ])
          ])) : y("", !0)
        ], 2),
        V.value && l.node.expanded && l.node.children ? (n(), s("div", ln, [
          (n(!0), s(Q, null, ae(te.value, ($, q) => (n(), U(g, {
            key: `${$.path.join(".")}-${q}`,
            node: $,
            editable: l.editable,
            "search-query": l.searchQuery,
            onNodeClick: c[2] || (c[2] = (_) => i.$emit("node-click", _)),
            onNodeExpand: c[3] || (c[3] = (_) => i.$emit("node-expand", _)),
            onNodeCollapse: c[4] || (c[4] = (_) => i.$emit("node-collapse", _)),
            onValueChange: c[5] || (c[5] = (_) => i.$emit("value-change", _)),
            onKeyChange: c[6] || (c[6] = (_) => i.$emit("key-change", _)),
            onNodeDelete: c[7] || (c[7] = (_) => i.$emit("node-delete", _)),
            onNodeAdd: c[8] || (c[8] = (_) => i.$emit("node-add", _))
          }, null, 8, ["node", "editable", "search-query"]))), 128)),
          J.value ? (n(), s("div", sn, [
            o("div", {
              class: "indentation",
              style: be({ width: `${(l.node.level + 1) * 20}px` })
            }, null, 4),
            c[12] || (c[12] = o("div", { class: "expand-placeholder" }, null, -1)),
            l.node.type === "object" ? P((n(), s("input", {
              key: 0,
              "onUpdate:modelValue": c[9] || (c[9] = ($) => O.value = $),
              placeholder: "Key",
              class: "key-input",
              onKeydown: [
                H(G, ["enter"]),
                H(z, ["escape"])
              ]
            }, null, 544)), [
              [Z, O.value]
            ]) : y("", !0),
            l.node.type === "object" ? (n(), s("span", rn, ":")) : y("", !0),
            P(o("input", {
              "onUpdate:modelValue": c[10] || (c[10] = ($) => p.value = $),
              placeholder: "Value",
              class: "value-input",
              onKeydown: [
                H(G, ["enter"]),
                H(z, ["escape"])
              ]
            }, null, 544), [
              [Z, p.value]
            ]),
            o("div", an, [
              o("button", {
                onClick: G,
                class: "add-btn",
                title: "Add"
              }, [
                C(k(Dt))
              ]),
              o("button", {
                onClick: z,
                class: "cancel-btn",
                title: "Cancel"
              }, [
                C(k(Ft))
              ])
            ])
          ])) : y("", !0)
        ])) : y("", !0)
      ], 2);
    };
  }
});
const cn = /* @__PURE__ */ x(dn, [["__scopeId", "data-v-f06c026c"]]), un = {
  key: 0,
  class: "menu-bar"
}, yn = {
  key: 0,
  class: "mode-switcher"
}, hn = { key: 0 }, fn = { key: 0 }, vn = {
  key: 1,
  class: "tree-controls"
}, pn = { key: 0 }, kn = { key: 0 }, xn = {
  key: 2,
  class: "edit-controls"
}, gn = { key: 0 }, mn = { key: 0 }, bn = { key: 0 }, wn = { class: "additional-controls" }, _n = { key: 0 }, $n = ["title"], Cn = { class: "view-area" }, Nn = {
  key: 0,
  class: "search-bar"
}, Sn = {
  key: 1,
  class: "tree-view"
}, Bn = {
  key: 2,
  class: "text-view"
}, jn = {
  key: 1,
  class: "json-display-container"
}, An = {
  key: 0,
  class: "line-numbers"
}, Jn = { class: "json-display" }, On = {
  key: 0,
  class: "json-error-message"
}, En = {
  key: 1,
  class: "footer"
}, Tn = { class: "footer-info" }, In = { class: "info-item" }, Vn = { class: "info-item" }, Mn = {
  key: 0,
  class: "info-item"
}, Kn = /* @__PURE__ */ we({
  __name: "JsonViewer",
  props: {
    data: {},
    editable: { type: Boolean, default: !0 },
    theme: { default: "light" },
    defaultMode: { default: "tree" },
    showLineNumbers: { type: Boolean, default: !1 },
    maxDepth: { default: 3 },
    hideActionText: { type: Boolean, default: !1 },
    hideHeader: { type: Boolean, default: !1 },
    hideFooter: { type: Boolean, default: !1 },
    hideModeSwitcher: { type: Boolean, default: !1 },
    hideTreeControls: { type: Boolean, default: !1 },
    hideEditControls: { type: Boolean, default: !1 },
    hideSearchButton: { type: Boolean, default: !1 },
    hideCopyButton: { type: Boolean, default: !1 },
    hideDownloadButton: { type: Boolean, default: !1 },
    hideThemeButton: { type: Boolean, default: !1 }
  },
  emits: ["update:data", "node-click", "node-expand", "node-collapse", "key-change", "edit-start", "edit-save", "edit-cancel", "theme-change"],
  setup(l, { emit: r }) {
    const t = l, h = r, N = w(t.defaultMode), B = w(!1), T = w(""), S = w(!1), J = w(""), O = w(null), p = w(!1), L = w(""), I = w([]), V = D(() => JSON.stringify(t.data).length), ee = D(() => {
      const e = (a) => {
        let d = a.length;
        return a.forEach((u) => {
          u.children && (d += e(u.children));
        }), d;
      };
      return e(I.value);
    }), ie = D(() => {
      if (!t.data)
        return [];
      const e = JSON.stringify(t.data, null, 2);
      return pe(e);
    }), de = D(() => {
      if (!t.data || !t.showLineNumbers)
        return [];
      const a = JSON.stringify(t.data, null, 2).split(`
`);
      return Array.from({ length: a.length }, (d, u) => u + 1);
    }), te = (e) => {
      N.value = e;
    }, ce = () => {
      B.value ? ne() : ue();
    }, ue = () => {
      O.value = JSON.parse(JSON.stringify(t.data)), J.value = JSON.stringify(t.data, null, 2), B.value = !0, h("edit-start");
    }, ye = () => {
      if (N.value === "text") {
        if (p.value) {
          alert("Please fix JSON errors before saving");
          return;
        }
        try {
          const e = JSON.parse(J.value);
          h("update:data", e);
        } catch {
          alert("Invalid JSON format");
          return;
        }
      }
      B.value = !1, O.value = null, h("edit-save", t.data);
    }, ne = () => {
      O.value && (h("update:data", O.value), J.value = JSON.stringify(O.value, null, 2)), B.value = !1, O.value = null, p.value = !1, L.value = "", h("edit-cancel");
    }, R = () => {
      const e = (a) => {
        a.forEach((d) => {
          (d.type === "object" || d.type === "array") && (d.expanded = !0, d.children && e(d.children));
        });
      };
      e(I.value);
    }, he = () => {
      const e = (a) => {
        a.forEach((d) => {
          (d.type === "object" || d.type === "array") && (d.expanded = !1, d.children && e(d.children));
        });
      };
      e(I.value);
    }, oe = async () => {
      try {
        const e = JSON.stringify(t.data, null, 2);
        await navigator.clipboard.writeText(e);
        const a = document.querySelector(".copy-btn");
        a && (a.classList.add("copied"), setTimeout(() => {
          a.classList.remove("copied");
        }, 1500));
      } catch (e) {
        console.error("Failed to copy to clipboard:", e);
      }
    }, fe = () => {
      const e = JSON.stringify(t.data, null, 2), a = new Blob([e], { type: "application/json" }), d = URL.createObjectURL(a), u = document.createElement("a");
      u.href = d, u.download = "data.json", document.body.appendChild(u), u.click(), document.body.removeChild(u), URL.revokeObjectURL(d);
    }, le = () => {
      const e = t.theme === "light" ? "dark" : "light";
      h("theme-change", e);
    }, W = () => {
      S.value = !S.value, S.value || (T.value = "");
    }, ve = () => {
      try {
        JSON.parse(J.value), p.value = !1, L.value = "";
      } catch (e) {
        p.value = !0, L.value = e.message;
      }
    }, X = (e, a = [], d = 0, u) => {
      if (e === null)
        return [{
          key: "",
          value: null,
          type: "null",
          path: a,
          level: d
        }];
      if (d === 0 && (Array.isArray(e) || typeof e == "object" && e !== null)) {
        const b = Array.isArray(e) ? "array" : "object", m = u && u[0], f = m ? m.expanded : !0;
        return [{
          key: b === "array" ? "Array" : "Object",
          value: e,
          type: b,
          path: [],
          level: 0,
          expanded: f,
          children: F(e, [], 1, m == null ? void 0 : m.children)
        }];
      }
      return F(e, a, d, u);
    }, F = (e, a = [], d = 0, u) => {
      const b = [], m = (f, v) => {
        if (f)
          return f.find(
            (E) => E.path.length === v.length && E.path.every((K, j) => K === v[j])
          );
      };
      return Array.isArray(e) ? e.forEach((f, v) => {
        const E = [...a, v.toString()], K = se(f), j = m(u, E), ke = j ? j.expanded : d < t.maxDepth, Y = {
          key: v.toString(),
          value: f,
          type: K,
          path: E,
          level: d,
          expanded: ke
        };
        (K === "object" || K === "array") && (Y.children = F(f, E, d + 1, j == null ? void 0 : j.children)), b.push(Y);
      }) : typeof e == "object" && e !== null && Object.entries(e).forEach(([f, v]) => {
        const E = [...a, f], K = se(v), j = m(u, E), ke = j ? j.expanded : d < t.maxDepth, Y = {
          key: f,
          value: v,
          type: K,
          path: E,
          level: d,
          expanded: ke
        };
        (K === "object" || K === "array") && (Y.children = F(v, E, d + 1, j == null ? void 0 : j.children)), b.push(Y);
      }), b;
    }, se = (e) => e === null ? "null" : Array.isArray(e) ? "array" : typeof e == "object" ? "object" : typeof e == "string" ? "string" : typeof e == "number" ? "number" : typeof e == "boolean" ? "boolean" : "string", pe = (e) => {
      const a = [], d = /"(?:\\.|[^"\\])*"|-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null/g;
      let u = 0;
      for (const b of e.matchAll(d)) {
        const m = b.index;
        m > u && a.push({ text: e.slice(u, m) });
        const f = b[0];
        let v;
        f.startsWith('"') ? v = /^\s*:/.test(e.slice(m + f.length)) ? "json-key" : "json-string" : f === "true" || f === "false" ? v = "json-boolean" : f === "null" ? v = "json-null" : v = "json-number", a.push({ text: f, className: v }), u = m + f.length;
      }
      return u < e.length && a.push({ text: e.slice(u) }), a;
    }, G = (e) => e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`, z = (e) => {
      h("node-click", e);
    }, i = (e) => {
      e.expanded = !0, h("node-expand", e);
    }, c = (e) => {
      e.expanded = !1, h("node-collapse", e);
    }, g = (e) => {
      const a = JSON.parse(JSON.stringify(t.data));
      Ne(a, e.node.path, e.value), h("update:data", a);
    }, $ = (e) => {
      const a = JSON.parse(JSON.stringify(t.data)), d = e.node.path.slice(0, -1), u = me(a, d);
      if (u && typeof u == "object" && !Array.isArray(u)) {
        const b = Object.keys(u), m = b.map((v) => u[v]), f = b.indexOf(e.oldKey);
        if (f !== -1) {
          b[f] = e.newKey;
          for (const v of Object.keys(u))
            delete u[v];
          b.forEach((v, E) => {
            u[v] = m[E];
          }), e.node.path[e.node.path.length - 1] = e.newKey;
        }
      }
      h("update:data", a);
    }, q = (e) => {
      const a = JSON.parse(JSON.stringify(t.data));
      Se(a, e.path), h("update:data", a);
    }, _ = (e) => {
      const a = JSON.parse(JSON.stringify(t.data)), d = e.parent.path, u = me(a, d);
      Array.isArray(u) ? u.push(e.value) : typeof u == "object" && (u[e.key] = e.value), h("update:data", a);
    }, Ne = (e, a, d) => {
      const u = a[a.length - 1], b = a.slice(0, -1).reduce((m, f) => m[f], e);
      b[u] = d;
    }, Se = (e, a) => {
      const d = a[a.length - 1], u = a.slice(0, -1).reduce((b, m) => b[m], e);
      Array.isArray(u) ? u.splice(parseInt(d), 1) : delete u[d];
    }, me = (e, a) => a.reduce((d, u) => d[u], e);
    return _e(() => t.data, (e) => {
      I.value = X(e, [], 0, I.value), J.value = JSON.stringify(e, null, 2);
    }, { deep: !0, immediate: !0 }), Je(() => {
      I.value = X(t.data), J.value = JSON.stringify(t.data, null, 2);
    }), (e, a) => (n(), s("div", {
      class: A(["json-viewer", `theme-${l.theme}`, { "no-header": l.hideHeader, "no-footer": l.hideFooter }])
    }, [
      l.hideHeader ? y("", !0) : (n(), s("div", un, [
        l.hideModeSwitcher ? y("", !0) : (n(), s("div", yn, [
          o("button", {
            class: A(["mode-btn", { active: N.value === "tree" }]),
            onClick: a[0] || (a[0] = (d) => te("tree"))
          }, [
            C(k(Ie)),
            l.hideActionText ? y("", !0) : (n(), s("span", hn, "Tree"))
          ], 2),
          o("button", {
            class: A(["mode-btn", { active: N.value === "text" }]),
            onClick: a[1] || (a[1] = (d) => te("text"))
          }, [
            C(k(De)),
            l.hideActionText ? y("", !0) : (n(), s("span", fn, "Text"))
          ], 2)
        ])),
        !l.hideTreeControls && N.value === "tree" ? (n(), s("div", vn, [
          o("button", {
            class: "control-btn",
            onClick: R,
            title: "Expand All"
          }, [
            C(k($e)),
            l.hideActionText ? y("", !0) : (n(), s("span", pn, "Expand All"))
          ]),
          o("button", {
            class: "control-btn",
            onClick: he,
            title: "Collapse All"
          }, [
            C(k(Ce)),
            l.hideActionText ? y("", !0) : (n(), s("span", kn, "Collapse All"))
          ])
        ])) : y("", !0),
        l.hideEditControls ? y("", !0) : (n(), s("div", xn, [
          o("button", {
            class: A(["control-btn", { active: B.value }]),
            onClick: ce,
            title: "Toggle Edit Mode"
          }, [
            C(k(We)),
            l.hideActionText ? y("", !0) : (n(), s("span", gn, M(B.value ? "Exit Edit" : "Edit"), 1))
          ], 2),
          B.value ? (n(), s(Q, { key: 0 }, [
            o("button", {
              class: "control-btn save-btn",
              onClick: ye,
              title: "Save Changes"
            }, [
              C(k(Ze)),
              l.hideActionText ? y("", !0) : (n(), s("span", mn, "Save"))
            ]),
            o("button", {
              class: "control-btn cancel-btn",
              onClick: ne,
              title: "Cancel Changes"
            }, [
              C(k(ot)),
              l.hideActionText ? y("", !0) : (n(), s("span", bn, "Cancel"))
            ])
          ], 64)) : y("", !0)
        ])),
        o("div", wn, [
          l.hideSearchButton ? y("", !0) : (n(), s("button", {
            key: 0,
            class: "control-btn",
            onClick: W,
            title: "Search JSON"
          }, [
            C(k(vt)),
            l.hideActionText ? y("", !0) : (n(), s("span", _n, "Search"))
          ])),
          l.hideCopyButton ? y("", !0) : (n(), s("button", {
            key: 1,
            class: "control-btn copy-btn",
            onClick: oe,
            title: "Copy JSON"
          }, [
            C(k(at))
          ])),
          l.hideDownloadButton ? y("", !0) : (n(), s("button", {
            key: 2,
            class: "control-btn",
            onClick: fe,
            title: "Download JSON"
          }, [
            C(k(ut))
          ])),
          l.hideThemeButton ? y("", !0) : (n(), s("button", {
            key: 3,
            class: "control-btn",
            onClick: le,
            title: t.theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"
          }, [
            t.theme === "light" ? (n(), U(k(Qt), {
              key: 0,
              class: "theme-icon"
            })) : (n(), U(k(Gt), {
              key: 1,
              class: "theme-icon"
            }))
          ], 8, $n))
        ])
      ])),
      o("div", Cn, [
        S.value ? (n(), s("div", Nn, [
          P(o("input", {
            "onUpdate:modelValue": a[2] || (a[2] = (d) => T.value = d),
            type: "text",
            placeholder: "Search JSON...",
            class: "search-input"
          }, null, 512), [
            [Z, T.value]
          ]),
          o("button", {
            class: "search-btn",
            onClick: W
          }, [
            C(k(gt))
          ])
        ])) : y("", !0),
        N.value === "tree" ? (n(), s("div", Sn, [
          (n(!0), s(Q, null, ae(I.value, (d, u) => (n(), U(cn, {
            key: `${d.path.join(".")}-${u}`,
            node: d,
            editable: B.value,
            "search-query": T.value,
            onNodeClick: z,
            onNodeExpand: i,
            onNodeCollapse: c,
            onValueChange: g,
            onKeyChange: $,
            onNodeDelete: q,
            onNodeAdd: _
          }, null, 8, ["node", "editable", "search-query"]))), 128))
        ])) : (n(), s("div", Bn, [
          o("div", {
            class: A(["text-editor", { "with-line-numbers": l.showLineNumbers }])
          }, [
            B.value ? P((n(), s("textarea", {
              key: 0,
              "onUpdate:modelValue": a[3] || (a[3] = (d) => J.value = d),
              class: A(["json-textarea", { error: p.value }]),
              onInput: ve
            }, null, 34)), [
              [Z, J.value]
            ]) : (n(), s("div", jn, [
              l.showLineNumbers ? (n(), s("div", An, [
                (n(!0), s(Q, null, ae(de.value, (d) => (n(), s("span", {
                  key: d,
                  class: "line-number"
                }, M(d), 1))), 128))
              ])) : y("", !0),
              o("pre", Jn, [
                o("code", null, [
                  (n(!0), s(Q, null, ae(ie.value, (d, u) => (n(), s("span", {
                    key: u,
                    class: A(d.className)
                  }, M(d.text), 3))), 128))
                ])
              ])
            ]))
          ], 2),
          p.value ? (n(), s("div", On, " Invalid JSON: " + M(L.value), 1)) : y("", !0)
        ]))
      ]),
      l.hideFooter ? y("", !0) : (n(), s("div", En, [
        o("div", Tn, [
          o("span", In, [
            a[4] || (a[4] = ge(" Mode: ", -1)),
            o("strong", null, M(N.value), 1)
          ]),
          o("span", Vn, [
            a[5] || (a[5] = ge(" Size: ", -1)),
            o("strong", null, M(G(V.value)), 1)
          ]),
          N.value === "tree" ? (n(), s("span", Mn, [
            a[6] || (a[6] = ge(" Nodes: ", -1)),
            o("strong", null, M(ee.value), 1)
          ])) : y("", !0)
        ])
      ]))
    ], 2));
  }
});
const Ln = /* @__PURE__ */ x(Kn, [["__scopeId", "data-v-35f742b9"]]);
export {
  cn as JsonNode,
  Ln as JsonViewer,
  Ln as default
};
