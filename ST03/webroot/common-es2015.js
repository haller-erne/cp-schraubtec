(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "fmcd":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@bci-web-core/web-components/dist/esm/checkbox-collection.interface-94343af2.js ***!
  \******************************************************************************************************/
/*! exports provided: C */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CollectionType; });
/* Copyright (C) 2020. Robert Bosch GmbH Copyright (C) 2020. Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved. */
/*
 * Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
var CollectionType;
(function (CollectionType) {
    CollectionType[CollectionType["Multi"] = 0] = "Multi";
    CollectionType[CollectionType["Single"] = 1] = "Single";
})(CollectionType || (CollectionType = {}));





/***/ }),

/***/ "o3so":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@bci-web-core/web-components/dist/esm/navigation-controller-5d320afc.js ***!
  \**********************************************************************************************/
/*! exports provided: N */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return NavigationController; });
/* Copyright (C) 2020. Robert Bosch GmbH Copyright (C) 2020. Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved. */
/*
 * Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.
 */
class NavigationController {
    static preprocessPath(path) {
        return path.replace(NavigationController.REPLACE_REGEX, '$1/$4').replace('//', '/');
    }
    checkArgument(condition, message) {
        if (!condition) {
            throw Error('IllegalArgumentException: ' + (message || ''));
        }
    }
    getPathItems(path, navigationItems) {
        return navigationItems.reduce((acc, item) => {
            const windowPath = NavigationController.preprocessPath(path);
            const itemPath = NavigationController.preprocessPath(item.path);
            if (item.children) {
                const childItems = this.getPathItems(path, item.children);
                if (childItems.length > 0) {
                    acc.push(item, ...childItems);
                }
                else if ((!!item.jsFiles || !!item.htmlFile) && windowPath.startsWith(itemPath)) {
                    acc.push(item);
                }
            }
            else if (windowPath.startsWith(itemPath)) {
                acc.push(item);
            }
            return acc;
        }, []);
    }
    getSelectedNavigationItem(path, navigationItems) {
        const items = this.getPathItems(path, navigationItems);
        if (items.length > 0) {
            return items[items.length - 1];
        }
        return null;
    }
    setActiveNavigationByPath(path, navigationItems) {
        this.checkArgument(path.startsWith('/'), 'Path must start with /');
        this.deactivateNavigationItems(navigationItems);
        const items = this.getPathItems(path, navigationItems);
        if (items.length > 0) {
            items.forEach((item, index) => {
                if (index === items.length - 1) {
                    item.active = true;
                }
                else {
                    item.expanded = true;
                }
            });
            return items[items.length - 1];
        }
        return null;
    }
    getTranslatedPath(path, navigationItems) {
        const items = this.getPathItems(path, navigationItems);
        return items.map((item) => item.title);
    }
    deactivateNavigationItems(navigationItems = []) {
        navigationItems.forEach(navigationItem => {
            navigationItem.active = false;
            this.deactivateNavigationItems(navigationItem.children || []);
        });
    }
}
NavigationController.REPLACE_REGEX = /^(((?!\?).)+)(\?.+)?(#((?!\?).)*)(\?.*)?$/;





/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map