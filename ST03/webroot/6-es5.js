(function () {
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6], {
    /***/
    "djQQ":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/@bci-web-core/web-components/dist/esm/bci-checkbox-collection.entry.js ***!
      \*********************************************************************************************/

    /*! exports provided: bci_checkbox_collection */

    /***/
    function djQQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bci_checkbox_collection", function () {
        return CheckboxCollection;
      });
      /* harmony import */


      var _index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-267cdec7.js */
      "mTGF");
      /* harmony import */


      var _ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ponyfill-599745e7.js */
      "Zw2R");
      /* harmony import */


      var _component_abd1dc7e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./component-abd1dc7e.js */
      "83JO");
      /* harmony import */


      var _utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./utils-bdfea2c3.js */
      "np3L");
      /* harmony import */


      var _checkbox_collection_interface_94343af2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./checkbox-collection.interface-94343af2.js */
      "fmcd");
      /* Copyright (C) 2020. Robert Bosch GmbH Copyright (C) 2020. Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved. */

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


      var jsEventTypeMap = {
        animationend: {
          cssProperty: 'animation',
          prefixed: 'webkitAnimationEnd',
          standard: 'animationend'
        },
        animationiteration: {
          cssProperty: 'animation',
          prefixed: 'webkitAnimationIteration',
          standard: 'animationiteration'
        },
        animationstart: {
          cssProperty: 'animation',
          prefixed: 'webkitAnimationStart',
          standard: 'animationstart'
        },
        transitionend: {
          cssProperty: 'transition',
          prefixed: 'webkitTransitionEnd',
          standard: 'transitionend'
        }
      };

      function isWindow(windowObj) {
        return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
      }

      function getCorrectEventName(windowObj, eventType) {
        if (isWindow(windowObj) && eventType in jsEventTypeMap) {
          var el = windowObj.document.createElement('div');
          var _a = jsEventTypeMap[eventType],
              standard = _a.standard,
              prefixed = _a.prefixed,
              cssProperty = _a.cssProperty;
          var isStandard = (cssProperty in el.style);
          return isStandard ? standard : prefixed;
        }

        return eventType;
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


      var cssClasses = {
        ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
        ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
        ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
        ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked',
        ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
        ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
        BACKGROUND: 'mdc-checkbox__background',
        CHECKED: 'mdc-checkbox--checked',
        CHECKMARK: 'mdc-checkbox__checkmark',
        CHECKMARK_PATH: 'mdc-checkbox__checkmark-path',
        DISABLED: 'mdc-checkbox--disabled',
        INDETERMINATE: 'mdc-checkbox--indeterminate',
        MIXEDMARK: 'mdc-checkbox__mixedmark',
        NATIVE_CONTROL: 'mdc-checkbox__native-control',
        ROOT: 'mdc-checkbox',
        SELECTED: 'mdc-checkbox--selected',
        UPGRADED: 'mdc-checkbox--upgraded'
      };
      var strings = {
        ARIA_CHECKED_ATTR: 'aria-checked',
        ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed',
        DATA_INDETERMINATE_ATTR: 'data-indeterminate',
        NATIVE_CONTROL_SELECTOR: '.mdc-checkbox__native-control',
        TRANSITION_STATE_CHECKED: 'checked',
        TRANSITION_STATE_INDETERMINATE: 'indeterminate',
        TRANSITION_STATE_INIT: 'init',
        TRANSITION_STATE_UNCHECKED: 'unchecked'
      };
      var numbers = {
        ANIM_END_LATCH_MS: 250
      };
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

      var MDCCheckboxFoundation =
      /** @class */
      function (_super) {
        Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["_"])(MDCCheckboxFoundation, _super);

        function MDCCheckboxFoundation(adapter) {
          var _this = _super.call(this, Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, MDCCheckboxFoundation.defaultAdapter), adapter)) || this;

          _this.currentCheckState_ = strings.TRANSITION_STATE_INIT;
          _this.currentAnimationClass_ = '';
          _this.animEndLatchTimer_ = 0;
          _this.enableAnimationEndHandler_ = false;
          return _this;
        }

        Object.defineProperty(MDCCheckboxFoundation, "cssClasses", {
          get: function get() {
            return cssClasses;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCCheckboxFoundation, "strings", {
          get: function get() {
            return strings;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCCheckboxFoundation, "numbers", {
          get: function get() {
            return numbers;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCCheckboxFoundation, "defaultAdapter", {
          get: function get() {
            return {
              addClass: function addClass() {
                return undefined;
              },
              forceLayout: function forceLayout() {
                return undefined;
              },
              hasNativeControl: function hasNativeControl() {
                return false;
              },
              isAttachedToDOM: function isAttachedToDOM() {
                return false;
              },
              isChecked: function isChecked() {
                return false;
              },
              isIndeterminate: function isIndeterminate() {
                return false;
              },
              removeClass: function removeClass() {
                return undefined;
              },
              removeNativeControlAttr: function removeNativeControlAttr() {
                return undefined;
              },
              setNativeControlAttr: function setNativeControlAttr() {
                return undefined;
              },
              setNativeControlDisabled: function setNativeControlDisabled() {
                return undefined;
              }
            };
          },
          enumerable: true,
          configurable: true
        });

        MDCCheckboxFoundation.prototype.init = function () {
          this.currentCheckState_ = this.determineCheckState_();
          this.updateAriaChecked_();
          this.adapter.addClass(cssClasses.UPGRADED);
        };

        MDCCheckboxFoundation.prototype.destroy = function () {
          clearTimeout(this.animEndLatchTimer_);
        };

        MDCCheckboxFoundation.prototype.setDisabled = function (disabled) {
          this.adapter.setNativeControlDisabled(disabled);

          if (disabled) {
            this.adapter.addClass(cssClasses.DISABLED);
          } else {
            this.adapter.removeClass(cssClasses.DISABLED);
          }
        };
        /**
         * Handles the animationend event for the checkbox
         */


        MDCCheckboxFoundation.prototype.handleAnimationEnd = function () {
          var _this = this;

          if (!this.enableAnimationEndHandler_) {
            return;
          }

          clearTimeout(this.animEndLatchTimer_);
          this.animEndLatchTimer_ = setTimeout(function () {
            _this.adapter.removeClass(_this.currentAnimationClass_);

            _this.enableAnimationEndHandler_ = false;
          }, numbers.ANIM_END_LATCH_MS);
        };
        /**
         * Handles the change event for the checkbox
         */


        MDCCheckboxFoundation.prototype.handleChange = function () {
          this.transitionCheckState_();
        };

        MDCCheckboxFoundation.prototype.transitionCheckState_ = function () {
          if (!this.adapter.hasNativeControl()) {
            return;
          }

          var oldState = this.currentCheckState_;
          var newState = this.determineCheckState_();

          if (oldState === newState) {
            return;
          }

          this.updateAriaChecked_();
          var TRANSITION_STATE_UNCHECKED = strings.TRANSITION_STATE_UNCHECKED;
          var SELECTED = cssClasses.SELECTED;

          if (newState === TRANSITION_STATE_UNCHECKED) {
            this.adapter.removeClass(SELECTED);
          } else {
            this.adapter.addClass(SELECTED);
          } // Check to ensure that there isn't a previously existing animation class, in case for example
          // the user interacted with the checkbox before the animation was finished.


          if (this.currentAnimationClass_.length > 0) {
            clearTimeout(this.animEndLatchTimer_);
            this.adapter.forceLayout();
            this.adapter.removeClass(this.currentAnimationClass_);
          }

          this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
          this.currentCheckState_ = newState; // Check for parentNode so that animations are only run when the element is attached
          // to the DOM.

          if (this.adapter.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
            this.adapter.addClass(this.currentAnimationClass_);
            this.enableAnimationEndHandler_ = true;
          }
        };

        MDCCheckboxFoundation.prototype.determineCheckState_ = function () {
          var TRANSITION_STATE_INDETERMINATE = strings.TRANSITION_STATE_INDETERMINATE,
              TRANSITION_STATE_CHECKED = strings.TRANSITION_STATE_CHECKED,
              TRANSITION_STATE_UNCHECKED = strings.TRANSITION_STATE_UNCHECKED;

          if (this.adapter.isIndeterminate()) {
            return TRANSITION_STATE_INDETERMINATE;
          }

          return this.adapter.isChecked() ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
        };

        MDCCheckboxFoundation.prototype.getTransitionAnimationClass_ = function (oldState, newState) {
          var TRANSITION_STATE_INIT = strings.TRANSITION_STATE_INIT,
              TRANSITION_STATE_CHECKED = strings.TRANSITION_STATE_CHECKED,
              TRANSITION_STATE_UNCHECKED = strings.TRANSITION_STATE_UNCHECKED;
          var _a = MDCCheckboxFoundation.cssClasses,
              ANIM_UNCHECKED_CHECKED = _a.ANIM_UNCHECKED_CHECKED,
              ANIM_UNCHECKED_INDETERMINATE = _a.ANIM_UNCHECKED_INDETERMINATE,
              ANIM_CHECKED_UNCHECKED = _a.ANIM_CHECKED_UNCHECKED,
              ANIM_CHECKED_INDETERMINATE = _a.ANIM_CHECKED_INDETERMINATE,
              ANIM_INDETERMINATE_CHECKED = _a.ANIM_INDETERMINATE_CHECKED,
              ANIM_INDETERMINATE_UNCHECKED = _a.ANIM_INDETERMINATE_UNCHECKED;

          switch (oldState) {
            case TRANSITION_STATE_INIT:
              if (newState === TRANSITION_STATE_UNCHECKED) {
                return '';
              }

              return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;

            case TRANSITION_STATE_UNCHECKED:
              return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;

            case TRANSITION_STATE_CHECKED:
              return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;

            default:
              // TRANSITION_STATE_INDETERMINATE
              return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
          }
        };

        MDCCheckboxFoundation.prototype.updateAriaChecked_ = function () {
          // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
          if (this.adapter.isIndeterminate()) {
            this.adapter.setNativeControlAttr(strings.ARIA_CHECKED_ATTR, strings.ARIA_CHECKED_INDETERMINATE_VALUE);
          } else {
            // The on/off state does not need to keep track of aria-checked, since
            // the screenreader uses the checked property on the checkbox element.
            this.adapter.removeNativeControlAttr(strings.ARIA_CHECKED_ATTR);
          }
        };

        return MDCCheckboxFoundation;
      }(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["M"]);
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


      var CB_PROTO_PROPS = ['checked', 'indeterminate'];

      var MDCCheckbox =
      /** @class */
      function (_super) {
        Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["_"])(MDCCheckbox, _super);

        function MDCCheckbox() {
          var _this = _super !== null && _super.apply(this, arguments) || this;

          _this.ripple_ = _this.createRipple_();
          return _this;
        }

        MDCCheckbox.attachTo = function (root) {
          return new MDCCheckbox(root);
        };

        Object.defineProperty(MDCCheckbox.prototype, "ripple", {
          get: function get() {
            return this.ripple_;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCCheckbox.prototype, "checked", {
          get: function get() {
            return this.nativeControl_.checked;
          },
          set: function set(checked) {
            this.nativeControl_.checked = checked;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCCheckbox.prototype, "indeterminate", {
          get: function get() {
            return this.nativeControl_.indeterminate;
          },
          set: function set(indeterminate) {
            this.nativeControl_.indeterminate = indeterminate;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCCheckbox.prototype, "disabled", {
          get: function get() {
            return this.nativeControl_.disabled;
          },
          set: function set(disabled) {
            this.foundation.setDisabled(disabled);
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCCheckbox.prototype, "value", {
          get: function get() {
            return this.nativeControl_.value;
          },
          set: function set(value) {
            this.nativeControl_.value = value;
          },
          enumerable: true,
          configurable: true
        });

        MDCCheckbox.prototype.initialize = function () {
          var DATA_INDETERMINATE_ATTR = strings.DATA_INDETERMINATE_ATTR;
          this.nativeControl_.indeterminate = this.nativeControl_.getAttribute(DATA_INDETERMINATE_ATTR) === 'true';
          this.nativeControl_.removeAttribute(DATA_INDETERMINATE_ATTR);
        };

        MDCCheckbox.prototype.initialSyncWithDOM = function () {
          var _this = this;

          this.handleChange_ = function () {
            return _this.foundation.handleChange();
          };

          this.handleAnimationEnd_ = function () {
            return _this.foundation.handleAnimationEnd();
          };

          this.nativeControl_.addEventListener('change', this.handleChange_);
          this.listen(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
          this.installPropertyChangeHooks_();
        };

        MDCCheckbox.prototype.destroy = function () {
          this.ripple_.destroy();
          this.nativeControl_.removeEventListener('change', this.handleChange_);
          this.unlisten(getCorrectEventName(window, 'animationend'), this.handleAnimationEnd_);
          this.uninstallPropertyChangeHooks_();

          _super.prototype.destroy.call(this);
        };

        MDCCheckbox.prototype.getDefaultFoundation = function () {
          var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
          // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


          var adapter = {
            addClass: function addClass(className) {
              return _this.root.classList.add(className);
            },
            forceLayout: function forceLayout() {
              return _this.root.offsetWidth;
            },
            hasNativeControl: function hasNativeControl() {
              return !!_this.nativeControl_;
            },
            isAttachedToDOM: function isAttachedToDOM() {
              return Boolean(_this.root.parentNode);
            },
            isChecked: function isChecked() {
              return _this.checked;
            },
            isIndeterminate: function isIndeterminate() {
              return _this.indeterminate;
            },
            removeClass: function removeClass(className) {
              _this.root.classList.remove(className);
            },
            removeNativeControlAttr: function removeNativeControlAttr(attr) {
              _this.nativeControl_.removeAttribute(attr);
            },
            setNativeControlAttr: function setNativeControlAttr(attr, value) {
              _this.nativeControl_.setAttribute(attr, value);
            },
            setNativeControlDisabled: function setNativeControlDisabled(disabled) {
              _this.nativeControl_.disabled = disabled;
            }
          };
          return new MDCCheckboxFoundation(adapter);
        };

        MDCCheckbox.prototype.createRipple_ = function () {
          var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
          // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.


          var adapter = Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, _component_abd1dc7e_js__WEBPACK_IMPORTED_MODULE_2__["M"].createAdapter(this)), {
            deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
              return _this.nativeControl_.removeEventListener(evtType, handler, Object(_component_abd1dc7e_js__WEBPACK_IMPORTED_MODULE_2__["b"])());
            },
            isSurfaceActive: function isSurfaceActive() {
              return Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["m"])(_this.nativeControl_, ':active');
            },
            isUnbounded: function isUnbounded() {
              return true;
            },
            registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
              return _this.nativeControl_.addEventListener(evtType, handler, Object(_component_abd1dc7e_js__WEBPACK_IMPORTED_MODULE_2__["b"])());
            }
          });
          return new _component_abd1dc7e_js__WEBPACK_IMPORTED_MODULE_2__["M"](this.root, new _component_abd1dc7e_js__WEBPACK_IMPORTED_MODULE_2__["a"](adapter));
        };

        MDCCheckbox.prototype.installPropertyChangeHooks_ = function () {
          var _this = this;

          var nativeCb = this.nativeControl_;
          var cbProto = Object.getPrototypeOf(nativeCb);
          CB_PROTO_PROPS.forEach(function (controlState) {
            var desc = Object.getOwnPropertyDescriptor(cbProto, controlState); // We have to check for this descriptor, since some browsers (Safari) don't support its return.
            // See: https://bugs.webkit.org/show_bug.cgi?id=49739

            if (!validDescriptor(desc)) {
              return;
            } // Type cast is needed for compatibility with Closure Compiler.


            var nativeGetter = desc.get;
            var nativeCbDesc = {
              configurable: desc.configurable,
              enumerable: desc.enumerable,
              get: nativeGetter,
              set: function set(state) {
                desc.set.call(nativeCb, state);

                _this.foundation.handleChange();
              }
            };
            Object.defineProperty(nativeCb, controlState, nativeCbDesc);
          });
        };

        MDCCheckbox.prototype.uninstallPropertyChangeHooks_ = function () {
          var nativeCb = this.nativeControl_;
          var cbProto = Object.getPrototypeOf(nativeCb);
          CB_PROTO_PROPS.forEach(function (controlState) {
            var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);

            if (!validDescriptor(desc)) {
              return;
            }

            Object.defineProperty(nativeCb, controlState, desc);
          });
        };

        Object.defineProperty(MDCCheckbox.prototype, "nativeControl_", {
          get: function get() {
            var NATIVE_CONTROL_SELECTOR = strings.NATIVE_CONTROL_SELECTOR;
            var el = this.root.querySelector(NATIVE_CONTROL_SELECTOR);

            if (!el) {
              throw new Error("Checkbox component requires a " + NATIVE_CONTROL_SELECTOR + " element");
            }

            return el;
          },
          enumerable: true,
          configurable: true
        });
        return MDCCheckbox;
      }(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["b"]);

      function validDescriptor(inputPropDesc) {
        return !!inputPropDesc && typeof inputPropDesc.set === 'function';
      }

      var checkboxCollectionCss = "/*!\n *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n*  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n*/.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;-ms-flex-order:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;-ms-flex-order:-1;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{-ms-flex-pack:justify;justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mdc-touch-target-wrapper{display:inline}@-webkit-keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{-webkit-animation-timing-function:cubic-bezier(0, 0, 0.2, 1);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{-webkit-animation-timing-function:cubic-bezier(0, 0, 0.2, 1);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@-webkit-keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{-webkit-transform:scaleX(0);transform:scaleX(0)}68.2%{-webkit-animation-timing-function:cubic-bezier(0, 0, 0, 1);animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{-webkit-transform:scaleX(0);transform:scaleX(0)}68.2%{-webkit-animation-timing-function:cubic-bezier(0, 0, 0, 1);animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{-webkit-transform:scaleX(1);transform:scaleX(1)}}@-webkit-keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 1, 1);animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 1, 1);animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@-webkit-keyframes mdc-checkbox-checked-indeterminate-checkmark{from{-webkit-animation-timing-function:cubic-bezier(0, 0, 0.2, 1);animation-timing-function:cubic-bezier(0, 0, 0.2, 1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{-webkit-animation-timing-function:cubic-bezier(0, 0, 0.2, 1);animation-timing-function:cubic-bezier(0, 0, 0.2, 1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}}@-webkit-keyframes mdc-checkbox-indeterminate-checked-checkmark{from{-webkit-animation-timing-function:cubic-bezier(0.14, 0, 0, 1);animation-timing-function:cubic-bezier(0.14, 0, 0, 1);-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform:rotate(360deg);transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{-webkit-animation-timing-function:cubic-bezier(0.14, 0, 0, 1);animation-timing-function:cubic-bezier(0.14, 0, 0, 1);-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0}to{-webkit-transform:rotate(360deg);transform:rotate(360deg);opacity:1}}@-webkit-keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{-webkit-animation-timing-function:mdc-animation-deceleration-curve-timing-function;animation-timing-function:mdc-animation-deceleration-curve-timing-function;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{-webkit-animation-timing-function:mdc-animation-deceleration-curve-timing-function;animation-timing-function:mdc-animation-deceleration-curve-timing-function;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:0}to{-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}}@-webkit-keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{-webkit-animation-timing-function:cubic-bezier(0.14, 0, 0, 1);animation-timing-function:cubic-bezier(0.14, 0, 0, 1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(315deg);transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{-webkit-animation-timing-function:cubic-bezier(0.14, 0, 0, 1);animation-timing-function:cubic-bezier(0.14, 0, 0, 1);-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}to{-webkit-transform:rotate(315deg);transform:rotate(315deg);opacity:0}}@-webkit-keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}32.8%,100%{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}32.8%,100%{-webkit-transform:scaleX(0);transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;-ms-flex:0 0 18px;flex:0 0 18px;-webkit-box-sizing:content-box;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:11px}.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before{opacity:0.04}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background{top:11px;left:11px}.mdc-checkbox .mdc-checkbox__background::before{top:-13px;left:-13px;width:40px;height:40px}.mdc-checkbox .mdc-checkbox__native-control{top:0px;right:0px;left:0px;width:40px;height:40px}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);background-color:transparent}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}@-webkit-keyframes mdc-checkbox-fade-in-background-8A000000secondary00000000secondary{0%{border-color:rgba(0, 0, 0, 0.54);background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@keyframes mdc-checkbox-fade-in-background-8A000000secondary00000000secondary{0%{border-color:rgba(0, 0, 0, 0.54);background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@-webkit-keyframes mdc-checkbox-fade-out-background-8A000000secondary00000000secondary{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:rgba(0, 0, 0, 0.54);background-color:transparent}}@keyframes mdc-checkbox-fade-out-background-8A000000secondary00000000secondary{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:rgba(0, 0, 0, 0.54);background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{-webkit-animation-name:mdc-checkbox-fade-in-background-8A000000secondary00000000secondary;animation-name:mdc-checkbox-fade-in-background-8A000000secondary00000000secondary}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{-webkit-animation-name:mdc-checkbox-fade-out-background-8A000000secondary00000000secondary;animation-name:mdc-checkbox-fade-out-background-8A000000secondary00000000secondary}.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38)}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff}@media screen and (-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:-ms-inline-flexbox;display:inline-flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color, border-color;-webkit-transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__background .mdc-checkbox__background::before{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;-webkit-transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{-webkit-transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;-webkit-transform:scaleX(0) rotate(0deg);transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;-webkit-transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{-webkit-transition:none !important;transition:none !important}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{-webkit-animation-duration:180ms;animation-duration:180ms;-webkit-animation-timing-function:linear;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{-webkit-animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{-webkit-animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{-webkit-animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{-webkit-animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{-webkit-animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{-webkit-animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{-webkit-animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{-webkit-animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;-webkit-transition:none;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{-webkit-transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;-webkit-transform:scale(0, 0);transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";will-change:opacity, transform;-webkit-transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{-webkit-transform:scale(1);transform:scale(1);opacity:0.12;-webkit-transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-checkbox--touch .mdc-checkbox__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{-webkit-transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{-webkit-transform:scaleX(1) rotate(-45deg);transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{-webkit-transform:rotate(45deg);transform:rotate(45deg);opacity:0;-webkit-transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1), -webkit-transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{-webkit-transform:scaleX(1) rotate(0deg);transform:scaleX(1) rotate(0deg);opacity:1}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-checkbox{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-checkbox .mdc-checkbox__ripple::before{-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:1}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation .mdc-checkbox__ripple::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation .mdc-checkbox__ripple::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before{opacity:0.04}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded .mdc-checkbox__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-ripple-upgraded--background-focused .mdc-checkbox__background::before{content:none}/*!\n *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2020 Robert Bosch GmbH Copyright (C) 2020 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */@font-face{font-family:\"Bosch-Sans\";font-weight:400;src:url(\"..//fonts/BoschSans-Regular.eot\");src:url(\"..//fonts/BoschSans-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Regular.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Regular.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Regular.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Regular.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:300;src:url(\"..//fonts/BoschSans-Light.eot\");src:url(\"..//fonts/BoschSans-Light.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Light.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Light.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Light.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Light.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:500;src:url(\"..//fonts/BoschSans-Medium.eot\");src:url(\"..//fonts/BoschSans-Medium.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Medium.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Medium.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Medium.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Medium.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:700;src:url(\"..//fonts/BoschSans-Bold.eot\");src:url(\"..//fonts/BoschSans-Bold.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Bold.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Bold.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Bold.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Bold.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:900;src:url(\"..//fonts/BoschSans-Black.eot\");src:url(\"..//fonts/BoschSans-Black.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Black.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Black.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Black.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Black.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Ic\";font-style:normal;font-stretch:normal;font-weight:normal;src:url(\"..//fonts/Bosch-Icon.eot?mh5qa9\");src:url(\"..//fonts/Bosch-Icon.eot?mh5qa9#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/Bosch-Icon.ttf?mh5qa9\") format(\"truetype\"), url(\"..//fonts/Bosch-Icon.woff?mh5qa9\") format(\"woff\"), url(\"..//fonts/Bosch-Icon.svg?mh5qa9#Bosch-Icon\") format(\"svg\")}/*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2020 Robert Bosch GmbH Copyright (C) 2020 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */body{margin:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}main,*{font-family:\"Bosch-Sans\"}::-moz-selection{background-color:#008ECF}::selection,::-moz-selection{background-color:#008ECF}a::-moz-selection{color:#FFFFFF}.lead{margin-bottom:22px;font-size:18px;font-weight:300;line-height:1.4}@media (min-width: 768px){.lead{font-size:24px}}.checkbox-item{width:100%;margin:20px 16px}.checkbox-item>label{font-weight:400;padding-left:8px;font-size:16px;width:100%}.checkbox-item>label:hover{cursor:pointer}.mdc-checkbox{padding:-9px;padding:0;height:initial;width:initial;-ms-flex-preferred-size:24px;flex-basis:24px}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:#EFEFF0;background-color:#EFEFF0}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#005691;background-color:#005691}@-webkit-keyframes mdc-checkbox-fade-in-background-FFEFEFF0FF005691FFEFEFF0FF005691{0%{border-color:#EFEFF0;background-color:#EFEFF0}50%{border-color:#005691;background-color:#005691}}@keyframes mdc-checkbox-fade-in-background-FFEFEFF0FF005691FFEFEFF0FF005691{0%{border-color:#EFEFF0;background-color:#EFEFF0}50%{border-color:#005691;background-color:#005691}}@-webkit-keyframes mdc-checkbox-fade-out-background-FFEFEFF0FF005691FFEFEFF0FF005691{0%,80%{border-color:#005691;background-color:#005691}100%{border-color:#EFEFF0;background-color:#EFEFF0}}@keyframes mdc-checkbox-fade-out-background-FFEFEFF0FF005691FFEFEFF0FF005691{0%,80%{border-color:#005691;background-color:#005691}100%{border-color:#EFEFF0;background-color:#EFEFF0}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{-webkit-animation-name:mdc-checkbox-fade-in-background-FFEFEFF0FF005691FFEFEFF0FF005691;animation-name:mdc-checkbox-fade-in-background-FFEFEFF0FF005691FFEFEFF0FF005691}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{-webkit-animation-name:mdc-checkbox-fade-out-background-FFEFEFF0FF005691FFEFEFF0FF005691;animation-name:mdc-checkbox-fade-out-background-FFEFEFF0FF005691FFEFEFF0FF005691}.mdc-checkbox .mdc-checkbox__background{top:-9px;left:-9px}.mdc-checkbox .mdc-checkbox__background::before{top:7px;left:7px;width:0;height:0}.mdc-checkbox .mdc-checkbox__native-control{top:0;right:0;left:0;width:0;height:0}.mdc-checkbox .mdc-checkbox__native-control{position:relative;height:24px;width:24px}.mdc-checkbox .mdc-checkbox__background{border-radius:0;top:0;left:0;width:24px;height:24px}";

      var CheckboxCollection = /*#__PURE__*/function () {
        function CheckboxCollection(hostRef) {
          _classCallCheck(this, CheckboxCollection);

          Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
          this.multiItemSelected = Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "multiItemSelected", 7);
          this.singleItemSelected = Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "singleItemSelected", 7);
          this.list = [];
          this.multiSelectionList = [];
        }

        _createClass(CheckboxCollection, [{
          key: "componentWillLoad",
          value: function () {
            var _componentWillLoad = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_3__["s"])();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            function componentWillLoad() {
              return _componentWillLoad.apply(this, arguments);
            }

            return componentWillLoad;
          }()
        }, {
          key: "reset",
          value: function () {
            var _reset = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.el.shadowRoot.querySelectorAll("input[type='checkbox']").forEach(function (item) {
                        return item['checked'] = false;
                      });
                      this.multiSelectionList = [];

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function reset() {
              return _reset.apply(this, arguments);
            }

            return reset;
          }()
        }, {
          key: "setDefaultSelection",
          value: function () {
            var _setDefaultSelection = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var index, checkbox;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (this.type === _checkbox_collection_interface_94343af2_js__WEBPACK_IMPORTED_MODULE_4__["C"].Multi) {
                        this.multiSelectionList = this.list.reduce(function (accumulator, currentItem, index) {
                          if (currentItem.label) {
                            accumulator.push(currentItem.label);
                            var checkbox = new MDCCheckbox(_this2.el.shadowRoot.getElementById('multi-checkbox-' + index).parentElement);
                            checkbox.checked = currentItem.selected;
                          }

                          return accumulator;
                        }, []);
                        this.multiItemSelected.emit(this.multiSelectionList);
                      } else {
                        index = this.list.findIndex(function (item) {
                          return item.selected;
                        });
                        checkbox = new MDCCheckbox(this.el.shadowRoot.getElementById('single-checkbox-' + index).parentElement);
                        checkbox.checked = true;
                        this.singleItemSelected.emit(this.list[index].label);
                      }

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function setDefaultSelection() {
              return _setDefaultSelection.apply(this, arguments);
            }

            return setDefaultSelection;
          }()
        }, {
          key: "multiItemSelectedHandler",
          value: function multiItemSelectedHandler(event, filter) {
            if (event.target['checked']) {
              this.multiSelectionList.push(filter.label);
            } else {
              var i = this.multiSelectionList.findIndex(function (j) {
                return j === filter.label;
              });

              if (i > -1) {
                this.multiSelectionList.splice(i, 1);
              }
            }

            this.multiItemSelected.emit(this.multiSelectionList);
          }
        }, {
          key: "singleItemSelectHandler",
          value: function singleItemSelectHandler(event, filter) {
            if (event.target['checked']) {
              this.singleItemSelected.emit(filter.label);
            } // Unchecking other checkboxes in the collection


            this.el.shadowRoot.querySelectorAll('.single').forEach(function (item) {
              return item['checked'] = false;
            });
            event.target['checked'] = true;
          }
        }, {
          key: "selectHandler",
          value: function selectHandler(event, item, multipleSelection) {
            if (multipleSelection) {
              return this.multiItemSelectedHandler(event, item);
            }

            this.singleItemSelectHandler(event, item);
          }
        }, {
          key: "renderCheckbox",
          value: function renderCheckbox(item, index, multipleSelection) {
            var _this3 = this;

            return Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "mdc-form-field checkbox-item",
              part: multipleSelection ? '' : 'single-checkbox-item'
            }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "mdc-checkbox"
            }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
              type: "checkbox",
              "class": 'mdc-checkbox__native-control ' + (multipleSelection ? 'multi' : 'single'),
              id: (multipleSelection ? 'multi' : 'single') + '-checkbox-' + index,
              onClick: function onClick(event) {
                return _this3.selectHandler(event, item, multipleSelection);
              }
            }), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "mdc-checkbox__background"
            }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", {
              "class": "mdc-checkbox__checkmark",
              viewBox: "0 0 24 24"
            }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("path", {
              "class": "mdc-checkbox__checkmark-path",
              fill: "none",
              d: "M1.73,12.91 8.1,19.28 22.79,4.59"
            })), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "mdc-checkbox__mixedmark"
            })), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "mdc-checkbox__ripple"
            })), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
              htmlFor: (multipleSelection ? 'multi' : 'single') + '-checkbox-' + index
            }, Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_3__["t"])(item.label)));
          }
        }, {
          key: "render",
          value: function render() {
            var _this4 = this;

            var multipleSelection = this.type === _checkbox_collection_interface_94343af2_js__WEBPACK_IMPORTED_MODULE_4__["C"].Multi;
            return Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, this.list.map(function (item, index) {
              return _this4.renderCheckbox(item, index, multipleSelection);
            }));
          }
        }, {
          key: "el",
          get: function get() {
            return Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
          }
        }]);

        return CheckboxCollection;
      }();

      CheckboxCollection.style = checkboxCollectionCss;
      /***/
    }
  }]);
})();
//# sourceMappingURL=6-es5.js.map