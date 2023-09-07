(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "R2bS":
/*!***********************************************************************************!*\
  !*** ./node_modules/@bci-web-core/web-components/dist/esm/bci-paginator.entry.js ***!
  \***********************************************************************************/
/*! exports provided: bci_paginator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bci_paginator", function() { return Paginator; });
/* harmony import */ var _index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-267cdec7.js */ "mTGF");
/* harmony import */ var _ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ponyfill-599745e7.js */ "Zw2R");
/* harmony import */ var _component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-080a2a5e.js */ "BTHx");
/* harmony import */ var _component_abd1dc7e_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-abd1dc7e.js */ "83JO");
/* harmony import */ var _utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils-bdfea2c3.js */ "np3L");
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
var cssClasses = {
    LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
    LABEL_REQUIRED: 'mdc-floating-label--required',
    LABEL_SHAKE: 'mdc-floating-label--shake',
    ROOT: 'mdc-floating-label',
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
var MDCFloatingLabelFoundation = /** @class */ (function (_super) {
    Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["_"])(MDCFloatingLabelFoundation, _super);
    function MDCFloatingLabelFoundation(adapter) {
        var _this = _super.call(this, Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, MDCFloatingLabelFoundation.defaultAdapter), adapter)) || this;
        _this.shakeAnimationEndHandler_ = function () { return _this.handleShakeAnimationEnd_(); };
        return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
        get: function () {
            return cssClasses;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
        /**
         * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                getWidth: function () { return 0; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCFloatingLabelFoundation.prototype.init = function () {
        this.adapter.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    MDCFloatingLabelFoundation.prototype.destroy = function () {
        this.adapter.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
    };
    /**
     * Returns the width of the label element.
     */
    MDCFloatingLabelFoundation.prototype.getWidth = function () {
        return this.adapter.getWidth();
    };
    /**
     * Styles the label to produce a shake animation to indicate an error.
     * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
     */
    MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        if (shouldShake) {
            this.adapter.addClass(LABEL_SHAKE);
        }
        else {
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label to float or dock.
     * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
     */
    MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
        var _a = MDCFloatingLabelFoundation.cssClasses, LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a.LABEL_SHAKE;
        if (shouldFloat) {
            this.adapter.addClass(LABEL_FLOAT_ABOVE);
        }
        else {
            this.adapter.removeClass(LABEL_FLOAT_ABOVE);
            this.adapter.removeClass(LABEL_SHAKE);
        }
    };
    /**
     * Styles the label as required.
     * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
     */
    MDCFloatingLabelFoundation.prototype.setRequired = function (isRequired) {
        var LABEL_REQUIRED = MDCFloatingLabelFoundation.cssClasses.LABEL_REQUIRED;
        if (isRequired) {
            this.adapter.addClass(LABEL_REQUIRED);
        }
        else {
            this.adapter.removeClass(LABEL_REQUIRED);
        }
    };
    MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
        this.adapter.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation;
}(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["M"]));

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
var MDCFloatingLabel = /** @class */ (function (_super) {
    Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["_"])(MDCFloatingLabel, _super);
    function MDCFloatingLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCFloatingLabel.attachTo = function (root) {
        return new MDCFloatingLabel(root);
    };
    /**
     * Styles the label to produce the label shake for errors.
     * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.
     */
    MDCFloatingLabel.prototype.shake = function (shouldShake) {
        this.foundation.shake(shouldShake);
    };
    /**
     * Styles the label to float/dock.
     * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.
     */
    MDCFloatingLabel.prototype.float = function (shouldFloat) {
        this.foundation.float(shouldFloat);
    };
    /**
     * Styles the label as required.
     * @param isRequired If true, adds an asterisk to the label, indicating that it is required.
     */
    MDCFloatingLabel.prototype.setRequired = function (isRequired) {
        this.foundation.setRequired(isRequired);
    };
    MDCFloatingLabel.prototype.getWidth = function () {
        return this.foundation.getWidth();
    };
    MDCFloatingLabel.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            getWidth: function () { return Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["e"])(_this.root); },
            registerInteractionHandler: function (evtType, handler) {
                return _this.listen(evtType, handler);
            },
            deregisterInteractionHandler: function (evtType, handler) {
                return _this.unlisten(evtType, handler);
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCFloatingLabelFoundation(adapter);
    };
    return MDCFloatingLabel;
}(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["b"]));

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
var cssClasses$1 = {
    LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
    LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating',
};

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
var MDCLineRippleFoundation = /** @class */ (function (_super) {
    Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["_"])(MDCLineRippleFoundation, _super);
    function MDCLineRippleFoundation(adapter) {
        var _this = _super.call(this, Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, MDCLineRippleFoundation.defaultAdapter), adapter)) || this;
        _this.transitionEndHandler_ = function (evt) { return _this.handleTransitionEnd(evt); };
        return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
        get: function () {
            return cssClasses$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
        /**
         * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setStyle: function () { return undefined; },
                registerEventHandler: function () { return undefined; },
                deregisterEventHandler: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCLineRippleFoundation.prototype.init = function () {
        this.adapter.registerEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.destroy = function () {
        this.adapter.deregisterEventHandler('transitionend', this.transitionEndHandler_);
    };
    MDCLineRippleFoundation.prototype.activate = function () {
        this.adapter.removeClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
        this.adapter.addClass(cssClasses$1.LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
        this.adapter.setStyle('transform-origin', xCoordinate + "px center");
    };
    MDCLineRippleFoundation.prototype.deactivate = function () {
        this.adapter.addClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter.hasClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
        if (evt.propertyName === 'opacity') {
            if (isDeactivating) {
                this.adapter.removeClass(cssClasses$1.LINE_RIPPLE_ACTIVE);
                this.adapter.removeClass(cssClasses$1.LINE_RIPPLE_DEACTIVATING);
            }
        }
    };
    return MDCLineRippleFoundation;
}(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["M"]));

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
var MDCLineRipple = /** @class */ (function (_super) {
    Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["_"])(MDCLineRipple, _super);
    function MDCLineRipple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCLineRipple.attachTo = function (root) {
        return new MDCLineRipple(root);
    };
    /**
     * Activates the line ripple
     */
    MDCLineRipple.prototype.activate = function () {
        this.foundation.activate();
    };
    /**
     * Deactivates the line ripple
     */
    MDCLineRipple.prototype.deactivate = function () {
        this.foundation.deactivate();
    };
    /**
     * Sets the transform origin given a user's click location.
     * The `rippleCenter` is the x-coordinate of the middle of the ripple.
     */
    MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {
        this.foundation.setRippleCenter(xCoordinate);
    };
    MDCLineRipple.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            setStyle: function (propertyName, value) { return _this.root.style.setProperty(propertyName, value); },
            registerEventHandler: function (evtType, handler) { return _this.listen(evtType, handler); },
            deregisterEventHandler: function (evtType, handler) { return _this.unlisten(evtType, handler); },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCLineRippleFoundation(adapter);
    };
    return MDCLineRipple;
}(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["b"]));

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
var strings = {
    NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch',
};
var numbers = {
    // This should stay in sync with $mdc-notched-outline-padding * 2.
    NOTCH_ELEMENT_PADDING: 8,
};
var cssClasses$2 = {
    NO_LABEL: 'mdc-notched-outline--no-label',
    OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
    OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
};

