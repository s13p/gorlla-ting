/*! For license information please see 395.395.aacb3c.js.LICENSE.txt */
"use strict";
(globalThis.webpackChunkchumbi_valley_react =
  globalThis.webpackChunkchumbi_valley_react || []).push([
  [395],
  {
    64395: (e, t, n) => {
      n.r(t), n.d(t, { AppRouter: () => x, default: () => y });
      var r = n(85893),
        a = n(67294),
        i = n(39711),
        s = n(96974),
        o = n(53739),
        l = n(15716);
      const u = a.lazy(() =>
          Promise.all([n.e(532), n.e(59), n.e(233), n.e(518), n.e(351)]).then(
            n.bind(n, 95351)
          )
        ),
        c = a.lazy(() =>
          Promise.all([
            n.e(532),
            n.e(59),
            n.e(233),
            n.e(518),
            n.e(944),
            n.e(448),
          ]).then(n.bind(n, 26448))
        ),
        h = a.lazy(() =>
          Promise.all([
            n.e(532),
            n.e(59),
            n.e(233),
            n.e(518),
            n.e(944),
            n.e(863),
          ]).then(n.bind(n, 22863))
        ),
        p = a.lazy(() =>
          Promise.all([n.e(532), n.e(59), n.e(233), n.e(518), n.e(20)]).then(
            n.bind(n, 61020)
          )
        ),
        f = a.lazy(() =>
          Promise.all([
            n.e(532),
            n.e(59),
            n.e(233),
            n.e(518),
            n.e(944),
            n.e(770),
          ]).then(n.bind(n, 46770))
        ),
        d = a.lazy(() =>
          Promise.all([
            n.e(532),
            n.e(59),
            n.e(233),
            n.e(518),
            n.e(944),
            n.e(527),
          ]).then(n.bind(n, 29527))
        ),
        g = a.lazy(() =>
          Promise.all([
            n.e(532),
            n.e(59),
            n.e(233),
            n.e(518),
            n.e(367),
            n.e(8),
          ]).then(n.bind(n, 1235))
        ),
        m = a.lazy(() =>
          Promise.all([
            n.e(532),
            n.e(59),
            n.e(233),
            n.e(518),
            n.e(758),
            n.e(367),
            n.e(438),
          ]).then(n.bind(n, 6438))
        ),
        v = a.lazy(() =>
          Promise.all([n.e(59), n.e(170)]).then(n.bind(n, 38170))
        ),
        x = a.memo(() =>
          (0, r.jsx)(i.VK, {
            children: (0, r.jsxs)(a.Suspense, {
              fallback: null,
              children: [
                (0, r.jsx)(v, {}),
                (0, r.jsxs)(o.D9, {
                  scrollToTop: "instant",
                  children: [
                    (0, r.jsx)(s.AW, {
                      path: l.$.Home,
                      element: (0, r.jsx)(u, {}),
                    }),
                    (0, r.jsx)(s.AW, {
                      path: l.$.Chumbi,
                      element: (0, r.jsx)(c, {}),
                    }),
                    (0, r.jsx)(s.AW, {
                      path: l.$.GameplayFeatures,
                      element: (0, r.jsx)(h, {}),
                    }),
                    (0, r.jsx)(s.AW, {
                      path: l.$.Tokens,
                      element: (0, r.jsx)(f, {}),
                    }),
                    (0, r.jsx)(s.AW, {
                      path: l.$.Lore,
                      element: (0, r.jsx)(m, {}),
                    }),
                    (0, r.jsx)(s.AW, {
                      path: l.$.Gallery,
                      element: (0, r.jsx)(p, {}),
                    }),
                    (0, r.jsx)(s.AW, {
                      path: l.$.Article.Template,
                      element: (0, r.jsx)(g, {}),
                    }),
                    (0, r.jsx)(s.AW, {
                      path: l.$.About,
                      element: (0, r.jsx)(d, {}),
                    }),
                    (0, r.jsx)(s.AW, {
                      path: "*",
                      element: (0, r.jsx)(o.l_, { replace: !0, to: l.$.Home }),
                    }),
                  ],
                }),
              ],
            }),
          })
        ),
        y = x;
    },
    53739: (e, t, n) => {
      n.d(t, { D9: () => p, SC: () => f, l_: () => m });
      var r = n(85893),
        a = n(51254),
        i = n(67294),
        s = n(96974),
        o = n(50947),
        l = n(10902);
      const u = i.createContext({
          currentState: "none",
          finishState: null,
          nextLocation: null,
        }),
        c = (0, a.hu)("[AnimatedRoutes]"),
        h = (e) => `${e.pathname}?${e.search}#${e.hash}`,
        p = i.memo((e) => {
          const t = (0, s.TH)(),
            [n, a] = (0, i.useState)(t),
            [l, p] = (0, i.useState)("none"),
            f = (0, i.useRef)(null),
            { scrollToTop: d, disable: m } = e;
          (0, i.useEffect)(() => {
            if (t === n || m)
              return void (m || (c.log("Transitions: initial"), v()));
            const e = h(t);
            e !== h(n)
              ? e !== f.current &&
                ((f.current = e),
                c.log(
                  'Transition: "none" => "exit": ',
                  n.pathname,
                  "=>",
                  t.pathname
                ),
                p("exit"),
                "smooth" === d && (0, o.k)(!1))
              : a(t);
          }, [t, n, d, m]);
          const x = (0, i.useMemo)(
            () => ({
              currentState: m ? "none" : l,
              finishState: () => {
                if (!m)
                  switch (l) {
                    case "enter":
                      c.log('Transition: "enter" => "none"', t.pathname),
                        p("none"),
                        v();
                      break;
                    case "exit":
                      a(t),
                        p("enter"),
                        c.log('Transition: "exit" => "enter"', t.pathname),
                        "instant" === d && (0, o.k)(!0);
                  }
              },
              nextLocation: t,
            }),
            [l, t, d, m]
          );
          return (0, r.jsxs)(u.Provider, {
            value: x,
            children: [
              (0, r.jsx)(s.Z5, { location: m ? t : n, children: e.children }),
              e.disable && (0, r.jsx)(g, {}),
            ],
          });
        }),
        f = () => (0, i.useContext)(u),
        d = () => {
          const { finishState: e } = f();
          (0, i.useEffect)(() => {
            e();
          }, [e]);
        },
        g = () => (d(), null),
        m = (e) => {
          d();
          const t = (0, s.TH)();
          return t.pathname === e.to
            ? null
            : (c.log("Redirect!", t.pathname, "=>", e.to),
              (0, r.jsx)(s.Fg, { ...e }));
        };
      function v() {
        const e = window.location.hash;
        if (e) {
          const t = document.querySelector(e);
          if (t) c.log("Scrolling to hash: ", e), t.scrollIntoView();
          else if (
            (c.log("Scrolling to hash: ", e, "not found"), l.pz.inProgress)
          ) {
            c.log(
              "Scrolling to hash: ",
              e,
              ", subscribing to LazyQueue.finished"
            );
            const t = l.pz.finished.on(() => {
              t(), setTimeout(v, 1500);
            });
          }
        }
      }
    },
    50947: (e, t, n) => {
      function r(e) {
        window.scrollTo({ left: 0, top: 0, behavior: e ? "instant" : void 0 });
      }
      n.d(t, { k: () => r }), n(67294);
    },
    15716: (e, t, n) => {
      var r;
      n.d(t, { $: () => r }),
        (function (e) {
          let t;
          function n(e) {
            return `/article/${e}`;
          }
          function r(e) {
            return `/details/${e}`;
          }
          function a(e) {
            return t.add("/profile", e);
          }
          (e.SignUp = "/signup"),
            (e.SignIn = "/signin"),
            (e.RestorePassword = "/restore-password"),
            (function (e) {
              (e.Id = "id"),
                (e.UserId = "userId"),
                (e.format = function (e) {
                  return ":" + e;
                }),
                (e.combine = function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return "";
                }),
                (e.add = function (e, t) {
                  return t ? e + "/" + t : e;
                });
            })((t = e.Args || (e.Args = {}))),
            (e.Home = "/"),
            (e.GameplayFeatures = "/gamefeatures"),
            (e.Chumbi = "/chumbi"),
            (e.Tokens = "/token"),
            (e.Lore = "/lore"),
            (e.Gallery = "/gallery"),
            (e.About = "/about"),
            (e.Article = n),
            (function (e) {
              e.Template = e(t.format(t.Id));
            })((n = e.Article || (e.Article = {}))),
            (e.Market = "/marketplace"),
            (e.DetailsPage = r),
            (function (e) {
              e.Template = e(t.format(t.Id));
            })((r = e.DetailsPage || (e.DetailsPage = {}))),
            (e.ProfilePage = a),
            (function (e) {
              (e.Template = e(t.format(t.UserId))), (e.My = e(null));
            })((a = e.ProfilePage || (e.ProfilePage = {})));
        })(r || (r = {}));
    },
    10902: (e, t, n) => {
      n.d(t, { ZP: () => o, pz: () => i });
      var r = n(72029),
        a = n(67294);
      const i = new r.c().withLogger("Lazy");
      let s = !1;
      const o = () => (
        (0, a.useEffect)(() => {
          s || ((s = !0), i.start());
        }, []),
        null
      );
    },
    39711: (e, t, n) => {
      n.d(t, { VK: () => u, rU: () => c });
      var r = n(67294),
        a = n(9354),
        i = n(96974),
        s = n(77130);
      function o() {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          o.apply(this, arguments)
        );
      }
      const l = [
        "onClick",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
      ];
      function u(e) {
        let { basename: t, children: n, window: s } = e,
          o = (0, r.useRef)();
        null == o.current && (o.current = (0, a.lX)({ window: s }));
        let l = o.current,
          [u, c] = (0, r.useState)({ action: l.action, location: l.location });
        return (
          (0, r.useLayoutEffect)(() => l.listen(c), [l]),
          (0, r.createElement)(i.F0, {
            basename: t,
            children: n,
            location: u.location,
            navigationType: u.action,
            navigator: l,
          })
        );
      }
      const c = (0, r.forwardRef)(function (e, t) {
        let {
            onClick: n,
            reloadDocument: a,
            replace: u = !1,
            state: c,
            target: h,
            to: p,
          } = e,
          f = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              a = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, l),
          d = (0, i.oQ)(p),
          g = (function (e, t) {
            let { target: n, replace: a, state: o } = void 0 === t ? {} : t,
              l = (0, i.s0)(),
              u = (0, i.TH)(),
              c = (0, i.WU)(e);
            return (0, r.useCallback)(
              (t) => {
                if (
                  !(
                    0 !== t.button ||
                    (n && "_self" !== n) ||
                    (function (e) {
                      return !!(
                        e.metaKey ||
                        e.altKey ||
                        e.ctrlKey ||
                        e.shiftKey
                      );
                    })(t)
                  )
                ) {
                  t.preventDefault();
                  let n = !!a || (0, s.Ep)(u) === (0, s.Ep)(c);
                  l(e, { replace: n, state: o });
                }
              },
              [u, l, c, a, o, n, e]
            );
          })(p, { replace: u, state: c, target: h });
        return (0, r.createElement)(
          "a",
          o({}, f, {
            href: d,
            onClick: function (e) {
              n && n(e), e.defaultPrevented || a || g(e);
            },
            ref: t,
            target: h,
          })
        );
      });
    },
    9354: (e, t, n) => {
      n.d(t, { lX: () => s });
      var r,
        a = n(75677);
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(r || (r = {}));
      var i = "beforeunload";
      function s(e) {
        void 0 === e && (e = {});
        var t = e.window,
          n = void 0 === t ? document.defaultView : t,
          s = n.history;
        function u() {
          var e = n.location,
            t = e.pathname,
            r = e.search,
            a = e.hash,
            i = s.state || {};
          return [
            i.idx,
            {
              pathname: t,
              search: r,
              hash: a,
              state: i.usr || null,
              key: i.key || "default",
            },
          ];
        }
        var c = null;
        n.addEventListener("popstate", function () {
          if (c) m.call(c), (c = null);
          else {
            var e = r.Pop,
              t = u(),
              n = t[0],
              a = t[1];
            if (m.length) {
              if (null != n) {
                var i = f - n;
                i &&
                  ((c = {
                    action: e,
                    location: a,
                    retry: function () {
                      _(-1 * i);
                    },
                  }),
                  _(i));
              }
            } else b(e);
          }
        });
        var h = r.Pop,
          p = u(),
          f = p[0],
          d = p[1],
          g = l(),
          m = l();
        function v(e) {
          return "string" == typeof e
            ? e
            : ((n = (t = e).pathname),
              (r = void 0 === n ? "/" : n),
              (a = t.search),
              (i = void 0 === a ? "" : a),
              (s = t.hash),
              (o = void 0 === s ? "" : s),
              i && "?" !== i && (r += "?" === i.charAt(0) ? i : "?" + i),
              o && "#" !== o && (r += "#" === o.charAt(0) ? o : "#" + o),
              r);
          var t, n, r, a, i, s, o;
        }
        function x(e, t) {
          return (
            void 0 === t && (t = null),
            (0, a.Z)(
              { pathname: d.pathname, hash: "", search: "" },
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    if (e) {
                      var n = e.indexOf("#");
                      n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
                      var r = e.indexOf("?");
                      r >= 0 &&
                        ((t.search = e.substr(r)), (e = e.substr(0, r))),
                        e && (t.pathname = e);
                    }
                    return t;
                  })(e)
                : e,
              { state: t, key: Math.random().toString(36).substr(2, 8) }
            )
          );
        }
        function y(e, t) {
          return [{ usr: e.state, key: e.key, idx: t }, v(e)];
        }
        function P(e, t, n) {
          return (
            !m.length || (m.call({ action: e, location: t, retry: n }), !1)
          );
        }
        function b(e) {
          h = e;
          var t = u();
          (f = t[0]), (d = t[1]), g.call({ action: h, location: d });
        }
        function _(e) {
          s.go(e);
        }
        return (
          null == f &&
            ((f = 0), s.replaceState((0, a.Z)({}, s.state, { idx: f }), "")),
          {
            get action() {
              return h;
            },
            get location() {
              return d;
            },
            createHref: v,
            push: function e(t, a) {
              var i = r.Push,
                o = x(t, a);
              if (
                P(i, o, function () {
                  e(t, a);
                })
              ) {
                var l = y(o, f + 1),
                  u = l[0],
                  c = l[1];
                try {
                  s.pushState(u, "", c);
                } catch (e) {
                  n.location.assign(c);
                }
                b(i);
              }
            },
            replace: function e(t, n) {
              var a = r.Replace,
                i = x(t, n);
              if (
                P(a, i, function () {
                  e(t, n);
                })
              ) {
                var o = y(i, f),
                  l = o[0],
                  u = o[1];
                s.replaceState(l, "", u), b(a);
              }
            },
            go: _,
            back: function () {
              _(-1);
            },
            forward: function () {
              _(1);
            },
            listen: function (e) {
              return g.push(e);
            },
            block: function (e) {
              var t = m.push(e);
              return (
                1 === m.length && n.addEventListener(i, o),
                function () {
                  t(), m.length || n.removeEventListener(i, o);
                }
              );
            },
          }
        );
      }
      function o(e) {
        e.preventDefault(), (e.returnValue = "");
      }
      function l() {
        var e = [];
        return {
          get length() {
            return e.length;
          },
          push: function (t) {
            return (
              e.push(t),
              function () {
                e = e.filter(function (e) {
                  return e !== t;
                });
              }
            );
          },
          call: function (t) {
            e.forEach(function (e) {
              return e && e(t);
            });
          },
        };
      }
    },
    96974: (e, t, n) => {
      n.d(t, {
        AW: () => I,
        F0: () => $,
        Fg: () => k,
        TH: () => j,
        UO: () => A,
        WU: () => E,
        Z5: () => C,
        oQ: () => _,
        s0: () => S,
      });
      var r = n(77130),
        a = n(67294);
      const i = (0, a.createContext)(null),
        s = (0, a.createContext)(null),
        o = (0, a.createContext)({ outlet: null, matches: [] });
      function l(e, t) {
        if (!e) throw new Error(t);
      }
      function u(e, t, n) {
        void 0 === n && (n = "/");
        let a = v(("string" == typeof t ? (0, r.cP)(t) : t).pathname || "/", n);
        if (null == a) return null;
        let i = c(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  return e.length === t.length &&
                    e.slice(0, -1).every((e, n) => e === t[n])
                    ? e[e.length - 1] - t[t.length - 1]
                    : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex)
                )
          );
        })(i);
        let s = null;
        for (let e = 0; null == s && e < i.length; ++e) s = d(i[e], a);
        return s;
      }
      function c(e, t, n, r) {
        return (
          void 0 === t && (t = []),
          void 0 === n && (n = []),
          void 0 === r && (r = ""),
          e.forEach((e, a) => {
            let i = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: a,
              route: e,
            };
            i.relativePath.startsWith("/") &&
              (i.relativePath.startsWith(r) || l(!1),
              (i.relativePath = i.relativePath.slice(r.length)));
            let s = x([r, i.relativePath]),
              o = n.concat(i);
            e.children &&
              e.children.length > 0 &&
              (!0 === e.index && l(!1), c(e.children, t, o, s)),
              (null != e.path || e.index) &&
                t.push({ path: s, score: f(s, e.index), routesMeta: o });
          }),
          t
        );
      }
      const h = /^:\w+$/,
        p = (e) => "*" === e;
      function f(e, t) {
        let n = e.split("/"),
          r = n.length;
        return (
          n.some(p) && (r += -2),
          t && (r += 2),
          n
            .filter((e) => !p(e))
            .reduce((e, t) => e + (h.test(t) ? 3 : "" === t ? 1 : 10), r)
        );
      }
      function d(e, t) {
        let { routesMeta: n } = e,
          r = {},
          a = "/",
          i = [];
        for (let e = 0; e < n.length; ++e) {
          let s = n[e],
            o = e === n.length - 1,
            l = "/" === a ? t : t.slice(a.length) || "/",
            u = g(
              { path: s.relativePath, caseSensitive: s.caseSensitive, end: o },
              l
            );
          if (!u) return null;
          Object.assign(r, u.params);
          let c = s.route;
          i.push({
            params: r,
            pathname: x([a, u.pathname]),
            pathnameBase: y(x([a, u.pathnameBase])),
            route: c,
          }),
            "/" !== u.pathnameBase && (a = x([a, u.pathnameBase]));
        }
        return i;
      }
      function g(e, t) {
        "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [n, r] = (function (e, t, n) {
            void 0 === t && (t = !1), void 0 === n && (n = !0);
            let r = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, (e, t) => (r.push(t), "([^\\/]+)"));
            return (
              e.endsWith("*")
                ? (r.push("*"),
                  (a +=
                    "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
                : (a += n ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)"),
              [new RegExp(a, t ? void 0 : "i"), r]
            );
          })(e.path, e.caseSensitive, e.end),
          a = t.match(n);
        if (!a) return null;
        let i = a[0],
          s = i.replace(/(.)\/+$/, "$1"),
          o = a.slice(1);
        return {
          params: r.reduce((e, t, n) => {
            if ("*" === t) {
              let e = o[n] || "";
              s = i.slice(0, i.length - e.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (t) {
                  return e;
                }
              })(o[n] || "")),
              e
            );
          }, {}),
          pathname: i,
          pathnameBase: s,
          pattern: e,
        };
      }
      function m(e, t, n) {
        let a,
          i = "string" == typeof e ? (0, r.cP)(e) : e,
          s = "" === e || "" === i.pathname ? "/" : i.pathname;
        if (null == s) a = n;
        else {
          let e = t.length - 1;
          if (s.startsWith("..")) {
            let t = s.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            i.pathname = t.join("/");
          }
          a = e >= 0 ? t[e] : "/";
        }
        let o = (function (e, t) {
          void 0 === t && (t = "/");
          let {
              pathname: n,
              search: a = "",
              hash: i = "",
            } = "string" == typeof e ? (0, r.cP)(e) : e,
            s = n
              ? n.startsWith("/")
                ? n
                : (function (e, t) {
                    let n = t.replace(/\/+$/, "").split("/");
                    return (
                      e.split("/").forEach((e) => {
                        ".." === e
                          ? n.length > 1 && n.pop()
                          : "." !== e && n.push(e);
                      }),
                      n.length > 1 ? n.join("/") : "/"
                    );
                  })(n, t)
              : t;
          return { pathname: s, search: P(a), hash: b(i) };
        })(i, a);
        return (
          s &&
            "/" !== s &&
            s.endsWith("/") &&
            !o.pathname.endsWith("/") &&
            (o.pathname += "/"),
          o
        );
      }
      function v(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let n = e.charAt(t.length);
        return n && "/" !== n ? null : e.slice(t.length) || "/";
      }
      const x = (e) => e.join("/").replace(/\/\/+/g, "/"),
        y = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        P = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        b = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      function _(e) {
        w() || l(!1);
        let { basename: t, navigator: n } = (0, a.useContext)(i),
          { hash: s, pathname: o, search: u } = E(e),
          c = o;
        if ("/" !== t) {
          let n = (function (e) {
              return "" === e || "" === e.pathname
                ? "/"
                : "string" == typeof e
                ? (0, r.cP)(e).pathname
                : e.pathname;
            })(e),
            a = null != n && n.endsWith("/");
          c = "/" === o ? t + (a ? "/" : "") : x([t, o]);
        }
        return n.createHref({ pathname: c, search: u, hash: s });
      }
      function w() {
        return null != (0, a.useContext)(s);
      }
      function j() {
        return w() || l(!1), (0, a.useContext)(s).location;
      }
      function S() {
        w() || l(!1);
        let { basename: e, navigator: t } = (0, a.useContext)(i),
          { matches: n } = (0, a.useContext)(o),
          { pathname: r } = j(),
          s = JSON.stringify(n.map((e) => e.pathnameBase)),
          u = (0, a.useRef)(!1);
        return (
          (0, a.useEffect)(() => {
            u.current = !0;
          }),
          (0, a.useCallback)(
            function (n, a) {
              if ((void 0 === a && (a = {}), !u.current)) return;
              if ("number" == typeof n) return void t.go(n);
              let i = m(n, JSON.parse(s), r);
              "/" !== e && (i.pathname = x([e, i.pathname])),
                (a.replace ? t.replace : t.push)(i, a.state);
            },
            [e, t, s, r]
          )
        );
      }
      function A() {
        let { matches: e } = (0, a.useContext)(o),
          t = e[e.length - 1];
        return t ? t.params : {};
      }
      function E(e) {
        let { matches: t } = (0, a.useContext)(o),
          { pathname: n } = j(),
          r = JSON.stringify(t.map((e) => e.pathnameBase));
        return (0, a.useMemo)(() => m(e, JSON.parse(r), n), [e, r, n]);
      }
      function k(e) {
        let { to: t, replace: n, state: r } = e;
        w() || l(!1);
        let i = S();
        return (
          (0, a.useEffect)(() => {
            i(t, { replace: n, state: r });
          }),
          null
        );
      }
      function I(e) {
        l(!1);
      }
      function $(e) {
        let {
          basename: t = "/",
          children: n = null,
          location: o,
          navigationType: u = r.aU.Pop,
          navigator: c,
          static: h = !1,
        } = e;
        w() && l(!1);
        let p = y(t),
          f = (0, a.useMemo)(
            () => ({ basename: p, navigator: c, static: h }),
            [p, c, h]
          );
        "string" == typeof o && (o = (0, r.cP)(o));
        let {
            pathname: d = "/",
            search: g = "",
            hash: m = "",
            state: x = null,
            key: P = "default",
          } = o,
          b = (0, a.useMemo)(() => {
            let e = v(d, p);
            return null == e
              ? null
              : { pathname: e, search: g, hash: m, state: x, key: P };
          }, [p, d, g, m, x, P]);
        return null == b
          ? null
          : (0, a.createElement)(
              i.Provider,
              { value: f },
              (0, a.createElement)(s.Provider, {
                children: n,
                value: { location: b, navigationType: u },
              })
            );
      }
      function C(e) {
        let { children: t, location: n } = e;
        return (function (e, t) {
          w() || l(!1);
          let { matches: n } = (0, a.useContext)(o),
            i = n[n.length - 1],
            s = i ? i.params : {},
            c = (i && i.pathname, i ? i.pathnameBase : "/");
          i && i.route;
          let h,
            p = j();
          if (t) {
            var f;
            let e = "string" == typeof t ? (0, r.cP)(t) : t;
            "/" === c ||
              (null == (f = e.pathname) ? void 0 : f.startsWith(c)) ||
              l(!1),
              (h = e);
          } else h = p;
          let d = h.pathname || "/",
            g = u(e, { pathname: "/" === c ? d : d.slice(c.length) || "/" });
          return (function (e, t) {
            return (
              void 0 === t && (t = []),
              null == e
                ? null
                : e.reduceRight(
                    (n, r, i) =>
                      (0, a.createElement)(o.Provider, {
                        children:
                          void 0 !== r.route.element ? r.route.element : n,
                        value: {
                          outlet: n,
                          matches: t.concat(e.slice(0, i + 1)),
                        },
                      }),
                    null
                  )
            );
          })(
            g &&
              g.map((e) =>
                Object.assign({}, e, {
                  params: Object.assign({}, s, e.params),
                  pathname: x([c, e.pathname]),
                  pathnameBase:
                    "/" === e.pathnameBase ? c : x([c, e.pathnameBase]),
                })
              ),
            n
          );
        })(T(t), n);
      }
      function T(e) {
        let t = [];
        return (
          a.Children.forEach(e, (e) => {
            if (!(0, a.isValidElement)(e)) return;
            if (e.type === a.Fragment)
              return void t.push.apply(t, T(e.props.children));
            e.type !== I && l(!1);
            let n = {
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              index: e.props.index,
              path: e.props.path,
            };
            e.props.children && (n.children = T(e.props.children)), t.push(n);
          }),
          t
        );
      }
    },
    77130: (e, t, n) => {
      var r;
      function a(e) {
        var t = e.pathname,
          n = void 0 === t ? "/" : t,
          r = e.search,
          a = void 0 === r ? "" : r,
          i = e.hash,
          s = void 0 === i ? "" : i;
        return (
          a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a),
          s && "#" !== s && (n += "#" === s.charAt(0) ? s : "#" + s),
          n
        );
      }
      function i(e) {
        var t = {};
        if (e) {
          var n = e.indexOf("#");
          n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
          var r = e.indexOf("?");
          r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e);
        }
        return t;
      }
      n.d(t, { Ep: () => a, aU: () => r, cP: () => i }),
        (function (e) {
          (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
        })(r || (r = {}));
    },
    72029: (e, t, n) => {
      t.c = void 0;
      const r = n(55928),
        a = n(29558);
      t.c = class {
        constructor() {
          (this._queues = {}),
            (this._inProgress = null),
            (this._currentIndex = 0),
            (this._maxIndex = 0),
            (this._logger = null),
            (this._beforePriorityRun = new a.Event()),
            (this._afterPriorityRun = new a.Event()),
            (this._finished = new a.Event()),
            (this._executeLoader = async (e, t, n) => {
              var r, a;
              try {
                await e();
              } catch (e) {
                null === (r = this._logger) ||
                  void 0 === r ||
                  r.warn(
                    "Failed to process queue item at priority =",
                    t,
                    " at index =",
                    n || "?"
                  ),
                  null === (a = this._logger) || void 0 === a || a.error(e);
              }
            });
        }
        get currentPriority() {
          return this._currentIndex;
        }
        get inProgress() {
          return this._inProgress;
        }
        get beforePriorityRun() {
          return this._beforePriorityRun.expose();
        }
        get afterPriorityRun() {
          return this._afterPriorityRun.expose();
        }
        get finished() {
          return this._finished.expose();
        }
        withLogger(e) {
          return (
            (this._logger = (0, r.createLogger)(`[Queue:${e || "?"}]`)), this
          );
        }
        enqueue(e, t) {
          const n = Math.round(t || 0);
          if (
            (this._inProgress && n < this._currentIndex) ||
            !1 === this._inProgress
          )
            return this._executeLoader(e, n, 1e3), () => !1;
          const r = this.getQueue(n);
          return (
            r.push(e),
            (this._maxIndex = Math.max(this._maxIndex, n)),
            () => {
              if (null != this._inProgress && this._currentIndex >= n)
                return !1;
              const t = r.findIndex((t) => t === e);
              return t >= 0 && (r.splice(t, 1), !0);
            }
          );
        }
        async start() {
          var e;
          if (!this._inProgress) {
            this._inProgress = !0;
            try {
              await this.tryStartQueue();
            } catch (t) {
              return (
                null === (e = this._logger) ||
                  void 0 === e ||
                  e.warn("Failed to process queue:", t),
                !1
              );
            }
            return !0;
          }
        }
        getQueue(e = 0) {
          let t = this._queues[e];
          return t || ((t = []), (this._queues[e] = t)), t;
        }
        async tryStartQueue() {
          var e, t, n, r;
          let a = null,
            i = 0;
          for (
            await this._beforePriorityRun.triggerAsync(this._currentIndex);
            (null === (e = a = this._queues[this._currentIndex]) || void 0 === e
              ? void 0
              : e.length) && !(i++ > 5);

          ) {
            null === (t = this._logger) ||
              void 0 === t ||
              t.log(
                "Processing priority =",
                this._currentIndex,
                "; count =",
                a.length
              );
            const e = a.slice();
            (a.length = 0),
              await Promise.all(
                e.map((e, t) => this._executeLoader(e, this._currentIndex, t))
              );
          }
          if (
            ((null == a ? void 0 : a.length) ||
              0 !== i ||
              null === (n = this._logger) ||
              void 0 === n ||
              n.log("Skipping priority =", this._currentIndex, "; no items"),
            await this._afterPriorityRun.triggerAsync(this._currentIndex),
            this._currentIndex + 1 > this._maxIndex)
          )
            return (
              (this._inProgress = !1),
              null === (r = this._logger) ||
                void 0 === r ||
                r.log("Finished processing at index =", this._currentIndex),
              void this._finished.trigger()
            );
          ++this._currentIndex, await this.tryStartQueue();
        }
      };
    },
    75677: (e, t, n) => {
      function r() {
        return (
          (r = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          r.apply(this, arguments)
        );
      }
      n.d(t, { Z: () => r });
    },
  },
]);
//# sourceMappingURL=395.395.aacb3c.js.map
