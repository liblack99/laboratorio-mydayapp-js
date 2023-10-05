(() => {
  "use strict";
  var n = {
      945: (n, e, t) => {
        t.d(e, { Z: () => h });
        var o = t(81),
          i = t.n(o),
          r = t(645),
          a = t.n(r),
          l = t(667),
          d = t.n(l),
          s = new URL(t(808), t.b),
          c = new URL(t(36), t.b),
          p = a()(i()),
          g = d()(s),
          u = d()(c);
        p.push([
          n.id,
          'html,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  -webkit-appearance: none;\n  appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n  font-family: "Roboto", sans-serif;\n  background: #f5f5f5;\n  color: #111111;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 300;\n}\n\n.container {\n  min-width: 230px;\n  max-width: 550px;\n  margin: 0 auto;\n}\n\n.header {\n  background-image: linear-gradient(\n    224deg,\n    hsl(240deg 100% 50%) 2%,\n    hsl(249deg 100% 59%) 63%,\n    hsl(252deg 99% 64%) 78%,\n    hsl(253deg 98% 68%) 87%,\n    hsl(254deg 96% 73%) 92%,\n    hsl(253deg 93% 77%) 96%,\n    hsl(251deg 89% 81%) 98%,\n    hsl(246deg 81% 85%) 99%,\n    hsl(232deg 68% 88%) 100%,\n    hsl(200deg 53% 90%) 100%\n  );\n  padding-bottom: 4rem;\n}\n\n.hidden {\n  display: none;\n}\n\n.todoapp-wrapper {\n  position: relative;\n  top: -40px;\n  background: #fff;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.todoapp input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.todoapp input::input-placeholder {\n  font-style: italic;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.4);\n}\n\n.header h1 {\n  width: 100%;\n  font-size: 3rem;\n  font-weight: 200;\n  color: white;\n  padding-top: 2rem;\n  margin: 0;\n}\n\n.header h1 + p {\n  margin: 0;\n  color: white;\n  padding-bottom: 1.2rem;\n}\n\n.new-todo,\n.edit {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  font-size: 24px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.new-todo {\n  padding: 2rem;\n  height: 65px;\n  border: none;\n  background: white;\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n  border-radius: 8px;\n}\n\n.main {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6;\n}\n\n.toggle-all {\n  width: 1px;\n  height: 1px;\n  border: none;\n  /* Mobile Safari */\n  opacity: 0;\n  position: absolute;\n  right: 100%;\n  bottom: 100%;\n}\n\n.toggle-all + label {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 45px;\n  height: 65px;\n  font-size: 0;\n  position: absolute;\n  top: -65px;\n  left: -0;\n}\n\n.toggle-all + label:before {\n  content: "❯";\n  display: inline-block;\n  font-size: 22px;\n  color: #949494;\n  padding: 10px 27px 10px 27px;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n\n.toggle-all:checked + label:before {\n  color: #484848;\n}\n\n.todo-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n.todo-list li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n  padding: 0rem 1rem;\n}\n\n.todo-list li:last-child {\n  border-bottom: none;\n}\n\n.todo-list li.editing {\n  border-bottom: none;\n  padding: 0;\n}\n\n.todo-list li.editing .edit {\n  display: block;\n  width: calc(100% - 4rem);\n  padding: 12px 16px;\n  margin: 0 0 0 4rem;\n}\n\n.todo-list li.editing .view {\n  display: none;\n}\n\n.todo-list li .toggle {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn\'t support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none;\n  /* Mobile Safari */\n  -webkit-appearance: none;\n  appearance: none;\n}\n\n.todo-list li .toggle {\n  opacity: 0;\n}\n\n.todo-list li .toggle + label {\n  /*\n\t\tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n\t\tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n\t*/\n  background-image: url(' +
            g +
            ");\n  background-repeat: no-repeat;\n  background-position: center left;\n}\n\n.todo-list li .toggle:checked + label {\n  background-image: url(" +
            u +
            ');\n}\n\n.todo-list li label {\n  word-break: break-all;\n  padding: 15px 15px 15px 60px;\n  display: block;\n  line-height: 1.2;\n  transition: color 0.4s;\n  font-weight: 400;\n  color: #484848;\n}\n\n.todo-list li.completed label {\n  color: #949494;\n  text-decoration: line-through;\n}\n\n.todo-list li .destroy {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #949494;\n  transition: color 0.2s ease-out;\n}\n\n.todo-list li .destroy:hover,\n.todo-list li .destroy:focus {\n  color: #c18585;\n}\n\n.todo-list li .destroy:after {\n  content: "×";\n  display: block;\n  height: 100%;\n  line-height: 1.1;\n}\n\n.todo-list li:hover .destroy {\n  display: block;\n}\n\n.todo-list li .edit {\n  display: none;\n}\n\n.todo-list li.editing:last-child {\n  margin-bottom: -1px;\n}\n\n.footer {\n  padding: 1rem 1.5rem;\n  height: 20px;\n  text-align: center;\n  font-size: 15px;\n  border-top: 1px solid #e6e6e6;\n}\n\n.todo-count {\n  float: left;\n  text-align: left;\n}\n\n.todo-count strong {\n  font-weight: 300;\n}\n\n.filters {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n\n.filters li {\n  display: inline;\n}\n\n.filters li a {\n  color: inherit;\n  margin: 3px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n\n.filters li a:hover {\n  border-color: #6e49fe;\n}\n\n.filters li a.selected {\n  border-color: #4c33b1;\n}\n\n.clear-completed,\nhtml .clear-completed:active {\n  float: right;\n  position: relative;\n  line-height: 19px;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.clear-completed:hover {\n  text-decoration: underline;\n}\n\n.info {\n  margin: 65px auto 0;\n  color: #4d4d4d;\n  font-size: 11px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  text-align: center;\n}\n\n.info p {\n  line-height: 1;\n}\n\n.info a {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 400;\n}\n\n.info a:hover {\n  text-decoration: underline;\n}\n\n/*\n\tHack to remove background from Mobile Safari.\n\tCan\'t use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .toggle-all,\n  .todo-list li .toggle {\n    background: none;\n  }\n\n  .todo-list li .toggle {\n    height: 40px;\n  }\n}\n\n@media (max-width: 430px) {\n  .footer {\n    height: 50px;\n  }\n\n  .filters {\n    bottom: 10px;\n  }\n}\n\n:focus {\n  outline: 0;\n}\n',
          "",
        ]);
        const h = p;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  o = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  o &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  o && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, o, i, r) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (o)
                for (var l = 0; l < this.length; l++) {
                  var d = this[l][0];
                  null != d && (a[d] = !0);
                }
              for (var s = 0; s < n.length; s++) {
                var c = [].concat(n[s]);
                (o && a[c[0]]) ||
                  (void 0 !== r &&
                    (void 0 === c[5] ||
                      (c[1] = "@layer"
                        .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                        .concat(c[1], "}")),
                    (c[5] = r)),
                  t &&
                    (c[2]
                      ? ((c[1] = "@media "
                          .concat(c[2], " {")
                          .concat(c[1], "}")),
                        (c[2] = t))
                      : (c[2] = t)),
                  i &&
                    (c[4]
                      ? ((c[1] = "@supports ("
                          .concat(c[4], ") {")
                          .concat(c[1], "}")),
                        (c[4] = i))
                      : (c[4] = "".concat(i))),
                  e.push(c));
              }
            }),
            e
          );
        };
      },
      667: (n) => {
        n.exports = function (n, e) {
          return (
            e || (e = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                e.hash && (n += e.hash),
                /["'() \t\n]|(%20)/.test(n) || e.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : n)
              : n
          );
        };
      },
      81: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      379: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === n) {
              t = o;
              break;
            }
          return t;
        }
        function o(n, o) {
          for (var r = {}, a = [], l = 0; l < n.length; l++) {
            var d = n[l],
              s = o.base ? d[0] + o.base : d[0],
              c = r[s] || 0,
              p = "".concat(s, " ").concat(c);
            r[s] = c + 1;
            var g = t(p),
              u = {
                css: d[1],
                media: d[2],
                sourceMap: d[3],
                supports: d[4],
                layer: d[5],
              };
            if (-1 !== g) e[g].references++, e[g].updater(u);
            else {
              var h = i(u, o);
              (o.byIndex = l),
                e.splice(l, 0, { identifier: p, updater: h, references: 1 });
            }
            a.push(p);
          }
          return a;
        }
        function i(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, i) {
          var r = o((n = n || []), (i = i || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < r.length; a++) {
              var l = t(r[a]);
              e[l].references--;
            }
            for (var d = o(n, i), s = 0; s < r.length; s++) {
              var c = t(r[s]);
              0 === e[c].references && (e[c].updater(), e.splice(c, 1));
            }
            r = d;
          };
        };
      },
      569: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var o = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          o.appendChild(t);
        };
      },
      216: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      565: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      795: (n) => {
        n.exports = function (n) {
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var o = "";
                t.supports && (o += "@supports (".concat(t.supports, ") {")),
                  t.media && (o += "@media ".concat(t.media, " {"));
                var i = void 0 !== t.layer;
                i &&
                  (o += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (o += t.css),
                  i && (o += "}"),
                  t.media && (o += "}"),
                  t.supports && (o += "}");
                var r = t.sourceMap;
                r &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                      " */"
                    )),
                  e.styleTagTransform(o, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      589: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      36: (n) => {
        n.exports =
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%2359A193%22%20stroke-width%3D%223%22%2F%3E%3Cpath%20fill%3D%22%233EA390%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22%2F%3E%3C%2Fsvg%3E";
      },
      808: (n) => {
        n.exports =
          "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23949494%22%20stroke-width%3D%223%22/%3E%3C/svg%3E";
      },
    },
    e = {};
  function t(o) {
    var i = e[o];
    if (void 0 !== i) return i.exports;
    var r = (e[o] = { id: o, exports: {} });
    return n[o](r, r.exports, t), r.exports;
  }
  (t.m = n),
    (t.n = (n) => {
      var e = n && n.__esModule ? () => n.default : () => n;
      return t.d(e, { a: e }), e;
    }),
    (t.d = (n, e) => {
      for (var o in e)
        t.o(e, o) &&
          !t.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: e[o] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0);
  var o = {};
  (() => {
    t.d(o, {
      $6: () => I,
      mO: () => z,
      d8: () => H,
      Mv: () => S,
      DH: () => C,
      Ot: () => F,
      oG: () => M,
      ot: () => D,
      It: () => q,
    });
    var n = t(379),
      e = t.n(n),
      i = t(795),
      r = t.n(i),
      a = t(569),
      l = t.n(a),
      d = t(565),
      s = t.n(d),
      c = t(216),
      p = t.n(c),
      g = t(589),
      u = t.n(g),
      h = t(945),
      f = {};
    (f.styleTagTransform = u()),
      (f.setAttributes = s()),
      (f.insert = l().bind(null, "head")),
      (f.domAPI = r()),
      (f.insertStyleElement = p()),
      e()(h.Z, f),
      h.Z && h.Z.locals && h.Z.locals;
    var m = JSON.parse(localStorage.getItem("mydayapp-js")) || [],
      v = function () {
        var n = function () {
          localStorage.setItem("mydayapp-js", JSON.stringify(m));
        };
        return {
          addTask: function (e, t, o) {
            var i = { id: e, title: t, completed: o };
            return m.push(i), n(), m;
          },
          getTasks: function () {
            return m;
          },
          deleteTask: function (e) {
            var t = m.findIndex(function (n) {
              return n.id === e;
            });
            -1 !== t && (m.splice(t, 1), n());
          },
          completedTask: function (e, t) {
            var o = m.find(function (n) {
              return n.id === e;
            });
            void 0 !== o && ((o.completed = t), n());
          },
          editTask: function (e, t) {
            var o = m.find(function (n) {
              return n.id === e;
            });
            o && ((o.title = t), n());
          },
          getPendingTask: function () {
            return m.filter(function (n) {
              return !1 === n.completed;
            });
          },
          getCompletedTask: function () {
            return m.filter(function (n) {
              return !0 === n.completed;
            });
          },
        };
      };
    function b() {
      var n = v().getTasks();
      n && 0 !== n.length
        ? (S.classList.remove("hidden"), C.classList.remove("hidden"))
        : (S.classList.add("hidden"), C.classList.add("hidden"));
    }
    function x() {
      var n = v(),
        e = n.getPendingTask();
      n.getCompletedTask().length > 0
        ? z.classList.remove("hidden")
        : z.classList.add("hidden"),
        0 === e.length
          ? (q.innerHTML = "<strong>".concat(e.length, "</strong> items left"))
          : 1 === e.length
          ? (q.innerHTML = "<strong>".concat(e.length, "</strong> item left"))
          : (q.innerHTML = "<strong>".concat(e.length, "</strong> items left"));
    }
    function y(n) {
      var e = v(),
        t = n.target.closest("li"),
        o = t.dataset.id;
      n.target.checked
        ? (t.classList.add("completed"), e.completedTask(o, !0))
        : (t.classList.remove("completed"), e.completedTask(o, !1)),
        x();
    }
    function w(n) {
      var e = v(),
        t = n.target.closest("li"),
        o = t.dataset.id;
      t && (t.remove(), e.deleteTask(o)), x();
    }
    function k(n) {
      var e = n.target.closest("li"),
        t = e.querySelector("label"),
        o = e.querySelector(".edit"),
        i = e.dataset.id,
        r = v();
      e.classList.add("editing"),
        (t.style.display = "none"),
        (o.style.display = "block"),
        o.focus(),
        o.addEventListener("keyup", function (n) {
          if ("Enter" === n.key) {
            var a = o.value.trim();
            (t.textContent = a),
              e.classList.remove("editing"),
              (t.style.display = "block"),
              (o.style.display = "none"),
              r.editTask(i, a);
          } else "Escape" === n.key && (e.classList.remove("editing"), (t.style.display = "block"), (o.style.display = "none"));
        });
    }
    const L = function (n, e, t) {
      var o = document.createElement("li");
      t && o.classList.add("completed"), (o.dataset.id = n);
      var i = document.createElement("div");
      i.classList.add("view");
      var r = document.createElement("input");
      (r.type = "checkbox"),
        r.classList.add("toggle"),
        (r.checked = !!t),
        r.addEventListener("change", y);
      var a = document.createElement("label");
      (a.textContent = e),
        a.classList.add("task"),
        a.addEventListener("dblclick", k);
      var l = document.createElement("button");
      l.classList.add("destroy"), l.addEventListener("click", w);
      var d = document.createElement("input");
      return (
        d.setAttribute("class", "edit"),
        d.setAttribute("value", e),
        o.appendChild(i),
        o.appendChild(d),
        i.appendChild(r),
        i.appendChild(a),
        i.appendChild(l),
        o
      );
    };
    function E() {
      D.innerHTML = "";
      var n = v(),
        e = n.getTasks();
      b(),
        e.length > 0 &&
          e.forEach(function (n) {
            var e = L(n.id, n.title, n.completed);
            D.appendChild(e);
          }),
        location.hash.startsWith("#/pending")
          ? ((D.innerHTML = ""),
            I.remove("selected"),
            F.add("selected"),
            H.remove("selected"),
            n.getPendingTask().forEach(function (n) {
              var e = L(n.id, n.title, n.completed);
              D.appendChild(e);
            }))
          : location.hash.startsWith("#/completed")
          ? ((D.innerHTML = ""),
            I.remove("selected"),
            F.remove("selected"),
            H.add("selected"),
            n.getCompletedTask().forEach(function (n) {
              var e = L(n.id, n.title, n.completed);
              D.appendChild(e);
            }))
          : ((D.innerHTML = ""),
            I.add("selected"),
            F.remove("selected"),
            H.remove("selected"),
            e.forEach(function (n) {
              var e = L(n.id, n.title, n.completed);
              D.appendChild(e);
            }));
    }
    var T = v(),
      C = document.querySelector(".main"),
      S = document.querySelector(".footer"),
      D = document.querySelector(".todo-list"),
      M = document.querySelector(".new-todo"),
      z = document.querySelector(".clear-completed"),
      q = document.querySelector(".todo-count"),
      A = document.querySelector(".filters"),
      I = A.children[0].lastElementChild.classList,
      F = A.children[1].lastElementChild.classList,
      H = A.children[2].lastElementChild.classList;
    M.addEventListener("keypress", function (n) {
      "Enter" === n.key &&
        (function () {
          var n = v(),
            e = M.value.trim(),
            t = Date.now().toString();
          "" !== e && (n.addTask(t, e, !1), E(), x(), (M.value = ""));
        })();
    }),
      z.addEventListener("click", function () {
        D.querySelectorAll("li").forEach(function (n) {
          var e = n.querySelector(".toggle"),
            t = n.dataset.id;
          e.checked && (n.remove(), T.deleteTask(t));
        }),
          x();
      }),
      window.addEventListener("hashchange", E, !1),
      window.addEventListener("load", function n() {
        var e = v().getTasks();
        e && 0 !== e.length
          ? (C.classList.remove("hidden"),
            S.classList.remove("hidden"),
            b(),
            E())
          : (C.classList.add("hidden"), S.classList.add("hidden")),
          x(),
          window.removeEventListener("load", n);
      });
  })();
})();