/**
 * @license
 * Copyright 2017 Google Inc.
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
var MDCNotchedOutlineFoundation = /** @class */ (function (_super) {
    Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["_"])(MDCNotchedOutlineFoundation, _super);
    function MDCNotchedOutlineFoundation(adapter) {
        return _super.call(this, Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, MDCNotchedOutlineFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
        get: function () {
            return strings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
        get: function () {
            return cssClasses$2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
        get: function () {
            return numbers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
        /**
         * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                setNotchWidthProperty: function () { return undefined; },
                removeNotchWidthProperty: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
     */
    MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        if (notchWidth > 0) {
            notchWidth += numbers.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
        }
        this.adapter.setNotchWidthProperty(notchWidth);
        this.adapter.addClass(OUTLINE_NOTCHED);
    };
    /**
     * Removes notched outline selector to close the notch in the outline.
     */
    MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
        this.adapter.removeClass(OUTLINE_NOTCHED);
        this.adapter.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation;
}(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["M"]));

/**
 * @license
 * Copyright 2017 Google Inc.
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
var MDCNotchedOutline = /** @class */ (function (_super) {
    Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["_"])(MDCNotchedOutline, _super);
    function MDCNotchedOutline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCNotchedOutline.attachTo = function (root) {
        return new MDCNotchedOutline(root);
    };
    MDCNotchedOutline.prototype.initialSyncWithDOM = function () {
        this.notchElement_ =
            this.root.querySelector(strings.NOTCH_ELEMENT_SELECTOR);
        var label = this.root.querySelector('.' + MDCFloatingLabelFoundation.cssClasses.ROOT);
        if (label) {
            label.style.transitionDuration = '0s';
            this.root.classList.add(cssClasses$2.OUTLINE_UPGRADED);
            requestAnimationFrame(function () {
                label.style.transitionDuration = '';
            });
        }
        else {
            this.root.classList.add(cssClasses$2.NO_LABEL);
        }
    };
    /**
     * Updates classes and styles to open the notch to the specified width.
     * @param notchWidth The notch width in the outline.
     */
    MDCNotchedOutline.prototype.notch = function (notchWidth) {
        this.foundation.notch(notchWidth);
    };
    /**
     * Updates classes and styles to close the notch.
     */
    MDCNotchedOutline.prototype.closeNotch = function () {
        this.foundation.closeNotch();
    };
    MDCNotchedOutline.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            setNotchWidthProperty: function (width) {
                return _this.notchElement_.style.setProperty('width', width + 'px');
            },
            removeNotchWidthProperty: function () {
                return _this.notchElement_.style.removeProperty('width');
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCNotchedOutlineFoundation(adapter);
    };
    return MDCNotchedOutline;
}(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["b"]));

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
var cssClasses$3 = {
    ACTIVATED: 'mdc-select--activated',
    DISABLED: 'mdc-select--disabled',
    FOCUSED: 'mdc-select--focused',
    INVALID: 'mdc-select--invalid',
    MENU_INVALID: 'mdc-select__menu--invalid',
    OUTLINED: 'mdc-select--outlined',
    REQUIRED: 'mdc-select--required',
    ROOT: 'mdc-select',
    SELECTED_ITEM_CLASS: 'mdc-list-item--selected',
    WITH_LEADING_ICON: 'mdc-select--with-leading-icon',
};
var strings$1 = {
    ARIA_CONTROLS: 'aria-controls',
    ARIA_SELECTED_ATTR: 'aria-selected',
    CHANGE_EVENT: 'MDCSelect:change',
    LABEL_SELECTOR: '.mdc-floating-label',
    LEADING_ICON_SELECTOR: '.mdc-select__icon',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
    MENU_SELECTOR: '.mdc-select__menu',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    SELECTED_ITEM_SELECTOR: "." + cssClasses$3.SELECTED_ITEM_CLASS,
    SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text',
    SELECT_ANCHOR_SELECTOR: '.mdc-select__anchor',
    VALUE_ATTR: 'data-value',
};
var numbers$1 = {
    LABEL_SCALE: 0.75,
    UNSET_INDEX: -1,
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
var MDCSelectFoundation = /** @class */ (function (_super) {
    Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["_"])(MDCSelectFoundation, _super);
    /* istanbul ignore next: optional argument is not a branch statement */
    /**
     * @param adapter
     * @param foundationMap Map from subcomponent names to their subfoundations.
     */
    function MDCSelectFoundation(adapter, foundationMap) {
        if (foundationMap === void 0) { foundationMap = {}; }
        var _this = _super.call(this, Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, MDCSelectFoundation.defaultAdapter), adapter)) || this;
        // Index of the currently selected menu item.
        _this.selectedIndex = numbers$1.UNSET_INDEX;
        // VALUE_ATTR values of the menu items.
        _this.menuItemValues = [];
        // Disabled state
        _this.disabled = false;
        // isMenuOpen is used to track the state of the menu by listening to the
        // MDCMenuSurface:closed event For reference, menu.open will return false if
        // the menu is still closing, but isMenuOpen returns false only after the menu
        // has closed
        _this.isMenuOpen = false;
        // By default, select is invalid if it is required but no value is selected.
        _this.useDefaultValidation = true;
        _this.customValidity = true;
        _this.leadingIcon = foundationMap.leadingIcon;
        _this.helperText = foundationMap.helperText;
        return _this;
    }
    Object.defineProperty(MDCSelectFoundation, "cssClasses", {
        get: function () {
            return cssClasses$3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "numbers", {
        get: function () {
            return numbers$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "strings", {
        get: function () {
            return strings$1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectFoundation, "defaultAdapter", {
        /**
         * See {@link MDCSelectAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                activateBottomLine: function () { return undefined; },
                deactivateBottomLine: function () { return undefined; },
                getSelectedMenuItem: function () { return null; },
                hasLabel: function () { return false; },
                floatLabel: function () { return undefined; },
                getLabelWidth: function () { return 0; },
                setLabelRequired: function () { return undefined; },
                hasOutline: function () { return false; },
                notchOutline: function () { return undefined; },
                closeOutline: function () { return undefined; },
                setRippleCenter: function () { return undefined; },
                notifyChange: function () { return undefined; },
                setSelectedText: function () { return undefined; },
                isSelectAnchorFocused: function () { return false; },
                getSelectAnchorAttr: function () { return ''; },
                setSelectAnchorAttr: function () { return undefined; },
                removeSelectAnchorAttr: function () { return undefined; },
                addMenuClass: function () { return undefined; },
                removeMenuClass: function () { return undefined; },
                openMenu: function () { return undefined; },
                closeMenu: function () { return undefined; },
                getAnchorElement: function () { return null; },
                setMenuAnchorElement: function () { return undefined; },
                setMenuAnchorCorner: function () { return undefined; },
                setMenuWrapFocus: function () { return undefined; },
                setAttributeAtIndex: function () { return undefined; },
                focusMenuItemAtIndex: function () { return undefined; },
                getMenuItemCount: function () { return 0; },
                getMenuItemValues: function () { return []; },
                getMenuItemTextAtIndex: function () { return ''; },
                getMenuItemAttr: function () { return ''; },
                addClassAtIndex: function () { return undefined; },
                removeClassAtIndex: function () { return undefined; },
                isTypeaheadInProgress: function () { return false; },
                typeaheadMatchItem: function () { return -1; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /** Returns the index of the currently selected menu item, or -1 if none. */
    MDCSelectFoundation.prototype.getSelectedIndex = function () {
        return this.selectedIndex;
    };
    MDCSelectFoundation.prototype.setSelectedIndex = function (index, closeMenu) {
        if (closeMenu === void 0) { closeMenu = false; }
        if (index >= this.adapter.getMenuItemCount()) {
            return;
        }
        this.removeSelectionAtIndex(this.selectedIndex);
        this.setSelectionAtIndex(index);
        if (closeMenu) {
            this.adapter.closeMenu();
        }
        this.handleChange();
    };
    MDCSelectFoundation.prototype.setValue = function (value) {
        var index = this.menuItemValues.indexOf(value);
        this.setSelectedIndex(index);
    };
    MDCSelectFoundation.prototype.getValue = function () {
        var listItem = this.adapter.getSelectedMenuItem();
        if (listItem) {
            return this.adapter.getMenuItemAttr(listItem, strings$1.VALUE_ATTR) || '';
        }
        return '';
    };
    MDCSelectFoundation.prototype.getDisabled = function () {
        return this.disabled;
    };
    MDCSelectFoundation.prototype.setDisabled = function (isDisabled) {
        this.disabled = isDisabled;
        if (this.disabled) {
            this.adapter.addClass(cssClasses$3.DISABLED);
            this.adapter.closeMenu();
        }
        else {
            this.adapter.removeClass(cssClasses$3.DISABLED);
        }
        if (this.leadingIcon) {
            this.leadingIcon.setDisabled(this.disabled);
        }
        if (this.disabled) {
            // Prevent click events from focusing select. Simply pointer-events: none
            // is not enough since screenreader clicks may bypass this.
            this.adapter.removeSelectAnchorAttr('tabindex');
        }
        else {
            this.adapter.setSelectAnchorAttr('tabindex', '0');
        }
        this.adapter.setSelectAnchorAttr('aria-disabled', this.disabled.toString());
    };
    /** Opens the menu. */
    MDCSelectFoundation.prototype.openMenu = function () {
        this.adapter.addClass(cssClasses$3.ACTIVATED);
        this.adapter.openMenu();
        this.isMenuOpen = true;
        this.adapter.setSelectAnchorAttr('aria-expanded', 'true');
    };
    /**
     * @param content Sets the content of the helper text.
     */
    MDCSelectFoundation.prototype.setHelperTextContent = function (content) {
        if (this.helperText) {
            this.helperText.setContent(content);
        }
    };
    /**
     * Re-calculates if the notched outline should be notched and if the label
     * should float.
     */
    MDCSelectFoundation.prototype.layout = function () {
        if (this.adapter.hasLabel()) {
            var optionHasValue = this.getValue().length > 0;
            var isFocused = this.adapter.hasClass(cssClasses$3.FOCUSED);
            var shouldFloatAndNotch = optionHasValue || isFocused;
            var isRequired = this.adapter.hasClass(cssClasses$3.REQUIRED);
            this.notchOutline(shouldFloatAndNotch);
            this.adapter.floatLabel(shouldFloatAndNotch);
            this.adapter.setLabelRequired(isRequired);
        }
    };
    /**
     * Synchronizes the list of options with the state of the foundation. Call
     * this whenever menu options are dynamically updated.
     */
    MDCSelectFoundation.prototype.layoutOptions = function () {
        this.menuItemValues = this.adapter.getMenuItemValues();
        var selectedIndex = this.menuItemValues.indexOf(this.getValue());
        this.setSelectionAtIndex(selectedIndex);
    };
    MDCSelectFoundation.prototype.handleMenuOpened = function () {
        if (this.menuItemValues.length === 0) {
            return;
        }
        // Menu should open to the last selected element, should open to first menu item otherwise.
        var focusItemIndex = this.selectedIndex >= 0 ? this.selectedIndex : 0;
        this.adapter.focusMenuItemAtIndex(focusItemIndex);
    };
    MDCSelectFoundation.prototype.handleMenuClosed = function () {
        this.adapter.removeClass(cssClasses$3.ACTIVATED);
        this.isMenuOpen = false;
        this.adapter.setSelectAnchorAttr('aria-expanded', 'false');
        // Unfocus the select if menu is closed without a selection
        if (!this.adapter.isSelectAnchorFocused()) {
            this.blur();
        }
    };
    /**
     * Handles value changes, via change event or programmatic updates.
     */
    MDCSelectFoundation.prototype.handleChange = function () {
        this.layout();
        this.adapter.notifyChange(this.getValue());
        var isRequired = this.adapter.hasClass(cssClasses$3.REQUIRED);
        if (isRequired && this.useDefaultValidation) {
            this.setValid(this.isValid());
            if (this.helperText) {
                this.helperText.setValidity(this.isValid());
            }
        }
    };
    MDCSelectFoundation.prototype.handleMenuItemAction = function (index) {
        this.setSelectedIndex(index, /** closeMenu */ true);
    };
    /**
     * Handles focus events from select element.
     */
    MDCSelectFoundation.prototype.handleFocus = function () {
        this.adapter.addClass(cssClasses$3.FOCUSED);
        this.layout();
        this.adapter.activateBottomLine();
    };
    /**
     * Handles blur events from select element.
     */
    MDCSelectFoundation.prototype.handleBlur = function () {
        if (this.isMenuOpen) {
            return;
        }
        this.blur();
    };
    MDCSelectFoundation.prototype.handleClick = function (normalizedX) {
        if (this.disabled) {
            return;
        }
        if (this.isMenuOpen) {
            this.adapter.closeMenu();
            return;
        }
        this.adapter.setRippleCenter(normalizedX);
        this.openMenu();
    };
    /**
     * Handles keydown events on select element. Depending on the type of
     * character typed, does typeahead matching or opens menu.
     */
    MDCSelectFoundation.prototype.handleKeydown = function (event) {
        if (this.isMenuOpen || !this.adapter.hasClass(cssClasses$3.FOCUSED)) {
            return;
        }
        var isEnter = Object(_component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__["n"])(event) === _component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__["K"].ENTER;
        var isSpace = Object(_component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__["n"])(event) === _component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__["K"].SPACEBAR;
        var arrowUp = Object(_component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__["n"])(event) === _component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__["K"].ARROW_UP;
        var arrowDown = Object(_component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__["n"])(event) === _component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__["K"].ARROW_DOWN;
        // Typeahead
        if (!isSpace && event.key && event.key.length === 1 ||
            isSpace && this.adapter.isTypeaheadInProgress()) {
            var key = isSpace ? ' ' : event.key;
            var typeaheadNextIndex = this.adapter.typeaheadMatchItem(key, this.selectedIndex);
            if (typeaheadNextIndex >= 0) {
                this.setSelectedIndex(typeaheadNextIndex);
            }
            event.preventDefault();
            return;
        }
        if (!isEnter && !isSpace && !arrowUp && !arrowDown) {
            return;
        }
        // Increment/decrement index as necessary and open menu.
        if (arrowUp && this.selectedIndex > 0) {
            this.setSelectedIndex(this.selectedIndex - 1);
        }
        else if (arrowDown && this.selectedIndex < this.adapter.getMenuItemCount() - 1) {
            this.setSelectedIndex(this.selectedIndex + 1);
        }
        this.openMenu();
        event.preventDefault();
    };
    /**
     * Opens/closes the notched outline.
     */
    MDCSelectFoundation.prototype.notchOutline = function (openNotch) {
        if (!this.adapter.hasOutline()) {
            return;
        }
        var isFocused = this.adapter.hasClass(cssClasses$3.FOCUSED);
        if (openNotch) {
            var labelScale = numbers$1.LABEL_SCALE;
            var labelWidth = this.adapter.getLabelWidth() * labelScale;
            this.adapter.notchOutline(labelWidth);
        }
        else if (!isFocused) {
            this.adapter.closeOutline();
        }
    };
    /**
     * Sets the aria label of the leading icon.
     */
    MDCSelectFoundation.prototype.setLeadingIconAriaLabel = function (label) {
        if (this.leadingIcon) {
            this.leadingIcon.setAriaLabel(label);
        }
    };
    /**
     * Sets the text content of the leading icon.
     */
    MDCSelectFoundation.prototype.setLeadingIconContent = function (content) {
        if (this.leadingIcon) {
            this.leadingIcon.setContent(content);
        }
    };
    MDCSelectFoundation.prototype.setUseDefaultValidation = function (useDefaultValidation) {
        this.useDefaultValidation = useDefaultValidation;
    };
    MDCSelectFoundation.prototype.setValid = function (isValid) {
        if (!this.useDefaultValidation) {
            this.customValidity = isValid;
        }
        this.adapter.setSelectAnchorAttr('aria-invalid', (!isValid).toString());
        if (isValid) {
            this.adapter.removeClass(cssClasses$3.INVALID);
            this.adapter.removeMenuClass(cssClasses$3.MENU_INVALID);
        }
        else {
            this.adapter.addClass(cssClasses$3.INVALID);
            this.adapter.addMenuClass(cssClasses$3.MENU_INVALID);
        }
    };
    MDCSelectFoundation.prototype.isValid = function () {
        if (this.useDefaultValidation &&
            this.adapter.hasClass(cssClasses$3.REQUIRED) &&
            !this.adapter.hasClass(cssClasses$3.DISABLED)) {
            // See notes for required attribute under https://www.w3.org/TR/html52/sec-forms.html#the-select-element
            // TL;DR: Invalid if no index is selected, or if the first index is selected and has an empty value.
            return this.selectedIndex !== numbers$1.UNSET_INDEX &&
                (this.selectedIndex !== 0 || Boolean(this.getValue()));
        }
        return this.customValidity;
    };
    MDCSelectFoundation.prototype.setRequired = function (isRequired) {
        if (isRequired) {
            this.adapter.addClass(cssClasses$3.REQUIRED);
        }
        else {
            this.adapter.removeClass(cssClasses$3.REQUIRED);
        }
        this.adapter.setSelectAnchorAttr('aria-required', isRequired.toString());
        this.adapter.setLabelRequired(isRequired);
    };
    MDCSelectFoundation.prototype.getRequired = function () {
        return this.adapter.getSelectAnchorAttr('aria-required') === 'true';
    };
    MDCSelectFoundation.prototype.init = function () {
        var anchorEl = this.adapter.getAnchorElement();
        if (anchorEl) {
            this.adapter.setMenuAnchorElement(anchorEl);
            this.adapter.setMenuAnchorCorner(_component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__["C"].BOTTOM_START);
        }
        this.adapter.setMenuWrapFocus(false);
        this.setDisabled(this.adapter.hasClass(cssClasses$3.DISABLED));
        this.layoutOptions();
        this.layout();
    };
    /**
     * Unfocuses the select component.
     */
    MDCSelectFoundation.prototype.blur = function () {
        this.adapter.removeClass(cssClasses$3.FOCUSED);
        this.layout();
        this.adapter.deactivateBottomLine();
        var isRequired = this.adapter.hasClass(cssClasses$3.REQUIRED);
        if (isRequired && this.useDefaultValidation) {
            this.setValid(this.isValid());
            if (this.helperText) {
                this.helperText.setValidity(this.isValid());
            }
        }
    };
    MDCSelectFoundation.prototype.setSelectionAtIndex = function (index) {
        this.selectedIndex = index;
        if (index === numbers$1.UNSET_INDEX) {
            this.adapter.setSelectedText('');
            return;
        }
        this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(index).trim());
        this.adapter.addClassAtIndex(index, cssClasses$3.SELECTED_ITEM_CLASS);
        this.adapter.setAttributeAtIndex(index, strings$1.ARIA_SELECTED_ATTR, 'true');
    };
    MDCSelectFoundation.prototype.removeSelectionAtIndex = function (index) {
        if (index !== numbers$1.UNSET_INDEX) {
            this.adapter.removeClassAtIndex(index, cssClasses$3.SELECTED_ITEM_CLASS);
            this.adapter.setAttributeAtIndex(index, strings$1.ARIA_SELECTED_ATTR, 'false');
        }
    };
    return MDCSelectFoundation;
}(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["M"]));

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
var strings$2 = {
    ARIA_HIDDEN: 'aria-hidden',
    ROLE: 'role',
};
var cssClasses$4 = {
    HELPER_TEXT_VALIDATION_MSG: 'mdc-select-helper-text--validation-msg',
    HELPER_TEXT_VALIDATION_MSG_PERSISTENT: 'mdc-select-helper-text--validation-msg-persistent',
};

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
var MDCSelectHelperTextFoundation = /** @class */ (function (_super) {
    Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["_"])(MDCSelectHelperTextFoundation, _super);
    function MDCSelectHelperTextFoundation(adapter) {
        return _super.call(this, Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, MDCSelectHelperTextFoundation.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCSelectHelperTextFoundation, "cssClasses", {
        get: function () {
            return cssClasses$4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectHelperTextFoundation, "strings", {
        get: function () {
            return strings$2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectHelperTextFoundation, "defaultAdapter", {
        /**
         * See {@link MDCSelectHelperTextAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                addClass: function () { return undefined; },
                removeClass: function () { return undefined; },
                hasClass: function () { return false; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the content of the helper text field.
     */
    MDCSelectHelperTextFoundation.prototype.setContent = function (content) {
        this.adapter.setContent(content);
    };
    /**
     * Sets the helper text to act as a validation message.
     * By default, validation messages are hidden when the select is valid and
     * visible when the select is invalid.
     *
     * @param isValidation True to make the helper text act as an error validation
     *     message.
     */
    MDCSelectHelperTextFoundation.prototype.setValidation = function (isValidation) {
        if (isValidation) {
            this.adapter.addClass(cssClasses$4.HELPER_TEXT_VALIDATION_MSG);
        }
        else {
            this.adapter.removeClass(cssClasses$4.HELPER_TEXT_VALIDATION_MSG);
        }
    };
    /**
     * Sets the persistency of the validation helper text.
     * This keeps the validation message visible even if the select is valid,
     * though it will be displayed in the normal (grey) color.
     */
    MDCSelectHelperTextFoundation.prototype.setValidationMsgPersistent = function (isPersistent) {
        if (isPersistent) {
            this.adapter.addClass(cssClasses$4.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
        }
        else {
            this.adapter.removeClass(cssClasses$4.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
        }
    };
    /**
     * Makes the helper text visible to screen readers.
     */
    MDCSelectHelperTextFoundation.prototype.showToScreenReader = function () {
        this.adapter.removeAttr(strings$2.ARIA_HIDDEN);
    };
    /**
     * When acting as a validation message, shows/hides the helper text and
     * triggers alerts as necessary based on the select's validity.
     */
    MDCSelectHelperTextFoundation.prototype.setValidity = function (selectIsValid) {
        var isValidationMsg = this.adapter.hasClass(cssClasses$4.HELPER_TEXT_VALIDATION_MSG);
        if (!isValidationMsg) {
            // Non-validating helper-text is always displayed and does not participate
            // in validation logic.
            return;
        }
        var isPersistentValidationMsg = this.adapter.hasClass(cssClasses$4.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
        // Validating helper text is displayed if select is invalid, unless it is
        // set as persistent, in which case it always displays.
        var msgShouldDisplay = !selectIsValid || isPersistentValidationMsg;
        if (msgShouldDisplay) {
            this.showToScreenReader();
            // In addition to displaying, also trigger an alert if the select
            // has become invalid.
            if (!selectIsValid) {
                this.adapter.setAttr(strings$2.ROLE, 'alert');
            }
            else {
                this.adapter.removeAttr(strings$2.ROLE);
            }
            return;
        }
        // Hide everything.
        this.adapter.removeAttr(strings$2.ROLE);
        this.hide();
    };
    /**
     * Hides the help text from screen readers.
     */
    MDCSelectHelperTextFoundation.prototype.hide = function () {
        this.adapter.setAttr(strings$2.ARIA_HIDDEN, 'true');
    };
    return MDCSelectHelperTextFoundation;
}(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["M"]));

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
var MDCSelectHelperText = /** @class */ (function (_super) {
    Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["_"])(MDCSelectHelperText, _super);
    function MDCSelectHelperText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSelectHelperText.attachTo = function (root) {
        return new MDCSelectHelperText(root);
    };
    Object.defineProperty(MDCSelectHelperText.prototype, "foundationForSelect", {
        // Provided for access by MDCSelect component
        get: function () {
            return this.foundation;
        },
        enumerable: true,
        configurable: true
    });
    MDCSelectHelperText.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            addClass: function (className) { return _this.root.classList.add(className); },
            removeClass: function (className) { return _this.root.classList.remove(className); },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            setAttr: function (attr, value) { return _this.root.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root.removeAttribute(attr); },
            setContent: function (content) {
                _this.root.textContent = content;
            },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCSelectHelperTextFoundation(adapter);
    };
    return MDCSelectHelperText;
}(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["b"]));

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
var strings$3 = {
    ICON_EVENT: 'MDCSelect:icon',
    ICON_ROLE: 'button',
};

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
var INTERACTION_EVENTS = ['click', 'keydown'];
var MDCSelectIconFoundation = /** @class */ (function (_super) {
    Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["_"])(MDCSelectIconFoundation, _super);
    function MDCSelectIconFoundation(adapter) {
        var _this = _super.call(this, Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, MDCSelectIconFoundation.defaultAdapter), adapter)) || this;
        _this.savedTabIndex_ = null;
        _this.interactionHandler_ = function (evt) { return _this.handleInteraction(evt); };
        return _this;
    }
    Object.defineProperty(MDCSelectIconFoundation, "strings", {
        get: function () {
            return strings$3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelectIconFoundation, "defaultAdapter", {
        /**
         * See {@link MDCSelectIconAdapter} for typing information on parameters and return types.
         */
        get: function () {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
                getAttr: function () { return null; },
                setAttr: function () { return undefined; },
                removeAttr: function () { return undefined; },
                setContent: function () { return undefined; },
                registerInteractionHandler: function () { return undefined; },
                deregisterInteractionHandler: function () { return undefined; },
                notifyIconAction: function () { return undefined; },
            };
            // tslint:enable:object-literal-sort-keys
        },
        enumerable: true,
        configurable: true
    });
    MDCSelectIconFoundation.prototype.init = function () {
        var _this = this;
        this.savedTabIndex_ = this.adapter.getAttr('tabindex');
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter.registerInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCSelectIconFoundation.prototype.destroy = function () {
        var _this = this;
        INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter.deregisterInteractionHandler(evtType, _this.interactionHandler_);
        });
    };
    MDCSelectIconFoundation.prototype.setDisabled = function (disabled) {
        if (!this.savedTabIndex_) {
            return;
        }
        if (disabled) {
            this.adapter.setAttr('tabindex', '-1');
            this.adapter.removeAttr('role');
        }
        else {
            this.adapter.setAttr('tabindex', this.savedTabIndex_);
            this.adapter.setAttr('role', strings$3.ICON_ROLE);
        }
    };
    MDCSelectIconFoundation.prototype.setAriaLabel = function (label) {
        this.adapter.setAttr('aria-label', label);
    };
    MDCSelectIconFoundation.prototype.setContent = function (content) {
        this.adapter.setContent(content);
    };
    MDCSelectIconFoundation.prototype.handleInteraction = function (evt) {
        var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;
        if (evt.type === 'click' || isEnterKey) {
            this.adapter.notifyIconAction();
        }
    };
    return MDCSelectIconFoundation;
}(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["M"]));

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
var MDCSelectIcon = /** @class */ (function (_super) {
    Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["_"])(MDCSelectIcon, _super);
    function MDCSelectIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSelectIcon.attachTo = function (root) {
        return new MDCSelectIcon(root);
    };
    Object.defineProperty(MDCSelectIcon.prototype, "foundationForSelect", {
        // Provided for access by MDCSelect component
        get: function () {
            return this.foundation;
        },
        enumerable: true,
        configurable: true
    });
    MDCSelectIcon.prototype.getDefaultFoundation = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = {
            getAttr: function (attr) { return _this.root.getAttribute(attr); },
            setAttr: function (attr, value) { return _this.root.setAttribute(attr, value); },
            removeAttr: function (attr) { return _this.root.removeAttribute(attr); },
            setContent: function (content) {
                _this.root.textContent = content;
            },
            registerInteractionHandler: function (evtType, handler) {
                return _this.listen(evtType, handler);
            },
            deregisterInteractionHandler: function (evtType, handler) {
                return _this.unlisten(evtType, handler);
            },
            notifyIconAction: function () { return _this.emit(MDCSelectIconFoundation.strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */); },
        };
        // tslint:enable:object-literal-sort-keys
        return new MDCSelectIconFoundation(adapter);
    };
    return MDCSelectIcon;
}(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["b"]));

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
var MDCSelect = /** @class */ (function (_super) {
    Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["_"])(MDCSelect, _super);
    function MDCSelect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MDCSelect.attachTo = function (root) {
        return new MDCSelect(root);
    };
    MDCSelect.prototype.initialize = function (labelFactory, lineRippleFactory, outlineFactory, menuFactory, iconFactory, helperTextFactory) {
        if (labelFactory === void 0) { labelFactory = function (el) { return new MDCFloatingLabel(el); }; }
        if (lineRippleFactory === void 0) { lineRippleFactory = function (el) { return new MDCLineRipple(el); }; }
        if (outlineFactory === void 0) { outlineFactory = function (el) { return new MDCNotchedOutline(el); }; }
        if (menuFactory === void 0) { menuFactory = function (el) { return new _component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__["M"](el); }; }
        if (iconFactory === void 0) { iconFactory = function (el) { return new MDCSelectIcon(el); }; }
        if (helperTextFactory === void 0) { helperTextFactory = function (el) { return new MDCSelectHelperText(el); }; }
        this.selectAnchor =
            this.root.querySelector(strings$1.SELECT_ANCHOR_SELECTOR);
        this.selectedText =
            this.root.querySelector(strings$1.SELECTED_TEXT_SELECTOR);
        if (!this.selectedText) {
            throw new Error('MDCSelect: Missing required element: The following selector must be present: ' +
                ("'" + strings$1.SELECTED_TEXT_SELECTOR + "'"));
        }
        if (this.selectAnchor.hasAttribute(strings$1.ARIA_CONTROLS)) {
            var helperTextElement = document.getElementById(this.selectAnchor.getAttribute(strings$1.ARIA_CONTROLS));
            if (helperTextElement) {
                this.helperText = helperTextFactory(helperTextElement);
            }
        }
        this.menuSetup(menuFactory);
        var labelElement = this.root.querySelector(strings$1.LABEL_SELECTOR);
        this.label = labelElement ? labelFactory(labelElement) : null;
        var lineRippleElement = this.root.querySelector(strings$1.LINE_RIPPLE_SELECTOR);
        this.lineRipple =
            lineRippleElement ? lineRippleFactory(lineRippleElement) : null;
        var outlineElement = this.root.querySelector(strings$1.OUTLINE_SELECTOR);
        this.outline = outlineElement ? outlineFactory(outlineElement) : null;
        var leadingIcon = this.root.querySelector(strings$1.LEADING_ICON_SELECTOR);
        if (leadingIcon) {
            this.leadingIcon = iconFactory(leadingIcon);
        }
        if (!this.root.classList.contains(cssClasses$3.OUTLINED)) {
            this.ripple = this.createRipple();
        }
    };
    /**
     * Initializes the select's event listeners and internal state based
     * on the environment's state.
     */
    MDCSelect.prototype.initialSyncWithDOM = function () {
        var _this = this;
        this.handleChange = function () {
            _this.foundation.handleChange();
        };
        this.handleFocus = function () {
            _this.foundation.handleFocus();
        };
        this.handleBlur = function () {
            _this.foundation.handleBlur();
        };
        this.handleClick = function (evt) {
            _this.selectAnchor.focus();
            _this.foundation.handleClick(_this.getNormalizedXCoordinate(evt));
        };
        this.handleKeydown = function (evt) {
            _this.foundation.handleKeydown(evt);
        };
        this.handleMenuItemAction = function (evt) {
            _this.foundation.handleMenuItemAction(evt.detail.index);
        };
        this.handleMenuOpened = function () {
            _this.foundation.handleMenuOpened();
        };
        this.handleMenuClosed = function () {
            _this.foundation.handleMenuClosed();
        };
        this.selectAnchor.addEventListener('focus', this.handleFocus);
        this.selectAnchor.addEventListener('blur', this.handleBlur);
        this.selectAnchor.addEventListener('click', this.handleClick);
        this.selectAnchor.addEventListener('keydown', this.handleKeydown);
        this.menu.listen(_component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__["s"].CLOSED_EVENT, this.handleMenuClosed);
        this.menu.listen(_component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__["s"].OPENED_EVENT, this.handleMenuOpened);
        this.menu.listen(_component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__["a"].SELECTED_EVENT, this.handleMenuItemAction);
    };
    MDCSelect.prototype.destroy = function () {
        this.selectAnchor.removeEventListener('change', this.handleChange);
        this.selectAnchor.removeEventListener('focus', this.handleFocus);
        this.selectAnchor.removeEventListener('blur', this.handleBlur);
        this.selectAnchor.removeEventListener('keydown', this.handleKeydown);
        this.selectAnchor.removeEventListener('click', this.handleClick);
        this.menu.unlisten(_component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__["s"].CLOSED_EVENT, this.handleMenuClosed);
        this.menu.unlisten(_component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__["s"].OPENED_EVENT, this.handleMenuOpened);
        this.menu.unlisten(_component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__["a"].SELECTED_EVENT, this.handleMenuItemAction);
        this.menu.destroy();
        if (this.ripple) {
            this.ripple.destroy();
        }
        if (this.outline) {
            this.outline.destroy();
        }
        if (this.leadingIcon) {
            this.leadingIcon.destroy();
        }
        if (this.helperText) {
            this.helperText.destroy();
        }
        _super.prototype.destroy.call(this);
    };
    Object.defineProperty(MDCSelect.prototype, "value", {
        get: function () {
            return this.foundation.getValue();
        },
        set: function (value) {
            this.foundation.setValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "selectedIndex", {
        get: function () {
            return this.foundation.getSelectedIndex();
        },
        set: function (selectedIndex) {
            this.foundation.setSelectedIndex(selectedIndex, /** closeMenu */ true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "disabled", {
        get: function () {
            return this.foundation.getDisabled();
        },
        set: function (disabled) {
            this.foundation.setDisabled(disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "leadingIconAriaLabel", {
        set: function (label) {
            this.foundation.setLeadingIconAriaLabel(label);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "leadingIconContent", {
        /**
         * Sets the text content of the leading icon.
         */
        set: function (content) {
            this.foundation.setLeadingIconContent(content);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "helperTextContent", {
        /**
         * Sets the text content of the helper text.
         */
        set: function (content) {
            this.foundation.setHelperTextContent(content);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "useDefaultValidation", {
        /**
         * Enables or disables the default validation scheme where a required select
         * must be non-empty. Set to false for custom validation.
         * @param useDefaultValidation Set this to false to ignore default
         *     validation scheme.
         */
        set: function (useDefaultValidation) {
            this.foundation.setUseDefaultValidation(useDefaultValidation);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "valid", {
        /**
         * Checks if the select is in a valid state.
         */
        get: function () {
            return this.foundation.isValid();
        },
        /**
         * Sets the current invalid state of the select.
         */
        set: function (isValid) {
            this.foundation.setValid(isValid);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MDCSelect.prototype, "required", {
        /**
         * Returns whether the select is required.
         */
        get: function () {
            return this.foundation.getRequired();
        },
        /**
         * Sets the control to the required state.
         */
        set: function (isRequired) {
            this.foundation.setRequired(isRequired);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Re-calculates if the notched outline should be notched and if the label
     * should float.
     */
    MDCSelect.prototype.layout = function () {
        this.foundation.layout();
    };
    /**
     * Synchronizes the list of options with the state of the foundation. Call
     * this whenever menu options are dynamically updated.
     */
    MDCSelect.prototype.layoutOptions = function () {
        this.foundation.layoutOptions();
        this.menu.layout();
    };
    MDCSelect.prototype.getDefaultFoundation = function () {
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        var adapter = Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, this.getSelectAdapterMethods()), this.getCommonAdapterMethods()), this.getOutlineAdapterMethods()), this.getLabelAdapterMethods());
        return new MDCSelectFoundation(adapter, this.getFoundationMap());
    };
    /**
     * Handles setup for the menu.
     */
    MDCSelect.prototype.menuSetup = function (menuFactory) {
        this.menuElement = this.root.querySelector(strings$1.MENU_SELECTOR);
        this.menu = menuFactory(this.menuElement);
        this.menu.hasTypeahead = true;
    };
    MDCSelect.prototype.createRipple = function () {
        var _this = this;
        // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.
        // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        var adapter = Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])(Object(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["a"])({}, _component_abd1dc7e_js__WEBPACK_IMPORTED_MODULE_3__["M"].createAdapter({ root: this.selectAnchor })), { registerInteractionHandler: function (evtType, handler) {
                _this.selectAnchor.addEventListener(evtType, handler);
            }, deregisterInteractionHandler: function (evtType, handler) {
                _this.selectAnchor.removeEventListener(evtType, handler);
            } });
        // tslint:enable:object-literal-sort-keys
        return new _component_abd1dc7e_js__WEBPACK_IMPORTED_MODULE_3__["M"](this.selectAnchor, new _component_abd1dc7e_js__WEBPACK_IMPORTED_MODULE_3__["a"](adapter));
    };
    MDCSelect.prototype.getSelectAdapterMethods = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            getSelectedMenuItem: function () {
                return _this.menuElement.querySelector(strings$1.SELECTED_ITEM_SELECTOR);
            },
            getMenuItemAttr: function (menuItem, attr) {
                return menuItem.getAttribute(attr);
            },
            setSelectedText: function (text) {
                _this.selectedText.textContent = text;
            },
            isSelectAnchorFocused: function () { return document.activeElement === _this.selectAnchor; },
            getSelectAnchorAttr: function (attr) {
                return _this.selectAnchor.getAttribute(attr);
            },
            setSelectAnchorAttr: function (attr, value) {
                _this.selectAnchor.setAttribute(attr, value);
            },
            removeSelectAnchorAttr: function (attr) {
                _this.selectAnchor.removeAttribute(attr);
            },
            addMenuClass: function (className) {
                _this.menuElement.classList.add(className);
            },
            removeMenuClass: function (className) {
                _this.menuElement.classList.remove(className);
            },
            openMenu: function () {
                _this.menu.open = true;
            },
            closeMenu: function () {
                _this.menu.open = false;
            },
            getAnchorElement: function () {
                return _this.root.querySelector(strings$1.SELECT_ANCHOR_SELECTOR);
            },
            setMenuAnchorElement: function (anchorEl) {
                _this.menu.setAnchorElement(anchorEl);
            },
            setMenuAnchorCorner: function (anchorCorner) {
                _this.menu.setAnchorCorner(anchorCorner);
            },
            setMenuWrapFocus: function (wrapFocus) {
                _this.menu.wrapFocus = wrapFocus;
            },
            setAttributeAtIndex: function (index, attributeName, attributeValue) {
                _this.menu.items[index].setAttribute(attributeName, attributeValue);
            },
            removeAttributeAtIndex: function (index, attributeName) {
                _this.menu.items[index].removeAttribute(attributeName);
            },
            focusMenuItemAtIndex: function (index) {
                _this.menu.items[index].focus();
            },
            getMenuItemCount: function () { return _this.menu.items.length; },
            getMenuItemValues: function () { return _this.menu.items.map(function (el) { return el.getAttribute(strings$1.VALUE_ATTR) || ''; }); },
            getMenuItemTextAtIndex: function (index) {
                return _this.menu.getPrimaryTextAtIndex(index);
            },
            addClassAtIndex: function (index, className) {
                _this.menu.items[index].classList.add(className);
            },
            removeClassAtIndex: function (index, className) {
                _this.menu.items[index].classList.remove(className);
            },
            isTypeaheadInProgress: function () { return _this.menu.typeaheadInProgress; },
            typeaheadMatchItem: function (nextChar, startingIndex) {
                return _this.menu.typeaheadMatchItem(nextChar, startingIndex);
            },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCSelect.prototype.getCommonAdapterMethods = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            addClass: function (className) {
                _this.root.classList.add(className);
            },
            removeClass: function (className) {
                _this.root.classList.remove(className);
            },
            hasClass: function (className) { return _this.root.classList.contains(className); },
            setRippleCenter: function (normalizedX) {
                _this.lineRipple && _this.lineRipple.setRippleCenter(normalizedX);
            },
            activateBottomLine: function () {
                _this.lineRipple && _this.lineRipple.activate();
            },
            deactivateBottomLine: function () {
                _this.lineRipple && _this.lineRipple.deactivate();
            },
            notifyChange: function (value) {
                var index = _this.selectedIndex;
                _this.emit(strings$1.CHANGE_EVENT, { value: value, index: index }, true /* shouldBubble  */);
            },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCSelect.prototype.getOutlineAdapterMethods = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            hasOutline: function () { return Boolean(_this.outline); },
            notchOutline: function (labelWidth) {
                _this.outline && _this.outline.notch(labelWidth);
            },
            closeOutline: function () {
                _this.outline && _this.outline.closeNotch();
            },
        };
        // tslint:enable:object-literal-sort-keys
    };
    MDCSelect.prototype.getLabelAdapterMethods = function () {
        var _this = this;
        // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
        return {
            hasLabel: function () { return !!_this.label; },
            floatLabel: function (shouldFloat) {
                _this.label && _this.label.float(shouldFloat);
            },
            getLabelWidth: function () { return _this.label ? _this.label.getWidth() : 0; },
            setLabelRequired: function (isRequired) {
                _this.label && _this.label.setRequired(isRequired);
            },
        };
        // tslint:enable:object-literal-sort-keys
    };
    /**
     * Calculates where the line ripple should start based on the x coordinate within the component.
     */
    MDCSelect.prototype.getNormalizedXCoordinate = function (evt) {
        var targetClientRect = evt.target.getBoundingClientRect();
        var xCoordinate = this.isTouchEvent(evt) ? evt.touches[0].clientX : evt.clientX;
        return xCoordinate - targetClientRect.left;
    };
    MDCSelect.prototype.isTouchEvent = function (evt) {
        return Boolean(evt.touches);
    };
    /**
     * Returns a map of all subcomponents to subfoundations.
     */
    MDCSelect.prototype.getFoundationMap = function () {
        return {
            helperText: this.helperText ? this.helperText.foundationForSelect :
                undefined,
            leadingIcon: this.leadingIcon ? this.leadingIcon.foundationForSelect :
                undefined,
        };
    };
    return MDCSelect;
}(_ponyfill_599745e7_js__WEBPACK_IMPORTED_MODULE_1__["b"]));

const paginatorComponentCss = "@charset \"UTF-8\";/*!\n *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.mdc-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}.mdc-list:focus{outline:none}.mdc-list-item{height:48px}.mdc-list-item__secondary-text{color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-list-item__graphic{background-color:transparent}.mdc-list-item__graphic{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-item__meta{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-group__subheader{color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}.mdc-list-item--disabled .mdc-list-item__text{opacity:0.38}.mdc-list-item--disabled .mdc-list-item__text,.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list-item--selected,.mdc-list-item--activated{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-list-item--selected .mdc-list-item__graphic,.mdc-list-item--activated .mdc-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:0.812rem}.mdc-list-item{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;height:48px}.mdc-list-item:focus{outline:none}.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid transparent;border-radius:inherit;content:\"\"}.mdc-list-item.mdc-list-item--selected::before{position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:3px double transparent;border-radius:inherit;content:\"\"}[dir=rtl] .mdc-list-item,.mdc-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-list--icon-list .mdc-list-item{padding-left:16px;padding-right:16px;height:56px}[dir=rtl] .mdc-list--icon-list .mdc-list-item,.mdc-list--icon-list .mdc-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-list--avatar-list .mdc-list-item{padding-left:16px;padding-right:16px;height:56px}[dir=rtl] .mdc-list--avatar-list .mdc-list-item,.mdc-list--avatar-list .mdc-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-list--thumbnail-list .mdc-list-item{padding-left:16px;padding-right:16px;height:56px}[dir=rtl] .mdc-list--thumbnail-list .mdc-list-item,.mdc-list--thumbnail-list .mdc-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-list--image-list .mdc-list-item{padding-left:16px;padding-right:16px;height:72px}[dir=rtl] .mdc-list--image-list .mdc-list-item,.mdc-list--image-list .mdc-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-list--video-list .mdc-list-item{padding-left:0px;padding-right:16px;height:72px}[dir=rtl] .mdc-list--video-list .mdc-list-item,.mdc-list--video-list .mdc-list-item[dir=rtl]{padding-left:16px;padding-right:0px}.mdc-list--dense .mdc-list-item__graphic{margin-left:0;margin-right:16px;width:20px;height:20px}[dir=rtl] .mdc-list--dense .mdc-list-item__graphic,.mdc-list--dense .mdc-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}.mdc-list-item__graphic{-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;fill:currentColor;-o-object-fit:cover;object-fit:cover;margin-left:0;margin-right:32px;width:24px;height:24px}[dir=rtl] .mdc-list-item__graphic,.mdc-list-item__graphic[dir=rtl]{margin-left:32px;margin-right:0}.mdc-list--icon-list .mdc-list-item__graphic{margin-left:0;margin-right:32px;width:24px;height:24px}[dir=rtl] .mdc-list--icon-list .mdc-list-item__graphic,.mdc-list--icon-list .mdc-list-item__graphic[dir=rtl]{margin-left:32px;margin-right:0}.mdc-list--avatar-list .mdc-list-item__graphic{margin-left:0;margin-right:16px;width:40px;height:40px;border-radius:50%}[dir=rtl] .mdc-list--avatar-list .mdc-list-item__graphic,.mdc-list--avatar-list .mdc-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}.mdc-list--thumbnail-list .mdc-list-item__graphic{margin-left:0;margin-right:16px;width:40px;height:40px}[dir=rtl] .mdc-list--thumbnail-list .mdc-list-item__graphic,.mdc-list--thumbnail-list .mdc-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}.mdc-list--image-list .mdc-list-item__graphic{margin-left:0;margin-right:16px;width:56px;height:56px}[dir=rtl] .mdc-list--image-list .mdc-list-item__graphic,.mdc-list--image-list .mdc-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}.mdc-list--video-list .mdc-list-item__graphic{margin-left:0;margin-right:16px;width:100px;height:56px}[dir=rtl] .mdc-list--video-list .mdc-list-item__graphic,.mdc-list--video-list .mdc-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}.mdc-list .mdc-list-item__graphic{display:-ms-inline-flexbox;display:inline-flex}.mdc-list-item__meta{margin-left:auto;margin-right:0}.mdc-list-item__meta:not(.material-icons){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}.mdc-list-item[dir=rtl] .mdc-list-item__meta,[dir=rtl] .mdc-list-item .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list--video-list .mdc-list-item__primary-text,.mdc-list--image-list .mdc-list-item__primary-text,.mdc-list--thumbnail-list .mdc-list-item__primary-text,.mdc-list--avatar-list .mdc-list-item__primary-text,.mdc-list--icon-list .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--video-list .mdc-list-item__primary-text::before,.mdc-list--image-list .mdc-list-item__primary-text::before,.mdc-list--thumbnail-list .mdc-list-item__primary-text::before,.mdc-list--avatar-list .mdc-list-item__primary-text::before,.mdc-list--icon-list .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list--video-list .mdc-list-item__primary-text::after,.mdc-list--image-list .mdc-list-item__primary-text::after,.mdc-list--thumbnail-list .mdc-list-item__primary-text::after,.mdc-list--avatar-list .mdc-list-item__primary-text::after,.mdc-list--icon-list .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list--dense .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--dense .mdc-list-item__primary-text::before{display:inline-block;width:0;height:24px;content:\"\";vertical-align:0}.mdc-list--dense .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list--dense .mdc-list-item__secondary-text{font-size:inherit}.mdc-list--dense .mdc-list-item{height:40px}.mdc-list--two-line .mdc-list-item__text{-ms-flex-item-align:start;align-self:flex-start}.mdc-list--two-line .mdc-list-item{height:64px}.mdc-list--two-line.mdc-list--video-list .mdc-list-item,.mdc-list--two-line.mdc-list--image-list .mdc-list-item,.mdc-list--two-line.mdc-list--thumbnail-list .mdc-list-item,.mdc-list--two-line.mdc-list--avatar-list .mdc-list-item,.mdc-list--two-line.mdc-list--icon-list .mdc-list-item{height:72px}.mdc-list--two-line.mdc-list--icon-list .mdc-list-item__graphic{-ms-flex-item-align:start;align-self:flex-start;margin-top:16px}.mdc-list--two-line.mdc-list--dense .mdc-list-item,.mdc-list--avatar-list.mdc-list--dense .mdc-list-item{height:60px}.mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic{margin-left:0;margin-right:16px;width:36px;height:36px}[dir=rtl] .mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic,.mdc-list--avatar-list.mdc-list--dense .mdc-list-item__graphic[dir=rtl]{margin-left:16px;margin-right:0}:not(.mdc-list-item--disabled).mdc-list-item{cursor:pointer}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-divider{height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid}.mdc-list-divider{border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-list-divider--padded{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-list-divider--padded,.mdc-list-divider--padded[dir=rtl]{margin-left:0;margin-right:16px}.mdc-list-divider--inset{margin-left:72px;margin-right:0;width:calc(100% - 72px)}[dir=rtl] .mdc-list-divider--inset,.mdc-list-divider--inset[dir=rtl]{margin-left:0;margin-right:72px}.mdc-list-divider--inset.mdc-list-divider--padded{margin-left:72px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-list-divider--inset.mdc-list-divider--padded,.mdc-list-divider--inset.mdc-list-divider--padded[dir=rtl]{margin-left:0;margin-right:72px}.mdc-list .mdc-list-divider--inset-leading{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-list .mdc-list-divider--inset-leading,.mdc-list .mdc-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:16px}.mdc-list .mdc-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing,.mdc-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:16px}.mdc-list .mdc-list-divider--inset-leading.mdc-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-list .mdc-list-divider--inset-leading.mdc-list-divider--padding,.mdc-list .mdc-list-divider--inset-leading.mdc-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding,.mdc-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-list--icon-list .mdc-list-divider--inset-leading{margin-left:72px;margin-right:0;width:calc(100% - 72px)}[dir=rtl] .mdc-list--icon-list .mdc-list-divider--inset-leading,.mdc-list--icon-list .mdc-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:72px}.mdc-list--icon-list .mdc-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-list--icon-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing{margin-left:72px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-list--icon-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing,.mdc-list--icon-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:72px}.mdc-list--icon-list .mdc-list-divider--inset-leading.mdc-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-list--icon-list .mdc-list-divider--inset-leading.mdc-list-divider--padding,.mdc-list--icon-list .mdc-list-divider--inset-leading.mdc-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-list--icon-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-list--icon-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding,.mdc-list--icon-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-list--avatar-list .mdc-list-divider--inset-leading{margin-left:72px;margin-right:0;width:calc(100% - 72px)}[dir=rtl] .mdc-list--avatar-list .mdc-list-divider--inset-leading,.mdc-list--avatar-list .mdc-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:72px}.mdc-list--avatar-list .mdc-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-list--avatar-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing{margin-left:72px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-list--avatar-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing,.mdc-list--avatar-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:72px}.mdc-list--avatar-list .mdc-list-divider--inset-leading.mdc-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-list--avatar-list .mdc-list-divider--inset-leading.mdc-list-divider--padding,.mdc-list--avatar-list .mdc-list-divider--inset-leading.mdc-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-list--avatar-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-list--avatar-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding,.mdc-list--avatar-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-list--thumbnail-list .mdc-list-divider--inset-leading{margin-left:72px;margin-right:0;width:calc(100% - 72px)}[dir=rtl] .mdc-list--thumbnail-list .mdc-list-divider--inset-leading,.mdc-list--thumbnail-list .mdc-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:72px}.mdc-list--thumbnail-list .mdc-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-list--thumbnail-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing{margin-left:72px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-list--thumbnail-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing,.mdc-list--thumbnail-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:72px}.mdc-list--thumbnail-list .mdc-list-divider--inset-leading.mdc-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-list--thumbnail-list .mdc-list-divider--inset-leading.mdc-list-divider--padding,.mdc-list--thumbnail-list .mdc-list-divider--inset-leading.mdc-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-list--thumbnail-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-list--thumbnail-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding,.mdc-list--thumbnail-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-list--image-list .mdc-list-divider--inset-leading{margin-left:88px;margin-right:0;width:calc(100% - 88px)}[dir=rtl] .mdc-list--image-list .mdc-list-divider--inset-leading,.mdc-list--image-list .mdc-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:88px}.mdc-list--image-list .mdc-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-list--image-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing{margin-left:88px;margin-right:0;width:calc(100% - 104px)}[dir=rtl] .mdc-list--image-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing,.mdc-list--image-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:88px}.mdc-list--image-list .mdc-list-divider--inset-leading.mdc-list-divider--padding{margin-left:16px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-list--image-list .mdc-list-divider--inset-leading.mdc-list-divider--padding,.mdc-list--image-list .mdc-list-divider--inset-leading.mdc-list-divider--padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-list--image-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding{margin-left:16px;margin-right:0;width:calc(100% - 32px)}[dir=rtl] .mdc-list--image-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding,.mdc-list--image-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:16px}.mdc-list--video-list .mdc-list-divider--inset-leading{margin-left:116px;margin-right:0;width:calc(100% - 116px)}[dir=rtl] .mdc-list--video-list .mdc-list-divider--inset-leading,.mdc-list--video-list .mdc-list-divider--inset-leading[dir=rtl]{margin-left:0;margin-right:116px}.mdc-list--video-list .mdc-list-divider--inset-trailing{width:calc(100% - 16px)}.mdc-list--video-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing{margin-left:116px;margin-right:0;width:calc(100% - 132px)}[dir=rtl] .mdc-list--video-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing,.mdc-list--video-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing[dir=rtl]{margin-left:0;margin-right:116px}.mdc-list--video-list .mdc-list-divider--inset-leading.mdc-list-divider--padding{margin-left:0px;margin-right:0;width:calc(100% - 0px)}[dir=rtl] .mdc-list--video-list .mdc-list-divider--inset-leading.mdc-list-divider--padding,.mdc-list--video-list .mdc-list-divider--inset-leading.mdc-list-divider--padding[dir=rtl]{margin-left:0;margin-right:0px}.mdc-list--video-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding{margin-left:0px;margin-right:0;width:calc(100% - 16px)}[dir=rtl] .mdc-list--video-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding,.mdc-list--video-list .mdc-list-divider--inset-leading.mdc-list-divider--inset-trailing.mdc-list-divider--inset-padding[dir=rtl]{margin-left:0;margin-right:0px}.mdc-list-group .mdc-list{padding:0}.mdc-list-group__subheader{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);margin:calc((3rem - 1.5rem) / 2) 16px}@-webkit-keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-radius-in{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@-webkit-keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-in{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@-webkit-keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}@keyframes mdc-ripple-fg-opacity-out{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:not(.mdc-list-item--disabled).mdc-list-item{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before{-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:1}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded .mdc-list-item__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple::after{background-color:#000}:not(.mdc-list-item--disabled).mdc-list-item:hover .mdc-list-item__ripple::before{opacity:0.04}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}:not(.mdc-list-item--disabled).mdc-list-item:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}:not(.mdc-list-item--disabled).mdc-list-item.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}:not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple::before{opacity:0.12}:not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item--activated .mdc-list-item__ripple::after{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}:not(.mdc-list-item--disabled).mdc-list-item--activated:hover .mdc-list-item__ripple::before{opacity:0.16}:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.24}:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}:not(.mdc-list-item--disabled).mdc-list-item--activated:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.24}:not(.mdc-list-item--disabled).mdc-list-item--activated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}:not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple::before{opacity:0.08}:not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item--selected .mdc-list-item__ripple::after{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}:not(.mdc-list-item--disabled).mdc-list-item--selected:hover .mdc-list-item__ripple::before{opacity:0.12}:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.2}:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}:not(.mdc-list-item--disabled).mdc-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.2}:not(.mdc-list-item--disabled).mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.2}:not(.mdc-list-item--disabled).mdc-list-item .mdc-list-item__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-list-item--disabled{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-list-item--disabled .mdc-list-item__ripple::before,.mdc-list-item--disabled .mdc-list-item__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-list-item--disabled .mdc-list-item__ripple::before{-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:1}.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-list-item--disabled.mdc-ripple-upgraded--unbounded .mdc-list-item__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-activation .mdc-list-item__ripple::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-list-item--disabled.mdc-ripple-upgraded--foreground-deactivation .mdc-list-item__ripple::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-list-item--disabled .mdc-list-item__ripple::before,.mdc-list-item--disabled .mdc-list-item__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-list-item--disabled.mdc-ripple-upgraded .mdc-list-item__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-list-item--disabled .mdc-list-item__ripple::before,.mdc-list-item--disabled .mdc-list-item__ripple::after{background-color:#000}.mdc-list-item--disabled.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-list-item--disabled:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-list-item--disabled .mdc-list-item__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-menu-surface{display:none;position:absolute;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:calc(100vw - 32px);max-height:calc(100vh - 32px);margin:0;padding:0;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:top left;transform-origin:top left;opacity:0;overflow:auto;will-change:transform, opacity;z-index:8;-webkit-transition:opacity 0.03s linear, -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);transition:opacity 0.03s linear, -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);transition:opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1);transition:opacity 0.03s linear, transform 0.12s cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0.12s cubic-bezier(0, 0, 0.2, 1);-webkit-box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);background-color:#fff;background-color:var(--mdc-theme-surface, #fff);color:#000;color:var(--mdc-theme-on-surface, #000);border-radius:4px;border-radius:var(--mdc-shape-medium, 4px);transform-origin-left:top left;transform-origin-right:top right}.mdc-menu-surface:focus{outline:none}.mdc-menu-surface--open{display:inline-block;-webkit-transform:scale(1);transform:scale(1);opacity:1}.mdc-menu-surface--animating-open{display:inline-block;-webkit-transform:scale(0.8);transform:scale(0.8);opacity:0}.mdc-menu-surface--animating-closed{display:inline-block;opacity:0;-webkit-transition:opacity 0.075s linear;transition:opacity 0.075s linear}[dir=rtl] .mdc-menu-surface,.mdc-menu-surface[dir=rtl]{transform-origin-left:top right;transform-origin-right:top left}.mdc-menu-surface--anchor{position:relative;overflow:visible}.mdc-menu-surface--fixed{position:fixed}.mdc-menu-surface--fullwidth{width:100%}.mdc-elevation-overlay{position:absolute;border-radius:inherit;opacity:0;pointer-events:none;-webkit-transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff}.mdc-menu{min-width:112px}.mdc-menu .mdc-list-item__meta{color:rgba(0, 0, 0, 0.87)}.mdc-menu .mdc-list-item__graphic{color:rgba(0, 0, 0, 0.87)}.mdc-menu .mdc-list{color:rgba(0, 0, 0, 0.87);position:relative}.mdc-menu .mdc-list .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-menu .mdc-list-divider{margin:8px 0}.mdc-menu .mdc-list-item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.mdc-menu .mdc-list-item--disabled{cursor:auto}.mdc-menu a.mdc-list-item .mdc-list-item__text,.mdc-menu a.mdc-list-item .mdc-list-item__graphic{pointer-events:none}.mdc-menu__selection-group{padding:0;fill:currentColor}.mdc-menu__selection-group .mdc-list-item{padding-left:56px;padding-right:16px}[dir=rtl] .mdc-menu__selection-group .mdc-list-item,.mdc-menu__selection-group .mdc-list-item[dir=rtl]{padding-left:16px;padding-right:56px}.mdc-menu__selection-group .mdc-menu__selection-group-icon{left:16px;right:initial;display:none;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}[dir=rtl] .mdc-menu__selection-group .mdc-menu__selection-group-icon,.mdc-menu__selection-group .mdc-menu__selection-group-icon[dir=rtl]{left:initial;right:16px}.mdc-menu-item--selected .mdc-menu__selection-group-icon{display:inline}.mdc-select-helper-text{margin:0;margin-left:16px;margin-right:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit);display:block;margin-top:0;line-height:normal}[dir=rtl] .mdc-select-helper-text,.mdc-select-helper-text[dir=rtl]{margin-left:16px;margin-right:16px}.mdc-select-helper-text::before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}.mdc-select-helper-text--validation-msg{opacity:0;-webkit-transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-select--invalid+.mdc-select-helper-text--validation-msg,.mdc-select-helper-text--validation-msg-persistent{opacity:1}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:center;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex=\"-1\"]{cursor:default;pointer-events:none}.mdc-floating-label{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);position:absolute;left:0;-webkit-transform-origin:left top;transform-origin:left top;line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform;-webkit-transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 150ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-floating-label,.mdc-floating-label[dir=rtl]{right:0;left:auto;-webkit-transform-origin:right top;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--required::after{margin-left:1px;margin-right:0px;content:\"*\"}[dir=rtl] .mdc-floating-label--required::after,.mdc-floating-label--required[dir=rtl]::after{margin-left:0;margin-right:1px}.mdc-floating-label--float-above{-webkit-transform:translateY(-106%) scale(0.75);transform:translateY(-106%) scale(0.75)}.mdc-floating-label--shake{-webkit-animation:mdc-floating-label-shake-float-above-standard 250ms 1;animation:mdc-floating-label-shake-float-above-standard 250ms 1}@-webkit-keyframes mdc-floating-label-shake-float-above-standard{0%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}@keyframes mdc-floating-label-shake-float-above-standard{0%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75);transform:translateX(calc(4% - 0%)) translateY(-106%) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75);transform:translateX(calc(-4% - 0%)) translateY(-106%) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75);transform:translateX(calc(0 - 0%)) translateY(-106%) scale(0.75)}}.mdc-line-ripple::before,.mdc-line-ripple::after{position:absolute;bottom:0;left:0;width:100%;border-bottom-style:solid;content:\"\"}.mdc-line-ripple::before{border-bottom-width:1px;z-index:1}.mdc-line-ripple::after{-webkit-transform:scaleX(0);transform:scaleX(0);border-bottom-width:2px;opacity:0;z-index:2}.mdc-line-ripple::after{-webkit-transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 180ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-line-ripple--active::after{-webkit-transform:scaleX(1);transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating::after{opacity:0}.mdc-notched-outline{display:-ms-flexbox;display:flex;position:absolute;top:0;right:0;left:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}[dir=rtl] .mdc-notched-outline,.mdc-notched-outline[dir=rtl]{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{-webkit-box-sizing:border-box;box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}[dir=rtl] .mdc-notched-outline__leading,.mdc-notched-outline__leading[dir=rtl]{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;-ms-flex-positive:1;flex-grow:1}[dir=rtl] .mdc-notched-outline__trailing,.mdc-notched-outline__trailing[dir=rtl]{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / 0.75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch,.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl]{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}.mdc-select__anchor{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-select__anchor .mdc-select__ripple::before{-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:1}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-select__anchor.mdc-ripple-upgraded--unbounded .mdc-select__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-select__anchor.mdc-ripple-upgraded--foreground-activation .mdc-select__ripple::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-select__anchor.mdc-ripple-upgraded--foreground-deactivation .mdc-select__ripple::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-select__anchor.mdc-ripple-upgraded .mdc-select__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-select__anchor .mdc-select__ripple::before,.mdc-select__anchor .mdc-select__ripple::after{background-color:rgba(0, 0, 0, 0.87)}.mdc-select__anchor:hover .mdc-select__ripple::before{opacity:0.04}.mdc-select__anchor.mdc-ripple-upgraded--background-focused .mdc-select__ripple::before,.mdc-select__anchor:not(.mdc-ripple-upgraded):focus .mdc-select__ripple::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-select__anchor .mdc-select__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.mdc-select__menu .mdc-list .mdc-list-item--selected .mdc-list-item__ripple::before,.mdc-select__menu .mdc-list .mdc-list-item--selected .mdc-list-item__ripple::after{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list .mdc-list-item--selected:hover .mdc-list-item__ripple::before{opacity:0.04}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded--background-focused .mdc-list-item__ripple::before,.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):focus .mdc-list-item__ripple::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded) .mdc-list-item__ripple::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-select__menu .mdc-list .mdc-list-item--selected:not(.mdc-ripple-upgraded):active .mdc-list-item__ripple::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-select__menu .mdc-list .mdc-list-item--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-select{min-width:200px;display:-ms-inline-flexbox;display:inline-flex;position:relative}.mdc-select:not(.mdc-select--disabled) .mdc-select__anchor{background-color:whitesmoke}.mdc-select:not(.mdc-select--disabled) .mdc-select__selected-text{color:rgba(0, 0, 0, 0.87)}.mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.42)}.mdc-select:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#6200ee;fill:var(--mdc-theme-primary, #6200ee)}.mdc-select:not(.mdc-select--disabled)+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.6)}.mdc-select:not(.mdc-select--disabled) .mdc-select__icon{color:rgba(0, 0, 0, 0.54)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple::after{border-bottom-color:#6200ee;border-bottom-color:var(--mdc-theme-primary, #6200ee)}.mdc-select:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:rgba(98, 0, 238, 0.87)}.mdc-select:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.87)}.mdc-select.mdc-select--disabled .mdc-select__anchor{background-color:#fafafa}.mdc-select.mdc-select--disabled .mdc-floating-label{color:rgba(0, 0, 0, 0.38)}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:rgba(0, 0, 0, 0.06)}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:rgba(0, 0, 0, 0.38)}.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:rgba(0, 0, 0, 0.38)}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:rgba(0, 0, 0, 0.38)}.mdc-select.mdc-select--disabled .mdc-select__icon{color:rgba(0, 0, 0, 0.38)}@media screen and (-ms-high-contrast: active){.mdc-select.mdc-select--disabled .mdc-select__selected-text{color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__dropdown-icon{fill:red}.mdc-select.mdc-select--disabled .mdc-floating-label{color:GrayText}.mdc-select.mdc-select--disabled .mdc-line-ripple::before{border-bottom-color:GrayText}.mdc-select.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select.mdc-select--disabled .mdc-notched-outline__trailing{border-color:GrayText}.mdc-select.mdc-select--disabled .mdc-select__icon{color:GrayText}.mdc-select.mdc-select--disabled+.mdc-select-helper-text{color:GrayText}}.mdc-select .mdc-floating-label{left:16px;right:initial;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);pointer-events:none}[dir=rtl] .mdc-select .mdc-floating-label,.mdc-select .mdc-floating-label[dir=rtl]{left:initial;right:16px}.mdc-select.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 64px)}.mdc-select.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 64px / 0.75)}.mdc-select.mdc-select--outlined .mdc-floating-label{left:4px;right:initial}[dir=rtl] .mdc-select.mdc-select--outlined .mdc-floating-label,.mdc-select.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:4px}.mdc-select .mdc-select__anchor{height:56px;display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline}.mdc-select .mdc-select__anchor::before{display:inline-block;width:0;height:40px;content:\"\";vertical-align:0}.mdc-select.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text::before{content:\"​\"}.mdc-select.mdc-select--no-label .mdc-select__anchor .mdc-select__selected-text{height:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.mdc-select.mdc-select--no-label .mdc-select__anchor::before{display:none}.mdc-select .mdc-select__anchor{border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.mdc-select .mdc-select__anchor{padding-left:16px;padding-right:0}[dir=rtl] .mdc-select .mdc-select__anchor,.mdc-select .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:16px}.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor{padding-left:0;padding-right:0}[dir=rtl] .mdc-select.mdc-select--with-leading-icon .mdc-select__anchor,.mdc-select.mdc-select--with-leading-icon .mdc-select__anchor[dir=rtl]{padding-left:0;padding-right:0}.mdc-select .mdc-select__icon{width:24px;height:24px;font-size:24px}.mdc-select .mdc-select__dropdown-icon{width:24px;height:24px}.mdc-select .mdc-select__menu .mdc-list-item{padding-left:16px;padding-right:16px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-list-item,.mdc-select .mdc-select__menu .mdc-list-item[dir=rtl]{padding-left:16px;padding-right:16px}.mdc-select .mdc-select__menu .mdc-list-item__graphic{margin-left:0;margin-right:12px}[dir=rtl] .mdc-select .mdc-select__menu .mdc-list-item__graphic,.mdc-select .mdc-select__menu .mdc-list-item__graphic[dir=rtl]{margin-left:12px;margin-right:0}.mdc-select__dropdown-icon{margin-left:12px;margin-right:12px;display:-ms-inline-flexbox;display:inline-flex;position:relative;-ms-flex-item-align:center;align-self:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-negative:0;flex-shrink:0;pointer-events:none}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active,.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{position:absolute;top:0;left:0}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-graphic{width:41.6666666667%;height:20.8333333333%}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:1;-webkit-transition:opacity 75ms linear 75ms;transition:opacity 75ms linear 75ms}.mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:0;-webkit-transition:opacity 75ms linear;transition:opacity 75ms linear}[dir=rtl] .mdc-select__dropdown-icon,.mdc-select__dropdown-icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-inactive{opacity:0;-webkit-transition:opacity 49.5ms linear;transition:opacity 49.5ms linear}.mdc-select--activated .mdc-select__dropdown-icon .mdc-select__dropdown-icon-active{opacity:1;-webkit-transition:opacity 100.5ms linear 49.5ms;transition:opacity 100.5ms linear 49.5ms}.mdc-select__anchor{width:100%;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;outline:none;cursor:pointer}.mdc-select__anchor .mdc-floating-label--float-above{-webkit-transform:translateY(-106%) scale(0.75);transform:translateY(-106%) scale(0.75)}.mdc-select__anchor.mdc-select--focused.mdc-line-ripple::after{-webkit-transform:scale(1, 2);transform:scale(1, 2);opacity:1}.mdc-select__selected-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;-webkit-text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);-webkit-box-sizing:border-box;box-sizing:border-box;width:auto;-ms-flex-positive:1;flex-grow:1;height:28px;border:none;outline:none;padding:0;white-space:nowrap;-webkit-appearance:none;-moz-appearance:none;appearance:none;pointer-events:none;overflow:hidden;background-color:transparent;color:inherit}.mdc-select__selected-text::-ms-expand{display:none}.mdc-select__selected-text::-ms-value{background-color:transparent;color:inherit}.mdc-select--outlined{border:none}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.38)}.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.87)}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__leading,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__notch,.mdc-select--outlined.mdc-select--disabled .mdc-notched-outline__trailing{border-color:rgba(0, 0, 0, 0.06)}.mdc-select--outlined.mdc-select--disabled .mdc-select__anchor{background-color:transparent}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-top-left-radius:4px;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl]{border-top-left-radius:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:0}.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-top-left-radius:0;border-top-right-radius:4px;border-bottom-right-radius:4px;border-bottom-left-radius:0}[dir=rtl] .mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing,.mdc-select--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl]{border-top-left-radius:4px;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:4px}.mdc-select--outlined .mdc-select__selected-text{border-radius:4px}.mdc-select--outlined:not(.mdc-select--disabled) .mdc-select__anchor{background-color:transparent}.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 60px)}.mdc-select--outlined .mdc-select__anchor{overflow:visible}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--shake{-webkit-animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1;animation:mdc-floating-label-shake-float-above-select-outlined 250ms 1}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{-webkit-transform:translateY(-37.25px) scale(1);transform:translateY(-37.25px) scale(1)}.mdc-select--outlined .mdc-select__anchor .mdc-floating-label--float-above{font-size:0.75rem}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{-webkit-transform:translateY(-34.75px) scale(0.75);transform:translateY(-34.75px) scale(0.75)}.mdc-select--outlined .mdc-select__anchor.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--outlined .mdc-select__anchor .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text::before{content:\"​\"}.mdc-select--outlined .mdc-select__anchor .mdc-select__selected-text{height:100%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.mdc-select--outlined .mdc-select__anchor::before{display:none}.mdc-select--outlined .mdc-select__selected-text{display:-ms-flexbox;display:flex;border:none;z-index:1;background-color:transparent}.mdc-select--outlined .mdc-select__icon{z-index:2}.mdc-select--outlined .mdc-floating-label{line-height:1.15rem}.mdc-select--outlined.mdc-select--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:2px}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-line-ripple::after{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-floating-label{color:#b00020}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--invalid+.mdc-select-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled) .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled).mdc-select--focused .mdc-select__dropdown-icon{fill:#b00020;fill:var(--mdc-theme-error, #b00020)}.mdc-select--invalid:not(.mdc-select--disabled):hover .mdc-line-ripple::before{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled):not(.mdc-select--focused) .mdc-select__anchor:hover .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-width:2px}.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__leading,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__notch,.mdc-select--invalid.mdc-select--outlined:not(.mdc-select--disabled).mdc-select--focused .mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error, #b00020)}.mdc-select--disabled{cursor:default;pointer-events:none}.mdc-select--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir=rtl] .mdc-select--with-leading-icon .mdc-floating-label,.mdc-select--with-leading-icon .mdc-floating-label[dir=rtl]{left:initial;right:48px}.mdc-select--with-leading-icon .mdc-select__menu .mdc-list-item{padding-left:12px;padding-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__menu .mdc-list-item,.mdc-select--with-leading-icon .mdc-select__menu .mdc-list-item[dir=rtl]{padding-left:12px;padding-right:12px}.mdc-select--with-leading-icon.mdc-select--filled .mdc-floating-label{max-width:calc(100% - 96px)}.mdc-select--with-leading-icon.mdc-select--filled .mdc-floating-label--float-above{max-width:calc(100% / 0.75 - 96px / 0.75)}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label{left:36px;right:initial}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label[dir=rtl]{left:initial;right:36px}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above{-webkit-transform:translateY(-37.25px) translateX(-32px) scale(1);transform:translateY(-37.25px) translateX(-32px) scale(1)}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above[dir=rtl]{-webkit-transform:translateY(-37.25px) translateX(32px) scale(1);transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--float-above{font-size:0.75rem}.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{-webkit-transform:translateY(-34.75px) translateX(-32px) scale(0.75);transform:translateY(-34.75px) translateX(-32px) scale(0.75)}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl]{-webkit-transform:translateY(-34.75px) translateX(32px) scale(0.75);transform:translateY(-34.75px) translateX(32px) scale(0.75)}.mdc-select--with-leading-icon.mdc-select--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-select--with-leading-icon.mdc-select--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--shake{-webkit-animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1;animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@-webkit-keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{-webkit-transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px{0%{-webkit-transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(4% - 32px)) translateY(-34.75px) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(-4% - 32px)) translateY(-34.75px) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - 32px)) translateY(-34.75px) scale(0.75)}}[dir=rtl] .mdc-select--with-leading-icon.mdc-select--outlined .mdc-floating-label--shake,.mdc-select--with-leading-icon.mdc-select--outlined[dir=rtl] .mdc-floating-label--shake{-webkit-animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1;animation:mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px 250ms 1}@-webkit-keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{-webkit-transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}@keyframes mdc-floating-label-shake-float-above-select-outlined-leading-icon-56px-rtl{0%{-webkit-transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}33%{-webkit-animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);-webkit-transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(4% - -32px)) translateY(-34.75px) scale(0.75)}66%{-webkit-animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);-webkit-transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(-4% - -32px)) translateY(-34.75px) scale(0.75)}100%{-webkit-transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75);transform:translateX(calc(0 - -32px)) translateY(-34.75px) scale(0.75)}}.mdc-select--with-leading-icon.mdc-select--outlined .mdc-select__anchor :not(.mdc-notched-outline--notched) .mdc-notched-outline__notch{max-width:calc(100% - 96px)}.mdc-select--filled .mdc-menu-surface--is-open-below{border-top-left-radius:0px;border-top-right-radius:0px}.mdc-select__menu .mdc-select__icon{margin-left:0;margin-right:0}[dir=rtl] .mdc-select__menu .mdc-select__icon,.mdc-select__menu .mdc-select__icon[dir=rtl]{margin-left:0;margin-right:0}.mdc-select__menu .mdc-list .mdc-list-item--selected,.mdc-select__menu .mdc-list .mdc-list-item--activated{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select__menu .mdc-list .mdc-list-item--selected .mdc-list-item__graphic,.mdc-select__menu .mdc-list .mdc-list-item--activated .mdc-list-item__graphic{color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-select--with-leading-icon .mdc-select__icon{display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;border:none;text-decoration:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-ms-flex-negative:0;flex-shrink:0;-ms-flex-item-align:center;align-self:center;background-color:transparent;fill:currentColor}.mdc-select--with-leading-icon .mdc-select__icon{margin-left:12px;margin-right:12px}[dir=rtl] .mdc-select--with-leading-icon .mdc-select__icon,.mdc-select--with-leading-icon .mdc-select__icon[dir=rtl]{margin-left:12px;margin-right:12px}.mdc-select__icon:not([tabindex]),.mdc-select__icon[tabindex=\"-1\"]{cursor:default;pointer-events:none}.mdc-touch-target-wrapper{display:inline}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;-webkit-text-decoration:var(--mdc-typography-button-text-decoration, none);text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding:0 8px 0 8px;position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);height:36px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised{-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);-webkit-transition:-webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{-webkit-box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)}.mdc-button--raised:active{-webkit-box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)}.mdc-button--raised:disabled{-webkit-box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0, 0, 0, 0)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button .mdc-button__ripple::before{-webkit-transition:opacity 15ms linear, background-color 15ms linear;transition:opacity 15ms linear, background-color 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::before{-webkit-transform:scale(var(--mdc-ripple-fg-scale, 1));transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded .mdc-button__ripple::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation .mdc-button__ripple::after{-webkit-animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards;animation:mdc-ripple-fg-radius-in 225ms forwards, mdc-ripple-fg-opacity-in 75ms forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation .mdc-button__ripple::after{-webkit-animation:mdc-ripple-fg-opacity-out 150ms;animation:mdc-ripple-fg-opacity-out 150ms;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded .mdc-button__ripple::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button .mdc-button__ripple::before,.mdc-button .mdc-button__ripple::after{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button:hover .mdc-button__ripple::before{opacity:0.04}.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-button:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.12}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-button .mdc-button__ripple{position:absolute;-webkit-box-sizing:content-box;box-sizing:content-box;width:100%;height:100%;overflow:hidden}.mdc-button:not(.mdc-button--outlined) .mdc-button__ripple{top:0;left:0}.mdc-button--raised .mdc-button__ripple::before,.mdc-button--raised .mdc-button__ripple::after,.mdc-button--unelevated .mdc-button__ripple::before,.mdc-button--unelevated .mdc-button__ripple::after{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:hover .mdc-button__ripple::before,.mdc-button--unelevated:hover .mdc-button__ripple::before{opacity:0.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--raised:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused .mdc-button__ripple::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus .mdc-button__ripple::before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.24}.mdc-button--raised:not(.mdc-ripple-upgraded) .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded) .mdc-button__ripple::after{-webkit-transition:opacity 150ms linear;transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active .mdc-button__ripple::after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:0.24}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}/*!\n *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2020 Robert Bosch GmbH Copyright (C) 2020 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */@font-face{font-family:\"Bosch-Sans\";font-weight:400;src:url(\"..//fonts/BoschSans-Regular.eot\");src:url(\"..//fonts/BoschSans-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Regular.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Regular.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Regular.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Regular.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:300;src:url(\"..//fonts/BoschSans-Light.eot\");src:url(\"..//fonts/BoschSans-Light.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Light.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Light.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Light.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Light.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:500;src:url(\"..//fonts/BoschSans-Medium.eot\");src:url(\"..//fonts/BoschSans-Medium.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Medium.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Medium.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Medium.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Medium.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:700;src:url(\"..//fonts/BoschSans-Bold.eot\");src:url(\"..//fonts/BoschSans-Bold.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Bold.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Bold.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Bold.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Bold.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:900;src:url(\"..//fonts/BoschSans-Black.eot\");src:url(\"..//fonts/BoschSans-Black.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Black.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Black.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Black.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Black.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Ic\";font-style:normal;font-stretch:normal;font-weight:normal;src:url(\"..//fonts/Bosch-Icon.eot?mh5qa9\");src:url(\"..//fonts/Bosch-Icon.eot?mh5qa9#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/Bosch-Icon.ttf?mh5qa9\") format(\"truetype\"), url(\"..//fonts/Bosch-Icon.woff?mh5qa9\") format(\"woff\"), url(\"..//fonts/Bosch-Icon.svg?mh5qa9#Bosch-Icon\") format(\"svg\")}/*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2020 Robert Bosch GmbH Copyright (C) 2020 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */body{margin:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}main,*{font-family:\"Bosch-Sans\"}::-moz-selection{background-color:#008ECF}::selection,::-moz-selection{background-color:#008ECF}a::-moz-selection{color:#FFFFFF}.lead{margin-bottom:22px;font-size:18px;font-weight:300;line-height:1.4}@media (min-width: 768px){.lead{font-size:24px}}/*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.bosch-ic,.Bosch-Ic{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic:before,.Bosch-Ic:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:24px;vertical-align:middle}.bosch-ic-large,.Bosch-Ic-Large{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic-large:before,.Bosch-Ic-Large:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:28px;vertical-align:middle}.bosch-ic-medium,.Bosch-Ic-Medium{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic-medium:before,.Bosch-Ic-Medium:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:24px;vertical-align:middle}.bosch-ic-normal,.Bosch-Ic-Normal{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic-normal:before,.Bosch-Ic-Normal:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:20px;vertical-align:middle}.bosch-ic-small,.Bosch-Ic-Small{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic-small:before,.Bosch-Ic-Small:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:16px;vertical-align:middle}.Bosch-Ic-Disabled,.bosch-ic-disabled,.Bosch-Ic-Disabled:hover,.bosch-ic-disabled:hover,.Bosch-Ic[disabled],.bosch-ic[disabled],.Bosch-Ic[disabled]:hover,.bosch-ic[disabled]:hover{cursor:not-allowed;color:#d4d7da}.Bosch-Ic-Disabled:hover,.bosch-ic-disabled:hover,.Bosch-Ic-Disabled:hover:hover,.bosch-ic-disabled:hover:hover,.Bosch-Ic[disabled]:hover,.bosch-ic[disabled]:hover,.Bosch-Ic[disabled]:hover:hover,.bosch-ic[disabled]:hover:hover{color:#d4d7da}.bosch-ic-clickable,.Bosch-Ic-Clickable{cursor:pointer}.bosch-ic-clickable:hover,.Bosch-Ic-Clickable:hover{color:#7FC6E7}.bosch-ic-clickable:active,.Bosch-Ic-Clickable:active{color:#008ECF}.bosch-ic-clickable:disabled,.bosch-ic-clickable.disabled,.Bosch-Ic-Clickable:disabled,.Bosch-Ic-Clickable.disabled{color:#a8afb5;cursor:not-allowed}.bosch-ic-activated,.Bosch-Ic-Activated{color:#008ECF}.bosch-ic-3d-print:before{content:\"\"}.bosch-ic-a-to-b:before{content:\"\"}.bosch-ic-add:before{content:\"\"}.bosch-ic-address-consumer-data:before{content:\"\"}.bosch-ic-adress-book:before{content:\"\"}.bosch-ic-agility:before{content:\"\"}.bosch-ic-alarm-clock:before{content:\"\"}.bosch-ic-ambulance:before{content:\"\"}.bosch-ic-analysis:before{content:\"\"}.bosch-ic-anchor:before{content:\"\"}.bosch-ic-arrow-down:before{content:\"\"}.bosch-ic-arrow-left:before{content:\"\"}.bosch-ic-arrow-left-down:before{content:\"\"}.bosch-ic-arrow-left-up:before{content:\"\"}.bosch-ic-arrow-right:before{content:\"\"}.bosch-ic-arrow-right-down:before{content:\"\"}.bosch-ic-arrow-right-up:before{content:\"\"}.bosch-ic-arrow-turn-left:before{content:\"\"}.bosch-ic-arrow-turn-right:before{content:\"\"}.bosch-ic-arrow-up:before{content:\"\"}.bosch-ic-arrows:before{content:\"\"}.bosch-ic-arrows-x-y-z:before{content:\"\"}.bosch-ic-artificial-intelligence:before{content:\"\"}.bosch-ic-assembly-line:before{content:\"\"}.bosch-ic-atom:before{content:\"\"}.bosch-ic-augmented-reality:before{content:\"\"}.bosch-ic-autobod:before{content:\"\"}.bosch-ic-back-left:before{content:\"\"}.bosch-ic-back-left-double:before{content:\"\"}.bosch-ic-bar-chart:before{content:\"\"}.bosch-ic-bar-chart-double:before{content:\"\"}.bosch-ic-battery-0:before{content:\"\"}.bosch-ic-battery-1:before{content:\"\"}.bosch-ic-battery-2:before{content:\"\"}.bosch-ic-battery-3:before{content:\"\"}.bosch-ic-battery-4:before{content:\"\"}.bosch-ic-battery-fail:before{content:\"\"}.bosch-ic-battery-li-ion:before{content:\"\"}.bosch-ic-battery-loading:before{content:\"\"}.bosch-ic-bed:before{content:\"\"}.bosch-ic-bicycle:before{content:\"\"}.bosch-ic-bicycle-e:before{content:\"\"}.bosch-ic-blog:before{content:\"\"}.bosch-ic-bluetooth:before{content:\"\"}.bosch-ic-bluetooth-le:before{content:\"\"}.bosch-ic-board-speaker:before{content:\"\"}.bosch-ic-boiler-connected:before{content:\"\"}.bosch-ic-book:before{content:\"\"}.bosch-ic-bookmark:before{content:\"\"}.bosch-ic-bookmark-add:before{content:\"\"}.bosch-ic-bookmark-check:before{content:\"\"}.bosch-ic-bookmark-delete:before{content:\"\"}.bosch-ic-books:before{content:\"\"}.bosch-ic-bookshelf:before{content:\"\"}.bosch-ic-box:before{content:\"\"}.bosch-ic-box-closed:before{content:\"\"}.bosch-ic-box-delivery:before{content:\"\"}.bosch-ic-box-delivery-connected:before{content:\"\"}.bosch-ic-brake-disk:before{content:\"\"}.bosch-ic-briefcase:before{content:\"\"}.bosch-ic-broom:before{content:\"\"}.bosch-ic-broom-cloud-dirt:before{content:\"\"}.bosch-ic-brush:before{content:\"\"}.bosch-ic-bug:before{content:\"\"}.bosch-ic-building:before{content:\"\"}.bosch-ic-cactus:before{content:\"\"}.bosch-ic-calculate:before{content:\"\"}.bosch-ic-calendar:before{content:\"\"}.bosch-ic-calendar-add:before{content:\"\"}.bosch-ic-calendar-settings:before{content:\"\"}.bosch-ic-call:before{content:\"\"}.bosch-ic-call-add:before{content:\"\"}.bosch-ic-call-remove:before{content:\"\"}.bosch-ic-call-sos:before{content:\"\"}.bosch-ic-call-team:before{content:\"\"}.bosch-ic-call-wifi:before{content:\"\"}.bosch-ic-camera:before{content:\"\"}.bosch-ic-camera-switch:before{content:\"\"}.bosch-ic-car:before{content:\"\"}.bosch-ic-car-clock:before{content:\"\"}.bosch-ic-car-connected:before{content:\"\"}.bosch-ic-car-locator:before{content:\"\"}.bosch-ic-car-mechanic:before{content:\"\"}.bosch-ic-car-rental:before{content:\"\"}.bosch-ic-car-seat-connected:before{content:\"\"}.bosch-ic-car-side:before{content:\"\"}.bosch-ic-car-side-user:before{content:\"\"}.bosch-ic-cart:before{content:\"\"}.bosch-ic-certificate:before{content:\"\"}.bosch-ic-certificate-pki:before{content:\"\"}.bosch-ic-change:before{content:\"\"}.bosch-ic-chart-bar:before{content:\"\"}.bosch-ic-chart-check:before{content:\"\"}.bosch-ic-chart-dummy:before{content:\"\"}.bosch-ic-chart-line:before{content:\"\"}.bosch-ic-chat:before{content:\"\"}.bosch-ic-chat-add:before{content:\"\"}.bosch-ic-chat-question-answer:before{content:\"\"}.bosch-ic-chat-remove:before{content:\"\"}.bosch-ic-checklist:before{content:\"\"}.bosch-ic-checkmark:before{content:\"\"}.bosch-ic-chip:before{content:\"\"}.bosch-ic-circle-segment:before{content:\"\"}.bosch-ic-clear-all:before{content:\"\"}.bosch-ic-clipboard:before{content:\"\"}.bosch-ic-clipboard-list:before{content:\"\"}.bosch-ic-clock:before{content:\"\"}.bosch-ic-close:before{content:\"\"}.bosch-ic-close-all:before{content:\"\"}.bosch-ic-cloud:before{content:\"\"}.bosch-ic-cloud-co2:before{content:\"\"}.bosch-ic-cloud-download:before{content:\"\"}.bosch-ic-cloud-nox:before{content:\"\"}.bosch-ic-cloud-upload:before{content:\"\"}.bosch-ic-club-arm-chair:before{content:\"\"}.bosch-ic-coffee-break:before{content:\"\"}.bosch-ic-coin-currency:before{content:\"\"}.bosch-ic-coin-dollar:before{content:\"\"}.bosch-ic-colorpicker:before{content:\"\"}.bosch-ic-colors:before{content:\"\"}.bosch-ic-command:before{content:\"\"}.bosch-ic-communicator:before{content:\"\"}.bosch-ic-compare:before{content:\"\"}.bosch-ic-components:before{content:\"\"}.bosch-ic-components-available:before{content:\"\"}.bosch-ic-components-reservation:before{content:\"\"}.bosch-ic-concierge-bell:before{content:\"\"}.bosch-ic-configuration:before{content:\"\"}.bosch-ic-confirmation:before{content:\"\"}.bosch-ic-connection-off:before{content:\"\"}.bosch-ic-connection-on:before{content:\"\"}.bosch-ic-connectivity:before{content:\"\"}.bosch-ic-construction:before{content:\"\"}.bosch-ic-consumer-goods:before{content:\"\"}.bosch-ic-contract:before{content:\"\"}.bosch-ic-copy:before{content:\"\"}.bosch-ic-cube:before{content:\"\"}.bosch-ic-cube-arrows:before{content:\"\"}.bosch-ic-cube-filled:before{content:\"\"}.bosch-ic-cube-shock:before{content:\"\"}.bosch-ic-cube-stacked:before{content:\"\"}.bosch-ic-customerservice:before{content:\"\"}.bosch-ic-cutlery:before{content:\"\"}.bosch-ic-damper:before{content:\"\"}.bosch-ic-danger-flash:before{content:\"\"}.bosch-ic-data-loss:before{content:\"\"}.bosch-ic-dealer-details:before{content:\"\"}.bosch-ic-delete:before{content:\"\"}.bosch-ic-delivery:before{content:\"\"}.bosch-ic-denied:before{content:\"\"}.bosch-ic-desktop:before{content:\"\"}.bosch-ic-desktop-application-2d:before{content:\"\"}.bosch-ic-desktop-application-3d:before{content:\"\"}.bosch-ic-development:before{content:\"\"}.bosch-ic-devices:before{content:\"\"}.bosch-ic-devices-mobile:before{content:\"\"}.bosch-ic-directory:before{content:\"\"}.bosch-ic-dna:before{content:\"\"}.bosch-ic-do-not-disturb:before{content:\"\"}.bosch-ic-document:before{content:\"\"}.bosch-ic-document-add:before{content:\"\"}.bosch-ic-document-arrow-down:before{content:\"\"}.bosch-ic-document-arrow-up:before{content:\"\"}.bosch-ic-document-audio:before{content:\"\"}.bosch-ic-document-check:before{content:\"\"}.bosch-ic-document-cloud:before{content:\"\"}.bosch-ic-document-copy:before{content:\"\"}.bosch-ic-document-delete:before{content:\"\"}.bosch-ic-document-doc:before{content:\"\"}.bosch-ic-document-edit:before{content:\"\"}.bosch-ic-document-error:before{content:\"\"}.bosch-ic-document-locked:before{content:\"\"}.bosch-ic-document-log:before{content:\"\"}.bosch-ic-document-one:before{content:\"\"}.bosch-ic-document-pdf:before{content:\"\"}.bosch-ic-document-plain:before{content:\"\"}.bosch-ic-document-plain-add:before{content:\"\"}.bosch-ic-document-plain-delete:before{content:\"\"}.bosch-ic-document-ppt:before{content:\"\"}.bosch-ic-document-pub:before{content:\"\"}.bosch-ic-document-rtf:before{content:\"\"}.bosch-ic-document-save-to:before{content:\"\"}.bosch-ic-document-search:before{content:\"\"}.bosch-ic-document-settings:before{content:\"\"}.bosch-ic-document-test:before{content:\"\"}.bosch-ic-document-text:before{content:\"\"}.bosch-ic-document-txt:before{content:\"\"}.bosch-ic-document-vsd:before{content:\"\"}.bosch-ic-document-xls:before{content:\"\"}.bosch-ic-document-xml:before{content:\"\"}.bosch-ic-document-zip:before{content:\"\"}.bosch-ic-dome:before{content:\"\"}.bosch-ic-door:before{content:\"\"}.bosch-ic-door-sensor:before{content:\"\"}.bosch-ic-down:before{content:\"\"}.bosch-ic-down-double:before{content:\"\"}.bosch-ic-download:before{content:\"\"}.bosch-ic-drag-handle:before{content:\"\"}.bosch-ic-dragdrop:before{content:\"\"}.bosch-ic-drop:before{content:\"\"}.bosch-ic-e-charging:before{content:\"\"}.bosch-ic-e-mobility:before{content:\"\"}.bosch-ic-ear-off-disabled-light:before{content:\"\"}.bosch-ic-ear-on:before{content:\"\"}.bosch-ic-eco-system:before{content:\"\"}.bosch-ic-edit:before{content:\"\"}.bosch-ic-education:before{content:\"\"}.bosch-ic-efficiency:before{content:\"\"}.bosch-ic-elevator:before{content:\"\"}.bosch-ic-elevator-alarm:before{content:\"\"}.bosch-ic-elevator-cloud:before{content:\"\"}.bosch-ic-elevator-headset:before{content:\"\"}.bosch-ic-elevator-service:before{content:\"\"}.bosch-ic-emergency-exit:before{content:\"\"}.bosch-ic-emoji-happy:before{content:\"\"}.bosch-ic-emoji-neutral:before{content:\"\"}.bosch-ic-emoji-sad:before{content:\"\"}.bosch-ic-emoji-super-happy:before{content:\"\"}.bosch-ic-emoji-very-sad:before{content:\"\"}.bosch-ic-eu-energy-label:before{content:\"\"}.bosch-ic-excavator:before{content:\"\"}.bosch-ic-exit:before{content:\"\"}.bosch-ic-expansion-arrows:before{content:\"\"}.bosch-ic-explosion:before{content:\"\"}.bosch-ic-export:before{content:\"\"}.bosch-ic-externallink:before{content:\"\"}.bosch-ic-fast-forward:before{content:\"\"}.bosch-ic-faucet:before{content:\"\"}.bosch-ic-favorites:before{content:\"\"}.bosch-ic-fax:before{content:\"\"}.bosch-ic-female:before{content:\"\"}.bosch-ic-film:before{content:\"\"}.bosch-ic-filter:before{content:\"\"}.bosch-ic-filter-success:before{content:\"\"}.bosch-ic-fingerprint:before{content:\"\"}.bosch-ic-fire:before{content:\"\"}.bosch-ic-fire-emergency:before{content:\"\"}.bosch-ic-fireworks:before{content:\"\"}.bosch-ic-first-aid:before{content:\"\"}.bosch-ic-first-aid-cross:before{content:\"\"}.bosch-ic-fit-to-sceen:before{content:\"\"}.bosch-ic-flag:before{content:\"\"}.bosch-ic-flash:before{content:\"\"}.bosch-ic-flask:before{content:\"\"}.bosch-ic-flexpress:before{content:\"\"}.bosch-ic-folder:before{content:\"\"}.bosch-ic-folder-download:before{content:\"\"}.bosch-ic-folder-open:before{content:\"\"}.bosch-ic-folder-upload:before{content:\"\"}.bosch-ic-fork-lift:before{content:\"\"}.bosch-ic-fork-lift-locator:before{content:\"\"}.bosch-ic-forward-right:before{content:\"\"}.bosch-ic-forward-right-double:before{content:\"\"}.bosch-ic-full-empty:before{content:\"\"}.bosch-ic-fullscreen:before{content:\"\"}.bosch-ic-fullscreen-arrows:before{content:\"\"}.bosch-ic-fullscreen-exit:before{content:\"\"}.bosch-ic-g-arrow-down:before{content:\"\"}.bosch-ic-g-arrow-up:before{content:\"\"}.bosch-ic-generator:before{content:\"\"}.bosch-ic-gift:before{content:\"\"}.bosch-ic-glance:before{content:\"\"}.bosch-ic-glas-plate:before{content:\"\"}.bosch-ic-globe:before{content:\"\"}.bosch-ic-globe-arrow:before{content:\"\"}.bosch-ic-glossary:before{content:\"\"}.bosch-ic-grid-view:before{content:\"\"}.bosch-ic-hammer:before{content:\"\"}.bosch-ic-hand:before{content:\"\"}.bosch-ic-hand-motion:before{content:\"\"}.bosch-ic-hand-motion-off-disabled-light:before{content:\"\"}.bosch-ic-handlewithcare:before{content:\"\"}.bosch-ic-handover-add:before{content:\"\"}.bosch-ic-handover-check:before{content:\"\"}.bosch-ic-handover-remove:before{content:\"\"}.bosch-ic-hanger:before{content:\"\"}.bosch-ic-health:before{content:\"\"}.bosch-ic-heart:before{content:\"\"}.bosch-ic-history:before{content:\"\"}.bosch-ic-home:before{content:\"\"}.bosch-ic-home-locator:before{content:\"\"}.bosch-ic-hourglass:before{content:\"\"}.bosch-ic-hydrant:before{content:\"\"}.bosch-ic-ice:before{content:\"\"}.bosch-ic-imagery:before{content:\"\"}.bosch-ic-imagery-add:before{content:\"\"}.bosch-ic-imagery-remove:before{content:\"\"}.bosch-ic-import:before{content:\"\"}.bosch-ic-imprint:before{content:\"\"}.bosch-ic-impulse:before{content:\"\"}.bosch-ic-industry:before{content:\"\"}.bosch-ic-industry-clock:before{content:\"\"}.bosch-ic-industry-connected:before{content:\"\"}.bosch-ic-info:before{content:\"\"}.bosch-ic-info-i:before{content:\"\"}.bosch-ic-interval:before{content:\"\"}.bosch-ic-it-device:before{content:\"\"}.bosch-ic-jewel:before{content:\"\"}.bosch-ic-keyboard:before{content:\"\"}.bosch-ic-label:before{content:\"\"}.bosch-ic-laptop:before{content:\"\"}.bosch-ic-laser:before{content:\"\"}.bosch-ic-layout:before{content:\"\"}.bosch-ic-leaf:before{content:\"\"}.bosch-ic-led:before{content:\"\"}.bosch-ic-brick:before{content:\"\"}.bosch-ic-brick-slanting-1:before{content:\"\"}.bosch-ic-brick-slanting-2:before{content:\"\"}.bosch-ic-less-minimize:before{content:\"\"}.bosch-ic-lightbulb:before{content:\"\"}.bosch-ic-lightbulb-off:before{content:\"\"}.bosch-ic-line-chart:before{content:\"\"}.bosch-ic-link:before{content:\"\"}.bosch-ic-link-broken:before{content:\"\"}.bosch-ic-list-view:before{content:\"\"}.bosch-ic-list-view-mobile:before{content:\"\"}.bosch-ic-livechat:before{content:\"\"}.bosch-ic-locator:before{content:\"\"}.bosch-ic-locator-ip-connected:before{content:\"\"}.bosch-ic-locator-ip-disconnected:before{content:\"\"}.bosch-ic-locator-spot:before{content:\"\"}.bosch-ic-locator-spot-check:before{content:\"\"}.bosch-ic-lock-closed:before{content:\"\"}.bosch-ic-lock-open:before{content:\"\"}.bosch-ic-login:before{content:\"\"}.bosch-ic-logistics:before{content:\"\"}.bosch-ic-logout:before{content:\"\"}.bosch-ic-machine:before{content:\"\"}.bosch-ic-magnet:before{content:\"\"}.bosch-ic-mail:before{content:\"\"}.bosch-ic-mail-forward:before{content:\"\"}.bosch-ic-mail-open:before{content:\"\"}.bosch-ic-mail-out:before{content:\"\"}.bosch-ic-mail-reply:before{content:\"\"}.bosch-ic-male:before{content:\"\"}.bosch-ic-map:before{content:\"\"}.bosch-ic-material-add:before{content:\"\"}.bosch-ic-material-check:before{content:\"\"}.bosch-ic-material-remove:before{content:\"\"}.bosch-ic-maximize:before{content:\"\"}.bosch-ic-mechanic:before{content:\"\"}.bosch-ic-megaphone:before{content:\"\"}.bosch-ic-message:before{content:\"\"}.bosch-ic-mic:before{content:\"\"}.bosch-ic-microphone:before{content:\"\"}.bosch-ic-microphone-classic:before{content:\"\"}.bosch-ic-minimize:before{content:\"\"}.bosch-ic-money-currency:before{content:\"\"}.bosch-ic-money-dollar:before{content:\"\"}.bosch-ic-moneybag-currency:before{content:\"\"}.bosch-ic-moneybag-dollar:before{content:\"\"}.bosch-ic-monument:before{content:\"\"}.bosch-ic-moon:before{content:\"\"}.bosch-ic-motorcycle:before{content:\"\"}.bosch-ic-motorcycle-side-car:before{content:\"\"}.bosch-ic-motorcycle-side:before{content:\"\"}.bosch-ic-mouse:before{content:\"\"}.bosch-ic-mouse-left:before{content:\"\"}.bosch-ic-mouse-right:before{content:\"\"}.bosch-ic-mouth:before{content:\"\"}.bosch-ic-my-product:before{content:\"\"}.bosch-ic-new-way-work:before{content:\"\"}.bosch-ic-newsletter:before{content:\"\"}.bosch-ic-newspaper:before{content:\"\"}.bosch-ic-nose:before{content:\"\"}.bosch-ic-notepad:before{content:\"\"}.bosch-ic-notepad-edit:before{content:\"\"}.bosch-ic-notification:before{content:\"\"}.bosch-ic-notification-active:before{content:\"\"}.bosch-ic-notification-add:before{content:\"\"}.bosch-ic-notification-remove:before{content:\"\"}.bosch-ic-oil-car:before{content:\"\"}.bosch-ic-omnichannel:before{content:\"\"}.bosch-ic-options:before{content:\"\"}.bosch-ic-origami-boat:before{content:\"\"}.bosch-ic-pallete-car:before{content:\"\"}.bosch-ic-pallete-car-connected:before{content:\"\"}.bosch-ic-panel:before{content:\"\"}.bosch-ic-paperclip:before{content:\"\"}.bosch-ic-paperplane:before{content:\"\"}.bosch-ic-parking:before{content:\"\"}.bosch-ic-pause:before{content:\"\"}.bosch-ic-payment:before{content:\"\"}.bosch-ic-people:before{content:\"\"}.bosch-ic-petrol-station:before{content:\"\"}.bosch-ic-piggybank:before{content:\"\"}.bosch-ic-pin-classic:before{content:\"\"}.bosch-ic-pin-modern:before{content:\"\"}.bosch-ic-plane-side:before{content:\"\"}.bosch-ic-play:before{content:\"\"}.bosch-ic-plug-12v:before{content:\"\"}.bosch-ic-podium-speaker:before{content:\"\"}.bosch-ic-police:before{content:\"\"}.bosch-ic-poop:before{content:\"\"}.bosch-ic-post-it:before{content:\"\"}.bosch-ic-postal-code:before{content:\"\"}.bosch-ic-power:before{content:\"\"}.bosch-ic-print:before{content:\"\"}.bosch-ic-prototyping:before{content:\"\"}.bosch-ic-puzzle:before{content:\"\"}.bosch-ic-quad:before{content:\"\"}.bosch-ic-question:before{content:\"\"}.bosch-ic-radar:before{content:\"\"}.bosch-ic-radio:before{content:\"\"}.bosch-ic-radiotower:before{content:\"\"}.bosch-ic-redirect:before{content:\"\"}.bosch-ic-redo:before{content:\"\"}.bosch-ic-reference:before{content:\"\"}.bosch-ic-refresh:before{content:\"\"}.bosch-ic-refresh-cloud:before{content:\"\"}.bosch-ic-registration:before{content:\"\"}.bosch-ic-remote:before{content:\"\"}.bosch-ic-reset:before{content:\"\"}.bosch-ic-resolution:before{content:\"\"}.bosch-ic-robot:before{content:\"\"}.bosch-ic-robot-connected:before{content:\"\"}.bosch-ic-robothead:before{content:\"\"}.bosch-ic-rocket:before{content:\"\"}.bosch-ic-rotation:before{content:\"\"}.bosch-ic-rotation-360:before{content:\"\"}.bosch-ic-rotation-x-left:before{content:\"\"}.bosch-ic-rotation-x-right:before{content:\"\"}.bosch-ic-rotation-y-down:before{content:\"\"}.bosch-ic-rotation-y-up:before{content:\"\"}.bosch-ic-route:before{content:\"\"}.bosch-ic-ruler:before{content:\"\"}.bosch-ic-ruler-pen:before{content:\"\"}.bosch-ic-satellite:before{content:\"\"}.bosch-ic-save:before{content:\"\"}.bosch-ic-scale:before{content:\"\"}.bosch-ic-scissors:before{content:\"\"}.bosch-ic-search:before{content:\"\"}.bosch-ic-security:before{content:\"\"}.bosch-ic-security-check:before{content:\"\"}.bosch-ic-security-user:before{content:\"\"}.bosch-ic-sensor:before{content:\"\"}.bosch-ic-server:before{content:\"\"}.bosch-ic-server-expansion:before{content:\"\"}.bosch-ic-server-rate:before{content:\"\"}.bosch-ic-service-agent:before{content:\"\"}.bosch-ic-service-time:before{content:\"\"}.bosch-ic-settings:before{content:\"\"}.bosch-ic-settings-arrows:before{content:\"\"}.bosch-ic-settings-connected:before{content:\"\"}.bosch-ic-share:before{content:\"\"}.bosch-ic-shield-stop:before{content:\"\"}.bosch-ic-ship:before{content:\"\"}.bosch-ic-ship-side:before{content:\"\"}.bosch-ic-shoppingcart:before{content:\"\"}.bosch-ic-shoppingcart-add:before{content:\"\"}.bosch-ic-shoppingcart-switch:before{content:\"\"}.bosch-ic-signal-full:before{content:\"\"}.bosch-ic-signal-half:before{content:\"\"}.bosch-ic-signal-lost:before{content:\"\"}.bosch-ic-signpost:before{content:\"\"}.bosch-ic-simcard:before{content:\"\"}.bosch-ic-skyscraper:before{content:\"\"}.bosch-ic-smartcity:before{content:\"\"}.bosch-ic-smarthome:before{content:\"\"}.bosch-ic-smartphone:before{content:\"\"}.bosch-ic-smartphone-acoustic:before{content:\"\"}.bosch-ic-smartphone-arrow-right:before{content:\"\"}.bosch-ic-smartphone-arrows-x-y-z:before{content:\"\"}.bosch-ic-smartphone-clock:before{content:\"\"}.bosch-ic-smartphone-cloud:before{content:\"\"}.bosch-ic-smartphone-loading-wheel:before{content:\"\"}.bosch-ic-smartphone-smashed:before{content:\"\"}.bosch-ic-smartphone-vibration:before{content:\"\"}.bosch-ic-smartphone-z:before{content:\"\"}.bosch-ic-smartwatch-connected:before{content:\"\"}.bosch-ic-spare-parts:before{content:\"\"}.bosch-ic-spark:before{content:\"\"}.bosch-ic-speaker-acoustic:before{content:\"\"}.bosch-ic-speedometer:before{content:\"\"}.bosch-ic-stadium:before{content:\"\"}.bosch-ic-stairs:before{content:\"\"}.bosch-ic-stamp:before{content:\"\"}.bosch-ic-standby:before{content:\"\"}.bosch-ic-steering-wheel:before{content:\"\"}.bosch-ic-steering-wheel-connected:before{content:\"\"}.bosch-ic-steering-wheel-hands:before{content:\"\"}.bosch-ic-steps:before{content:\"\"}.bosch-ic-stethoscope:before{content:\"\"}.bosch-ic-stop:before{content:\"\"}.bosch-ic-stopwatch:before{content:\"\"}.bosch-ic-storage-local:before{content:\"\"}.bosch-ic-structure:before{content:\"\"}.bosch-ic-subtitles:before{content:\"\"}.bosch-ic-subtitles-off-light:before{content:\"\"}.bosch-ic-summary:before{content:\"\"}.bosch-ic-sun:before{content:\"\"}.bosch-ic-sun-half-filled:before{content:\"\"}.bosch-ic-sunshade-table:before{content:\"\"}.bosch-ic-surveillance:before{content:\"\"}.bosch-ic-table-chairs:before{content:\"\"}.bosch-ic-tablet:before{content:\"\"}.bosch-ic-team:before{content:\"\"}.bosch-ic-team-lightbulb:before{content:\"\"}.bosch-ic-technical-service:before{content:\"\"}.bosch-ic-temperature:before{content:\"\"}.bosch-ic-temperature-high:before{content:\"\"}.bosch-ic-temperature-low:before{content:\"\"}.bosch-ic-theater:before{content:\"\"}.bosch-ic-thumb-down:before{content:\"\"}.bosch-ic-thumb-up:before{content:\"\"}.bosch-ic-ticket:before{content:\"\"}.bosch-ic-touch:before{content:\"\"}.bosch-ic-touch-sos:before{content:\"\"}.bosch-ic-towing-truck:before{content:\"\"}.bosch-ic-train:before{content:\"\"}.bosch-ic-train-side:before{content:\"\"}.bosch-ic-transport-movements:before{content:\"\"}.bosch-ic-transscript:before{content:\"\"}.bosch-ic-transscript-off:before{content:\"\"}.bosch-ic-transscript-on:before{content:\"\"}.bosch-ic-tree:before{content:\"\"}.bosch-ic-tricycle:before{content:\"\"}.bosch-ic-trolley-empty:before{content:\"\"}.bosch-ic-trolley-filled-box:before{content:\"\"}.bosch-ic-trolly-filled-files:before{content:\"\"}.bosch-ic-trophy:before{content:\"\"}.bosch-ic-truck:before{content:\"\"}.bosch-ic-tuktuk:before{content:\"\"}.bosch-ic-tune:before{content:\"\"}.bosch-ic-typography:before{content:\"\"}.bosch-ic-ui:before{content:\"\"}.bosch-ic-umbrella:before{content:\"\"}.bosch-ic-undo:before{content:\"\"}.bosch-ic-up:before{content:\"\"}.bosch-ic-up-double:before{content:\"\"}.bosch-ic-up-down:before{content:\"\"}.bosch-ic-upload:before{content:\"\"}.bosch-ic-usb:before{content:\"\"}.bosch-ic-user:before{content:\"\"}.bosch-ic-user-advanced:before{content:\"\"}.bosch-ic-user-beginner:before{content:\"\"}.bosch-ic-user-desktop:before{content:\"\"}.bosch-ic-user-down:before{content:\"\"}.bosch-ic-user-falling:before{content:\"\"}.bosch-ic-user-hand:before{content:\"\"}.bosch-ic-user-hand-stop:before{content:\"\"}.bosch-ic-user-professional:before{content:\"\"}.bosch-ic-user-run:before{content:\"\"}.bosch-ic-user-share:before{content:\"\"}.bosch-ic-user-voice:before{content:\"\"}.bosch-ic-user-walk:before{content:\"\"}.bosch-ic-video:before{content:\"\"}.bosch-ic-video-disabled-light:before{content:\"\"}.bosch-ic-video-record:before{content:\"\"}.bosch-ic-virtual-reality:before{content:\"\"}.bosch-ic-volume-disabled:before{content:\"\"}.bosch-ic-volume-high:before{content:\"\"}.bosch-ic-volume-low:before{content:\"\"}.bosch-ic-volume-off-light:before{content:\"\"}.bosch-ic-wand:before{content:\"\"}.bosch-ic-badge-checkmark:before{content:\"\"}.bosch-ic-watch-off-disabled-light:before{content:\"\"}.bosch-ic-watch-on:before{content:\"\"}.bosch-ic-water-shower:before{content:\"\"}.bosch-ic-welcome:before{content:\"\"}.bosch-ic-wellness:before{content:\"\"}.bosch-ic-wheelchair:before{content:\"\"}.bosch-ic-whistle:before{content:\"\"}.bosch-ic-wide-angled-arrow:before{content:\"\"}.bosch-ic-wifi:before{content:\"\"}.bosch-ic-window-analysis:before{content:\"\"}.bosch-ic-window-browser:before{content:\"\"}.bosch-ic-window-console:before{content:\"\"}.bosch-ic-window-gaussian-view:before{content:\"\"}.bosch-ic-window-info:before{content:\"\"}.bosch-ic-window-new:before{content:\"\"}.bosch-ic-window-resize:before{content:\"\"}.bosch-ic-window-scaling-view:before{content:\"\"}.bosch-ic-window-shuffle:before{content:\"\"}.bosch-ic-window-statistic:before{content:\"\"}.bosch-ic-wishlist:before{content:\"\"}.bosch-ic-work-order:before{content:\"\"}.bosch-ic-worldwideweb:before{content:\"\"}.bosch-ic-wrench:before{content:\"\"}.bosch-ic-zoom-in:before{content:\"\"}.bosch-ic-zoom-out:before{content:\"\"}.bosch-ic-scooter:before{content:\"\"}.bosch-ic-cars-traffic:before{content:\"\"}.bosch-ic-arm-chair:before{content:\"\"}.bosch-ic-car-phone:before{content:\"\"}.bosch-ic-box-lightbulb:before{content:\"\"}.bosch-ic-chair-officedesk:before{content:\"\"}.bosch-ic-calendar-clock:before{content:\"\"}.bosch-ic-document-cv:before{content:\"\"}.bosch-ic-user-run-bag:before{content:\"\"}.bosch-ic-brake-disk-spray:before{content:\"\"}.bosch-ic-circle-abs:before{content:\"\"}.bosch-ic-bright-down:before{content:\"\"}.bosch-ic-bright-up:before{content:\"\"}.bosch-ic-fan:before{content:\"\"}.bosch-ic-sun-moon:before{content:\"\"}.bosch-ic-lightbulb-attention:before{content:\"\"}.bosch-ic-settings-attention:before{content:\"\"}.bosch-ic-danger-hazards:before{content:\"\"}.bosch-ic-windshield-spray:before{content:\"\"}.bosch-ic-windshield-heat:before{content:\"\"}.bosch-ic-light-drop:before{content:\"\"}.bosch-ic-starter:before{content:\"\"}.bosch-ic-turbo:before{content:\"\"}.bosch-ic-settings-lock:before{content:\"\"}.bosch-ic-settings-n:before{content:\"\"}.bosch-ic-light-beam-high:before{content:\"\"}.bosch-ic-light-beam-low:before{content:\"\"}.bosch-ic-glas:before{content:\"\"}.bosch-ic-shirt-ice:before{content:\"\"}.bosch-ic-helmet-fan:before{content:\"\"}.bosch-ic-notification-arrow:before{content:\"\"}.bosch-ic-steering-wheel-arrow:before{content:\"\"}.bosch-ic-circle-arrow:before{content:\"\"}.bosch-ic-tempomat-pit:before{content:\"\"}.bosch-ic-radiator-fan-spray:before{content:\"\"}.bosch-ic-boost-down:before{content:\"\"}.bosch-ic-boost-up:before{content:\"\"}.bosch-ic-circle-lock:before{content:\"\"}.bosch-ic-mp-down:before{content:\"\"}.bosch-ic-mp-up:before{content:\"\"}.bosch-ic-tc-down:before{content:\"\"}.bosch-ic-tc-up:before{content:\"\"}.bosch-ic-danger-arrow-attention:before{content:\"\"}.bosch-ic-user-remove:before{content:\"\"}.bosch-ic-user-add:before{content:\"\"}.bosch-ic-post-it-collection:before{content:\"\"}.bosch-ic-horn:before{content:\"\"}.bosch-ic-desktop-notification:before{content:\"\"}.bosch-ic-router:before{content:\"\"}.bosch-ic-berry:before{content:\"\"}.bosch-ic-chat-language:before{content:\"\"}.bosch-ic-game-controller:before{content:\"\"}.bosch-ic-user-brain:before{content:\"\"}.bosch-ic-mouth-finger:before{content:\"\"}.bosch-ic-excavator-shovel:before{content:\"\"}.bosch-ic-ear-in:before{content:\"\"}.bosch-ic-ear-out:before{content:\"\"}.bosch-ic-lion:before{content:\"\"}.bosch-ic-car-convertible:before{content:\"\"}.bosch-ic-car-sports:before{content:\"\"}.bosch-ic-bear:before{content:\"\"}.bosch-ic-pot:before{content:\"\"}.bosch-ic-bed-double:before{content:\"\"}.bosch-ic-air-hot:before{content:\"\"}.bosch-ic-air-ice:before{content:\"\"}.bosch-ic-air-leaf:before{content:\"\"}.bosch-ic-air-purifier-0:before{content:\"\"}.bosch-ic-air-purifier-1:before{content:\"\"}.bosch-ic-air-purifier-2:before{content:\"\"}.bosch-ic-air-purifier-3:before{content:\"\"}.bosch-ic-air:before{content:\"\"}.bosch-ic-fan-off-disabled-bold:before{content:\"\"}.bosch-ic-ice-off-disabled-bold:before{content:\"\"}.bosch-ic-faucet-boost:before{content:\"\"}.bosch-ic-faucet-mode:before{content:\"\"}.bosch-ic-faucet-off-disabled-bold:before{content:\"\"}.bosch-ic-faucet-schedule:before{content:\"\"}.bosch-ic-fuel-cell:before{content:\"\"}.bosch-ic-heating-floor-off-disabled-bold:before{content:\"\"}.bosch-ic-heating-floor:before{content:\"\"}.bosch-ic-heating-radiator-boost:before{content:\"\"}.bosch-ic-heating-radiator-mode:before{content:\"\"}.bosch-ic-heating-radiator-off-disabled-bold:before{content:\"\"}.bosch-ic-heating-radiator-schedule:before{content:\"\"}.bosch-ic-leaf-simple:before{content:\"\"}.bosch-ic-oil-barrel:before{content:\"\"}.bosch-ic-water-bathtub:before{content:\"\"}.bosch-ic-water-dishwash:before{content:\"\"}.bosch-ic-water-handwash:before{content:\"\"}.bosch-ic-water-hot:before{content:\"\"}.bosch-ic-water-ice:before{content:\"\"}.bosch-ic-water-leaf:before{content:\"\"}.bosch-ic-water-ladder:before{content:\"\"}.bosch-ic-water-purifier-0:before{content:\"\"}.bosch-ic-water-purifier-1:before{content:\"\"}.bosch-ic-water-purifier-2:before{content:\"\"}.bosch-ic-water-purifier-3:before{content:\"\"}.bosch-ic-water-shower-boost:before{content:\"\"}.bosch-ic-water-shower-mode:before{content:\"\"}.bosch-ic-water-shower-off-disabled-bold:before{content:\"\"}.bosch-ic-water-shower-schedule:before{content:\"\"}.bosch-ic-water:before{content:\"\"}.bosch-ic-chart-bar-drop:before{content:\"\"}.bosch-ic-chart-bar-fire:before{content:\"\"}.bosch-ic-chart-bar-flash:before{content:\"\"}.bosch-ic-chart-bar-oil:before{content:\"\"}.bosch-ic-drop-minus:before{content:\"\"}.bosch-ic-drop-plus:before{content:\"\"}.bosch-ic-fan-minus:before{content:\"\"}.bosch-ic-fan-plus:before{content:\"\"}.bosch-ic-home-drops-0:before{content:\"\"}.bosch-ic-home-drops-1:before{content:\"\"}.bosch-ic-home-drops-2:before{content:\"\"}.bosch-ic-home-drops-3:before{content:\"\"}.bosch-ic-home-temperature-in:before{content:\"\"}.bosch-ic-home-temperature-out:before{content:\"\"}.bosch-ic-home-user-in:before{content:\"\"}.bosch-ic-ice-minus:before{content:\"\"}.bosch-ic-ice-plus:before{content:\"\"}.bosch-ic-chimney-sweeper:before{content:\"\"}.bosch-ic-menu-up:before{content:\"\"}.bosch-ic-security-ice:before{content:\"\"}.bosch-ic-security-legionella:before{content:\"\"}.bosch-ic-trolley-case:before{content:\"\"}.bosch-ic-sun-minus:before{content:\"\"}.bosch-ic-sun-plug:before{content:\"\"}.bosch-ic-sun-plus:before{content:\"\"}.bosch-ic-touch-pit:before{content:\"\"}.bosch-ic-temperature-current:before{content:\"\"}.bosch-ic-temperature-set:before{content:\"\"}.bosch-ic-teddy-bear:before{content:\"\"}.bosch-ic-document-svg:before{content:\"\"}.bosch-ic-back-menu:before{content:\"\"}.bosch-ic-car-arrows:before{content:\"\"}.bosch-ic-wrench-cloud:before{content:\"\"}.bosch-ic-weather-cloud-sun:before{content:\"\"}.bosch-ic-weather-cloudy:before{content:\"\"}.bosch-ic-weather-gale:before{content:\"\"}.bosch-ic-weather-mist:before{content:\"\"}.bosch-ic-weather-moon-cloud:before{content:\"\"}.bosch-ic-weather-rain-snow:before{content:\"\"}.bosch-ic-weather-rain-thunder:before{content:\"\"}.bosch-ic-weather-rain:before{content:\"\"}.bosch-ic-weather-snow:before{content:\"\"}.bosch-ic-weather-thunder:before{content:\"\"}.bosch-ic-weather-wind:before{content:\"\"}.bosch-ic-plane-start:before{content:\"\"}.bosch-ic-plane-land:before{content:\"\"}.bosch-ic-graph-power:before{content:\"\"}.bosch-ic-floorplan:before{content:\"\"}.bosch-ic-clock-pause:before{content:\"\"}.bosch-ic-clock-start:before{content:\"\"}.bosch-ic-clock-stop:before{content:\"\"}.bosch-ic-computer-retro:before{content:\"\"}.bosch-ic-smartphone-retro:before{content:\"\"}.bosch-ic-wood:before{content:\"\"}.bosch-ic-solid-fuel:before{content:\"\"}.bosch-ic-appliance-fan:before{content:\"\"}.bosch-ic-appliance-flame:before{content:\"\"}.bosch-ic-appliance-ice:before{content:\"\"}.bosch-ic-appliance-oil:before{content:\"\"}.bosch-ic-appliance-solid-fuel:before{content:\"\"}.bosch-ic-appliance-sun-ice:before{content:\"\"}.bosch-ic-appliance-sun:before{content:\"\"}.bosch-ic-appliance-wood:before{content:\"\"}.bosch-ic-appliance-air-leaf:before{content:\"\"}.bosch-ic-appliance-water-air:before{content:\"\"}.bosch-ic-appliance-water-leaf:before{content:\"\"}.bosch-ic-appliance-water-oil:before{content:\"\"}.bosch-ic-appliance-water:before{content:\"\"}.bosch-ic-appliance-heat-pump-air:before{content:\"\"}.bosch-ic-appliance-heat-pump-ground:before{content:\"\"}.bosch-ic-appliance-heat-pump-water:before{content:\"\"}.bosch-ic-appliance-plug-air:before{content:\"\"}.bosch-ic-appliance-plug-fuel-cell:before{content:\"\"}.bosch-ic-appliance-plug-leaf:before{content:\"\"}.bosch-ic-appliance-plug-water-air:before{content:\"\"}.bosch-ic-thermostat-connected-c:before{content:\"\"}.bosch-ic-thermostat-connected-f:before{content:\"\"}.bosch-ic-image-gallery:before{content:\"\"}.bosch-ic-arrows-caution:before{content:\"\"}.bosch-ic-arrows-diagonal-disabled-bold:before{content:\"\"}.bosch-ic-back-left-end:before{content:\"\"}.bosch-ic-back-right-end:before{content:\"\"}.bosch-ic-bar-chart-search:before{content:\"\"}.bosch-ic-batch:before{content:\"\"}.bosch-ic-calendar-remove:before{content:\"\"}.bosch-ic-call-bluetooth:before{content:\"\"}.bosch-ic-call-deny:before{content:\"\"}.bosch-ic-call-settings:before{content:\"\"}.bosch-ic-caution-sign-clock:before{content:\"\"}.bosch-ic-caution-sign-list:before{content:\"\"}.bosch-ic-core-data:before{content:\"\"}.bosch-ic-cursor-connected:before{content:\"\"}.bosch-ic-cursor:before{content:\"\"}.bosch-ic-dmc-code:before{content:\"\"}.bosch-ic-find-id:before{content:\"\"}.bosch-ic-globe-search:before{content:\"\"}.bosch-ic-interface:before{content:\"\"}.bosch-ic-material-add-manually:before{content:\"\"}.bosch-ic-material-list:before{content:\"\"}.bosch-ic-material-remove-manually:before{content:\"\"}.bosch-ic-material:before{content:\"\"}.bosch-ic-menu-checkmark:before{content:\"\"}.bosch-ic-qr-code:before{content:\"\"}.bosch-ic-sort-alphabetically:before{content:\"\"}.bosch-ic-unpin-classic-disabled-bold:before{content:\"\"}.bosch-ic-unpin-modern-disabled-bold:before{content:\"\"}.bosch-ic-window-search:before{content:\"\"}.bosch-ic-cloud-clock:before{content:\"\"}.bosch-ic-concierge:before{content:\"\"}.bosch-ic-heating-radiator:before{content:\"\"}.bosch-ic-home-user-out:before{content:\"\"}.bosch-ic-hot:before{content:\"\"}.bosch-ic-screen-service:before{content:\"\"}.bosch-ic-sun-ice:before{content:\"\"}.bosch-ic-sun-off-disabled-bold:before{content:\"\"}.bosch-ic-tractor:before{content:\"\"}.bosch-ic-video-recorder-digital:before{content:\"\"}.bosch-ic-windshield-wiper:before{content:\"\"}.bosch-ic-weather-snow-thunder:before{content:\"\"}.bosch-ic-electricity-pylon:before{content:\"\"}.bosch-ic-box-questionmark:before{content:\"\"}.bosch-ic-rainbow:before{content:\"\"}.bosch-ic-medal:before{content:\"\"}.bosch-ic-wheel:before{content:\"\"}.bosch-ic-borescope-connected:before{content:\"\"}.bosch-ic-filter-delete:before{content:\"\"}.bosch-ic-filter-add:before{content:\"\"}.bosch-ic-man:before{content:\"\"}.bosch-ic-woman:before{content:\"\"}.bosch-ic-fridge:before{content:\"\"}.bosch-ic-battery-car:before{content:\"\"}.bosch-ic-bag-escalator:before{content:\"\"}.bosch-ic-shopping-bags:before{content:\"\"}.bosch-ic-car-steering-left:before{content:\"\"}.bosch-ic-car-steering-right:before{content:\"\"}.bosch-ic-thumb-up-down:before{content:\"\"}.bosch-ic-user-run-detection:before{content:\"\"}.bosch-ic-bank:before{content:\"\"}.bosch-ic-transportation:before{content:\"\"}.bosch-ic-government:before{content:\"\"}.bosch-ic-user-music:before{content:\"\"}.bosch-ic-bus:before{content:\"\"}.bosch-ic-car-euro:before{content:\"\"}.bosch-ic-bag:before{content:\"\"}.bosch-ic-plate-tetrapack:before{content:\"\"}.bosch-ic-hospital:before{content:\"\"}.bosch-ic-desktop-structure:before{content:\"\"}.bosch-ic-frog-head:before{content:\"\"}.bosch-ic-sportboat:before{content:\"\"}.bosch-ic-yacht:before{content:\"\"}.bosch-ic-leaf-tilia:before{content:\"\"}.bosch-ic-music:before{content:\"\"}.bosch-ic-oil-lamp:before{content:\"\"}.bosch-ic-windshield-wiper-rear:before{content:\"\"}.bosch-ic-dongle-connected:before{content:\"\"}.bosch-ic-slate:before{content:\"\"}.bosch-ic-appliance-heat-pump-exhaust:before{content:\"\"}.bosch-ic-alert-list:before{content:\"\"}.bosch-ic-arrow-left-end-frame:before{content:\"\"}.bosch-ic-arrow-right-end-frame:before{content:\"\"}.bosch-ic-shape-ellipse:before{content:\"\"}.bosch-ic-shape-rectangle:before{content:\"\"}.bosch-ic-wishlist-add:before{content:\"\"}.bosch-ic-smartphone-disabled-light:before{content:\"\"}.bosch-ic-airbag:before{content:\"\"}.bosch-ic-compass:before{content:\"\"}.bosch-ic-turbine-wind:before{content:\"\"}.bosch-ic-arrows-diagonal-disabled-light:before{content:\"\"}.bosch-ic-ear-off-disabled-bold:before{content:\"\"}.bosch-ic-fan-off-disabled-light:before{content:\"\"}.bosch-ic-faucet-off-disabled-light:before{content:\"\"}.bosch-ic-hand-motion-off-disabled-bold:before{content:\"\"}.bosch-ic-heating-floor-off-disabled-light:before{content:\"\"}.bosch-ic-heating-radiator-off-disabled-light:before{content:\"\"}.bosch-ic-ice-off-disabled-light:before{content:\"\"}.bosch-ic-smartphone-disabled-bold:before{content:\"\"}.bosch-ic-subtitles-off-bold:before{content:\"\"}.bosch-ic-sun-off-disabled-light:before{content:\"\"}.bosch-ic-video-disabled-bold:before{content:\"\"}.bosch-ic-volume-off-bold:before{content:\"\"}.bosch-ic-watch-off-disabled-bold:before{content:\"\"}.bosch-ic-water-shower-off-disabled-light:before{content:\"\"}.bosch-ic-3d-frame-play:before{content:\"\"}.bosch-ic-alert-error-checkmark:before{content:\"\"}.bosch-ic-arrow-up-frame-check:before{content:\"\"}.bosch-ic-arrow-up-frame-error:before{content:\"\"}.bosch-ic-arrows-checkmark:before{content:\"\"}.bosch-ic-assembly-line-settings:before{content:\"\"}.bosch-ic-augmented-reality-player:before{content:\"\"}.bosch-ic-bar-chart-kappa:before{content:\"\"}.bosch-ic-bar-chart-search-detail:before{content:\"\"}.bosch-ic-barcode-checkmark:before{content:\"\"}.bosch-ic-barcode-scan-bulb:before{content:\"\"}.bosch-ic-barcode:before{content:\"\"}.bosch-ic-binary:before{content:\"\"}.bosch-ic-book-lightbulb:before{content:\"\"}.bosch-ic-box-arrow-down:before{content:\"\"}.bosch-ic-box-delivery-checkmark:before{content:\"\"}.bosch-ic-globe-checkmark:before{content:\"\"}.bosch-ic-calendar-boxes:before{content:\"\"}.bosch-ic-calendar-service:before{content:\"\"}.bosch-ic-camera-processor:before{content:\"\"}.bosch-ic-camera-settings:before{content:\"\"}.bosch-ic-chart-line-checkmark:before{content:\"\"}.bosch-ic-checklist-stack:before{content:\"\"}.bosch-ic-checkmark-frame-minimum:before{content:\"\"}.bosch-ic-checkmark-frame-tripple:before{content:\"\"}.bosch-ic-clipboard-checkmark:before{content:\"\"}.bosch-ic-clipboard-list-parts:before{content:\"\"}.bosch-ic-clipboard-settings:before{content:\"\"}.bosch-ic-computer-tower-box:before{content:\"\"}.bosch-ic-connectivity-lock:before{content:\"\"}.bosch-ic-counter-current:before{content:\"\"}.bosch-ic-counter-target:before{content:\"\"}.bosch-ic-cube-checkmark:before{content:\"\"}.bosch-ic-cube-play:before{content:\"\"}.bosch-ic-time-line-settings:before{content:\"\"}.bosch-ic-time-line-view:before{content:\"\"}.bosch-ic-time-line:before{content:\"\"}.bosch-ic-delivery-checkmark:before{content:\"\"}.bosch-ic-desktop-application-3d-play:before{content:\"\"}.bosch-ic-desktop-apps-download:before{content:\"\"}.bosch-ic-desktop-dashboard:before{content:\"\"}.bosch-ic-desktop-graph-checkmark:before{content:\"\"}.bosch-ic-desktop-graph-search:before{content:\"\"}.bosch-ic-desktop-graph:before{content:\"\"}.bosch-ic-development-kit:before{content:\"\"}.bosch-ic-directory-cloud-settings:before{content:\"\"}.bosch-ic-directory-cloud:before{content:\"\"}.bosch-ic-directory-settings:before{content:\"\"}.bosch-ic-document-clock-cycle:before{content:\"\"}.bosch-ic-document-code-stack:before{content:\"\"}.bosch-ic-document-dat-edit:before{content:\"\"}.bosch-ic-document-ohd-arrow-down:before{content:\"\"}.bosch-ic-dolphin:before{content:\"\"}.bosch-ic-energy-management:before{content:\"\"}.bosch-ic-eraser:before{content:\"\"}.bosch-ic-folder-broom:before{content:\"\"}.bosch-ic-folder-check-broom:before{content:\"\"}.bosch-ic-folder-checkmark:before{content:\"\"}.bosch-ic-folder-oes-check:before{content:\"\"}.bosch-ic-folder-open-service:before{content:\"\"}.bosch-ic-folder-reload:before{content:\"\"}.bosch-ic-hand-command:before{content:\"\"}.bosch-ic-heating-start:before{content:\"\"}.bosch-ic-hierarchy-refresh:before{content:\"\"}.bosch-ic-hierarchy-search:before{content:\"\"}.bosch-ic-hierarchy-settings:before{content:\"\"}.bosch-ic-hierarchy:before{content:\"\"}.bosch-ic-hmi-desktop-settings:before{content:\"\"}.bosch-ic-human-machine-interface:before{content:\"\"}.bosch-ic-keys-user-access:before{content:\"\"}.bosch-ic-keys:before{content:\"\"}.bosch-ic-label-edit:before{content:\"\"}.bosch-ic-line-arrow-checkmark:before{content:\"\"}.bosch-ic-link-checkmark:before{content:\"\"}.bosch-ic-lock-closed-checkmark:before{content:\"\"}.bosch-ic-lock-open-checkmark:before{content:\"\"}.bosch-ic-material-search:before{content:\"\"}.bosch-ic-objects-search:before{content:\"\"}.bosch-ic-objects:before{content:\"\"}.bosch-ic-plan-a-to-b:before{content:\"\"}.bosch-ic-plan-chart:before{content:\"\"}.bosch-ic-print-send:before{content:\"\"}.bosch-ic-refresh-analysis:before{content:\"\"}.bosch-ic-remote-desktop-add:before{content:\"\"}.bosch-ic-rfid-checkmark:before{content:\"\"}.bosch-ic-rfid-tag:before{content:\"\"}.bosch-ic-sequence-checkmark:before{content:\"\"}.bosch-ic-server-arrow-up:before{content:\"\"}.bosch-ic-server-arrows:before{content:\"\"}.bosch-ic-server-settings:before{content:\"\"}.bosch-ic-server-share:before{content:\"\"}.bosch-ic-settings-editor:before{content:\"\"}.bosch-ic-survey-checkmark:before{content:\"\"}.bosch-ic-target-dart:before{content:\"\"}.bosch-ic-target-view:before{content:\"\"}.bosch-ic-target:before{content:\"\"}.bosch-ic-thickness-selection:before{content:\"\"}.bosch-ic-toolbox-checkmark:before{content:\"\"}.bosch-ic-toolbox:before{content:\"\"}.bosch-ic-translate:before{content:\"\"}.bosch-ic-tune-vertical-checkmark:before{content:\"\"}.bosch-ic-wand-user-add:before{content:\"\"}.bosch-ic-wand-user-settings:before{content:\"\"}.bosch-ic-wand-user:before{content:\"\"}.bosch-ic-window-globe:before{content:\"\"}.bosch-ic-wrench-change:before{content:\"\"}.bosch-ic-clock-24-7:before{content:\"\"}.bosch-ic-eagle:before{content:\"\"}.bosch-ic-fluorescent-light:before{content:\"\"}.bosch-ic-home-cloud-0:before{content:\"\"}.bosch-ic-home-cloud-1:before{content:\"\"}.bosch-ic-home-cloud-2:before{content:\"\"}.bosch-ic-home-cloud-3:before{content:\"\"}.bosch-ic-home-shadow:before{content:\"\"}.bosch-ic-motorcycle-sport:before{content:\"\"}.bosch-ic-smartphone-connected:before{content:\"\"}.bosch-ic-usb-stick:before{content:\"\"}.bosch-ic-user--setting:before{content:\"\"}.bosch-ic-time-line-clock:before{content:\"\"}.bosch-ic-alarm-fire:before{content:\"\"}.bosch-ic-emergency-front:before{content:\"\"}.bosch-ic-transporter-front:before{content:\"\"}.bosch-ic-truck-front:before{content:\"\"}.bosch-ic-unpin-classic-disabled-light:before{content:\"\"}.bosch-ic-unpin-modern-disabled-light:before{content:\"\"}.bosch-ic-smartphone-ban:before{content:\"\"}.bosch-ic-helmet:before{content:\"\"}.bosch-ic-gate-closed:before{content:\"\"}.bosch-ic-fence:before{content:\"\"}.bosch-ic-desktop-apps:before{content:\"\"}.bosch-ic-candle:before{content:\"\"}.bosch-ic-abort-frame:before{content:\"\"}.bosch-ic-arrow-down-frame:before{content:\"\"}.bosch-ic-arrow-left-down-frame:before{content:\"\"}.bosch-ic-arrow-left-frame:before{content:\"\"}.bosch-ic-arrow-left-up-frame:before{content:\"\"}.bosch-ic-arrow-right-down-frame:before{content:\"\"}.bosch-ic-arrow-right-frame:before{content:\"\"}.bosch-ic-arrow-right-up-frame:before{content:\"\"}.bosch-ic-arrow-up-frame:before{content:\"\"}.bosch-ic-asiapacific-frame:before{content:\"\"}.bosch-ic-cash-frame:before{content:\"\"}.bosch-ic-checkmark-frame:before{content:\"\"}.bosch-ic-copyright-frame:before{content:\"\"}.bosch-ic-download-frame:before{content:\"\"}.bosch-ic-europe-frame:before{content:\"\"}.bosch-ic-lock-closed-frame:before{content:\"\"}.bosch-ic-lock-open-frame:before{content:\"\"}.bosch-ic-my-brand-frame:before{content:\"\"}.bosch-ic-northamerica-frame:before{content:\"\"}.bosch-ic-problem-frame:before{content:\"\"}.bosch-ic-promotion-frame:before{content:\"\"}.bosch-ic-question-frame:before{content:\"\"}.bosch-ic-share-frame:before{content:\"\"}.bosch-ic-southamerica-frame:before{content:\"\"}.bosch-ic-start-play-frame:before{content:\"\"}.bosch-ic-upload-frame:before{content:\"\"}.bosch-ic-world-frame:before{content:\"\"}.bosch-ic-add-frame:before{content:\"\"}.bosch-ic-call-deny-frame:before{content:\"\"}.bosch-ic-call-frame:before{content:\"\"}.bosch-ic-fast-backward-frame:before{content:\"\"}.bosch-ic-fast-forward-frame:before{content:\"\"}.bosch-ic-skip-backward-frame:before{content:\"\"}.bosch-ic-skip-fast-backward-frame:before{content:\"\"}.bosch-ic-skip-fast-forward-frame:before{content:\"\"}.bosch-ic-skip-forward-frame:before{content:\"\"}.bosch-ic-subtract-frame:before{content:\"\"}.bosch-ic-facebook-frame:before{content:\"\"}.bosch-ic-googleplus-frame:before{content:\"\"}.bosch-ic-instagram-frame:before{content:\"\"}.bosch-ic-lineapp-frame:before{content:\"\"}.bosch-ic-linkedin-frame:before{content:\"\"}.bosch-ic-pinterest-frame:before{content:\"\"}.bosch-ic-snapchat-frame:before{content:\"\"}.bosch-ic-tumblr-frame:before{content:\"\"}.bosch-ic-twitter-frame:before{content:\"\"}.bosch-ic-vimeo-frame:before{content:\"\"}.bosch-ic-wechat-frame:before{content:\"\"}.bosch-ic-weibo-frame:before{content:\"\"}.bosch-ic-whatsapp-frame:before{content:\"\"}.bosch-ic-xing-frame:before{content:\"\"}.bosch-ic-youku-frame:before{content:\"\"}.bosch-ic-youtube-frame:before{content:\"\"}.bosch-ic-vk-frame:before{content:\"\"}.bosch-ic-skype-frame:before{content:\"\"}.bosch-ic-alert-error-filled:before{content:\"\"}.bosch-ic-alert-error:before{content:\"\"}.bosch-ic-alert-success-filled:before{content:\"\"}.bosch-ic-alert-success:before{content:\"\"}.bosch-ic-alert-warning-filled:before{content:\"\"}.bosch-ic-alert-warning:before{content:\"\"}/*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.Bosch-IC-find-part:before{content:\"\"}.Bosch-IC-next-station:before{content:\"\"}.Bosch-Ic-HMI:before{content:\"\"}.Bosch-Ic-add-outline:before{content:\"\"}.Bosch-Ic-apas:before{content:\"\"}.Bosch-Ic-abort:before,.bosch-ic-abort:before{content:\"\"}.Bosch-Ic-cash:before{content:\"\"}.Bosch-Ic-pinterest:before{content:\"\"}.Bosch-Ic-problem:before{content:\"\"}.Bosch-Ic-promotion:before{content:\"\"}.Bosch-Ic-arrow-diagonal:before{content:\"\"}.Bosch-Ic-arrow-down-filled:before{content:\"\"}.Bosch-Ic-arrow-down-circle:before{content:\"\"}.Bosch-Ic-arrow-end-left:before{content:\"\"}.Bosch-Ic-arrow-end-right:before{content:\"\"}.Bosch-Ic-arrow-left-down-filled:before{content:\"\"}.Bosch-Ic-arrow-left-filled:before{content:\"\"}.Bosch-Ic-arrow-left-up-filled:before{content:\"\"}.Bosch-Ic-arrow-right-down-filled:before{content:\"\"}.Bosch-Ic-arrow-right-filled:before{content:\"\"}.Bosch-Ic-arrow-right-up-filled:before{content:\"\"}.Bosch-Ic-arrow-up-filled:before{content:\"\"}.Bosch-Ic-batch:before{content:\"\"}.Bosch-Ic-calculator:before{content:\"\"}.Bosch-Ic-calendar-delete:before{content:\"\"}.Bosch-Ic-call-bluetooth:before{content:\"\"}.Bosch-Ic-call-deny-outline:before{content:\"\"}.Bosch-Ic-call-deny:before{content:\"\"}.Bosch-Ic-call-pick-up-outline:before{content:\"\"}.Bosch-Ic-call-pick-up:before{content:\"\"}.Bosch-Ic-call-settings:before{content:\"\"}.Bosch-Ic-clear-all-annotations:before{content:\"\"}.Bosch-Ic-connection:before{content:\"\"}.Bosch-Ic-core-data:before{content:\"\"}.Bosch-Ic-curve-scaling-view:before{content:\"\"}.Bosch-Ic-dashboard:before{content:\"\"}.Bosch-Ic-delete-material-manually:before{content:\"\"}.Bosch-Ic-dmc-code:before{content:\"\"}.Bosch-Ic-document-to-svg:before{content:\"\"}.Bosch-Ic-emergency-order:before{content:\"\"}.Bosch-Ic-fast-backwards:before{content:\"\"}.Bosch-Ic-fast-forwards:before{content:\"\"}.Bosch-Ic-favorite:before{content:\"\"}.Bosch-Ic-go-to:before{content:\"\"}.Bosch-Ic-gps:before{content:\"\"}.Bosch-Ic-home-filled:before{content:\"\"}.Bosch-Ic-input:before{content:\"\"}.Bosch-Ic-interface:before{content:\"\"}.Bosch-Ic-list:before{content:\"\"}.Bosch-Ic-malfunction-history:before{content:\"\"}.Bosch-Ic-malfunction-order:before{content:\"\"}.Bosch-Ic-material-list:before{content:\"\"}.Bosch-Ic-material:before{content:\"\"}.Bosch-Ic-maximize-window:before{content:\"\"}.Bosch-Ic-menu-tree:before{content:\"\"}.Bosch-Ic-minimize-window:before{content:\"\"}.Bosch-Ic-notification-hint:before{content:\"\"}.Bosch-Ic-notification-question:before{content:\"\"}.Bosch-Ic-notification-error:before{content:\"\"}.Bosch-Ic-notification-outline:before{content:\"\"}.Bosch-Ic-notification-success:before{content:\"\"}.Bosch-Ic-notification-warning:before{content:\"\"}.Bosch-Ic-notification:before{content:\"\"}.Bosch-Ic-output:before{content:\"\"}.Bosch-Ic-paste:before{content:\"\"}.Bosch-Ic-qr-code:before{content:\"\"}.Bosch-Ic-remote-cursor:before{content:\"\"}.Bosch-Ic-scale:before{content:\"\"}.Bosch-Ic-search-chart:before{content:\"\"}.Bosch-Ic-search-web:before{content:\"\"}.Bosch-Ic-search-window:before{content:\"\"}.Bosch-Ic-shape-ellipse:before{content:\"\"}.Bosch-Ic-shape-rectangle:before{content:\"\"}.Bosch-Ic-show-more-vertical:before{content:\"\"}.Bosch-Ic-signal:before{content:\"\"}.Bosch-Ic-skip-back:before{content:\"\"}.Bosch-Ic-skip-backward:before{content:\"\"}.Bosch-Ic-StarterKit:before{content:\"\"}.Bosch-Ic-skip-for:before{content:\"\"}.Bosch-Ic-skip-forward:before{content:\"\"}.Bosch-Ic-sort-alphabetically:before{content:\"\"}.Bosch-Ic-switch-language:before{content:\"\"}.Bosch-Ic-snyc-disabled:before{content:\"\"}.Bosch-Ic-sync-disabled:before{content:\"\"}.Bosch-Ic-sync-problem:before{content:\"\"}.Bosch-Ic-sync:before{content:\"\"}.Bosch-Ic-test:before{content:\"\"}.Bosch-Ic-to-order:before{content:\"\"}.Bosch-Ic-to-raw:before{content:\"\"}.Bosch-Ic-transport-orders:before{content:\"\"}.Bosch-Ic-unpin:before{content:\"\"}.Bosch-Ic-user-filled:before{content:\"\"}.Bosch-Ic-video-play:before{content:\"\"}.Bosch-Ic-weblink:before{content:\"\"}.Bosch-Ic-warning-outline:before{content:\"\"}.Bosch-Ic-add-material-manually:before{content:\"\"}.Bosch-Ic-add-material:before{content:\"\"}.Bosch-Ic-add:before{content:\"\"}.Bosch-Ic-adress-consumer:before{content:\"\"}.Bosch-Ic-adressbook:before{content:\"\"}.Bosch-Ic-alarm:before{content:\"\"}.Bosch-Ic-alert:before{content:\"\"}.Bosch-Ic-analysis:before{content:\"\"}.Bosch-Ic-anchor:before{content:\"\"}.Bosch-IC-3d-print:before{content:\"\"}.Bosch-Ic-tours:before{content:\"\"}.Bosch-Ic-add:before{content:\"\"}.Bosch-Ic-adress-consumer:before{content:\"\"}.Bosch-Ic-adressbook:before{content:\"\"}.Bosch-IC-agility:before{content:\"\"}.Bosch-Ic-clock-stop:before{content:\"\"}.Bosch-IC-ambulance:before{content:\"\"}.Bosch-Ic-analysis:before{content:\"\"}.Bosch-Ic-anchor:before{content:\"\"}.Bosch-Ic-arrow-down:before{content:\"\"}.Bosch-Ic-arrow-left:before{content:\"\"}.Bosch-Ic-arrow-left-down:before{content:\"\"}.Bosch-Ic-arrow-left-up:before{content:\"\"}.Bosch-Ic-arrow-right:before{content:\"\"}.Bosch-Ic-arrow-right-down:before{content:\"\"}.Bosch-Ic-arrow-right-up:before{content:\"\"}.Bosch-IC-arrow-turn-left:before{content:\"\"}.Bosch-IC-arrow-turn-right:before{content:\"\"}.Bosch-Ic-arrow-up:before{content:\"\"}.Bosch-IC-arrows:before{content:\"\"}.Bosch-IC-arrows-x-y-z:before{content:\"\"}.Bosch-IC-artificial-intelligence:before{content:\"\"}.Bosch-IC-assembly-line:before{content:\"\"}.Bosch-IC-atom:before{content:\"\"}.Bosch-IC-augmented-reality:before{content:\"\"}.Bosch-Ic-autobod:before{content:\"\"}.Bosch-Ic-arrow-expand-left:before{content:\"\"}.Bosch-Ic-arrow-expand-double-left:before{content:\"\"}.Bosch-IC-bar-chart:before{content:\"\"}.Bosch-IC-bar-chart-double:before{content:\"\"}.Bosch-Ic-battery-empty:before{content:\"\"}.Bosch-Ic-battery-25:before{content:\"\"}.Bosch-Ic-battery-50:before{content:\"\"}.Bosch-Ic-battery-75:before{content:\"\"}.Bosch-Ic-battery-100:before{content:\"\"}.Bosch-Ic-battery-error:before{content:\"\"}.Bosch-IC-battery_Li-Ion:before{content:\"\"}.Bosch-Ic-battery-charging:before{content:\"\"}.Bosch-Ic-help:before{content:\"\"}.Bosch-IC-bed:before{content:\"\"}.Bosch-IC-bicycle:before{content:\"\"}.Bosch-IC-bicycle-e:before{content:\"\"}.Bosch-IC-blog:before{content:\"\"}.Bosch-IC-bluetooth:before{content:\"\"}.Bosch-IC-bluetooth-LE:before{content:\"\"}.Bosch-IC-board-speaker:before{content:\"\"}.Bosch-IC-boiler-connected:before{content:\"\"}.Bosch-IC-book:before{content:\"\"}.Bosch-Ic-bookmark:before{content:\"\"}.Bosch-Ic-bookmark-add:before{content:\"\"}.Bosch-Ic-bookmark-check:before{content:\"\"}.Bosch-Ic-bookmark-delete:before{content:\"\"}.Bosch-IC-books:before{content:\"\"}.Bosch-IC-bookshelf:before{content:\"\"}.Bosch-Ic-box:before{content:\"\"}.Bosch-IC-box-closed:before{content:\"\"}.Bosch-IC-box-delivery:before{content:\"\"}.Bosch-IC-box-delivery-connected:before{content:\"\"}.Bosch-IC-brake-disk:before{content:\"\"}.Bosch-IC-briefcase:before{content:\"\"}.Bosch-IC-broom:before{content:\"\"}.Bosch-IC-broom-cloud-dirt:before{content:\"\"}.Bosch-Ic-brush:before{content:\"\"}.Bosch-Ic-bug:before{content:\"\"}.Bosch-IC-building:before{content:\"\"}.Bosch-IC-cactus:before{content:\"\"}.Bosch-IC-calculate:before{content:\"\"}.Bosch-Ic-calendar:before{content:\"\"}.Bosch-Ic-calendar-add:before{content:\"\"}.Bosch-IC-calendar-settings:before{content:\"\"}.Bosch-Ic-call:before{content:\"\"}.Bosch-IC-call-add:before{content:\"\"}.Bosch-IC-call-remove:before{content:\"\"}.Bosch-IC-call-sos:before{content:\"\"}.Bosch-IC-call-team:before{content:\"\"}.Bosch-Ic-call-wifi:before{content:\"\"}.Bosch-Ic-camera:before{content:\"\"}.Bosch-Ic-camera-switch:before{content:\"\"}.Bosch-IC-car:before{content:\"\"}.Bosch-IC-car-clock:before{content:\"\"}.Bosch-IC-car-connected:before{content:\"\"}.Bosch-IC-car-locator:before{content:\"\"}.Bosch-IC-car-mechanic:before{content:\"\"}.Bosch-IC-car-rental:before{content:\"\"}.Bosch-IC-car-seat-connected:before{content:\"\"}.Bosch-IC-car-side:before{content:\"\"}.Bosch-IC-car-side-user:before{content:\"\"}.Bosch-Ic-milkrun-cart:before{content:\"\"}.Bosch-Ic-certificate:before{content:\"\"}.Bosch-IC-certificate-pki:before{content:\"\"}.Bosch-IC-change:before{content:\"\"}.Bosch-Ic-chart:before{content:\"\"}.Bosch-IC-chart-check:before{content:\"\"}.Bosch-IC-chart-dummy:before{content:\"\"}.Bosch-Ic-diagram:before{content:\"\"}.Bosch-Ic-chat:before{content:\"\"}.Bosch-IC-chat-add:before{content:\"\"}.Bosch-IC-chat-question-answer:before{content:\"\"}.Bosch-IC-chat-remove:before{content:\"\"}.Bosch-Ic-checklist:before{content:\"\"}.Bosch-Ic-checkmark:before{content:\"\"}.Bosch-Ic-chip:before{content:\"\"}.Bosch-IC-circle-segment:before{content:\"\"}.Bosch-IC-clear-all:before{content:\"\"}.Bosch-Ic-clipboard:before{content:\"\"}.Bosch-Ic-clipboard-list:before{content:\"\"}.Bosch-Ic-clock:before{content:\"\"}.Bosch-Ic-abort:before,.bosch-ic-abort:before{content:\"\"}.Bosch-IC-close-all:before{content:\"\"}.Bosch-Ic-cloud:before{content:\"\"}.Bosch-IC-cloud-co2:before{content:\"\"}.Bosch-Ic-cloud-download:before{content:\"\"}.Bosch-IC-cloud-nox:before{content:\"\"}.Bosch-Ic-cloud-upload:before{content:\"\"}.Bosch-IC-club-arm-chair:before{content:\"\"}.Bosch-IC-coffee-break:before{content:\"\"}.Bosch-IC-coin-currency:before{content:\"\"}.Bosch-Ic-currency:before{content:\"\"}.Bosch-Ic-color-picker:before{content:\"\"}.Bosch-IC-colors:before{content:\"\"}.Bosch-Ic-command:before{content:\"\"}.Bosch-IC-communicator:before{content:\"\"}.Bosch-Ic-compare:before{content:\"\"}.Bosch-Ic-components:before{content:\"\"}.Bosch-Ic-components-available:before{content:\"\"}.Bosch-Ic-components-reservation:before{content:\"\"}.Bosch-IC-concierge-bell:before{content:\"\"}.Bosch-IC-configuration:before{content:\"\"}.Bosch-Ic-confirmation:before{content:\"\"}.Bosch-Ic-unconnected:before{content:\"\"}.Bosch-Ic-connected:before{content:\"\"}.Bosch-IC-connectivity:before{content:\"\"}.Bosch-Ic-builder:before{content:\"\"}.Bosch-IC-consumer-goods:before{content:\"\"}.Bosch-IC-contract:before{content:\"\"}.Bosch-Ic-copy:before{content:\"\"}.Bosch-IC-cube:before{content:\"\"}.Bosch-IC-cube-arrows:before{content:\"\"}.Bosch-Ic-StarterKit:before{content:\"\"}.Bosch-IC-cube-shock:before{content:\"\"}.Bosch-IC-cube-stacked:before{content:\"\"}.Bosch-Ic-customerservice:before{content:\"\"}.Bosch-IC-cutlery:before{content:\"\"}.Bosch-IC-damper:before{content:\"\"}.Bosch-IC-danger-flash:before{content:\"\"}.Bosch-IC-data-loss:before{content:\"\"}.Bosch-Ic-dealer:before{content:\"\"}.Bosch-Ic-delete:before{content:\"\"}.Bosch-Ic-delivery:before{content:\"\"}.Bosch-IC-denied:before{content:\"\"}.Bosch-Ic-desktop:before{content:\"\"}.Bosch-IC-desktop-application-2d:before{content:\"\"}.Bosch-IC-desktop-application-3d:before{content:\"\"}.Bosch-IC-development:before{content:\"\"}.Bosch-Ic-devices:before{content:\"\"}.Bosch-IC-devices-mobile:before{content:\"\"}.Bosch-Ic-directory:before{content:\"\"}.Bosch-Ic-dna:before{content:\"\"}.Bosch-Ic-do-not-disturb:before{content:\"\"}.Bosch-Ic-document:before{content:\"\"}.Bosch-Ic-document-add:before{content:\"\"}.Bosch-IC-document-arrow-down:before{content:\"\"}.Bosch-IC-document-arrow-up:before{content:\"\"}.Bosch-Ic-document-audio:before{content:\"\"}.Bosch-IC-document-check:before{content:\"\"}.Bosch-Ic-document-to-cloud:before{content:\"\"}.Bosch-Ic-document-copy:before{content:\"\"}.Bosch-Ic-document-delete:before{content:\"\"}.Bosch-Ic-document-to-doc:before{content:\"\"}.Bosch-Ic-document-edit:before{content:\"\"}.Bosch-Ic-document-error:before{content:\"\"}.Bosch-Ic-document-locked:before{content:\"\"}.Bosch-Ic-log-file:before{content:\"\"}.Bosch-Ic-document-to-one:before{content:\"\"}.Bosch-Ic-document-to-pdf:before{content:\"\"}.Bosch-Ic-document-plain:before{content:\"\"}.Bosch-Ic-document-plain-add:before{content:\"\"}.Bosch-Ic-document-plain-delete:before{content:\"\"}.Bosch-Ic-document-to-ppt:before{content:\"\"}.Bosch-Ic-document-to-pub:before{content:\"\"}.Bosch-Ic-document-to-rtf:before{content:\"\"}.Bosch-Ic-document-save-to:before{content:\"\"}.Bosch-Ic-search-document:before{content:\"\"}.Bosch-Ic-document-settings:before{content:\"\"}.Bosch-Ic-document-test:before{content:\"\"}.Bosch-Ic-document-text:before{content:\"\"}.Bosch-Ic-document-to-txt:before{content:\"\"}.Bosch-Ic-document-to-vsd:before{content:\"\"}.Bosch-Ic-document-to-xls:before{content:\"\"}.Bosch-Ic-document-to-xml:before{content:\"\"}.Bosch-Ic-document-to-zip:before{content:\"\"}.Bosch-IC-dome:before{content:\"\"}.Bosch-IC-door:before{content:\"\"}.Bosch-IC-door-sensor:before{content:\"\"}.Bosch-Ic-arrow-expand-down:before{content:\"\"}.Bosch-Ic-arrow-expand-double-down:before{content:\"\"}.Bosch-Ic-arrow-left-circle:before{content:\"\"}.Bosch-Ic-arrow-right-circle:before{content:\"\"}.Bosch-Ic-arrow-right-down-circle:before{content:\"\"}.Bosch-Ic-arrow-right-up-circle:before{content:\"\"}.Bosch-Ic-arrow-left-down-circle:before{content:\"\"}.Bosch-Ic-arrow-left-up-circle:before{content:\"\"}.Bosch-Ic-arrow-up-circle:before{content:\"\"}.Bosch-Ic-download:before{content:\"\"}.Bosch-IC-drag-handle:before{content:\"\"}.Bosch-IC-dragdrop:before{content:\"\"}.Bosch-IC-drop:before{content:\"\"}.Bosch-IC-e-Charging:before{content:\"\"}.Bosch-IC-e-mobility:before{content:\"\"}.Bosch-IC-ear-off:before{content:\"\"}.Bosch-IC-ear-on:before{content:\"\"}.Bosch-IC-eco-system:before{content:\"\"}.Bosch-Ic-edit:before{content:\"\"}.Bosch-IC-education:before{content:\"\"}.Bosch-IC-efficiency:before{content:\"\"}.Bosch-IC-elevator:before{content:\"\"}.Bosch-IC-elevator-alarm:before{content:\"\"}.Bosch-IC-elevator-cloud:before{content:\"\"}.Bosch-IC-elevator-headset:before{content:\"\"}.Bosch-IC-elevator-service:before{content:\"\"}.Bosch-IC-emergency-exit:before{content:\"\"}.Bosch-IC-emoji-happy:before{content:\"\"}.Bosch-IC-emoji-neutral:before{content:\"\"}.Bosch-IC-emoji-sad:before{content:\"\"}.Bosch-IC-emoji-super-happy:before{content:\"\"}.Bosch-IC-emoji-very-sad:before{content:\"\"}.Bosch-IC-EU-energy-label:before{content:\"\"}.Bosch-IC-excavator:before{content:\"\"}.Bosch-Ic-exit:before{content:\"\"}.Bosch-IC-expansion-arrows:before{content:\"\"}.Bosch-IC-explosion:before{content:\"\"}.Bosch-Ic-export:before{content:\"\"}.Bosch-IC-externallink:before{content:\"\"}.Bosch-IC-fast-forward:before{content:\"\"}.Bosch-IC-faucet:before{content:\"\"}.Bosch-IC-favorites:before{content:\"\"}.Bosch-IC-fax:before{content:\"\"}.Bosch-IC-female:before{content:\"\"}.Bosch-IC-film:before{content:\"\"}.Bosch-Ic-filter:before{content:\"\"}.Bosch-IC-filter-success:before{content:\"\"}.Bosch-IC-fingerprint:before{content:\"\"}.Bosch-IC-fire:before{content:\"\"}.Bosch-IC-fire-emergency:before{content:\"\"}.Bosch-IC-fireworks:before{content:\"\"}.Bosch-Ic-first-aid:before{content:\"\"}.Bosch-IC-first-aid-cross:before{content:\"\"}.Bosch-IC-fit-to-sceen:before{content:\"\"}.Bosch-Ic-flag:before{content:\"\"}.Bosch-Ic-danger-flash-outline:before{content:\"\"}.Bosch-IC-flask:before{content:\"\"}.Bosch-Ic-flexpress:before{content:\"\"}.Bosch-Ic-twitter:before{content:\"\"}.Bosch-Ic-folder:before{content:\"\"}.Bosch-Ic-download-from-folder:before{content:\"\"}.Bosch-Ic-download-frame:before{content:\"\"}.Bosch-IC-folder-open:before{content:\"\"}.Bosch-Ic-upload-to-folder:before{content:\"\"}.Bosch-Ic-fork-lift:before{content:\"\"}.Bosch-IC-fork-lift-locator:before{content:\"\"}.Bosch-Ic-arrow-expand-right:before{content:\"\"}.Bosch-Ic-arrow-expand-double-right:before{content:\"\"}.Bosch-IC-full-empty:before{content:\"\"}.Bosch-Ic-fullscreen:before{content:\"\"}.Bosch-IC-fullscreen-arrows:before{content:\"\"}.Bosch-Ic-fullscreen-exit:before{content:\"\"}.Bosch-IC-g-arrow-down:before{content:\"\"}.Bosch-IC-g-arrow-up:before{content:\"\"}.Bosch-IC-generator:before{content:\"\"}.Bosch-IC-gift:before{content:\"\"}.Bosch-IC-glance:before{content:\"\"}.Bosch-IC-glas-plate:before{content:\"\"}.Bosch-IC-globe:before{content:\"\"}.Bosch-IC-globe-arrow:before{content:\"\"}.Bosch-IC-glossary:before{content:\"\"}.Bosch-Ic-grid:before{content:\"\"}.Bosch-IC-hammer:before{content:\"\"}.Bosch-Ic-hand:before{content:\"\"}.Bosch-IC-hand-motion:before{content:\"\"}.Bosch-IC-hand-motion-off:before{content:\"\"}.Bosch-IC-handlewithcare:before{content:\"\"}.Bosch-Ic-add-material-manually:before{content:\"\"}.Bosch-Ic-handover-check:before{content:\"\"}.Bosch-Ic-remove-from-handover:before{content:\"\"}.Bosch-IC-hanger:before{content:\"\"}.Bosch-Ic-health:before{content:\"\"}.Bosch-IC-heart:before{content:\"\"}.Bosch-Ic-history:before{content:\"\"}.Bosch-Ic-home-outline:before{content:\"\"}.Bosch-IC-home-locator:before{content:\"\"}.Bosch-Ic-sandclock:before{content:\"\"}.Bosch-IC-hydrant:before{content:\"\"}.Bosch-IC-ice:before{content:\"\"}.Bosch-Ic-image:before{content:\"\"}.Bosch-IC-imagery-add:before{content:\"\"}.Bosch-IC-imagery-remove:before{content:\"\"}.Bosch-Ic-import:before{content:\"\"}.Bosch-Ic-imprint:before{content:\"\"}.Bosch-IC-impulse:before{content:\"\"}.Bosch-Ic-fabric:before{content:\"\"}.Bosch-IC-industry-clock:before{content:\"\"}.Bosch-IC-industry-connected:before{content:\"\"}.Bosch-Ic-information:before{content:\"\"}.Bosch-Ic-information-tooltip:before{content:\"\"}.Bosch-IC-interval:before{content:\"\"}.Bosch-IC-it-device:before{content:\"\"}.Bosch-IC-jewel:before{content:\"\"}.Bosch-IC-keyboard:before{content:\"\"}.Bosch-IC-label:before{content:\"\"}.Bosch-Ic-laptop-01:before{content:\"\"}.Bosch-IC-laser:before{content:\"\"}.Bosch-IC-layout:before{content:\"\"}.Bosch-IC-leaf:before{content:\"\"}.Bosch-IC-led:before{content:\"\"}.Bosch-Ic-world:before{content:\"\"}.Bosch-Ic-facebook:before{content:\"\"}.Bosch-Ic-checkmark-outline:before{content:\"\"}.Bosch-Ic-youtube:before{content:\"\"}.Bosch-Ic-share:before{content:\"\"}.Bosch-Ic-user:before{content:\"\"}.Bosch-Ic-upload_outline:before{content:\"\"}.Bosch-Ic-download_outline:before{content:\"\"}.Bosch-Ic-wishlist-add:before{content:\"\"}.Bosch-Ic-youtube-frame:before{content:\"\"}.Bosch-Ic-less-minimize:before{content:\"\"}.Bosch-IC-lightbulb:before{content:\"\"}.bosch-Ic-innovation:before{content:\"\"}.Bosch-IC-line-chart:before{content:\"\"}.Bosch-Ic-link:before{content:\"\"}.Bosch-IC-link-broken:before{content:\"\"}.Bosch-Ic-list-view:before{content:\"\"}.Bosch-Ic-menu:before{content:\"\"}.Bosch-IC-livechat:before{content:\"\"}.Bosch-Ic-location-pin:before{content:\"\"}.Bosch-IC-locator-ip-connected:before{content:\"\"}.Bosch-IC-locator-ip-disconnected:before{content:\"\"}.Bosch-IC-locator-spot:before{content:\"\"}.Bosch-IC-locator-spot-check:before{content:\"\"}.Bosch-Ic-lock-closed:before{content:\"\"}.Bosch-Ic-lock-open:before{content:\"\"}.Bosch-Ic-log-in:before{content:\"\"}.Bosch-Ic-logistics:before{content:\"\"}.Bosch-Ic-log-out:before{content:\"\"}.Bosch-IC-machine:before{content:\"\"}.Bosch-Ic-magnet:before{content:\"\"}.Bosch-Ic-mail:before{content:\"\"}.Bosch-Ic-mail-forward:before{content:\"\"}.Bosch-Ic-mail-open:before{content:\"\"}.Bosch-Ic-mail-out:before{content:\"\"}.Bosch-Ic-mail-answer:before{content:\"\"}.Bosch-IC-male:before{content:\"\"}.Bosch-Ic-map:before{content:\"\"}.Bosch-Ic-add-material:before{content:\"\"}.Bosch-IC-material-check:before{content:\"\"}.Bosch-Ic-remove-material:before{content:\"\"}.Bosch-IC-maximize:before{content:\"\"}.Bosch-IC-mechanic:before{content:\"\"}.Bosch-IC-megaphone:before{content:\"\"}.Bosch-Ic-message:before{content:\"\"}.Bosch-IC-mic:before{content:\"\"}.Bosch-Ic-microphone:before{content:\"\"}.Bosch-IC-microphone-classic:before{content:\"\"}.Bosch-IC-minimize:before{content:\"\"}.Bosch-IC-money-currency:before{content:\"\"}.Bosch-IC-money-dollar:before{content:\"\"}.Bosch-IC-moneybag-currency:before{content:\"\"}.Bosch-IC-moneybag-dollar:before{content:\"\"}.Bosch-IC-monument:before{content:\"\"}.Bosch-IC-moon:before{content:\"\"}.Bosch-IC-mouse:before{content:\"\"}.Bosch-IC-mouse-left:before{content:\"\"}.Bosch-IC-mouse-right:before{content:\"\"}.Bosch-IC-mouth:before{content:\"\"}.Bosch-Ic-my-product:before{content:\"\"}.Bosch-IC-new-way-work:before{content:\"\"}.Bosch-Ic-mail-sent:before{content:\"\"}.Bosch-Ic-news:before{content:\"\"}.Bosch-IC-nose:before{content:\"\"}.Bosch-Ic-notes:before{content:\"\"}.Bosch-Ic-notes-edit:before{content:\"\"}.Bosch-Ic-alarm:before{content:\"\"}.Bosch-IC-notification-active:before{content:\"\"}.Bosch-IC-notification-add:before{content:\"\"}.Bosch-IC-notification-remove:before{content:\"\"}.Bosch-Ic-oil-trailer:before{content:\"\"}.Bosch-IC-omnichannel:before{content:\"\"}.Bosch-Ic-show-more-horizontal:before{content:\"\"}.Bosch-IC-origami-boat:before{content:\"\"}.Bosch-Ic-palette-trailer:before{content:\"\"}.Bosch-IC-pallete-car-connected:before{content:\"\"}.Bosch-IC-panel:before{content:\"\"}.Bosch-Ic-paperclip:before{content:\"\"}.Bosch-IC-paperplane:before{content:\"\"}.Bosch-IC-parking:before{content:\"\"}.Bosch-Ic-pause:before{content:\"\"}.Bosch-Ic-creditcard:before{content:\"\"}.Bosch-IC-people:before{content:\"\"}.Bosch-IC-petrol-station:before{content:\"\"}.Bosch-IC-piggybank:before{content:\"\"}.Bosch-Ic-pin:before{content:\"\"}.Bosch-IC-pin-modern:before{content:\"\"}.Bosch-IC-plane-side:before{content:\"\"}.Bosch-Ic-play:before{content:\"\"}.Bosch-IC-plug-12V:before{content:\"\"}.Bosch-IC-podium-speaker:before{content:\"\"}.Bosch-IC-police:before{content:\"\"}.Bosch-IC-poop:before{content:\"\"}.Bosch-IC-post-it:before{content:\"\"}.Bosch-IC-postal-code:before{content:\"\"}.Bosch-IC-power:before{content:\"\"}.Bosch-Ic-print:before{content:\"\"}.Bosch-IC-prototyping:before{content:\"\"}.Bosch-IC-puzzle:before{content:\"\"}.Bosch-IC-quad:before{content:\"\"}.Bosch-IC-question:before{content:\"\"}.Bosch-IC-radar:before{content:\"\"}.Bosch-IC-radio:before{content:\"\"}.Bosch-Ic-radio:before{content:\"\"}.Bosch-IC-redirect:before{content:\"\"}.Bosch-Ic-redo:before{content:\"\"}.Bosch-IC-reference:before{content:\"\"}.Bosch-Ic-refresh:before{content:\"\"}.Bosch-IC-refresh-cloud:before{content:\"\"}.Bosch-Ic-registration:before{content:\"\"}.Bosch-IC-remote:before{content:\"\"}.Bosch-Ic-reset:before{content:\"\"}.Bosch-IC-resolution:before{content:\"\"}.Bosch-Ic-robot-automation:before{content:\"\"}.Bosch-IC-robot-connected:before{content:\"\"}.Bosch-IC-robothead:before{content:\"\"}.Bosch-IC-rocket:before{content:\"\"}.Bosch-Ic-rotation:before{content:\"\"}.Bosch-Ic-rotate-360-degrees:before{content:\"\"}.Bosch-Ic-rotate-clockwise:before{content:\"\"}.Bosch-Ic-rotate-counterclockwise:before{content:\"\"}.Bosch-IC-rotation-y-down:before{content:\"\"}.Bosch-IC-rotation-y-up:before{content:\"\"}.Bosch-Ic-navigation:before{content:\"\"}.Bosch-Ic-measure:before{content:\"\"}.Bosch-IC-ruler-pen:before{content:\"\"}.Bosch-Ic-satelite:before{content:\"\"}.Bosch-Ic-save:before{content:\"\"}.Bosch-IC-scale:before{content:\"\"}.Bosch-Ic-cut:before{content:\"\"}.Bosch-Ic-search:before{content:\"\"}.Bosch-IC-security:before{content:\"\"}.Bosch-IC-security-check:before{content:\"\"}.Bosch-IC-security-user:before{content:\"\"}.Bosch-Ic-sensor:before{content:\"\"}.Bosch-Ic-server:before{content:\"\"}.Bosch-IC-server-expansion:before{content:\"\"}.Bosch-IC-server-rate:before{content:\"\"}.Bosch-IC-service-agent:before{content:\"\"}.Bosch-IC-service-time:before{content:\"\"}.Bosch-Ic-settings:before{content:\"\"}.Bosch-IC-settings-arrows:before{content:\"\"}.Bosch-IC-settings-connected:before{content:\"\"}.Bosch-Ic-share-outline:before{content:\"\"}.Bosch-IC-shield-stop:before{content:\"\"}.Bosch-IC-ship:before{content:\"\"}.Bosch-IC-ship-side:before{content:\"\"}.Bosch-Ic-shoppingcart:before{content:\"\"}.Bosch-IC-shoppingcart-add:before{content:\"\"}.Bosch-IC-shoppingcart-switch:before{content:\"\"}.Bosch-IC-signal-full:before{content:\"\"}.Bosch-IC-signal-half:before{content:\"\"}.Bosch-IC-signal-lost:before{content:\"\"}.Bosch-IC-signpost:before{content:\"\"}.Bosch-IC-simcard:before{content:\"\"}.Bosch-IC-skyscraper:before{content:\"\"}.Bosch-IC-smartcity:before{content:\"\"}.Bosch-IC-smarthome:before{content:\"\"}.Bosch-Ic-phone:before{content:\"\"}.Bosch-IC-smartphone-acoustic:before{content:\"\"}.Bosch-IC-smartphone-arrow-right:before{content:\"\"}.Bosch-IC-smartphone-arrows-x-y-z:before{content:\"\"}.Bosch-IC-smartphone-clock:before{content:\"\"}.Bosch-IC-smartphone-cloud:before{content:\"\"}.Bosch-IC-smartphone-loading-wheel:before{content:\"\"}.Bosch-IC-smartphone-smashed:before{content:\"\"}.Bosch-IC-smartphone-vibration:before{content:\"\"}.Bosch-IC-smartphone-z:before{content:\"\"}.Bosch-Ic-spareparts:before{content:\"\"}.Bosch-IC-spark:before{content:\"\"}.Bosch-IC-speaker-acoustic:before{content:\"\"}.Bosch-IC-speedometer:before{content:\"\"}.Bosch-IC-stadium:before{content:\"\"}.Bosch-IC-stairs:before{content:\"\"}.Bosch-IC-stamp:before{content:\"\"}.Bosch-IC-standby:before{content:\"\"}.Bosch-IC-steering-wheel:before{content:\"\"}.Bosch-IC-steering-wheel-connected:before{content:\"\"}.Bosch-IC-steering-wheel-hands:before{content:\"\"}.Bosch-IC-steps:before{content:\"\"}.Bosch-IC-stethoscope:before{content:\"\"}.Bosch-Ic-stop:before{content:\"\"}.Bosch-IC-stopwatch:before{content:\"\"}.Bosch-IC-storage-local:before{content:\"\"}.Bosch-IC-structure:before{content:\"\"}.Bosch-IC-subtitles:before{content:\"\"}.Bosch-Ic-summary:before{content:\"\"}.Bosch-IC-sun:before{content:\"\"}.Bosch-IC-sun-half-filled:before{content:\"\"}.Bosch-IC-sunshade-table:before{content:\"\"}.Bosch-IC-surveillance:before{content:\"\"}.Bosch-IC-table-chairs:before{content:\"\"}.Bosch-Ic-tablet:before{content:\"\"}.Bosch-IC-team:before{content:\"\"}.Bosch-IC-team-lightbulb:before{content:\"\"}.Bosch-IC-technical-service:before{content:\"\"}.Bosch-Ic-temperature:before{content:\"\"}.Bosch-IC-temperature-high:before{content:\"\"}.Bosch-IC-temperature-low:before{content:\"\"}.Bosch-IC-theater:before{content:\"\"}.Bosch-Ic-dislike:before{content:\"\"}.Bosch-Ic-like:before{content:\"\"}.Bosch-Ic-ticket:before{content:\"\"}.Bosch-IC-touch:before{content:\"\"}.Bosch-IC-touch-sos:before{content:\"\"}.Bosch-IC-towing-truck:before{content:\"\"}.Bosch-IC-train:before{content:\"\"}.Bosch-IC-train-side:before{content:\"\"}.Bosch-Ic-transport-movements:before{content:\"\"}.Bosch-IC-transscript:before{content:\"\"}.Bosch-IC-transscript-off:before{content:\"\"}.Bosch-IC-transscript-on:before{content:\"\"}.Bosch-IC-tree:before{content:\"\"}.Bosch-IC-tricycle:before{content:\"\"}.Bosch-Ic-default-trailer:before{content:\"\"}.Bosch-Ic-taxi-trailer:before{content:\"\"}.Bosch-Ic-shelve-trailer:before{content:\"\"}.Bosch-IC-trophy:before{content:\"\"}.Bosch-IC-truck:before{content:\"\"}.Bosch-IC-tuktuk:before{content:\"\"}.Bosch-Ic-tune:before{content:\"\"}.Bosch-IC-typography:before{content:\"\"}.Bosch-IC-ui:before{content:\"\"}.Bosch-IC-umbrella:before{content:\"\"}.Bosch-Ic-undo:before{content:\"\"}.Bosch-Ic-arrow-expand-up:before{content:\"\"}.Bosch-Ic-arrow-expand-double-up:before{content:\"\"}.Bosch-Ic-sort:before{content:\"\"}.Bosch-Ic-upload:before{content:\"\"}.Bosch-IC-usb:before{content:\"\"}.Bosch-Ic-user-outline:before{content:\"\"}.Bosch-IC-user-advanced:before{content:\"\"}.Bosch-IC-user-beginner:before{content:\"\"}.Bosch-IC-user-desktop:before{content:\"\"}.Bosch-IC-user-down:before{content:\"\"}.Bosch-IC-user-falling:before{content:\"\"}.Bosch-IC-user-hand:before{content:\"\"}.Bosch-IC-user-hand-stop:before{content:\"\"}.Bosch-IC-user-professional:before{content:\"\"}.Bosch-IC-user-run:before{content:\"\"}.Bosch-IC-user-share:before{content:\"\"}.Bosch-IC-user-voice:before{content:\"\"}.Bosch-IC-user-walk:before{content:\"\"}.Bosch-Ic-videocam:before{content:\"\"}.Bosch-Ic-videocam-disabled:before{content:\"\"}.Bosch-IC-video-record:before{content:\"\"}.Bosch-IC-virtual-reality:before{content:\"\"}.Bosch-Ic-volume-disabled:before{content:\"\"}.Bosch-Ic-volume-high:before{content:\"\"}.Bosch-Ic-volume-low:before{content:\"\"}.Bosch-Ic-volume-off:before{content:\"\"}.Bosch-Ic-magic-wand:before{content:\"\"}.Bosch-Ic-hidden-project:before{content:\"\"}.Bosch-Ic-show:before{content:\"\"}.Bosch-IC-water-shower:before{content:\"\"}.Bosch-IC-welcome:before{content:\"\"}.Bosch-IC-wellness:before{content:\"\"}.Bosch-IC-wheelchair:before{content:\"\"}.Bosch-Ic-alert:before{content:\"\"}.Bosch-IC-wide-angled-arrow:before{content:\"\"}.Bosch-Ic-wifi:before{content:\"\"}.Bosch-Ic-window-analysis:before{content:\"\"}.Bosch-Ic-window-browser:before{content:\"\"}.Bosch-Ic-window-console:before{content:\"\"}.Bosch-Ic-gaussian-view:before{content:\"\"}.Bosch-Ic-window-info:before{content:\"\"}.Bosch-IC-window-new:before{content:\"\"}.Bosch-IC-window-resize:before{content:\"\"}.Bosch-Ic-general-scaling-view:before{content:\"\"}.Bosch-Ic-restore-window:before{content:\"\"}.Bosch-Ic-window-statistic:before{content:\"\"}.Bosch-Ic-wishlist:before{content:\"\"}.Bosch-Ic-work-orders:before{content:\"\"}.Bosch-IC-worldwideweb:before{content:\"\"}.Bosch-Ic-wrench:before{content:\"\"}.Bosch-Ic-zoom-in:before{content:\"\"}.Bosch-Ic-zoom-out:before{content:\"\"}:host{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin-top:24px}:host .mdc-select:not(.mdc-select--disabled) .mdc-floating-label{color:#000000}:host .mdc-select>.mdc-select__anchor{border-radius:0}:host .mdc-select div.bci-core-paginator-dropdown{background-color:#EFEFF0;width:170px;height:48px;border-bottom:1px solid #A8AFB5}:host .mdc-select div.bci-core-paginator-dropdown:hover::before{background-color:#EFEFF0}:host .mdc-select div.bci-core-paginator-dropdown>.mdc-select__dropdown-icon.bosch-ic.bosch-ic-down{height:20px;width:20px}:host .mdc-select div.bci-core-paginator-dropdown>.mdc-floating-label{font-family:\"Bosch-Sans\";font-size:12px;font-weight:500;line-height:18px;-webkit-transform:translateY(-106%) scale(1);transform:translateY(-106%) scale(1);will-change:inherit}:host .mdc-select div.bci-core-paginator-dropdown>.mdc-select__selected-text{font-family:\"Bosch-Sans\";font-size:16px;font-weight:400;line-height:24px}:host .mdc-select div.bci-core-paginator-dropdown-select{width:170px;background:white;border:1px solid #A8AFB5;border-radius:0}:host .mdc-select div.bci-core-paginator-dropdown-select>.mdc-list{padding:0}:host .mdc-select div.bci-core-paginator-dropdown-select .mdc-list-item{height:48px}:host .mdc-select div.bci-core-paginator-dropdown-select .mdc-list-item.mdc-list-item--selected{background:#005691;color:#FFFFFF}:host .mdc-select div.bci-core-paginator-dropdown-select .mdc-list-item:hover{background:#7FC6E7;color:#FFFFFF}@media (min-width: 480px){:host .bci-core-paginator-pages-container{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:end;justify-content:flex-end;min-width:auto;height:32px}:host .bci-core-paginator-pages-container *,:host .bci-core-paginator-pages-container *:hover,:host .bci-core-paginator-pages-container *:active,:host .bci-core-paginator-pages-container *:focus{margin:0;padding:0;line-height:1.428571429;color:#000000;border:none;background:none;text-decoration:none}:host .bci-core-paginator-pages-container>*,:host .bci-core-paginator-pages-container>*:hover,:host .bci-core-paginator-pages-container>*:active,:host .bci-core-paginator-pages-container>*:focus{cursor:pointer;font-size:14px;display:inline-block;min-width:32px;width:32px;height:32px;line-height:32px;border-radius:50%;text-align:center;margin-right:4px;color:#000000;background-color:transparent}:host .bci-core-paginator-pages-container>*:first-child::after,:host .bci-core-paginator-pages-container>*:hover:first-child::after,:host .bci-core-paginator-pages-container>*:active:first-child::after,:host .bci-core-paginator-pages-container>*:focus:first-child::after{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:14px;content:\"\";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host .bci-core-paginator-pages-container>*:first-child:hover,:host .bci-core-paginator-pages-container>*:hover:first-child:hover,:host .bci-core-paginator-pages-container>*:active:first-child:hover,:host .bci-core-paginator-pages-container>*:focus:first-child:hover{color:#008ecf;background-color:transparent}:host .bci-core-paginator-pages-container>*:last-child::after,:host .bci-core-paginator-pages-container>*:hover:last-child::after,:host .bci-core-paginator-pages-container>*:active:last-child::after,:host .bci-core-paginator-pages-container>*:focus:last-child::after{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:14px;content:\"\";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host .bci-core-paginator-pages-container>*:last-child:hover,:host .bci-core-paginator-pages-container>*:hover:last-child:hover,:host .bci-core-paginator-pages-container>*:active:last-child:hover,:host .bci-core-paginator-pages-container>*:focus:last-child:hover{color:#008ecf;background-color:transparent}:host .bci-core-paginator-pages-container>*:hover{color:#FFFFFF;background-color:#008ecf}:host .bci-core-paginator-pages-container>*:hover *{color:#FFFFFF;background-color:#008ecf}:host .bci-core-paginator-pages-container>*:disabled,:host .bci-core-paginator-pages-container *.disabled{opacity:0.33;cursor:not-allowed;color:#000000}:host .bci-core-paginator-pages-container>*:disabled *,:host .bci-core-paginator-pages-container *.disabled *{cursor:not-allowed;color:#000000}:host .bci-core-paginator-pages-container>*.selected{color:#FFFFFF;background-color:#005691;cursor:default}:host .bci-core-paginator-pages-container>*.wide{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;border-radius:25px;padding:0 8px}:host .bci-core-paginator-pages-container>*.ellipsis{color:#000000;cursor:default}:host .bci-core-paginator-pages-container>*.ellipsis:hover{color:#000000;background-color:transparent}:host .bci-core-paginator-pages-container>*.mobile{display:none}}@media (max-width: 480px){:host{-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-align:center;align-items:center}:host .mdc-select{width:100%}:host .mdc-select div.bci-core-paginator-dropdown{width:100%;margin-bottom:15px}:host div.bci-core-paginator-pages-container{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;width:100%;-ms-flex-pack:justify;justify-content:space-between}:host div.bci-core-paginator-pages-container *,:host div.bci-core-paginator-pages-container *:hover,:host div.bci-core-paginator-pages-container *:active,:host div.bci-core-paginator-pages-container *:focus{margin:0;padding:0;line-height:1.428571429;color:#000000;border:none;background:none;text-decoration:none}:host div.bci-core-paginator-pages-container>*,:host div.bci-core-paginator-pages-container>*:hover,:host div.bci-core-paginator-pages-container>*:active,:host div.bci-core-paginator-pages-container>*:focus{cursor:pointer;font-size:14px;display:inline-block;min-width:32px;width:32px;height:32px;line-height:32px;border-radius:50%;text-align:center;margin-right:4px;color:#000000;background-color:transparent;display:none}:host div.bci-core-paginator-pages-container>*:first-child::after,:host div.bci-core-paginator-pages-container>*:hover:first-child::after,:host div.bci-core-paginator-pages-container>*:active:first-child::after,:host div.bci-core-paginator-pages-container>*:focus:first-child::after{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:14px;content:\"\";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host div.bci-core-paginator-pages-container>*:first-child:hover,:host div.bci-core-paginator-pages-container>*:hover:first-child:hover,:host div.bci-core-paginator-pages-container>*:active:first-child:hover,:host div.bci-core-paginator-pages-container>*:focus:first-child:hover{color:#008ecf;background-color:transparent}:host div.bci-core-paginator-pages-container>*:last-child::after,:host div.bci-core-paginator-pages-container>*:hover:last-child::after,:host div.bci-core-paginator-pages-container>*:active:last-child::after,:host div.bci-core-paginator-pages-container>*:focus:last-child::after{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:14px;content:\"\";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:host div.bci-core-paginator-pages-container>*:last-child:hover,:host div.bci-core-paginator-pages-container>*:hover:last-child:hover,:host div.bci-core-paginator-pages-container>*:active:last-child:hover,:host div.bci-core-paginator-pages-container>*:focus:last-child:hover{color:#008ecf;background-color:transparent}:host div.bci-core-paginator-pages-container>*:disabled,:host div.bci-core-paginator-pages-container *.disabled{opacity:0.33;cursor:not-allowed;color:#000000}:host div.bci-core-paginator-pages-container>*:disabled *,:host div.bci-core-paginator-pages-container *.disabled *{cursor:not-allowed;color:#000000}:host div.bci-core-paginator-pages-container>*.wide{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;border-radius:25px;padding:0 8px}:host div.bci-core-paginator-pages-container>*.mobile,:host div.bci-core-paginator-pages-container *:first-child,:host div.bci-core-paginator-pages-container *:last-child{display:inline}}";

const Paginator = class {
    constructor(hostRef) {
        Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.page = Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "page", 7);
        /** Number of items to display on a page. By default set to 10. */
        this.pageSize = 10;
        /** The set of provided page size options to display to the user. */
        this.pageSizeOptions = '[]';
        /** The length of the total number of items that are being paginated. Defaulted to 0. */
        this.length = 0;
        /** The zero-based page index of the displayed list of items. Defaulted to 0. */
        this.pageIndex = 0;
        /** If page size option is not needed */
        this.showPageSizeSelector = false;
        this.paginatorInput = {
            length: 0,
            pageIndex: 0,
            pageSize: 10,
            pageSizeOptions: [],
            showPageSizeSelector: false
        };
        this.pages = [];
        this.pagesNumber = 0;
        this.previousPageIndex = 0;
    }
    watchLengthHandler(newValue) {
        this.paginatorInput = Object.assign(Object.assign({}, this.paginatorInput), { length: newValue });
        this.recalculatePages();
    }
    watchPageSizeOptionsHandler(newValue) {
        this.paginatorInput = Object.assign(Object.assign({}, this.paginatorInput), { pageSizeOptions: JSON.parse(newValue) });
        this.recalculatePages();
    }
    watchPageIndex(newValue) {
        this.paginatorInput = Object.assign(Object.assign({}, this.paginatorInput), { pageIndex: newValue });
    }
    watchShowPageSizeSelector(newValue) {
        this.paginatorInput = Object.assign(Object.assign({}, this.paginatorInput), { showPageSizeSelector: newValue });
    }
    watchPageSize(newValue) {
        this.paginatorInput = Object.assign(Object.assign({}, this.paginatorInput), { pageSize: newValue });
        this.recalculatePages();
    }
    clickHandler(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        const currentTarget = ev.composedPath()[0];
        if (currentTarget.offsetParent === this.menuElement) {
            return;
        }
        if (this.selectElement !== undefined &&
            this.selectElement.className.includes('mdc-select--activated') &&
            this.mdcMenu !== undefined) {
            this.mdcMenu.open = false;
        }
    }
    async componentWillLoad() {
        await Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_4__["s"])();
        this.paginatorInput = {
            length: this.length,
            pageIndex: this.pageIndex,
            pageSize: this.pageSize,
            pageSizeOptions: typeof this.pageSizeOptions === 'string' ? JSON.parse(this.pageSizeOptions) : this.pageSizeOptions,
            showPageSizeSelector: this.showPageSizeSelector
        };
        this.recalculatePages();
    }
    componentDidLoad() {
        if (this.selectElement && this.menuElement) {
            this.mdcSelect = new MDCSelect(this.selectElement);
            this.mdcMenu = new _component_080a2a5e_js__WEBPACK_IMPORTED_MODULE_2__["M"](this.menuElement);
        }
    }
    componentDidUnload() {
        if (!this.mdcSelect) {
            return;
        }
        this.mdcSelect.destroy();
        if (!this.mdcMenu) {
            return;
        }
        this.mdcMenu.destroy();
    }
    updatePageSize(newVal) {
        this.paginatorInput = Object.assign(Object.assign({}, this.paginatorInput), { pageSize: parseFloat(newVal) });
        this.recalculatePages();
        this.emitPageEvent();
    }
    updatePageIndex(newVal) {
        if (newVal < 0 || newVal > this.pagesNumber - 1) {
            return;
        }
        this.previousPageIndex = this.paginatorInput.pageIndex;
        this.paginatorInput = Object.assign(Object.assign({}, this.paginatorInput), { pageIndex: newVal });
        this.positionBasedRender();
        this.emitPageEvent();
    }
    previousPage() {
        this.updatePageIndex(this.paginatorInput.pageIndex - 1);
    }
    nextPage() {
        this.updatePageIndex(this.paginatorInput.pageIndex + 1);
    }
    recalculatePages() {
        this.pagesNumber = Math.ceil(this.paginatorInput.length / this.paginatorInput.pageSize);
        if (this.pagesNumber < this.pages.length) {
            this.updatePageIndex(this.pagesNumber - 1);
        }
        this.pages = [...Array(this.pagesNumber)]
            .map((_, i) => i + 1);
    }
    isAtFirstPage() {
        return this.paginatorInput.pageIndex === 0;
    }
    isAtLastPage() {
        return this.paginatorInput.pageIndex === this.pagesNumber - 1;
    }
    emitPageEvent() {
        this.page.emit({
            length: this.paginatorInput.length,
            pageIndex: this.paginatorInput.pageIndex,
            pageSize: this.paginatorInput.pageSize,
            previousPageIndex: this.previousPageIndex
        });
    }
    getSelectedMenuItemClass(option) {
        return this.paginatorInput.pageSize === option ? ' mdc-list-item--selected' : '';
    }
    getPageButtonClass(index, page) {
        let buttonClass = 'bci-core-paginator-page-button ';
        buttonClass += this.paginatorInput.pageIndex === index ? ' selected' : '';
        buttonClass += page.toString().length > 2 ? ' wide' : '';
        return buttonClass;
    }
    getEllipsesElement() {
        return Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "ellipsis" }, "...");
    }
    getPageButtonElement(page, index) {
        return Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { key: index, onClick: () => this.updatePageIndex(index), class: `${this.getPageButtonClass(index, page)}` }, page);
    }
    getPredicateBasedRender(acc, page, index, pagePredicate, ellipsisPredicate) {
        if (pagePredicate) {
            return acc.concat(this.getPageButtonElement(page, index));
        }
        else if (ellipsisPredicate) {
            return acc.concat(this.getEllipsesElement());
        }
        else {
            return acc;
        }
    }
    positionBasedRender() {
        if (this.paginatorInput.pageIndex < 5) {
            return this.pages.reduce((acc, page, index) => this.getPredicateBasedRender(acc, page, index, index < 5 || index === this.pages.length - 1, index === 5), []);
        }
        else if (this.paginatorInput.pageIndex > this.pagesNumber - 6) {
            return this.pages.reduce((acc, page, index) => this.getPredicateBasedRender(acc, page, index, index === 0 || index > this.pages.length - 6, index === 1), []);
        }
        else {
            return this.pages.reduce((acc, page, index) => this.getPredicateBasedRender(acc, page, index, index === 0 || index === this.pages.length - 1 || index >= this.paginatorInput.pageIndex - 1 && index <= this.paginatorInput.pageIndex + 1, index === 1 || index === this.pages.length - 2), []);
        }
    }
    renderMobilePages() {
        return Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "mobile" }, this.paginatorInput.pageIndex + 1, "/", this.pagesNumber);
    }
    renderDropdownMenu() {
        if (this.paginatorInput.showPageSizeSelector && this.paginatorInput.pageSizeOptions.length > 1) {
            return Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mdc-select mdc-select--filled", ref: el => this.selectElement = el }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mdc-select__anchor bci-core-paginator-dropdown" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "mdc-select__ripple" }), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "mdc-floating-label mdc-floating-label--float-above" }, Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_4__["t"])('listItemsPerPage')), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "mdc-select__selected-text" }), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "mdc-select__dropdown-icon bosch-ic bosch-ic-down" })), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fixed mdc-menu-surface--fullwidth bci-core-paginator-dropdown-select", ref: el => this.menuElement = el }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: "mdc-list" }, this.paginatorInput.pageSizeOptions.map((option, index) => Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", { "data-value": option, key: index, "aria-selected": "false", role: "option", onClick: () => this.updatePageSize(option), class: `mdc-list-item ${this.getSelectedMenuItemClass(option)}` }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "mdc-list-item__text" }, option))))));
        }
    }
    render() {
        return (Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, this.renderDropdownMenu(), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bci-core-paginator-pages-container" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { onClick: () => this.previousPage(), class: `bci-core-paginator-page-prev ${this.isAtFirstPage() ? 'disabled' : ''}` }), this.positionBasedRender(), this.renderMobilePages(), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { onClick: () => this.nextPage(), class: `bci-core-paginator-page-next ${this.isAtLastPage() ? 'disabled' : ''}` }))));
    }
    static get watchers() { return {
        "length": ["watchLengthHandler"],
        "pageSizeOptions": ["watchPageSizeOptionsHandler"],
        "pageIndex": ["watchPageIndex"],
        "showPageSizeSelector": ["watchShowPageSizeSelector"],
        "pageSize": ["watchPageSize"]
    }; }
};
Paginator.style = paginatorComponentCss;





/***/ })

}]);
//# sourceMappingURL=9-es2015.js.map