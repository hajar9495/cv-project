(() => {
  var e = {
      4659: (e, t, n) => {
        "use strict";
        var r = n(8715),
          o = n(1147),
          a = Object.assign,
          i = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          l = Symbol.for("react.context"),
          s = Symbol.for("react.memo_cache_sentinel"),
          u = Object.prototype.hasOwnProperty,
          c = [],
          f = null;
        function getPrimitiveStackCache() {
          if (null === f) {
            var e = new Map();
            try {
              if (
                (g.useContext({
                  _currentValue: null,
                }),
                g.useState(null),
                g.useReducer(function (e) {
                  return e;
                }, null),
                g.useRef(null),
                "function" == typeof g.useCacheRefresh && g.useCacheRefresh(),
                g.useLayoutEffect(function () {}),
                g.useInsertionEffect(function () {}),
                g.useEffect(function () {}),
                g.useImperativeHandle(void 0, function () {
                  return null;
                }),
                g.useDebugValue(null),
                g.useCallback(function () {}),
                g.useTransition(),
                g.useSyncExternalStore(
                  function () {
                    return function () {};
                  },
                  function () {
                    return null;
                  },
                  function () {
                    return null;
                  }
                ),
                g.useDeferredValue(null),
                g.useMemo(function () {
                  return null;
                }),
                "function" == typeof g.useMemoCache && g.useMemoCache(0),
                "function" == typeof g.useOptimistic &&
                  g.useOptimistic(null, function (e) {
                    return e;
                  }),
                "function" == typeof g.useFormState &&
                  g.useFormState(function (e) {
                    return e;
                  }, null),
                "function" == typeof g.useActionState &&
                  g.useActionState(function (e) {
                    return e;
                  }, null),
                "function" == typeof g.use)
              ) {
                g.use({
                  $$typeof: l,
                  _currentValue: null,
                }),
                  g.use({
                    then: function () {},
                    status: "fulfilled",
                    value: null,
                  });
                try {
                  g.use({
                    then: function () {},
                  });
                } catch (e) {}
              }
              g.useId(),
                "function" == typeof g.useHostTransitionStatus &&
                  g.useHostTransitionStatus();
            } finally {
              var t = c;
              c = [];
            }
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              e.set(o.primitive, r.parse(o.stackError));
            }
            f = e;
          }
          return f;
        }
        var p = null,
          d = null,
          m = null;
        function nextHook() {
          var e = d;
          return null !== e && (d = e.next), e;
        }
        function readContext(e) {
          if (null === p) return e._currentValue;
          if (null === m)
            throw Error(
              "Context reads do not line up with context dependencies. This is a bug in React Debug Tools."
            );
          return (
            u.call(m, "memoizedValue")
              ? ((e = m.memoizedValue), (m = m.next))
              : (e = e._currentValue),
            e
          );
        }
        var h = Error(
            "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`"
          ),
          g = {
            use: function (e) {
              if (null !== e && "object" == typeof e) {
                if ("function" == typeof e.then) {
                  switch (e.status) {
                    case "fulfilled":
                      var t = e.value;
                      return (
                        c.push({
                          displayName: null,
                          primitive: "Promise",
                          stackError: Error(),
                          value: t,
                          debugInfo:
                            void 0 === e._debugInfo ? null : e._debugInfo,
                          dispatcherHookName: "Use",
                        }),
                        t
                      );
                    case "rejected":
                      throw e.reason;
                  }
                  throw (
                    (c.push({
                      displayName: null,
                      primitive: "Unresolved",
                      stackError: Error(),
                      value: e,
                      debugInfo: void 0 === e._debugInfo ? null : e._debugInfo,
                      dispatcherHookName: "Use",
                    }),
                    h)
                  );
                }
                if (e.$$typeof === l)
                  return (
                    (t = readContext(e)),
                    c.push({
                      displayName: e.displayName || "Context",
                      primitive: "Context (use)",
                      stackError: Error(),
                      value: t,
                      debugInfo: null,
                      dispatcherHookName: "Use",
                    }),
                    t
                  );
              }
              throw Error(
                "An unsupported type was passed to use(): " + String(e)
              );
            },
            readContext,
            useCacheRefresh: function () {
              var e = nextHook();
              return (
                c.push({
                  displayName: null,
                  primitive: "CacheRefresh",
                  stackError: Error(),
                  value: null !== e ? e.memoizedState : function () {},
                  debugInfo: null,
                  dispatcherHookName: "CacheRefresh",
                }),
                function () {}
              );
            },
            useCallback: function (e) {
              var t = nextHook();
              return (
                c.push({
                  displayName: null,
                  primitive: "Callback",
                  stackError: Error(),
                  value: null !== t ? t.memoizedState[0] : e,
                  debugInfo: null,
                  dispatcherHookName: "Callback",
                }),
                e
              );
            },
            useContext: function (e) {
              var t = readContext(e);
              return (
                c.push({
                  displayName: e.displayName || null,
                  primitive: "Context",
                  stackError: Error(),
                  value: t,
                  debugInfo: null,
                  dispatcherHookName: "Context",
                }),
                t
              );
            },
            useEffect: function (e) {
              nextHook(),
                c.push({
                  displayName: null,
                  primitive: "Effect",
                  stackError: Error(),
                  value: e,
                  debugInfo: null,
                  dispatcherHookName: "Effect",
                });
            },
            useImperativeHandle: function (e) {
              nextHook();
              var t = void 0;
              null !== e && "object" == typeof e && (t = e.current),
                c.push({
                  displayName: null,
                  primitive: "ImperativeHandle",
                  stackError: Error(),
                  value: t,
                  debugInfo: null,
                  dispatcherHookName: "ImperativeHandle",
                });
            },
            useDebugValue: function (e, t) {
              c.push({
                displayName: null,
                primitive: "DebugValue",
                stackError: Error(),
                value: "function" == typeof t ? t(e) : e,
                debugInfo: null,
                dispatcherHookName: "DebugValue",
              });
            },
            useLayoutEffect: function (e) {
              nextHook(),
                c.push({
                  displayName: null,
                  primitive: "LayoutEffect",
                  stackError: Error(),
                  value: e,
                  debugInfo: null,
                  dispatcherHookName: "LayoutEffect",
                });
            },
            useInsertionEffect: function (e) {
              nextHook(),
                c.push({
                  displayName: null,
                  primitive: "InsertionEffect",
                  stackError: Error(),
                  value: e,
                  debugInfo: null,
                  dispatcherHookName: "InsertionEffect",
                });
            },
            useMemo: function (e) {
              var t = nextHook();
              return (
                (e = null !== t ? t.memoizedState[0] : e()),
                c.push({
                  displayName: null,
                  primitive: "Memo",
                  stackError: Error(),
                  value: e,
                  debugInfo: null,
                  dispatcherHookName: "Memo",
                }),
                e
              );
            },
            useMemoCache: function (e) {
              var t,
                n = p;
              if (null == n) return [];
              if (
                null == (n = null == (t = n.updateQueue) ? void 0 : t.memoCache)
              )
                return [];
              if (void 0 === (t = n.data[n.index])) {
                t = n.data[n.index] = Array(e);
                for (var r = 0; r < e; r++) t[r] = s;
              }
              return n.index++, t;
            },
            useOptimistic: function (e) {
              var t = nextHook();
              return (
                (e = null !== t ? t.memoizedState : e),
                c.push({
                  displayName: null,
                  primitive: "Optimistic",
                  stackError: Error(),
                  value: e,
                  debugInfo: null,
                  dispatcherHookName: "Optimistic",
                }),
                [e, function () {}]
              );
            },
            useReducer: function (e, t, n) {
              return (
                (t =
                  null !== (e = nextHook())
                    ? e.memoizedState
                    : void 0 !== n
                    ? n(t)
                    : t),
                c.push({
                  displayName: null,
                  primitive: "Reducer",
                  stackError: Error(),
                  value: t,
                  debugInfo: null,
                  dispatcherHookName: "Reducer",
                }),
                [t, function () {}]
              );
            },
            useRef: function (e) {
              var t = nextHook();
              return (
                (e =
                  null !== t
                    ? t.memoizedState
                    : {
                        current: e,
                      }),
                c.push({
                  displayName: null,
                  primitive: "Ref",
                  stackError: Error(),
                  value: e.current,
                  debugInfo: null,
                  dispatcherHookName: "Ref",
                }),
                e
              );
            },
            useState: function (e) {
              var t = nextHook();
              return (
                (e =
                  null !== t
                    ? t.memoizedState
                    : "function" == typeof e
                    ? e()
                    : e),
                c.push({
                  displayName: null,
                  primitive: "State",
                  stackError: Error(),
                  value: e,
                  debugInfo: null,
                  dispatcherHookName: "State",
                }),
                [e, function () {}]
              );
            },
            useTransition: function () {
              var e = nextHook();
              return (
                nextHook(),
                (e = null !== e && e.memoizedState),
                c.push({
                  displayName: null,
                  primitive: "Transition",
                  stackError: Error(),
                  value: e,
                  debugInfo: null,
                  dispatcherHookName: "Transition",
                }),
                [e, function () {}]
              );
            },
            useSyncExternalStore: function (e, t) {
              return (
                nextHook(),
                nextHook(),
                (e = t()),
                c.push({
                  displayName: null,
                  primitive: "SyncExternalStore",
                  stackError: Error(),
                  value: e,
                  debugInfo: null,
                  dispatcherHookName: "SyncExternalStore",
                }),
                e
              );
            },
            useDeferredValue: function (e) {
              var t = nextHook();
              return (
                (e = null !== t ? t.memoizedState : e),
                c.push({
                  displayName: null,
                  primitive: "DeferredValue",
                  stackError: Error(),
                  value: e,
                  debugInfo: null,
                  dispatcherHookName: "DeferredValue",
                }),
                e
              );
            },
            useId: function () {
              var e = nextHook();
              return (
                (e = null !== e ? e.memoizedState : ""),
                c.push({
                  displayName: null,
                  primitive: "Id",
                  stackError: Error(),
                  value: e,
                  debugInfo: null,
                  dispatcherHookName: "Id",
                }),
                e
              );
            },
            useFormState: function (e, t) {
              var n = nextHook();
              nextHook(), nextHook(), (e = Error());
              var r = null,
                o = null;
              if (null !== n)
                if (
                  "object" == typeof (t = n.memoizedState) &&
                  null !== t &&
                  "function" == typeof t.then
                )
                  switch (t.status) {
                    case "fulfilled":
                      var a = t.value;
                      r = void 0 === t._debugInfo ? null : t._debugInfo;
                      break;
                    case "rejected":
                      o = t.reason;
                      break;
                    default:
                      (o = h),
                        (r = void 0 === t._debugInfo ? null : t._debugInfo),
                        (a = t);
                  }
                else a = t;
              else a = t;
              if (
                (c.push({
                  displayName: null,
                  primitive: "FormState",
                  stackError: e,
                  value: a,
                  debugInfo: r,
                  dispatcherHookName: "FormState",
                }),
                null !== o)
              )
                throw o;
              return [a, function () {}, !1];
            },
            useActionState: function (e, t) {
              var n = nextHook();
              nextHook(), nextHook(), (e = Error());
              var r = null,
                o = null;
              if (null !== n)
                if (
                  "object" == typeof (t = n.memoizedState) &&
                  null !== t &&
                  "function" == typeof t.then
                )
                  switch (t.status) {
                    case "fulfilled":
                      var a = t.value;
                      r = void 0 === t._debugInfo ? null : t._debugInfo;
                      break;
                    case "rejected":
                      o = t.reason;
                      break;
                    default:
                      (o = h),
                        (r = void 0 === t._debugInfo ? null : t._debugInfo),
                        (a = t);
                  }
                else a = t;
              else a = t;
              if (
                (c.push({
                  displayName: null,
                  primitive: "ActionState",
                  stackError: e,
                  value: a,
                  debugInfo: r,
                  dispatcherHookName: "ActionState",
                }),
                null !== o)
              )
                throw o;
              return [a, function () {}, !1];
            },
            useHostTransitionStatus: function () {
              var e = readContext({
                _currentValue: null,
              });
              return (
                c.push({
                  displayName: null,
                  primitive: "HostTransitionStatus",
                  stackError: Error(),
                  value: e,
                  debugInfo: null,
                  dispatcherHookName: "HostTransitionStatus",
                }),
                e
              );
            },
          },
          y =
            "undefined" == typeof Proxy
              ? g
              : new Proxy(g, {
                  get: function (e, t) {
                    if (e.hasOwnProperty(t)) return e[t];
                    throw (
                      (((e = Error("Missing method in Dispatcher: " + t)).name =
                        "ReactDebugToolsUnsupportedHookError"),
                      e)
                    );
                  },
                }),
          b = 0;
        function findSharedIndex(e, t, n) {
          var r = t[n].source,
            o = 0;
          e: for (; o < e.length; o++)
            if (e[o].source === r) {
              for (
                var a = n + 1, i = o + 1;
                a < t.length && i < e.length;
                a++, i++
              )
                if (e[i].source !== t[a].source) continue e;
              return o;
            }
          return -1;
        }
        function parseHookName(e) {
          if (!e) return "";
          var t = e.lastIndexOf("[as ");
          if (-1 !== t) return parseHookName(e.slice(t + 4, -1));
          if (
            ((t = -1 === (t = e.lastIndexOf(".")) ? 0 : t + 1),
            "use" === e.slice(t, t + 3))
          ) {
            if (3 == e.length - t) return "Use";
            t += 3;
          }
          return e.slice(t);
        }
        function buildTree(e, t) {
          for (
            var n = [], o = null, a = n, i = 0, l = [], s = 0;
            s < t.length;
            s++
          ) {
            var u = t[s],
              c = e,
              f = r.parse(u.stackError);
            e: {
              var p = f,
                d = findSharedIndex(p, c, b);
              if (-1 !== d) c = d;
              else {
                for (var m = 0; m < c.length && 5 > m; m++)
                  if (-1 !== (d = findSharedIndex(p, c, m))) {
                    (b = m), (c = d);
                    break e;
                  }
                c = -1;
              }
            }
            e: {
              if (
                ((p = f),
                void 0 !== (m = getPrimitiveStackCache().get(u.primitive)))
              )
                for (d = 0; d < m.length && d < p.length; d++)
                  if (m[d].source !== p[d].source) {
                    (m = d < p.length - 1) &&
                      ((m = u.dispatcherHookName),
                      (m = parseHookName(p[d].functionName) === m)),
                      m && ++d < p.length - 1 && d++,
                      (p = d);
                    break e;
                  }
              p = -1;
            }
            if (
              ((p = (f =
                -1 === c || -1 === p || 2 > c - p
                  ? -1 === p
                    ? [null, null]
                    : [f[p - 1], null]
                  : [f[p - 1], f.slice(p, c - 1)])[0]),
              (f = f[1]),
              null === (c = u.displayName) &&
                null !== p &&
                (c =
                  parseHookName(p.functionName) ||
                  parseHookName(u.dispatcherHookName)),
              null !== f)
            ) {
              if (((p = 0), null !== o)) {
                for (
                  ;
                  p < f.length &&
                  p < o.length &&
                  f[f.length - p - 1].source === o[o.length - p - 1].source;

                )
                  p++;
                for (o = o.length - 1; o > p; o--) a = l.pop();
              }
              for (o = f.length - p - 1; 1 <= o; o--)
                (p = []),
                  (d = f[o]),
                  (d = {
                    id: null,
                    isStateEditable: !1,
                    name: parseHookName(f[o - 1].functionName),
                    value: void 0,
                    subHooks: p,
                    debugInfo: null,
                    hookSource: {
                      lineNumber: d.lineNumber,
                      columnNumber: d.columnNumber,
                      functionName: d.functionName,
                      fileName: d.fileName,
                    },
                  }),
                  a.push(d),
                  l.push(a),
                  (a = p);
              o = f;
            }
            (p = u.primitive),
              (d = u.debugInfo),
              (u = {
                id:
                  "Context" === p ||
                  "Context (use)" === p ||
                  "DebugValue" === p ||
                  "Promise" === p ||
                  "Unresolved" === p ||
                  "HostTransitionStatus" === p
                    ? null
                    : i++,
                isStateEditable: "Reducer" === p || "State" === p,
                name: c || p,
                value: u.value,
                subHooks: [],
                debugInfo: d,
                hookSource: null,
              }),
              (c = {
                lineNumber: null,
                functionName: null,
                fileName: null,
                columnNumber: null,
              }),
              f &&
                1 <= f.length &&
                ((f = f[0]),
                (c.lineNumber = f.lineNumber),
                (c.functionName = f.functionName),
                (c.fileName = f.fileName),
                (c.columnNumber = f.columnNumber)),
              (u.hookSource = c),
              a.push(u);
          }
          return processDebugValues(n, null), n;
        }
        function processDebugValues(e, t) {
          for (var n = [], r = 0; r < e.length; r++) {
            var o = e[r];
            "DebugValue" === o.name && 0 === o.subHooks.length
              ? (e.splice(r, 1), r--, n.push(o))
              : processDebugValues(o.subHooks, o);
          }
          null !== t &&
            (1 === n.length
              ? (t.value = n[0].value)
              : 1 < n.length &&
                (t.value = n.map(function (e) {
                  return e.value;
                })));
        }
        function handleRenderFunctionError(e) {
          if (e !== h) {
            if (
              e instanceof Error &&
              "ReactDebugToolsUnsupportedHookError" === e.name
            )
              throw e;
            var t = Error("Error rendering inspected component", {
              cause: e,
            });
            throw ((t.name = "ReactDebugToolsRenderError"), (t.cause = e), t);
          }
        }
        function inspectHooks(e, t, n) {
          null == n && (n = i);
          var o = n.H;
          n.H = y;
          try {
            var a = Error();
            e(t);
          } catch (e) {
            handleRenderFunctionError(e);
          } finally {
            (e = c), (c = []), (n.H = o);
          }
          return buildTree((n = r.parse(a)), e);
        }
        t.inspectHooksOfFiber = function (e, t) {
          if (
            (null == t && (t = i), 0 !== e.tag && 15 !== e.tag && 11 !== e.tag)
          )
            throw Error(
              "Unknown Fiber. Needs to be a function component to inspect hooks."
            );
          if (
            (getPrimitiveStackCache(),
            (d = e.memoizedState),
            (p = e),
            u.call(p, "dependencies"))
          ) {
            var n = p.dependencies;
            m = null !== n ? n.firstContext : null;
          } else if (u.call(p, "dependencies_old"))
            (n = p.dependencies_old), (m = null !== n ? n.firstContext : null);
          else if (u.call(p, "dependencies_new"))
            (n = p.dependencies_new), (m = null !== n ? n.firstContext : null);
          else {
            if (!u.call(p, "contextDependencies"))
              throw Error(
                "Unsupported React version. This is a bug in React Debug Tools."
              );
            (n = p.contextDependencies), (m = null !== n ? n.first : null);
          }
          n = e.type;
          var o = e.memoizedProps;
          if (n !== e.elementType && n && n.defaultProps) {
            o = a({}, o);
            var l = n.defaultProps;
            for (s in l) void 0 === o[s] && (o[s] = l[s]);
          }
          var s = new Map();
          try {
            if (null !== m && !u.call(m, "memoizedValue"))
              for (l = e; l; ) {
                if (10 === l.tag) {
                  var f = l.type;
                  void 0 !== f._context && (f = f._context),
                    s.has(f) ||
                      (s.set(f, f._currentValue),
                      (f._currentValue = l.memoizedProps.value));
                }
                l = l.return;
              }
            if (11 === e.tag) {
              var h = n.render;
              f = o;
              var g = e.ref,
                b = (e = t).H;
              e.H = y;
              try {
                var v = Error();
                h(f, g);
              } catch (e) {
                handleRenderFunctionError(e);
              } finally {
                var w = c;
                (c = []), (e.H = b);
              }
              return buildTree(r.parse(v), w);
            }
            return inspectHooks(n, o, t);
          } finally {
            (m = d = p = null),
              s.forEach(function (e, t) {
                return (t._currentValue = e);
              });
          }
        };
      },
      8830: (e, t, n) => {
        "use strict";
        e.exports = n(4659);
      },
      1377: (e, t) => {
        "use strict";
        var n = Symbol.for("react.transitional.element"),
          r = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler");
        Symbol.for("react.provider");
        var l = Symbol.for("react.consumer"),
          s = Symbol.for("react.context"),
          u = Symbol.for("react.forward_ref"),
          c = Symbol.for("react.suspense"),
          f = Symbol.for("react.suspense_list"),
          p = Symbol.for("react.memo"),
          d = Symbol.for("react.lazy"),
          m = Symbol.for("react.offscreen"),
          h = Symbol.for("react.client.reference");
        function typeOf(e) {
          if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
              case n:
                switch ((e = e.type)) {
                  case o:
                  case i:
                  case a:
                  case c:
                  case f:
                    return e;
                  default:
                    switch ((e = e && e.$$typeof)) {
                      case s:
                      case u:
                      case d:
                      case p:
                      case l:
                        return e;
                      default:
                        return t;
                    }
                }
              case r:
                return t;
            }
          }
        }
        (t.AI = l),
          (t.HQ = s),
          (t.A4 = u),
          (t.HY = o),
          (t.oM = d),
          (t._Y = p),
          (t.h_ = r),
          (t.Q1 = i),
          (t.nF = a),
          (t.n4 = c),
          (t.kK = function (e) {
            return "object" == typeof e && null !== e && e.$$typeof === n;
          }),
          (t.kM = typeOf);
      },
      5945: (e, t, n) => {
        "use strict";
        var r = n(397),
          o = Symbol.for("react.transitional.element"),
          a = Symbol.for("react.portal"),
          i = Symbol.for("react.fragment"),
          l = Symbol.for("react.strict_mode"),
          s = Symbol.for("react.profiler"),
          u = Symbol.for("react.consumer"),
          c = Symbol.for("react.context"),
          f = Symbol.for("react.forward_ref"),
          p = Symbol.for("react.suspense"),
          d = Symbol.for("react.suspense_list"),
          m = Symbol.for("react.memo"),
          h = Symbol.for("react.lazy"),
          g = Symbol.for("react.debug_trace_mode"),
          y = Symbol.for("react.offscreen"),
          b = Symbol.for("react.postpone"),
          v = Symbol.iterator;
        var w = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          C = Object.assign,
          S = {};
        function Component(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = S),
            (this.updater = n || w);
        }
        function ComponentDummy() {}
        function PureComponent(e, t, n) {
          (this.props = e),
            (this.context = t),
            (this.refs = S),
            (this.updater = n || w);
        }
        (Component.prototype.isReactComponent = {}),
          (Component.prototype.setState = function (e, t) {
            if ("object" != typeof e && "function" != typeof e && null != e)
              throw Error(
                "takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (Component.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (ComponentDummy.prototype = Component.prototype);
        var E = (PureComponent.prototype = new ComponentDummy());
        (E.constructor = PureComponent),
          C(E, Component.prototype),
          (E.isPureReactComponent = !0);
        var k = Array.isArray,
          _ = {
            H: null,
            A: null,
            T: null,
          },
          F = Object.prototype.hasOwnProperty;
        function ReactElement(e, t, n, r, a, i, l) {
          return (
            (n = l.ref),
            {
              $$typeof: o,
              type: e,
              key: t,
              ref: void 0 !== n ? n : null,
              props: l,
            }
          );
        }
        function isValidElement(e) {
          return "object" == typeof e && null !== e && e.$$typeof === o;
        }
        var T = /\/+/g;
        function getElementKey(e, t) {
          return "object" == typeof e && null !== e && null != e.key
            ? ((n = "" + e.key),
              (r = {
                "=": "=0",
                ":": "=2",
              }),
              "$" +
                n.replace(/[=:]/g, function (e) {
                  return r[e];
                }))
            : t.toString(36);
          var n, r;
        }
        function noop$1() {}
        function mapIntoArray(e, t, n, r, i) {
          var l = typeof e;
          ("undefined" !== l && "boolean" !== l) || (e = null);
          var s,
            u,
            c = !1;
          if (null === e) c = !0;
          else
            switch (l) {
              case "bigint":
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case o:
                  case a:
                    c = !0;
                    break;
                  case h:
                    return mapIntoArray((c = e._init)(e._payload), t, n, r, i);
                }
            }
          if (c)
            return (
              (i = i(e)),
              (c = "" === r ? "." + getElementKey(e, 0) : r),
              k(i)
                ? ((n = ""),
                  null != c && (n = c.replace(T, "$&/") + "/"),
                  mapIntoArray(i, t, n, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (isValidElement(i) &&
                    ((s = i),
                    (u =
                      n +
                      (!i.key || (e && e.key === i.key)
                        ? ""
                        : ("" + i.key).replace(T, "$&/") + "/") +
                      c),
                    (i = ReactElement(s.type, u, null, 0, 0, 0, s.props))),
                  t.push(i)),
              1
            );
          c = 0;
          var f,
            p = "" === r ? "." : r + ":";
          if (k(e))
            for (var d = 0; d < e.length; d++)
              c += mapIntoArray(
                (r = e[d]),
                t,
                n,
                (l = p + getElementKey(r, d)),
                i
              );
          else if (
            "function" ==
            typeof (d =
              null === (f = e) || "object" != typeof f
                ? null
                : "function" == typeof (f = (v && f[v]) || f["@@iterator"])
                ? f
                : null)
          )
            for (e = d.call(e), d = 0; !(r = e.next()).done; )
              c += mapIntoArray(
                (r = r.value),
                t,
                n,
                (l = p + getElementKey(r, d++)),
                i
              );
          else if ("object" === l) {
            if ("function" == typeof e.then)
              return mapIntoArray(
                (function (e) {
                  switch (e.status) {
                    case "fulfilled":
                      return e.value;
                    case "rejected":
                      throw e.reason;
                    default:
                      switch (
                        ("string" == typeof e.status
                          ? e.then(noop$1, noop$1)
                          : ((e.status = "pending"),
                            e.then(
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "fulfilled"), (e.value = t));
                              },
                              function (t) {
                                "pending" === e.status &&
                                  ((e.status = "rejected"), (e.reason = t));
                              }
                            )),
                        e.status)
                      ) {
                        case "fulfilled":
                          return e.value;
                        case "rejected":
                          throw e.reason;
                      }
                  }
                  throw e;
                })(e),
                t,
                n,
                r,
                i
              );
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          }
          return c;
        }
        function mapChildren(e, t, n) {
          if (null == e) return e;
          var r = [],
            o = 0;
          return (
            mapIntoArray(e, r, "", "", function (e) {
              return t.call(n, e, o++);
            }),
            r
          );
        }
        function lazyInitializer(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        function useOptimistic(e, t) {
          return _.H.useOptimistic(e, t);
        }
        var I =
          "function" == typeof reportError
            ? reportError
            : function (e) {
                if (
                  "object" == typeof window &&
                  "function" == typeof window.ErrorEvent
                ) {
                  var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      "object" == typeof e &&
                      null !== e &&
                      "string" == typeof e.message
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if ("object" == typeof r && "function" == typeof r.emit)
                  return void r.emit("uncaughtException", e);
                console.error(e);
              };
        function noop() {}
        (t.Children = {
          map: mapChildren,
          forEach: function (e, t, n) {
            mapChildren(
              e,
              function () {
                t.apply(this, arguments);
              },
              n
            );
          },
          count: function (e) {
            var t = 0;
            return (
              mapChildren(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              mapChildren(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!isValidElement(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = Component),
          (t.Fragment = i),
          (t.Profiler = s),
          (t.PureComponent = PureComponent),
          (t.StrictMode = l),
          (t.Suspense = p),
          (t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            _),
          (t.act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.cache = function (e) {
            return function () {
              return e.apply(null, arguments);
            };
          }),
          (t.cloneElement = function (e, t, n) {
            if (null == e)
              throw Error(
                "The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var r = C({}, e.props),
              o = e.key;
            if (null != t)
              for (a in (void 0 !== t.ref && void 0,
              void 0 !== t.key && (o = "" + t.key),
              t))
                !F.call(t, a) ||
                  "key" === a ||
                  "__self" === a ||
                  "__source" === a ||
                  ("ref" === a && void 0 === t.ref) ||
                  (r[a] = t[a]);
            var a = arguments.length - 2;
            if (1 === a) r.children = n;
            else if (1 < a) {
              for (var i = Array(a), l = 0; l < a; l++) i[l] = arguments[l + 2];
              r.children = i;
            }
            return ReactElement(e.type, o, null, 0, 0, 0, r);
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: c,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
              }).Provider = e),
              (e.Consumer = {
                $$typeof: u,
                _context: e,
              }),
              e
            );
          }),
          (t.createElement = function (e, t, n) {
            var r,
              o = {},
              a = null;
            if (null != t)
              for (r in (void 0 !== t.key && (a = "" + t.key), t))
                F.call(t, r) &&
                  "key" !== r &&
                  "__self" !== r &&
                  "__source" !== r &&
                  (o[r] = t[r]);
            var i = arguments.length - 2;
            if (1 === i) o.children = n;
            else if (1 < i) {
              for (var l = Array(i), s = 0; s < i; s++) l[s] = arguments[s + 2];
              o.children = l;
            }
            if (e && e.defaultProps)
              for (r in (i = e.defaultProps)) void 0 === o[r] && (o[r] = i[r]);
            return ReactElement(e, a, null, 0, 0, 0, o);
          }),
          (t.createRef = function () {
            return {
              current: null,
            };
          }),
          (t.experimental_useEffectEvent = function (e) {
            return _.H.useEffectEvent(e);
          }),
          (t.experimental_useOptimistic = function (e, t) {
            return useOptimistic(e, t);
          }),
          (t.forwardRef = function (e) {
            return {
              $$typeof: f,
              render: e,
            };
          }),
          (t.isValidElement = isValidElement),
          (t.lazy = function (e) {
            return {
              $$typeof: h,
              _payload: {
                _status: -1,
                _result: e,
              },
              _init: lazyInitializer,
            };
          }),
          (t.memo = function (e, t) {
            return {
              $$typeof: m,
              type: e,
              compare: void 0 === t ? null : t,
            };
          }),
          (t.startTransition = function (e) {
            var t = _.T,
              n = new Set();
            _.T = {
              _callbacks: n,
            };
            var r = _.T;
            try {
              var o = e();
              "object" == typeof o &&
                null !== o &&
                "function" == typeof o.then &&
                (n.forEach(function (e) {
                  return e(r, o);
                }),
                o.then(noop, I));
            } catch (e) {
              I(e);
            } finally {
              _.T = t;
            }
          }),
          (t.unstable_Activity = y),
          (t.unstable_DebugTracingMode = g),
          (t.unstable_SuspenseList = d),
          (t.unstable_getCacheForType = function (e) {
            var t = _.A;
            return t ? t.getCacheForType(e) : e();
          }),
          (t.unstable_postpone = function (e) {
            throw (((e = Error(e)).$$typeof = b), e);
          }),
          (t.unstable_useCacheRefresh = function () {
            return _.H.useCacheRefresh();
          }),
          (t.use = function (e) {
            return _.H.use(e);
          }),
          (t.useActionState = function (e, t, n) {
            return _.H.useActionState(e, t, n);
          }),
          (t.useCallback = function (e, t) {
            return _.H.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return _.H.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e, t) {
            return _.H.useDeferredValue(e, t);
          }),
          (t.useEffect = function (e, t) {
            return _.H.useEffect(e, t);
          }),
          (t.useId = function () {
            return _.H.useId();
          }),
          (t.useImperativeHandle = function (e, t, n) {
            return _.H.useImperativeHandle(e, t, n);
          }),
          (t.useInsertionEffect = function (e, t) {
            return _.H.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return _.H.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return _.H.useMemo(e, t);
          }),
          (t.useOptimistic = useOptimistic),
          (t.useReducer = function (e, t, n) {
            return _.H.useReducer(e, t, n);
          }),
          (t.useRef = function (e) {
            return _.H.useRef(e);
          }),
          (t.useState = function (e) {
            return _.H.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, n) {
            return _.H.useSyncExternalStore(e, t, n);
          }),
          (t.useTransition = function () {
            return _.H.useTransition();
          }),
          (t.version = "19.0.0-experimental-1717ab0171-20240508");
      },
      1147: (e, t, n) => {
        "use strict";
        e.exports = n(5945);
      },
      8715: function (e, t, n) {
        var r, o, a;
        !(function (i, l) {
          "use strict";
          (o = [n(7356)]),
            void 0 ===
              (a =
                "function" ==
                typeof (r = function (e) {
                  var t = /(^|@)\S+:\d+/,
                    n = /^\s*at .*(\S+:\d+|\(native\))/m,
                    r = /^(eval@)?(\[native code])?$/;
                  return {
                    parse: function (e) {
                      if (
                        void 0 !== e.stacktrace ||
                        void 0 !== e["opera#sourceloc"]
                      )
                        return this.parseOpera(e);
                      if (e.stack && e.stack.match(n))
                        return this.parseV8OrIE(e);
                      if (e.stack) return this.parseFFOrSafari(e);
                      throw new Error("Cannot parse given Error object");
                    },
                    extractLocation: function (e) {
                      if (-1 === e.indexOf(":")) return [e];
                      var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(
                        e.replace(/[()]/g, "")
                      );
                      return [t[1], t[2] || void 0, t[3] || void 0];
                    },
                    parseV8OrIE: function (t) {
                      return t.stack
                        .split("\n")
                        .filter(function (e) {
                          return !!e.match(n);
                        }, this)
                        .map(function (t) {
                          t.indexOf("(eval ") > -1 &&
                            (t = t
                              .replace(/eval code/g, "eval")
                              .replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
                          var n = t
                              .replace(/^\s+/, "")
                              .replace(/\(eval code/g, "("),
                            r = n.match(/ (\((.+):(\d+):(\d+)\)$)/),
                            o = (n = r ? n.replace(r[0], "") : n)
                              .split(/\s+/)
                              .slice(1),
                            a = this.extractLocation(r ? r[1] : o.pop()),
                            i = o.join(" ") || void 0,
                            l =
                              ["eval", "<anonymous>"].indexOf(a[0]) > -1
                                ? void 0
                                : a[0];
                          return new e({
                            functionName: i,
                            fileName: l,
                            lineNumber: a[1],
                            columnNumber: a[2],
                            source: t,
                          });
                        }, this);
                    },
                    parseFFOrSafari: function (t) {
                      return t.stack
                        .split("\n")
                        .filter(function (e) {
                          return !e.match(r);
                        }, this)
                        .map(function (t) {
                          if (
                            (t.indexOf(" > eval") > -1 &&
                              (t = t.replace(
                                / line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
                                ":$1"
                              )),
                            -1 === t.indexOf("@") && -1 === t.indexOf(":"))
                          )
                            return new e({
                              functionName: t,
                            });
                          var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                            r = t.match(n),
                            o = r && r[1] ? r[1] : void 0,
                            a = this.extractLocation(t.replace(n, ""));
                          return new e({
                            functionName: o,
                            fileName: a[0],
                            lineNumber: a[1],
                            columnNumber: a[2],
                            source: t,
                          });
                        }, this);
                    },
                    parseOpera: function (e) {
                      return !e.stacktrace ||
                        (e.message.indexOf("\n") > -1 &&
                          e.message.split("\n").length >
                            e.stacktrace.split("\n").length)
                        ? this.parseOpera9(e)
                        : e.stack
                        ? this.parseOpera11(e)
                        : this.parseOpera10(e);
                    },
                    parseOpera9: function (t) {
                      for (
                        var n = /Line (\d+).*script (?:in )?(\S+)/i,
                          r = t.message.split("\n"),
                          o = [],
                          a = 2,
                          i = r.length;
                        a < i;
                        a += 2
                      ) {
                        var l = n.exec(r[a]);
                        l &&
                          o.push(
                            new e({
                              fileName: l[2],
                              lineNumber: l[1],
                              source: r[a],
                            })
                          );
                      }
                      return o;
                    },
                    parseOpera10: function (t) {
                      for (
                        var n =
                            /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
                          r = t.stacktrace.split("\n"),
                          o = [],
                          a = 0,
                          i = r.length;
                        a < i;
                        a += 2
                      ) {
                        var l = n.exec(r[a]);
                        l &&
                          o.push(
                            new e({
                              functionName: l[3] || void 0,
                              fileName: l[2],
                              lineNumber: l[1],
                              source: r[a],
                            })
                          );
                      }
                      return o;
                    },
                    parseOpera11: function (n) {
                      return n.stack
                        .split("\n")
                        .filter(function (e) {
                          return !!e.match(t) && !e.match(/^Error created at/);
                        }, this)
                        .map(function (t) {
                          var n,
                            r = t.split("@"),
                            o = this.extractLocation(r.pop()),
                            a = r.shift() || "",
                            i =
                              a
                                .replace(/<anonymous function(: (\w+))?>/, "$2")
                                .replace(/\([^)]*\)/g, "") || void 0;
                          a.match(/\(([^)]*)\)/) &&
                            (n = a.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                          var l =
                            void 0 === n || "[arguments not available]" === n
                              ? void 0
                              : n.split(",");
                          return new e({
                            functionName: i,
                            args: l,
                            fileName: o[0],
                            lineNumber: o[1],
                            columnNumber: o[2],
                            source: t,
                          });
                        }, this);
                    },
                  };
                })
                  ? r.apply(t, o)
                  : r) || (e.exports = a);
        })();
      },
      3018: (e, t, n) => {
        "use strict";
        const r = n(5986),
          o = Symbol("max"),
          a = Symbol("length"),
          i = Symbol("lengthCalculator"),
          l = Symbol("allowStale"),
          s = Symbol("maxAge"),
          u = Symbol("dispose"),
          c = Symbol("noDisposeOnSet"),
          f = Symbol("lruList"),
          p = Symbol("cache"),
          d = Symbol("updateAgeOnGet"),
          naiveLength = () => 1;
        const get = (e, t, n) => {
            const r = e[p].get(t);
            if (r) {
              const t = r.value;
              if (isStale(e, t)) {
                if ((del(e, r), !e[l])) return;
              } else
                n && (e[d] && (r.value.now = Date.now()), e[f].unshiftNode(r));
              return t.value;
            }
          },
          isStale = (e, t) => {
            if (!t || (!t.maxAge && !e[s])) return !1;
            const n = Date.now() - t.now;
            return t.maxAge ? n > t.maxAge : e[s] && n > e[s];
          },
          trim = (e) => {
            if (e[a] > e[o])
              for (let t = e[f].tail; e[a] > e[o] && null !== t; ) {
                const n = t.prev;
                del(e, t), (t = n);
              }
          },
          del = (e, t) => {
            if (t) {
              const n = t.value;
              e[u] && e[u](n.key, n.value),
                (e[a] -= n.length),
                e[p].delete(n.key),
                e[f].removeNode(t);
            }
          };
        class m {
          constructor(e, t, n, r, o) {
            (this.key = e),
              (this.value = t),
              (this.length = n),
              (this.now = r),
              (this.maxAge = o || 0);
          }
        }
        const forEachStep = (e, t, n, r) => {
          let o = n.value;
          isStale(e, o) && (del(e, n), e[l] || (o = void 0)),
            o && t.call(r, o.value, o.key, e);
        };
        e.exports = class {
          constructor(e) {
            if (
              ("number" == typeof e &&
                (e = {
                  max: e,
                }),
              e || (e = {}),
              e.max && ("number" != typeof e.max || e.max < 0))
            )
              throw new TypeError("max must be a non-negative number");
            this[o] = e.max || 1 / 0;
            const t = e.length || naiveLength;
            if (
              ((this[i] = "function" != typeof t ? naiveLength : t),
              (this[l] = e.stale || !1),
              e.maxAge && "number" != typeof e.maxAge)
            )
              throw new TypeError("maxAge must be a number");
            (this[s] = e.maxAge || 0),
              (this[u] = e.dispose),
              (this[c] = e.noDisposeOnSet || !1),
              (this[d] = e.updateAgeOnGet || !1),
              this.reset();
          }
          set max(e) {
            if ("number" != typeof e || e < 0)
              throw new TypeError("max must be a non-negative number");
            (this[o] = e || 1 / 0), trim(this);
          }
          get max() {
            return this[o];
          }
          set allowStale(e) {
            this[l] = !!e;
          }
          get allowStale() {
            return this[l];
          }
          set maxAge(e) {
            if ("number" != typeof e)
              throw new TypeError("maxAge must be a non-negative number");
            (this[s] = e), trim(this);
          }
          get maxAge() {
            return this[s];
          }
          set lengthCalculator(e) {
            "function" != typeof e && (e = naiveLength),
              e !== this[i] &&
                ((this[i] = e),
                (this[a] = 0),
                this[f].forEach((e) => {
                  (e.length = this[i](e.value, e.key)), (this[a] += e.length);
                })),
              trim(this);
          }
          get lengthCalculator() {
            return this[i];
          }
          get length() {
            return this[a];
          }
          get itemCount() {
            return this[f].length;
          }
          rforEach(e, t) {
            t = t || this;
            for (let n = this[f].tail; null !== n; ) {
              const r = n.prev;
              forEachStep(this, e, n, t), (n = r);
            }
          }
          forEach(e, t) {
            t = t || this;
            for (let n = this[f].head; null !== n; ) {
              const r = n.next;
              forEachStep(this, e, n, t), (n = r);
            }
          }
          keys() {
            return this[f].toArray().map((e) => e.key);
          }
          values() {
            return this[f].toArray().map((e) => e.value);
          }
          reset() {
            this[u] &&
              this[f] &&
              this[f].length &&
              this[f].forEach((e) => this[u](e.key, e.value)),
              (this[p] = new Map()),
              (this[f] = new r()),
              (this[a] = 0);
          }
          dump() {
            return this[f]
              .map(
                (e) =>
                  !isStale(this, e) && {
                    k: e.key,
                    v: e.value,
                    e: e.now + (e.maxAge || 0),
                  }
              )
              .toArray()
              .filter((e) => e);
          }
          dumpLru() {
            return this[f];
          }
          set(e, t, n) {
            if ((n = n || this[s]) && "number" != typeof n)
              throw new TypeError("maxAge must be a number");
            const r = n ? Date.now() : 0,
              l = this[i](t, e);
            if (this[p].has(e)) {
              if (l > this[o]) return del(this, this[p].get(e)), !1;
              const i = this[p].get(e).value;
              return (
                this[u] && (this[c] || this[u](e, i.value)),
                (i.now = r),
                (i.maxAge = n),
                (i.value = t),
                (this[a] += l - i.length),
                (i.length = l),
                this.get(e),
                trim(this),
                !0
              );
            }
            const d = new m(e, t, l, r, n);
            return d.length > this[o]
              ? (this[u] && this[u](e, t), !1)
              : ((this[a] += d.length),
                this[f].unshift(d),
                this[p].set(e, this[f].head),
                trim(this),
                !0);
          }
          has(e) {
            if (!this[p].has(e)) return !1;
            const t = this[p].get(e).value;
            return !isStale(this, t);
          }
          get(e) {
            return get(this, e, !0);
          }
          peek(e) {
            return get(this, e, !1);
          }
          pop() {
            const e = this[f].tail;
            return e ? (del(this, e), e.value) : null;
          }
          del(e) {
            del(this, this[p].get(e));
          }
          load(e) {
            this.reset();
            const t = Date.now();
            for (let n = e.length - 1; n >= 0; n--) {
              const r = e[n],
                o = r.e || 0;
              if (0 === o) this.set(r.k, r.v);
              else {
                const e = o - t;
                e > 0 && this.set(r.k, r.v, e);
              }
            }
          }
          prune() {
            this[p].forEach((e, t) => get(this, t, !1));
          }
        };
      },
      397: (e) => {
        var t,
          n,
          r = (e.exports = {});
        function defaultSetTimout() {
          throw new Error("setTimeout has not been defined");
        }
        function defaultClearTimeout() {
          throw new Error("clearTimeout has not been defined");
        }
        function runTimeout(e) {
          if (t === setTimeout) return setTimeout(e, 0);
          if ((t === defaultSetTimout || !t) && setTimeout)
            return (t = setTimeout), setTimeout(e, 0);
          try {
            return t(e, 0);
          } catch (n) {
            try {
              return t.call(null, e, 0);
            } catch (n) {
              return t.call(this, e, 0);
            }
          }
        }
        !(function () {
          try {
            t = "function" == typeof setTimeout ? setTimeout : defaultSetTimout;
          } catch (e) {
            t = defaultSetTimout;
          }
          try {
            n =
              "function" == typeof clearTimeout
                ? clearTimeout
                : defaultClearTimeout;
          } catch (e) {
            n = defaultClearTimeout;
          }
        })();
        var o,
          a = [],
          i = !1,
          l = -1;
        function cleanUpNextTick() {
          i &&
            o &&
            ((i = !1),
            o.length ? (a = o.concat(a)) : (l = -1),
            a.length && drainQueue());
        }
        function drainQueue() {
          if (!i) {
            var e = runTimeout(cleanUpNextTick);
            i = !0;
            for (var t = a.length; t; ) {
              for (o = a, a = []; ++l < t; ) o && o[l].run();
              (l = -1), (t = a.length);
            }
            (o = null),
              (i = !1),
              (function (e) {
                if (n === clearTimeout) return clearTimeout(e);
                if ((n === defaultClearTimeout || !n) && clearTimeout)
                  return (n = clearTimeout), clearTimeout(e);
                try {
                  return n(e);
                } catch (t) {
                  try {
                    return n.call(null, e);
                  } catch (t) {
                    return n.call(this, e);
                  }
                }
              })(e);
          }
        }
        function Item(e, t) {
          (this.fun = e), (this.array = t);
        }
        function noop() {}
        (r.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
          a.push(new Item(e, t)), 1 !== a.length || i || runTimeout(drainQueue);
        }),
          (Item.prototype.run = function () {
            this.fun.apply(null, this.array);
          }),
          (r.title = "browser"),
          (r.browser = !0),
          (r.env = {}),
          (r.argv = []),
          (r.version = ""),
          (r.versions = {}),
          (r.on = noop),
          (r.addListener = noop),
          (r.once = noop),
          (r.off = noop),
          (r.removeListener = noop),
          (r.removeAllListeners = noop),
          (r.emit = noop),
          (r.prependListener = noop),
          (r.prependOnceListener = noop),
          (r.listeners = function (e) {
            return [];
          }),
          (r.binding = function (e) {
            throw new Error("process.binding is not supported");
          }),
          (r.cwd = function () {
            return "/";
          }),
          (r.chdir = function (e) {
            throw new Error("process.chdir is not supported");
          }),
          (r.umask = function () {
            return 0;
          });
      },
      7356: function (e, t) {
        var n, r, o;
        !(function (a, i) {
          "use strict";
          (r = []),
            void 0 ===
              (o =
                "function" ==
                typeof (n = function () {
                  function _isNumber(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e);
                  }
                  function _capitalize(e) {
                    return e.charAt(0).toUpperCase() + e.substring(1);
                  }
                  function _getter(e) {
                    return function () {
                      return this[e];
                    };
                  }
                  var e = ["isConstructor", "isEval", "isNative", "isToplevel"],
                    t = ["columnNumber", "lineNumber"],
                    n = ["fileName", "functionName", "source"],
                    r = ["args"],
                    o = e.concat(t, n, r);
                  function StackFrame(e) {
                    if (e)
                      for (var t = 0; t < o.length; t++)
                        void 0 !== e[o[t]] &&
                          this["set" + _capitalize(o[t])](e[o[t]]);
                  }
                  (StackFrame.prototype = {
                    getArgs: function () {
                      return this.args;
                    },
                    setArgs: function (e) {
                      if (
                        "[object Array]" !== Object.prototype.toString.call(e)
                      )
                        throw new TypeError("Args must be an Array");
                      this.args = e;
                    },
                    getEvalOrigin: function () {
                      return this.evalOrigin;
                    },
                    setEvalOrigin: function (e) {
                      if (e instanceof StackFrame) this.evalOrigin = e;
                      else {
                        if (!(e instanceof Object))
                          throw new TypeError(
                            "Eval Origin must be an Object or StackFrame"
                          );
                        this.evalOrigin = new StackFrame(e);
                      }
                    },
                    toString: function () {
                      var e = this.getFileName() || "",
                        t = this.getLineNumber() || "",
                        n = this.getColumnNumber() || "",
                        r = this.getFunctionName() || "";
                      return this.getIsEval()
                        ? e
                          ? "[eval] (" + e + ":" + t + ":" + n + ")"
                          : "[eval]:" + t + ":" + n
                        : r
                        ? r + " (" + e + ":" + t + ":" + n + ")"
                        : e + ":" + t + ":" + n;
                    },
                  }),
                    (StackFrame.fromString = function (e) {
                      var t = e.indexOf("("),
                        n = e.lastIndexOf(")"),
                        r = e.substring(0, t),
                        o = e.substring(t + 1, n).split(","),
                        a = e.substring(n + 1);
                      if (0 === a.indexOf("@"))
                        var i = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(a, ""),
                          l = i[1],
                          s = i[2],
                          u = i[3];
                      return new StackFrame({
                        functionName: r,
                        args: o || void 0,
                        fileName: l,
                        lineNumber: s || void 0,
                        columnNumber: u || void 0,
                      });
                    });
                  for (var a = 0; a < e.length; a++)
                    (StackFrame.prototype["get" + _capitalize(e[a])] = _getter(
                      e[a]
                    )),
                      (StackFrame.prototype["set" + _capitalize(e[a])] =
                        (function (e) {
                          return function (t) {
                            this[e] = Boolean(t);
                          };
                        })(e[a]));
                  for (var i = 0; i < t.length; i++)
                    (StackFrame.prototype["get" + _capitalize(t[i])] = _getter(
                      t[i]
                    )),
                      (StackFrame.prototype["set" + _capitalize(t[i])] =
                        (function (e) {
                          return function (t) {
                            if (!_isNumber(t))
                              throw new TypeError(e + " must be a Number");
                            this[e] = Number(t);
                          };
                        })(t[i]));
                  for (var l = 0; l < n.length; l++)
                    (StackFrame.prototype["get" + _capitalize(n[l])] = _getter(
                      n[l]
                    )),
                      (StackFrame.prototype["set" + _capitalize(n[l])] =
                        (function (e) {
                          return function (t) {
                            this[e] = String(t);
                          };
                        })(n[l]));
                  return StackFrame;
                })
                  ? n.apply(t, r)
                  : n) || (e.exports = o);
        })();
      },
      7533: (e) => {
        "use strict";
        e.exports = function (e) {
          e.prototype[Symbol.iterator] = function* () {
            for (let e = this.head; e; e = e.next) yield e.value;
          };
        };
      },
      5986: (e, t, n) => {
        "use strict";
        function Yallist(e) {
          var t = this;
          if (
            (t instanceof Yallist || (t = new Yallist()),
            (t.tail = null),
            (t.head = null),
            (t.length = 0),
            e && "function" == typeof e.forEach)
          )
            e.forEach(function (e) {
              t.push(e);
            });
          else if (arguments.length > 0)
            for (var n = 0, r = arguments.length; n < r; n++)
              t.push(arguments[n]);
          return t;
        }
        function insert(e, t, n) {
          var r =
            t === e.head ? new Node(n, null, t, e) : new Node(n, t, t.next, e);
          return (
            null === r.next && (e.tail = r),
            null === r.prev && (e.head = r),
            e.length++,
            r
          );
        }
        function push(e, t) {
          (e.tail = new Node(t, e.tail, null, e)),
            e.head || (e.head = e.tail),
            e.length++;
        }
        function unshift(e, t) {
          (e.head = new Node(t, null, e.head, e)),
            e.tail || (e.tail = e.head),
            e.length++;
        }
        function Node(e, t, n, r) {
          if (!(this instanceof Node)) return new Node(e, t, n, r);
          (this.list = r),
            (this.value = e),
            t ? ((t.next = this), (this.prev = t)) : (this.prev = null),
            n ? ((n.prev = this), (this.next = n)) : (this.next = null);
        }
        (e.exports = Yallist),
          (Yallist.Node = Node),
          (Yallist.create = Yallist),
          (Yallist.prototype.removeNode = function (e) {
            if (e.list !== this)
              throw new Error(
                "removing node which does not belong to this list"
              );
            var t = e.next,
              n = e.prev;
            return (
              t && (t.prev = n),
              n && (n.next = t),
              e === this.head && (this.head = t),
              e === this.tail && (this.tail = n),
              e.list.length--,
              (e.next = null),
              (e.prev = null),
              (e.list = null),
              t
            );
          }),
          (Yallist.prototype.unshiftNode = function (e) {
            if (e !== this.head) {
              e.list && e.list.removeNode(e);
              var t = this.head;
              (e.list = this),
                (e.next = t),
                t && (t.prev = e),
                (this.head = e),
                this.tail || (this.tail = e),
                this.length++;
            }
          }),
          (Yallist.prototype.pushNode = function (e) {
            if (e !== this.tail) {
              e.list && e.list.removeNode(e);
              var t = this.tail;
              (e.list = this),
                (e.prev = t),
                t && (t.next = e),
                (this.tail = e),
                this.head || (this.head = e),
                this.length++;
            }
          }),
          (Yallist.prototype.push = function () {
            for (var e = 0, t = arguments.length; e < t; e++)
              push(this, arguments[e]);
            return this.length;
          }),
          (Yallist.prototype.unshift = function () {
            for (var e = 0, t = arguments.length; e < t; e++)
              unshift(this, arguments[e]);
            return this.length;
          }),
          (Yallist.prototype.pop = function () {
            if (this.tail) {
              var e = this.tail.value;
              return (
                (this.tail = this.tail.prev),
                this.tail ? (this.tail.next = null) : (this.head = null),
                this.length--,
                e
              );
            }
          }),
          (Yallist.prototype.shift = function () {
            if (this.head) {
              var e = this.head.value;
              return (
                (this.head = this.head.next),
                this.head ? (this.head.prev = null) : (this.tail = null),
                this.length--,
                e
              );
            }
          }),
          (Yallist.prototype.forEach = function (e, t) {
            t = t || this;
            for (var n = this.head, r = 0; null !== n; r++)
              e.call(t, n.value, r, this), (n = n.next);
          }),
          (Yallist.prototype.forEachReverse = function (e, t) {
            t = t || this;
            for (var n = this.tail, r = this.length - 1; null !== n; r--)
              e.call(t, n.value, r, this), (n = n.prev);
          }),
          (Yallist.prototype.get = function (e) {
            for (var t = 0, n = this.head; null !== n && t < e; t++) n = n.next;
            if (t === e && null !== n) return n.value;
          }),
          (Yallist.prototype.getReverse = function (e) {
            for (var t = 0, n = this.tail; null !== n && t < e; t++) n = n.prev;
            if (t === e && null !== n) return n.value;
          }),
          (Yallist.prototype.map = function (e, t) {
            t = t || this;
            for (var n = new Yallist(), r = this.head; null !== r; )
              n.push(e.call(t, r.value, this)), (r = r.next);
            return n;
          }),
          (Yallist.prototype.mapReverse = function (e, t) {
            t = t || this;
            for (var n = new Yallist(), r = this.tail; null !== r; )
              n.push(e.call(t, r.value, this)), (r = r.prev);
            return n;
          }),
          (Yallist.prototype.reduce = function (e, t) {
            var n,
              r = this.head;
            if (arguments.length > 1) n = t;
            else {
              if (!this.head)
                throw new TypeError(
                  "Reduce of empty list with no initial value"
                );
              (r = this.head.next), (n = this.head.value);
            }
            for (var o = 0; null !== r; o++)
              (n = e(n, r.value, o)), (r = r.next);
            return n;
          }),
          (Yallist.prototype.reduceReverse = function (e, t) {
            var n,
              r = this.tail;
            if (arguments.length > 1) n = t;
            else {
              if (!this.tail)
                throw new TypeError(
                  "Reduce of empty list with no initial value"
                );
              (r = this.tail.prev), (n = this.tail.value);
            }
            for (var o = this.length - 1; null !== r; o--)
              (n = e(n, r.value, o)), (r = r.prev);
            return n;
          }),
          (Yallist.prototype.toArray = function () {
            for (
              var e = new Array(this.length), t = 0, n = this.head;
              null !== n;
              t++
            )
              (e[t] = n.value), (n = n.next);
            return e;
          }),
          (Yallist.prototype.toArrayReverse = function () {
            for (
              var e = new Array(this.length), t = 0, n = this.tail;
              null !== n;
              t++
            )
              (e[t] = n.value), (n = n.prev);
            return e;
          }),
          (Yallist.prototype.slice = function (e, t) {
            (t = t || this.length) < 0 && (t += this.length),
              (e = e || 0) < 0 && (e += this.length);
            var n = new Yallist();
            if (t < e || t < 0) return n;
            e < 0 && (e = 0), t > this.length && (t = this.length);
            for (var r = 0, o = this.head; null !== o && r < e; r++) o = o.next;
            for (; null !== o && r < t; r++, o = o.next) n.push(o.value);
            return n;
          }),
          (Yallist.prototype.sliceReverse = function (e, t) {
            (t = t || this.length) < 0 && (t += this.length),
              (e = e || 0) < 0 && (e += this.length);
            var n = new Yallist();
            if (t < e || t < 0) return n;
            e < 0 && (e = 0), t > this.length && (t = this.length);
            for (var r = this.length, o = this.tail; null !== o && r > t; r--)
              o = o.prev;
            for (; null !== o && r > e; r--, o = o.prev) n.push(o.value);
            return n;
          }),
          (Yallist.prototype.splice = function (e, t, ...n) {
            e > this.length && (e = this.length - 1),
              e < 0 && (e = this.length + e);
            for (var r = 0, o = this.head; null !== o && r < e; r++) o = o.next;
            var a = [];
            for (r = 0; o && r < t; r++)
              a.push(o.value), (o = this.removeNode(o));
            null === o && (o = this.tail),
              o !== this.head && o !== this.tail && (o = o.prev);
            for (r = 0; r < n.length; r++) o = insert(this, o, n[r]);
            return a;
          }),
          (Yallist.prototype.reverse = function () {
            for (
              var e = this.head, t = this.tail, n = e;
              null !== n;
              n = n.prev
            ) {
              var r = n.prev;
              (n.prev = n.next), (n.next = r);
            }
            return (this.head = t), (this.tail = e), this;
          });
        try {
          n(7533)(Yallist);
        } catch (e) {}
      },
    },
    t = {};
  function __webpack_require__(n) {
    var r = t[n];
    if (void 0 !== r) return r.exports;
    var o = (t[n] = {
      exports: {},
    });
    return e[n].call(o.exports, o, o.exports, __webpack_require__), o.exports;
  }
  (__webpack_require__.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return (
      __webpack_require__.d(t, {
        a: t,
      }),
      t
    );
  }),
    (__webpack_require__.d = (e, t) => {
      for (var n in t)
        __webpack_require__.o(t, n) &&
          !__webpack_require__.o(e, n) &&
          Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n],
          });
    }),
    (__webpack_require__.o = (e, t) =>
      Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      const e = 7,
        t = 1,
        n = 3;
      var r = __webpack_require__(3018),
        o = __webpack_require__.n(r),
        a = __webpack_require__(1377);
      const i = !0,
        l = Symbol.for("react.element"),
        s =
          (Symbol.for("react.transitional.element"),
          Symbol.for("react.portal")),
        u = Symbol.for("react.fragment"),
        c = Symbol.for("react.strict_mode"),
        f = Symbol.for("react.profiler"),
        p = Symbol.for("react.provider"),
        d = Symbol.for("react.consumer"),
        m = Symbol.for("react.context"),
        h = Symbol.for("react.forward_ref"),
        g = Symbol.for("react.suspense"),
        y = Symbol.for("react.suspense_list"),
        b = Symbol.for("react.memo"),
        v = Symbol.for("react.lazy"),
        w =
          (Symbol.for("react.scope"),
          Symbol.for("react.debug_trace_mode"),
          Symbol.for("react.offscreen"),
          Symbol.for("react.legacy_hidden"),
          Symbol.for("react.tracing_marker"));
      Symbol.for("react.memo_cache_sentinel"),
        Symbol.for("react.postpone"),
        Symbol.iterator;
      Symbol.asyncIterator;
      const C = {
          inspectable: Symbol("inspectable"),
          inspected: Symbol("inspected"),
          name: Symbol("name"),
          preview_long: Symbol("preview_long"),
          preview_short: Symbol("preview_short"),
          readonly: Symbol("readonly"),
          size: Symbol("size"),
          type: Symbol("type"),
          unserializable: Symbol("unserializable"),
        },
        S = 2;
      function createDehydrated(e, t, n, r, o) {
        r.push(o);
        const a = {
          inspectable: t,
          type: e,
          preview_long: formatDataForPreview(n, !0),
          preview_short: formatDataForPreview(n, !1),
          name:
            n.constructor && "Object" !== n.constructor.name
              ? n.constructor.name
              : "",
        };
        return (
          "array" === e || "typed_array" === e
            ? (a.size = n.length)
            : "object" === e && (a.size = Object.keys(n).length),
          ("iterator" !== e && "typed_array" !== e) || (a.readonly = !0),
          a
        );
      }
      function dehydrate(e, t, n, r, o, a = 0) {
        const i = getDataType(e);
        let l;
        switch (i) {
          case "html_element":
            return (
              t.push(r),
              {
                inspectable: !1,
                preview_short: formatDataForPreview(e, !1),
                preview_long: formatDataForPreview(e, !0),
                name: e.tagName,
                type: i,
              }
            );
          case "function":
            return (
              t.push(r),
              {
                inspectable: !1,
                preview_short: formatDataForPreview(e, !1),
                preview_long: formatDataForPreview(e, !0),
                name:
                  "function" != typeof e.name && e.name ? e.name : "function",
                type: i,
              }
            );
          case "string":
            return (
              (l = o(r)), l || e.length <= 500 ? e : e.slice(0, 500) + "..."
            );
          case "bigint":
          case "symbol":
          case "date":
          case "regexp":
            return (
              t.push(r),
              {
                inspectable: !1,
                preview_short: formatDataForPreview(e, !1),
                preview_long: formatDataForPreview(e, !0),
                name: e.toString(),
                type: i,
              }
            );
          case "react_element":
            return (
              t.push(r),
              {
                inspectable: !1,
                preview_short: formatDataForPreview(e, !1),
                preview_long: formatDataForPreview(e, !0),
                name: getDisplayNameForReactElement(e) || "Unknown",
                type: i,
              }
            );
          case "array_buffer":
          case "data_view":
            return (
              t.push(r),
              {
                inspectable: !1,
                preview_short: formatDataForPreview(e, !1),
                preview_long: formatDataForPreview(e, !0),
                name: "data_view" === i ? "DataView" : "ArrayBuffer",
                size: e.byteLength,
                type: i,
              }
            );
          case "array":
            return (
              (l = o(r)),
              a >= S && !l
                ? createDehydrated(i, !0, e, t, r)
                : e.map((e, i) =>
                    dehydrate(e, t, n, r.concat([i]), o, l ? 1 : a + 1)
                  )
            );
          case "html_all_collection":
          case "typed_array":
          case "iterator":
            if (((l = o(r)), a >= S && !l))
              return createDehydrated(i, !0, e, t, r);
            {
              const s = {
                unserializable: !0,
                type: i,
                readonly: !0,
                size: "typed_array" === i ? e.length : void 0,
                preview_short: formatDataForPreview(e, !1),
                preview_long: formatDataForPreview(e, !0),
                name:
                  e.constructor && "Object" !== e.constructor.name
                    ? e.constructor.name
                    : "",
              };
              return (
                Array.from(e).forEach(
                  (e, i) =>
                    (s[i] = dehydrate(e, t, n, r.concat([i]), o, l ? 1 : a + 1))
                ),
                n.push(r),
                s
              );
            }
          case "opaque_iterator":
            return (
              t.push(r),
              {
                inspectable: !1,
                preview_short: formatDataForPreview(e, !1),
                preview_long: formatDataForPreview(e, !0),
                name: e[Symbol.toStringTag],
                type: i,
              }
            );
          case "object":
            if (((l = o(r)), a >= S && !l))
              return createDehydrated(i, !0, e, t, r);
            {
              const i = {};
              return (
                getAllEnumerableKeys(e).forEach((s) => {
                  const u = s.toString();
                  i[u] = dehydrate(e[s], t, n, r.concat([u]), o, l ? 1 : a + 1);
                }),
                i
              );
            }
          case "class_instance":
            if (((l = o(r)), a >= S && !l))
              return createDehydrated(i, !0, e, t, r);
            const s = {
              unserializable: !0,
              type: i,
              readonly: !0,
              preview_short: formatDataForPreview(e, !1),
              preview_long: formatDataForPreview(e, !0),
              name: e.constructor.name,
            };
            return (
              getAllEnumerableKeys(e).forEach((i) => {
                const u = i.toString();
                s[u] = dehydrate(e[i], t, n, r.concat([u]), o, l ? 1 : a + 1);
              }),
              n.push(r),
              s
            );
          case "infinity":
          case "nan":
          case "undefined":
            return (
              t.push(r),
              {
                type: i,
              }
            );
          default:
            return e;
        }
      }
      const E = Array.isArray,
        k = Object.prototype.hasOwnProperty,
        _ = new WeakMap(),
        F = new (o())({
          max: 1e3,
        });
      function alphaSortKeys(e, t) {
        return e.toString() > t.toString()
          ? 1
          : t.toString() > e.toString()
          ? -1
          : 0;
      }
      function getAllEnumerableKeys(e) {
        const t = new Set();
        let n = e;
        for (; null != n; ) {
          const e = [...Object.keys(n), ...Object.getOwnPropertySymbols(n)],
            r = Object.getOwnPropertyDescriptors(n);
          e.forEach((e) => {
            r[e].enumerable && t.add(e);
          }),
            (n = Object.getPrototypeOf(n));
        }
        return t;
      }
      function getWrappedDisplayName(e, t, n, r) {
        const o = e?.displayName;
        return o || `${n}(${getDisplayName(t, r)})`;
      }
      function getDisplayName(e, t = "Anonymous") {
        const n = _.get(e);
        if (null != n) return n;
        let r = t;
        return (
          "string" == typeof e.displayName
            ? (r = e.displayName)
            : "string" == typeof e.name && "" !== e.name && (r = e.name),
          _.set(e, r),
          r
        );
      }
      let T = 0;
      function getDefaultComponentFilters() {
        return [
          {
            type: t,
            value: e,
            isEnabled: !0,
          },
        ];
      }
      function filterOutLocationComponentFilters(e) {
        return Array.isArray(e) ? e.filter((e) => e.type !== n) : e;
      }
      function castBool(e) {
        if (!0 === e || !1 === e) return e;
      }
      function utils_getInObject(e, t) {
        return t.reduce((e, t) => {
          if (e) {
            if (k.call(e, t)) return e[t];
            if ("function" == typeof e[Symbol.iterator])
              return Array.from(e)[t];
          }
          return null;
        }, e);
      }
      function deletePathInObject(e, t) {
        const n = t.length,
          r = t[n - 1];
        if (null != e) {
          const o = utils_getInObject(e, t.slice(0, n - 1));
          o && (E(o) ? o.splice(r, 1) : delete o[r]);
        }
      }
      function renamePathInObject(e, t, n) {
        const r = t.length;
        if (null != e) {
          const o = utils_getInObject(e, t.slice(0, r - 1));
          if (o) {
            const e = t[r - 1];
            (o[n[r - 1]] = o[e]), E(o) ? o.splice(e, 1) : delete o[e];
          }
        }
      }
      function utils_setInObject(e, t, n) {
        const r = t.length,
          o = t[r - 1];
        if (null != e) {
          const a = utils_getInObject(e, t.slice(0, r - 1));
          a && (a[o] = n);
        }
      }
      function getDataType(e) {
        if (null === e) return "null";
        if (void 0 === e) return "undefined";
        if ((0, a.kK)(e)) return "react_element";
        if ("undefined" != typeof HTMLElement && e instanceof HTMLElement)
          return "html_element";
        switch (typeof e) {
          case "bigint":
            return "bigint";
          case "boolean":
            return "boolean";
          case "function":
            return "function";
          case "number":
            return Number.isNaN(e)
              ? "nan"
              : Number.isFinite(e)
              ? "number"
              : "infinity";
          case "object":
            if (E(e)) return "array";
            if (ArrayBuffer.isView(e))
              return k.call(e.constructor, "BYTES_PER_ELEMENT")
                ? "typed_array"
                : "data_view";
            if (e.constructor && "ArrayBuffer" === e.constructor.name)
              return "array_buffer";
            if ("function" == typeof e[Symbol.iterator]) {
              const t = e[Symbol.iterator]();
              if (t) return t === e ? "opaque_iterator" : "iterator";
            } else {
              if (e.constructor && "RegExp" === e.constructor.name)
                return "regexp";
              {
                const t = Object.prototype.toString.call(e);
                if ("[object Date]" === t) return "date";
                if ("[object HTMLAllCollection]" === t)
                  return "html_all_collection";
              }
            }
            return isPlainObject(e) ? "object" : "class_instance";
          case "string":
            return "string";
          case "symbol":
            return "symbol";
          case "undefined":
            return "[object HTMLAllCollection]" ===
              Object.prototype.toString.call(e)
              ? "html_all_collection"
              : "undefined";
          default:
            return "unknown";
        }
      }
      function getDisplayNameForReactElement(e) {
        const t =
          (0, a.kM)(e) ||
          (function (e) {
            if ("object" == typeof e && null !== e) {
              const t = e.$$typeof;
              switch (t) {
                case l:
                  const n = e.type;
                  switch (n) {
                    case u:
                    case f:
                    case c:
                    case g:
                    case y:
                      return n;
                    default:
                      const e = n && n.$$typeof;
                      switch (e) {
                        case m:
                        case h:
                        case v:
                        case b:
                          return e;
                        case d:
                          if (i) return e;
                        case p:
                          if (!i) return e;
                        default:
                          return t;
                      }
                  }
                case s:
                  return t;
              }
            }
          })(e);
        switch (t) {
          case a.AI:
            return "ContextConsumer";
          case a.HQ:
            return "ContextProvider";
          case a.A4:
            return "ForwardRef";
          case a.HY:
            return "Fragment";
          case a.oM:
            return "Lazy";
          case a._Y:
            return "Memo";
          case a.h_:
            return "Portal";
          case a.Q1:
            return "Profiler";
          case a.nF:
            return "StrictMode";
          case a.n4:
            return "Suspense";
          case y:
            return "SuspenseList";
          case w:
            return "TracingMarker";
          default:
            const { type: t } = e;
            return "string" == typeof t
              ? t
              : "function" == typeof t
              ? getDisplayName(t, "Anonymous")
              : null != t
              ? "NotImplementedInDevtools"
              : "Element";
        }
      }
      const I = 50;
      function truncateForDisplay(e, t = I) {
        return e.length > t ? e.slice(0, t) + "…" : e;
      }
      function formatDataForPreview(e, t) {
        if (null != e && k.call(e, C.type))
          return t ? e[C.preview_long] : e[C.preview_short];
        switch (getDataType(e)) {
          case "html_element":
            return `<${truncateForDisplay(e.tagName.toLowerCase())} />`;
          case "function":
            return truncateForDisplay(
              `ƒ ${"function" == typeof e.name ? "" : e.name}() {}`
            );
          case "string":
            return `"${e}"`;
          case "bigint":
            return truncateForDisplay(e.toString() + "n");
          case "regexp":
          case "symbol":
            return truncateForDisplay(e.toString());
          case "react_element":
            return `<${truncateForDisplay(
              getDisplayNameForReactElement(e) || "Unknown"
            )} />`;
          case "array_buffer":
            return `ArrayBuffer(${e.byteLength})`;
          case "data_view":
            return `DataView(${e.buffer.byteLength})`;
          case "array":
            if (t) {
              let t = "";
              for (
                let n = 0;
                n < e.length &&
                (n > 0 && (t += ", "),
                (t += formatDataForPreview(e[n], !1)),
                !(t.length > I));
                n++
              );
              return `[${truncateForDisplay(t)}]`;
            }
            return `Array(${k.call(e, C.size) ? e[C.size] : e.length})`;
          case "typed_array":
            const n = `${e.constructor.name}(${e.length})`;
            if (t) {
              let t = "";
              for (
                let n = 0;
                n < e.length &&
                (n > 0 && (t += ", "), (t += e[n]), !(t.length > I));
                n++
              );
              return `${n} [${truncateForDisplay(t)}]`;
            }
            return n;
          case "iterator":
            const r = e.constructor.name;
            if (t) {
              const t = Array.from(e);
              let n = "";
              for (let e = 0; e < t.length; e++) {
                const r = t[e];
                if ((e > 0 && (n += ", "), E(r))) {
                  n += `${formatDataForPreview(
                    r[0],
                    !0
                  )} => ${formatDataForPreview(r[1], !1)}`;
                } else n += formatDataForPreview(r, !1);
                if (n.length > I) break;
              }
              return `${r}(${e.size}) {${truncateForDisplay(n)}}`;
            }
            return `${r}(${e.size})`;
          case "opaque_iterator":
            return e[Symbol.toStringTag];
          case "date":
            return e.toString();
          case "class_instance":
            return e.constructor.name;
          case "object":
            if (t) {
              const t = Array.from(getAllEnumerableKeys(e)).sort(alphaSortKeys);
              let n = "";
              for (let r = 0; r < t.length; r++) {
                const o = t[r];
                if (
                  (r > 0 && (n += ", "),
                  (n += `${o.toString()}: ${formatDataForPreview(e[o], !1)}`),
                  n.length > I)
                )
                  break;
              }
              return `{${truncateForDisplay(n)}}`;
            }
            return "{…}";
          case "boolean":
          case "number":
          case "infinity":
          case "nan":
          case "null":
          case "undefined":
            return e;
          default:
            try {
              return truncateForDisplay(String(e));
            } catch (e) {
              return "unserializable";
            }
        }
      }
      const isPlainObject = (e) => {
        const t = Object.getPrototypeOf(e);
        if (!t) return !0;
        return !Object.getPrototypeOf(t);
      };
      function sessionStorageGetItem(e) {
        try {
          return sessionStorage.getItem(e);
        } catch (e) {
          return null;
        }
      }
      const compareVersions = (e, t) => {
          const n = validateAndParse(e),
            r = validateAndParse(t),
            o = n.pop(),
            a = r.pop(),
            i = compareSegments(n, r);
          return 0 !== i
            ? i
            : o && a
            ? compareSegments(o.split("."), a.split("."))
            : o || a
            ? o
              ? -1
              : 1
            : 0;
        },
        D =
          /^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,
        validateAndParse = (e) => {
          if ("string" != typeof e)
            throw new TypeError("Invalid argument expected string");
          const t = e.match(D);
          if (!t)
            throw new Error(
              `Invalid argument not valid semver ('${e}' received)`
            );
          return t.shift(), t;
        },
        isWildcard = (e) => "*" === e || "x" === e || "X" === e,
        tryParse = (e) => {
          const t = parseInt(e, 10);
          return isNaN(t) ? e : t;
        },
        compareStrings = (e, t) => {
          if (isWildcard(e) || isWildcard(t)) return 0;
          const [n, r] = ((e, t) =>
            typeof e != typeof t ? [String(e), String(t)] : [e, t])(
            tryParse(e),
            tryParse(t)
          );
          return n > r ? 1 : n < r ? -1 : 0;
        },
        compareSegments = (e, t) => {
          for (let n = 0; n < Math.max(e.length, t.length); n++) {
            const r = compareStrings(e[n] || "0", t[n] || "0");
            if (0 !== r) return r;
          }
          return 0;
        },
        R = {
          ">": [1],
          ">=": [0, 1],
          "=": [0],
          "<=": [-1, 0],
          "<": [-1],
        },
        O = (Object.keys(R), Array.isArray);
      const shared_isArray = function (e) {
        return O(e);
      };
      function cleanForBridge(e, t, n = []) {
        if (null !== e) {
          const r = [],
            o = [];
          return {
            data: dehydrate(e, r, o, n, t),
            cleaned: r,
            unserializable: o,
          };
        }
        return null;
      }
      function copyWithDelete(e, t, n = 0) {
        const r = t[n],
          o = shared_isArray(e)
            ? e.slice()
            : {
                ...e,
              };
        return (
          n + 1 === t.length
            ? shared_isArray(o)
              ? o.splice(r, 1)
              : delete o[r]
            : (o[r] = copyWithDelete(e[r], t, n + 1)),
          o
        );
      }
      function copyWithRename(e, t, n, r = 0) {
        const o = t[r],
          a = shared_isArray(e)
            ? e.slice()
            : {
                ...e,
              };
        if (r + 1 === t.length) {
          (a[n[r]] = a[o]), shared_isArray(a) ? a.splice(o, 1) : delete a[o];
        } else a[o] = copyWithRename(e[o], t, n, r + 1);
        return a;
      }
      function copyWithSet(e, t, n, r = 0) {
        if (r >= t.length) return n;
        const o = t[r],
          a = shared_isArray(e)
            ? e.slice()
            : {
                ...e,
              };
        return (a[o] = copyWithSet(e[o], t, n, r + 1)), a;
      }
      function format(e, ...t) {
        const n = t.slice();
        let r = String(e);
        if ("string" == typeof e && n.length) {
          const e = /(%?)(%([jds]))/g;
          r = r.replace(e, (e, t, r, o) => {
            let a = n.shift();
            switch (o) {
              case "s":
                a += "";
                break;
              case "d":
              case "i":
                a = parseInt(a, 10).toString();
                break;
              case "f":
                a = parseFloat(a).toString();
            }
            return t ? (n.unshift(a), e) : a;
          });
        }
        if (n.length)
          for (let e = 0; e < n.length; e++) r += " " + String(n[e]);
        return (r = r.replace(/%{2,2}/g, "%")), String(r);
      }
      function gt(e = "", t = "") {
        return 1 === compareVersions(e, t);
      }
      function gte(e = "", t = "") {
        return compareVersions(e, t) > -1;
      }
      function extractLocation(e) {
        if (-1 === e.indexOf(":")) return null;
        const t = e.replace(/^\(+/, "").replace(/\)+$/, ""),
          n = /(at )?(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t);
        if (null == n) return null;
        const [, , r, o, a] = n;
        return {
          sourceURL: r,
          line: o,
          column: a,
        };
      }
      const x = /^\s*at .*(\S+:\d+|\(native\))/m;
      function parseSourceFromComponentStack(e) {
        return e.match(x)
          ? (function (e) {
              const t = e.split("\n");
              for (const e of t) {
                const t = e.trim(),
                  n = t.match(/ (\(.+\)$)/),
                  r = extractLocation(n ? n[1] : t);
                if (null == r) continue;
                const { sourceURL: o, line: a = "1", column: i = "1" } = r;
                return {
                  sourceURL: o,
                  line: parseInt(a, 10),
                  column: parseInt(i, 10),
                };
              }
              return null;
            })(e)
          : (function (e) {
              const t = e.split("\n");
              for (const e of t) {
                const t = extractLocation(
                  e.trim().replace(/((.*".+"[^@]*)?[^@]*)(?:@)/, "")
                );
                if (null == t) continue;
                const { sourceURL: n, line: r = "1", column: o = "1" } = t;
                return {
                  sourceURL: n,
                  line: parseInt(r, 10),
                  column: parseInt(o, 10),
                };
              }
              return null;
            })(e);
      }
      const N = "React::DevTools::reloadAndProfile";
      var P = __webpack_require__(8830);
      const A = 60111,
        H = "Symbol(react.concurrent_mode)",
        M = 60110,
        L = "Symbol(react.context)",
        $ = "Symbol(react.server_context)",
        z = "Symbol(react.async_mode)",
        U = 60112,
        j = "Symbol(react.forward_ref)",
        V = 60115,
        B = "Symbol(react.memo)",
        W = 60114,
        Y = "Symbol(react.profiler)",
        G = 60109,
        K = "Symbol(react.provider)",
        q = "Symbol(react.consumer)",
        Q = 60119,
        J = "Symbol(react.scope)",
        X = 60108,
        Z = "Symbol(react.strict_mode)",
        ee = Symbol.for("react.memo_cache_sentinel");
      let te,
        ne,
        re,
        oe,
        ae,
        ie,
        le,
        se,
        ue = 0;
      function disabledLog() {}
      function describeBuiltInComponentFrame(e) {
        if (void 0 === se)
          try {
            throw Error();
          } catch (e) {
            const t = e.stack.trim().match(/\n( *(at )?)/);
            se = (t && t[1]) || "";
          }
        return "\n" + se + e;
      }
      disabledLog.__reactDisabledLog = !0;
      let ce = !1;
      function describeNativeComponentFrame(e, t, n) {
        if (!e || ce) return "";
        const r = Error.prepareStackTrace;
        (Error.prepareStackTrace = void 0), (ce = !0);
        const o = n.H;
        (n.H = null),
          (function () {
            if (0 === ue) {
              (te = console.log),
                (ne = console.info),
                (re = console.warn),
                (oe = console.error),
                (ae = console.group),
                (ie = console.groupCollapsed),
                (le = console.groupEnd);
              const e = {
                configurable: !0,
                enumerable: !0,
                value: disabledLog,
                writable: !0,
              };
              Object.defineProperties(console, {
                info: e,
                log: e,
                warn: e,
                error: e,
                group: e,
                groupCollapsed: e,
                groupEnd: e,
              });
            }
            ue++;
          })();
        const a = {
          DetermineComponentFrameRoot() {
            let n;
            try {
              if (t) {
                const Fake = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(Fake.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  "object" == typeof Reflect && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (e) {
                    n = e;
                  }
                  Reflect.construct(e, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (e) {
                    n = e;
                  }
                  e.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (e) {
                  n = e;
                }
                const t = e();
                t && "function" == typeof t.catch && t.catch(() => {});
              }
            } catch (e) {
              if (e && n && "string" == typeof e.stack)
                return [e.stack, n.stack];
            }
            return [null, null];
          },
        };
        a.DetermineComponentFrameRoot.displayName =
          "DetermineComponentFrameRoot";
        const i = Object.getOwnPropertyDescriptor(
          a.DetermineComponentFrameRoot,
          "name"
        );
        i &&
          i.configurable &&
          Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
            value: "DetermineComponentFrameRoot",
          });
        try {
          const [t, n] = a.DetermineComponentFrameRoot();
          if (t && n) {
            const r = t.split("\n"),
              o = n.split("\n");
            let a = 0,
              i = 0;
            for (
              ;
              a < r.length && !r[a].includes("DetermineComponentFrameRoot");

            )
              a++;
            for (
              ;
              i < o.length && !o[i].includes("DetermineComponentFrameRoot");

            )
              i++;
            if (a === r.length || i === o.length)
              for (
                a = r.length - 1, i = o.length - 1;
                a >= 1 && i >= 0 && r[a] !== o[i];

              )
                i--;
            for (; a >= 1 && i >= 0; a--, i--)
              if (r[a] !== o[i]) {
                if (1 !== a || 1 !== i)
                  do {
                    if ((a--, i--, i < 0 || r[a] !== o[i])) {
                      let t = "\n" + r[a].replace(" at new ", " at ");
                      return (
                        e.displayName &&
                          t.includes("<anonymous>") &&
                          (t = t.replace("<anonymous>", e.displayName)),
                        t
                      );
                    }
                  } while (a >= 1 && i >= 0);
                break;
              }
          }
        } finally {
          (ce = !1),
            (Error.prepareStackTrace = r),
            (n.H = o),
            (function () {
              if ((ue--, 0 === ue)) {
                const e = {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  log: {
                    ...e,
                    value: te,
                  },
                  info: {
                    ...e,
                    value: ne,
                  },
                  warn: {
                    ...e,
                    value: re,
                  },
                  error: {
                    ...e,
                    value: oe,
                  },
                  group: {
                    ...e,
                    value: ae,
                  },
                  groupCollapsed: {
                    ...e,
                    value: ie,
                  },
                  groupEnd: {
                    ...e,
                    value: le,
                  },
                });
              }
              ue < 0 &&
                console.error(
                  "disabledDepth fell below zero. This is a bug in React. Please file an issue."
                );
            })();
        }
        const l = e ? e.displayName || e.name : "";
        return l ? describeBuiltInComponentFrame(l) : "";
      }
      function describeFunctionComponentFrame(e, t) {
        return describeNativeComponentFrame(e, !1, t);
      }
      function describeFiber(e, t, n) {
        const {
          HostComponent: r,
          LazyComponent: o,
          SuspenseComponent: a,
          SuspenseListComponent: i,
          FunctionComponent: l,
          IndeterminateComponent: s,
          SimpleMemoComponent: u,
          ForwardRef: c,
          ClassComponent: f,
        } = e;
        switch (t.tag) {
          case r:
            return describeBuiltInComponentFrame(t.type);
          case o:
            return describeBuiltInComponentFrame("Lazy");
          case a:
            return describeBuiltInComponentFrame("Suspense");
          case i:
            return describeBuiltInComponentFrame("SuspenseList");
          case l:
          case s:
          case u:
            return describeFunctionComponentFrame(t.type, n);
          case c:
            return describeFunctionComponentFrame(t.type.render, n);
          case f:
            return (function (e, t) {
              return describeNativeComponentFrame(e, !0, t);
            })(t.type, n);
          default:
            return "";
        }
      }
      function getStackByFiberInDevAndProd(e, t, n) {
        try {
          let a = "",
            i = t;
          do {
            a += describeFiber(e, i, n);
            const t = i._debugInfo;
            if (t)
              for (let e = t.length - 1; e >= 0; e--) {
                const n = t[e];
                "string" == typeof n.name &&
                  (a +=
                    ((r = n.name),
                    (o = n.env),
                    describeBuiltInComponentFrame(
                      r + (o ? " (" + o + ")" : "")
                    )));
              }
            i = i.return;
          } while (i);
          return a;
        } catch (e) {
          return "\nError generating stack: " + e.message + "\n" + e.stack;
        }
        var r, o;
      }
      const fe = !0,
        pe = ["error", "trace", "warn"],
        de = "[2m%s[0m",
        me = /\s{4}(in|at)\s{1}/,
        he = /:\d+:\d+(\n|$)/;
      const ge = /^%c/;
      function isStrictModeOverride(e, t) {
        return (
          e.length >= 2 &&
          ge.test(e[0]) &&
          e[1] === `color: ${getConsoleColor(t) || ""}`
        );
      }
      function getConsoleColor(e) {
        switch (e) {
          case "warn":
            return "light" === Se.browserTheme
              ? "rgba(250, 180, 50, 0.75)"
              : "rgba(250, 180, 50, 0.5)";
          case "error":
            return "light" === Se.browserTheme
              ? "rgba(250, 123, 130, 0.75)"
              : "rgba(250, 123, 130, 0.5)";
          default:
            return "light" === Se.browserTheme
              ? "rgba(125, 125, 125, 0.75)"
              : "rgba(125, 125, 125, 0.5)";
        }
      }
      const ye = new Map();
      let be = console,
        ve = {};
      for (const e in console) ve[e] = console[e];
      let we = null,
        Ce = !1;
      try {
        Ce = void 0 === global;
      } catch (e) {}
      function registerRenderer(e, t) {
        const {
          currentDispatcherRef: n,
          getCurrentFiber: r,
          findFiberByHostInstance: o,
          version: a,
        } = e;
        if ("function" == typeof o && null != n && "function" == typeof r) {
          const { ReactTypeOfWork: o } = getInternalReactConstants(a);
          ye.set(e, {
            currentDispatcherRef: n,
            getCurrentFiber: r,
            workTagMap: o,
            onErrorOrWarning: t,
          });
        }
      }
      const Se = {
        appendComponentStack: !1,
        breakOnConsoleErrors: !1,
        showInlineWarningsAndErrors: !1,
        hideConsoleLogsInStrictMode: !1,
        browserTheme: "dark",
      };
      function patch({
        appendComponentStack: e,
        breakOnConsoleErrors: t,
        showInlineWarningsAndErrors: n,
        hideConsoleLogsInStrictMode: r,
        browserTheme: o,
      }) {
        if (
          ((Se.appendComponentStack = e),
          (Se.breakOnConsoleErrors = t),
          (Se.showInlineWarningsAndErrors = n),
          (Se.hideConsoleLogsInStrictMode = r),
          (Se.browserTheme = o),
          e || t || n)
        ) {
          if (null !== we) return;
          const e = {};
          (we = () => {
            for (const t in e)
              try {
                be[t] = e[t];
              } catch (e) {}
          }),
            pe.forEach((t) => {
              try {
                const n = (e[t] = be[t].__REACT_DEVTOOLS_ORIGINAL_METHOD__
                    ? be[t].__REACT_DEVTOOLS_ORIGINAL_METHOD__
                    : be[t]),
                  overrideMethod = (...e) => {
                    let r = !1;
                    if ("log" !== t && Se.appendComponentStack) {
                      const t = e.length > 0 ? e[e.length - 1] : null;
                      r = !(
                        "string" == typeof t &&
                        ((o = t), me.test(o) || he.test(o))
                      );
                    }
                    var o;
                    const a =
                      Se.showInlineWarningsAndErrors &&
                      ("error" === t || "warn" === t);
                    for (const n of ye.values()) {
                      const o = getDispatcherRef(n),
                        {
                          getCurrentFiber: i,
                          onErrorOrWarning: l,
                          workTagMap: s,
                        } = n,
                        u = i();
                      if (null != u)
                        try {
                          if (
                            (a && "function" == typeof l && l(u, t, e.slice()),
                            r)
                          ) {
                            const n = getStackByFiberInDevAndProd(s, u, o);
                            "" !== n &&
                              (isStrictModeOverride(e, t)
                                ? ((e[0] = `${e[0]} %s`), e.push(n))
                                : e.push(n));
                          }
                        } catch (e) {
                          setTimeout(() => {
                            throw e;
                          }, 0);
                        } finally {
                          break;
                        }
                    }
                    Se.breakOnConsoleErrors, n(...e);
                  };
                (overrideMethod.__REACT_DEVTOOLS_ORIGINAL_METHOD__ = n),
                  (n.__REACT_DEVTOOLS_OVERRIDE_METHOD__ = overrideMethod),
                  (be[t] = overrideMethod);
              } catch (e) {}
            });
        } else null !== we && (we(), (we = null));
      }
      let Ee = null;
      function patchForStrictMode() {
        if (fe) {
          if (null !== Ee) return;
          const e = {};
          (Ee = () => {
            for (const t in e)
              try {
                be[t] = e[t];
              } catch (e) {}
          }),
            [
              "error",
              "group",
              "groupCollapsed",
              "info",
              "log",
              "trace",
              "warn",
            ].forEach((t) => {
              try {
                const n = (e[t] = be[t]
                    .__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__
                    ? be[t].__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__
                    : be[t]),
                  overrideMethod = (...e) => {
                    if (!Se.hideConsoleLogsInStrictMode)
                      if (Ce) n(de, format(...e));
                      else {
                        const a = getConsoleColor(t);
                        if (!a) throw Error("Console color is not defined");
                        n(
                          ...((r = e),
                          (o = `color: ${a}`),
                          null == r ||
                          0 === r.length ||
                          ("string" == typeof r[0] &&
                            r[0].match(/([^%]|^)(%c)/g)) ||
                          void 0 === o
                            ? r
                            : "string" == typeof r[0] &&
                              r[0].match(/([^%]|^)((%%)*)(%([oOdisf]))/g)
                            ? [`%c${r[0]}`, o, ...r.slice(1)]
                            : [
                                r.reduce((e, t, n) => {
                                  switch ((n > 0 && (e += " "), typeof t)) {
                                    case "string":
                                    case "boolean":
                                    case "symbol":
                                      return e + "%s";
                                    case "number":
                                      return (
                                        e + (Number.isInteger(t) ? "%i" : "%f")
                                      );
                                    default:
                                      return e + "%o";
                                  }
                                }, "%c"),
                                o,
                                ...r,
                              ])
                        );
                      }
                    var r, o;
                  };
                (overrideMethod.__REACT_DEVTOOLS_STRICT_MODE_ORIGINAL_METHOD__ =
                  n),
                  (n.__REACT_DEVTOOLS_STRICT_MODE_OVERRIDE_METHOD__ =
                    overrideMethod),
                  (be[t] = overrideMethod);
              } catch (e) {}
            });
        }
      }
      function unpatchForStrictMode() {
        fe && null !== Ee && (Ee(), (Ee = null));
      }
      function patchConsoleUsingWindowValues() {
        patch({
          appendComponentStack:
            castBool(window.__REACT_DEVTOOLS_APPEND_COMPONENT_STACK__) ?? !0,
          breakOnConsoleErrors:
            castBool(window.__REACT_DEVTOOLS_BREAK_ON_CONSOLE_ERRORS__) ?? !1,
          showInlineWarningsAndErrors:
            castBool(
              window.__REACT_DEVTOOLS_SHOW_INLINE_WARNINGS_AND_ERRORS__
            ) ?? !0,
          hideConsoleLogsInStrictMode:
            castBool(
              window.__REACT_DEVTOOLS_HIDE_CONSOLE_LOGS_IN_STRICT_MODE__
            ) ?? !1,
          browserTheme:
            (function (e) {
              if ("light" === e || "dark" === e || "auto" === e) return e;
            })(window.__REACT_DEVTOOLS_BROWSER_THEME__) ?? "dark",
        });
      }
      const ke =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        _e = Object.prototype.hasOwnProperty;
      new Map();
      const Fe = {
          "--font-size-monospace-small": "9px",
          "--font-size-monospace-normal": "11px",
          "--font-size-monospace-large": "15px",
          "--font-size-sans-small": "10px",
          "--font-size-sans-normal": "12px",
          "--font-size-sans-large": "14px",
          "--line-height-data": "18px",
        },
        Te =
          (parseInt(
            {
              "--font-size-monospace-small": "10px",
              "--font-size-monospace-normal": "13px",
              "--font-size-monospace-large": "17px",
              "--font-size-sans-small": "12px",
              "--font-size-sans-normal": "14px",
              "--font-size-sans-large": "16px",
              "--line-height-data": "22px",
            }["--line-height-data"],
            10
          ),
          parseInt(Fe["--line-height-data"], 10),
          31),
        Ie = 1,
        De = 10;
      let Re = null,
        Oe =
          "undefined" != typeof performance &&
          "function" == typeof performance.mark &&
          "function" == typeof performance.clearMarks,
        xe = !1;
      if (Oe) {
        const e = "__v3",
          t = {};
        Object.defineProperty(t, "startTime", {
          get: function () {
            return (xe = !0), 0;
          },
          set: function () {},
        });
        try {
          performance.mark(e, t);
        } catch (e) {
        } finally {
          performance.clearMarks(e);
        }
      }
      xe && (Re = performance);
      const Ne =
        "object" == typeof performance && "function" == typeof performance.now
          ? () => performance.now()
          : () => Date.now();
      function createProfilingHooks({
        getDisplayNameForFiber: e,
        getIsProfiling: t,
        getLaneLabelMap: n,
        workTagMap: r,
        currentDispatcherRef: o,
        reactVersion: a,
      }) {
        let i = 0,
          l = null,
          s = [],
          u = null,
          c = new Map(),
          f = !1,
          p = !1;
        function getRelativeTime() {
          const e = Ne();
          return u
            ? (0 === u.startTime && (u.startTime = e - De), e - u.startTime)
            : 0;
        }
        function getInternalModuleRanges() {
          if (
            "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" ==
              typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.getInternalModuleRanges
          ) {
            const e = __REACT_DEVTOOLS_GLOBAL_HOOK__.getInternalModuleRanges();
            if (shared_isArray(e)) return e;
          }
          return null;
        }
        function laneToLanesArray(e) {
          const t = [];
          let n = 1;
          for (let r = 0; r < Te; r++) n & e && t.push(n), (n *= 2);
          return t;
        }
        const d = "function" == typeof n ? n() : null;
        function markAndClear(e) {
          Re.mark(e), Re.clearMarks(e);
        }
        function recordReactMeasureStarted(e, t) {
          let n = 0;
          if (s.length > 0) {
            const e = s[s.length - 1];
            n = "render-idle" === e.type ? e.depth : e.depth + 1;
          }
          const r = laneToLanesArray(t),
            o = {
              type: e,
              batchUID: i,
              depth: n,
              lanes: r,
              timestamp: getRelativeTime(),
              duration: 0,
            };
          if ((s.push(o), u)) {
            const { batchUIDToMeasuresMap: e, laneToReactMeasureMap: t } = u;
            let n = e.get(i);
            null != n ? n.push(o) : e.set(i, [o]),
              r.forEach((e) => {
                (n = t.get(e)), n && n.push(o);
              });
          }
        }
        function recordReactMeasureCompleted(e) {
          const t = getRelativeTime();
          if (0 === s.length)
            return void console.error(
              'Unexpected type "%s" completed at %sms while currentReactMeasuresStack is empty.',
              e,
              t
            );
          const n = s.pop();
          n.type !== e &&
            console.error(
              'Unexpected type "%s" completed at %sms before "%s" completed.',
              e,
              t,
              n.type
            ),
            (n.duration = t - n.timestamp),
            u && (u.duration = getRelativeTime() + De);
        }
        const m = new ("function" == typeof WeakMap ? WeakMap : Map)();
        let h = 0;
        return {
          getTimelineData: function () {
            return u;
          },
          profilingHooks: {
            markCommitStarted: function (e) {
              f && (recordReactMeasureStarted("commit", e), (p = !0)),
                xe &&
                  (markAndClear(`--commit-start-${e}`),
                  (function () {
                    markAndClear(`--react-version-${a}`),
                      markAndClear(`--profiler-version-${Ie}`);
                    const e = getInternalModuleRanges();
                    if (e)
                      for (let t = 0; t < e.length; t++) {
                        const n = e[t];
                        if (shared_isArray(n) && 2 === n.length) {
                          const [n, r] = e[t];
                          markAndClear(`--react-internal-module-start-${n}`),
                            markAndClear(`--react-internal-module-stop-${r}`);
                        }
                      }
                    null != d &&
                      markAndClear(
                        `--react-lane-labels-${Array.from(d.values()).join(
                          ","
                        )}`
                      );
                  })());
            },
            markCommitStopped: function () {
              f &&
                (recordReactMeasureCompleted("commit"),
                recordReactMeasureCompleted("render-idle")),
                xe && markAndClear("--commit-stop");
            },
            markComponentRenderStarted: function (t) {
              if (f || xe) {
                const n = e(t) || "Unknown";
                f &&
                  f &&
                  (l = {
                    componentName: n,
                    duration: 0,
                    timestamp: getRelativeTime(),
                    type: "render",
                    warning: null,
                  }),
                  xe && markAndClear(`--component-render-start-${n}`);
              }
            },
            markComponentRenderStopped: function () {
              f &&
                l &&
                (u && u.componentMeasures.push(l),
                (l.duration = getRelativeTime() - l.timestamp),
                (l = null)),
                xe && markAndClear("--component-render-stop");
            },
            markComponentPassiveEffectMountStarted: function (t) {
              if (f || xe) {
                const n = e(t) || "Unknown";
                f &&
                  f &&
                  (l = {
                    componentName: n,
                    duration: 0,
                    timestamp: getRelativeTime(),
                    type: "passive-effect-mount",
                    warning: null,
                  }),
                  xe &&
                    markAndClear(`--component-passive-effect-mount-start-${n}`);
              }
            },
            markComponentPassiveEffectMountStopped: function () {
              f &&
                l &&
                (u && u.componentMeasures.push(l),
                (l.duration = getRelativeTime() - l.timestamp),
                (l = null)),
                xe && markAndClear("--component-passive-effect-mount-stop");
            },
            markComponentPassiveEffectUnmountStarted: function (t) {
              if (f || xe) {
                const n = e(t) || "Unknown";
                f &&
                  f &&
                  (l = {
                    componentName: n,
                    duration: 0,
                    timestamp: getRelativeTime(),
                    type: "passive-effect-unmount",
                    warning: null,
                  }),
                  xe &&
                    markAndClear(
                      `--component-passive-effect-unmount-start-${n}`
                    );
              }
            },
            markComponentPassiveEffectUnmountStopped: function () {
              f &&
                l &&
                (u && u.componentMeasures.push(l),
                (l.duration = getRelativeTime() - l.timestamp),
                (l = null)),
                xe && markAndClear("--component-passive-effect-unmount-stop");
            },
            markComponentLayoutEffectMountStarted: function (t) {
              if (f || xe) {
                const n = e(t) || "Unknown";
                f &&
                  f &&
                  (l = {
                    componentName: n,
                    duration: 0,
                    timestamp: getRelativeTime(),
                    type: "layout-effect-mount",
                    warning: null,
                  }),
                  xe &&
                    markAndClear(`--component-layout-effect-mount-start-${n}`);
              }
            },
            markComponentLayoutEffectMountStopped: function () {
              f &&
                l &&
                (u && u.componentMeasures.push(l),
                (l.duration = getRelativeTime() - l.timestamp),
                (l = null)),
                xe && markAndClear("--component-layout-effect-mount-stop");
            },
            markComponentLayoutEffectUnmountStarted: function (t) {
              if (f || xe) {
                const n = e(t) || "Unknown";
                f &&
                  f &&
                  (l = {
                    componentName: n,
                    duration: 0,
                    timestamp: getRelativeTime(),
                    type: "layout-effect-unmount",
                    warning: null,
                  }),
                  xe &&
                    markAndClear(
                      `--component-layout-effect-unmount-start-${n}`
                    );
              }
            },
            markComponentLayoutEffectUnmountStopped: function () {
              f &&
                l &&
                (u && u.componentMeasures.push(l),
                (l.duration = getRelativeTime() - l.timestamp),
                (l = null)),
                xe && markAndClear("--component-layout-effect-unmount-stop");
            },
            markComponentErrored: function (t, n, r) {
              if (f || xe) {
                const r = e(t) || "Unknown",
                  o = null === t.alternate ? "mount" : "update";
                let a = "";
                null !== n &&
                "object" == typeof n &&
                "string" == typeof n.message
                  ? (a = n.message)
                  : "string" == typeof n && (a = n),
                  f &&
                    u &&
                    u.thrownErrors.push({
                      componentName: r,
                      message: a,
                      phase: o,
                      timestamp: getRelativeTime(),
                      type: "thrown-error",
                    }),
                  xe && markAndClear(`--error-${r}-${o}-${a}`);
              }
            },
            markComponentSuspended: function (t, n, r) {
              if (f || xe) {
                const o = m.has(n) ? "resuspend" : "suspend",
                  a = (function (e) {
                    return m.has(e) || m.set(e, h++), m.get(e);
                  })(n),
                  i = e(t) || "Unknown",
                  l = null === t.alternate ? "mount" : "update",
                  s = n.displayName || "";
                let c = null;
                f &&
                  ((c = {
                    componentName: i,
                    depth: 0,
                    duration: 0,
                    id: `${a}`,
                    phase: l,
                    promiseName: s,
                    resolution: "unresolved",
                    timestamp: getRelativeTime(),
                    type: "suspense",
                    warning: null,
                  }),
                  u && u.suspenseEvents.push(c)),
                  xe &&
                    markAndClear(`--suspense-${o}-${a}-${i}-${l}-${r}-${s}`),
                  n.then(
                    () => {
                      c &&
                        ((c.duration = getRelativeTime() - c.timestamp),
                        (c.resolution = "resolved")),
                        xe && markAndClear(`--suspense-resolved-${a}-${i}`);
                    },
                    () => {
                      c &&
                        ((c.duration = getRelativeTime() - c.timestamp),
                        (c.resolution = "rejected")),
                        xe && markAndClear(`--suspense-rejected-${a}-${i}`);
                    }
                  );
              }
            },
            markLayoutEffectsStarted: function (e) {
              f && recordReactMeasureStarted("layout-effects", e),
                xe && markAndClear(`--layout-effects-start-${e}`);
            },
            markLayoutEffectsStopped: function () {
              f && recordReactMeasureCompleted("layout-effects"),
                xe && markAndClear("--layout-effects-stop");
            },
            markPassiveEffectsStarted: function (e) {
              f && recordReactMeasureStarted("passive-effects", e),
                xe && markAndClear(`--passive-effects-start-${e}`);
            },
            markPassiveEffectsStopped: function () {
              f && recordReactMeasureCompleted("passive-effects"),
                xe && markAndClear("--passive-effects-stop");
            },
            markRenderStarted: function (e) {
              f &&
                (p && ((p = !1), i++),
                (0 !== s.length && "render-idle" === s[s.length - 1].type) ||
                  recordReactMeasureStarted("render-idle", e),
                recordReactMeasureStarted("render", e)),
                xe && markAndClear(`--render-start-${e}`);
            },
            markRenderYielded: function () {
              f && recordReactMeasureCompleted("render"),
                xe && markAndClear("--render-yield");
            },
            markRenderStopped: function () {
              f && recordReactMeasureCompleted("render"),
                xe && markAndClear("--render-stop");
            },
            markRenderScheduled: function (e) {
              f &&
                u &&
                u.schedulingEvents.push({
                  lanes: laneToLanesArray(e),
                  timestamp: getRelativeTime(),
                  type: "schedule-render",
                  warning: null,
                }),
                xe && markAndClear(`--schedule-render-${e}`);
            },
            markForceUpdateScheduled: function (t, n) {
              if (f || xe) {
                const r = e(t) || "Unknown";
                f &&
                  u &&
                  u.schedulingEvents.push({
                    componentName: r,
                    lanes: laneToLanesArray(n),
                    timestamp: getRelativeTime(),
                    type: "schedule-force-update",
                    warning: null,
                  }),
                  xe && markAndClear(`--schedule-forced-update-${n}-${r}`);
              }
            },
            markStateUpdateScheduled: function (t, n) {
              if (f || xe) {
                const r = e(t) || "Unknown";
                if (f && u) {
                  const e = {
                    componentName: r,
                    lanes: laneToLanesArray(n),
                    timestamp: getRelativeTime(),
                    type: "schedule-state-update",
                    warning: null,
                  };
                  c.set(
                    e,
                    (function (e) {
                      const t = [];
                      let n = e;
                      for (; null !== n; ) t.push(n), (n = n.return);
                      return t;
                    })(t)
                  ),
                    u.schedulingEvents.push(e);
                }
                xe && markAndClear(`--schedule-state-update-${n}-${r}`);
              }
            },
          },
          toggleProfilingStatus: function (e) {
            if (f !== e)
              if (((f = e), f)) {
                const e = new Map();
                if (xe) {
                  const e = getInternalModuleRanges();
                  if (e)
                    for (let t = 0; t < e.length; t++) {
                      const n = e[t];
                      if (shared_isArray(n) && 2 === n.length) {
                        const [n, r] = e[t];
                        markAndClear(`--react-internal-module-start-${n}`),
                          markAndClear(`--react-internal-module-stop-${r}`);
                      }
                    }
                }
                const t = new Map();
                let n = 1;
                for (let e = 0; e < Te; e++) t.set(n, []), (n *= 2);
                (i = 0),
                  (l = null),
                  (s = []),
                  (c = new Map()),
                  (u = {
                    internalModuleSourceToRanges: e,
                    laneToLabelMap: d || new Map(),
                    reactVersion: a,
                    componentMeasures: [],
                    schedulingEvents: [],
                    suspenseEvents: [],
                    thrownErrors: [],
                    batchUIDToMeasuresMap: new Map(),
                    duration: 0,
                    laneToReactMeasureMap: t,
                    startTime: 0,
                    flamechart: [],
                    nativeEvents: [],
                    networkMeasures: [],
                    otherUserTimingMarks: [],
                    snapshots: [],
                    snapshotHeight: 0,
                  }),
                  (p = !0);
              } else
                null !== u &&
                  u.schedulingEvents.forEach((e) => {
                    if ("schedule-state-update" === e.type) {
                      const t = c.get(e);
                      t &&
                        null != o &&
                        (e.componentStack = t.reduce(
                          (e, t) => e + describeFiber(r, t, o),
                          ""
                        ));
                    }
                  }),
                  c.clear();
          },
        };
      }
      function getDispatcherRef(e) {
        if (void 0 === e.currentDispatcherRef) return;
        const t = e.currentDispatcherRef;
        return void 0 === t.H && void 0 !== t.current
          ? {
              get H() {
                return t.current;
              },
              set H(e) {
                t.current = e;
              },
            }
          : t;
      }
      const Pe =
        "object" == typeof performance && "function" == typeof performance.now
          ? () => performance.now()
          : () => Date.now();
      function getInternalReactConstants(e) {
        let t = {
          ImmediatePriority: 99,
          UserBlockingPriority: 98,
          NormalPriority: 97,
          LowPriority: 96,
          IdlePriority: 95,
          NoPriority: 90,
        };
        gt(e, "17.0.2") &&
          (t = {
            ImmediatePriority: 1,
            UserBlockingPriority: 2,
            NormalPriority: 3,
            LowPriority: 4,
            IdlePriority: 5,
            NoPriority: 0,
          });
        let n = 0;
        gte(e, "18.0.0-alpha")
          ? (n = 24)
          : gte(e, "16.9.0")
          ? (n = 1)
          : gte(e, "16.3.0") && (n = 2);
        let r = null;
        function getTypeSymbol(e) {
          const t = "object" == typeof e && null !== e ? e.$$typeof : e;
          return "symbol" == typeof t ? t.toString() : t;
        }
        r = gt(e, "17.0.1")
          ? {
              CacheComponent: 24,
              ClassComponent: 1,
              ContextConsumer: 9,
              ContextProvider: 10,
              CoroutineComponent: -1,
              CoroutineHandlerPhase: -1,
              DehydratedSuspenseComponent: 18,
              ForwardRef: 11,
              Fragment: 7,
              FunctionComponent: 0,
              HostComponent: 5,
              HostPortal: 4,
              HostRoot: 3,
              HostHoistable: 26,
              HostSingleton: 27,
              HostText: 6,
              IncompleteClassComponent: 17,
              IncompleteFunctionComponent: 28,
              IndeterminateComponent: 2,
              LazyComponent: 16,
              LegacyHiddenComponent: 23,
              MemoComponent: 14,
              Mode: 8,
              OffscreenComponent: 22,
              Profiler: 12,
              ScopeComponent: 21,
              SimpleMemoComponent: 15,
              SuspenseComponent: 13,
              SuspenseListComponent: 19,
              TracingMarkerComponent: 25,
              YieldComponent: -1,
            }
          : gte(e, "17.0.0-alpha")
          ? {
              CacheComponent: -1,
              ClassComponent: 1,
              ContextConsumer: 9,
              ContextProvider: 10,
              CoroutineComponent: -1,
              CoroutineHandlerPhase: -1,
              DehydratedSuspenseComponent: 18,
              ForwardRef: 11,
              Fragment: 7,
              FunctionComponent: 0,
              HostComponent: 5,
              HostPortal: 4,
              HostRoot: 3,
              HostHoistable: -1,
              HostSingleton: -1,
              HostText: 6,
              IncompleteClassComponent: 17,
              IncompleteFunctionComponent: -1,
              IndeterminateComponent: 2,
              LazyComponent: 16,
              LegacyHiddenComponent: 24,
              MemoComponent: 14,
              Mode: 8,
              OffscreenComponent: 23,
              Profiler: 12,
              ScopeComponent: 21,
              SimpleMemoComponent: 15,
              SuspenseComponent: 13,
              SuspenseListComponent: 19,
              TracingMarkerComponent: -1,
              YieldComponent: -1,
            }
          : gte(e, "16.6.0-beta.0")
          ? {
              CacheComponent: -1,
              ClassComponent: 1,
              ContextConsumer: 9,
              ContextProvider: 10,
              CoroutineComponent: -1,
              CoroutineHandlerPhase: -1,
              DehydratedSuspenseComponent: 18,
              ForwardRef: 11,
              Fragment: 7,
              FunctionComponent: 0,
              HostComponent: 5,
              HostPortal: 4,
              HostRoot: 3,
              HostHoistable: -1,
              HostSingleton: -1,
              HostText: 6,
              IncompleteClassComponent: 17,
              IncompleteFunctionComponent: -1,
              IndeterminateComponent: 2,
              LazyComponent: 16,
              LegacyHiddenComponent: -1,
              MemoComponent: 14,
              Mode: 8,
              OffscreenComponent: -1,
              Profiler: 12,
              ScopeComponent: -1,
              SimpleMemoComponent: 15,
              SuspenseComponent: 13,
              SuspenseListComponent: 19,
              TracingMarkerComponent: -1,
              YieldComponent: -1,
            }
          : gte(e, "16.4.3-alpha")
          ? {
              CacheComponent: -1,
              ClassComponent: 2,
              ContextConsumer: 11,
              ContextProvider: 12,
              CoroutineComponent: -1,
              CoroutineHandlerPhase: -1,
              DehydratedSuspenseComponent: -1,
              ForwardRef: 13,
              Fragment: 9,
              FunctionComponent: 0,
              HostComponent: 7,
              HostPortal: 6,
              HostRoot: 5,
              HostHoistable: -1,
              HostSingleton: -1,
              HostText: 8,
              IncompleteClassComponent: -1,
              IncompleteFunctionComponent: -1,
              IndeterminateComponent: 4,
              LazyComponent: -1,
              LegacyHiddenComponent: -1,
              MemoComponent: -1,
              Mode: 10,
              OffscreenComponent: -1,
              Profiler: 15,
              ScopeComponent: -1,
              SimpleMemoComponent: -1,
              SuspenseComponent: 16,
              SuspenseListComponent: -1,
              TracingMarkerComponent: -1,
              YieldComponent: -1,
            }
          : {
              CacheComponent: -1,
              ClassComponent: 2,
              ContextConsumer: 12,
              ContextProvider: 13,
              CoroutineComponent: 7,
              CoroutineHandlerPhase: 8,
              DehydratedSuspenseComponent: -1,
              ForwardRef: 14,
              Fragment: 10,
              FunctionComponent: 1,
              HostComponent: 5,
              HostPortal: 4,
              HostRoot: 3,
              HostHoistable: -1,
              HostSingleton: -1,
              HostText: 6,
              IncompleteClassComponent: -1,
              IncompleteFunctionComponent: -1,
              IndeterminateComponent: 0,
              LazyComponent: -1,
              LegacyHiddenComponent: -1,
              MemoComponent: -1,
              Mode: 11,
              OffscreenComponent: -1,
              Profiler: 15,
              ScopeComponent: -1,
              SimpleMemoComponent: -1,
              SuspenseComponent: 16,
              SuspenseListComponent: -1,
              TracingMarkerComponent: -1,
              YieldComponent: 9,
            };
        const {
          CacheComponent: o,
          ClassComponent: a,
          IncompleteClassComponent: i,
          IncompleteFunctionComponent: l,
          FunctionComponent: s,
          IndeterminateComponent: u,
          ForwardRef: c,
          HostRoot: f,
          HostHoistable: p,
          HostSingleton: d,
          HostComponent: m,
          HostPortal: h,
          HostText: g,
          Fragment: y,
          LazyComponent: b,
          LegacyHiddenComponent: v,
          MemoComponent: w,
          OffscreenComponent: C,
          Profiler: S,
          ScopeComponent: E,
          SimpleMemoComponent: k,
          SuspenseComponent: _,
          SuspenseListComponent: F,
          TracingMarkerComponent: T,
        } = r;
        function resolveFiberType(e) {
          switch (getTypeSymbol(e)) {
            case V:
            case B:
              return resolveFiberType(e.type);
            case U:
            case j:
              return e.render;
            default:
              return e;
          }
        }
        return {
          getDisplayNameForFiber: function getDisplayNameForFiber(e, t = !1) {
            const { elementType: n, type: r, tag: I } = e;
            let D = r;
            "object" == typeof r && null !== r && (D = resolveFiberType(r));
            let R = null;
            if (
              !t &&
              (null != e.updateQueue?.memoCache ||
                e.memoizedState?.memoizedState?.[ee])
            ) {
              const t = getDisplayNameForFiber(e, !0);
              return null == t ? null : `Forget(${t})`;
            }
            switch (I) {
              case o:
                return "Cache";
              case a:
              case i:
              case l:
              case s:
              case u:
                return getDisplayName(D);
              case c:
                return getWrappedDisplayName(n, D, "ForwardRef", "Anonymous");
              case f:
                const t = e.stateNode;
                return null != t && null !== t._debugRootType
                  ? t._debugRootType
                  : null;
              case m:
              case d:
              case p:
                return r;
              case h:
              case g:
                return null;
              case y:
                return "Fragment";
              case b:
                return "Lazy";
              case w:
              case k:
                return getWrappedDisplayName(n, D, "Memo", "Anonymous");
              case _:
                return "Suspense";
              case v:
                return "LegacyHidden";
              case C:
                return "Offscreen";
              case E:
                return "Scope";
              case F:
                return "SuspenseList";
              case S:
                return "Profiler";
              case T:
                return "TracingMarker";
              default:
                switch (getTypeSymbol(r)) {
                  case A:
                  case H:
                  case z:
                    return null;
                  case G:
                  case K:
                    return (
                      (R = e.type._context || e.type.context),
                      `${R.displayName || "Context"}.Provider`
                    );
                  case M:
                  case L:
                  case $:
                    return void 0 === e.type._context &&
                      e.type.Provider === e.type
                      ? ((R = e.type), `${R.displayName || "Context"}.Provider`)
                      : ((R = e.type._context || e.type),
                        `${R.displayName || "Context"}.Consumer`);
                  case q:
                    return (
                      (R = e.type._context),
                      `${R.displayName || "Context"}.Consumer`
                    );
                  case X:
                  case Z:
                    return null;
                  case W:
                  case Y:
                    return `Profiler(${e.memoizedProps.id})`;
                  case Q:
                  case J:
                    return "Scope";
                  default:
                    return null;
                }
            }
          },
          getTypeSymbol,
          ReactPriorityLevels: t,
          ReactTypeOfWork: r,
          StrictModeBits: n,
        };
      }
      const Ae = new Map(),
        He = new Map(),
        Me = new WeakMap();
      function attach(r, o, a, i) {
        const l = a.reconcilerVersion || a.version,
          {
            getDisplayNameForFiber: s,
            getTypeSymbol: u,
            ReactPriorityLevels: c,
            ReactTypeOfWork: f,
            StrictModeBits: p,
          } = getInternalReactConstants(l),
          {
            CacheComponent: d,
            ClassComponent: m,
            ContextConsumer: h,
            DehydratedSuspenseComponent: g,
            ForwardRef: y,
            Fragment: b,
            FunctionComponent: v,
            HostRoot: w,
            HostHoistable: C,
            HostSingleton: S,
            HostPortal: E,
            HostComponent: k,
            HostText: _,
            IncompleteClassComponent: I,
            IncompleteFunctionComponent: D,
            IndeterminateComponent: R,
            LegacyHiddenComponent: O,
            MemoComponent: x,
            OffscreenComponent: $,
            SimpleMemoComponent: U,
            SuspenseComponent: j,
            SuspenseListComponent: V,
            TracingMarkerComponent: B,
          } = f,
          {
            ImmediatePriority: Q,
            UserBlockingPriority: J,
            NormalPriority: ee,
            LowPriority: te,
            IdlePriority: ne,
            NoPriority: re,
          } = c,
          {
            getLaneLabelMap: oe,
            injectProfilingHooks: ae,
            overrideHookState: ie,
            overrideHookStateDeletePath: le,
            overrideHookStateRenamePath: se,
            overrideProps: ue,
            overridePropsDeletePath: ce,
            overridePropsRenamePath: fe,
            scheduleRefresh: pe,
            setErrorHandler: de,
            setSuspenseHandler: me,
            scheduleUpdate: he,
          } = a,
          ge = "function" == typeof de && "function" == typeof he,
          ye = "function" == typeof me && "function" == typeof he;
        "function" == typeof pe &&
          (a.scheduleRefresh = (...e) => {
            try {
              r.emit("fastRefreshScheduled");
            } finally {
              return pe(...e);
            }
          });
        let be = null,
          ve = null;
        if ("function" == typeof ae) {
          const e = createProfilingHooks({
            getDisplayNameForFiber: s,
            getIsProfiling: () => ot,
            getLaneLabelMap: oe,
            currentDispatcherRef: getDispatcherRef(a),
            workTagMap: f,
            reactVersion: l,
          });
          ae(e.profilingHooks),
            (be = e.getTimelineData),
            (ve = e.toggleProfilingStatus);
        }
        const we = new Set(),
          Ce = new Map(),
          Se = new Map(),
          Ee = new Map(),
          Fe = new Map();
        function clearMessageCountHelper(e, t, n) {
          const r = He.get(e);
          null != r &&
            (Ce.delete(r),
            n.has(e)
              ? (n.delete(e),
                we.add(r),
                flushPendingEvents(),
                updateMostRecentlyInspectedElementIfNecessary(e))
              : we.delete(r));
        }
        function clearErrorsForFiberID(e) {
          clearMessageCountHelper(e, 0, Ee);
        }
        function clearWarningsForFiberID(e) {
          clearMessageCountHelper(e, 0, Fe);
        }
        function updateMostRecentlyInspectedElementIfNecessary(e) {
          null !== Qe && Qe.id === e && (Je = !0);
        }
        registerRenderer(a, function (e, t, n) {
          if ("error" === t) {
            const t = getFiberIDUnsafe(e);
            if (null != t && !0 === st.get(t)) return;
          }
          const r = format(...n);
          we.add(e);
          const a = "error" === t ? Ce : Se,
            i = a.get(e);
          if (null != i) {
            const e = i.get(r) || 0;
            i.set(r, e + 1);
          } else a.set(e, new Map([[r, 1]]));
          clearPendingErrorsAndWarningsAfterDelay(),
            (qe = setTimeout(() => {
              if (((qe = null), je.length > 0)) return;
              if (
                (recordPendingErrorsAndWarnings(),
                shouldBailoutWithPendingOperations())
              )
                return;
              const e = new Array(3 + je.length);
              (e[0] = o), (e[1] = Le), (e[2] = 0);
              for (let t = 0; t < je.length; t++) e[3 + t] = je[t];
              flushOrQueueOperations(e), (je.length = 0);
            }, 1e3));
        }),
          patchConsoleUsingWindowValues();
        const Te = new Set(),
          Ie = new Set(),
          De = new Set();
        let Re = !1;
        const Oe = new Set();
        function applyComponentFilters(e) {
          De.clear(),
            Te.clear(),
            Ie.clear(),
            e.forEach((e) => {
              if (e.isEnabled)
                switch (e.type) {
                  case 2:
                    e.isValid &&
                      "" !== e.value &&
                      Te.add(new RegExp(e.value, "i"));
                    break;
                  case t:
                    De.add(e.value);
                    break;
                  case n:
                    e.isValid &&
                      "" !== e.value &&
                      Ie.add(new RegExp(e.value, "i"));
                    break;
                  case 4:
                    Te.add(new RegExp("\\("));
                    break;
                  default:
                    console.warn(`Invalid component filter type "${e.type}"`);
                }
            });
        }
        if (null != window.__REACT_DEVTOOLS_COMPONENT_FILTERS__) {
          applyComponentFilters(
            filterOutLocationComponentFilters(
              window.__REACT_DEVTOOLS_COMPONENT_FILTERS__
            )
          );
        } else applyComponentFilters(getDefaultComponentFilters());
        function shouldFilterFiber(e) {
          const { tag: t, type: n, key: r } = e;
          switch (t) {
            case g:
            case E:
            case _:
            case O:
            case $:
              return !0;
            case w:
              return !1;
            case b:
              return null === r;
            default:
              switch (u(n)) {
                case A:
                case H:
                case z:
                case X:
                case Z:
                  return !0;
              }
          }
          const o = getElementTypeForFiber(e);
          if (De.has(o)) return !0;
          if (Te.size > 0) {
            const t = s(e);
            if (null != t) for (const e of Te) if (e.test(t)) return !0;
          }
          return !1;
        }
        function getElementTypeForFiber(t) {
          const { type: n, tag: r } = t;
          switch (r) {
            case m:
            case I:
              return 1;
            case D:
            case v:
            case R:
              return 5;
            case y:
              return 6;
            case w:
              return 11;
            case k:
            case C:
            case S:
              return e;
            case E:
            case _:
            case b:
              return 9;
            case x:
            case U:
              return 8;
            case j:
              return 12;
            case V:
              return 13;
            case B:
              return 14;
            default:
              switch (u(n)) {
                case A:
                case H:
                case z:
                  return 9;
                case G:
                case K:
                case M:
                case L:
                  return 2;
                case X:
                case Z:
                  return 9;
                case W:
                case Y:
                  return 10;
                default:
                  return 9;
              }
          }
        }
        const xe = new Map(),
          Ne = new Map();
        let Le = -1;
        function getOrGenerateFiberID(e) {
          let t = null;
          if (Ae.has(e)) t = Ae.get(e);
          else {
            const { alternate: n } = e;
            null !== n && Ae.has(n) && (t = Ae.get(n));
          }
          let n = !1;
          null === t && ((n = !0), (t = ++T));
          const r = t;
          Ae.has(e) || (Ae.set(e, r), He.set(r, e));
          const { alternate: o } = e;
          return null !== o && (Ae.has(o) || Ae.set(o, r)), r;
        }
        function getFiberIDThrows(e) {
          const t = getFiberIDUnsafe(e);
          if (null !== t) return t;
          throw Error(`Could not find ID for Fiber "${s(e) || ""}"`);
        }
        function getFiberIDUnsafe(e) {
          if (Ae.has(e)) return Ae.get(e);
          {
            const { alternate: t } = e;
            if (null !== t && Ae.has(t)) return Ae.get(t);
          }
          return null;
        }
        const $e = new Set();
        let ze = null;
        function untrackFibers() {
          null !== ze && (clearTimeout(ze), (ze = null)),
            $e.forEach((e) => {
              const t = getFiberIDUnsafe(e);
              null !== t &&
                (He.delete(t),
                clearErrorsForFiberID(t),
                clearWarningsForFiberID(t)),
                Ae.delete(e),
                Me.delete(e);
              const { alternate: n } = e;
              null !== n && (Ae.delete(n), Me.delete(n)),
                st.has(t) &&
                  (st.delete(t),
                  0 === st.size &&
                    null != de &&
                    de(shouldErrorFiberAlwaysNull));
            }),
            $e.clear();
        }
        function getChangeDescription(e, t) {
          switch (getElementTypeForFiber(t)) {
            case 1:
            case 5:
            case 8:
            case 6:
              if (null === e)
                return {
                  context: null,
                  didHooksChange: !1,
                  isFirstMount: !0,
                  props: null,
                  state: null,
                };
              {
                const n = {
                    context: getContextChangedKeys(t),
                    didHooksChange: !1,
                    isFirstMount: !1,
                    props: getChangedKeys(e.memoizedProps, t.memoizedProps),
                    state: getChangedKeys(e.memoizedState, t.memoizedState),
                  },
                  r = (function (e, t) {
                    if (null == e || null == t) return null;
                    const n = [];
                    let r = 0;
                    if (
                      t.hasOwnProperty("baseState") &&
                      t.hasOwnProperty("memoizedState") &&
                      t.hasOwnProperty("next") &&
                      t.hasOwnProperty("queue")
                    )
                      for (; null !== t; )
                        didStatefulHookChange(e, t) && n.push(r),
                          (t = t.next),
                          (e = e.next),
                          r++;
                    return n;
                  })(e.memoizedState, t.memoizedState);
                return (
                  (n.hooks = r),
                  (n.didHooksChange = null !== r && r.length > 0),
                  n
                );
              }
            default:
              return null;
          }
        }
        function updateContextsForFiber(e) {
          switch (getElementTypeForFiber(e)) {
            case 1:
            case 6:
            case 5:
            case 8:
              if (null !== tt) {
                const t = getFiberIDThrows(e),
                  n = getContextsForFiber(e);
                null !== n && tt.set(t, n);
              }
          }
        }
        const Ue = {};
        function getContextsForFiber(e) {
          let t = Ue,
            n = Ue;
          switch (getElementTypeForFiber(e)) {
            case 1:
              const r = e.stateNode;
              return (
                null != r &&
                  (r.constructor && null != r.constructor.contextType
                    ? (n = r.context)
                    : ((t = r.context),
                      t && 0 === Object.keys(t).length && (t = Ue))),
                [t, n]
              );
            case 6:
            case 5:
            case 8:
              const o = e.dependencies;
              return o && o.firstContext && (n = o.firstContext), [t, n];
            default:
              return null;
          }
        }
        function crawlToInitializeContextsMap(e) {
          if (null !== getFiberIDUnsafe(e)) {
            updateContextsForFiber(e);
            let t = e.child;
            for (; null !== t; )
              crawlToInitializeContextsMap(t), (t = t.sibling);
          }
        }
        function getContextChangedKeys(e) {
          if (null !== tt) {
            const t = getFiberIDThrows(e),
              n = tt.has(t) ? tt.get(t) : null,
              r = getContextsForFiber(e);
            if (null == n || null == r) return null;
            const [o, a] = n,
              [i, l] = r;
            switch (getElementTypeForFiber(e)) {
              case 1:
                if (n && r) {
                  if (i !== Ue) return getChangedKeys(o, i);
                  if (l !== Ue) return a !== l;
                }
                break;
              case 6:
              case 5:
              case 8:
                if (l !== Ue) {
                  let e = a,
                    t = l;
                  for (; e && t; ) {
                    if (!ke(e.memoizedValue, t.memoizedValue)) return !0;
                    (e = e.next), (t = t.next);
                  }
                  return !1;
                }
            }
          }
          return null;
        }
        function didStatefulHookChange(e, t) {
          const n = e.memoizedState,
            r = t.memoizedState;
          return (
            !!(function (e) {
              const t = e.queue;
              if (!t) return !1;
              const n = _e.bind(t);
              return (
                !!n("pending") ||
                (n("value") &&
                  n("getSnapshot") &&
                  "function" == typeof t.getSnapshot)
              );
            })(e) && n !== r
          );
        }
        function getChangedKeys(e, t) {
          if (null == e || null == t) return null;
          if (
            t.hasOwnProperty("baseState") &&
            t.hasOwnProperty("memoizedState") &&
            t.hasOwnProperty("next") &&
            t.hasOwnProperty("queue")
          )
            return null;
          const n = new Set([...Object.keys(e), ...Object.keys(t)]),
            r = [];
          for (const o of n) e[o] !== t[o] && r.push(o);
          return r;
        }
        function didFiberRender(e, t) {
          switch (t.tag) {
            case m:
            case v:
            case h:
            case x:
            case U:
            case y:
              const r = 1;
              return (
                ((void 0 !== (n = t).flags ? n.flags : n.effectTag) & r) === r
              );
            default:
              return (
                e.memoizedProps !== t.memoizedProps ||
                e.memoizedState !== t.memoizedState ||
                e.ref !== t.ref
              );
          }
          var n;
        }
        const je = [],
          Ve = [],
          Be = [];
        let We = [];
        const Ye = new Map();
        let Ge = 0,
          Ke = null;
        function pushOperation(e) {
          je.push(e);
        }
        function shouldBailoutWithPendingOperations() {
          return (
            !(ot && null != Ze && Ze.durations.length > 0) &&
            0 === je.length &&
            0 === Ve.length &&
            0 === Be.length &&
            null === Ke
          );
        }
        function flushOrQueueOperations(e) {
          shouldBailoutWithPendingOperations() ||
            (null !== We ? We.push(e) : r.emit("operations", e));
        }
        let qe = null;
        function clearPendingErrorsAndWarningsAfterDelay() {
          null !== qe && (clearTimeout(qe), (qe = null));
        }
        function mergeMapsAndGetCountHelper(e, t, n, r) {
          let o = 0,
            a = r.get(t);
          const i = n.get(e);
          if (null != i)
            if (null == a) (a = i), r.set(t, i);
            else {
              const e = a;
              i.forEach((t, n) => {
                const r = e.get(n) || 0;
                e.set(n, r + t);
              });
            }
          return (
            shouldFilterFiber(e) ||
              (null != a &&
                a.forEach((e) => {
                  o += e;
                })),
            n.delete(e),
            o
          );
        }
        function recordPendingErrorsAndWarnings() {
          clearPendingErrorsAndWarningsAfterDelay(),
            we.forEach((e) => {
              const t = getFiberIDUnsafe(e);
              if (null === t);
              else {
                const n = mergeMapsAndGetCountHelper(e, t, Ce, Ee),
                  r = mergeMapsAndGetCountHelper(e, t, Se, Fe);
                pushOperation(5),
                  pushOperation(t),
                  pushOperation(n),
                  pushOperation(r);
              }
              Ce.delete(e), Se.delete(e);
            }),
            we.clear();
        }
        function flushPendingEvents(e) {
          if (
            (recordPendingErrorsAndWarnings(),
            shouldBailoutWithPendingOperations())
          )
            return;
          const t = Ve.length + Be.length + (null === Ke ? 0 : 1),
            n = new Array(3 + Ge + (t > 0 ? 2 + t : 0) + je.length);
          let r = 0;
          if (
            ((n[r++] = o),
            (n[r++] = Le),
            (n[r++] = Ge),
            Ye.forEach((e, t) => {
              const o = e.encodedString,
                a = o.length;
              n[r++] = a;
              for (let e = 0; e < a; e++) n[r + e] = o[e];
              r += a;
            }),
            t > 0)
          ) {
            (n[r++] = 2), (n[r++] = t);
            for (let e = Ve.length - 1; e >= 0; e--) n[r++] = Ve[e];
            for (let e = 0; e < Be.length; e++) n[r + e] = Be[e];
            (r += Be.length), null !== Ke && ((n[r] = Ke), r++);
          }
          for (let e = 0; e < je.length; e++) n[r + e] = je[e];
          (r += je.length),
            flushOrQueueOperations(n),
            (je.length = 0),
            (Ve.length = 0),
            (Be.length = 0),
            (Ke = null),
            Ye.clear(),
            (Ge = 0);
        }
        function getStringID(e) {
          if (null === e) return 0;
          const t = Ye.get(e);
          if (void 0 !== t) return t.id;
          const n = Ye.size + 1,
            r = (function (e) {
              const t = F.get(e);
              if (void 0 !== t) return t;
              const n = [];
              let r,
                o = 0;
              for (; o < e.length; )
                (r = e.charCodeAt(o)),
                  55296 == (63488 & r)
                    ? n.push(
                        ((a = r),
                        (i = e.charCodeAt(++o)),
                        ((1023 & a) << 10) + (1023 & i) + 65536)
                      )
                    : n.push(r),
                  ++o;
              var a, i;
              return F.set(e, n), n;
            })(e);
          return (
            Ye.set(e, {
              encodedString: r,
              id: n,
            }),
            (Ge += r.length + 1),
            n
          );
        }
        function recordMount(e, t) {
          const n = e.tag === w,
            r = getOrGenerateFiberID(e);
          const o = e.hasOwnProperty("_debugOwner"),
            a = e.hasOwnProperty("treeBaseDuration");
          let i = 0;
          if ((a && ((i = 1), "function" == typeof ae && (i |= 2)), n))
            pushOperation(1),
              pushOperation(r),
              pushOperation(11),
              pushOperation(0 != (e.mode & p) ? 1 : 0),
              pushOperation(i),
              pushOperation(0 !== p ? 1 : 0),
              pushOperation(o ? 1 : 0),
              ot && null !== et && et.set(r, getDisplayNameForRoot(e));
          else {
            const { key: n } = e,
              o = s(e),
              a = getElementTypeForFiber(e),
              i = e._debugOwner;
            let l;
            l =
              null != i && "number" == typeof i.tag
                ? getOrGenerateFiberID(i)
                : 0;
            const u = t ? getFiberIDThrows(t) : 0,
              c = getStringID(o),
              f = getStringID(null === n ? null : String(n));
            pushOperation(1),
              pushOperation(r),
              pushOperation(a),
              pushOperation(u),
              pushOperation(l),
              pushOperation(c),
              pushOperation(f),
              0 != (e.mode & p) &&
                0 == (t.mode & p) &&
                (pushOperation(7), pushOperation(r), pushOperation(1));
          }
          a && (Ne.set(r, Le), recordProfilingDurations(e));
        }
        function recordUnmount(e, t) {
          null !== ft &&
            ((e !== ft && e !== ft.alternate) || setTrackedPath(null));
          const n = getFiberIDUnsafe(e);
          if (null === n) return;
          const r = n;
          if (
            (e.tag === w
              ? (Ke = r)
              : shouldFilterFiber(e) || (t ? Be.push(r) : Ve.push(r)),
            !e._debugNeedsRemount)
          ) {
            !(function (e) {
              $e.add(e);
              const t = e.alternate;
              null !== t && $e.add(t),
                null === ze && (ze = setTimeout(untrackFibers, 1e3));
            })(e);
            e.hasOwnProperty("treeBaseDuration") &&
              (Ne.delete(r), xe.delete(r));
          }
        }
        function mountFiberRecursively(t, n, r, o) {
          let a = t;
          for (; null !== a; ) {
            getOrGenerateFiberID(a);
            const t = updateTrackedPathStateBeforeMount(a),
              i = !shouldFilterFiber(a);
            if ((i && recordMount(a, n), Re && o)) {
              getElementTypeForFiber(a) === e &&
                (Oe.add(a.stateNode), (o = !1));
            }
            if (a.tag === f.SuspenseComponent) {
              if (null !== a.memoizedState) {
                const e = a.child,
                  t = e ? e.sibling : null,
                  r = t ? t.child : null;
                null !== r && mountFiberRecursively(r, i ? a : n, !0, o);
              } else {
                let e = null;
                -1 === $
                  ? (e = a.child)
                  : null !== a.child && (e = a.child.child),
                  null !== e && mountFiberRecursively(e, i ? a : n, !0, o);
              }
            } else
              null !== a.child &&
                mountFiberRecursively(a.child, i ? a : n, !0, o);
            updateTrackedPathStateAfterMount(t), (a = r ? a.sibling : null);
          }
        }
        function unmountFiberChildrenRecursively(e) {
          const t = e.tag === f.SuspenseComponent && null !== e.memoizedState;
          let n = e.child;
          if (t) {
            const t = e.child,
              r = t ? t.sibling : null;
            n = r ? r.child : null;
          }
          for (; null !== n; )
            null !== n.return &&
              (unmountFiberChildrenRecursively(n), recordUnmount(n, !0)),
              (n = n.sibling);
        }
        function recordProfilingDurations(e) {
          const t = getFiberIDThrows(e),
            { actualDuration: n, treeBaseDuration: r } = e;
          if ((xe.set(t, r || 0), ot)) {
            const { alternate: o } = e;
            if (null == o || r !== o.treeBaseDuration) {
              const e = Math.floor(1e3 * (r || 0));
              pushOperation(4), pushOperation(t), pushOperation(e);
            }
            if ((null == o || didFiberRender(o, e)) && null != n) {
              let r = n,
                a = e.child;
              for (; null !== a; )
                (r -= a.actualDuration || 0), (a = a.sibling);
              const i = Ze;
              if (
                (i.durations.push(t, n, r),
                (i.maxActualDuration = Math.max(i.maxActualDuration, n)),
                it)
              ) {
                const n = getChangeDescription(o, e);
                null !== n &&
                  null !== i.changeDescriptions &&
                  i.changeDescriptions.set(t, n),
                  updateContextsForFiber(e);
              }
            }
          }
        }
        function findReorderedChildrenRecursively(e, t) {
          if (shouldFilterFiber(e)) {
            let n = e.child;
            if (e.tag === j && null !== e.memoizedState) {
              const t = e.child,
                r = t ? t.sibling : null,
                o = r ? r.child : null;
              null !== o && (n = o);
            }
            for (; null !== n; )
              findReorderedChildrenRecursively(n, t), (n = n.sibling);
          } else t.push(getFiberIDThrows(e));
        }
        function updateFiberRecursively(t, n, r, o) {
          const a = getOrGenerateFiberID(t);
          if (Re) {
            const r = getElementTypeForFiber(t);
            o
              ? r === e && (Oe.add(t.stateNode), (o = !1))
              : (5 !== r && 1 !== r && 2 !== r && 8 !== r && 6 !== r) ||
                (o = didFiberRender(n, t));
          }
          null !== Qe && Qe.id === a && didFiberRender(n, t) && (Je = !0);
          const i = !shouldFilterFiber(t),
            l = t.tag === j;
          let s = !1;
          const u = l && null !== n.memoizedState,
            c = l && null !== t.memoizedState;
          if (u && c) {
            const e = t.child,
              a = e ? e.sibling : null,
              l = n.child,
              u = l ? l.sibling : null;
            null == u &&
              null != a &&
              (mountFiberRecursively(a, i ? t : r, !0, o), (s = !0)),
              null != a &&
                null != u &&
                updateFiberRecursively(a, u, t, o) &&
                (s = !0);
          } else if (u && !c) {
            const e = t.child;
            null !== e && mountFiberRecursively(e, i ? t : r, !0, o), (s = !0);
          } else if (!u && c) {
            unmountFiberChildrenRecursively(n);
            const e = t.child,
              a = e ? e.sibling : null;
            null != a && (mountFiberRecursively(a, i ? t : r, !0, o), (s = !0));
          } else if (t.child !== n.child) {
            let e = t.child,
              a = n.child;
            for (; e; ) {
              if (e.alternate) {
                const n = e.alternate;
                updateFiberRecursively(e, n, i ? t : r, o) && (s = !0),
                  n !== a && (s = !0);
              } else mountFiberRecursively(e, i ? t : r, !1, o), (s = !0);
              (e = e.sibling), s || null === a || (a = a.sibling);
            }
            null !== a && (s = !0);
          } else if (Re && o) {
            findAllCurrentHostFibers(getFiberIDThrows(t)).forEach((e) => {
              Oe.add(e.stateNode);
            });
          }
          if (i) {
            t.hasOwnProperty("treeBaseDuration") && recordProfilingDurations(t);
          }
          if (s) {
            if (i) {
              let e = t.child;
              if (c) {
                const n = t.child;
                e = n ? n.sibling : null;
              }
              return (
                null != e &&
                  (function (e, t) {
                    const n = [];
                    let r = t;
                    for (; null !== r; )
                      findReorderedChildrenRecursively(r, n), (r = r.sibling);
                    const o = n.length;
                    if (!(o < 2)) {
                      pushOperation(3),
                        pushOperation(getFiberIDThrows(e)),
                        pushOperation(o);
                      for (let e = 0; e < n.length; e++) pushOperation(n[e]);
                    }
                  })(t, e),
                !1
              );
            }
            return !0;
          }
          return !1;
        }
        function rootSupportsProfiling(e) {
          return (
            null != e.memoizedInteractions ||
            !(
              null == e.current || !e.current.hasOwnProperty("treeBaseDuration")
            )
          );
        }
        function getUpdatersList(e) {
          return null != e.memoizedUpdaters
            ? Array.from(e.memoizedUpdaters)
                .filter((e) => null !== getFiberIDUnsafe(e))
                .map(fiberToSerializedElement)
            : null;
        }
        function findAllCurrentHostFibers(e) {
          const t = [],
            n = findCurrentFiberUsingSlowPathById(e);
          if (!n) return t;
          let r = n;
          for (;;) {
            if (r.tag === k || r.tag === _) t.push(r);
            else if (r.child) {
              (r.child.return = r), (r = r.child);
              continue;
            }
            if (r === n) return t;
            for (; !r.sibling; ) {
              if (!r.return || r.return === n) return t;
              r = r.return;
            }
            (r.sibling.return = r.return), (r = r.sibling);
          }
          return t;
        }
        function findNativeNodesForFiberID(e) {
          try {
            if (null === findCurrentFiberUsingSlowPathById(e)) return null;
            return findAllCurrentHostFibers(e)
              .map((e) => e.stateNode)
              .filter(Boolean);
          } catch (e) {
            return null;
          }
        }
        function assertIsMounted(e) {
          if (getNearestMountedFiber(e) !== e)
            throw new Error("Unable to find node on an unmounted component.");
        }
        function getNearestMountedFiber(e) {
          let t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            let e = t;
            do {
              t = e;
              const r = 2,
                o = 4096;
              0 != (t.flags & (r | o)) && (n = t.return), (e = t.return);
            } while (e);
          }
          return t.tag === w ? n : null;
        }
        function findCurrentFiberUsingSlowPathById(e) {
          const t = He.get(e);
          if (null == t)
            return console.warn(`Could not find Fiber with id "${e}"`), null;
          const n = t.alternate;
          if (!n) {
            const e = getNearestMountedFiber(t);
            if (null === e)
              throw new Error("Unable to find node on an unmounted component.");
            return e !== t ? null : t;
          }
          let r = t,
            o = n;
          for (;;) {
            const e = r.return;
            if (null === e) break;
            const a = e.alternate;
            if (null === a) {
              const t = e.return;
              if (null !== t) {
                r = o = t;
                continue;
              }
              break;
            }
            if (e.child === a.child) {
              let a = e.child;
              for (; a; ) {
                if (a === r) return assertIsMounted(e), t;
                if (a === o) return assertIsMounted(e), n;
                a = a.sibling;
              }
              throw new Error("Unable to find node on an unmounted component.");
            }
            if (r.return !== o.return) (r = e), (o = a);
            else {
              let t = !1,
                n = e.child;
              for (; n; ) {
                if (n === r) {
                  (t = !0), (r = e), (o = a);
                  break;
                }
                if (n === o) {
                  (t = !0), (o = e), (r = a);
                  break;
                }
                n = n.sibling;
              }
              if (!t) {
                for (n = a.child; n; ) {
                  if (n === r) {
                    (t = !0), (r = a), (o = e);
                    break;
                  }
                  if (n === o) {
                    (t = !0), (o = a), (r = e);
                    break;
                  }
                  n = n.sibling;
                }
                if (!t)
                  throw new Error(
                    "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
                  );
              }
            }
            if (r.alternate !== o)
              throw new Error(
                "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
              );
          }
          if (r.tag !== w)
            throw new Error("Unable to find node on an unmounted component.");
          return r.stateNode.current === r ? t : n;
        }
        function fiberToSerializedElement(e) {
          return {
            displayName: s(e) || "Anonymous",
            id: getFiberIDThrows(e),
            key: e.key,
            type: getElementTypeForFiber(e),
          };
        }
        function isErrorBoundary(e) {
          const { tag: t, type: n } = e;
          switch (t) {
            case m:
            case I:
              const t = e.stateNode;
              return (
                "function" == typeof n.getDerivedStateFromError ||
                (null !== t && "function" == typeof t.componentDidCatch)
              );
            default:
              return !1;
          }
        }
        function getNearestErrorBoundaryID(e) {
          let t = e.return;
          for (; null !== t; ) {
            if (isErrorBoundary(t)) return getFiberIDUnsafe(t);
            t = t.return;
          }
          return null;
        }
        function inspectElementRaw(e) {
          const t = findCurrentFiberUsingSlowPathById(e);
          if (null == t) return null;
          const {
              _debugOwner: n,
              stateNode: r,
              key: o,
              memoizedProps: i,
              memoizedState: l,
              dependencies: c,
              tag: f,
              type: p,
            } = t,
            h = getElementTypeForFiber(t),
            g = !((f !== v && f !== U && f !== y) || (!l && !c)),
            b = !g && f !== d,
            w = u(p);
          let C = !1,
            S = null;
          if (
            f === m ||
            f === v ||
            f === I ||
            f === D ||
            f === R ||
            f === x ||
            f === y ||
            f === U
          ) {
            if (((C = !0), r && null != r.context)) {
              (1 === h && !(p.contextTypes || p.contextType)) ||
                (S = r.context);
            }
          } else if (
            (w !== M && w !== L) ||
            (void 0 === p._context && p.Provider === p)
          ) {
            if (w === q) {
              const e = p._context;
              S = e._currentValue || null;
              let n = t.return;
              for (; null !== n; ) {
                const t = n.type;
                if (u(t) === L) {
                  if (t === e) {
                    S = n.memoizedProps.value;
                    break;
                  }
                }
                n = n.return;
              }
            }
          } else {
            const e = p._context || p;
            S = e._currentValue || null;
            let n = t.return;
            for (; null !== n; ) {
              const t = n.type,
                r = u(t);
              if (r === G || r === K) {
                if ((t._context || t.context) === e) {
                  S = n.memoizedProps.value;
                  break;
                }
              }
              n = n.return;
            }
          }
          let E = !1;
          null !== S &&
            ((E = !!p.contextTypes),
            (S = {
              value: S,
            }));
          let k = null,
            _ = n;
          for (; null != _ && "number" == typeof _.tag; ) {
            const e = _;
            null === k && (k = []),
              k.push(fiberToSerializedElement(e)),
              (_ = e._debugOwner);
          }
          const F = f === j && null !== l;
          let T = null;
          if (g) {
            const e = {};
            for (const t in console)
              try {
                (e[t] = console[t]), (console[t] = () => {});
              } catch (e) {}
            try {
              T = (0, P.inspectHooksOfFiber)(t, getDispatcherRef(a));
            } finally {
              for (const t in e)
                try {
                  console[t] = e[t];
                } catch (e) {}
            }
          }
          let O = null,
            N = t;
          for (; null !== N.return; ) N = N.return;
          const A = N.stateNode;
          null != A && null !== A._debugRootType && (O = A._debugRootType);
          const H = Ee.get(e) || new Map(),
            $ = Fe.get(e) || new Map();
          let z,
            V = !1;
          if (isErrorBoundary(t)) {
            const n = 128;
            (V = 0 != (t.flags & n) || !0 === st.get(e)),
              (z = V ? e : getNearestErrorBoundaryID(t));
          } else z = getNearestErrorBoundaryID(t);
          const B = {
            stylex: null,
          };
          let W = null;
          return (
            C && (W = getSourceForFiber(t)),
            {
              id: e,
              canEditHooks: "function" == typeof ie,
              canEditFunctionProps: "function" == typeof ue,
              canEditHooksAndDeletePaths: "function" == typeof le,
              canEditHooksAndRenamePaths: "function" == typeof se,
              canEditFunctionPropsDeletePaths: "function" == typeof ce,
              canEditFunctionPropsRenamePaths: "function" == typeof fe,
              canToggleError: ge && null != z,
              isErrored: V,
              targetErrorBoundaryID: z,
              canToggleSuspense: ye && (!F || ut.has(e)),
              canViewSource: C,
              source: W,
              hasLegacyContext: E,
              key: null != o ? o : null,
              displayName: s(t),
              type: h,
              context: S,
              hooks: T,
              props: i,
              state: b ? l : null,
              errors: Array.from(H.entries()),
              warnings: Array.from($.entries()),
              owners: k,
              rootType: O,
              rendererPackageName: a.rendererPackageName,
              rendererVersion: a.version,
              plugins: B,
            }
          );
        }
        let Qe = null,
          Je = !1,
          Xe = {};
        function isMostRecentlyInspectedElement(e) {
          return null !== Qe && Qe.id === e;
        }
        function createIsPathAllowed(e, t) {
          return function (n) {
            if ("hooks" === t) {
              if (1 === n.length) return !0;
              if (
                "hookSource" === n[n.length - 2] &&
                "fileName" === n[n.length - 1]
              )
                return !0;
              if (
                "subHooks" === n[n.length - 1] ||
                "subHooks" === n[n.length - 2]
              )
                return !0;
            }
            let r = null === e ? Xe : Xe[e];
            if (!r) return !1;
            for (let e = 0; e < n.length; e++)
              if (((r = r[n[e]]), !r)) return !1;
            return !0;
          };
        }
        let Ze = null,
          et = null,
          tt = null,
          nt = null,
          rt = null,
          ot = !1,
          at = 0,
          it = !1,
          lt = null;
        function startProfiling(e) {
          ot ||
            ((it = e),
            (et = new Map()),
            (nt = new Map(xe)),
            (rt = new Map(Ne)),
            (tt = new Map()),
            r.getFiberRoots(o).forEach((t) => {
              const n = getFiberIDThrows(t.current);
              et.set(n, getDisplayNameForRoot(t.current)),
                e && crawlToInitializeContextsMap(t.current);
            }),
            (ot = !0),
            (at = Pe()),
            (lt = new Map()),
            null !== ve && ve(!0));
        }
        function shouldErrorFiberAlwaysNull() {
          return null;
        }
        "true" === sessionStorageGetItem(N) &&
          startProfiling(
            "true" ===
              sessionStorageGetItem("React::DevTools::recordChangeDescriptions")
          );
        const st = new Map();
        function shouldErrorFiberAccordingToMap(e) {
          if ("function" != typeof de)
            throw new Error(
              "Expected overrideError() to not get called for earlier React versions."
            );
          const t = getFiberIDUnsafe(e);
          if (null === t) return null;
          let n = null;
          return (
            st.has(t) &&
              ((n = st.get(t)),
              !1 === n &&
                (st.delete(t),
                0 === st.size && de(shouldErrorFiberAlwaysNull))),
            n
          );
        }
        function shouldSuspendFiberAlwaysFalse() {
          return !1;
        }
        const ut = new Set();
        function shouldSuspendFiberAccordingToSet(e) {
          const t = getFiberIDUnsafe(e);
          return null !== t && ut.has(t);
        }
        let ct = null,
          ft = null,
          pt = -1,
          dt = !1;
        function setTrackedPath(e) {
          null === e && ((ft = null), (pt = -1), (dt = !1)), (ct = e);
        }
        function updateTrackedPathStateBeforeMount(e) {
          if (null === ct || !dt) return !1;
          const t = e.return,
            n = null !== t ? t.alternate : null;
          if (ft === t || (ft === n && null !== n)) {
            const t = getPathFrame(e),
              n = ct[pt + 1];
            if (void 0 === n)
              throw new Error("Expected to see a frame at the next depth.");
            if (
              t.index === n.index &&
              t.key === n.key &&
              t.displayName === n.displayName
            )
              return (ft = e), pt++, (dt = pt !== ct.length - 1), !1;
          }
          return (dt = !1), !0;
        }
        function updateTrackedPathStateAfterMount(e) {
          dt = e;
        }
        const mt = new Map(),
          ht = new Map();
        function setRootPseudoKey(e, t) {
          const n = getDisplayNameForRoot(t),
            r = ht.get(n) || 0;
          ht.set(n, r + 1);
          const o = `${n}:${r}`;
          mt.set(e, o);
        }
        function getDisplayNameForRoot(e) {
          let t = null,
            n = null,
            r = e.child;
          for (let e = 0; e < 3 && null !== r; e++) {
            const e = s(r);
            if (
              (null !== e &&
                ("function" == typeof r.type ? (t = e) : null === n && (n = e)),
              null !== t)
            )
              break;
            r = r.child;
          }
          return t || n || "Anonymous";
        }
        function getPathFrame(e) {
          const { key: t } = e;
          let n = s(e);
          const r = e.index;
          switch (e.tag) {
            case w:
              const t = getFiberIDThrows(e),
                r = mt.get(t);
              if (void 0 === r)
                throw new Error(
                  "Expected mounted root to have known pseudo key."
                );
              n = r;
              break;
            case k:
              n = e.type;
          }
          return {
            displayName: n,
            key: t,
            index: r,
          };
        }
        const formatPriorityLevel = (e) => {
          if (null == e) return "Unknown";
          switch (e) {
            case Q:
              return "Immediate";
            case J:
              return "User-Blocking";
            case ee:
              return "Normal";
            case te:
              return "Low";
            case ne:
              return "Idle";
            default:
              return "Unknown";
          }
        };
        function getComponentStackForFiber(e) {
          let t = Me.get(e);
          if (null == t) {
            const n = getDispatcherRef(a);
            if (null == n) return null;
            (t = getStackByFiberInDevAndProd(f, e, n)), Me.set(e, t);
          }
          return t;
        }
        function getSourceForFiber(e) {
          const t = getComponentStackForFiber(e);
          return null == t ? null : parseSourceFromComponentStack(t);
        }
        return {
          cleanup: function () {},
          clearErrorsAndWarnings: function () {
            for (const e of Ee.keys()) {
              const t = He.get(e);
              null != t &&
                (we.add(t), updateMostRecentlyInspectedElementIfNecessary(e));
            }
            for (const e of Fe.keys()) {
              const t = He.get(e);
              null != t &&
                (we.add(t), updateMostRecentlyInspectedElementIfNecessary(e));
            }
            Ee.clear(), Fe.clear(), flushPendingEvents();
          },
          clearErrorsForFiberID,
          clearWarningsForFiberID,
          getSerializedElementValueByPath: function (e, t) {
            if (isMostRecentlyInspectedElement(e)) {
              return (function (e) {
                if (void 0 === e) return "undefined";
                const t = new Set();
                return JSON.stringify(
                  e,
                  (e, n) => {
                    if ("object" == typeof n && null !== n) {
                      if (t.has(n)) return;
                      t.add(n);
                    }
                    return "bigint" == typeof n ? n.toString() + "n" : n;
                  },
                  2
                );
              })(utils_getInObject(Qe, t));
            }
          },
          deletePath: function (e, t, n, r) {
            const o = findCurrentFiberUsingSlowPathById(t);
            if (null !== o) {
              const t = o.stateNode;
              switch (e) {
                case "context":
                  if (((r = r.slice(1)), o.tag === m))
                    0 === r.length || deletePathInObject(t.context, r),
                      t.forceUpdate();
                  break;
                case "hooks":
                  "function" == typeof le && le(o, n, r);
                  break;
                case "props":
                  null === t
                    ? "function" == typeof ce && ce(o, r)
                    : ((o.pendingProps = copyWithDelete(t.props, r)),
                      t.forceUpdate());
                  break;
                case "state":
                  deletePathInObject(t.state, r), t.forceUpdate();
              }
            }
          },
          findNativeNodesForFiberID,
          flushInitialOperations: function () {
            const e = We;
            (We = null),
              null !== e && e.length > 0
                ? e.forEach((e) => {
                    r.emit("operations", e);
                  })
                : (null !== ct && (dt = !0),
                  r.getFiberRoots(o).forEach((e) => {
                    (Le = getOrGenerateFiberID(e.current)),
                      setRootPseudoKey(Le, e.current),
                      ot &&
                        rootSupportsProfiling(e) &&
                        (Ze = {
                          changeDescriptions: it ? new Map() : null,
                          durations: [],
                          commitTime: Pe() - at,
                          maxActualDuration: 0,
                          priorityLevel: null,
                          updaters: getUpdatersList(e),
                          effectDuration: null,
                          passiveEffectDuration: null,
                        }),
                      mountFiberRecursively(e.current, null, !1, !1),
                      flushPendingEvents(),
                      (Le = -1);
                  }));
          },
          getBestMatchForTrackedPath: function () {
            if (null === ct) return null;
            if (null === ft) return null;
            let e = ft;
            for (; null !== e && shouldFilterFiber(e); ) e = e.return;
            return null === e
              ? null
              : {
                  id: getFiberIDThrows(e),
                  isFullMatch: pt === ct.length - 1,
                };
          },
          getComponentStackForFiber,
          getSourceForFiber,
          getDisplayNameForFiberID: function (e) {
            const t = He.get(e);
            return null != t ? s(t) : null;
          },
          getFiberForNative: function (e) {
            return a.findFiberByHostInstance(e);
          },
          getFiberIDForNative: function (e, t = !1) {
            let n = a.findFiberByHostInstance(e);
            if (null != n) {
              if (t) for (; null !== n && shouldFilterFiber(n); ) n = n.return;
              return getFiberIDThrows(n);
            }
            return null;
          },
          getInstanceAndStyle: function (e) {
            let t = null,
              n = null;
            const r = findCurrentFiberUsingSlowPathById(e);
            return (
              null !== r &&
                ((t = r.stateNode),
                null !== r.memoizedProps && (n = r.memoizedProps.style)),
              {
                instance: t,
                style: n,
              }
            );
          },
          getOwnersList: function (e) {
            const t = findCurrentFiberUsingSlowPathById(e);
            if (null == t) return null;
            const n = [fiberToSerializedElement(t)];
            let r = t._debugOwner;
            for (; null != r && "number" == typeof r.tag; ) {
              const e = r;
              n.unshift(fiberToSerializedElement(e)), (r = e._debugOwner);
            }
            return n;
          },
          getPathForElement: function (e) {
            let t = He.get(e);
            if (null == t) return null;
            const n = [];
            for (; null !== t; ) n.push(getPathFrame(t)), (t = t.return);
            return n.reverse(), n;
          },
          getProfilingData: function () {
            const e = [];
            if (null === lt)
              throw Error(
                "getProfilingData() called before any profiling data was recorded"
              );
            lt.forEach((t, n) => {
              const r = [],
                o = [],
                a = (null !== et && et.get(n)) || "Unknown";
              null != nt &&
                nt.forEach((e, t) => {
                  null != rt && rt.get(t) === n && o.push([t, e]);
                }),
                t.forEach((e, t) => {
                  const {
                      changeDescriptions: n,
                      durations: o,
                      effectDuration: a,
                      maxActualDuration: i,
                      passiveEffectDuration: l,
                      priorityLevel: s,
                      commitTime: u,
                      updaters: c,
                    } = e,
                    f = [],
                    p = [];
                  for (let e = 0; e < o.length; e += 3) {
                    const t = o[e];
                    f.push([t, o[e + 1]]), p.push([t, o[e + 2]]);
                  }
                  r.push({
                    changeDescriptions:
                      null !== n ? Array.from(n.entries()) : null,
                    duration: i,
                    effectDuration: a,
                    fiberActualDurations: f,
                    fiberSelfDurations: p,
                    passiveEffectDuration: l,
                    priorityLevel: s,
                    timestamp: u,
                    updaters: c,
                  });
                }),
                e.push({
                  commitData: r,
                  displayName: a,
                  initialTreeBaseDurations: o,
                  rootID: n,
                });
            });
            let t = null;
            if ("function" == typeof be) {
              const e = be();
              if (e) {
                const {
                  batchUIDToMeasuresMap: n,
                  internalModuleSourceToRanges: r,
                  laneToLabelMap: o,
                  laneToReactMeasureMap: a,
                  ...i
                } = e;
                t = {
                  ...i,
                  batchUIDToMeasuresKeyValueArray: Array.from(n.entries()),
                  internalModuleSourceToRanges: Array.from(r.entries()),
                  laneToLabelKeyValueArray: Array.from(o.entries()),
                  laneToReactMeasureKeyValueArray: Array.from(a.entries()),
                };
              }
            }
            return {
              dataForRoots: e,
              rendererID: o,
              timelineData: t,
            };
          },
          handleCommitFiberRoot: function (e, t) {
            const n = e.current,
              o = n.alternate;
            untrackFibers(),
              (Le = getOrGenerateFiberID(n)),
              null !== ct && (dt = !0),
              Re && Oe.clear();
            const a = rootSupportsProfiling(e);
            if (
              (ot &&
                a &&
                (Ze = {
                  changeDescriptions: it ? new Map() : null,
                  durations: [],
                  commitTime: Pe() - at,
                  maxActualDuration: 0,
                  priorityLevel: null == t ? null : formatPriorityLevel(t),
                  updaters: getUpdatersList(e),
                  effectDuration: null,
                  passiveEffectDuration: null,
                }),
              o)
            ) {
              const e =
                  null != o.memoizedState &&
                  null != o.memoizedState.element &&
                  !0 !== o.memoizedState.isDehydrated,
                t =
                  null != n.memoizedState &&
                  null != n.memoizedState.element &&
                  !0 !== n.memoizedState.isDehydrated;
              !e && t
                ? (setRootPseudoKey(Le, n),
                  mountFiberRecursively(n, null, !1, !1))
                : e && t
                ? updateFiberRecursively(n, o, null, !1)
                : e &&
                  !t &&
                  (!(function (e) {
                    const t = mt.get(e);
                    if (void 0 === t)
                      throw new Error("Expected root pseudo key to be known.");
                    const n = t.slice(0, t.lastIndexOf(":")),
                      r = ht.get(n);
                    if (void 0 === r)
                      throw new Error("Expected counter to be known.");
                    r > 1 ? ht.set(n, r - 1) : ht.delete(n);
                    mt.delete(e);
                  })(Le),
                  recordUnmount(n, !1));
            } else
              setRootPseudoKey(Le, n), mountFiberRecursively(n, null, !1, !1);
            if (ot && a && !shouldBailoutWithPendingOperations()) {
              const e = lt.get(Le);
              null != e ? e.push(Ze) : lt.set(Le, [Ze]);
            }
            flushPendingEvents(), Re && r.emit("traceUpdates", Oe), (Le = -1);
          },
          handleCommitFiberUnmount: function (e) {
            $e.has(e) || recordUnmount(e, !1);
          },
          handlePostCommitFiberRoot: function (e) {
            if (ot && rootSupportsProfiling(e) && null !== Ze) {
              const { effectDuration: t, passiveEffectDuration: n } =
                (function (e) {
                  let t = null,
                    n = null;
                  const r = e.current;
                  if (null != r) {
                    const e = r.stateNode;
                    null != e &&
                      ((t = null != e.effectDuration ? e.effectDuration : null),
                      (n =
                        null != e.passiveEffectDuration
                          ? e.passiveEffectDuration
                          : null));
                  }
                  return {
                    effectDuration: t,
                    passiveEffectDuration: n,
                  };
                })(e);
              (Ze.effectDuration = t), (Ze.passiveEffectDuration = n);
            }
          },
          hasFiberWithId: function (e) {
            return He.has(e);
          },
          inspectElement: function (e, t, n, r) {
            if (
              (null !== n &&
                (function (e) {
                  let t = Xe;
                  e.forEach((e) => {
                    t[e] || (t[e] = {}), (t = t[e]);
                  });
                })(n),
              isMostRecentlyInspectedElement(t) && !r)
            ) {
              if (!Je) {
                if (null !== n) {
                  let r = null;
                  return (
                    "hooks" === n[0] && (r = "hooks"),
                    {
                      id: t,
                      responseID: e,
                      type: "hydrated-path",
                      path: n,
                      value: cleanForBridge(
                        utils_getInObject(Qe, n),
                        createIsPathAllowed(null, r),
                        n
                      ),
                    }
                  );
                }
                return {
                  id: t,
                  responseID: e,
                  type: "no-change",
                };
              }
            } else Xe = {};
            Je = !1;
            try {
              Qe = inspectElementRaw(t);
            } catch (n) {
              if ("ReactDebugToolsRenderError" === n.name) {
                let r,
                  o = "Error rendering inspected element.";
                if ((console.error(o + "\n\n", n), null != n.cause)) {
                  const e = findCurrentFiberUsingSlowPathById(t),
                    a = null != e ? s(e) : null;
                  console.error(
                    "React DevTools encountered an error while trying to inspect hooks. This is most likely caused by an error in current inspected component" +
                      (null != a ? `: "${a}".` : ".") +
                      "\nThe error thrown in the component is: \n\n",
                    n.cause
                  ),
                    n.cause instanceof Error &&
                      ((o = n.cause.message || o), (r = n.cause.stack));
                }
                return {
                  type: "error",
                  errorType: "user",
                  id: t,
                  responseID: e,
                  message: o,
                  stack: r,
                };
              }
              return "ReactDebugToolsUnsupportedHookError" === n.name
                ? {
                    type: "error",
                    errorType: "unknown-hook",
                    id: t,
                    responseID: e,
                    message:
                      "Unsupported hook in the react-debug-tools package: " +
                      n.message,
                  }
                : (console.error("Error inspecting element.\n\n", n),
                  {
                    type: "error",
                    errorType: "uncaught",
                    id: t,
                    responseID: e,
                    message: n.message,
                    stack: n.stack,
                  });
            }
            if (null === Qe)
              return {
                id: t,
                responseID: e,
                type: "not-found",
              };
            !(function (e) {
              const { hooks: t, id: n, props: r } = e,
                o = He.get(n);
              if (null == o)
                return void console.warn(`Could not find Fiber with id "${n}"`);
              const { elementType: a, stateNode: l, tag: s, type: u } = o;
              switch (s) {
                case m:
                case I:
                case R:
                  i.$r = l;
                  break;
                case D:
                case v:
                  i.$r = {
                    hooks: t,
                    props: r,
                    type: u,
                  };
                  break;
                case y:
                  i.$r = {
                    hooks: t,
                    props: r,
                    type: u.render,
                  };
                  break;
                case x:
                case U:
                  i.$r = {
                    hooks: t,
                    props: r,
                    type: null != a && null != a.type ? a.type : u,
                  };
                  break;
                default:
                  i.$r = null;
              }
            })(Qe);
            const o = {
              ...Qe,
            };
            return (
              (o.context = cleanForBridge(
                o.context,
                createIsPathAllowed("context", null)
              )),
              (o.hooks = cleanForBridge(
                o.hooks,
                createIsPathAllowed("hooks", "hooks")
              )),
              (o.props = cleanForBridge(
                o.props,
                createIsPathAllowed("props", null)
              )),
              (o.state = cleanForBridge(
                o.state,
                createIsPathAllowed("state", null)
              )),
              {
                id: t,
                responseID: e,
                type: "full-data",
                value: o,
              }
            );
          },
          logElementToConsole: function (e) {
            const t = (function (e) {
              return isMostRecentlyInspectedElement(e) && !Je;
            })(e)
              ? Qe
              : inspectElementRaw(e);
            if (null === t)
              return void console.warn(`Could not find Fiber with id "${e}"`);
            const n = "function" == typeof console.groupCollapsed;
            n &&
              console.groupCollapsed(
                `[Click to expand] %c<${t.displayName || "Component"} />`,
                "color: var(--dom-tag-name-color); font-weight: normal;"
              ),
              null !== t.props && console.log("Props:", t.props),
              null !== t.state && console.log("State:", t.state),
              null !== t.hooks && console.log("Hooks:", t.hooks);
            const r = findNativeNodesForFiberID(e);
            null !== r && console.log("Nodes:", r),
              (window.chrome || /firefox/i.test(navigator.userAgent)) &&
                console.log(
                  "Right-click any value to save it as a global variable for further inspection."
                ),
              n && console.groupEnd();
          },
          patchConsoleForStrictMode: patchForStrictMode,
          prepareViewAttributeSource: function (e, t) {
            isMostRecentlyInspectedElement(e) &&
              (window.$attribute = utils_getInObject(Qe, t));
          },
          prepareViewElementSource: function (e) {
            const t = He.get(e);
            if (null == t)
              return void console.warn(`Could not find Fiber with id "${e}"`);
            const { elementType: n, tag: r, type: o } = t;
            switch (r) {
              case m:
              case I:
              case D:
              case R:
              case v:
                i.$type = o;
                break;
              case y:
                i.$type = o.render;
                break;
              case x:
              case U:
                i.$type = null != n && null != n.type ? n.type : o;
                break;
              default:
                i.$type = null;
            }
          },
          overrideError: function (e, t) {
            if ("function" != typeof de || "function" != typeof he)
              throw new Error(
                "Expected overrideError() to not get called for earlier React versions."
              );
            st.set(e, t), 1 === st.size && de(shouldErrorFiberAccordingToMap);
            const n = He.get(e);
            null != n && he(n);
          },
          overrideSuspense: function (e, t) {
            if ("function" != typeof me || "function" != typeof he)
              throw new Error(
                "Expected overrideSuspense() to not get called for earlier React versions."
              );
            t
              ? (ut.add(e),
                1 === ut.size && me(shouldSuspendFiberAccordingToSet))
              : (ut.delete(e),
                0 === ut.size && me(shouldSuspendFiberAlwaysFalse));
            const n = He.get(e);
            null != n && he(n);
          },
          overrideValueAtPath: function (e, t, n, r, o) {
            const a = findCurrentFiberUsingSlowPathById(t);
            if (null !== a) {
              const t = a.stateNode;
              switch (e) {
                case "context":
                  if (((r = r.slice(1)), a.tag === m))
                    0 === r.length
                      ? (t.context = o)
                      : utils_setInObject(t.context, r, o),
                      t.forceUpdate();
                  break;
                case "hooks":
                  "function" == typeof ie && ie(a, n, r, o);
                  break;
                case "props":
                  if (a.tag === m)
                    (a.pendingProps = copyWithSet(t.props, r, o)),
                      t.forceUpdate();
                  else "function" == typeof ue && ue(a, r, o);
                  break;
                case "state":
                  if (a.tag === m)
                    utils_setInObject(t.state, r, o), t.forceUpdate();
              }
            }
          },
          renamePath: function (e, t, n, r, o) {
            const a = findCurrentFiberUsingSlowPathById(t);
            if (null !== a) {
              const t = a.stateNode;
              switch (e) {
                case "context":
                  if (((r = r.slice(1)), (o = o.slice(1)), a.tag === m))
                    0 === r.length || renamePathInObject(t.context, r, o),
                      t.forceUpdate();
                  break;
                case "hooks":
                  "function" == typeof se && se(a, n, r, o);
                  break;
                case "props":
                  null === t
                    ? "function" == typeof fe && fe(a, r, o)
                    : ((a.pendingProps = copyWithRename(t.props, r, o)),
                      t.forceUpdate());
                  break;
                case "state":
                  renamePathInObject(t.state, r, o), t.forceUpdate();
              }
            }
          },
          renderer: a,
          setTraceUpdatesEnabled: function (e) {
            Re = e;
          },
          setTrackedPath,
          startProfiling,
          stopProfiling: function () {
            (ot = !1), (it = !1), null !== ve && ve(!1);
          },
          storeAsGlobal: function (e, t, n) {
            if (isMostRecentlyInspectedElement(e)) {
              const e = utils_getInObject(Qe, t),
                r = `$reactTemp${n}`;
              (window[r] = e), console.log(r), console.log(e);
            }
          },
          unpatchConsoleForStrictMode: unpatchForStrictMode,
          updateComponentFilters: function (e) {
            if (ot)
              throw Error("Cannot modify filter preferences while profiling");
            r.getFiberRoots(o).forEach((e) => {
              (Le = getOrGenerateFiberID(e.current)),
                pushOperation(6),
                flushPendingEvents(e),
                (Le = -1);
            }),
              applyComponentFilters(e),
              ht.clear(),
              r.getFiberRoots(o).forEach((e) => {
                (Le = getOrGenerateFiberID(e.current)),
                  setRootPseudoKey(Le, e.current),
                  mountFiberRecursively(e.current, null, !1, !1),
                  flushPendingEvents(e),
                  (Le = -1);
              }),
              we.clear(),
              Ee.forEach((e, t) => {
                const n = He.get(t);
                null != n && we.add(n);
              }),
              Fe.forEach((e, t) => {
                const n = He.get(t);
                null != n && we.add(n);
              }),
              recordPendingErrorsAndWarnings(),
              flushPendingEvents();
          },
        };
      }
      "true" !== sessionStorageGetItem(N) ||
        window.hasOwnProperty("__REACT_DEVTOOLS_ATTACH__") ||
        Object.defineProperty(window, "__REACT_DEVTOOLS_ATTACH__", {
          enumerable: !1,
          configurable: !0,
          get: () => attach,
        });
    })();
})();
//# sourceMappingURL=renderer.js.map
