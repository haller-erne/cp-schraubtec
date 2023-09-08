(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1], {
    /***/
    "Zw2R":
    /*!*********************************************************************************!*\
      !*** ./node_modules/@bci-web-core/web-components/dist/esm/ponyfill-599745e7.js ***!
      \*********************************************************************************/

    /*! exports provided: M, _, a, b, c, d, e, m */

    /***/
    function Zw2R(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "M", function () {
        return MDCFoundation;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "_", function () {
        return __extends;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "a", function () {
        return _assign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "b", function () {
        return MDCComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "c", function () {
        return closest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "d", function () {
        return __values;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "e", function () {
        return estimateScrollWidth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "m", function () {
        return matches;
      });
      /* Copyright (C) 2020. Robert Bosch GmbH Copyright (C) 2020. Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved. */

      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0
      
      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.
      
      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign.apply(this, arguments);
      };

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }

      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(__read(arguments[i]));
        }

        return ar;
      }
      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */


      var MDCFoundation =
      /** @class */
      function () {
        function MDCFoundation(adapter) {
          if (adapter === void 0) {
            adapter = {};
          }

          this.adapter = adapter;
        }

        Object.defineProperty(MDCFoundation, "cssClasses", {
          get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCFoundation, "strings", {
          get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCFoundation, "numbers", {
          get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCFoundation, "defaultAdapter", {
          get: function get() {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
          },
          enumerable: true,
          configurable: true
        });

        MDCFoundation.prototype.init = function () {// Subclasses should override this method to perform initialization routines (registering events, etc.)
        };

        MDCFoundation.prototype.destroy = function () {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
        };

        return MDCFoundation;
      }();
      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */


      var MDCComponent =
      /** @class */
      function () {
        function MDCComponent(root, foundation) {
          var args = [];

          for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
          }

          this.root = root;
          this.initialize.apply(this, __spread(args)); // Note that we initialize foundation here and not within the constructor's default param so that
          // this.root_ is defined and can be used within the foundation class.

          this.foundation = foundation === undefined ? this.getDefaultFoundation() : foundation;
          this.foundation.init();
          this.initialSyncWithDOM();
        }

        MDCComponent.attachTo = function (root) {
          // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
          // returns an instantiated component with its root set to that element. Also note that in the cases of
          // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
          // from getDefaultFoundation().
          return new MDCComponent(root, new MDCFoundation({}));
        };
        /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */


        MDCComponent.prototype.initialize = function () {
          var _args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            _args[_i] = arguments[_i];
          } // Subclasses can override this to do any additional setup work that would be considered part of a
          // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
          // initialized. Any additional arguments besides root and foundation will be passed in here.

        };

        MDCComponent.prototype.getDefaultFoundation = function () {
          // Subclasses must override this method to return a properly configured foundation class for the
          // component.
          throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
        };

        MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM
          // object. An example of this would be a form control wrapper that needs to synchronize its internal state
          // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
          // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
        };

        MDCComponent.prototype.destroy = function () {
          // Subclasses may implement this method to release any resources / deregister any listeners they have
          // attached. An example of this might be deregistering a resize event from the window object.
          this.foundation.destroy();
        };

        MDCComponent.prototype.listen = function (evtType, handler, options) {
          this.root.addEventListener(evtType, handler, options);
        };

        MDCComponent.prototype.unlisten = function (evtType, handler, options) {
          this.root.removeEventListener(evtType, handler, options);
        };
        /**
         * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.
         */


        MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {
          if (shouldBubble === void 0) {
            shouldBubble = false;
          }

          var evt;

          if (typeof CustomEvent === 'function') {
            evt = new CustomEvent(evtType, {
              bubbles: shouldBubble,
              detail: evtData
            });
          } else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
          }

          this.root.dispatchEvent(evt);
        };

        return MDCComponent;
      }();
      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
       * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
       */


      function closest(element, selector) {
        if (element.closest) {
          return element.closest(selector);
        }

        var el = element;

        while (el) {
          if (matches(el, selector)) {
            return el;
          }

          el = el.parentElement;
        }

        return null;
      }

      function matches(element, selector) {
        var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
        return nativeMatches.call(element, selector);
      }
      /**
       * Used to compute the estimated scroll width of elements. When an element is
       * hidden due to display: none; being applied to a parent element, the width is
       * returned as 0. However, the element will have a true width once no longer
       * inside a display: none context. This method computes an estimated width when
       * the element is hidden or returns the true width when the element is visble.
       * @param {Element} element the element whose width to estimate
       */


      function estimateScrollWidth(element) {
        // Check the offsetParent. If the element inherits display: none from any
        // parent, the offsetParent property will be null (see
        // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).
        // This check ensures we only clone the node when necessary.
        var htmlEl = element;

        if (htmlEl.offsetParent !== null) {
          return htmlEl.scrollWidth;
        }

        var clone = htmlEl.cloneNode(true);
        clone.style.setProperty('position', 'absolute');
        clone.style.setProperty('transform', 'translate(-9999px, -9999px)');
        document.documentElement.appendChild(clone);
        var scrollWidth = clone.scrollWidth;
        document.documentElement.removeChild(clone);
        return scrollWidth;
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=1-es5.js.map