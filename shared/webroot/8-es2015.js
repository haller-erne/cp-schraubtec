(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "MK9S":
/*!**************************************************************************************!*\
  !*** ./node_modules/@bci-web-core/web-components/dist/esm/bci-datepicker_6.entry.js ***!
  \**************************************************************************************/
/*! exports provided: bci_datepicker, bci_datetime_picker, bci_month_header, bci_timepicker, bci_week_header, bci_weekdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bci_datepicker", function() { return Datepicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bci_datetime_picker", function() { return DatetimePicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bci_month_header", function() { return MonthHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bci_timepicker", function() { return Timepicker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bci_week_header", function() { return WeekHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bci_weekdays", function() { return Weekdays; });
/* harmony import */ var _index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-267cdec7.js */ "mTGF");
/* harmony import */ var _utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-bdfea2c3.js */ "np3L");
/* Copyright (C) 2020. Robert Bosch GmbH Copyright (C) 2020. Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved. */



/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(1, arguments);
  var date = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

function cloneObject(dirtyObject) {
  return assign({}, dirtyObject);
}

/**
 * @name fromUnixTime
 * @category Timestamp Helpers
 * @summary Create a date from a Unix timestamp.
 *
 * @description
 * Create a date from a Unix timestamp.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Number} unixTime - the given Unix timestamp
 * @returns {Date} the date
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Create the date 29 February 2012 11:45:05:
 * var result = fromUnixTime(1330515905)
 * //=> Wed Feb 29 2012 11:45:05
 */

function fromUnixTime(dirtyUnixTime) {
  Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(1, arguments);
  var unixTime = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(dirtyUnixTime);
  return Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(unixTime * 1000);
}

/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * var result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */

function getDate(dirtyDate) {
  Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(1, arguments);
  var date = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

/**
 * @name getISODay
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of ISO week
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * var result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */

function getISODay(dirtyDate) {
  Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(1, arguments);
  var date = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyDate);
  var day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day;
}

/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */

function getMonth(dirtyDate) {
  Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(1, arguments);
  var date = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyDate);
  var month = date.getMonth();
  return month;
}

/**
 * @name getTime
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * var result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */

function getTime(dirtyDate) {
  Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(1, arguments);
  var date = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyDate);
  var timestamp = date.getTime();
  return timestamp;
}

/**
 * @name getUnixTime
 * @category Timestamp Helpers
 * @summary Get the seconds timestamp of the given date.
 *
 * @description
 * Get the seconds timestamp of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the timestamp
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05 CET:
 * var result = getUnixTime(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 1330512305
 */

function getUnixTime(dirtyDate) {
  Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(1, arguments);
  return Math.floor(getTime(dirtyDate) / 1000);
}

/**
 * @name getYear
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the year
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */

function getYear(dirtyDate) {
  Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(1, arguments);
  var date = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyDate);
  var year = date.getFullYear();
  return year;
}

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */

function isAfter(dirtyDate, dirtyDateToCompare) {
  Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(2, arguments);
  var date = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyDate);
  var dateToCompare = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/**
 * @name isBefore
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date that should be before the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */

function isBefore(dirtyDate, dirtyDateToCompare) {
  Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(2, arguments);
  var date = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyDate);
  var dateToCompare = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyDateToCompare);
  return date.getTime() < dateToCompare.getTime();
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
  Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyDate);
  var day = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(dirtyDay);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISODay(dirtyDate, dirtyDay) {
  Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(2, arguments);
  var day = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(dirtyDay);

  if (day % 7 === 0) {
    day = day - 7;
  }

  var weekStartsOn = 1;
  var date = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyDate);
  var currentDay = date.getUTCDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
  Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(2, arguments);
  var date = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyDate);
  var isoWeek = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(dirtyISOWeek);
  var diff = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["g"])(date) - isoWeek;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

// See issue: https://github.com/date-fns/date-fns/issues/376

function setUTCWeek(dirtyDate, dirtyWeek, options) {
  Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(2, arguments);
  var date = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyDate);
  var week = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(dirtyWeek);
  var diff = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["c"])(date, options) - week;
  date.setUTCDate(date.getUTCDate() - diff * 7);
  return date;
}

var MILLISECONDS_IN_HOUR = 3600000;
var MILLISECONDS_IN_MINUTE = 60000;
var MILLISECONDS_IN_SECOND = 1000;
var numericPatterns = {
  month: /^(1[0-2]|0?\d)/,
  // 0 to 12
  date: /^(3[0-1]|[0-2]?\d)/,
  // 0 to 31
  dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
  // 0 to 366
  week: /^(5[0-3]|[0-4]?\d)/,
  // 0 to 53
  hour23h: /^(2[0-3]|[0-1]?\d)/,
  // 0 to 23
  hour24h: /^(2[0-4]|[0-1]?\d)/,
  // 0 to 24
  hour11h: /^(1[0-1]|0?\d)/,
  // 0 to 11
  hour12h: /^(1[0-2]|0?\d)/,
  // 0 to 12
  minute: /^[0-5]?\d/,
  // 0 to 59
  second: /^[0-5]?\d/,
  // 0 to 59
  singleDigit: /^\d/,
  // 0 to 9
  twoDigits: /^\d{1,2}/,
  // 0 to 99
  threeDigits: /^\d{1,3}/,
  // 0 to 999
  fourDigits: /^\d{1,4}/,
  // 0 to 9999
  anyDigitsSigned: /^-?\d+/,
  singleDigitSigned: /^-?\d/,
  // 0 to 9, -0 to -9
  twoDigitsSigned: /^-?\d{1,2}/,
  // 0 to 99, -0 to -99
  threeDigitsSigned: /^-?\d{1,3}/,
  // 0 to 999, -0 to -999
  fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

};
var timezonePatterns = {
  basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
  basic: /^([+-])(\d{2})(\d{2})|Z/,
  basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
  extended: /^([+-])(\d{2}):(\d{2})|Z/,
  extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};

function parseNumericPattern(pattern, string, valueCallback) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  }

  var value = parseInt(matchResult[0], 10);
  return {
    value: valueCallback ? valueCallback(value) : value,
    rest: string.slice(matchResult[0].length)
  };
}

function parseTimezonePattern(pattern, string) {
  var matchResult = string.match(pattern);

  if (!matchResult) {
    return null;
  } // Input is 'Z'


  if (matchResult[0] === 'Z') {
    return {
      value: 0,
      rest: string.slice(1)
    };
  }

  var sign = matchResult[1] === '+' ? 1 : -1;
  var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
  var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
  var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
  return {
    value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * MILLISECONDS_IN_SECOND),
    rest: string.slice(matchResult[0].length)
  };
}

function parseAnyDigitsSigned(string, valueCallback) {
  return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
}

function parseNDigits(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
  }
}

function parseNDigitsSigned(n, string, valueCallback) {
  switch (n) {
    case 1:
      return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);

    case 2:
      return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);

    case 3:
      return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);

    case 4:
      return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);

    default:
      return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
  }
}

function dayPeriodEnumToHours(enumValue) {
  switch (enumValue) {
    case 'morning':
      return 4;

    case 'evening':
      return 17;

    case 'pm':
    case 'noon':
    case 'afternoon':
      return 12;

    case 'am':
    case 'midnight':
    case 'night':
    default:
      return 0;
  }
}

function normalizeTwoDigitYear(twoDigitYear, currentYear) {
  var isCommonEra = currentYear > 0; // Absolute number of the current year:
  // 1 -> 1 AC
  // 0 -> 1 BC
  // -1 -> 2 BC

  var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
  var result;

  if (absCurrentYear <= 50) {
    result = twoDigitYear || 100;
  } else {
    var rangeEnd = absCurrentYear + 50;
    var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
    var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
    result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
  }

  return isCommonEra ? result : 1 - result;
}

var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // User for validation

function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
 * |  p  |                                |  P  |                                |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 */


var parsers = {
  // Era
  G: {
    priority: 140,
    parse: function (string, token, match, _options) {
      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
        // A, B

        case 'GGGGG':
          return match.era(string, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return match.era(string, {
            width: 'wide'
          }) || match.era(string, {
            width: 'abbreviated'
          }) || match.era(string, {
            width: 'narrow'
          });
      }
    },
    set: function (date, flags, value, _options) {
      flags.era = value;
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['R', 'u', 't', 'T']
  },
  // Year
  y: {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'yy'
        };
      };

      switch (token) {
        case 'y':
          return parseNDigits(4, string, valueCallback);

        case 'yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, _options) {
      var currentYear = date.getUTCFullYear();

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Local week-numbering year
  Y: {
    priority: 130,
    parse: function (string, token, match, _options) {
      var valueCallback = function (year) {
        return {
          year: year,
          isTwoDigitYear: token === 'YY'
        };
      };

      switch (token) {
        case 'Y':
          return parseNDigits(4, string, valueCallback);

        case 'Yo':
          return match.ordinalNumber(string, {
            unit: 'year',
            valueCallback: valueCallback
          });

        default:
          return parseNDigits(token.length, string, valueCallback);
      }
    },
    validate: function (_date, value, _options) {
      return value.isTwoDigitYear || value.year > 0;
    },
    set: function (date, flags, value, options) {
      var currentYear = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["d"])(date, options);

      if (value.isTwoDigitYear) {
        var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
        date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["e"])(date, options);
      }

      var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
      date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
      date.setUTCHours(0, 0, 0, 0);
      return Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["e"])(date, options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week-numbering year
  R: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'R') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (_date, _flags, value, _options) {
      var firstWeekOfYear = new Date(0);
      firstWeekOfYear.setUTCFullYear(value, 0, 4);
      firstWeekOfYear.setUTCHours(0, 0, 0, 0);
      return Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(firstWeekOfYear);
    },
    incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Extended year
  u: {
    priority: 130,
    parse: function (string, token, _match, _options) {
      if (token === 'u') {
        return parseNDigitsSigned(4, string);
      }

      return parseNDigitsSigned(token.length, string);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCFullYear(value, 0, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
  },
  // Quarter
  Q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
        case 'QQ':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone quarter
  q: {
    priority: 120,
    parse: function (string, token, match, _options) {
      switch (token) {
        // 1, 2, 3, 4
        case 'q':
        case 'qq':
          // 01, 02, 03, 04
          return parseNDigits(token.length, string);
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return match.ordinalNumber(string, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return match.quarter(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.quarter(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 4;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth((value - 1) * 3, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Month
  M: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'M':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'MM':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'MMM':
          return match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // J, F, ..., D

        case 'MMMMM':
          return match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December

        case 'MMMM':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.month(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Stand-alone month
  L: {
    priority: 110,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        return value - 1;
      };

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return parseNumericPattern(numericPatterns.month, string, valueCallback);
        // 01, 02, ..., 12

        case 'LL':
          return parseNDigits(2, string, valueCallback);
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return match.ordinalNumber(string, {
            unit: 'month',
            valueCallback: valueCallback
          });
        // Jan, Feb, ..., Dec

        case 'LLL':
          return match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // J, F, ..., D

        case 'LLLLL':
          return match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December

        case 'LLLL':
        default:
          return match.month(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.month(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.month(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(value, 1);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Local week of year
  w: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'w':
          return parseNumericPattern(numericPatterns.week, string);

        case 'wo':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["e"])(setUTCWeek(date, value, options), options);
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
  },
  // ISO week of year
  I: {
    priority: 100,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'I':
          return parseNumericPattern(numericPatterns.week, string);

        case 'Io':
          return match.ordinalNumber(string, {
            unit: 'week'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 53;
    },
    set: function (date, _flags, value, options) {
      return Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["f"])(setUTCISOWeek(date, value, options), options);
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
  },
  // Day of the month
  d: {
    priority: 90,
    subPriority: 1,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'd':
          return parseNumericPattern(numericPatterns.date, string);

        case 'do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);
      var month = date.getUTCMonth();

      if (isLeapYear) {
        return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
      } else {
        return value >= 1 && value <= DAYS_IN_MONTH[month];
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCDate(value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
  },
  // Day of year
  D: {
    priority: 90,
    subPriority: 1,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'D':
        case 'DD':
          return parseNumericPattern(numericPatterns.dayOfYear, string);

        case 'Do':
          return match.ordinalNumber(string, {
            unit: 'date'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (date, value, _options) {
      var year = date.getUTCFullYear();
      var isLeapYear = isLeapYearIndex(year);

      if (isLeapYear) {
        return value >= 1 && value <= 366;
      } else {
        return value >= 1 && value <= 365;
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMonth(0, value);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']
  },
  // Day of week
  E: {
    priority: 90,
    parse: function (string, token, match, _options) {
      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'EEEEE':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'EEEEEE':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'EEEE':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T']
  },
  // Local day of week
  e: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'e':
        case 'ee':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'eo':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'eee':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // T

        case 'eeeee':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'eeeeee':
          return match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tuesday

        case 'eeee':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.day(string, {
            width: 'short',
            context: 'formatting'
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']
  },
  // Stand-alone local day of week
  c: {
    priority: 90,
    parse: function (string, token, match, options) {
      var valueCallback = function (value) {
        var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
        return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
      };

      switch (token) {
        // 3
        case 'c':
        case 'cc':
          // 03
          return parseNDigits(token.length, string, valueCallback);
        // 3rd

        case 'co':
          return match.ordinalNumber(string, {
            unit: 'day',
            valueCallback: valueCallback
          });
        // Tue

        case 'ccc':
          return match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // T

        case 'ccccc':
          return match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu

        case 'cccccc':
          return match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tuesday

        case 'cccc':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'standalone'
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'standalone'
          }) || match.day(string, {
            width: 'short',
            context: 'standalone'
          }) || match.day(string, {
            width: 'narrow',
            context: 'standalone'
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 6;
    },
    set: function (date, _flags, value, options) {
      date = setUTCDay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']
  },
  // ISO day of week
  i: {
    priority: 90,
    parse: function (string, token, match, _options) {
      var valueCallback = function (value) {
        if (value === 0) {
          return 7;
        }

        return value;
      };

      switch (token) {
        // 2
        case 'i':
        case 'ii':
          // 02
          return parseNDigits(token.length, string);
        // 2nd

        case 'io':
          return match.ordinalNumber(string, {
            unit: 'day'
          });
        // Tue

        case 'iii':
          return match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // T

        case 'iiiii':
          return match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tu

        case 'iiiiii':
          return match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
        // Tuesday

        case 'iiii':
        default:
          return match.day(string, {
            width: 'wide',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'abbreviated',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'short',
            context: 'formatting',
            valueCallback: valueCallback
          }) || match.day(string, {
            width: 'narrow',
            context: 'formatting',
            valueCallback: valueCallback
          });
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 7;
    },
    set: function (date, _flags, value, options) {
      date = setUTCISODay(date, value, options);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']
  },
  // AM or PM
  a: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'a':
        case 'aa':
        case 'aaa':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaaa':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaa':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T']
  },
  // AM, PM, midnight
  b: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'b':
        case 'bb':
        case 'bbb':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbbb':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbb':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T']
  },
  // in the morning, in the afternoon, in the evening, at night
  B: {
    priority: 80,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBBB':
          return match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBB':
        default:
          return match.dayPeriod(string, {
            width: 'wide',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'abbreviated',
            context: 'formatting'
          }) || match.dayPeriod(string, {
            width: 'narrow',
            context: 'formatting'
          });
      }
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 't', 'T']
  },
  // Hour [1-12]
  h: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'h':
          return parseNumericPattern(numericPatterns.hour12h, string);

        case 'ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 12;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else if (!isPM && value === 12) {
        date.setUTCHours(0, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['H', 'K', 'k', 't', 'T']
  },
  // Hour [0-23]
  H: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'H':
          return parseNumericPattern(numericPatterns.hour23h, string);

        case 'Ho':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 23;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCHours(value, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T']
  },
  // Hour [0-11]
  K: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'K':
          return parseNumericPattern(numericPatterns.hour11h, string);

        case 'Ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 11;
    },
    set: function (date, _flags, value, _options) {
      var isPM = date.getUTCHours() >= 12;

      if (isPM && value < 12) {
        date.setUTCHours(value + 12, 0, 0, 0);
      } else {
        date.setUTCHours(value, 0, 0, 0);
      }

      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T']
  },
  // Hour [1-24]
  k: {
    priority: 70,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'k':
          return parseNumericPattern(numericPatterns.hour24h, string);

        case 'ko':
          return match.ordinalNumber(string, {
            unit: 'hour'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 1 && value <= 24;
    },
    set: function (date, _flags, value, _options) {
      var hours = value <= 24 ? value % 24 : value;
      date.setUTCHours(hours, 0, 0, 0);
      return date;
    },
    incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T']
  },
  // Minute
  m: {
    priority: 60,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 'm':
          return parseNumericPattern(numericPatterns.minute, string);

        case 'mo':
          return match.ordinalNumber(string, {
            unit: 'minute'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMinutes(value, 0, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Second
  s: {
    priority: 50,
    parse: function (string, token, match, _options) {
      switch (token) {
        case 's':
          return parseNumericPattern(numericPatterns.second, string);

        case 'so':
          return match.ordinalNumber(string, {
            unit: 'second'
          });

        default:
          return parseNDigits(token.length, string);
      }
    },
    validate: function (_date, value, _options) {
      return value >= 0 && value <= 59;
    },
    set: function (date, _flags, value, _options) {
      date.setUTCSeconds(value, 0);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Fraction of second
  S: {
    priority: 30,
    parse: function (string, token, _match, _options) {
      var valueCallback = function (value) {
        return Math.floor(value * Math.pow(10, -token.length + 3));
      };

      return parseNDigits(token.length, string, valueCallback);
    },
    set: function (date, _flags, value, _options) {
      date.setUTCMilliseconds(value);
      return date;
    },
    incompatibleTokens: ['t', 'T']
  },
  // Timezone (ISO-8601. +00:00 is `'Z'`)
  X: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'X':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'XX':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'XXXX':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'XXXXX':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'XXX':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'x']
  },
  // Timezone (ISO-8601)
  x: {
    priority: 10,
    parse: function (string, token, _match, _options) {
      switch (token) {
        case 'x':
          return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

        case 'xx':
          return parseTimezonePattern(timezonePatterns.basic, string);

        case 'xxxx':
          return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

        case 'xxxxx':
          return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

        case 'xxx':
        default:
          return parseTimezonePattern(timezonePatterns.extended, string);
      }
    },
    set: function (date, flags, value, _options) {
      if (flags.timestampIsSet) {
        return date;
      }

      return new Date(date.getTime() - value);
    },
    incompatibleTokens: ['t', 'T', 'X']
  },
  // Seconds timestamp
  t: {
    priority: 40,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value * 1000), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  },
  // Milliseconds timestamp
  T: {
    priority: 20,
    parse: function (string, _token, _match, _options) {
      return parseAnyDigitsSigned(string);
    },
    set: function (_date, _flags, value, _options) {
      return [new Date(value), {
        timestampIsSet: true
      }];
    },
    incompatibleTokens: '*'
  }
};

var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var notWhitespaceRegExp = /\S/;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name parse
 * @category Common Helpers
 * @summary Parse the date.
 *
 * @description
 * Return the date parsed from string using the given format string.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters in the format string wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 *
 * Format of the format string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 5 below the table).
 *
 * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
 * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
 *
 * ```javascript
 * parse('23 AM', 'HH a', new Date())
 * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
 * ```
 *
 * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
 *
 * Accepted format string patterns:
 * | Unit                            |Prior| Pattern | Result examples                   | Notes |
 * |---------------------------------|-----|---------|-----------------------------------|-------|
 * | Era                             | 140 | G..GGG  | AD, BC                            |       |
 * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 |     | GGGGG   | A, B                              |       |
 * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
 * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
 * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
 * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
 * |                                 |     | yyyyy   | ...                               | 2,4   |
 * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
 * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
 * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
 * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
 * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
 * |                                 |     | YYYYY   | ...                               | 2,4   |
 * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
 * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
 * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
 * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
 * |                                 |     | RRRRR   | ...                               | 2,4,5 |
 * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
 * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
 * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
 * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
 * |                                 |     | uuuuu   | ...                               | 2,4   |
 * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
 * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
 * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
 * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
 * |                                 |     | qq      | 01, 02, 03, 04                    |       |
 * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
 * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
 * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | MM      | 01, 02, ..., 12                   |       |
 * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | MMMM    | January, February, ..., December  | 2     |
 * |                                 |     | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
 * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
 * |                                 |     | LL      | 01, 02, ..., 12                   |       |
 * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 |     | LLLL    | January, February, ..., December  | 2     |
 * |                                 |     | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
 * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
 * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
 * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
 * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
 * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
 * |                                 |     | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
 * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
 * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
 * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 |     | DDDD    | ...                               | 2     |
 * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
 * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
 * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
 * |                                 |     | iii     | Mon, Tue, Wed, ..., Su            | 5     |
 * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
 * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
 * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
 * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | ee      | 02, 03, ..., 01                   |       |
 * |                                 |     | eee     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
 * |                                 |     | cc      | 02, 03, ..., 01                   |       |
 * |                                 |     | ccc     | Mon, Tue, Wed, ..., Su            |       |
 * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
 * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
 * |                                 |     | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
 * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 |     | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
 * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
 * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
 * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
 * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
 * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
 * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | mm      | 00, 01, ..., 59                   |       |
 * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
 * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
 * |                                 |     | ss      | 00, 01, ..., 59                   |       |
 * | Seconds timestamp               |  40 | t       | 512969520                         |       |
 * |                                 |     | tt      | ...                               | 2     |
 * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
 * |                                 |     | SS      | 00, 01, ..., 99                   |       |
 * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
 * |                                 |     | SSSS    | ...                               | 2     |
 * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
 * |                                 |     | TT      | ...                               | 2     |
 * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
 * |                                 |     | XX      | -0800, +0530, Z                   |       |
 * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
 * |                                 |     | xx      | -0800, +0530, +0000               |       |
 * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
 * |                                 |     | PP      | May 29, 1453                      |       |
 * |                                 |     | PPP     | May 29th, 1453                    |       |
 * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
 * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
 * |                                 |     | pp      | 12:00:00 AM                       |       |
 * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
 * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
 * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
 * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular.
 *    In `format` function, they will produce different result:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 *    `parse` will try to match both formatting and stand-alone units interchangably.
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table:
 *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
 *      as wide as the sequence
 *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
 *      These variations are marked with "2" in the last column of the table.
 *
 * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 4. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
 *
 *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
 *
 *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
 *
 *    while `uu` will just assign the year as is:
 *
 *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
 *
 *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
 *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
 *
 * 5. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
 *    on the given locale.
 *
 *    using `en-US` locale: `P` => `MM/dd/yyyy`
 *    using `en-US` locale: `p` => `hh:mm a`
 *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
 *    using `pt-BR` locale: `p` => `HH:mm`
 *
 * Values will be assigned to the date in the descending order of its unit's priority.
 * Units of an equal priority overwrite each other in the order of appearance.
 *
 * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
 * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
 *
 * `referenceDate` must be passed for correct work of the function.
 * If you're not sure which `referenceDate` to supply, create a new instance of Date:
 * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
 * In this case parsing will be done in the context of the current date.
 * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
 * then `Invalid Date` will be returned.
 *
 * The result may vary by locale.
 *
 * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
 *
 * If parsing failed, `Invalid Date` will be returned.
 * Invalid Date is a Date, whose time value is NaN.
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Old `parse` was renamed to `toDate`.
 *   Now `parse` is a new function which parses a string using a provided format.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   parse('2016-01-01')
 *
 *   // v2.0.0 onward
 *   toDate('2016-01-01')
 *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
 *   ```
 *
 * @param {String} dateString - the string to parse
 * @param {String} formatString - the string of tokens
 * @param {Date|Number} referenceDate - defines values missing from the parsed dateString
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {Date} the parsed date
 * @throws {TypeError} 3 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} `options.locale` must contain `match` property
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Parse 11 February 2014 from middle-endian format:
 * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
 * //=> Tue Feb 11 2014 00:00:00
 *
 * @example
 * // Parse 28th of February in Esperanto locale in the context of 2010 year:
 * import eo from 'date-fns/locale/eo'
 * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
 *   locale: eo
 * })
 * //=> Sun Feb 28 2010 00:00:00
 */

function parse(dirtyDateString, dirtyFormatString, dirtyReferenceDate, dirtyOptions) {
  Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(3, arguments);
  var dateString = String(dirtyDateString);
  var formatString = String(dirtyFormatString);
  var options = dirtyOptions || {};
  var locale$1 = options.locale || _utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["m"];

  if (!locale$1.match) {
    throw new RangeError('locale must contain match property');
  }

  var localeFirstWeekContainsDate = locale$1.options && locale$1.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale$1.options && locale$1.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (formatString === '') {
    if (dateString === '') {
      return Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyReferenceDate);
    } else {
      return new Date(NaN);
    }
  }

  var subFnOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale$1 // If timezone isn't specified, it will be set to the system timezone

  };
  var setters = [{
    priority: TIMEZONE_UNIT_PRIORITY,
    subPriority: -1,
    set: dateToSystemTimezone,
    index: 0
  }];
  var i;
  var tokens = formatString.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["n"][firstCharacter];
      return longFormatter(substring, locale$1.formatLong, subFnOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp);
  var usedTokens = [];

  for (i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (!options.useAdditionalWeekYearTokens && Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["i"])(token)) {
      Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["h"])(token, formatString, dirtyDateString);
    }

    if (!options.useAdditionalDayOfYearTokens && Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["j"])(token)) {
      Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["h"])(token, formatString, dirtyDateString);
    }

    var firstCharacter = token[0];
    var parser = parsers[firstCharacter];

    if (parser) {
      var incompatibleTokens = parser.incompatibleTokens;

      if (Array.isArray(incompatibleTokens)) {
        var incompatibleToken = void 0;

        for (var _i = 0; _i < usedTokens.length; _i++) {
          var usedToken = usedTokens[_i].token;

          if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
            incompatibleToken = usedTokens[_i];
            break;
          }
        }

        if (incompatibleToken) {
          throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
        }
      } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
        throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
      }

      usedTokens.push({
        token: firstCharacter,
        fullToken: token
      });
      var parseResult = parser.parse(dateString, token, locale$1.match, subFnOptions);

      if (!parseResult) {
        return new Date(NaN);
      }

      setters.push({
        priority: parser.priority,
        subPriority: parser.subPriority || 0,
        set: parser.set,
        validate: parser.validate,
        value: parseResult.value,
        index: setters.length
      });
      dateString = parseResult.rest;
    } else {
      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
      } // Replace two single quote characters with one single quote character


      if (token === "''") {
        token = "'";
      } else if (firstCharacter === "'") {
        token = cleanEscapedString(token);
      } // Cut token from string, or, if string doesn't match the token, return Invalid Date


      if (dateString.indexOf(token) === 0) {
        dateString = dateString.slice(token.length);
      } else {
        return new Date(NaN);
      }
    }
  } // Check if the remaining input contains something other than whitespace


  if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
    return new Date(NaN);
  }

  var uniquePrioritySetters = setters.map(function (setter) {
    return setter.priority;
  }).sort(function (a, b) {
    return b - a;
  }).filter(function (priority, index, array) {
    return array.indexOf(priority) === index;
  }).map(function (priority) {
    return setters.filter(function (setter) {
      return setter.priority === priority;
    }).sort(function (a, b) {
      return b.subPriority - a.subPriority;
    });
  }).map(function (setterArray) {
    return setterArray[0];
  });
  var date = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyReferenceDate);

  if (isNaN(date)) {
    return new Date(NaN);
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37


  var utcDate = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["k"])(date, Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(date));
  var flags = {};

  for (i = 0; i < uniquePrioritySetters.length; i++) {
    var setter = uniquePrioritySetters[i];

    if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
      return new Date(NaN);
    }

    var result = setter.set(utcDate, flags, setter.value, subFnOptions); // Result is tuple (date, flags)

    if (result[0]) {
      utcDate = result[0];
      assign(flags, result[1]); // Result is date
    } else {
      utcDate = result;
    }
  }

  return utcDate;
}

function dateToSystemTimezone(date, flags) {
  if (flags.timestampIsSet) {
    return date;
  }

  var convertedDate = new Date(0);
  convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
  return convertedDate;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/**
 * @name isWithinInterval
 * @category Interval Helpers
 * @summary Is the given date within the interval?
 *
 * @description
 * Is the given date within the interval? (Including start and end.)
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `isWithinRange` to `isWithinInterval`.
 *   This change was made to mirror the use of the word "interval" in standard ISO 8601:2004 terminology:
 *
 *   ```
 *   2.1.3
 *   time interval
 *   part of the time axis limited by two instants
 *   ```
 *
 *   Also, this function now accepts an object with `start` and `end` properties
 *   instead of two arguments as an interval.
 *   This function now throws `RangeError` if the start of the interval is after its end
 *   or if any date in the interval is `Invalid Date`.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   isWithinRange(
 *     new Date(2014, 0, 3),
 *     new Date(2014, 0, 1), new Date(2014, 0, 7)
 *   )
 *
 *   // v2.0.0 onward
 *
 *   isWithinInterval(
 *     new Date(2014, 0, 3),
 *     { start: new Date(2014, 0, 1), end: new Date(2014, 0, 7) }
 *   )
 *   ```
 *
 * @param {Date|Number} date - the date to check
 * @param {Interval} interval - the interval to check
 * @returns {Boolean} the date is within the interval
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} The start of an interval cannot be after its end
 * @throws {RangeError} Date in interval cannot be `Invalid Date`
 *
 * @example
 * // For the date within the interval:
 * isWithinInterval(new Date(2014, 0, 3), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> true
 *
 * @example
 * // For the date outside of the interval:
 * isWithinInterval(new Date(2014, 0, 10), {
 *   start: new Date(2014, 0, 1),
 *   end: new Date(2014, 0, 7)
 * })
 * //=> false
 *
 * @example
 * // For date equal to interval start:
 * isWithinInterval(date, { start, end: date }) // => true
 *
 * @example
 * // For date equal to interval end:
 * isWithinInterval(date, { start: date, end }) // => true
 */

function isWithinInterval(dirtyDate, dirtyInterval) {
  Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(2, arguments);
  var interval = dirtyInterval || {};
  var time = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyDate).getTime();
  var startTime = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(interval.start).getTime();
  var endTime = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(interval.end).getTime(); // Throw an exception if start date is after end date or if any date is `Invalid Date`

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  return time >= startTime && time <= endTime;
}

/**
 * @name setDay
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} day - the day of the week of the new date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the new date with the day of the week set
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Set week day to Sunday, with the default weekStartsOn of Sunday:
 * var result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // Set week day to Sunday, with a weekStartsOn of Monday:
 * var result = setDay(new Date(2014, 8, 1), 0, { weekStartsOn: 1 })
 * //=> Sun Sep 07 2014 00:00:00
 */

function setDay(dirtyDate, dirtyDay, dirtyOptions) {
  Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["r"])(2, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["a"])(dirtyDate, options);
  var day = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(dirtyDay);
  var currentDay = date.getDay();
  var remainder = day % 7;
  var dayIndex = (remainder + 7) % 7;
  var delta = 7 - weekStartsOn;
  var diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
  return Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["o"])(date, diff, options);
}

const monthHeaderCss = "/*!\n *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n*  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n*//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2020 Robert Bosch GmbH Copyright (C) 2020 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.bci-core-month-header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;color:#000000;text-align:center;padding-top:6px;padding-bottom:6px;border-bottom:1px solid #DFDFE0}.bci-core-month-header p{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;min-height:2.3em;min-width:2em;font-size:16px;margin:0}.bci-core-month-header p:hover{cursor:pointer}.bci-core-month-header .left-arrow{padding-left:12px}.bci-core-month-header .right-arrow{padding-right:12px}";

const MonthHeader = class {
    constructor(hostRef) {
        Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.monthChanged = Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "monthChanged", 7);
        this.displayedMonth = this.month;
        this.displayedYear = this.year;
    }
    handleMonthChange(newValue) {
        this.displayedMonth = newValue;
    }
    handleYearChange(newValue) {
        this.displayedYear = newValue;
    }
    monthChangeHandler(arrowDirection) {
        this.monthChanged.emit(arrowDirection);
    }
    render() {
        return (Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bci-core-month-header" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "left-arrow" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "bosch-ic bosch-ic-clickable bosch-ic-back-left", onClick: () => this.monthChangeHandler({ direction: 'prev' }) })), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, `${Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["q"])(new Date(), this.displayedMonth), 'MMMM')} ${this.displayedYear}` || 'Month Header'), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "right-arrow" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "bosch-ic bosch-ic-clickable bosch-ic-forward-right", onClick: () => this.monthChangeHandler({ direction: 'next' }) }))));
    }
    static get watchers() { return {
        "month": ["handleMonthChange"],
        "year": ["handleYearChange"]
    }; }
};
MonthHeader.style = monthHeaderCss;

const weekHeaderCss = "/*!\n *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n*  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n*//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2020 Robert Bosch GmbH Copyright (C) 2020 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */:host .bci-core-datepicker-week-container{display:-ms-flexbox;display:flex;padding:15px 5px 10px 5px}:host .bci-core-datepicker-week-container .bci-core-datepicker-week-header{-ms-flex:1 1 auto;flex:1 1 auto;font-size:12px;line-height:18px;font-weight:500}";

const WeekHeader = class {
    constructor(hostRef) {
        Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    getWeekDays() {
        const weekdays = [];
        for (let i = 0; i < 7; i++) {
            weekdays.push(Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(setDay(new Date(), i), 'EEEEEE'));
        }
        return weekdays;
    }
    render() {
        const weekDays = this.getWeekDays();
        if (!this.sundayFirst) {
            const sunday = weekDays.shift();
            weekDays.push(sunday);
        }
        return (Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bci-core-datepicker-week-container" }, weekDays.map(day => (Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("th", { class: "bci-core-datepicker-week-header" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, day))))));
    }
};
WeekHeader.style = weekHeaderCss;

const weekdaysCss = "/*!\n *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n*  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n*//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2020 Robert Bosch GmbH Copyright (C) 2020 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.bci-core-weekdays-table{width:calc(100% - 10px);border-spacing:0;border-collapse:collapse;margin:0 5px 5px 5px}.bci-core-weekdays-table td{position:relative;height:0;line-height:0;text-align:center;outline:0;cursor:pointer;padding-top:8px;padding-bottom:32px}.bci-core-weekdays-table td .bci-core-date{color:#000000;font-size:14px;text-align:center;display:-ms-flexbox;display:flex;line-height:1;border-width:1px;border-style:solid;border-color:transparent;border-radius:50%;width:32px;height:32px;position:absolute;left:4px;top:4px;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box}.bci-core-weekdays-table td.bci-core-disabled{cursor:not-allowed}.bci-core-weekdays-table td.bci-core-disabled .bci-core-date{background:#EFEFF0;color:#BFC0C2}.bci-core-weekdays-table td.bci-core-disabled.bci-core-today .bci-core-date{border:1px solid #BFC0C2}.bci-core-weekdays-table td.bci-core-week-days:hover{cursor:pointer}.bci-core-weekdays-table td.bci-core-week-days:hover .bci-core-date{background-color:#7FC6E7;color:#FFFFFF}.bci-core-weekdays-table td.bci-core-week-days:hover .bci-core-date:active{background-color:#008ECF}.bci-core-weekdays-table td.bci-core-week-days.bci-core-today .bci-core-date{background:transparent;border:1px solid #000000;color:#000000}.bci-core-weekdays-table td.bci-core-week-days.bci-core-selected .bci-core-date{background-color:#005691;color:#FFFFFF}.bci-core-weekdays-table td.bci-core-week-days.bci-core-selected.bci-core-range{border-radius:0px}.bci-core-weekdays-table td.bci-core-week-days.bci-core-selected.bci-core-range .bci-core-date{background-color:transparent}.bci-core-weekdays-table td.bci-core-week-days.bci-core-selected.bci-core-range.bci-core-first-date-range::before{content:\"\";display:block;width:41px;height:32px;position:absolute;left:4px;top:4px;background-color:#005691;border-radius:16px 0 0 16px}.bci-core-weekdays-table td.bci-core-week-days.bci-core-selected.bci-core-range.bci-core-last-date-range::before{content:\"\";display:block;width:41px;height:32px;position:absolute;right:4px;top:4px;background-color:#005691;border-radius:0 16px 16px 0}.bci-core-weekdays-table td.bci-core-week-days.bci-core-selected.bci-core-range:not(.bci-core-first-date-range):not(.bci-core-last-date-range)::before{content:\"\";display:block;width:41px;height:32px;position:absolute;right:0;top:4px;background-color:#005691;border-radius:0}.bci-core-weekdays-table .bci-core-empty{visibility:hidden}.bci-core-weekdays-table .bci-core-empty:hover{cursor:not-allowed}";

const Weekdays = class {
    constructor(hostRef) {
        Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.singleDateSelected = Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "singleDateSelected", 7);
        this.rangeDateSelected = Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "rangeDateSelected", 7);
        this.dateInput = {
            startDate: null,
            endDate: null,
        };
    }
    singleDateSelectedHandler(input) {
        this.singleDateSelected.emit(input);
    }
    rangeDateSelectedHandler(input) {
        this.rangeDateSelected.emit(input);
    }
    userManualInputHandler(newValue) {
        this.dateInput = Object.assign(Object.assign({}, this.dateInput), { startDate: newValue.startDate, endDate: newValue.endDate });
    }
    render() {
        const cells = [];
        const offset = this.offset % 7;
        for (let blank = 0; blank < offset; blank++) {
            cells.push(this.emptyDateCell());
        }
        for (let day = 1; day <= this.daysInMonth; day++) {
            let selected;
            let selectedRange;
            let selectedFirstDateRange;
            let selectedLastDateRange;
            const maxDate = this.dateRestrictionObj.maximumDate;
            const minDate = this.dateRestrictionObj.minimumDate;
            const currentDate = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["u"])(new Date(), this.year, this.month, day);
            const todaysDate = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["v"])(currentDate, parse(this.todaysDate, this.formatDate, new Date()));
            // disabled cells
            if (!Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["v"])(minDate, currentDate) && isAfter(minDate, currentDate) || !Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["v"])(maxDate, currentDate) && isBefore(maxDate, currentDate)) {
                cells.push(Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("td", { class: {
                        'bci-core-disabled': true,
                        'bci-core-today': todaysDate
                    } }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bci-core-date" }, day)));
                continue;
            }
            // clickable cells
            if (this.dateInput.startDate && this.dateInput.endDate) {
                // if startDate and endDate are selected
                const startDate = parse(this.dateInput.startDate, this.formatDate, new Date());
                const endDate = parse(this.dateInput.endDate, this.formatDate, new Date());
                if (isAfter(endDate, startDate) && isWithinInterval(currentDate, { start: startDate, end: endDate })) {
                    selected = true;
                    selectedRange = true;
                }
                else {
                    selected = false;
                }
                if (Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["v"])(currentDate, startDate)) {
                    selectedFirstDateRange = true;
                    selected = true;
                }
                if (Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["v"])(currentDate, endDate)) {
                    selectedLastDateRange = true;
                    selected = true;
                    selectedRange = true;
                }
                if (Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["v"])(currentDate, startDate) && Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["v"])(startDate, endDate)) {
                    selected = true;
                    selectedFirstDateRange = false;
                    selectedLastDateRange = false;
                    selectedRange = false;
                }
            }
            else {
                // single date picker
                if (this.dateInput.startDate || this.selectedDate) {
                    const selectedDate = parse(this.dateInput.startDate || this.selectedDate, this.formatDate, new Date());
                    selected = (getDate(selectedDate) === day && getMonth(selectedDate) === this.month && getYear(selectedDate) === this.year);
                }
            }
            const classes = {
                'bci-core-week-days': true,
                'bci-core-selected': selected,
                'bci-core-range': selectedRange,
                'bci-core-first-date-range': selectedFirstDateRange,
                'bci-core-last-date-range': selectedLastDateRange,
                'bci-core-today': selected ? false : todaysDate
            };
            cells.push(Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("td", { class: classes, onClick: () => this.rangeDate ? this.rangeDateSelectedHandler({ selectedDay: day }) : this.singleDateSelectedHandler({ selectedDay: day }) }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bci-core-date" }, day)));
        }
        while (cells.length % 7 !== 0) {
            cells.push(this.emptyDateCell());
        }
        const table = cells.reduce((acc, curr, index) => {
            const weekNumber = Math.floor(index / 7);
            acc[weekNumber].push(curr);
            return acc;
        }, [[], [], [], [], [], []]);
        return (Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("table", { class: "bci-core-weekdays-table" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("tbody", { class: "bci-core-week-days-container" }, table.sort().map((row, index) => Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("tr", { key: index }, row.map(cell => cell))))));
    }
    emptyDateCell() {
        return (Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("td", { class: "bci-core-empty" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bci-core-date" })));
    }
    static get watchers() { return {
        "datesObj": ["userManualInputHandler"]
    }; }
};
Weekdays.style = weekdaysCss;

const datepickerCss = "@charset \"UTF-8\";/*!\n *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n*  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n*//*!\n *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2020 Robert Bosch GmbH Copyright (C) 2020 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */@font-face{font-family:\"Bosch-Sans\";font-weight:400;src:url(\"..//fonts/BoschSans-Regular.eot\");src:url(\"..//fonts/BoschSans-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Regular.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Regular.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Regular.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Regular.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:300;src:url(\"..//fonts/BoschSans-Light.eot\");src:url(\"..//fonts/BoschSans-Light.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Light.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Light.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Light.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Light.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:500;src:url(\"..//fonts/BoschSans-Medium.eot\");src:url(\"..//fonts/BoschSans-Medium.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Medium.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Medium.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Medium.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Medium.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:700;src:url(\"..//fonts/BoschSans-Bold.eot\");src:url(\"..//fonts/BoschSans-Bold.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Bold.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Bold.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Bold.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Bold.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:900;src:url(\"..//fonts/BoschSans-Black.eot\");src:url(\"..//fonts/BoschSans-Black.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Black.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Black.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Black.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Black.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Ic\";font-style:normal;font-stretch:normal;font-weight:normal;src:url(\"..//fonts/Bosch-Icon.eot?mh5qa9\");src:url(\"..//fonts/Bosch-Icon.eot?mh5qa9#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/Bosch-Icon.ttf?mh5qa9\") format(\"truetype\"), url(\"..//fonts/Bosch-Icon.woff?mh5qa9\") format(\"woff\"), url(\"..//fonts/Bosch-Icon.svg?mh5qa9#Bosch-Icon\") format(\"svg\")}/*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2020 Robert Bosch GmbH Copyright (C) 2020 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.bosch-ic,.Bosch-Ic{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic:before,.Bosch-Ic:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:24px;vertical-align:middle}.bosch-ic-large,.Bosch-Ic-Large{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic-large:before,.Bosch-Ic-Large:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:28px;vertical-align:middle}.bosch-ic-medium,.Bosch-Ic-Medium{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic-medium:before,.Bosch-Ic-Medium:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:24px;vertical-align:middle}.bosch-ic-normal,.Bosch-Ic-Normal{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic-normal:before,.Bosch-Ic-Normal:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:20px;vertical-align:middle}.bosch-ic-small,.Bosch-Ic-Small{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic-small:before,.Bosch-Ic-Small:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:16px;vertical-align:middle}.Bosch-Ic-Disabled,.bosch-ic-disabled,.Bosch-Ic-Disabled:hover,.bosch-ic-disabled:hover,.Bosch-Ic[disabled],.bosch-ic[disabled],.Bosch-Ic[disabled]:hover,.bosch-ic[disabled]:hover{cursor:not-allowed;color:#d4d7da}.Bosch-Ic-Disabled:hover,.bosch-ic-disabled:hover,.Bosch-Ic-Disabled:hover:hover,.bosch-ic-disabled:hover:hover,.Bosch-Ic[disabled]:hover,.bosch-ic[disabled]:hover,.Bosch-Ic[disabled]:hover:hover,.bosch-ic[disabled]:hover:hover{color:#d4d7da}.bosch-ic-clickable,.Bosch-Ic-Clickable{cursor:pointer}.bosch-ic-clickable:hover,.Bosch-Ic-Clickable:hover{color:#7FC6E7}.bosch-ic-clickable:active,.Bosch-Ic-Clickable:active{color:#008ECF}.bosch-ic-clickable:disabled,.bosch-ic-clickable.disabled,.Bosch-Ic-Clickable:disabled,.Bosch-Ic-Clickable.disabled{color:#a8afb5;cursor:not-allowed}.bosch-ic-activated,.Bosch-Ic-Activated{color:#008ECF}.bosch-ic-3d-print:before{content:\"\"}.bosch-ic-a-to-b:before{content:\"\"}.bosch-ic-add:before{content:\"\"}.bosch-ic-address-consumer-data:before{content:\"\"}.bosch-ic-adress-book:before{content:\"\"}.bosch-ic-agility:before{content:\"\"}.bosch-ic-alarm-clock:before{content:\"\"}.bosch-ic-ambulance:before{content:\"\"}.bosch-ic-analysis:before{content:\"\"}.bosch-ic-anchor:before{content:\"\"}.bosch-ic-arrow-down:before{content:\"\"}.bosch-ic-arrow-left:before{content:\"\"}.bosch-ic-arrow-left-down:before{content:\"\"}.bosch-ic-arrow-left-up:before{content:\"\"}.bosch-ic-arrow-right:before{content:\"\"}.bosch-ic-arrow-right-down:before{content:\"\"}.bosch-ic-arrow-right-up:before{content:\"\"}.bosch-ic-arrow-turn-left:before{content:\"\"}.bosch-ic-arrow-turn-right:before{content:\"\"}.bosch-ic-arrow-up:before{content:\"\"}.bosch-ic-arrows:before{content:\"\"}.bosch-ic-arrows-x-y-z:before{content:\"\"}.bosch-ic-artificial-intelligence:before{content:\"\"}.bosch-ic-assembly-line:before{content:\"\"}.bosch-ic-atom:before{content:\"\"}.bosch-ic-augmented-reality:before{content:\"\"}.bosch-ic-autobod:before{content:\"\"}.bosch-ic-back-left:before{content:\"\"}.bosch-ic-back-left-double:before{content:\"\"}.bosch-ic-bar-chart:before{content:\"\"}.bosch-ic-bar-chart-double:before{content:\"\"}.bosch-ic-battery-0:before{content:\"\"}.bosch-ic-battery-1:before{content:\"\"}.bosch-ic-battery-2:before{content:\"\"}.bosch-ic-battery-3:before{content:\"\"}.bosch-ic-battery-4:before{content:\"\"}.bosch-ic-battery-fail:before{content:\"\"}.bosch-ic-battery-li-ion:before{content:\"\"}.bosch-ic-battery-loading:before{content:\"\"}.bosch-ic-bed:before{content:\"\"}.bosch-ic-bicycle:before{content:\"\"}.bosch-ic-bicycle-e:before{content:\"\"}.bosch-ic-blog:before{content:\"\"}.bosch-ic-bluetooth:before{content:\"\"}.bosch-ic-bluetooth-le:before{content:\"\"}.bosch-ic-board-speaker:before{content:\"\"}.bosch-ic-boiler-connected:before{content:\"\"}.bosch-ic-book:before{content:\"\"}.bosch-ic-bookmark:before{content:\"\"}.bosch-ic-bookmark-add:before{content:\"\"}.bosch-ic-bookmark-check:before{content:\"\"}.bosch-ic-bookmark-delete:before{content:\"\"}.bosch-ic-books:before{content:\"\"}.bosch-ic-bookshelf:before{content:\"\"}.bosch-ic-box:before{content:\"\"}.bosch-ic-box-closed:before{content:\"\"}.bosch-ic-box-delivery:before{content:\"\"}.bosch-ic-box-delivery-connected:before{content:\"\"}.bosch-ic-brake-disk:before{content:\"\"}.bosch-ic-briefcase:before{content:\"\"}.bosch-ic-broom:before{content:\"\"}.bosch-ic-broom-cloud-dirt:before{content:\"\"}.bosch-ic-brush:before{content:\"\"}.bosch-ic-bug:before{content:\"\"}.bosch-ic-building:before{content:\"\"}.bosch-ic-cactus:before{content:\"\"}.bosch-ic-calculate:before{content:\"\"}.bosch-ic-calendar:before{content:\"\"}.bosch-ic-calendar-add:before{content:\"\"}.bosch-ic-calendar-settings:before{content:\"\"}.bosch-ic-call:before{content:\"\"}.bosch-ic-call-add:before{content:\"\"}.bosch-ic-call-remove:before{content:\"\"}.bosch-ic-call-sos:before{content:\"\"}.bosch-ic-call-team:before{content:\"\"}.bosch-ic-call-wifi:before{content:\"\"}.bosch-ic-camera:before{content:\"\"}.bosch-ic-camera-switch:before{content:\"\"}.bosch-ic-car:before{content:\"\"}.bosch-ic-car-clock:before{content:\"\"}.bosch-ic-car-connected:before{content:\"\"}.bosch-ic-car-locator:before{content:\"\"}.bosch-ic-car-mechanic:before{content:\"\"}.bosch-ic-car-rental:before{content:\"\"}.bosch-ic-car-seat-connected:before{content:\"\"}.bosch-ic-car-side:before{content:\"\"}.bosch-ic-car-side-user:before{content:\"\"}.bosch-ic-cart:before{content:\"\"}.bosch-ic-certificate:before{content:\"\"}.bosch-ic-certificate-pki:before{content:\"\"}.bosch-ic-change:before{content:\"\"}.bosch-ic-chart-bar:before{content:\"\"}.bosch-ic-chart-check:before{content:\"\"}.bosch-ic-chart-dummy:before{content:\"\"}.bosch-ic-chart-line:before{content:\"\"}.bosch-ic-chat:before{content:\"\"}.bosch-ic-chat-add:before{content:\"\"}.bosch-ic-chat-question-answer:before{content:\"\"}.bosch-ic-chat-remove:before{content:\"\"}.bosch-ic-checklist:before{content:\"\"}.bosch-ic-checkmark:before{content:\"\"}.bosch-ic-chip:before{content:\"\"}.bosch-ic-circle-segment:before{content:\"\"}.bosch-ic-clear-all:before{content:\"\"}.bosch-ic-clipboard:before{content:\"\"}.bosch-ic-clipboard-list:before{content:\"\"}.bosch-ic-clock:before{content:\"\"}.bosch-ic-close:before{content:\"\"}.bosch-ic-close-all:before{content:\"\"}.bosch-ic-cloud:before{content:\"\"}.bosch-ic-cloud-co2:before{content:\"\"}.bosch-ic-cloud-download:before{content:\"\"}.bosch-ic-cloud-nox:before{content:\"\"}.bosch-ic-cloud-upload:before{content:\"\"}.bosch-ic-club-arm-chair:before{content:\"\"}.bosch-ic-coffee-break:before{content:\"\"}.bosch-ic-coin-currency:before{content:\"\"}.bosch-ic-coin-dollar:before{content:\"\"}.bosch-ic-colorpicker:before{content:\"\"}.bosch-ic-colors:before{content:\"\"}.bosch-ic-command:before{content:\"\"}.bosch-ic-communicator:before{content:\"\"}.bosch-ic-compare:before{content:\"\"}.bosch-ic-components:before{content:\"\"}.bosch-ic-components-available:before{content:\"\"}.bosch-ic-components-reservation:before{content:\"\"}.bosch-ic-concierge-bell:before{content:\"\"}.bosch-ic-configuration:before{content:\"\"}.bosch-ic-confirmation:before{content:\"\"}.bosch-ic-connection-off:before{content:\"\"}.bosch-ic-connection-on:before{content:\"\"}.bosch-ic-connectivity:before{content:\"\"}.bosch-ic-construction:before{content:\"\"}.bosch-ic-consumer-goods:before{content:\"\"}.bosch-ic-contract:before{content:\"\"}.bosch-ic-copy:before{content:\"\"}.bosch-ic-cube:before{content:\"\"}.bosch-ic-cube-arrows:before{content:\"\"}.bosch-ic-cube-filled:before{content:\"\"}.bosch-ic-cube-shock:before{content:\"\"}.bosch-ic-cube-stacked:before{content:\"\"}.bosch-ic-customerservice:before{content:\"\"}.bosch-ic-cutlery:before{content:\"\"}.bosch-ic-damper:before{content:\"\"}.bosch-ic-danger-flash:before{content:\"\"}.bosch-ic-data-loss:before{content:\"\"}.bosch-ic-dealer-details:before{content:\"\"}.bosch-ic-delete:before{content:\"\"}.bosch-ic-delivery:before{content:\"\"}.bosch-ic-denied:before{content:\"\"}.bosch-ic-desktop:before{content:\"\"}.bosch-ic-desktop-application-2d:before{content:\"\"}.bosch-ic-desktop-application-3d:before{content:\"\"}.bosch-ic-development:before{content:\"\"}.bosch-ic-devices:before{content:\"\"}.bosch-ic-devices-mobile:before{content:\"\"}.bosch-ic-directory:before{content:\"\"}.bosch-ic-dna:before{content:\"\"}.bosch-ic-do-not-disturb:before{content:\"\"}.bosch-ic-document:before{content:\"\"}.bosch-ic-document-add:before{content:\"\"}.bosch-ic-document-arrow-down:before{content:\"\"}.bosch-ic-document-arrow-up:before{content:\"\"}.bosch-ic-document-audio:before{content:\"\"}.bosch-ic-document-check:before{content:\"\"}.bosch-ic-document-cloud:before{content:\"\"}.bosch-ic-document-copy:before{content:\"\"}.bosch-ic-document-delete:before{content:\"\"}.bosch-ic-document-doc:before{content:\"\"}.bosch-ic-document-edit:before{content:\"\"}.bosch-ic-document-error:before{content:\"\"}.bosch-ic-document-locked:before{content:\"\"}.bosch-ic-document-log:before{content:\"\"}.bosch-ic-document-one:before{content:\"\"}.bosch-ic-document-pdf:before{content:\"\"}.bosch-ic-document-plain:before{content:\"\"}.bosch-ic-document-plain-add:before{content:\"\"}.bosch-ic-document-plain-delete:before{content:\"\"}.bosch-ic-document-ppt:before{content:\"\"}.bosch-ic-document-pub:before{content:\"\"}.bosch-ic-document-rtf:before{content:\"\"}.bosch-ic-document-save-to:before{content:\"\"}.bosch-ic-document-search:before{content:\"\"}.bosch-ic-document-settings:before{content:\"\"}.bosch-ic-document-test:before{content:\"\"}.bosch-ic-document-text:before{content:\"\"}.bosch-ic-document-txt:before{content:\"\"}.bosch-ic-document-vsd:before{content:\"\"}.bosch-ic-document-xls:before{content:\"\"}.bosch-ic-document-xml:before{content:\"\"}.bosch-ic-document-zip:before{content:\"\"}.bosch-ic-dome:before{content:\"\"}.bosch-ic-door:before{content:\"\"}.bosch-ic-door-sensor:before{content:\"\"}.bosch-ic-down:before{content:\"\"}.bosch-ic-down-double:before{content:\"\"}.bosch-ic-download:before{content:\"\"}.bosch-ic-drag-handle:before{content:\"\"}.bosch-ic-dragdrop:before{content:\"\"}.bosch-ic-drop:before{content:\"\"}.bosch-ic-e-charging:before{content:\"\"}.bosch-ic-e-mobility:before{content:\"\"}.bosch-ic-ear-off-disabled-light:before{content:\"\"}.bosch-ic-ear-on:before{content:\"\"}.bosch-ic-eco-system:before{content:\"\"}.bosch-ic-edit:before{content:\"\"}.bosch-ic-education:before{content:\"\"}.bosch-ic-efficiency:before{content:\"\"}.bosch-ic-elevator:before{content:\"\"}.bosch-ic-elevator-alarm:before{content:\"\"}.bosch-ic-elevator-cloud:before{content:\"\"}.bosch-ic-elevator-headset:before{content:\"\"}.bosch-ic-elevator-service:before{content:\"\"}.bosch-ic-emergency-exit:before{content:\"\"}.bosch-ic-emoji-happy:before{content:\"\"}.bosch-ic-emoji-neutral:before{content:\"\"}.bosch-ic-emoji-sad:before{content:\"\"}.bosch-ic-emoji-super-happy:before{content:\"\"}.bosch-ic-emoji-very-sad:before{content:\"\"}.bosch-ic-eu-energy-label:before{content:\"\"}.bosch-ic-excavator:before{content:\"\"}.bosch-ic-exit:before{content:\"\"}.bosch-ic-expansion-arrows:before{content:\"\"}.bosch-ic-explosion:before{content:\"\"}.bosch-ic-export:before{content:\"\"}.bosch-ic-externallink:before{content:\"\"}.bosch-ic-fast-forward:before{content:\"\"}.bosch-ic-faucet:before{content:\"\"}.bosch-ic-favorites:before{content:\"\"}.bosch-ic-fax:before{content:\"\"}.bosch-ic-female:before{content:\"\"}.bosch-ic-film:before{content:\"\"}.bosch-ic-filter:before{content:\"\"}.bosch-ic-filter-success:before{content:\"\"}.bosch-ic-fingerprint:before{content:\"\"}.bosch-ic-fire:before{content:\"\"}.bosch-ic-fire-emergency:before{content:\"\"}.bosch-ic-fireworks:before{content:\"\"}.bosch-ic-first-aid:before{content:\"\"}.bosch-ic-first-aid-cross:before{content:\"\"}.bosch-ic-fit-to-sceen:before{content:\"\"}.bosch-ic-flag:before{content:\"\"}.bosch-ic-flash:before{content:\"\"}.bosch-ic-flask:before{content:\"\"}.bosch-ic-flexpress:before{content:\"\"}.bosch-ic-folder:before{content:\"\"}.bosch-ic-folder-download:before{content:\"\"}.bosch-ic-folder-open:before{content:\"\"}.bosch-ic-folder-upload:before{content:\"\"}.bosch-ic-fork-lift:before{content:\"\"}.bosch-ic-fork-lift-locator:before{content:\"\"}.bosch-ic-forward-right:before{content:\"\"}.bosch-ic-forward-right-double:before{content:\"\"}.bosch-ic-full-empty:before{content:\"\"}.bosch-ic-fullscreen:before{content:\"\"}.bosch-ic-fullscreen-arrows:before{content:\"\"}.bosch-ic-fullscreen-exit:before{content:\"\"}.bosch-ic-g-arrow-down:before{content:\"\"}.bosch-ic-g-arrow-up:before{content:\"\"}.bosch-ic-generator:before{content:\"\"}.bosch-ic-gift:before{content:\"\"}.bosch-ic-glance:before{content:\"\"}.bosch-ic-glas-plate:before{content:\"\"}.bosch-ic-globe:before{content:\"\"}.bosch-ic-globe-arrow:before{content:\"\"}.bosch-ic-glossary:before{content:\"\"}.bosch-ic-grid-view:before{content:\"\"}.bosch-ic-hammer:before{content:\"\"}.bosch-ic-hand:before{content:\"\"}.bosch-ic-hand-motion:before{content:\"\"}.bosch-ic-hand-motion-off-disabled-light:before{content:\"\"}.bosch-ic-handlewithcare:before{content:\"\"}.bosch-ic-handover-add:before{content:\"\"}.bosch-ic-handover-check:before{content:\"\"}.bosch-ic-handover-remove:before{content:\"\"}.bosch-ic-hanger:before{content:\"\"}.bosch-ic-health:before{content:\"\"}.bosch-ic-heart:before{content:\"\"}.bosch-ic-history:before{content:\"\"}.bosch-ic-home:before{content:\"\"}.bosch-ic-home-locator:before{content:\"\"}.bosch-ic-hourglass:before{content:\"\"}.bosch-ic-hydrant:before{content:\"\"}.bosch-ic-ice:before{content:\"\"}.bosch-ic-imagery:before{content:\"\"}.bosch-ic-imagery-add:before{content:\"\"}.bosch-ic-imagery-remove:before{content:\"\"}.bosch-ic-import:before{content:\"\"}.bosch-ic-imprint:before{content:\"\"}.bosch-ic-impulse:before{content:\"\"}.bosch-ic-industry:before{content:\"\"}.bosch-ic-industry-clock:before{content:\"\"}.bosch-ic-industry-connected:before{content:\"\"}.bosch-ic-info:before{content:\"\"}.bosch-ic-info-i:before{content:\"\"}.bosch-ic-interval:before{content:\"\"}.bosch-ic-it-device:before{content:\"\"}.bosch-ic-jewel:before{content:\"\"}.bosch-ic-keyboard:before{content:\"\"}.bosch-ic-label:before{content:\"\"}.bosch-ic-laptop:before{content:\"\"}.bosch-ic-laser:before{content:\"\"}.bosch-ic-layout:before{content:\"\"}.bosch-ic-leaf:before{content:\"\"}.bosch-ic-led:before{content:\"\"}.bosch-ic-brick:before{content:\"\"}.bosch-ic-brick-slanting-1:before{content:\"\"}.bosch-ic-brick-slanting-2:before{content:\"\"}.bosch-ic-less-minimize:before{content:\"\"}.bosch-ic-lightbulb:before{content:\"\"}.bosch-ic-lightbulb-off:before{content:\"\"}.bosch-ic-line-chart:before{content:\"\"}.bosch-ic-link:before{content:\"\"}.bosch-ic-link-broken:before{content:\"\"}.bosch-ic-list-view:before{content:\"\"}.bosch-ic-list-view-mobile:before{content:\"\"}.bosch-ic-livechat:before{content:\"\"}.bosch-ic-locator:before{content:\"\"}.bosch-ic-locator-ip-connected:before{content:\"\"}.bosch-ic-locator-ip-disconnected:before{content:\"\"}.bosch-ic-locator-spot:before{content:\"\"}.bosch-ic-locator-spot-check:before{content:\"\"}.bosch-ic-lock-closed:before{content:\"\"}.bosch-ic-lock-open:before{content:\"\"}.bosch-ic-login:before{content:\"\"}.bosch-ic-logistics:before{content:\"\"}.bosch-ic-logout:before{content:\"\"}.bosch-ic-machine:before{content:\"\"}.bosch-ic-magnet:before{content:\"\"}.bosch-ic-mail:before{content:\"\"}.bosch-ic-mail-forward:before{content:\"\"}.bosch-ic-mail-open:before{content:\"\"}.bosch-ic-mail-out:before{content:\"\"}.bosch-ic-mail-reply:before{content:\"\"}.bosch-ic-male:before{content:\"\"}.bosch-ic-map:before{content:\"\"}.bosch-ic-material-add:before{content:\"\"}.bosch-ic-material-check:before{content:\"\"}.bosch-ic-material-remove:before{content:\"\"}.bosch-ic-maximize:before{content:\"\"}.bosch-ic-mechanic:before{content:\"\"}.bosch-ic-megaphone:before{content:\"\"}.bosch-ic-message:before{content:\"\"}.bosch-ic-mic:before{content:\"\"}.bosch-ic-microphone:before{content:\"\"}.bosch-ic-microphone-classic:before{content:\"\"}.bosch-ic-minimize:before{content:\"\"}.bosch-ic-money-currency:before{content:\"\"}.bosch-ic-money-dollar:before{content:\"\"}.bosch-ic-moneybag-currency:before{content:\"\"}.bosch-ic-moneybag-dollar:before{content:\"\"}.bosch-ic-monument:before{content:\"\"}.bosch-ic-moon:before{content:\"\"}.bosch-ic-motorcycle:before{content:\"\"}.bosch-ic-motorcycle-side-car:before{content:\"\"}.bosch-ic-motorcycle-side:before{content:\"\"}.bosch-ic-mouse:before{content:\"\"}.bosch-ic-mouse-left:before{content:\"\"}.bosch-ic-mouse-right:before{content:\"\"}.bosch-ic-mouth:before{content:\"\"}.bosch-ic-my-product:before{content:\"\"}.bosch-ic-new-way-work:before{content:\"\"}.bosch-ic-newsletter:before{content:\"\"}.bosch-ic-newspaper:before{content:\"\"}.bosch-ic-nose:before{content:\"\"}.bosch-ic-notepad:before{content:\"\"}.bosch-ic-notepad-edit:before{content:\"\"}.bosch-ic-notification:before{content:\"\"}.bosch-ic-notification-active:before{content:\"\"}.bosch-ic-notification-add:before{content:\"\"}.bosch-ic-notification-remove:before{content:\"\"}.bosch-ic-oil-car:before{content:\"\"}.bosch-ic-omnichannel:before{content:\"\"}.bosch-ic-options:before{content:\"\"}.bosch-ic-origami-boat:before{content:\"\"}.bosch-ic-pallete-car:before{content:\"\"}.bosch-ic-pallete-car-connected:before{content:\"\"}.bosch-ic-panel:before{content:\"\"}.bosch-ic-paperclip:before{content:\"\"}.bosch-ic-paperplane:before{content:\"\"}.bosch-ic-parking:before{content:\"\"}.bosch-ic-pause:before{content:\"\"}.bosch-ic-payment:before{content:\"\"}.bosch-ic-people:before{content:\"\"}.bosch-ic-petrol-station:before{content:\"\"}.bosch-ic-piggybank:before{content:\"\"}.bosch-ic-pin-classic:before{content:\"\"}.bosch-ic-pin-modern:before{content:\"\"}.bosch-ic-plane-side:before{content:\"\"}.bosch-ic-play:before{content:\"\"}.bosch-ic-plug-12v:before{content:\"\"}.bosch-ic-podium-speaker:before{content:\"\"}.bosch-ic-police:before{content:\"\"}.bosch-ic-poop:before{content:\"\"}.bosch-ic-post-it:before{content:\"\"}.bosch-ic-postal-code:before{content:\"\"}.bosch-ic-power:before{content:\"\"}.bosch-ic-print:before{content:\"\"}.bosch-ic-prototyping:before{content:\"\"}.bosch-ic-puzzle:before{content:\"\"}.bosch-ic-quad:before{content:\"\"}.bosch-ic-question:before{content:\"\"}.bosch-ic-radar:before{content:\"\"}.bosch-ic-radio:before{content:\"\"}.bosch-ic-radiotower:before{content:\"\"}.bosch-ic-redirect:before{content:\"\"}.bosch-ic-redo:before{content:\"\"}.bosch-ic-reference:before{content:\"\"}.bosch-ic-refresh:before{content:\"\"}.bosch-ic-refresh-cloud:before{content:\"\"}.bosch-ic-registration:before{content:\"\"}.bosch-ic-remote:before{content:\"\"}.bosch-ic-reset:before{content:\"\"}.bosch-ic-resolution:before{content:\"\"}.bosch-ic-robot:before{content:\"\"}.bosch-ic-robot-connected:before{content:\"\"}.bosch-ic-robothead:before{content:\"\"}.bosch-ic-rocket:before{content:\"\"}.bosch-ic-rotation:before{content:\"\"}.bosch-ic-rotation-360:before{content:\"\"}.bosch-ic-rotation-x-left:before{content:\"\"}.bosch-ic-rotation-x-right:before{content:\"\"}.bosch-ic-rotation-y-down:before{content:\"\"}.bosch-ic-rotation-y-up:before{content:\"\"}.bosch-ic-route:before{content:\"\"}.bosch-ic-ruler:before{content:\"\"}.bosch-ic-ruler-pen:before{content:\"\"}.bosch-ic-satellite:before{content:\"\"}.bosch-ic-save:before{content:\"\"}.bosch-ic-scale:before{content:\"\"}.bosch-ic-scissors:before{content:\"\"}.bosch-ic-search:before{content:\"\"}.bosch-ic-security:before{content:\"\"}.bosch-ic-security-check:before{content:\"\"}.bosch-ic-security-user:before{content:\"\"}.bosch-ic-sensor:before{content:\"\"}.bosch-ic-server:before{content:\"\"}.bosch-ic-server-expansion:before{content:\"\"}.bosch-ic-server-rate:before{content:\"\"}.bosch-ic-service-agent:before{content:\"\"}.bosch-ic-service-time:before{content:\"\"}.bosch-ic-settings:before{content:\"\"}.bosch-ic-settings-arrows:before{content:\"\"}.bosch-ic-settings-connected:before{content:\"\"}.bosch-ic-share:before{content:\"\"}.bosch-ic-shield-stop:before{content:\"\"}.bosch-ic-ship:before{content:\"\"}.bosch-ic-ship-side:before{content:\"\"}.bosch-ic-shoppingcart:before{content:\"\"}.bosch-ic-shoppingcart-add:before{content:\"\"}.bosch-ic-shoppingcart-switch:before{content:\"\"}.bosch-ic-signal-full:before{content:\"\"}.bosch-ic-signal-half:before{content:\"\"}.bosch-ic-signal-lost:before{content:\"\"}.bosch-ic-signpost:before{content:\"\"}.bosch-ic-simcard:before{content:\"\"}.bosch-ic-skyscraper:before{content:\"\"}.bosch-ic-smartcity:before{content:\"\"}.bosch-ic-smarthome:before{content:\"\"}.bosch-ic-smartphone:before{content:\"\"}.bosch-ic-smartphone-acoustic:before{content:\"\"}.bosch-ic-smartphone-arrow-right:before{content:\"\"}.bosch-ic-smartphone-arrows-x-y-z:before{content:\"\"}.bosch-ic-smartphone-clock:before{content:\"\"}.bosch-ic-smartphone-cloud:before{content:\"\"}.bosch-ic-smartphone-loading-wheel:before{content:\"\"}.bosch-ic-smartphone-smashed:before{content:\"\"}.bosch-ic-smartphone-vibration:before{content:\"\"}.bosch-ic-smartphone-z:before{content:\"\"}.bosch-ic-smartwatch-connected:before{content:\"\"}.bosch-ic-spare-parts:before{content:\"\"}.bosch-ic-spark:before{content:\"\"}.bosch-ic-speaker-acoustic:before{content:\"\"}.bosch-ic-speedometer:before{content:\"\"}.bosch-ic-stadium:before{content:\"\"}.bosch-ic-stairs:before{content:\"\"}.bosch-ic-stamp:before{content:\"\"}.bosch-ic-standby:before{content:\"\"}.bosch-ic-steering-wheel:before{content:\"\"}.bosch-ic-steering-wheel-connected:before{content:\"\"}.bosch-ic-steering-wheel-hands:before{content:\"\"}.bosch-ic-steps:before{content:\"\"}.bosch-ic-stethoscope:before{content:\"\"}.bosch-ic-stop:before{content:\"\"}.bosch-ic-stopwatch:before{content:\"\"}.bosch-ic-storage-local:before{content:\"\"}.bosch-ic-structure:before{content:\"\"}.bosch-ic-subtitles:before{content:\"\"}.bosch-ic-subtitles-off-light:before{content:\"\"}.bosch-ic-summary:before{content:\"\"}.bosch-ic-sun:before{content:\"\"}.bosch-ic-sun-half-filled:before{content:\"\"}.bosch-ic-sunshade-table:before{content:\"\"}.bosch-ic-surveillance:before{content:\"\"}.bosch-ic-table-chairs:before{content:\"\"}.bosch-ic-tablet:before{content:\"\"}.bosch-ic-team:before{content:\"\"}.bosch-ic-team-lightbulb:before{content:\"\"}.bosch-ic-technical-service:before{content:\"\"}.bosch-ic-temperature:before{content:\"\"}.bosch-ic-temperature-high:before{content:\"\"}.bosch-ic-temperature-low:before{content:\"\"}.bosch-ic-theater:before{content:\"\"}.bosch-ic-thumb-down:before{content:\"\"}.bosch-ic-thumb-up:before{content:\"\"}.bosch-ic-ticket:before{content:\"\"}.bosch-ic-touch:before{content:\"\"}.bosch-ic-touch-sos:before{content:\"\"}.bosch-ic-towing-truck:before{content:\"\"}.bosch-ic-train:before{content:\"\"}.bosch-ic-train-side:before{content:\"\"}.bosch-ic-transport-movements:before{content:\"\"}.bosch-ic-transscript:before{content:\"\"}.bosch-ic-transscript-off:before{content:\"\"}.bosch-ic-transscript-on:before{content:\"\"}.bosch-ic-tree:before{content:\"\"}.bosch-ic-tricycle:before{content:\"\"}.bosch-ic-trolley-empty:before{content:\"\"}.bosch-ic-trolley-filled-box:before{content:\"\"}.bosch-ic-trolly-filled-files:before{content:\"\"}.bosch-ic-trophy:before{content:\"\"}.bosch-ic-truck:before{content:\"\"}.bosch-ic-tuktuk:before{content:\"\"}.bosch-ic-tune:before{content:\"\"}.bosch-ic-typography:before{content:\"\"}.bosch-ic-ui:before{content:\"\"}.bosch-ic-umbrella:before{content:\"\"}.bosch-ic-undo:before{content:\"\"}.bosch-ic-up:before{content:\"\"}.bosch-ic-up-double:before{content:\"\"}.bosch-ic-up-down:before{content:\"\"}.bosch-ic-upload:before{content:\"\"}.bosch-ic-usb:before{content:\"\"}.bosch-ic-user:before{content:\"\"}.bosch-ic-user-advanced:before{content:\"\"}.bosch-ic-user-beginner:before{content:\"\"}.bosch-ic-user-desktop:before{content:\"\"}.bosch-ic-user-down:before{content:\"\"}.bosch-ic-user-falling:before{content:\"\"}.bosch-ic-user-hand:before{content:\"\"}.bosch-ic-user-hand-stop:before{content:\"\"}.bosch-ic-user-professional:before{content:\"\"}.bosch-ic-user-run:before{content:\"\"}.bosch-ic-user-share:before{content:\"\"}.bosch-ic-user-voice:before{content:\"\"}.bosch-ic-user-walk:before{content:\"\"}.bosch-ic-video:before{content:\"\"}.bosch-ic-video-disabled-light:before{content:\"\"}.bosch-ic-video-record:before{content:\"\"}.bosch-ic-virtual-reality:before{content:\"\"}.bosch-ic-volume-disabled:before{content:\"\"}.bosch-ic-volume-high:before{content:\"\"}.bosch-ic-volume-low:before{content:\"\"}.bosch-ic-volume-off-light:before{content:\"\"}.bosch-ic-wand:before{content:\"\"}.bosch-ic-badge-checkmark:before{content:\"\"}.bosch-ic-watch-off-disabled-light:before{content:\"\"}.bosch-ic-watch-on:before{content:\"\"}.bosch-ic-water-shower:before{content:\"\"}.bosch-ic-welcome:before{content:\"\"}.bosch-ic-wellness:before{content:\"\"}.bosch-ic-wheelchair:before{content:\"\"}.bosch-ic-whistle:before{content:\"\"}.bosch-ic-wide-angled-arrow:before{content:\"\"}.bosch-ic-wifi:before{content:\"\"}.bosch-ic-window-analysis:before{content:\"\"}.bosch-ic-window-browser:before{content:\"\"}.bosch-ic-window-console:before{content:\"\"}.bosch-ic-window-gaussian-view:before{content:\"\"}.bosch-ic-window-info:before{content:\"\"}.bosch-ic-window-new:before{content:\"\"}.bosch-ic-window-resize:before{content:\"\"}.bosch-ic-window-scaling-view:before{content:\"\"}.bosch-ic-window-shuffle:before{content:\"\"}.bosch-ic-window-statistic:before{content:\"\"}.bosch-ic-wishlist:before{content:\"\"}.bosch-ic-work-order:before{content:\"\"}.bosch-ic-worldwideweb:before{content:\"\"}.bosch-ic-wrench:before{content:\"\"}.bosch-ic-zoom-in:before{content:\"\"}.bosch-ic-zoom-out:before{content:\"\"}.bosch-ic-scooter:before{content:\"\"}.bosch-ic-cars-traffic:before{content:\"\"}.bosch-ic-arm-chair:before{content:\"\"}.bosch-ic-car-phone:before{content:\"\"}.bosch-ic-box-lightbulb:before{content:\"\"}.bosch-ic-chair-officedesk:before{content:\"\"}.bosch-ic-calendar-clock:before{content:\"\"}.bosch-ic-document-cv:before{content:\"\"}.bosch-ic-user-run-bag:before{content:\"\"}.bosch-ic-brake-disk-spray:before{content:\"\"}.bosch-ic-circle-abs:before{content:\"\"}.bosch-ic-bright-down:before{content:\"\"}.bosch-ic-bright-up:before{content:\"\"}.bosch-ic-fan:before{content:\"\"}.bosch-ic-sun-moon:before{content:\"\"}.bosch-ic-lightbulb-attention:before{content:\"\"}.bosch-ic-settings-attention:before{content:\"\"}.bosch-ic-danger-hazards:before{content:\"\"}.bosch-ic-windshield-spray:before{content:\"\"}.bosch-ic-windshield-heat:before{content:\"\"}.bosch-ic-light-drop:before{content:\"\"}.bosch-ic-starter:before{content:\"\"}.bosch-ic-turbo:before{content:\"\"}.bosch-ic-settings-lock:before{content:\"\"}.bosch-ic-settings-n:before{content:\"\"}.bosch-ic-light-beam-high:before{content:\"\"}.bosch-ic-light-beam-low:before{content:\"\"}.bosch-ic-glas:before{content:\"\"}.bosch-ic-shirt-ice:before{content:\"\"}.bosch-ic-helmet-fan:before{content:\"\"}.bosch-ic-notification-arrow:before{content:\"\"}.bosch-ic-steering-wheel-arrow:before{content:\"\"}.bosch-ic-circle-arrow:before{content:\"\"}.bosch-ic-tempomat-pit:before{content:\"\"}.bosch-ic-radiator-fan-spray:before{content:\"\"}.bosch-ic-boost-down:before{content:\"\"}.bosch-ic-boost-up:before{content:\"\"}.bosch-ic-circle-lock:before{content:\"\"}.bosch-ic-mp-down:before{content:\"\"}.bosch-ic-mp-up:before{content:\"\"}.bosch-ic-tc-down:before{content:\"\"}.bosch-ic-tc-up:before{content:\"\"}.bosch-ic-danger-arrow-attention:before{content:\"\"}.bosch-ic-user-remove:before{content:\"\"}.bosch-ic-user-add:before{content:\"\"}.bosch-ic-post-it-collection:before{content:\"\"}.bosch-ic-horn:before{content:\"\"}.bosch-ic-desktop-notification:before{content:\"\"}.bosch-ic-router:before{content:\"\"}.bosch-ic-berry:before{content:\"\"}.bosch-ic-chat-language:before{content:\"\"}.bosch-ic-game-controller:before{content:\"\"}.bosch-ic-user-brain:before{content:\"\"}.bosch-ic-mouth-finger:before{content:\"\"}.bosch-ic-excavator-shovel:before{content:\"\"}.bosch-ic-ear-in:before{content:\"\"}.bosch-ic-ear-out:before{content:\"\"}.bosch-ic-lion:before{content:\"\"}.bosch-ic-car-convertible:before{content:\"\"}.bosch-ic-car-sports:before{content:\"\"}.bosch-ic-bear:before{content:\"\"}.bosch-ic-pot:before{content:\"\"}.bosch-ic-bed-double:before{content:\"\"}.bosch-ic-air-hot:before{content:\"\"}.bosch-ic-air-ice:before{content:\"\"}.bosch-ic-air-leaf:before{content:\"\"}.bosch-ic-air-purifier-0:before{content:\"\"}.bosch-ic-air-purifier-1:before{content:\"\"}.bosch-ic-air-purifier-2:before{content:\"\"}.bosch-ic-air-purifier-3:before{content:\"\"}.bosch-ic-air:before{content:\"\"}.bosch-ic-fan-off-disabled-bold:before{content:\"\"}.bosch-ic-ice-off-disabled-bold:before{content:\"\"}.bosch-ic-faucet-boost:before{content:\"\"}.bosch-ic-faucet-mode:before{content:\"\"}.bosch-ic-faucet-off-disabled-bold:before{content:\"\"}.bosch-ic-faucet-schedule:before{content:\"\"}.bosch-ic-fuel-cell:before{content:\"\"}.bosch-ic-heating-floor-off-disabled-bold:before{content:\"\"}.bosch-ic-heating-floor:before{content:\"\"}.bosch-ic-heating-radiator-boost:before{content:\"\"}.bosch-ic-heating-radiator-mode:before{content:\"\"}.bosch-ic-heating-radiator-off-disabled-bold:before{content:\"\"}.bosch-ic-heating-radiator-schedule:before{content:\"\"}.bosch-ic-leaf-simple:before{content:\"\"}.bosch-ic-oil-barrel:before{content:\"\"}.bosch-ic-water-bathtub:before{content:\"\"}.bosch-ic-water-dishwash:before{content:\"\"}.bosch-ic-water-handwash:before{content:\"\"}.bosch-ic-water-hot:before{content:\"\"}.bosch-ic-water-ice:before{content:\"\"}.bosch-ic-water-leaf:before{content:\"\"}.bosch-ic-water-ladder:before{content:\"\"}.bosch-ic-water-purifier-0:before{content:\"\"}.bosch-ic-water-purifier-1:before{content:\"\"}.bosch-ic-water-purifier-2:before{content:\"\"}.bosch-ic-water-purifier-3:before{content:\"\"}.bosch-ic-water-shower-boost:before{content:\"\"}.bosch-ic-water-shower-mode:before{content:\"\"}.bosch-ic-water-shower-off-disabled-bold:before{content:\"\"}.bosch-ic-water-shower-schedule:before{content:\"\"}.bosch-ic-water:before{content:\"\"}.bosch-ic-chart-bar-drop:before{content:\"\"}.bosch-ic-chart-bar-fire:before{content:\"\"}.bosch-ic-chart-bar-flash:before{content:\"\"}.bosch-ic-chart-bar-oil:before{content:\"\"}.bosch-ic-drop-minus:before{content:\"\"}.bosch-ic-drop-plus:before{content:\"\"}.bosch-ic-fan-minus:before{content:\"\"}.bosch-ic-fan-plus:before{content:\"\"}.bosch-ic-home-drops-0:before{content:\"\"}.bosch-ic-home-drops-1:before{content:\"\"}.bosch-ic-home-drops-2:before{content:\"\"}.bosch-ic-home-drops-3:before{content:\"\"}.bosch-ic-home-temperature-in:before{content:\"\"}.bosch-ic-home-temperature-out:before{content:\"\"}.bosch-ic-home-user-in:before{content:\"\"}.bosch-ic-ice-minus:before{content:\"\"}.bosch-ic-ice-plus:before{content:\"\"}.bosch-ic-chimney-sweeper:before{content:\"\"}.bosch-ic-menu-up:before{content:\"\"}.bosch-ic-security-ice:before{content:\"\"}.bosch-ic-security-legionella:before{content:\"\"}.bosch-ic-trolley-case:before{content:\"\"}.bosch-ic-sun-minus:before{content:\"\"}.bosch-ic-sun-plug:before{content:\"\"}.bosch-ic-sun-plus:before{content:\"\"}.bosch-ic-touch-pit:before{content:\"\"}.bosch-ic-temperature-current:before{content:\"\"}.bosch-ic-temperature-set:before{content:\"\"}.bosch-ic-teddy-bear:before{content:\"\"}.bosch-ic-document-svg:before{content:\"\"}.bosch-ic-back-menu:before{content:\"\"}.bosch-ic-car-arrows:before{content:\"\"}.bosch-ic-wrench-cloud:before{content:\"\"}.bosch-ic-weather-cloud-sun:before{content:\"\"}.bosch-ic-weather-cloudy:before{content:\"\"}.bosch-ic-weather-gale:before{content:\"\"}.bosch-ic-weather-mist:before{content:\"\"}.bosch-ic-weather-moon-cloud:before{content:\"\"}.bosch-ic-weather-rain-snow:before{content:\"\"}.bosch-ic-weather-rain-thunder:before{content:\"\"}.bosch-ic-weather-rain:before{content:\"\"}.bosch-ic-weather-snow:before{content:\"\"}.bosch-ic-weather-thunder:before{content:\"\"}.bosch-ic-weather-wind:before{content:\"\"}.bosch-ic-plane-start:before{content:\"\"}.bosch-ic-plane-land:before{content:\"\"}.bosch-ic-graph-power:before{content:\"\"}.bosch-ic-floorplan:before{content:\"\"}.bosch-ic-clock-pause:before{content:\"\"}.bosch-ic-clock-start:before{content:\"\"}.bosch-ic-clock-stop:before{content:\"\"}.bosch-ic-computer-retro:before{content:\"\"}.bosch-ic-smartphone-retro:before{content:\"\"}.bosch-ic-wood:before{content:\"\"}.bosch-ic-solid-fuel:before{content:\"\"}.bosch-ic-appliance-fan:before{content:\"\"}.bosch-ic-appliance-flame:before{content:\"\"}.bosch-ic-appliance-ice:before{content:\"\"}.bosch-ic-appliance-oil:before{content:\"\"}.bosch-ic-appliance-solid-fuel:before{content:\"\"}.bosch-ic-appliance-sun-ice:before{content:\"\"}.bosch-ic-appliance-sun:before{content:\"\"}.bosch-ic-appliance-wood:before{content:\"\"}.bosch-ic-appliance-air-leaf:before{content:\"\"}.bosch-ic-appliance-water-air:before{content:\"\"}.bosch-ic-appliance-water-leaf:before{content:\"\"}.bosch-ic-appliance-water-oil:before{content:\"\"}.bosch-ic-appliance-water:before{content:\"\"}.bosch-ic-appliance-heat-pump-air:before{content:\"\"}.bosch-ic-appliance-heat-pump-ground:before{content:\"\"}.bosch-ic-appliance-heat-pump-water:before{content:\"\"}.bosch-ic-appliance-plug-air:before{content:\"\"}.bosch-ic-appliance-plug-fuel-cell:before{content:\"\"}.bosch-ic-appliance-plug-leaf:before{content:\"\"}.bosch-ic-appliance-plug-water-air:before{content:\"\"}.bosch-ic-thermostat-connected-c:before{content:\"\"}.bosch-ic-thermostat-connected-f:before{content:\"\"}.bosch-ic-image-gallery:before{content:\"\"}.bosch-ic-arrows-caution:before{content:\"\"}.bosch-ic-arrows-diagonal-disabled-bold:before{content:\"\"}.bosch-ic-back-left-end:before{content:\"\"}.bosch-ic-back-right-end:before{content:\"\"}.bosch-ic-bar-chart-search:before{content:\"\"}.bosch-ic-batch:before{content:\"\"}.bosch-ic-calendar-remove:before{content:\"\"}.bosch-ic-call-bluetooth:before{content:\"\"}.bosch-ic-call-deny:before{content:\"\"}.bosch-ic-call-settings:before{content:\"\"}.bosch-ic-caution-sign-clock:before{content:\"\"}.bosch-ic-caution-sign-list:before{content:\"\"}.bosch-ic-core-data:before{content:\"\"}.bosch-ic-cursor-connected:before{content:\"\"}.bosch-ic-cursor:before{content:\"\"}.bosch-ic-dmc-code:before{content:\"\"}.bosch-ic-find-id:before{content:\"\"}.bosch-ic-globe-search:before{content:\"\"}.bosch-ic-interface:before{content:\"\"}.bosch-ic-material-add-manually:before{content:\"\"}.bosch-ic-material-list:before{content:\"\"}.bosch-ic-material-remove-manually:before{content:\"\"}.bosch-ic-material:before{content:\"\"}.bosch-ic-menu-checkmark:before{content:\"\"}.bosch-ic-qr-code:before{content:\"\"}.bosch-ic-sort-alphabetically:before{content:\"\"}.bosch-ic-unpin-classic-disabled-bold:before{content:\"\"}.bosch-ic-unpin-modern-disabled-bold:before{content:\"\"}.bosch-ic-window-search:before{content:\"\"}.bosch-ic-cloud-clock:before{content:\"\"}.bosch-ic-concierge:before{content:\"\"}.bosch-ic-heating-radiator:before{content:\"\"}.bosch-ic-home-user-out:before{content:\"\"}.bosch-ic-hot:before{content:\"\"}.bosch-ic-screen-service:before{content:\"\"}.bosch-ic-sun-ice:before{content:\"\"}.bosch-ic-sun-off-disabled-bold:before{content:\"\"}.bosch-ic-tractor:before{content:\"\"}.bosch-ic-video-recorder-digital:before{content:\"\"}.bosch-ic-windshield-wiper:before{content:\"\"}.bosch-ic-weather-snow-thunder:before{content:\"\"}.bosch-ic-electricity-pylon:before{content:\"\"}.bosch-ic-box-questionmark:before{content:\"\"}.bosch-ic-rainbow:before{content:\"\"}.bosch-ic-medal:before{content:\"\"}.bosch-ic-wheel:before{content:\"\"}.bosch-ic-borescope-connected:before{content:\"\"}.bosch-ic-filter-delete:before{content:\"\"}.bosch-ic-filter-add:before{content:\"\"}.bosch-ic-man:before{content:\"\"}.bosch-ic-woman:before{content:\"\"}.bosch-ic-fridge:before{content:\"\"}.bosch-ic-battery-car:before{content:\"\"}.bosch-ic-bag-escalator:before{content:\"\"}.bosch-ic-shopping-bags:before{content:\"\"}.bosch-ic-car-steering-left:before{content:\"\"}.bosch-ic-car-steering-right:before{content:\"\"}.bosch-ic-thumb-up-down:before{content:\"\"}.bosch-ic-user-run-detection:before{content:\"\"}.bosch-ic-bank:before{content:\"\"}.bosch-ic-transportation:before{content:\"\"}.bosch-ic-government:before{content:\"\"}.bosch-ic-user-music:before{content:\"\"}.bosch-ic-bus:before{content:\"\"}.bosch-ic-car-euro:before{content:\"\"}.bosch-ic-bag:before{content:\"\"}.bosch-ic-plate-tetrapack:before{content:\"\"}.bosch-ic-hospital:before{content:\"\"}.bosch-ic-desktop-structure:before{content:\"\"}.bosch-ic-frog-head:before{content:\"\"}.bosch-ic-sportboat:before{content:\"\"}.bosch-ic-yacht:before{content:\"\"}.bosch-ic-leaf-tilia:before{content:\"\"}.bosch-ic-music:before{content:\"\"}.bosch-ic-oil-lamp:before{content:\"\"}.bosch-ic-windshield-wiper-rear:before{content:\"\"}.bosch-ic-dongle-connected:before{content:\"\"}.bosch-ic-slate:before{content:\"\"}.bosch-ic-appliance-heat-pump-exhaust:before{content:\"\"}.bosch-ic-alert-list:before{content:\"\"}.bosch-ic-arrow-left-end-frame:before{content:\"\"}.bosch-ic-arrow-right-end-frame:before{content:\"\"}.bosch-ic-shape-ellipse:before{content:\"\"}.bosch-ic-shape-rectangle:before{content:\"\"}.bosch-ic-wishlist-add:before{content:\"\"}.bosch-ic-smartphone-disabled-light:before{content:\"\"}.bosch-ic-airbag:before{content:\"\"}.bosch-ic-compass:before{content:\"\"}.bosch-ic-turbine-wind:before{content:\"\"}.bosch-ic-arrows-diagonal-disabled-light:before{content:\"\"}.bosch-ic-ear-off-disabled-bold:before{content:\"\"}.bosch-ic-fan-off-disabled-light:before{content:\"\"}.bosch-ic-faucet-off-disabled-light:before{content:\"\"}.bosch-ic-hand-motion-off-disabled-bold:before{content:\"\"}.bosch-ic-heating-floor-off-disabled-light:before{content:\"\"}.bosch-ic-heating-radiator-off-disabled-light:before{content:\"\"}.bosch-ic-ice-off-disabled-light:before{content:\"\"}.bosch-ic-smartphone-disabled-bold:before{content:\"\"}.bosch-ic-subtitles-off-bold:before{content:\"\"}.bosch-ic-sun-off-disabled-light:before{content:\"\"}.bosch-ic-video-disabled-bold:before{content:\"\"}.bosch-ic-volume-off-bold:before{content:\"\"}.bosch-ic-watch-off-disabled-bold:before{content:\"\"}.bosch-ic-water-shower-off-disabled-light:before{content:\"\"}.bosch-ic-3d-frame-play:before{content:\"\"}.bosch-ic-alert-error-checkmark:before{content:\"\"}.bosch-ic-arrow-up-frame-check:before{content:\"\"}.bosch-ic-arrow-up-frame-error:before{content:\"\"}.bosch-ic-arrows-checkmark:before{content:\"\"}.bosch-ic-assembly-line-settings:before{content:\"\"}.bosch-ic-augmented-reality-player:before{content:\"\"}.bosch-ic-bar-chart-kappa:before{content:\"\"}.bosch-ic-bar-chart-search-detail:before{content:\"\"}.bosch-ic-barcode-checkmark:before{content:\"\"}.bosch-ic-barcode-scan-bulb:before{content:\"\"}.bosch-ic-barcode:before{content:\"\"}.bosch-ic-binary:before{content:\"\"}.bosch-ic-book-lightbulb:before{content:\"\"}.bosch-ic-box-arrow-down:before{content:\"\"}.bosch-ic-box-delivery-checkmark:before{content:\"\"}.bosch-ic-globe-checkmark:before{content:\"\"}.bosch-ic-calendar-boxes:before{content:\"\"}.bosch-ic-calendar-service:before{content:\"\"}.bosch-ic-camera-processor:before{content:\"\"}.bosch-ic-camera-settings:before{content:\"\"}.bosch-ic-chart-line-checkmark:before{content:\"\"}.bosch-ic-checklist-stack:before{content:\"\"}.bosch-ic-checkmark-frame-minimum:before{content:\"\"}.bosch-ic-checkmark-frame-tripple:before{content:\"\"}.bosch-ic-clipboard-checkmark:before{content:\"\"}.bosch-ic-clipboard-list-parts:before{content:\"\"}.bosch-ic-clipboard-settings:before{content:\"\"}.bosch-ic-computer-tower-box:before{content:\"\"}.bosch-ic-connectivity-lock:before{content:\"\"}.bosch-ic-counter-current:before{content:\"\"}.bosch-ic-counter-target:before{content:\"\"}.bosch-ic-cube-checkmark:before{content:\"\"}.bosch-ic-cube-play:before{content:\"\"}.bosch-ic-time-line-settings:before{content:\"\"}.bosch-ic-time-line-view:before{content:\"\"}.bosch-ic-time-line:before{content:\"\"}.bosch-ic-delivery-checkmark:before{content:\"\"}.bosch-ic-desktop-application-3d-play:before{content:\"\"}.bosch-ic-desktop-apps-download:before{content:\"\"}.bosch-ic-desktop-dashboard:before{content:\"\"}.bosch-ic-desktop-graph-checkmark:before{content:\"\"}.bosch-ic-desktop-graph-search:before{content:\"\"}.bosch-ic-desktop-graph:before{content:\"\"}.bosch-ic-development-kit:before{content:\"\"}.bosch-ic-directory-cloud-settings:before{content:\"\"}.bosch-ic-directory-cloud:before{content:\"\"}.bosch-ic-directory-settings:before{content:\"\"}.bosch-ic-document-clock-cycle:before{content:\"\"}.bosch-ic-document-code-stack:before{content:\"\"}.bosch-ic-document-dat-edit:before{content:\"\"}.bosch-ic-document-ohd-arrow-down:before{content:\"\"}.bosch-ic-dolphin:before{content:\"\"}.bosch-ic-energy-management:before{content:\"\"}.bosch-ic-eraser:before{content:\"\"}.bosch-ic-folder-broom:before{content:\"\"}.bosch-ic-folder-check-broom:before{content:\"\"}.bosch-ic-folder-checkmark:before{content:\"\"}.bosch-ic-folder-oes-check:before{content:\"\"}.bosch-ic-folder-open-service:before{content:\"\"}.bosch-ic-folder-reload:before{content:\"\"}.bosch-ic-hand-command:before{content:\"\"}.bosch-ic-heating-start:before{content:\"\"}.bosch-ic-hierarchy-refresh:before{content:\"\"}.bosch-ic-hierarchy-search:before{content:\"\"}.bosch-ic-hierarchy-settings:before{content:\"\"}.bosch-ic-hierarchy:before{content:\"\"}.bosch-ic-hmi-desktop-settings:before{content:\"\"}.bosch-ic-human-machine-interface:before{content:\"\"}.bosch-ic-keys-user-access:before{content:\"\"}.bosch-ic-keys:before{content:\"\"}.bosch-ic-label-edit:before{content:\"\"}.bosch-ic-line-arrow-checkmark:before{content:\"\"}.bosch-ic-link-checkmark:before{content:\"\"}.bosch-ic-lock-closed-checkmark:before{content:\"\"}.bosch-ic-lock-open-checkmark:before{content:\"\"}.bosch-ic-material-search:before{content:\"\"}.bosch-ic-objects-search:before{content:\"\"}.bosch-ic-objects:before{content:\"\"}.bosch-ic-plan-a-to-b:before{content:\"\"}.bosch-ic-plan-chart:before{content:\"\"}.bosch-ic-print-send:before{content:\"\"}.bosch-ic-refresh-analysis:before{content:\"\"}.bosch-ic-remote-desktop-add:before{content:\"\"}.bosch-ic-rfid-checkmark:before{content:\"\"}.bosch-ic-rfid-tag:before{content:\"\"}.bosch-ic-sequence-checkmark:before{content:\"\"}.bosch-ic-server-arrow-up:before{content:\"\"}.bosch-ic-server-arrows:before{content:\"\"}.bosch-ic-server-settings:before{content:\"\"}.bosch-ic-server-share:before{content:\"\"}.bosch-ic-settings-editor:before{content:\"\"}.bosch-ic-survey-checkmark:before{content:\"\"}.bosch-ic-target-dart:before{content:\"\"}.bosch-ic-target-view:before{content:\"\"}.bosch-ic-target:before{content:\"\"}.bosch-ic-thickness-selection:before{content:\"\"}.bosch-ic-toolbox-checkmark:before{content:\"\"}.bosch-ic-toolbox:before{content:\"\"}.bosch-ic-translate:before{content:\"\"}.bosch-ic-tune-vertical-checkmark:before{content:\"\"}.bosch-ic-wand-user-add:before{content:\"\"}.bosch-ic-wand-user-settings:before{content:\"\"}.bosch-ic-wand-user:before{content:\"\"}.bosch-ic-window-globe:before{content:\"\"}.bosch-ic-wrench-change:before{content:\"\"}.bosch-ic-clock-24-7:before{content:\"\"}.bosch-ic-eagle:before{content:\"\"}.bosch-ic-fluorescent-light:before{content:\"\"}.bosch-ic-home-cloud-0:before{content:\"\"}.bosch-ic-home-cloud-1:before{content:\"\"}.bosch-ic-home-cloud-2:before{content:\"\"}.bosch-ic-home-cloud-3:before{content:\"\"}.bosch-ic-home-shadow:before{content:\"\"}.bosch-ic-motorcycle-sport:before{content:\"\"}.bosch-ic-smartphone-connected:before{content:\"\"}.bosch-ic-usb-stick:before{content:\"\"}.bosch-ic-user--setting:before{content:\"\"}.bosch-ic-time-line-clock:before{content:\"\"}.bosch-ic-alarm-fire:before{content:\"\"}.bosch-ic-emergency-front:before{content:\"\"}.bosch-ic-transporter-front:before{content:\"\"}.bosch-ic-truck-front:before{content:\"\"}.bosch-ic-unpin-classic-disabled-light:before{content:\"\"}.bosch-ic-unpin-modern-disabled-light:before{content:\"\"}.bosch-ic-smartphone-ban:before{content:\"\"}.bosch-ic-helmet:before{content:\"\"}.bosch-ic-gate-closed:before{content:\"\"}.bosch-ic-fence:before{content:\"\"}.bosch-ic-desktop-apps:before{content:\"\"}.bosch-ic-candle:before{content:\"\"}.bosch-ic-abort-frame:before{content:\"\"}.bosch-ic-arrow-down-frame:before{content:\"\"}.bosch-ic-arrow-left-down-frame:before{content:\"\"}.bosch-ic-arrow-left-frame:before{content:\"\"}.bosch-ic-arrow-left-up-frame:before{content:\"\"}.bosch-ic-arrow-right-down-frame:before{content:\"\"}.bosch-ic-arrow-right-frame:before{content:\"\"}.bosch-ic-arrow-right-up-frame:before{content:\"\"}.bosch-ic-arrow-up-frame:before{content:\"\"}.bosch-ic-asiapacific-frame:before{content:\"\"}.bosch-ic-cash-frame:before{content:\"\"}.bosch-ic-checkmark-frame:before{content:\"\"}.bosch-ic-copyright-frame:before{content:\"\"}.bosch-ic-download-frame:before{content:\"\"}.bosch-ic-europe-frame:before{content:\"\"}.bosch-ic-lock-closed-frame:before{content:\"\"}.bosch-ic-lock-open-frame:before{content:\"\"}.bosch-ic-my-brand-frame:before{content:\"\"}.bosch-ic-northamerica-frame:before{content:\"\"}.bosch-ic-problem-frame:before{content:\"\"}.bosch-ic-promotion-frame:before{content:\"\"}.bosch-ic-question-frame:before{content:\"\"}.bosch-ic-share-frame:before{content:\"\"}.bosch-ic-southamerica-frame:before{content:\"\"}.bosch-ic-start-play-frame:before{content:\"\"}.bosch-ic-upload-frame:before{content:\"\"}.bosch-ic-world-frame:before{content:\"\"}.bosch-ic-add-frame:before{content:\"\"}.bosch-ic-call-deny-frame:before{content:\"\"}.bosch-ic-call-frame:before{content:\"\"}.bosch-ic-fast-backward-frame:before{content:\"\"}.bosch-ic-fast-forward-frame:before{content:\"\"}.bosch-ic-skip-backward-frame:before{content:\"\"}.bosch-ic-skip-fast-backward-frame:before{content:\"\"}.bosch-ic-skip-fast-forward-frame:before{content:\"\"}.bosch-ic-skip-forward-frame:before{content:\"\"}.bosch-ic-subtract-frame:before{content:\"\"}.bosch-ic-facebook-frame:before{content:\"\"}.bosch-ic-googleplus-frame:before{content:\"\"}.bosch-ic-instagram-frame:before{content:\"\"}.bosch-ic-lineapp-frame:before{content:\"\"}.bosch-ic-linkedin-frame:before{content:\"\"}.bosch-ic-pinterest-frame:before{content:\"\"}.bosch-ic-snapchat-frame:before{content:\"\"}.bosch-ic-tumblr-frame:before{content:\"\"}.bosch-ic-twitter-frame:before{content:\"\"}.bosch-ic-vimeo-frame:before{content:\"\"}.bosch-ic-wechat-frame:before{content:\"\"}.bosch-ic-weibo-frame:before{content:\"\"}.bosch-ic-whatsapp-frame:before{content:\"\"}.bosch-ic-xing-frame:before{content:\"\"}.bosch-ic-youku-frame:before{content:\"\"}.bosch-ic-youtube-frame:before{content:\"\"}.bosch-ic-vk-frame:before{content:\"\"}.bosch-ic-skype-frame:before{content:\"\"}.bosch-ic-alert-error-filled:before{content:\"\"}.bosch-ic-alert-error:before{content:\"\"}.bosch-ic-alert-success-filled:before{content:\"\"}.bosch-ic-alert-success:before{content:\"\"}.bosch-ic-alert-warning-filled:before{content:\"\"}.bosch-ic-alert-warning:before{content:\"\"}/*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.Bosch-IC-find-part:before{content:\"\"}.Bosch-IC-next-station:before{content:\"\"}.Bosch-Ic-HMI:before{content:\"\"}.Bosch-Ic-add-outline:before{content:\"\"}.Bosch-Ic-apas:before{content:\"\"}.Bosch-Ic-abort:before,.bosch-ic-abort:before{content:\"\"}.Bosch-Ic-cash:before{content:\"\"}.Bosch-Ic-pinterest:before{content:\"\"}.Bosch-Ic-problem:before{content:\"\"}.Bosch-Ic-promotion:before{content:\"\"}.Bosch-Ic-arrow-diagonal:before{content:\"\"}.Bosch-Ic-arrow-down-filled:before{content:\"\"}.Bosch-Ic-arrow-down-circle:before{content:\"\"}.Bosch-Ic-arrow-end-left:before{content:\"\"}.Bosch-Ic-arrow-end-right:before{content:\"\"}.Bosch-Ic-arrow-left-down-filled:before{content:\"\"}.Bosch-Ic-arrow-left-filled:before{content:\"\"}.Bosch-Ic-arrow-left-up-filled:before{content:\"\"}.Bosch-Ic-arrow-right-down-filled:before{content:\"\"}.Bosch-Ic-arrow-right-filled:before{content:\"\"}.Bosch-Ic-arrow-right-up-filled:before{content:\"\"}.Bosch-Ic-arrow-up-filled:before{content:\"\"}.Bosch-Ic-batch:before{content:\"\"}.Bosch-Ic-calculator:before{content:\"\"}.Bosch-Ic-calendar-delete:before{content:\"\"}.Bosch-Ic-call-bluetooth:before{content:\"\"}.Bosch-Ic-call-deny-outline:before{content:\"\"}.Bosch-Ic-call-deny:before{content:\"\"}.Bosch-Ic-call-pick-up-outline:before{content:\"\"}.Bosch-Ic-call-pick-up:before{content:\"\"}.Bosch-Ic-call-settings:before{content:\"\"}.Bosch-Ic-clear-all-annotations:before{content:\"\"}.Bosch-Ic-connection:before{content:\"\"}.Bosch-Ic-core-data:before{content:\"\"}.Bosch-Ic-curve-scaling-view:before{content:\"\"}.Bosch-Ic-dashboard:before{content:\"\"}.Bosch-Ic-delete-material-manually:before{content:\"\"}.Bosch-Ic-dmc-code:before{content:\"\"}.Bosch-Ic-document-to-svg:before{content:\"\"}.Bosch-Ic-emergency-order:before{content:\"\"}.Bosch-Ic-fast-backwards:before{content:\"\"}.Bosch-Ic-fast-forwards:before{content:\"\"}.Bosch-Ic-favorite:before{content:\"\"}.Bosch-Ic-go-to:before{content:\"\"}.Bosch-Ic-gps:before{content:\"\"}.Bosch-Ic-home-filled:before{content:\"\"}.Bosch-Ic-input:before{content:\"\"}.Bosch-Ic-interface:before{content:\"\"}.Bosch-Ic-list:before{content:\"\"}.Bosch-Ic-malfunction-history:before{content:\"\"}.Bosch-Ic-malfunction-order:before{content:\"\"}.Bosch-Ic-material-list:before{content:\"\"}.Bosch-Ic-material:before{content:\"\"}.Bosch-Ic-maximize-window:before{content:\"\"}.Bosch-Ic-menu-tree:before{content:\"\"}.Bosch-Ic-minimize-window:before{content:\"\"}.Bosch-Ic-notification-hint:before{content:\"\"}.Bosch-Ic-notification-question:before{content:\"\"}.Bosch-Ic-notification-error:before{content:\"\"}.Bosch-Ic-notification-outline:before{content:\"\"}.Bosch-Ic-notification-success:before{content:\"\"}.Bosch-Ic-notification-warning:before{content:\"\"}.Bosch-Ic-notification:before{content:\"\"}.Bosch-Ic-output:before{content:\"\"}.Bosch-Ic-paste:before{content:\"\"}.Bosch-Ic-qr-code:before{content:\"\"}.Bosch-Ic-remote-cursor:before{content:\"\"}.Bosch-Ic-scale:before{content:\"\"}.Bosch-Ic-search-chart:before{content:\"\"}.Bosch-Ic-search-web:before{content:\"\"}.Bosch-Ic-search-window:before{content:\"\"}.Bosch-Ic-shape-ellipse:before{content:\"\"}.Bosch-Ic-shape-rectangle:before{content:\"\"}.Bosch-Ic-show-more-vertical:before{content:\"\"}.Bosch-Ic-signal:before{content:\"\"}.Bosch-Ic-skip-back:before{content:\"\"}.Bosch-Ic-skip-backward:before{content:\"\"}.Bosch-Ic-StarterKit:before{content:\"\"}.Bosch-Ic-skip-for:before{content:\"\"}.Bosch-Ic-skip-forward:before{content:\"\"}.Bosch-Ic-sort-alphabetically:before{content:\"\"}.Bosch-Ic-switch-language:before{content:\"\"}.Bosch-Ic-snyc-disabled:before{content:\"\"}.Bosch-Ic-sync-disabled:before{content:\"\"}.Bosch-Ic-sync-problem:before{content:\"\"}.Bosch-Ic-sync:before{content:\"\"}.Bosch-Ic-test:before{content:\"\"}.Bosch-Ic-to-order:before{content:\"\"}.Bosch-Ic-to-raw:before{content:\"\"}.Bosch-Ic-transport-orders:before{content:\"\"}.Bosch-Ic-unpin:before{content:\"\"}.Bosch-Ic-user-filled:before{content:\"\"}.Bosch-Ic-video-play:before{content:\"\"}.Bosch-Ic-weblink:before{content:\"\"}.Bosch-Ic-warning-outline:before{content:\"\"}.Bosch-Ic-add-material-manually:before{content:\"\"}.Bosch-Ic-add-material:before{content:\"\"}.Bosch-Ic-add:before{content:\"\"}.Bosch-Ic-adress-consumer:before{content:\"\"}.Bosch-Ic-adressbook:before{content:\"\"}.Bosch-Ic-alarm:before{content:\"\"}.Bosch-Ic-alert:before{content:\"\"}.Bosch-Ic-analysis:before{content:\"\"}.Bosch-Ic-anchor:before{content:\"\"}.Bosch-IC-3d-print:before{content:\"\"}.Bosch-Ic-tours:before{content:\"\"}.Bosch-Ic-add:before{content:\"\"}.Bosch-Ic-adress-consumer:before{content:\"\"}.Bosch-Ic-adressbook:before{content:\"\"}.Bosch-IC-agility:before{content:\"\"}.Bosch-Ic-clock-stop:before{content:\"\"}.Bosch-IC-ambulance:before{content:\"\"}.Bosch-Ic-analysis:before{content:\"\"}.Bosch-Ic-anchor:before{content:\"\"}.Bosch-Ic-arrow-down:before{content:\"\"}.Bosch-Ic-arrow-left:before{content:\"\"}.Bosch-Ic-arrow-left-down:before{content:\"\"}.Bosch-Ic-arrow-left-up:before{content:\"\"}.Bosch-Ic-arrow-right:before{content:\"\"}.Bosch-Ic-arrow-right-down:before{content:\"\"}.Bosch-Ic-arrow-right-up:before{content:\"\"}.Bosch-IC-arrow-turn-left:before{content:\"\"}.Bosch-IC-arrow-turn-right:before{content:\"\"}.Bosch-Ic-arrow-up:before{content:\"\"}.Bosch-IC-arrows:before{content:\"\"}.Bosch-IC-arrows-x-y-z:before{content:\"\"}.Bosch-IC-artificial-intelligence:before{content:\"\"}.Bosch-IC-assembly-line:before{content:\"\"}.Bosch-IC-atom:before{content:\"\"}.Bosch-IC-augmented-reality:before{content:\"\"}.Bosch-Ic-autobod:before{content:\"\"}.Bosch-Ic-arrow-expand-left:before{content:\"\"}.Bosch-Ic-arrow-expand-double-left:before{content:\"\"}.Bosch-IC-bar-chart:before{content:\"\"}.Bosch-IC-bar-chart-double:before{content:\"\"}.Bosch-Ic-battery-empty:before{content:\"\"}.Bosch-Ic-battery-25:before{content:\"\"}.Bosch-Ic-battery-50:before{content:\"\"}.Bosch-Ic-battery-75:before{content:\"\"}.Bosch-Ic-battery-100:before{content:\"\"}.Bosch-Ic-battery-error:before{content:\"\"}.Bosch-IC-battery_Li-Ion:before{content:\"\"}.Bosch-Ic-battery-charging:before{content:\"\"}.Bosch-Ic-help:before{content:\"\"}.Bosch-IC-bed:before{content:\"\"}.Bosch-IC-bicycle:before{content:\"\"}.Bosch-IC-bicycle-e:before{content:\"\"}.Bosch-IC-blog:before{content:\"\"}.Bosch-IC-bluetooth:before{content:\"\"}.Bosch-IC-bluetooth-LE:before{content:\"\"}.Bosch-IC-board-speaker:before{content:\"\"}.Bosch-IC-boiler-connected:before{content:\"\"}.Bosch-IC-book:before{content:\"\"}.Bosch-Ic-bookmark:before{content:\"\"}.Bosch-Ic-bookmark-add:before{content:\"\"}.Bosch-Ic-bookmark-check:before{content:\"\"}.Bosch-Ic-bookmark-delete:before{content:\"\"}.Bosch-IC-books:before{content:\"\"}.Bosch-IC-bookshelf:before{content:\"\"}.Bosch-Ic-box:before{content:\"\"}.Bosch-IC-box-closed:before{content:\"\"}.Bosch-IC-box-delivery:before{content:\"\"}.Bosch-IC-box-delivery-connected:before{content:\"\"}.Bosch-IC-brake-disk:before{content:\"\"}.Bosch-IC-briefcase:before{content:\"\"}.Bosch-IC-broom:before{content:\"\"}.Bosch-IC-broom-cloud-dirt:before{content:\"\"}.Bosch-Ic-brush:before{content:\"\"}.Bosch-Ic-bug:before{content:\"\"}.Bosch-IC-building:before{content:\"\"}.Bosch-IC-cactus:before{content:\"\"}.Bosch-IC-calculate:before{content:\"\"}.Bosch-Ic-calendar:before{content:\"\"}.Bosch-Ic-calendar-add:before{content:\"\"}.Bosch-IC-calendar-settings:before{content:\"\"}.Bosch-Ic-call:before{content:\"\"}.Bosch-IC-call-add:before{content:\"\"}.Bosch-IC-call-remove:before{content:\"\"}.Bosch-IC-call-sos:before{content:\"\"}.Bosch-IC-call-team:before{content:\"\"}.Bosch-Ic-call-wifi:before{content:\"\"}.Bosch-Ic-camera:before{content:\"\"}.Bosch-Ic-camera-switch:before{content:\"\"}.Bosch-IC-car:before{content:\"\"}.Bosch-IC-car-clock:before{content:\"\"}.Bosch-IC-car-connected:before{content:\"\"}.Bosch-IC-car-locator:before{content:\"\"}.Bosch-IC-car-mechanic:before{content:\"\"}.Bosch-IC-car-rental:before{content:\"\"}.Bosch-IC-car-seat-connected:before{content:\"\"}.Bosch-IC-car-side:before{content:\"\"}.Bosch-IC-car-side-user:before{content:\"\"}.Bosch-Ic-milkrun-cart:before{content:\"\"}.Bosch-Ic-certificate:before{content:\"\"}.Bosch-IC-certificate-pki:before{content:\"\"}.Bosch-IC-change:before{content:\"\"}.Bosch-Ic-chart:before{content:\"\"}.Bosch-IC-chart-check:before{content:\"\"}.Bosch-IC-chart-dummy:before{content:\"\"}.Bosch-Ic-diagram:before{content:\"\"}.Bosch-Ic-chat:before{content:\"\"}.Bosch-IC-chat-add:before{content:\"\"}.Bosch-IC-chat-question-answer:before{content:\"\"}.Bosch-IC-chat-remove:before{content:\"\"}.Bosch-Ic-checklist:before{content:\"\"}.Bosch-Ic-checkmark:before{content:\"\"}.Bosch-Ic-chip:before{content:\"\"}.Bosch-IC-circle-segment:before{content:\"\"}.Bosch-IC-clear-all:before{content:\"\"}.Bosch-Ic-clipboard:before{content:\"\"}.Bosch-Ic-clipboard-list:before{content:\"\"}.Bosch-Ic-clock:before{content:\"\"}.Bosch-Ic-abort:before,.bosch-ic-abort:before{content:\"\"}.Bosch-IC-close-all:before{content:\"\"}.Bosch-Ic-cloud:before{content:\"\"}.Bosch-IC-cloud-co2:before{content:\"\"}.Bosch-Ic-cloud-download:before{content:\"\"}.Bosch-IC-cloud-nox:before{content:\"\"}.Bosch-Ic-cloud-upload:before{content:\"\"}.Bosch-IC-club-arm-chair:before{content:\"\"}.Bosch-IC-coffee-break:before{content:\"\"}.Bosch-IC-coin-currency:before{content:\"\"}.Bosch-Ic-currency:before{content:\"\"}.Bosch-Ic-color-picker:before{content:\"\"}.Bosch-IC-colors:before{content:\"\"}.Bosch-Ic-command:before{content:\"\"}.Bosch-IC-communicator:before{content:\"\"}.Bosch-Ic-compare:before{content:\"\"}.Bosch-Ic-components:before{content:\"\"}.Bosch-Ic-components-available:before{content:\"\"}.Bosch-Ic-components-reservation:before{content:\"\"}.Bosch-IC-concierge-bell:before{content:\"\"}.Bosch-IC-configuration:before{content:\"\"}.Bosch-Ic-confirmation:before{content:\"\"}.Bosch-Ic-unconnected:before{content:\"\"}.Bosch-Ic-connected:before{content:\"\"}.Bosch-IC-connectivity:before{content:\"\"}.Bosch-Ic-builder:before{content:\"\"}.Bosch-IC-consumer-goods:before{content:\"\"}.Bosch-IC-contract:before{content:\"\"}.Bosch-Ic-copy:before{content:\"\"}.Bosch-IC-cube:before{content:\"\"}.Bosch-IC-cube-arrows:before{content:\"\"}.Bosch-Ic-StarterKit:before{content:\"\"}.Bosch-IC-cube-shock:before{content:\"\"}.Bosch-IC-cube-stacked:before{content:\"\"}.Bosch-Ic-customerservice:before{content:\"\"}.Bosch-IC-cutlery:before{content:\"\"}.Bosch-IC-damper:before{content:\"\"}.Bosch-IC-danger-flash:before{content:\"\"}.Bosch-IC-data-loss:before{content:\"\"}.Bosch-Ic-dealer:before{content:\"\"}.Bosch-Ic-delete:before{content:\"\"}.Bosch-Ic-delivery:before{content:\"\"}.Bosch-IC-denied:before{content:\"\"}.Bosch-Ic-desktop:before{content:\"\"}.Bosch-IC-desktop-application-2d:before{content:\"\"}.Bosch-IC-desktop-application-3d:before{content:\"\"}.Bosch-IC-development:before{content:\"\"}.Bosch-Ic-devices:before{content:\"\"}.Bosch-IC-devices-mobile:before{content:\"\"}.Bosch-Ic-directory:before{content:\"\"}.Bosch-Ic-dna:before{content:\"\"}.Bosch-Ic-do-not-disturb:before{content:\"\"}.Bosch-Ic-document:before{content:\"\"}.Bosch-Ic-document-add:before{content:\"\"}.Bosch-IC-document-arrow-down:before{content:\"\"}.Bosch-IC-document-arrow-up:before{content:\"\"}.Bosch-Ic-document-audio:before{content:\"\"}.Bosch-IC-document-check:before{content:\"\"}.Bosch-Ic-document-to-cloud:before{content:\"\"}.Bosch-Ic-document-copy:before{content:\"\"}.Bosch-Ic-document-delete:before{content:\"\"}.Bosch-Ic-document-to-doc:before{content:\"\"}.Bosch-Ic-document-edit:before{content:\"\"}.Bosch-Ic-document-error:before{content:\"\"}.Bosch-Ic-document-locked:before{content:\"\"}.Bosch-Ic-log-file:before{content:\"\"}.Bosch-Ic-document-to-one:before{content:\"\"}.Bosch-Ic-document-to-pdf:before{content:\"\"}.Bosch-Ic-document-plain:before{content:\"\"}.Bosch-Ic-document-plain-add:before{content:\"\"}.Bosch-Ic-document-plain-delete:before{content:\"\"}.Bosch-Ic-document-to-ppt:before{content:\"\"}.Bosch-Ic-document-to-pub:before{content:\"\"}.Bosch-Ic-document-to-rtf:before{content:\"\"}.Bosch-Ic-document-save-to:before{content:\"\"}.Bosch-Ic-search-document:before{content:\"\"}.Bosch-Ic-document-settings:before{content:\"\"}.Bosch-Ic-document-test:before{content:\"\"}.Bosch-Ic-document-text:before{content:\"\"}.Bosch-Ic-document-to-txt:before{content:\"\"}.Bosch-Ic-document-to-vsd:before{content:\"\"}.Bosch-Ic-document-to-xls:before{content:\"\"}.Bosch-Ic-document-to-xml:before{content:\"\"}.Bosch-Ic-document-to-zip:before{content:\"\"}.Bosch-IC-dome:before{content:\"\"}.Bosch-IC-door:before{content:\"\"}.Bosch-IC-door-sensor:before{content:\"\"}.Bosch-Ic-arrow-expand-down:before{content:\"\"}.Bosch-Ic-arrow-expand-double-down:before{content:\"\"}.Bosch-Ic-arrow-left-circle:before{content:\"\"}.Bosch-Ic-arrow-right-circle:before{content:\"\"}.Bosch-Ic-arrow-right-down-circle:before{content:\"\"}.Bosch-Ic-arrow-right-up-circle:before{content:\"\"}.Bosch-Ic-arrow-left-down-circle:before{content:\"\"}.Bosch-Ic-arrow-left-up-circle:before{content:\"\"}.Bosch-Ic-arrow-up-circle:before{content:\"\"}.Bosch-Ic-download:before{content:\"\"}.Bosch-IC-drag-handle:before{content:\"\"}.Bosch-IC-dragdrop:before{content:\"\"}.Bosch-IC-drop:before{content:\"\"}.Bosch-IC-e-Charging:before{content:\"\"}.Bosch-IC-e-mobility:before{content:\"\"}.Bosch-IC-ear-off:before{content:\"\"}.Bosch-IC-ear-on:before{content:\"\"}.Bosch-IC-eco-system:before{content:\"\"}.Bosch-Ic-edit:before{content:\"\"}.Bosch-IC-education:before{content:\"\"}.Bosch-IC-efficiency:before{content:\"\"}.Bosch-IC-elevator:before{content:\"\"}.Bosch-IC-elevator-alarm:before{content:\"\"}.Bosch-IC-elevator-cloud:before{content:\"\"}.Bosch-IC-elevator-headset:before{content:\"\"}.Bosch-IC-elevator-service:before{content:\"\"}.Bosch-IC-emergency-exit:before{content:\"\"}.Bosch-IC-emoji-happy:before{content:\"\"}.Bosch-IC-emoji-neutral:before{content:\"\"}.Bosch-IC-emoji-sad:before{content:\"\"}.Bosch-IC-emoji-super-happy:before{content:\"\"}.Bosch-IC-emoji-very-sad:before{content:\"\"}.Bosch-IC-EU-energy-label:before{content:\"\"}.Bosch-IC-excavator:before{content:\"\"}.Bosch-Ic-exit:before{content:\"\"}.Bosch-IC-expansion-arrows:before{content:\"\"}.Bosch-IC-explosion:before{content:\"\"}.Bosch-Ic-export:before{content:\"\"}.Bosch-IC-externallink:before{content:\"\"}.Bosch-IC-fast-forward:before{content:\"\"}.Bosch-IC-faucet:before{content:\"\"}.Bosch-IC-favorites:before{content:\"\"}.Bosch-IC-fax:before{content:\"\"}.Bosch-IC-female:before{content:\"\"}.Bosch-IC-film:before{content:\"\"}.Bosch-Ic-filter:before{content:\"\"}.Bosch-IC-filter-success:before{content:\"\"}.Bosch-IC-fingerprint:before{content:\"\"}.Bosch-IC-fire:before{content:\"\"}.Bosch-IC-fire-emergency:before{content:\"\"}.Bosch-IC-fireworks:before{content:\"\"}.Bosch-Ic-first-aid:before{content:\"\"}.Bosch-IC-first-aid-cross:before{content:\"\"}.Bosch-IC-fit-to-sceen:before{content:\"\"}.Bosch-Ic-flag:before{content:\"\"}.Bosch-Ic-danger-flash-outline:before{content:\"\"}.Bosch-IC-flask:before{content:\"\"}.Bosch-Ic-flexpress:before{content:\"\"}.Bosch-Ic-twitter:before{content:\"\"}.Bosch-Ic-folder:before{content:\"\"}.Bosch-Ic-download-from-folder:before{content:\"\"}.Bosch-Ic-download-frame:before{content:\"\"}.Bosch-IC-folder-open:before{content:\"\"}.Bosch-Ic-upload-to-folder:before{content:\"\"}.Bosch-Ic-fork-lift:before{content:\"\"}.Bosch-IC-fork-lift-locator:before{content:\"\"}.Bosch-Ic-arrow-expand-right:before{content:\"\"}.Bosch-Ic-arrow-expand-double-right:before{content:\"\"}.Bosch-IC-full-empty:before{content:\"\"}.Bosch-Ic-fullscreen:before{content:\"\"}.Bosch-IC-fullscreen-arrows:before{content:\"\"}.Bosch-Ic-fullscreen-exit:before{content:\"\"}.Bosch-IC-g-arrow-down:before{content:\"\"}.Bosch-IC-g-arrow-up:before{content:\"\"}.Bosch-IC-generator:before{content:\"\"}.Bosch-IC-gift:before{content:\"\"}.Bosch-IC-glance:before{content:\"\"}.Bosch-IC-glas-plate:before{content:\"\"}.Bosch-IC-globe:before{content:\"\"}.Bosch-IC-globe-arrow:before{content:\"\"}.Bosch-IC-glossary:before{content:\"\"}.Bosch-Ic-grid:before{content:\"\"}.Bosch-IC-hammer:before{content:\"\"}.Bosch-Ic-hand:before{content:\"\"}.Bosch-IC-hand-motion:before{content:\"\"}.Bosch-IC-hand-motion-off:before{content:\"\"}.Bosch-IC-handlewithcare:before{content:\"\"}.Bosch-Ic-add-material-manually:before{content:\"\"}.Bosch-Ic-handover-check:before{content:\"\"}.Bosch-Ic-remove-from-handover:before{content:\"\"}.Bosch-IC-hanger:before{content:\"\"}.Bosch-Ic-health:before{content:\"\"}.Bosch-IC-heart:before{content:\"\"}.Bosch-Ic-history:before{content:\"\"}.Bosch-Ic-home-outline:before{content:\"\"}.Bosch-IC-home-locator:before{content:\"\"}.Bosch-Ic-sandclock:before{content:\"\"}.Bosch-IC-hydrant:before{content:\"\"}.Bosch-IC-ice:before{content:\"\"}.Bosch-Ic-image:before{content:\"\"}.Bosch-IC-imagery-add:before{content:\"\"}.Bosch-IC-imagery-remove:before{content:\"\"}.Bosch-Ic-import:before{content:\"\"}.Bosch-Ic-imprint:before{content:\"\"}.Bosch-IC-impulse:before{content:\"\"}.Bosch-Ic-fabric:before{content:\"\"}.Bosch-IC-industry-clock:before{content:\"\"}.Bosch-IC-industry-connected:before{content:\"\"}.Bosch-Ic-information:before{content:\"\"}.Bosch-Ic-information-tooltip:before{content:\"\"}.Bosch-IC-interval:before{content:\"\"}.Bosch-IC-it-device:before{content:\"\"}.Bosch-IC-jewel:before{content:\"\"}.Bosch-IC-keyboard:before{content:\"\"}.Bosch-IC-label:before{content:\"\"}.Bosch-Ic-laptop-01:before{content:\"\"}.Bosch-IC-laser:before{content:\"\"}.Bosch-IC-layout:before{content:\"\"}.Bosch-IC-leaf:before{content:\"\"}.Bosch-IC-led:before{content:\"\"}.Bosch-Ic-world:before{content:\"\"}.Bosch-Ic-facebook:before{content:\"\"}.Bosch-Ic-checkmark-outline:before{content:\"\"}.Bosch-Ic-youtube:before{content:\"\"}.Bosch-Ic-share:before{content:\"\"}.Bosch-Ic-user:before{content:\"\"}.Bosch-Ic-upload_outline:before{content:\"\"}.Bosch-Ic-download_outline:before{content:\"\"}.Bosch-Ic-wishlist-add:before{content:\"\"}.Bosch-Ic-youtube-frame:before{content:\"\"}.Bosch-Ic-less-minimize:before{content:\"\"}.Bosch-IC-lightbulb:before{content:\"\"}.bosch-Ic-innovation:before{content:\"\"}.Bosch-IC-line-chart:before{content:\"\"}.Bosch-Ic-link:before{content:\"\"}.Bosch-IC-link-broken:before{content:\"\"}.Bosch-Ic-list-view:before{content:\"\"}.Bosch-Ic-menu:before{content:\"\"}.Bosch-IC-livechat:before{content:\"\"}.Bosch-Ic-location-pin:before{content:\"\"}.Bosch-IC-locator-ip-connected:before{content:\"\"}.Bosch-IC-locator-ip-disconnected:before{content:\"\"}.Bosch-IC-locator-spot:before{content:\"\"}.Bosch-IC-locator-spot-check:before{content:\"\"}.Bosch-Ic-lock-closed:before{content:\"\"}.Bosch-Ic-lock-open:before{content:\"\"}.Bosch-Ic-log-in:before{content:\"\"}.Bosch-Ic-logistics:before{content:\"\"}.Bosch-Ic-log-out:before{content:\"\"}.Bosch-IC-machine:before{content:\"\"}.Bosch-Ic-magnet:before{content:\"\"}.Bosch-Ic-mail:before{content:\"\"}.Bosch-Ic-mail-forward:before{content:\"\"}.Bosch-Ic-mail-open:before{content:\"\"}.Bosch-Ic-mail-out:before{content:\"\"}.Bosch-Ic-mail-answer:before{content:\"\"}.Bosch-IC-male:before{content:\"\"}.Bosch-Ic-map:before{content:\"\"}.Bosch-Ic-add-material:before{content:\"\"}.Bosch-IC-material-check:before{content:\"\"}.Bosch-Ic-remove-material:before{content:\"\"}.Bosch-IC-maximize:before{content:\"\"}.Bosch-IC-mechanic:before{content:\"\"}.Bosch-IC-megaphone:before{content:\"\"}.Bosch-Ic-message:before{content:\"\"}.Bosch-IC-mic:before{content:\"\"}.Bosch-Ic-microphone:before{content:\"\"}.Bosch-IC-microphone-classic:before{content:\"\"}.Bosch-IC-minimize:before{content:\"\"}.Bosch-IC-money-currency:before{content:\"\"}.Bosch-IC-money-dollar:before{content:\"\"}.Bosch-IC-moneybag-currency:before{content:\"\"}.Bosch-IC-moneybag-dollar:before{content:\"\"}.Bosch-IC-monument:before{content:\"\"}.Bosch-IC-moon:before{content:\"\"}.Bosch-IC-mouse:before{content:\"\"}.Bosch-IC-mouse-left:before{content:\"\"}.Bosch-IC-mouse-right:before{content:\"\"}.Bosch-IC-mouth:before{content:\"\"}.Bosch-Ic-my-product:before{content:\"\"}.Bosch-IC-new-way-work:before{content:\"\"}.Bosch-Ic-mail-sent:before{content:\"\"}.Bosch-Ic-news:before{content:\"\"}.Bosch-IC-nose:before{content:\"\"}.Bosch-Ic-notes:before{content:\"\"}.Bosch-Ic-notes-edit:before{content:\"\"}.Bosch-Ic-alarm:before{content:\"\"}.Bosch-IC-notification-active:before{content:\"\"}.Bosch-IC-notification-add:before{content:\"\"}.Bosch-IC-notification-remove:before{content:\"\"}.Bosch-Ic-oil-trailer:before{content:\"\"}.Bosch-IC-omnichannel:before{content:\"\"}.Bosch-Ic-show-more-horizontal:before{content:\"\"}.Bosch-IC-origami-boat:before{content:\"\"}.Bosch-Ic-palette-trailer:before{content:\"\"}.Bosch-IC-pallete-car-connected:before{content:\"\"}.Bosch-IC-panel:before{content:\"\"}.Bosch-Ic-paperclip:before{content:\"\"}.Bosch-IC-paperplane:before{content:\"\"}.Bosch-IC-parking:before{content:\"\"}.Bosch-Ic-pause:before{content:\"\"}.Bosch-Ic-creditcard:before{content:\"\"}.Bosch-IC-people:before{content:\"\"}.Bosch-IC-petrol-station:before{content:\"\"}.Bosch-IC-piggybank:before{content:\"\"}.Bosch-Ic-pin:before{content:\"\"}.Bosch-IC-pin-modern:before{content:\"\"}.Bosch-IC-plane-side:before{content:\"\"}.Bosch-Ic-play:before{content:\"\"}.Bosch-IC-plug-12V:before{content:\"\"}.Bosch-IC-podium-speaker:before{content:\"\"}.Bosch-IC-police:before{content:\"\"}.Bosch-IC-poop:before{content:\"\"}.Bosch-IC-post-it:before{content:\"\"}.Bosch-IC-postal-code:before{content:\"\"}.Bosch-IC-power:before{content:\"\"}.Bosch-Ic-print:before{content:\"\"}.Bosch-IC-prototyping:before{content:\"\"}.Bosch-IC-puzzle:before{content:\"\"}.Bosch-IC-quad:before{content:\"\"}.Bosch-IC-question:before{content:\"\"}.Bosch-IC-radar:before{content:\"\"}.Bosch-IC-radio:before{content:\"\"}.Bosch-Ic-radio:before{content:\"\"}.Bosch-IC-redirect:before{content:\"\"}.Bosch-Ic-redo:before{content:\"\"}.Bosch-IC-reference:before{content:\"\"}.Bosch-Ic-refresh:before{content:\"\"}.Bosch-IC-refresh-cloud:before{content:\"\"}.Bosch-Ic-registration:before{content:\"\"}.Bosch-IC-remote:before{content:\"\"}.Bosch-Ic-reset:before{content:\"\"}.Bosch-IC-resolution:before{content:\"\"}.Bosch-Ic-robot-automation:before{content:\"\"}.Bosch-IC-robot-connected:before{content:\"\"}.Bosch-IC-robothead:before{content:\"\"}.Bosch-IC-rocket:before{content:\"\"}.Bosch-Ic-rotation:before{content:\"\"}.Bosch-Ic-rotate-360-degrees:before{content:\"\"}.Bosch-Ic-rotate-clockwise:before{content:\"\"}.Bosch-Ic-rotate-counterclockwise:before{content:\"\"}.Bosch-IC-rotation-y-down:before{content:\"\"}.Bosch-IC-rotation-y-up:before{content:\"\"}.Bosch-Ic-navigation:before{content:\"\"}.Bosch-Ic-measure:before{content:\"\"}.Bosch-IC-ruler-pen:before{content:\"\"}.Bosch-Ic-satelite:before{content:\"\"}.Bosch-Ic-save:before{content:\"\"}.Bosch-IC-scale:before{content:\"\"}.Bosch-Ic-cut:before{content:\"\"}.Bosch-Ic-search:before{content:\"\"}.Bosch-IC-security:before{content:\"\"}.Bosch-IC-security-check:before{content:\"\"}.Bosch-IC-security-user:before{content:\"\"}.Bosch-Ic-sensor:before{content:\"\"}.Bosch-Ic-server:before{content:\"\"}.Bosch-IC-server-expansion:before{content:\"\"}.Bosch-IC-server-rate:before{content:\"\"}.Bosch-IC-service-agent:before{content:\"\"}.Bosch-IC-service-time:before{content:\"\"}.Bosch-Ic-settings:before{content:\"\"}.Bosch-IC-settings-arrows:before{content:\"\"}.Bosch-IC-settings-connected:before{content:\"\"}.Bosch-Ic-share-outline:before{content:\"\"}.Bosch-IC-shield-stop:before{content:\"\"}.Bosch-IC-ship:before{content:\"\"}.Bosch-IC-ship-side:before{content:\"\"}.Bosch-Ic-shoppingcart:before{content:\"\"}.Bosch-IC-shoppingcart-add:before{content:\"\"}.Bosch-IC-shoppingcart-switch:before{content:\"\"}.Bosch-IC-signal-full:before{content:\"\"}.Bosch-IC-signal-half:before{content:\"\"}.Bosch-IC-signal-lost:before{content:\"\"}.Bosch-IC-signpost:before{content:\"\"}.Bosch-IC-simcard:before{content:\"\"}.Bosch-IC-skyscraper:before{content:\"\"}.Bosch-IC-smartcity:before{content:\"\"}.Bosch-IC-smarthome:before{content:\"\"}.Bosch-Ic-phone:before{content:\"\"}.Bosch-IC-smartphone-acoustic:before{content:\"\"}.Bosch-IC-smartphone-arrow-right:before{content:\"\"}.Bosch-IC-smartphone-arrows-x-y-z:before{content:\"\"}.Bosch-IC-smartphone-clock:before{content:\"\"}.Bosch-IC-smartphone-cloud:before{content:\"\"}.Bosch-IC-smartphone-loading-wheel:before{content:\"\"}.Bosch-IC-smartphone-smashed:before{content:\"\"}.Bosch-IC-smartphone-vibration:before{content:\"\"}.Bosch-IC-smartphone-z:before{content:\"\"}.Bosch-Ic-spareparts:before{content:\"\"}.Bosch-IC-spark:before{content:\"\"}.Bosch-IC-speaker-acoustic:before{content:\"\"}.Bosch-IC-speedometer:before{content:\"\"}.Bosch-IC-stadium:before{content:\"\"}.Bosch-IC-stairs:before{content:\"\"}.Bosch-IC-stamp:before{content:\"\"}.Bosch-IC-standby:before{content:\"\"}.Bosch-IC-steering-wheel:before{content:\"\"}.Bosch-IC-steering-wheel-connected:before{content:\"\"}.Bosch-IC-steering-wheel-hands:before{content:\"\"}.Bosch-IC-steps:before{content:\"\"}.Bosch-IC-stethoscope:before{content:\"\"}.Bosch-Ic-stop:before{content:\"\"}.Bosch-IC-stopwatch:before{content:\"\"}.Bosch-IC-storage-local:before{content:\"\"}.Bosch-IC-structure:before{content:\"\"}.Bosch-IC-subtitles:before{content:\"\"}.Bosch-Ic-summary:before{content:\"\"}.Bosch-IC-sun:before{content:\"\"}.Bosch-IC-sun-half-filled:before{content:\"\"}.Bosch-IC-sunshade-table:before{content:\"\"}.Bosch-IC-surveillance:before{content:\"\"}.Bosch-IC-table-chairs:before{content:\"\"}.Bosch-Ic-tablet:before{content:\"\"}.Bosch-IC-team:before{content:\"\"}.Bosch-IC-team-lightbulb:before{content:\"\"}.Bosch-IC-technical-service:before{content:\"\"}.Bosch-Ic-temperature:before{content:\"\"}.Bosch-IC-temperature-high:before{content:\"\"}.Bosch-IC-temperature-low:before{content:\"\"}.Bosch-IC-theater:before{content:\"\"}.Bosch-Ic-dislike:before{content:\"\"}.Bosch-Ic-like:before{content:\"\"}.Bosch-Ic-ticket:before{content:\"\"}.Bosch-IC-touch:before{content:\"\"}.Bosch-IC-touch-sos:before{content:\"\"}.Bosch-IC-towing-truck:before{content:\"\"}.Bosch-IC-train:before{content:\"\"}.Bosch-IC-train-side:before{content:\"\"}.Bosch-Ic-transport-movements:before{content:\"\"}.Bosch-IC-transscript:before{content:\"\"}.Bosch-IC-transscript-off:before{content:\"\"}.Bosch-IC-transscript-on:before{content:\"\"}.Bosch-IC-tree:before{content:\"\"}.Bosch-IC-tricycle:before{content:\"\"}.Bosch-Ic-default-trailer:before{content:\"\"}.Bosch-Ic-taxi-trailer:before{content:\"\"}.Bosch-Ic-shelve-trailer:before{content:\"\"}.Bosch-IC-trophy:before{content:\"\"}.Bosch-IC-truck:before{content:\"\"}.Bosch-IC-tuktuk:before{content:\"\"}.Bosch-Ic-tune:before{content:\"\"}.Bosch-IC-typography:before{content:\"\"}.Bosch-IC-ui:before{content:\"\"}.Bosch-IC-umbrella:before{content:\"\"}.Bosch-Ic-undo:before{content:\"\"}.Bosch-Ic-arrow-expand-up:before{content:\"\"}.Bosch-Ic-arrow-expand-double-up:before{content:\"\"}.Bosch-Ic-sort:before{content:\"\"}.Bosch-Ic-upload:before{content:\"\"}.Bosch-IC-usb:before{content:\"\"}.Bosch-Ic-user-outline:before{content:\"\"}.Bosch-IC-user-advanced:before{content:\"\"}.Bosch-IC-user-beginner:before{content:\"\"}.Bosch-IC-user-desktop:before{content:\"\"}.Bosch-IC-user-down:before{content:\"\"}.Bosch-IC-user-falling:before{content:\"\"}.Bosch-IC-user-hand:before{content:\"\"}.Bosch-IC-user-hand-stop:before{content:\"\"}.Bosch-IC-user-professional:before{content:\"\"}.Bosch-IC-user-run:before{content:\"\"}.Bosch-IC-user-share:before{content:\"\"}.Bosch-IC-user-voice:before{content:\"\"}.Bosch-IC-user-walk:before{content:\"\"}.Bosch-Ic-videocam:before{content:\"\"}.Bosch-Ic-videocam-disabled:before{content:\"\"}.Bosch-IC-video-record:before{content:\"\"}.Bosch-IC-virtual-reality:before{content:\"\"}.Bosch-Ic-volume-disabled:before{content:\"\"}.Bosch-Ic-volume-high:before{content:\"\"}.Bosch-Ic-volume-low:before{content:\"\"}.Bosch-Ic-volume-off:before{content:\"\"}.Bosch-Ic-magic-wand:before{content:\"\"}.Bosch-Ic-hidden-project:before{content:\"\"}.Bosch-Ic-show:before{content:\"\"}.Bosch-IC-water-shower:before{content:\"\"}.Bosch-IC-welcome:before{content:\"\"}.Bosch-IC-wellness:before{content:\"\"}.Bosch-IC-wheelchair:before{content:\"\"}.Bosch-Ic-alert:before{content:\"\"}.Bosch-IC-wide-angled-arrow:before{content:\"\"}.Bosch-Ic-wifi:before{content:\"\"}.Bosch-Ic-window-analysis:before{content:\"\"}.Bosch-Ic-window-browser:before{content:\"\"}.Bosch-Ic-window-console:before{content:\"\"}.Bosch-Ic-gaussian-view:before{content:\"\"}.Bosch-Ic-window-info:before{content:\"\"}.Bosch-IC-window-new:before{content:\"\"}.Bosch-IC-window-resize:before{content:\"\"}.Bosch-Ic-general-scaling-view:before{content:\"\"}.Bosch-Ic-restore-window:before{content:\"\"}.Bosch-Ic-window-statistic:before{content:\"\"}.Bosch-Ic-wishlist:before{content:\"\"}.Bosch-Ic-work-orders:before{content:\"\"}.Bosch-IC-worldwideweb:before{content:\"\"}.Bosch-Ic-wrench:before{content:\"\"}.Bosch-Ic-zoom-in:before{content:\"\"}.Bosch-Ic-zoom-out:before{content:\"\"}/*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */body{margin:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}main,*{font-family:\"Bosch-Sans\"}::-moz-selection{background-color:#008ECF}::selection,::-moz-selection{background-color:#008ECF}a::-moz-selection{color:#FFFFFF}.lead{margin-bottom:22px;font-size:18px;font-weight:300;line-height:1.4}@media (min-width: 768px){.lead{font-size:24px}}.bci-core-datepicker{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;font-size:14px;width:292px}.bci-core-datepicker .bci-core-hide{display:none}.bci-core-datepicker .bci-core-datepicker-container{background:#FFFFFF;overflow-y:auto;overflow-x:hidden;white-space:normal;text-align:center;visibility:visible}.bci-core-datepicker .bci-core-datepicker-container .bci-core-month-container{display:inline-block;width:100%}";

const Datepicker = class {
    constructor(hostRef) {
        Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.dateSelected = Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "dateSelected", 7);
        this.datesObj = {
            startDate: null,
            endDate: null,
        };
        this.dateObj = {
            todaysDate: Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(new Date(), this.formatDate),
            calendarDate: Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(new Date(), this.formatDate),
            calendarDateYear: getYear(new Date()),
            calendarDateMonth: getMonth(new Date()),
            selectedDate: null
        };
    }
    monthChangedHandler(event) {
        let newYear = this.dateObj.calendarDateYear;
        let newMonth;
        switch (event.detail.direction) {
            case 'next':
                newMonth = (this.dateObj.calendarDateMonth + 1) % 12;
                if (newMonth === 0) {
                    newYear = this.dateObj.calendarDateYear + 1;
                }
                this.dateObj = Object.assign(Object.assign({}, this.dateObj), { calendarDateMonth: newMonth, calendarDateYear: newYear });
                break;
            case 'prev':
                newMonth = this.dateObj.calendarDateMonth - 1;
                if (newMonth === -1) {
                    newMonth = 11;
                    newYear = this.dateObj.calendarDateYear - 1;
                }
                this.dateObj = Object.assign(Object.assign({}, this.dateObj), { calendarDateMonth: newMonth, calendarDateYear: newYear });
                break;
        }
    }
    singleDateSelectedHandler(event) {
        const selectedDay = event.detail.selectedDay;
        const newDate = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["u"])(new Date(), this.dateObj.calendarDateYear, this.dateObj.calendarDateMonth, selectedDay);
        this.dateObj = Object.assign(Object.assign({}, this.dateObj), { calendarDate: Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(newDate, this.formatDate), selectedDate: Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(newDate, this.formatDate) });
        const dateSelectedEvent = {
            startDate: this.dateObj.selectedDate,
            datepickerId: this.bciDatepickerId
        };
        this.dateSelected.emit(dateSelectedEvent);
    }
    rangeDateSelectedHandler(event) {
        const selectedDay = event.detail.selectedDay;
        const newDate = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["u"])(new Date(), this.dateObj.calendarDateYear, this.dateObj.calendarDateMonth, selectedDay);
        // reset on subsequent clicks after first and second dates have been set
        if (this.datesObj.startDate && this.datesObj.endDate && this.datesObj.startDate !== this.datesObj.endDate || isBefore(newDate, parse(this.datesObj.startDate, this.formatDate, new Date()))) {
            this.datesObj = Object.assign(Object.assign({}, this.datesObj), { startDate: Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(newDate, this.formatDate), endDate: Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(newDate, this.formatDate) });
        }
        else if (!this.datesObj.startDate) {
            this.datesObj = Object.assign(Object.assign({}, this.datesObj), { startDate: Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(newDate, this.formatDate) });
        }
        else {
            this.datesObj = Object.assign(Object.assign({}, this.datesObj), { endDate: Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(newDate, this.formatDate) });
        }
        const dateSelectedEvent = Object.assign(Object.assign({}, this.datesObj), { datepickerId: this.bciDatepickerId });
        this.dateSelected.emit(dateSelectedEvent);
    }
    userInputDate(newValue) {
        if (newValue && newValue.dateStart) {
            this.datesObj = Object.assign(Object.assign({}, this.datesObj), { startDate: newValue.dateStart, endDate: newValue.dateEnd });
            this.dateObj = Object.assign(Object.assign({}, this.dateObj), { calendarDateMonth: getMonth(parse(newValue.dateStart, this.formatDate, new Date())), calendarDateYear: getYear(parse(newValue.dateStart, this.formatDate, new Date())) });
        }
    }
    async componentWillLoad() {
        await Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["s"])();
        if (!this.formatDate) {
            this.formatDate = _utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["w"].dateFormat;
        }
    }
    render() {
        const currentMonth = this.dateObj.calendarDateMonth;
        const isoWeekday = getISODay(Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["u"])(new Date(), this.dateObj.calendarDateYear, currentMonth, 0));
        const offset = this.sundayFirst ? isoWeekday + 1 : isoWeekday;
        const minimumDate = new Date(this.minDate);
        const maximumDate = new Date(this.maxDate);
        const dateRestrictionObj = {
            minimumDate,
            maximumDate
        };
        return (Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bci-core-datepicker" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bci-core-datepicker-container" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bci-core-month-container" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("bci-month-header", { year: this.dateObj.calendarDateYear, month: this.dateObj.calendarDateMonth }), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("bci-week-header", { "sunday-first": this.sundayFirst }), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("bci-weekdays", { datesObj: this.datesObj, daysInMonth: Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["x"])(Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["u"])(new Date(), this.dateObj.calendarDateYear, currentMonth)), lastDayOfMonth: endOfMonth(Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["u"])(new Date(), this.dateObj.calendarDateYear, this.dateObj.calendarDateMonth, 0)), dateRestrictionObj: dateRestrictionObj, month: currentMonth, rangeDate: this.rangeDate, offset: offset, selectedDate: this.dateObj.selectedDate, todaysDate: this.dateObj.todaysDate, year: this.dateObj.calendarDateYear, formatDate: this.formatDate })))));
    }
    static get watchers() { return {
        "datePickerInputObj": ["userInputDate"]
    }; }
};
Datepicker.style = datepickerCss;

/**
 * Returns the [year, month, day, hour, minute, seconds] tokens of the provided
 * `date` as it will be rendered in the `timeZone`.
 */
function tzTokenizeDate(date, timeZone) {
  var dtf = getDateTimeFormat(timeZone);
  return dtf.formatToParts ? partsOffset(dtf, date) : hackyOffset(dtf, date)
}

var typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};

function partsOffset(dtf, date) {
  var formatted = dtf.formatToParts(date);
  var filled = [];
  for (var i = 0; i < formatted.length; i++) {
    var pos = typeToPos[formatted[i].type];

    if (pos >= 0) {
      filled[pos] = parseInt(formatted[i].value, 10);
    }
  }
  return filled
}

function hackyOffset(dtf, date) {
  var formatted = dtf.format(date).replace(/\u200E/g, '');
  var parsed = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted);
  // var [, fMonth, fDay, fYear, fHour, fMinute, fSecond] = parsed
  // return [fYear, fMonth, fDay, fHour, fMinute, fSecond]
  return [parsed[3], parsed[1], parsed[2], parsed[4], parsed[5], parsed[6]]
}

// Get a cached Intl.DateTimeFormat instance for the IANA `timeZone`. This can be used
// to get deterministic local date/time output according to the `en-US` locale which
// can be used to extract local time parts as necessary.
var dtfCache = {};
function getDateTimeFormat(timeZone) {
  if (!dtfCache[timeZone]) {
    // New browsers use `hourCycle`, IE and Chrome <73 does not support it and uses `hour12`
    var testDateFormatted = new Intl.DateTimeFormat('en-US', {
      hour12: false,
      timeZone: 'America/New_York',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }).format(new Date('2014-06-25T04:00:00.123Z'));
    var hourCycleSupported =
      testDateFormatted === '06/25/2014, 00:00:00' ||
      testDateFormatted === '‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00';

    dtfCache[timeZone] = hourCycleSupported
      ? new Intl.DateTimeFormat('en-US', {
          hour12: false,
          timeZone: timeZone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        })
      : new Intl.DateTimeFormat('en-US', {
          hourCycle: 'h23',
          timeZone: timeZone,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
  }
  return dtfCache[timeZone]
}

var MILLISECONDS_IN_HOUR$1 = 3600000;
var MILLISECONDS_IN_MINUTE$1 = 60000;

var patterns = {
  timezone: /([Z+-].*)$/,
  timezoneZ: /^(Z)$/,
  timezoneHH: /^([+-])(\d{2})$/,
  timezoneHHMM: /^([+-])(\d{2}):?(\d{2})$/,
  timezoneIANA: /(UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
};

// Parse various time zone offset formats to an offset in milliseconds
function tzParseTimezone(timezoneString, date) {
  var token;
  var absoluteOffset;

  // Z
  token = patterns.timezoneZ.exec(timezoneString);
  if (token) {
    return 0
  }

  var hours;

  // ±hh
  token = patterns.timezoneHH.exec(timezoneString);
  if (token) {
    hours = parseInt(token[2], 10);

    if (!validateTimezone()) {
      return NaN
    }

    absoluteOffset = hours * MILLISECONDS_IN_HOUR$1;
    return token[1] === '+' ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = patterns.timezoneHHMM.exec(timezoneString);
  if (token) {
    hours = parseInt(token[2], 10);
    var minutes = parseInt(token[3], 10);

    if (!validateTimezone(hours, minutes)) {
      return NaN
    }

    absoluteOffset =
      hours * MILLISECONDS_IN_HOUR$1 + minutes * MILLISECONDS_IN_MINUTE$1;
    return token[1] === '+' ? -absoluteOffset : absoluteOffset
  }

  // IANA time zone
  token = patterns.timezoneIANA.exec(timezoneString);
  if (token) {
    // var [fYear, fMonth, fDay, fHour, fMinute, fSecond] = tzTokenizeDate(date, timezoneString)
    var tokens = tzTokenizeDate(date, timezoneString);
    var asUTC = Date.UTC(
      tokens[0],
      tokens[1] - 1,
      tokens[2],
      tokens[3],
      tokens[4],
      tokens[5]
    );
    var timestampWithMsZeroed = date.getTime() - (date.getTime() % 1000);
    return -(asUTC - timestampWithMsZeroed)
  }

  return 0
}

function validateTimezone(hours, minutes) {
  if (minutes != null && (minutes < 0 || minutes > 59)) {
    return false
  }

  return true
}

var MILLISECONDS_IN_HOUR$2 = 3600000;
var MILLISECONDS_IN_MINUTE$2 = 60000;
var DEFAULT_ADDITIONAL_DIGITS = 2;

var patterns$1 = {
  dateTimeDelimeter: /[T ]/,
  plainTime: /:/,
  timeZoneDelimeter: /[Z ]/i,

  // year tokens
  YY: /^(\d{2})$/,
  YYY: [
    /^([+-]\d{2})$/, // 0 additional digits
    /^([+-]\d{3})$/, // 1 additional digit
    /^([+-]\d{4})$/ // 2 additional digits
  ],
  YYYY: /^(\d{4})/,
  YYYYY: [
    /^([+-]\d{4})/, // 0 additional digits
    /^([+-]\d{5})/, // 1 additional digit
    /^([+-]\d{6})/ // 2 additional digits
  ],

  // date tokens
  MM: /^-(\d{2})$/,
  DDD: /^-?(\d{3})$/,
  MMDD: /^-?(\d{2})-?(\d{2})$/,
  Www: /^-?W(\d{2})$/,
  WwwD: /^-?W(\d{2})-?(\d{1})$/,

  HH: /^(\d{2}([.,]\d*)?)$/,
  HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
  HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,

  // timezone tokens (to identify the presence of a tz)
  timezone: /([Z+-].*| UTC|(?:[a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?))$/
};

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 * If the function cannot parse the string or the values are invalid, it returns Invalid Date.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 * All *date-fns* functions will throw `RangeError` if `options.additionalDigits` is not 0, 1, 2 or undefined.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @param {String} [options.timeZone=''] - used to specify the IANA time zone offset of a date String.
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = toDate('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * var result = toDate('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function toDate(argument, dirtyOptions) {
  if (arguments.length < 1) {
    throw new TypeError(
      '1 argument required, but only ' + arguments.length + ' present'
    )
  }

  if (argument === null) {
    return new Date(NaN)
  }

  var options = dirtyOptions || {};

  var additionalDigits =
    options.additionalDigits == null
      ? DEFAULT_ADDITIONAL_DIGITS
      : Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["b"])(options.additionalDigits);
  if (
    additionalDigits !== 2 &&
    additionalDigits !== 1 &&
    additionalDigits !== 0
  ) {
    throw new RangeError('additionalDigits must be 0, 1 or 2')
  }

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === 'object' &&
      Object.prototype.toString.call(argument) === '[object Date]')
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (
    typeof argument === 'number' ||
    Object.prototype.toString.call(argument) === '[object Number]'
  ) {
    return new Date(argument)
  } else if (
    !(
      typeof argument === 'string' ||
      Object.prototype.toString.call(argument) === '[object String]'
    )
  ) {
    return new Date(NaN)
  }

  var dateStrings = splitDateString(argument);

  var parseYearResult = parseYear(dateStrings.date, additionalDigits);
  var year = parseYearResult.year;
  var restDateString = parseYearResult.restDateString;

  var date = parseDate(restDateString, year);

  if (isNaN(date)) {
    return new Date(NaN)
  }

  if (date) {
    var timestamp = date.getTime();
    var time = 0;
    var offset;

    if (dateStrings.time) {
      time = parseTime(dateStrings.time);

      if (isNaN(time)) {
        return new Date(NaN)
      }
    }

    if (dateStrings.timezone || options.timeZone) {
      offset = tzParseTimezone(
        dateStrings.timezone || options.timeZone,
        new Date(timestamp + time)
      );
      if (isNaN(offset)) {
        return new Date(NaN)
      }
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(new Date(timestamp + time));
      offset = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["l"])(
        new Date(timestamp + time + offset)
      );
    }

    return new Date(timestamp + time + offset)
  } else {
    return new Date(NaN)
  }
}

function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns$1.dateTimeDelimeter);
  var timeString;

  if (patterns$1.plainTime.test(array[0])) {
    dateStrings.date = null;
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    dateStrings.timezone = array[2];
    if (patterns$1.timeZoneDelimeter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns$1.timeZoneDelimeter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }

  if (timeString) {
    var token = patterns$1.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }

  return dateStrings
}

function parseYear(dateString, additionalDigits) {
  var patternYYY = patterns$1.YYY[additionalDigits];
  var patternYYYYY = patterns$1.YYYYY[additionalDigits];

  var token;

  // YYYY or ±YYYYY
  token = patterns$1.YYYY.exec(dateString) || patternYYYYY.exec(dateString);
  if (token) {
    var yearString = token[1];
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = patterns$1.YY.exec(dateString) || patternYYY.exec(dateString);
  if (token) {
    var centuryString = token[1];
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token;
  var date;
  var month;
  var week;

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0);
    date.setUTCFullYear(year);
    return date
  }

  // YYYY-MM
  token = patterns$1.MM.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;

    if (!validateDate(year, month)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, month);
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = patterns$1.DDD.exec(dateString);
  if (token) {
    date = new Date(0);
    var dayOfYear = parseInt(token[1], 10);

    if (!validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, 0, dayOfYear);
    return date
  }

  // yyyy-MM-dd or YYYYMMDD
  token = patterns$1.MMDD.exec(dateString);
  if (token) {
    date = new Date(0);
    month = parseInt(token[1], 10) - 1;
    var day = parseInt(token[2], 10);

    if (!validateDate(year, month, day)) {
      return new Date(NaN)
    }

    date.setUTCFullYear(year, month, day);
    return date
  }

  // YYYY-Www or YYYYWww
  token = patterns$1.Www.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;

    if (!validateWeekDate(year, week)) {
      return new Date(NaN)
    }

    return dayOfISOWeekYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = patterns$1.WwwD.exec(dateString);
  if (token) {
    week = parseInt(token[1], 10) - 1;
    var dayOfWeek = parseInt(token[2], 10) - 1;

    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN)
    }

    return dayOfISOWeekYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime(timeString) {
  var token;
  var hours;
  var minutes;

  // hh
  token = patterns$1.HH.exec(timeString);
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'));

    if (!validateTime(hours)) {
      return NaN
    }

    return (hours % 24) * MILLISECONDS_IN_HOUR$2
  }

  // hh:mm or hhmm
  token = patterns$1.HHMM.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseFloat(token[2].replace(',', '.'));

    if (!validateTime(hours, minutes)) {
      return NaN
    }

    return (
      (hours % 24) * MILLISECONDS_IN_HOUR$2 + minutes * MILLISECONDS_IN_MINUTE$2
    )
  }

  // hh:mm:ss or hhmmss
  token = patterns$1.HHMMSS.exec(timeString);
  if (token) {
    hours = parseInt(token[1], 10);
    minutes = parseInt(token[2], 10);
    var seconds = parseFloat(token[3].replace(',', '.'));

    if (!validateTime(hours, minutes, seconds)) {
      return NaN
    }

    return (
      (hours % 24) * MILLISECONDS_IN_HOUR$2 +
      minutes * MILLISECONDS_IN_MINUTE$2 +
      seconds * 1000
    )
  }

  // Invalid ISO-formatted time
  return null
}

function dayOfISOWeekYear(isoWeekYear, week, day) {
  week = week || 0;
  day = day || 0;
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date
}

// Validation functions

var DAYS_IN_MONTH$1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
var DAYS_IN_MONTH_LEAP_YEAR$1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function isLeapYearIndex$1(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
}

function validateDate(year, month, date) {
  if (month < 0 || month > 11) {
    return false
  }

  if (date != null) {
    if (date < 1) {
      return false
    }

    var isLeapYear = isLeapYearIndex$1(year);
    if (isLeapYear && date > DAYS_IN_MONTH_LEAP_YEAR$1[month]) {
      return false
    }
    if (!isLeapYear && date > DAYS_IN_MONTH$1[month]) {
      return false
    }
  }

  return true
}

function validateDayOfYearDate(year, dayOfYear) {
  if (dayOfYear < 1) {
    return false
  }

  var isLeapYear = isLeapYearIndex$1(year);
  if (isLeapYear && dayOfYear > 366) {
    return false
  }
  if (!isLeapYear && dayOfYear > 365) {
    return false
  }

  return true
}

function validateWeekDate(year, week, day) {
  if (week < 0 || week > 52) {
    return false
  }

  if (day != null && (day < 0 || day > 6)) {
    return false
  }

  return true
}

function validateTime(hours, minutes, seconds) {
  if (hours != null && (hours < 0 || hours >= 25)) {
    return false
  }

  if (minutes != null && (minutes < 0 || minutes >= 60)) {
    return false
  }

  if (seconds != null && (seconds < 0 || seconds >= 60)) {
    return false
  }

  return true
}

/**
 * @name utcToZonedTime
 * @category Time Zone Helpers
 * @summary Get a date/time representing local time in a given time zone from the UTC date
 *
 * @description
 * Returns a date instance with values representing the local time in the time zone
 * specified of the UTC time from the date provided. In other words, when the new date
 * is formatted it will show the equivalent hours in the target time zone regardless
 * of the current system time zone.
 *
 * @param {Date|String|Number} date - the date with the relevant UTC time
 * @param {String} timeZone - the time zone to get local time for, can be an offset or IANA time zone
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the equivalent time in the time zone
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // In June 10am UTC is 6am in New York (-04:00)
 * const result = utcToZonedTime('2014-06-25T10:00:00.000Z', 'America/New_York')
 * //=> Jun 25 2014 06:00:00
 */
function utcToZonedTime(dirtyDate, timeZone, options) {
  var date = toDate(dirtyDate, options);

  // This date has the UTC time values of the input date at the system time zone
  var utcDate = new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getUTCMilliseconds()
  );
  // We just need to apply the offset indicated by the time zone to this localized date
  var offsetMilliseconds = tzParseTimezone(timeZone, date);

  return offsetMilliseconds
    ? Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["k"])(utcDate, offsetMilliseconds)
    : utcDate
}

/**
 * @name zonedTimeToUtc
 * @category Time Zone Helpers
 * @summary Get the UTC date/time from a date representing local time in a given time zone
 *
 * @description
 * Returns a date instance with the UTC time of the provided date of which the values
 * represented the local time in the time zone specified. In other words, if the input
 * date represented local time in time time zone, the timestamp of the output date will
 * give the equivalent UTC of that local time regardless of the current system time zone.
 *
 * @param {Date|String|Number} date - the date with values representing the local time
 * @param {String} timeZone - the time zone of this local time, can be an offset or IANA time zone
 * @param {OptionsWithTZ} [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param {0|1|2} [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * @returns {Date} the new date with the equivalent time in the time zone
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // In June 10am in Los Angeles is 5pm UTC
 * const result = zonedTimeToUtc(new Date(2014, 5, 25, 10, 0, 0), 'America/Los_Angeles')
 * //=> 2014-06-25T17:00:00.000Z
 */
function zonedTimeToUtc(date, timeZone, options) {
  if (date instanceof Date) {
    date = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(date, "yyyy-MM-dd'T'HH:mm:ss.SSS");
  }
  var extendedOptions = cloneObject(options);
  extendedOptions.timeZone = timeZone;
  return toDate(date, extendedOptions)
}

const timepickerCss = "@charset \"UTF-8\";/*!\n *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n*  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n*//*!\n *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2020 Robert Bosch GmbH Copyright (C) 2020 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */@font-face{font-family:\"Bosch-Sans\";font-weight:400;src:url(\"..//fonts/BoschSans-Regular.eot\");src:url(\"..//fonts/BoschSans-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Regular.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Regular.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Regular.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Regular.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:300;src:url(\"..//fonts/BoschSans-Light.eot\");src:url(\"..//fonts/BoschSans-Light.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Light.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Light.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Light.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Light.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:500;src:url(\"..//fonts/BoschSans-Medium.eot\");src:url(\"..//fonts/BoschSans-Medium.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Medium.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Medium.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Medium.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Medium.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:700;src:url(\"..//fonts/BoschSans-Bold.eot\");src:url(\"..//fonts/BoschSans-Bold.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Bold.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Bold.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Bold.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Bold.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:900;src:url(\"..//fonts/BoschSans-Black.eot\");src:url(\"..//fonts/BoschSans-Black.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Black.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Black.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Black.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Black.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Ic\";font-style:normal;font-stretch:normal;font-weight:normal;src:url(\"..//fonts/Bosch-Icon.eot?mh5qa9\");src:url(\"..//fonts/Bosch-Icon.eot?mh5qa9#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/Bosch-Icon.ttf?mh5qa9\") format(\"truetype\"), url(\"..//fonts/Bosch-Icon.woff?mh5qa9\") format(\"woff\"), url(\"..//fonts/Bosch-Icon.svg?mh5qa9#Bosch-Icon\") format(\"svg\")}/*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2020 Robert Bosch GmbH Copyright (C) 2020 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */body{margin:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}main,*{font-family:\"Bosch-Sans\"}::-moz-selection{background-color:#008ECF}::selection,::-moz-selection{background-color:#008ECF}a::-moz-selection{color:#FFFFFF}.lead{margin-bottom:22px;font-size:18px;font-weight:300;line-height:1.4}@media (min-width: 768px){.lead{font-size:24px}}/*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.bosch-ic,.Bosch-Ic{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic:before,.Bosch-Ic:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:24px;vertical-align:middle}.bosch-ic-large,.Bosch-Ic-Large{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic-large:before,.Bosch-Ic-Large:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:28px;vertical-align:middle}.bosch-ic-medium,.Bosch-Ic-Medium{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic-medium:before,.Bosch-Ic-Medium:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:24px;vertical-align:middle}.bosch-ic-normal,.Bosch-Ic-Normal{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic-normal:before,.Bosch-Ic-Normal:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:20px;vertical-align:middle}.bosch-ic-small,.Bosch-Ic-Small{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic-small:before,.Bosch-Ic-Small:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:16px;vertical-align:middle}.Bosch-Ic-Disabled,.bosch-ic-disabled,.Bosch-Ic-Disabled:hover,.bosch-ic-disabled:hover,.Bosch-Ic[disabled],.bosch-ic[disabled],.Bosch-Ic[disabled]:hover,.bosch-ic[disabled]:hover{cursor:not-allowed;color:#d4d7da}.Bosch-Ic-Disabled:hover,.bosch-ic-disabled:hover,.Bosch-Ic-Disabled:hover:hover,.bosch-ic-disabled:hover:hover,.Bosch-Ic[disabled]:hover,.bosch-ic[disabled]:hover,.Bosch-Ic[disabled]:hover:hover,.bosch-ic[disabled]:hover:hover{color:#d4d7da}.bosch-ic-clickable,.Bosch-Ic-Clickable{cursor:pointer}.bosch-ic-clickable:hover,.Bosch-Ic-Clickable:hover{color:#7FC6E7}.bosch-ic-clickable:active,.Bosch-Ic-Clickable:active{color:#008ECF}.bosch-ic-clickable:disabled,.bosch-ic-clickable.disabled,.Bosch-Ic-Clickable:disabled,.Bosch-Ic-Clickable.disabled{color:#a8afb5;cursor:not-allowed}.bosch-ic-activated,.Bosch-Ic-Activated{color:#008ECF}.bosch-ic-3d-print:before{content:\"\"}.bosch-ic-a-to-b:before{content:\"\"}.bosch-ic-add:before{content:\"\"}.bosch-ic-address-consumer-data:before{content:\"\"}.bosch-ic-adress-book:before{content:\"\"}.bosch-ic-agility:before{content:\"\"}.bosch-ic-alarm-clock:before{content:\"\"}.bosch-ic-ambulance:before{content:\"\"}.bosch-ic-analysis:before{content:\"\"}.bosch-ic-anchor:before{content:\"\"}.bosch-ic-arrow-down:before{content:\"\"}.bosch-ic-arrow-left:before{content:\"\"}.bosch-ic-arrow-left-down:before{content:\"\"}.bosch-ic-arrow-left-up:before{content:\"\"}.bosch-ic-arrow-right:before{content:\"\"}.bosch-ic-arrow-right-down:before{content:\"\"}.bosch-ic-arrow-right-up:before{content:\"\"}.bosch-ic-arrow-turn-left:before{content:\"\"}.bosch-ic-arrow-turn-right:before{content:\"\"}.bosch-ic-arrow-up:before{content:\"\"}.bosch-ic-arrows:before{content:\"\"}.bosch-ic-arrows-x-y-z:before{content:\"\"}.bosch-ic-artificial-intelligence:before{content:\"\"}.bosch-ic-assembly-line:before{content:\"\"}.bosch-ic-atom:before{content:\"\"}.bosch-ic-augmented-reality:before{content:\"\"}.bosch-ic-autobod:before{content:\"\"}.bosch-ic-back-left:before{content:\"\"}.bosch-ic-back-left-double:before{content:\"\"}.bosch-ic-bar-chart:before{content:\"\"}.bosch-ic-bar-chart-double:before{content:\"\"}.bosch-ic-battery-0:before{content:\"\"}.bosch-ic-battery-1:before{content:\"\"}.bosch-ic-battery-2:before{content:\"\"}.bosch-ic-battery-3:before{content:\"\"}.bosch-ic-battery-4:before{content:\"\"}.bosch-ic-battery-fail:before{content:\"\"}.bosch-ic-battery-li-ion:before{content:\"\"}.bosch-ic-battery-loading:before{content:\"\"}.bosch-ic-bed:before{content:\"\"}.bosch-ic-bicycle:before{content:\"\"}.bosch-ic-bicycle-e:before{content:\"\"}.bosch-ic-blog:before{content:\"\"}.bosch-ic-bluetooth:before{content:\"\"}.bosch-ic-bluetooth-le:before{content:\"\"}.bosch-ic-board-speaker:before{content:\"\"}.bosch-ic-boiler-connected:before{content:\"\"}.bosch-ic-book:before{content:\"\"}.bosch-ic-bookmark:before{content:\"\"}.bosch-ic-bookmark-add:before{content:\"\"}.bosch-ic-bookmark-check:before{content:\"\"}.bosch-ic-bookmark-delete:before{content:\"\"}.bosch-ic-books:before{content:\"\"}.bosch-ic-bookshelf:before{content:\"\"}.bosch-ic-box:before{content:\"\"}.bosch-ic-box-closed:before{content:\"\"}.bosch-ic-box-delivery:before{content:\"\"}.bosch-ic-box-delivery-connected:before{content:\"\"}.bosch-ic-brake-disk:before{content:\"\"}.bosch-ic-briefcase:before{content:\"\"}.bosch-ic-broom:before{content:\"\"}.bosch-ic-broom-cloud-dirt:before{content:\"\"}.bosch-ic-brush:before{content:\"\"}.bosch-ic-bug:before{content:\"\"}.bosch-ic-building:before{content:\"\"}.bosch-ic-cactus:before{content:\"\"}.bosch-ic-calculate:before{content:\"\"}.bosch-ic-calendar:before{content:\"\"}.bosch-ic-calendar-add:before{content:\"\"}.bosch-ic-calendar-settings:before{content:\"\"}.bosch-ic-call:before{content:\"\"}.bosch-ic-call-add:before{content:\"\"}.bosch-ic-call-remove:before{content:\"\"}.bosch-ic-call-sos:before{content:\"\"}.bosch-ic-call-team:before{content:\"\"}.bosch-ic-call-wifi:before{content:\"\"}.bosch-ic-camera:before{content:\"\"}.bosch-ic-camera-switch:before{content:\"\"}.bosch-ic-car:before{content:\"\"}.bosch-ic-car-clock:before{content:\"\"}.bosch-ic-car-connected:before{content:\"\"}.bosch-ic-car-locator:before{content:\"\"}.bosch-ic-car-mechanic:before{content:\"\"}.bosch-ic-car-rental:before{content:\"\"}.bosch-ic-car-seat-connected:before{content:\"\"}.bosch-ic-car-side:before{content:\"\"}.bosch-ic-car-side-user:before{content:\"\"}.bosch-ic-cart:before{content:\"\"}.bosch-ic-certificate:before{content:\"\"}.bosch-ic-certificate-pki:before{content:\"\"}.bosch-ic-change:before{content:\"\"}.bosch-ic-chart-bar:before{content:\"\"}.bosch-ic-chart-check:before{content:\"\"}.bosch-ic-chart-dummy:before{content:\"\"}.bosch-ic-chart-line:before{content:\"\"}.bosch-ic-chat:before{content:\"\"}.bosch-ic-chat-add:before{content:\"\"}.bosch-ic-chat-question-answer:before{content:\"\"}.bosch-ic-chat-remove:before{content:\"\"}.bosch-ic-checklist:before{content:\"\"}.bosch-ic-checkmark:before{content:\"\"}.bosch-ic-chip:before{content:\"\"}.bosch-ic-circle-segment:before{content:\"\"}.bosch-ic-clear-all:before{content:\"\"}.bosch-ic-clipboard:before{content:\"\"}.bosch-ic-clipboard-list:before{content:\"\"}.bosch-ic-clock:before{content:\"\"}.bosch-ic-close:before{content:\"\"}.bosch-ic-close-all:before{content:\"\"}.bosch-ic-cloud:before{content:\"\"}.bosch-ic-cloud-co2:before{content:\"\"}.bosch-ic-cloud-download:before{content:\"\"}.bosch-ic-cloud-nox:before{content:\"\"}.bosch-ic-cloud-upload:before{content:\"\"}.bosch-ic-club-arm-chair:before{content:\"\"}.bosch-ic-coffee-break:before{content:\"\"}.bosch-ic-coin-currency:before{content:\"\"}.bosch-ic-coin-dollar:before{content:\"\"}.bosch-ic-colorpicker:before{content:\"\"}.bosch-ic-colors:before{content:\"\"}.bosch-ic-command:before{content:\"\"}.bosch-ic-communicator:before{content:\"\"}.bosch-ic-compare:before{content:\"\"}.bosch-ic-components:before{content:\"\"}.bosch-ic-components-available:before{content:\"\"}.bosch-ic-components-reservation:before{content:\"\"}.bosch-ic-concierge-bell:before{content:\"\"}.bosch-ic-configuration:before{content:\"\"}.bosch-ic-confirmation:before{content:\"\"}.bosch-ic-connection-off:before{content:\"\"}.bosch-ic-connection-on:before{content:\"\"}.bosch-ic-connectivity:before{content:\"\"}.bosch-ic-construction:before{content:\"\"}.bosch-ic-consumer-goods:before{content:\"\"}.bosch-ic-contract:before{content:\"\"}.bosch-ic-copy:before{content:\"\"}.bosch-ic-cube:before{content:\"\"}.bosch-ic-cube-arrows:before{content:\"\"}.bosch-ic-cube-filled:before{content:\"\"}.bosch-ic-cube-shock:before{content:\"\"}.bosch-ic-cube-stacked:before{content:\"\"}.bosch-ic-customerservice:before{content:\"\"}.bosch-ic-cutlery:before{content:\"\"}.bosch-ic-damper:before{content:\"\"}.bosch-ic-danger-flash:before{content:\"\"}.bosch-ic-data-loss:before{content:\"\"}.bosch-ic-dealer-details:before{content:\"\"}.bosch-ic-delete:before{content:\"\"}.bosch-ic-delivery:before{content:\"\"}.bosch-ic-denied:before{content:\"\"}.bosch-ic-desktop:before{content:\"\"}.bosch-ic-desktop-application-2d:before{content:\"\"}.bosch-ic-desktop-application-3d:before{content:\"\"}.bosch-ic-development:before{content:\"\"}.bosch-ic-devices:before{content:\"\"}.bosch-ic-devices-mobile:before{content:\"\"}.bosch-ic-directory:before{content:\"\"}.bosch-ic-dna:before{content:\"\"}.bosch-ic-do-not-disturb:before{content:\"\"}.bosch-ic-document:before{content:\"\"}.bosch-ic-document-add:before{content:\"\"}.bosch-ic-document-arrow-down:before{content:\"\"}.bosch-ic-document-arrow-up:before{content:\"\"}.bosch-ic-document-audio:before{content:\"\"}.bosch-ic-document-check:before{content:\"\"}.bosch-ic-document-cloud:before{content:\"\"}.bosch-ic-document-copy:before{content:\"\"}.bosch-ic-document-delete:before{content:\"\"}.bosch-ic-document-doc:before{content:\"\"}.bosch-ic-document-edit:before{content:\"\"}.bosch-ic-document-error:before{content:\"\"}.bosch-ic-document-locked:before{content:\"\"}.bosch-ic-document-log:before{content:\"\"}.bosch-ic-document-one:before{content:\"\"}.bosch-ic-document-pdf:before{content:\"\"}.bosch-ic-document-plain:before{content:\"\"}.bosch-ic-document-plain-add:before{content:\"\"}.bosch-ic-document-plain-delete:before{content:\"\"}.bosch-ic-document-ppt:before{content:\"\"}.bosch-ic-document-pub:before{content:\"\"}.bosch-ic-document-rtf:before{content:\"\"}.bosch-ic-document-save-to:before{content:\"\"}.bosch-ic-document-search:before{content:\"\"}.bosch-ic-document-settings:before{content:\"\"}.bosch-ic-document-test:before{content:\"\"}.bosch-ic-document-text:before{content:\"\"}.bosch-ic-document-txt:before{content:\"\"}.bosch-ic-document-vsd:before{content:\"\"}.bosch-ic-document-xls:before{content:\"\"}.bosch-ic-document-xml:before{content:\"\"}.bosch-ic-document-zip:before{content:\"\"}.bosch-ic-dome:before{content:\"\"}.bosch-ic-door:before{content:\"\"}.bosch-ic-door-sensor:before{content:\"\"}.bosch-ic-down:before{content:\"\"}.bosch-ic-down-double:before{content:\"\"}.bosch-ic-download:before{content:\"\"}.bosch-ic-drag-handle:before{content:\"\"}.bosch-ic-dragdrop:before{content:\"\"}.bosch-ic-drop:before{content:\"\"}.bosch-ic-e-charging:before{content:\"\"}.bosch-ic-e-mobility:before{content:\"\"}.bosch-ic-ear-off-disabled-light:before{content:\"\"}.bosch-ic-ear-on:before{content:\"\"}.bosch-ic-eco-system:before{content:\"\"}.bosch-ic-edit:before{content:\"\"}.bosch-ic-education:before{content:\"\"}.bosch-ic-efficiency:before{content:\"\"}.bosch-ic-elevator:before{content:\"\"}.bosch-ic-elevator-alarm:before{content:\"\"}.bosch-ic-elevator-cloud:before{content:\"\"}.bosch-ic-elevator-headset:before{content:\"\"}.bosch-ic-elevator-service:before{content:\"\"}.bosch-ic-emergency-exit:before{content:\"\"}.bosch-ic-emoji-happy:before{content:\"\"}.bosch-ic-emoji-neutral:before{content:\"\"}.bosch-ic-emoji-sad:before{content:\"\"}.bosch-ic-emoji-super-happy:before{content:\"\"}.bosch-ic-emoji-very-sad:before{content:\"\"}.bosch-ic-eu-energy-label:before{content:\"\"}.bosch-ic-excavator:before{content:\"\"}.bosch-ic-exit:before{content:\"\"}.bosch-ic-expansion-arrows:before{content:\"\"}.bosch-ic-explosion:before{content:\"\"}.bosch-ic-export:before{content:\"\"}.bosch-ic-externallink:before{content:\"\"}.bosch-ic-fast-forward:before{content:\"\"}.bosch-ic-faucet:before{content:\"\"}.bosch-ic-favorites:before{content:\"\"}.bosch-ic-fax:before{content:\"\"}.bosch-ic-female:before{content:\"\"}.bosch-ic-film:before{content:\"\"}.bosch-ic-filter:before{content:\"\"}.bosch-ic-filter-success:before{content:\"\"}.bosch-ic-fingerprint:before{content:\"\"}.bosch-ic-fire:before{content:\"\"}.bosch-ic-fire-emergency:before{content:\"\"}.bosch-ic-fireworks:before{content:\"\"}.bosch-ic-first-aid:before{content:\"\"}.bosch-ic-first-aid-cross:before{content:\"\"}.bosch-ic-fit-to-sceen:before{content:\"\"}.bosch-ic-flag:before{content:\"\"}.bosch-ic-flash:before{content:\"\"}.bosch-ic-flask:before{content:\"\"}.bosch-ic-flexpress:before{content:\"\"}.bosch-ic-folder:before{content:\"\"}.bosch-ic-folder-download:before{content:\"\"}.bosch-ic-folder-open:before{content:\"\"}.bosch-ic-folder-upload:before{content:\"\"}.bosch-ic-fork-lift:before{content:\"\"}.bosch-ic-fork-lift-locator:before{content:\"\"}.bosch-ic-forward-right:before{content:\"\"}.bosch-ic-forward-right-double:before{content:\"\"}.bosch-ic-full-empty:before{content:\"\"}.bosch-ic-fullscreen:before{content:\"\"}.bosch-ic-fullscreen-arrows:before{content:\"\"}.bosch-ic-fullscreen-exit:before{content:\"\"}.bosch-ic-g-arrow-down:before{content:\"\"}.bosch-ic-g-arrow-up:before{content:\"\"}.bosch-ic-generator:before{content:\"\"}.bosch-ic-gift:before{content:\"\"}.bosch-ic-glance:before{content:\"\"}.bosch-ic-glas-plate:before{content:\"\"}.bosch-ic-globe:before{content:\"\"}.bosch-ic-globe-arrow:before{content:\"\"}.bosch-ic-glossary:before{content:\"\"}.bosch-ic-grid-view:before{content:\"\"}.bosch-ic-hammer:before{content:\"\"}.bosch-ic-hand:before{content:\"\"}.bosch-ic-hand-motion:before{content:\"\"}.bosch-ic-hand-motion-off-disabled-light:before{content:\"\"}.bosch-ic-handlewithcare:before{content:\"\"}.bosch-ic-handover-add:before{content:\"\"}.bosch-ic-handover-check:before{content:\"\"}.bosch-ic-handover-remove:before{content:\"\"}.bosch-ic-hanger:before{content:\"\"}.bosch-ic-health:before{content:\"\"}.bosch-ic-heart:before{content:\"\"}.bosch-ic-history:before{content:\"\"}.bosch-ic-home:before{content:\"\"}.bosch-ic-home-locator:before{content:\"\"}.bosch-ic-hourglass:before{content:\"\"}.bosch-ic-hydrant:before{content:\"\"}.bosch-ic-ice:before{content:\"\"}.bosch-ic-imagery:before{content:\"\"}.bosch-ic-imagery-add:before{content:\"\"}.bosch-ic-imagery-remove:before{content:\"\"}.bosch-ic-import:before{content:\"\"}.bosch-ic-imprint:before{content:\"\"}.bosch-ic-impulse:before{content:\"\"}.bosch-ic-industry:before{content:\"\"}.bosch-ic-industry-clock:before{content:\"\"}.bosch-ic-industry-connected:before{content:\"\"}.bosch-ic-info:before{content:\"\"}.bosch-ic-info-i:before{content:\"\"}.bosch-ic-interval:before{content:\"\"}.bosch-ic-it-device:before{content:\"\"}.bosch-ic-jewel:before{content:\"\"}.bosch-ic-keyboard:before{content:\"\"}.bosch-ic-label:before{content:\"\"}.bosch-ic-laptop:before{content:\"\"}.bosch-ic-laser:before{content:\"\"}.bosch-ic-layout:before{content:\"\"}.bosch-ic-leaf:before{content:\"\"}.bosch-ic-led:before{content:\"\"}.bosch-ic-brick:before{content:\"\"}.bosch-ic-brick-slanting-1:before{content:\"\"}.bosch-ic-brick-slanting-2:before{content:\"\"}.bosch-ic-less-minimize:before{content:\"\"}.bosch-ic-lightbulb:before{content:\"\"}.bosch-ic-lightbulb-off:before{content:\"\"}.bosch-ic-line-chart:before{content:\"\"}.bosch-ic-link:before{content:\"\"}.bosch-ic-link-broken:before{content:\"\"}.bosch-ic-list-view:before{content:\"\"}.bosch-ic-list-view-mobile:before{content:\"\"}.bosch-ic-livechat:before{content:\"\"}.bosch-ic-locator:before{content:\"\"}.bosch-ic-locator-ip-connected:before{content:\"\"}.bosch-ic-locator-ip-disconnected:before{content:\"\"}.bosch-ic-locator-spot:before{content:\"\"}.bosch-ic-locator-spot-check:before{content:\"\"}.bosch-ic-lock-closed:before{content:\"\"}.bosch-ic-lock-open:before{content:\"\"}.bosch-ic-login:before{content:\"\"}.bosch-ic-logistics:before{content:\"\"}.bosch-ic-logout:before{content:\"\"}.bosch-ic-machine:before{content:\"\"}.bosch-ic-magnet:before{content:\"\"}.bosch-ic-mail:before{content:\"\"}.bosch-ic-mail-forward:before{content:\"\"}.bosch-ic-mail-open:before{content:\"\"}.bosch-ic-mail-out:before{content:\"\"}.bosch-ic-mail-reply:before{content:\"\"}.bosch-ic-male:before{content:\"\"}.bosch-ic-map:before{content:\"\"}.bosch-ic-material-add:before{content:\"\"}.bosch-ic-material-check:before{content:\"\"}.bosch-ic-material-remove:before{content:\"\"}.bosch-ic-maximize:before{content:\"\"}.bosch-ic-mechanic:before{content:\"\"}.bosch-ic-megaphone:before{content:\"\"}.bosch-ic-message:before{content:\"\"}.bosch-ic-mic:before{content:\"\"}.bosch-ic-microphone:before{content:\"\"}.bosch-ic-microphone-classic:before{content:\"\"}.bosch-ic-minimize:before{content:\"\"}.bosch-ic-money-currency:before{content:\"\"}.bosch-ic-money-dollar:before{content:\"\"}.bosch-ic-moneybag-currency:before{content:\"\"}.bosch-ic-moneybag-dollar:before{content:\"\"}.bosch-ic-monument:before{content:\"\"}.bosch-ic-moon:before{content:\"\"}.bosch-ic-motorcycle:before{content:\"\"}.bosch-ic-motorcycle-side-car:before{content:\"\"}.bosch-ic-motorcycle-side:before{content:\"\"}.bosch-ic-mouse:before{content:\"\"}.bosch-ic-mouse-left:before{content:\"\"}.bosch-ic-mouse-right:before{content:\"\"}.bosch-ic-mouth:before{content:\"\"}.bosch-ic-my-product:before{content:\"\"}.bosch-ic-new-way-work:before{content:\"\"}.bosch-ic-newsletter:before{content:\"\"}.bosch-ic-newspaper:before{content:\"\"}.bosch-ic-nose:before{content:\"\"}.bosch-ic-notepad:before{content:\"\"}.bosch-ic-notepad-edit:before{content:\"\"}.bosch-ic-notification:before{content:\"\"}.bosch-ic-notification-active:before{content:\"\"}.bosch-ic-notification-add:before{content:\"\"}.bosch-ic-notification-remove:before{content:\"\"}.bosch-ic-oil-car:before{content:\"\"}.bosch-ic-omnichannel:before{content:\"\"}.bosch-ic-options:before{content:\"\"}.bosch-ic-origami-boat:before{content:\"\"}.bosch-ic-pallete-car:before{content:\"\"}.bosch-ic-pallete-car-connected:before{content:\"\"}.bosch-ic-panel:before{content:\"\"}.bosch-ic-paperclip:before{content:\"\"}.bosch-ic-paperplane:before{content:\"\"}.bosch-ic-parking:before{content:\"\"}.bosch-ic-pause:before{content:\"\"}.bosch-ic-payment:before{content:\"\"}.bosch-ic-people:before{content:\"\"}.bosch-ic-petrol-station:before{content:\"\"}.bosch-ic-piggybank:before{content:\"\"}.bosch-ic-pin-classic:before{content:\"\"}.bosch-ic-pin-modern:before{content:\"\"}.bosch-ic-plane-side:before{content:\"\"}.bosch-ic-play:before{content:\"\"}.bosch-ic-plug-12v:before{content:\"\"}.bosch-ic-podium-speaker:before{content:\"\"}.bosch-ic-police:before{content:\"\"}.bosch-ic-poop:before{content:\"\"}.bosch-ic-post-it:before{content:\"\"}.bosch-ic-postal-code:before{content:\"\"}.bosch-ic-power:before{content:\"\"}.bosch-ic-print:before{content:\"\"}.bosch-ic-prototyping:before{content:\"\"}.bosch-ic-puzzle:before{content:\"\"}.bosch-ic-quad:before{content:\"\"}.bosch-ic-question:before{content:\"\"}.bosch-ic-radar:before{content:\"\"}.bosch-ic-radio:before{content:\"\"}.bosch-ic-radiotower:before{content:\"\"}.bosch-ic-redirect:before{content:\"\"}.bosch-ic-redo:before{content:\"\"}.bosch-ic-reference:before{content:\"\"}.bosch-ic-refresh:before{content:\"\"}.bosch-ic-refresh-cloud:before{content:\"\"}.bosch-ic-registration:before{content:\"\"}.bosch-ic-remote:before{content:\"\"}.bosch-ic-reset:before{content:\"\"}.bosch-ic-resolution:before{content:\"\"}.bosch-ic-robot:before{content:\"\"}.bosch-ic-robot-connected:before{content:\"\"}.bosch-ic-robothead:before{content:\"\"}.bosch-ic-rocket:before{content:\"\"}.bosch-ic-rotation:before{content:\"\"}.bosch-ic-rotation-360:before{content:\"\"}.bosch-ic-rotation-x-left:before{content:\"\"}.bosch-ic-rotation-x-right:before{content:\"\"}.bosch-ic-rotation-y-down:before{content:\"\"}.bosch-ic-rotation-y-up:before{content:\"\"}.bosch-ic-route:before{content:\"\"}.bosch-ic-ruler:before{content:\"\"}.bosch-ic-ruler-pen:before{content:\"\"}.bosch-ic-satellite:before{content:\"\"}.bosch-ic-save:before{content:\"\"}.bosch-ic-scale:before{content:\"\"}.bosch-ic-scissors:before{content:\"\"}.bosch-ic-search:before{content:\"\"}.bosch-ic-security:before{content:\"\"}.bosch-ic-security-check:before{content:\"\"}.bosch-ic-security-user:before{content:\"\"}.bosch-ic-sensor:before{content:\"\"}.bosch-ic-server:before{content:\"\"}.bosch-ic-server-expansion:before{content:\"\"}.bosch-ic-server-rate:before{content:\"\"}.bosch-ic-service-agent:before{content:\"\"}.bosch-ic-service-time:before{content:\"\"}.bosch-ic-settings:before{content:\"\"}.bosch-ic-settings-arrows:before{content:\"\"}.bosch-ic-settings-connected:before{content:\"\"}.bosch-ic-share:before{content:\"\"}.bosch-ic-shield-stop:before{content:\"\"}.bosch-ic-ship:before{content:\"\"}.bosch-ic-ship-side:before{content:\"\"}.bosch-ic-shoppingcart:before{content:\"\"}.bosch-ic-shoppingcart-add:before{content:\"\"}.bosch-ic-shoppingcart-switch:before{content:\"\"}.bosch-ic-signal-full:before{content:\"\"}.bosch-ic-signal-half:before{content:\"\"}.bosch-ic-signal-lost:before{content:\"\"}.bosch-ic-signpost:before{content:\"\"}.bosch-ic-simcard:before{content:\"\"}.bosch-ic-skyscraper:before{content:\"\"}.bosch-ic-smartcity:before{content:\"\"}.bosch-ic-smarthome:before{content:\"\"}.bosch-ic-smartphone:before{content:\"\"}.bosch-ic-smartphone-acoustic:before{content:\"\"}.bosch-ic-smartphone-arrow-right:before{content:\"\"}.bosch-ic-smartphone-arrows-x-y-z:before{content:\"\"}.bosch-ic-smartphone-clock:before{content:\"\"}.bosch-ic-smartphone-cloud:before{content:\"\"}.bosch-ic-smartphone-loading-wheel:before{content:\"\"}.bosch-ic-smartphone-smashed:before{content:\"\"}.bosch-ic-smartphone-vibration:before{content:\"\"}.bosch-ic-smartphone-z:before{content:\"\"}.bosch-ic-smartwatch-connected:before{content:\"\"}.bosch-ic-spare-parts:before{content:\"\"}.bosch-ic-spark:before{content:\"\"}.bosch-ic-speaker-acoustic:before{content:\"\"}.bosch-ic-speedometer:before{content:\"\"}.bosch-ic-stadium:before{content:\"\"}.bosch-ic-stairs:before{content:\"\"}.bosch-ic-stamp:before{content:\"\"}.bosch-ic-standby:before{content:\"\"}.bosch-ic-steering-wheel:before{content:\"\"}.bosch-ic-steering-wheel-connected:before{content:\"\"}.bosch-ic-steering-wheel-hands:before{content:\"\"}.bosch-ic-steps:before{content:\"\"}.bosch-ic-stethoscope:before{content:\"\"}.bosch-ic-stop:before{content:\"\"}.bosch-ic-stopwatch:before{content:\"\"}.bosch-ic-storage-local:before{content:\"\"}.bosch-ic-structure:before{content:\"\"}.bosch-ic-subtitles:before{content:\"\"}.bosch-ic-subtitles-off-light:before{content:\"\"}.bosch-ic-summary:before{content:\"\"}.bosch-ic-sun:before{content:\"\"}.bosch-ic-sun-half-filled:before{content:\"\"}.bosch-ic-sunshade-table:before{content:\"\"}.bosch-ic-surveillance:before{content:\"\"}.bosch-ic-table-chairs:before{content:\"\"}.bosch-ic-tablet:before{content:\"\"}.bosch-ic-team:before{content:\"\"}.bosch-ic-team-lightbulb:before{content:\"\"}.bosch-ic-technical-service:before{content:\"\"}.bosch-ic-temperature:before{content:\"\"}.bosch-ic-temperature-high:before{content:\"\"}.bosch-ic-temperature-low:before{content:\"\"}.bosch-ic-theater:before{content:\"\"}.bosch-ic-thumb-down:before{content:\"\"}.bosch-ic-thumb-up:before{content:\"\"}.bosch-ic-ticket:before{content:\"\"}.bosch-ic-touch:before{content:\"\"}.bosch-ic-touch-sos:before{content:\"\"}.bosch-ic-towing-truck:before{content:\"\"}.bosch-ic-train:before{content:\"\"}.bosch-ic-train-side:before{content:\"\"}.bosch-ic-transport-movements:before{content:\"\"}.bosch-ic-transscript:before{content:\"\"}.bosch-ic-transscript-off:before{content:\"\"}.bosch-ic-transscript-on:before{content:\"\"}.bosch-ic-tree:before{content:\"\"}.bosch-ic-tricycle:before{content:\"\"}.bosch-ic-trolley-empty:before{content:\"\"}.bosch-ic-trolley-filled-box:before{content:\"\"}.bosch-ic-trolly-filled-files:before{content:\"\"}.bosch-ic-trophy:before{content:\"\"}.bosch-ic-truck:before{content:\"\"}.bosch-ic-tuktuk:before{content:\"\"}.bosch-ic-tune:before{content:\"\"}.bosch-ic-typography:before{content:\"\"}.bosch-ic-ui:before{content:\"\"}.bosch-ic-umbrella:before{content:\"\"}.bosch-ic-undo:before{content:\"\"}.bosch-ic-up:before{content:\"\"}.bosch-ic-up-double:before{content:\"\"}.bosch-ic-up-down:before{content:\"\"}.bosch-ic-upload:before{content:\"\"}.bosch-ic-usb:before{content:\"\"}.bosch-ic-user:before{content:\"\"}.bosch-ic-user-advanced:before{content:\"\"}.bosch-ic-user-beginner:before{content:\"\"}.bosch-ic-user-desktop:before{content:\"\"}.bosch-ic-user-down:before{content:\"\"}.bosch-ic-user-falling:before{content:\"\"}.bosch-ic-user-hand:before{content:\"\"}.bosch-ic-user-hand-stop:before{content:\"\"}.bosch-ic-user-professional:before{content:\"\"}.bosch-ic-user-run:before{content:\"\"}.bosch-ic-user-share:before{content:\"\"}.bosch-ic-user-voice:before{content:\"\"}.bosch-ic-user-walk:before{content:\"\"}.bosch-ic-video:before{content:\"\"}.bosch-ic-video-disabled-light:before{content:\"\"}.bosch-ic-video-record:before{content:\"\"}.bosch-ic-virtual-reality:before{content:\"\"}.bosch-ic-volume-disabled:before{content:\"\"}.bosch-ic-volume-high:before{content:\"\"}.bosch-ic-volume-low:before{content:\"\"}.bosch-ic-volume-off-light:before{content:\"\"}.bosch-ic-wand:before{content:\"\"}.bosch-ic-badge-checkmark:before{content:\"\"}.bosch-ic-watch-off-disabled-light:before{content:\"\"}.bosch-ic-watch-on:before{content:\"\"}.bosch-ic-water-shower:before{content:\"\"}.bosch-ic-welcome:before{content:\"\"}.bosch-ic-wellness:before{content:\"\"}.bosch-ic-wheelchair:before{content:\"\"}.bosch-ic-whistle:before{content:\"\"}.bosch-ic-wide-angled-arrow:before{content:\"\"}.bosch-ic-wifi:before{content:\"\"}.bosch-ic-window-analysis:before{content:\"\"}.bosch-ic-window-browser:before{content:\"\"}.bosch-ic-window-console:before{content:\"\"}.bosch-ic-window-gaussian-view:before{content:\"\"}.bosch-ic-window-info:before{content:\"\"}.bosch-ic-window-new:before{content:\"\"}.bosch-ic-window-resize:before{content:\"\"}.bosch-ic-window-scaling-view:before{content:\"\"}.bosch-ic-window-shuffle:before{content:\"\"}.bosch-ic-window-statistic:before{content:\"\"}.bosch-ic-wishlist:before{content:\"\"}.bosch-ic-work-order:before{content:\"\"}.bosch-ic-worldwideweb:before{content:\"\"}.bosch-ic-wrench:before{content:\"\"}.bosch-ic-zoom-in:before{content:\"\"}.bosch-ic-zoom-out:before{content:\"\"}.bosch-ic-scooter:before{content:\"\"}.bosch-ic-cars-traffic:before{content:\"\"}.bosch-ic-arm-chair:before{content:\"\"}.bosch-ic-car-phone:before{content:\"\"}.bosch-ic-box-lightbulb:before{content:\"\"}.bosch-ic-chair-officedesk:before{content:\"\"}.bosch-ic-calendar-clock:before{content:\"\"}.bosch-ic-document-cv:before{content:\"\"}.bosch-ic-user-run-bag:before{content:\"\"}.bosch-ic-brake-disk-spray:before{content:\"\"}.bosch-ic-circle-abs:before{content:\"\"}.bosch-ic-bright-down:before{content:\"\"}.bosch-ic-bright-up:before{content:\"\"}.bosch-ic-fan:before{content:\"\"}.bosch-ic-sun-moon:before{content:\"\"}.bosch-ic-lightbulb-attention:before{content:\"\"}.bosch-ic-settings-attention:before{content:\"\"}.bosch-ic-danger-hazards:before{content:\"\"}.bosch-ic-windshield-spray:before{content:\"\"}.bosch-ic-windshield-heat:before{content:\"\"}.bosch-ic-light-drop:before{content:\"\"}.bosch-ic-starter:before{content:\"\"}.bosch-ic-turbo:before{content:\"\"}.bosch-ic-settings-lock:before{content:\"\"}.bosch-ic-settings-n:before{content:\"\"}.bosch-ic-light-beam-high:before{content:\"\"}.bosch-ic-light-beam-low:before{content:\"\"}.bosch-ic-glas:before{content:\"\"}.bosch-ic-shirt-ice:before{content:\"\"}.bosch-ic-helmet-fan:before{content:\"\"}.bosch-ic-notification-arrow:before{content:\"\"}.bosch-ic-steering-wheel-arrow:before{content:\"\"}.bosch-ic-circle-arrow:before{content:\"\"}.bosch-ic-tempomat-pit:before{content:\"\"}.bosch-ic-radiator-fan-spray:before{content:\"\"}.bosch-ic-boost-down:before{content:\"\"}.bosch-ic-boost-up:before{content:\"\"}.bosch-ic-circle-lock:before{content:\"\"}.bosch-ic-mp-down:before{content:\"\"}.bosch-ic-mp-up:before{content:\"\"}.bosch-ic-tc-down:before{content:\"\"}.bosch-ic-tc-up:before{content:\"\"}.bosch-ic-danger-arrow-attention:before{content:\"\"}.bosch-ic-user-remove:before{content:\"\"}.bosch-ic-user-add:before{content:\"\"}.bosch-ic-post-it-collection:before{content:\"\"}.bosch-ic-horn:before{content:\"\"}.bosch-ic-desktop-notification:before{content:\"\"}.bosch-ic-router:before{content:\"\"}.bosch-ic-berry:before{content:\"\"}.bosch-ic-chat-language:before{content:\"\"}.bosch-ic-game-controller:before{content:\"\"}.bosch-ic-user-brain:before{content:\"\"}.bosch-ic-mouth-finger:before{content:\"\"}.bosch-ic-excavator-shovel:before{content:\"\"}.bosch-ic-ear-in:before{content:\"\"}.bosch-ic-ear-out:before{content:\"\"}.bosch-ic-lion:before{content:\"\"}.bosch-ic-car-convertible:before{content:\"\"}.bosch-ic-car-sports:before{content:\"\"}.bosch-ic-bear:before{content:\"\"}.bosch-ic-pot:before{content:\"\"}.bosch-ic-bed-double:before{content:\"\"}.bosch-ic-air-hot:before{content:\"\"}.bosch-ic-air-ice:before{content:\"\"}.bosch-ic-air-leaf:before{content:\"\"}.bosch-ic-air-purifier-0:before{content:\"\"}.bosch-ic-air-purifier-1:before{content:\"\"}.bosch-ic-air-purifier-2:before{content:\"\"}.bosch-ic-air-purifier-3:before{content:\"\"}.bosch-ic-air:before{content:\"\"}.bosch-ic-fan-off-disabled-bold:before{content:\"\"}.bosch-ic-ice-off-disabled-bold:before{content:\"\"}.bosch-ic-faucet-boost:before{content:\"\"}.bosch-ic-faucet-mode:before{content:\"\"}.bosch-ic-faucet-off-disabled-bold:before{content:\"\"}.bosch-ic-faucet-schedule:before{content:\"\"}.bosch-ic-fuel-cell:before{content:\"\"}.bosch-ic-heating-floor-off-disabled-bold:before{content:\"\"}.bosch-ic-heating-floor:before{content:\"\"}.bosch-ic-heating-radiator-boost:before{content:\"\"}.bosch-ic-heating-radiator-mode:before{content:\"\"}.bosch-ic-heating-radiator-off-disabled-bold:before{content:\"\"}.bosch-ic-heating-radiator-schedule:before{content:\"\"}.bosch-ic-leaf-simple:before{content:\"\"}.bosch-ic-oil-barrel:before{content:\"\"}.bosch-ic-water-bathtub:before{content:\"\"}.bosch-ic-water-dishwash:before{content:\"\"}.bosch-ic-water-handwash:before{content:\"\"}.bosch-ic-water-hot:before{content:\"\"}.bosch-ic-water-ice:before{content:\"\"}.bosch-ic-water-leaf:before{content:\"\"}.bosch-ic-water-ladder:before{content:\"\"}.bosch-ic-water-purifier-0:before{content:\"\"}.bosch-ic-water-purifier-1:before{content:\"\"}.bosch-ic-water-purifier-2:before{content:\"\"}.bosch-ic-water-purifier-3:before{content:\"\"}.bosch-ic-water-shower-boost:before{content:\"\"}.bosch-ic-water-shower-mode:before{content:\"\"}.bosch-ic-water-shower-off-disabled-bold:before{content:\"\"}.bosch-ic-water-shower-schedule:before{content:\"\"}.bosch-ic-water:before{content:\"\"}.bosch-ic-chart-bar-drop:before{content:\"\"}.bosch-ic-chart-bar-fire:before{content:\"\"}.bosch-ic-chart-bar-flash:before{content:\"\"}.bosch-ic-chart-bar-oil:before{content:\"\"}.bosch-ic-drop-minus:before{content:\"\"}.bosch-ic-drop-plus:before{content:\"\"}.bosch-ic-fan-minus:before{content:\"\"}.bosch-ic-fan-plus:before{content:\"\"}.bosch-ic-home-drops-0:before{content:\"\"}.bosch-ic-home-drops-1:before{content:\"\"}.bosch-ic-home-drops-2:before{content:\"\"}.bosch-ic-home-drops-3:before{content:\"\"}.bosch-ic-home-temperature-in:before{content:\"\"}.bosch-ic-home-temperature-out:before{content:\"\"}.bosch-ic-home-user-in:before{content:\"\"}.bosch-ic-ice-minus:before{content:\"\"}.bosch-ic-ice-plus:before{content:\"\"}.bosch-ic-chimney-sweeper:before{content:\"\"}.bosch-ic-menu-up:before{content:\"\"}.bosch-ic-security-ice:before{content:\"\"}.bosch-ic-security-legionella:before{content:\"\"}.bosch-ic-trolley-case:before{content:\"\"}.bosch-ic-sun-minus:before{content:\"\"}.bosch-ic-sun-plug:before{content:\"\"}.bosch-ic-sun-plus:before{content:\"\"}.bosch-ic-touch-pit:before{content:\"\"}.bosch-ic-temperature-current:before{content:\"\"}.bosch-ic-temperature-set:before{content:\"\"}.bosch-ic-teddy-bear:before{content:\"\"}.bosch-ic-document-svg:before{content:\"\"}.bosch-ic-back-menu:before{content:\"\"}.bosch-ic-car-arrows:before{content:\"\"}.bosch-ic-wrench-cloud:before{content:\"\"}.bosch-ic-weather-cloud-sun:before{content:\"\"}.bosch-ic-weather-cloudy:before{content:\"\"}.bosch-ic-weather-gale:before{content:\"\"}.bosch-ic-weather-mist:before{content:\"\"}.bosch-ic-weather-moon-cloud:before{content:\"\"}.bosch-ic-weather-rain-snow:before{content:\"\"}.bosch-ic-weather-rain-thunder:before{content:\"\"}.bosch-ic-weather-rain:before{content:\"\"}.bosch-ic-weather-snow:before{content:\"\"}.bosch-ic-weather-thunder:before{content:\"\"}.bosch-ic-weather-wind:before{content:\"\"}.bosch-ic-plane-start:before{content:\"\"}.bosch-ic-plane-land:before{content:\"\"}.bosch-ic-graph-power:before{content:\"\"}.bosch-ic-floorplan:before{content:\"\"}.bosch-ic-clock-pause:before{content:\"\"}.bosch-ic-clock-start:before{content:\"\"}.bosch-ic-clock-stop:before{content:\"\"}.bosch-ic-computer-retro:before{content:\"\"}.bosch-ic-smartphone-retro:before{content:\"\"}.bosch-ic-wood:before{content:\"\"}.bosch-ic-solid-fuel:before{content:\"\"}.bosch-ic-appliance-fan:before{content:\"\"}.bosch-ic-appliance-flame:before{content:\"\"}.bosch-ic-appliance-ice:before{content:\"\"}.bosch-ic-appliance-oil:before{content:\"\"}.bosch-ic-appliance-solid-fuel:before{content:\"\"}.bosch-ic-appliance-sun-ice:before{content:\"\"}.bosch-ic-appliance-sun:before{content:\"\"}.bosch-ic-appliance-wood:before{content:\"\"}.bosch-ic-appliance-air-leaf:before{content:\"\"}.bosch-ic-appliance-water-air:before{content:\"\"}.bosch-ic-appliance-water-leaf:before{content:\"\"}.bosch-ic-appliance-water-oil:before{content:\"\"}.bosch-ic-appliance-water:before{content:\"\"}.bosch-ic-appliance-heat-pump-air:before{content:\"\"}.bosch-ic-appliance-heat-pump-ground:before{content:\"\"}.bosch-ic-appliance-heat-pump-water:before{content:\"\"}.bosch-ic-appliance-plug-air:before{content:\"\"}.bosch-ic-appliance-plug-fuel-cell:before{content:\"\"}.bosch-ic-appliance-plug-leaf:before{content:\"\"}.bosch-ic-appliance-plug-water-air:before{content:\"\"}.bosch-ic-thermostat-connected-c:before{content:\"\"}.bosch-ic-thermostat-connected-f:before{content:\"\"}.bosch-ic-image-gallery:before{content:\"\"}.bosch-ic-arrows-caution:before{content:\"\"}.bosch-ic-arrows-diagonal-disabled-bold:before{content:\"\"}.bosch-ic-back-left-end:before{content:\"\"}.bosch-ic-back-right-end:before{content:\"\"}.bosch-ic-bar-chart-search:before{content:\"\"}.bosch-ic-batch:before{content:\"\"}.bosch-ic-calendar-remove:before{content:\"\"}.bosch-ic-call-bluetooth:before{content:\"\"}.bosch-ic-call-deny:before{content:\"\"}.bosch-ic-call-settings:before{content:\"\"}.bosch-ic-caution-sign-clock:before{content:\"\"}.bosch-ic-caution-sign-list:before{content:\"\"}.bosch-ic-core-data:before{content:\"\"}.bosch-ic-cursor-connected:before{content:\"\"}.bosch-ic-cursor:before{content:\"\"}.bosch-ic-dmc-code:before{content:\"\"}.bosch-ic-find-id:before{content:\"\"}.bosch-ic-globe-search:before{content:\"\"}.bosch-ic-interface:before{content:\"\"}.bosch-ic-material-add-manually:before{content:\"\"}.bosch-ic-material-list:before{content:\"\"}.bosch-ic-material-remove-manually:before{content:\"\"}.bosch-ic-material:before{content:\"\"}.bosch-ic-menu-checkmark:before{content:\"\"}.bosch-ic-qr-code:before{content:\"\"}.bosch-ic-sort-alphabetically:before{content:\"\"}.bosch-ic-unpin-classic-disabled-bold:before{content:\"\"}.bosch-ic-unpin-modern-disabled-bold:before{content:\"\"}.bosch-ic-window-search:before{content:\"\"}.bosch-ic-cloud-clock:before{content:\"\"}.bosch-ic-concierge:before{content:\"\"}.bosch-ic-heating-radiator:before{content:\"\"}.bosch-ic-home-user-out:before{content:\"\"}.bosch-ic-hot:before{content:\"\"}.bosch-ic-screen-service:before{content:\"\"}.bosch-ic-sun-ice:before{content:\"\"}.bosch-ic-sun-off-disabled-bold:before{content:\"\"}.bosch-ic-tractor:before{content:\"\"}.bosch-ic-video-recorder-digital:before{content:\"\"}.bosch-ic-windshield-wiper:before{content:\"\"}.bosch-ic-weather-snow-thunder:before{content:\"\"}.bosch-ic-electricity-pylon:before{content:\"\"}.bosch-ic-box-questionmark:before{content:\"\"}.bosch-ic-rainbow:before{content:\"\"}.bosch-ic-medal:before{content:\"\"}.bosch-ic-wheel:before{content:\"\"}.bosch-ic-borescope-connected:before{content:\"\"}.bosch-ic-filter-delete:before{content:\"\"}.bosch-ic-filter-add:before{content:\"\"}.bosch-ic-man:before{content:\"\"}.bosch-ic-woman:before{content:\"\"}.bosch-ic-fridge:before{content:\"\"}.bosch-ic-battery-car:before{content:\"\"}.bosch-ic-bag-escalator:before{content:\"\"}.bosch-ic-shopping-bags:before{content:\"\"}.bosch-ic-car-steering-left:before{content:\"\"}.bosch-ic-car-steering-right:before{content:\"\"}.bosch-ic-thumb-up-down:before{content:\"\"}.bosch-ic-user-run-detection:before{content:\"\"}.bosch-ic-bank:before{content:\"\"}.bosch-ic-transportation:before{content:\"\"}.bosch-ic-government:before{content:\"\"}.bosch-ic-user-music:before{content:\"\"}.bosch-ic-bus:before{content:\"\"}.bosch-ic-car-euro:before{content:\"\"}.bosch-ic-bag:before{content:\"\"}.bosch-ic-plate-tetrapack:before{content:\"\"}.bosch-ic-hospital:before{content:\"\"}.bosch-ic-desktop-structure:before{content:\"\"}.bosch-ic-frog-head:before{content:\"\"}.bosch-ic-sportboat:before{content:\"\"}.bosch-ic-yacht:before{content:\"\"}.bosch-ic-leaf-tilia:before{content:\"\"}.bosch-ic-music:before{content:\"\"}.bosch-ic-oil-lamp:before{content:\"\"}.bosch-ic-windshield-wiper-rear:before{content:\"\"}.bosch-ic-dongle-connected:before{content:\"\"}.bosch-ic-slate:before{content:\"\"}.bosch-ic-appliance-heat-pump-exhaust:before{content:\"\"}.bosch-ic-alert-list:before{content:\"\"}.bosch-ic-arrow-left-end-frame:before{content:\"\"}.bosch-ic-arrow-right-end-frame:before{content:\"\"}.bosch-ic-shape-ellipse:before{content:\"\"}.bosch-ic-shape-rectangle:before{content:\"\"}.bosch-ic-wishlist-add:before{content:\"\"}.bosch-ic-smartphone-disabled-light:before{content:\"\"}.bosch-ic-airbag:before{content:\"\"}.bosch-ic-compass:before{content:\"\"}.bosch-ic-turbine-wind:before{content:\"\"}.bosch-ic-arrows-diagonal-disabled-light:before{content:\"\"}.bosch-ic-ear-off-disabled-bold:before{content:\"\"}.bosch-ic-fan-off-disabled-light:before{content:\"\"}.bosch-ic-faucet-off-disabled-light:before{content:\"\"}.bosch-ic-hand-motion-off-disabled-bold:before{content:\"\"}.bosch-ic-heating-floor-off-disabled-light:before{content:\"\"}.bosch-ic-heating-radiator-off-disabled-light:before{content:\"\"}.bosch-ic-ice-off-disabled-light:before{content:\"\"}.bosch-ic-smartphone-disabled-bold:before{content:\"\"}.bosch-ic-subtitles-off-bold:before{content:\"\"}.bosch-ic-sun-off-disabled-light:before{content:\"\"}.bosch-ic-video-disabled-bold:before{content:\"\"}.bosch-ic-volume-off-bold:before{content:\"\"}.bosch-ic-watch-off-disabled-bold:before{content:\"\"}.bosch-ic-water-shower-off-disabled-light:before{content:\"\"}.bosch-ic-3d-frame-play:before{content:\"\"}.bosch-ic-alert-error-checkmark:before{content:\"\"}.bosch-ic-arrow-up-frame-check:before{content:\"\"}.bosch-ic-arrow-up-frame-error:before{content:\"\"}.bosch-ic-arrows-checkmark:before{content:\"\"}.bosch-ic-assembly-line-settings:before{content:\"\"}.bosch-ic-augmented-reality-player:before{content:\"\"}.bosch-ic-bar-chart-kappa:before{content:\"\"}.bosch-ic-bar-chart-search-detail:before{content:\"\"}.bosch-ic-barcode-checkmark:before{content:\"\"}.bosch-ic-barcode-scan-bulb:before{content:\"\"}.bosch-ic-barcode:before{content:\"\"}.bosch-ic-binary:before{content:\"\"}.bosch-ic-book-lightbulb:before{content:\"\"}.bosch-ic-box-arrow-down:before{content:\"\"}.bosch-ic-box-delivery-checkmark:before{content:\"\"}.bosch-ic-globe-checkmark:before{content:\"\"}.bosch-ic-calendar-boxes:before{content:\"\"}.bosch-ic-calendar-service:before{content:\"\"}.bosch-ic-camera-processor:before{content:\"\"}.bosch-ic-camera-settings:before{content:\"\"}.bosch-ic-chart-line-checkmark:before{content:\"\"}.bosch-ic-checklist-stack:before{content:\"\"}.bosch-ic-checkmark-frame-minimum:before{content:\"\"}.bosch-ic-checkmark-frame-tripple:before{content:\"\"}.bosch-ic-clipboard-checkmark:before{content:\"\"}.bosch-ic-clipboard-list-parts:before{content:\"\"}.bosch-ic-clipboard-settings:before{content:\"\"}.bosch-ic-computer-tower-box:before{content:\"\"}.bosch-ic-connectivity-lock:before{content:\"\"}.bosch-ic-counter-current:before{content:\"\"}.bosch-ic-counter-target:before{content:\"\"}.bosch-ic-cube-checkmark:before{content:\"\"}.bosch-ic-cube-play:before{content:\"\"}.bosch-ic-time-line-settings:before{content:\"\"}.bosch-ic-time-line-view:before{content:\"\"}.bosch-ic-time-line:before{content:\"\"}.bosch-ic-delivery-checkmark:before{content:\"\"}.bosch-ic-desktop-application-3d-play:before{content:\"\"}.bosch-ic-desktop-apps-download:before{content:\"\"}.bosch-ic-desktop-dashboard:before{content:\"\"}.bosch-ic-desktop-graph-checkmark:before{content:\"\"}.bosch-ic-desktop-graph-search:before{content:\"\"}.bosch-ic-desktop-graph:before{content:\"\"}.bosch-ic-development-kit:before{content:\"\"}.bosch-ic-directory-cloud-settings:before{content:\"\"}.bosch-ic-directory-cloud:before{content:\"\"}.bosch-ic-directory-settings:before{content:\"\"}.bosch-ic-document-clock-cycle:before{content:\"\"}.bosch-ic-document-code-stack:before{content:\"\"}.bosch-ic-document-dat-edit:before{content:\"\"}.bosch-ic-document-ohd-arrow-down:before{content:\"\"}.bosch-ic-dolphin:before{content:\"\"}.bosch-ic-energy-management:before{content:\"\"}.bosch-ic-eraser:before{content:\"\"}.bosch-ic-folder-broom:before{content:\"\"}.bosch-ic-folder-check-broom:before{content:\"\"}.bosch-ic-folder-checkmark:before{content:\"\"}.bosch-ic-folder-oes-check:before{content:\"\"}.bosch-ic-folder-open-service:before{content:\"\"}.bosch-ic-folder-reload:before{content:\"\"}.bosch-ic-hand-command:before{content:\"\"}.bosch-ic-heating-start:before{content:\"\"}.bosch-ic-hierarchy-refresh:before{content:\"\"}.bosch-ic-hierarchy-search:before{content:\"\"}.bosch-ic-hierarchy-settings:before{content:\"\"}.bosch-ic-hierarchy:before{content:\"\"}.bosch-ic-hmi-desktop-settings:before{content:\"\"}.bosch-ic-human-machine-interface:before{content:\"\"}.bosch-ic-keys-user-access:before{content:\"\"}.bosch-ic-keys:before{content:\"\"}.bosch-ic-label-edit:before{content:\"\"}.bosch-ic-line-arrow-checkmark:before{content:\"\"}.bosch-ic-link-checkmark:before{content:\"\"}.bosch-ic-lock-closed-checkmark:before{content:\"\"}.bosch-ic-lock-open-checkmark:before{content:\"\"}.bosch-ic-material-search:before{content:\"\"}.bosch-ic-objects-search:before{content:\"\"}.bosch-ic-objects:before{content:\"\"}.bosch-ic-plan-a-to-b:before{content:\"\"}.bosch-ic-plan-chart:before{content:\"\"}.bosch-ic-print-send:before{content:\"\"}.bosch-ic-refresh-analysis:before{content:\"\"}.bosch-ic-remote-desktop-add:before{content:\"\"}.bosch-ic-rfid-checkmark:before{content:\"\"}.bosch-ic-rfid-tag:before{content:\"\"}.bosch-ic-sequence-checkmark:before{content:\"\"}.bosch-ic-server-arrow-up:before{content:\"\"}.bosch-ic-server-arrows:before{content:\"\"}.bosch-ic-server-settings:before{content:\"\"}.bosch-ic-server-share:before{content:\"\"}.bosch-ic-settings-editor:before{content:\"\"}.bosch-ic-survey-checkmark:before{content:\"\"}.bosch-ic-target-dart:before{content:\"\"}.bosch-ic-target-view:before{content:\"\"}.bosch-ic-target:before{content:\"\"}.bosch-ic-thickness-selection:before{content:\"\"}.bosch-ic-toolbox-checkmark:before{content:\"\"}.bosch-ic-toolbox:before{content:\"\"}.bosch-ic-translate:before{content:\"\"}.bosch-ic-tune-vertical-checkmark:before{content:\"\"}.bosch-ic-wand-user-add:before{content:\"\"}.bosch-ic-wand-user-settings:before{content:\"\"}.bosch-ic-wand-user:before{content:\"\"}.bosch-ic-window-globe:before{content:\"\"}.bosch-ic-wrench-change:before{content:\"\"}.bosch-ic-clock-24-7:before{content:\"\"}.bosch-ic-eagle:before{content:\"\"}.bosch-ic-fluorescent-light:before{content:\"\"}.bosch-ic-home-cloud-0:before{content:\"\"}.bosch-ic-home-cloud-1:before{content:\"\"}.bosch-ic-home-cloud-2:before{content:\"\"}.bosch-ic-home-cloud-3:before{content:\"\"}.bosch-ic-home-shadow:before{content:\"\"}.bosch-ic-motorcycle-sport:before{content:\"\"}.bosch-ic-smartphone-connected:before{content:\"\"}.bosch-ic-usb-stick:before{content:\"\"}.bosch-ic-user--setting:before{content:\"\"}.bosch-ic-time-line-clock:before{content:\"\"}.bosch-ic-alarm-fire:before{content:\"\"}.bosch-ic-emergency-front:before{content:\"\"}.bosch-ic-transporter-front:before{content:\"\"}.bosch-ic-truck-front:before{content:\"\"}.bosch-ic-unpin-classic-disabled-light:before{content:\"\"}.bosch-ic-unpin-modern-disabled-light:before{content:\"\"}.bosch-ic-smartphone-ban:before{content:\"\"}.bosch-ic-helmet:before{content:\"\"}.bosch-ic-gate-closed:before{content:\"\"}.bosch-ic-fence:before{content:\"\"}.bosch-ic-desktop-apps:before{content:\"\"}.bosch-ic-candle:before{content:\"\"}.bosch-ic-abort-frame:before{content:\"\"}.bosch-ic-arrow-down-frame:before{content:\"\"}.bosch-ic-arrow-left-down-frame:before{content:\"\"}.bosch-ic-arrow-left-frame:before{content:\"\"}.bosch-ic-arrow-left-up-frame:before{content:\"\"}.bosch-ic-arrow-right-down-frame:before{content:\"\"}.bosch-ic-arrow-right-frame:before{content:\"\"}.bosch-ic-arrow-right-up-frame:before{content:\"\"}.bosch-ic-arrow-up-frame:before{content:\"\"}.bosch-ic-asiapacific-frame:before{content:\"\"}.bosch-ic-cash-frame:before{content:\"\"}.bosch-ic-checkmark-frame:before{content:\"\"}.bosch-ic-copyright-frame:before{content:\"\"}.bosch-ic-download-frame:before{content:\"\"}.bosch-ic-europe-frame:before{content:\"\"}.bosch-ic-lock-closed-frame:before{content:\"\"}.bosch-ic-lock-open-frame:before{content:\"\"}.bosch-ic-my-brand-frame:before{content:\"\"}.bosch-ic-northamerica-frame:before{content:\"\"}.bosch-ic-problem-frame:before{content:\"\"}.bosch-ic-promotion-frame:before{content:\"\"}.bosch-ic-question-frame:before{content:\"\"}.bosch-ic-share-frame:before{content:\"\"}.bosch-ic-southamerica-frame:before{content:\"\"}.bosch-ic-start-play-frame:before{content:\"\"}.bosch-ic-upload-frame:before{content:\"\"}.bosch-ic-world-frame:before{content:\"\"}.bosch-ic-add-frame:before{content:\"\"}.bosch-ic-call-deny-frame:before{content:\"\"}.bosch-ic-call-frame:before{content:\"\"}.bosch-ic-fast-backward-frame:before{content:\"\"}.bosch-ic-fast-forward-frame:before{content:\"\"}.bosch-ic-skip-backward-frame:before{content:\"\"}.bosch-ic-skip-fast-backward-frame:before{content:\"\"}.bosch-ic-skip-fast-forward-frame:before{content:\"\"}.bosch-ic-skip-forward-frame:before{content:\"\"}.bosch-ic-subtract-frame:before{content:\"\"}.bosch-ic-facebook-frame:before{content:\"\"}.bosch-ic-googleplus-frame:before{content:\"\"}.bosch-ic-instagram-frame:before{content:\"\"}.bosch-ic-lineapp-frame:before{content:\"\"}.bosch-ic-linkedin-frame:before{content:\"\"}.bosch-ic-pinterest-frame:before{content:\"\"}.bosch-ic-snapchat-frame:before{content:\"\"}.bosch-ic-tumblr-frame:before{content:\"\"}.bosch-ic-twitter-frame:before{content:\"\"}.bosch-ic-vimeo-frame:before{content:\"\"}.bosch-ic-wechat-frame:before{content:\"\"}.bosch-ic-weibo-frame:before{content:\"\"}.bosch-ic-whatsapp-frame:before{content:\"\"}.bosch-ic-xing-frame:before{content:\"\"}.bosch-ic-youku-frame:before{content:\"\"}.bosch-ic-youtube-frame:before{content:\"\"}.bosch-ic-vk-frame:before{content:\"\"}.bosch-ic-skype-frame:before{content:\"\"}.bosch-ic-alert-error-filled:before{content:\"\"}.bosch-ic-alert-error:before{content:\"\"}.bosch-ic-alert-success-filled:before{content:\"\"}.bosch-ic-alert-success:before{content:\"\"}.bosch-ic-alert-warning-filled:before{content:\"\"}.bosch-ic-alert-warning:before{content:\"\"}/*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.Bosch-IC-find-part:before{content:\"\"}.Bosch-IC-next-station:before{content:\"\"}.Bosch-Ic-HMI:before{content:\"\"}.Bosch-Ic-add-outline:before{content:\"\"}.Bosch-Ic-apas:before{content:\"\"}.Bosch-Ic-abort:before,.bosch-ic-abort:before{content:\"\"}.Bosch-Ic-cash:before{content:\"\"}.Bosch-Ic-pinterest:before{content:\"\"}.Bosch-Ic-problem:before{content:\"\"}.Bosch-Ic-promotion:before{content:\"\"}.Bosch-Ic-arrow-diagonal:before{content:\"\"}.Bosch-Ic-arrow-down-filled:before{content:\"\"}.Bosch-Ic-arrow-down-circle:before{content:\"\"}.Bosch-Ic-arrow-end-left:before{content:\"\"}.Bosch-Ic-arrow-end-right:before{content:\"\"}.Bosch-Ic-arrow-left-down-filled:before{content:\"\"}.Bosch-Ic-arrow-left-filled:before{content:\"\"}.Bosch-Ic-arrow-left-up-filled:before{content:\"\"}.Bosch-Ic-arrow-right-down-filled:before{content:\"\"}.Bosch-Ic-arrow-right-filled:before{content:\"\"}.Bosch-Ic-arrow-right-up-filled:before{content:\"\"}.Bosch-Ic-arrow-up-filled:before{content:\"\"}.Bosch-Ic-batch:before{content:\"\"}.Bosch-Ic-calculator:before{content:\"\"}.Bosch-Ic-calendar-delete:before{content:\"\"}.Bosch-Ic-call-bluetooth:before{content:\"\"}.Bosch-Ic-call-deny-outline:before{content:\"\"}.Bosch-Ic-call-deny:before{content:\"\"}.Bosch-Ic-call-pick-up-outline:before{content:\"\"}.Bosch-Ic-call-pick-up:before{content:\"\"}.Bosch-Ic-call-settings:before{content:\"\"}.Bosch-Ic-clear-all-annotations:before{content:\"\"}.Bosch-Ic-connection:before{content:\"\"}.Bosch-Ic-core-data:before{content:\"\"}.Bosch-Ic-curve-scaling-view:before{content:\"\"}.Bosch-Ic-dashboard:before{content:\"\"}.Bosch-Ic-delete-material-manually:before{content:\"\"}.Bosch-Ic-dmc-code:before{content:\"\"}.Bosch-Ic-document-to-svg:before{content:\"\"}.Bosch-Ic-emergency-order:before{content:\"\"}.Bosch-Ic-fast-backwards:before{content:\"\"}.Bosch-Ic-fast-forwards:before{content:\"\"}.Bosch-Ic-favorite:before{content:\"\"}.Bosch-Ic-go-to:before{content:\"\"}.Bosch-Ic-gps:before{content:\"\"}.Bosch-Ic-home-filled:before{content:\"\"}.Bosch-Ic-input:before{content:\"\"}.Bosch-Ic-interface:before{content:\"\"}.Bosch-Ic-list:before{content:\"\"}.Bosch-Ic-malfunction-history:before{content:\"\"}.Bosch-Ic-malfunction-order:before{content:\"\"}.Bosch-Ic-material-list:before{content:\"\"}.Bosch-Ic-material:before{content:\"\"}.Bosch-Ic-maximize-window:before{content:\"\"}.Bosch-Ic-menu-tree:before{content:\"\"}.Bosch-Ic-minimize-window:before{content:\"\"}.Bosch-Ic-notification-hint:before{content:\"\"}.Bosch-Ic-notification-question:before{content:\"\"}.Bosch-Ic-notification-error:before{content:\"\"}.Bosch-Ic-notification-outline:before{content:\"\"}.Bosch-Ic-notification-success:before{content:\"\"}.Bosch-Ic-notification-warning:before{content:\"\"}.Bosch-Ic-notification:before{content:\"\"}.Bosch-Ic-output:before{content:\"\"}.Bosch-Ic-paste:before{content:\"\"}.Bosch-Ic-qr-code:before{content:\"\"}.Bosch-Ic-remote-cursor:before{content:\"\"}.Bosch-Ic-scale:before{content:\"\"}.Bosch-Ic-search-chart:before{content:\"\"}.Bosch-Ic-search-web:before{content:\"\"}.Bosch-Ic-search-window:before{content:\"\"}.Bosch-Ic-shape-ellipse:before{content:\"\"}.Bosch-Ic-shape-rectangle:before{content:\"\"}.Bosch-Ic-show-more-vertical:before{content:\"\"}.Bosch-Ic-signal:before{content:\"\"}.Bosch-Ic-skip-back:before{content:\"\"}.Bosch-Ic-skip-backward:before{content:\"\"}.Bosch-Ic-StarterKit:before{content:\"\"}.Bosch-Ic-skip-for:before{content:\"\"}.Bosch-Ic-skip-forward:before{content:\"\"}.Bosch-Ic-sort-alphabetically:before{content:\"\"}.Bosch-Ic-switch-language:before{content:\"\"}.Bosch-Ic-snyc-disabled:before{content:\"\"}.Bosch-Ic-sync-disabled:before{content:\"\"}.Bosch-Ic-sync-problem:before{content:\"\"}.Bosch-Ic-sync:before{content:\"\"}.Bosch-Ic-test:before{content:\"\"}.Bosch-Ic-to-order:before{content:\"\"}.Bosch-Ic-to-raw:before{content:\"\"}.Bosch-Ic-transport-orders:before{content:\"\"}.Bosch-Ic-unpin:before{content:\"\"}.Bosch-Ic-user-filled:before{content:\"\"}.Bosch-Ic-video-play:before{content:\"\"}.Bosch-Ic-weblink:before{content:\"\"}.Bosch-Ic-warning-outline:before{content:\"\"}.Bosch-Ic-add-material-manually:before{content:\"\"}.Bosch-Ic-add-material:before{content:\"\"}.Bosch-Ic-add:before{content:\"\"}.Bosch-Ic-adress-consumer:before{content:\"\"}.Bosch-Ic-adressbook:before{content:\"\"}.Bosch-Ic-alarm:before{content:\"\"}.Bosch-Ic-alert:before{content:\"\"}.Bosch-Ic-analysis:before{content:\"\"}.Bosch-Ic-anchor:before{content:\"\"}.Bosch-IC-3d-print:before{content:\"\"}.Bosch-Ic-tours:before{content:\"\"}.Bosch-Ic-add:before{content:\"\"}.Bosch-Ic-adress-consumer:before{content:\"\"}.Bosch-Ic-adressbook:before{content:\"\"}.Bosch-IC-agility:before{content:\"\"}.Bosch-Ic-clock-stop:before{content:\"\"}.Bosch-IC-ambulance:before{content:\"\"}.Bosch-Ic-analysis:before{content:\"\"}.Bosch-Ic-anchor:before{content:\"\"}.Bosch-Ic-arrow-down:before{content:\"\"}.Bosch-Ic-arrow-left:before{content:\"\"}.Bosch-Ic-arrow-left-down:before{content:\"\"}.Bosch-Ic-arrow-left-up:before{content:\"\"}.Bosch-Ic-arrow-right:before{content:\"\"}.Bosch-Ic-arrow-right-down:before{content:\"\"}.Bosch-Ic-arrow-right-up:before{content:\"\"}.Bosch-IC-arrow-turn-left:before{content:\"\"}.Bosch-IC-arrow-turn-right:before{content:\"\"}.Bosch-Ic-arrow-up:before{content:\"\"}.Bosch-IC-arrows:before{content:\"\"}.Bosch-IC-arrows-x-y-z:before{content:\"\"}.Bosch-IC-artificial-intelligence:before{content:\"\"}.Bosch-IC-assembly-line:before{content:\"\"}.Bosch-IC-atom:before{content:\"\"}.Bosch-IC-augmented-reality:before{content:\"\"}.Bosch-Ic-autobod:before{content:\"\"}.Bosch-Ic-arrow-expand-left:before{content:\"\"}.Bosch-Ic-arrow-expand-double-left:before{content:\"\"}.Bosch-IC-bar-chart:before{content:\"\"}.Bosch-IC-bar-chart-double:before{content:\"\"}.Bosch-Ic-battery-empty:before{content:\"\"}.Bosch-Ic-battery-25:before{content:\"\"}.Bosch-Ic-battery-50:before{content:\"\"}.Bosch-Ic-battery-75:before{content:\"\"}.Bosch-Ic-battery-100:before{content:\"\"}.Bosch-Ic-battery-error:before{content:\"\"}.Bosch-IC-battery_Li-Ion:before{content:\"\"}.Bosch-Ic-battery-charging:before{content:\"\"}.Bosch-Ic-help:before{content:\"\"}.Bosch-IC-bed:before{content:\"\"}.Bosch-IC-bicycle:before{content:\"\"}.Bosch-IC-bicycle-e:before{content:\"\"}.Bosch-IC-blog:before{content:\"\"}.Bosch-IC-bluetooth:before{content:\"\"}.Bosch-IC-bluetooth-LE:before{content:\"\"}.Bosch-IC-board-speaker:before{content:\"\"}.Bosch-IC-boiler-connected:before{content:\"\"}.Bosch-IC-book:before{content:\"\"}.Bosch-Ic-bookmark:before{content:\"\"}.Bosch-Ic-bookmark-add:before{content:\"\"}.Bosch-Ic-bookmark-check:before{content:\"\"}.Bosch-Ic-bookmark-delete:before{content:\"\"}.Bosch-IC-books:before{content:\"\"}.Bosch-IC-bookshelf:before{content:\"\"}.Bosch-Ic-box:before{content:\"\"}.Bosch-IC-box-closed:before{content:\"\"}.Bosch-IC-box-delivery:before{content:\"\"}.Bosch-IC-box-delivery-connected:before{content:\"\"}.Bosch-IC-brake-disk:before{content:\"\"}.Bosch-IC-briefcase:before{content:\"\"}.Bosch-IC-broom:before{content:\"\"}.Bosch-IC-broom-cloud-dirt:before{content:\"\"}.Bosch-Ic-brush:before{content:\"\"}.Bosch-Ic-bug:before{content:\"\"}.Bosch-IC-building:before{content:\"\"}.Bosch-IC-cactus:before{content:\"\"}.Bosch-IC-calculate:before{content:\"\"}.Bosch-Ic-calendar:before{content:\"\"}.Bosch-Ic-calendar-add:before{content:\"\"}.Bosch-IC-calendar-settings:before{content:\"\"}.Bosch-Ic-call:before{content:\"\"}.Bosch-IC-call-add:before{content:\"\"}.Bosch-IC-call-remove:before{content:\"\"}.Bosch-IC-call-sos:before{content:\"\"}.Bosch-IC-call-team:before{content:\"\"}.Bosch-Ic-call-wifi:before{content:\"\"}.Bosch-Ic-camera:before{content:\"\"}.Bosch-Ic-camera-switch:before{content:\"\"}.Bosch-IC-car:before{content:\"\"}.Bosch-IC-car-clock:before{content:\"\"}.Bosch-IC-car-connected:before{content:\"\"}.Bosch-IC-car-locator:before{content:\"\"}.Bosch-IC-car-mechanic:before{content:\"\"}.Bosch-IC-car-rental:before{content:\"\"}.Bosch-IC-car-seat-connected:before{content:\"\"}.Bosch-IC-car-side:before{content:\"\"}.Bosch-IC-car-side-user:before{content:\"\"}.Bosch-Ic-milkrun-cart:before{content:\"\"}.Bosch-Ic-certificate:before{content:\"\"}.Bosch-IC-certificate-pki:before{content:\"\"}.Bosch-IC-change:before{content:\"\"}.Bosch-Ic-chart:before{content:\"\"}.Bosch-IC-chart-check:before{content:\"\"}.Bosch-IC-chart-dummy:before{content:\"\"}.Bosch-Ic-diagram:before{content:\"\"}.Bosch-Ic-chat:before{content:\"\"}.Bosch-IC-chat-add:before{content:\"\"}.Bosch-IC-chat-question-answer:before{content:\"\"}.Bosch-IC-chat-remove:before{content:\"\"}.Bosch-Ic-checklist:before{content:\"\"}.Bosch-Ic-checkmark:before{content:\"\"}.Bosch-Ic-chip:before{content:\"\"}.Bosch-IC-circle-segment:before{content:\"\"}.Bosch-IC-clear-all:before{content:\"\"}.Bosch-Ic-clipboard:before{content:\"\"}.Bosch-Ic-clipboard-list:before{content:\"\"}.Bosch-Ic-clock:before{content:\"\"}.Bosch-Ic-abort:before,.bosch-ic-abort:before{content:\"\"}.Bosch-IC-close-all:before{content:\"\"}.Bosch-Ic-cloud:before{content:\"\"}.Bosch-IC-cloud-co2:before{content:\"\"}.Bosch-Ic-cloud-download:before{content:\"\"}.Bosch-IC-cloud-nox:before{content:\"\"}.Bosch-Ic-cloud-upload:before{content:\"\"}.Bosch-IC-club-arm-chair:before{content:\"\"}.Bosch-IC-coffee-break:before{content:\"\"}.Bosch-IC-coin-currency:before{content:\"\"}.Bosch-Ic-currency:before{content:\"\"}.Bosch-Ic-color-picker:before{content:\"\"}.Bosch-IC-colors:before{content:\"\"}.Bosch-Ic-command:before{content:\"\"}.Bosch-IC-communicator:before{content:\"\"}.Bosch-Ic-compare:before{content:\"\"}.Bosch-Ic-components:before{content:\"\"}.Bosch-Ic-components-available:before{content:\"\"}.Bosch-Ic-components-reservation:before{content:\"\"}.Bosch-IC-concierge-bell:before{content:\"\"}.Bosch-IC-configuration:before{content:\"\"}.Bosch-Ic-confirmation:before{content:\"\"}.Bosch-Ic-unconnected:before{content:\"\"}.Bosch-Ic-connected:before{content:\"\"}.Bosch-IC-connectivity:before{content:\"\"}.Bosch-Ic-builder:before{content:\"\"}.Bosch-IC-consumer-goods:before{content:\"\"}.Bosch-IC-contract:before{content:\"\"}.Bosch-Ic-copy:before{content:\"\"}.Bosch-IC-cube:before{content:\"\"}.Bosch-IC-cube-arrows:before{content:\"\"}.Bosch-Ic-StarterKit:before{content:\"\"}.Bosch-IC-cube-shock:before{content:\"\"}.Bosch-IC-cube-stacked:before{content:\"\"}.Bosch-Ic-customerservice:before{content:\"\"}.Bosch-IC-cutlery:before{content:\"\"}.Bosch-IC-damper:before{content:\"\"}.Bosch-IC-danger-flash:before{content:\"\"}.Bosch-IC-data-loss:before{content:\"\"}.Bosch-Ic-dealer:before{content:\"\"}.Bosch-Ic-delete:before{content:\"\"}.Bosch-Ic-delivery:before{content:\"\"}.Bosch-IC-denied:before{content:\"\"}.Bosch-Ic-desktop:before{content:\"\"}.Bosch-IC-desktop-application-2d:before{content:\"\"}.Bosch-IC-desktop-application-3d:before{content:\"\"}.Bosch-IC-development:before{content:\"\"}.Bosch-Ic-devices:before{content:\"\"}.Bosch-IC-devices-mobile:before{content:\"\"}.Bosch-Ic-directory:before{content:\"\"}.Bosch-Ic-dna:before{content:\"\"}.Bosch-Ic-do-not-disturb:before{content:\"\"}.Bosch-Ic-document:before{content:\"\"}.Bosch-Ic-document-add:before{content:\"\"}.Bosch-IC-document-arrow-down:before{content:\"\"}.Bosch-IC-document-arrow-up:before{content:\"\"}.Bosch-Ic-document-audio:before{content:\"\"}.Bosch-IC-document-check:before{content:\"\"}.Bosch-Ic-document-to-cloud:before{content:\"\"}.Bosch-Ic-document-copy:before{content:\"\"}.Bosch-Ic-document-delete:before{content:\"\"}.Bosch-Ic-document-to-doc:before{content:\"\"}.Bosch-Ic-document-edit:before{content:\"\"}.Bosch-Ic-document-error:before{content:\"\"}.Bosch-Ic-document-locked:before{content:\"\"}.Bosch-Ic-log-file:before{content:\"\"}.Bosch-Ic-document-to-one:before{content:\"\"}.Bosch-Ic-document-to-pdf:before{content:\"\"}.Bosch-Ic-document-plain:before{content:\"\"}.Bosch-Ic-document-plain-add:before{content:\"\"}.Bosch-Ic-document-plain-delete:before{content:\"\"}.Bosch-Ic-document-to-ppt:before{content:\"\"}.Bosch-Ic-document-to-pub:before{content:\"\"}.Bosch-Ic-document-to-rtf:before{content:\"\"}.Bosch-Ic-document-save-to:before{content:\"\"}.Bosch-Ic-search-document:before{content:\"\"}.Bosch-Ic-document-settings:before{content:\"\"}.Bosch-Ic-document-test:before{content:\"\"}.Bosch-Ic-document-text:before{content:\"\"}.Bosch-Ic-document-to-txt:before{content:\"\"}.Bosch-Ic-document-to-vsd:before{content:\"\"}.Bosch-Ic-document-to-xls:before{content:\"\"}.Bosch-Ic-document-to-xml:before{content:\"\"}.Bosch-Ic-document-to-zip:before{content:\"\"}.Bosch-IC-dome:before{content:\"\"}.Bosch-IC-door:before{content:\"\"}.Bosch-IC-door-sensor:before{content:\"\"}.Bosch-Ic-arrow-expand-down:before{content:\"\"}.Bosch-Ic-arrow-expand-double-down:before{content:\"\"}.Bosch-Ic-arrow-left-circle:before{content:\"\"}.Bosch-Ic-arrow-right-circle:before{content:\"\"}.Bosch-Ic-arrow-right-down-circle:before{content:\"\"}.Bosch-Ic-arrow-right-up-circle:before{content:\"\"}.Bosch-Ic-arrow-left-down-circle:before{content:\"\"}.Bosch-Ic-arrow-left-up-circle:before{content:\"\"}.Bosch-Ic-arrow-up-circle:before{content:\"\"}.Bosch-Ic-download:before{content:\"\"}.Bosch-IC-drag-handle:before{content:\"\"}.Bosch-IC-dragdrop:before{content:\"\"}.Bosch-IC-drop:before{content:\"\"}.Bosch-IC-e-Charging:before{content:\"\"}.Bosch-IC-e-mobility:before{content:\"\"}.Bosch-IC-ear-off:before{content:\"\"}.Bosch-IC-ear-on:before{content:\"\"}.Bosch-IC-eco-system:before{content:\"\"}.Bosch-Ic-edit:before{content:\"\"}.Bosch-IC-education:before{content:\"\"}.Bosch-IC-efficiency:before{content:\"\"}.Bosch-IC-elevator:before{content:\"\"}.Bosch-IC-elevator-alarm:before{content:\"\"}.Bosch-IC-elevator-cloud:before{content:\"\"}.Bosch-IC-elevator-headset:before{content:\"\"}.Bosch-IC-elevator-service:before{content:\"\"}.Bosch-IC-emergency-exit:before{content:\"\"}.Bosch-IC-emoji-happy:before{content:\"\"}.Bosch-IC-emoji-neutral:before{content:\"\"}.Bosch-IC-emoji-sad:before{content:\"\"}.Bosch-IC-emoji-super-happy:before{content:\"\"}.Bosch-IC-emoji-very-sad:before{content:\"\"}.Bosch-IC-EU-energy-label:before{content:\"\"}.Bosch-IC-excavator:before{content:\"\"}.Bosch-Ic-exit:before{content:\"\"}.Bosch-IC-expansion-arrows:before{content:\"\"}.Bosch-IC-explosion:before{content:\"\"}.Bosch-Ic-export:before{content:\"\"}.Bosch-IC-externallink:before{content:\"\"}.Bosch-IC-fast-forward:before{content:\"\"}.Bosch-IC-faucet:before{content:\"\"}.Bosch-IC-favorites:before{content:\"\"}.Bosch-IC-fax:before{content:\"\"}.Bosch-IC-female:before{content:\"\"}.Bosch-IC-film:before{content:\"\"}.Bosch-Ic-filter:before{content:\"\"}.Bosch-IC-filter-success:before{content:\"\"}.Bosch-IC-fingerprint:before{content:\"\"}.Bosch-IC-fire:before{content:\"\"}.Bosch-IC-fire-emergency:before{content:\"\"}.Bosch-IC-fireworks:before{content:\"\"}.Bosch-Ic-first-aid:before{content:\"\"}.Bosch-IC-first-aid-cross:before{content:\"\"}.Bosch-IC-fit-to-sceen:before{content:\"\"}.Bosch-Ic-flag:before{content:\"\"}.Bosch-Ic-danger-flash-outline:before{content:\"\"}.Bosch-IC-flask:before{content:\"\"}.Bosch-Ic-flexpress:before{content:\"\"}.Bosch-Ic-twitter:before{content:\"\"}.Bosch-Ic-folder:before{content:\"\"}.Bosch-Ic-download-from-folder:before{content:\"\"}.Bosch-Ic-download-frame:before{content:\"\"}.Bosch-IC-folder-open:before{content:\"\"}.Bosch-Ic-upload-to-folder:before{content:\"\"}.Bosch-Ic-fork-lift:before{content:\"\"}.Bosch-IC-fork-lift-locator:before{content:\"\"}.Bosch-Ic-arrow-expand-right:before{content:\"\"}.Bosch-Ic-arrow-expand-double-right:before{content:\"\"}.Bosch-IC-full-empty:before{content:\"\"}.Bosch-Ic-fullscreen:before{content:\"\"}.Bosch-IC-fullscreen-arrows:before{content:\"\"}.Bosch-Ic-fullscreen-exit:before{content:\"\"}.Bosch-IC-g-arrow-down:before{content:\"\"}.Bosch-IC-g-arrow-up:before{content:\"\"}.Bosch-IC-generator:before{content:\"\"}.Bosch-IC-gift:before{content:\"\"}.Bosch-IC-glance:before{content:\"\"}.Bosch-IC-glas-plate:before{content:\"\"}.Bosch-IC-globe:before{content:\"\"}.Bosch-IC-globe-arrow:before{content:\"\"}.Bosch-IC-glossary:before{content:\"\"}.Bosch-Ic-grid:before{content:\"\"}.Bosch-IC-hammer:before{content:\"\"}.Bosch-Ic-hand:before{content:\"\"}.Bosch-IC-hand-motion:before{content:\"\"}.Bosch-IC-hand-motion-off:before{content:\"\"}.Bosch-IC-handlewithcare:before{content:\"\"}.Bosch-Ic-add-material-manually:before{content:\"\"}.Bosch-Ic-handover-check:before{content:\"\"}.Bosch-Ic-remove-from-handover:before{content:\"\"}.Bosch-IC-hanger:before{content:\"\"}.Bosch-Ic-health:before{content:\"\"}.Bosch-IC-heart:before{content:\"\"}.Bosch-Ic-history:before{content:\"\"}.Bosch-Ic-home-outline:before{content:\"\"}.Bosch-IC-home-locator:before{content:\"\"}.Bosch-Ic-sandclock:before{content:\"\"}.Bosch-IC-hydrant:before{content:\"\"}.Bosch-IC-ice:before{content:\"\"}.Bosch-Ic-image:before{content:\"\"}.Bosch-IC-imagery-add:before{content:\"\"}.Bosch-IC-imagery-remove:before{content:\"\"}.Bosch-Ic-import:before{content:\"\"}.Bosch-Ic-imprint:before{content:\"\"}.Bosch-IC-impulse:before{content:\"\"}.Bosch-Ic-fabric:before{content:\"\"}.Bosch-IC-industry-clock:before{content:\"\"}.Bosch-IC-industry-connected:before{content:\"\"}.Bosch-Ic-information:before{content:\"\"}.Bosch-Ic-information-tooltip:before{content:\"\"}.Bosch-IC-interval:before{content:\"\"}.Bosch-IC-it-device:before{content:\"\"}.Bosch-IC-jewel:before{content:\"\"}.Bosch-IC-keyboard:before{content:\"\"}.Bosch-IC-label:before{content:\"\"}.Bosch-Ic-laptop-01:before{content:\"\"}.Bosch-IC-laser:before{content:\"\"}.Bosch-IC-layout:before{content:\"\"}.Bosch-IC-leaf:before{content:\"\"}.Bosch-IC-led:before{content:\"\"}.Bosch-Ic-world:before{content:\"\"}.Bosch-Ic-facebook:before{content:\"\"}.Bosch-Ic-checkmark-outline:before{content:\"\"}.Bosch-Ic-youtube:before{content:\"\"}.Bosch-Ic-share:before{content:\"\"}.Bosch-Ic-user:before{content:\"\"}.Bosch-Ic-upload_outline:before{content:\"\"}.Bosch-Ic-download_outline:before{content:\"\"}.Bosch-Ic-wishlist-add:before{content:\"\"}.Bosch-Ic-youtube-frame:before{content:\"\"}.Bosch-Ic-less-minimize:before{content:\"\"}.Bosch-IC-lightbulb:before{content:\"\"}.bosch-Ic-innovation:before{content:\"\"}.Bosch-IC-line-chart:before{content:\"\"}.Bosch-Ic-link:before{content:\"\"}.Bosch-IC-link-broken:before{content:\"\"}.Bosch-Ic-list-view:before{content:\"\"}.Bosch-Ic-menu:before{content:\"\"}.Bosch-IC-livechat:before{content:\"\"}.Bosch-Ic-location-pin:before{content:\"\"}.Bosch-IC-locator-ip-connected:before{content:\"\"}.Bosch-IC-locator-ip-disconnected:before{content:\"\"}.Bosch-IC-locator-spot:before{content:\"\"}.Bosch-IC-locator-spot-check:before{content:\"\"}.Bosch-Ic-lock-closed:before{content:\"\"}.Bosch-Ic-lock-open:before{content:\"\"}.Bosch-Ic-log-in:before{content:\"\"}.Bosch-Ic-logistics:before{content:\"\"}.Bosch-Ic-log-out:before{content:\"\"}.Bosch-IC-machine:before{content:\"\"}.Bosch-Ic-magnet:before{content:\"\"}.Bosch-Ic-mail:before{content:\"\"}.Bosch-Ic-mail-forward:before{content:\"\"}.Bosch-Ic-mail-open:before{content:\"\"}.Bosch-Ic-mail-out:before{content:\"\"}.Bosch-Ic-mail-answer:before{content:\"\"}.Bosch-IC-male:before{content:\"\"}.Bosch-Ic-map:before{content:\"\"}.Bosch-Ic-add-material:before{content:\"\"}.Bosch-IC-material-check:before{content:\"\"}.Bosch-Ic-remove-material:before{content:\"\"}.Bosch-IC-maximize:before{content:\"\"}.Bosch-IC-mechanic:before{content:\"\"}.Bosch-IC-megaphone:before{content:\"\"}.Bosch-Ic-message:before{content:\"\"}.Bosch-IC-mic:before{content:\"\"}.Bosch-Ic-microphone:before{content:\"\"}.Bosch-IC-microphone-classic:before{content:\"\"}.Bosch-IC-minimize:before{content:\"\"}.Bosch-IC-money-currency:before{content:\"\"}.Bosch-IC-money-dollar:before{content:\"\"}.Bosch-IC-moneybag-currency:before{content:\"\"}.Bosch-IC-moneybag-dollar:before{content:\"\"}.Bosch-IC-monument:before{content:\"\"}.Bosch-IC-moon:before{content:\"\"}.Bosch-IC-mouse:before{content:\"\"}.Bosch-IC-mouse-left:before{content:\"\"}.Bosch-IC-mouse-right:before{content:\"\"}.Bosch-IC-mouth:before{content:\"\"}.Bosch-Ic-my-product:before{content:\"\"}.Bosch-IC-new-way-work:before{content:\"\"}.Bosch-Ic-mail-sent:before{content:\"\"}.Bosch-Ic-news:before{content:\"\"}.Bosch-IC-nose:before{content:\"\"}.Bosch-Ic-notes:before{content:\"\"}.Bosch-Ic-notes-edit:before{content:\"\"}.Bosch-Ic-alarm:before{content:\"\"}.Bosch-IC-notification-active:before{content:\"\"}.Bosch-IC-notification-add:before{content:\"\"}.Bosch-IC-notification-remove:before{content:\"\"}.Bosch-Ic-oil-trailer:before{content:\"\"}.Bosch-IC-omnichannel:before{content:\"\"}.Bosch-Ic-show-more-horizontal:before{content:\"\"}.Bosch-IC-origami-boat:before{content:\"\"}.Bosch-Ic-palette-trailer:before{content:\"\"}.Bosch-IC-pallete-car-connected:before{content:\"\"}.Bosch-IC-panel:before{content:\"\"}.Bosch-Ic-paperclip:before{content:\"\"}.Bosch-IC-paperplane:before{content:\"\"}.Bosch-IC-parking:before{content:\"\"}.Bosch-Ic-pause:before{content:\"\"}.Bosch-Ic-creditcard:before{content:\"\"}.Bosch-IC-people:before{content:\"\"}.Bosch-IC-petrol-station:before{content:\"\"}.Bosch-IC-piggybank:before{content:\"\"}.Bosch-Ic-pin:before{content:\"\"}.Bosch-IC-pin-modern:before{content:\"\"}.Bosch-IC-plane-side:before{content:\"\"}.Bosch-Ic-play:before{content:\"\"}.Bosch-IC-plug-12V:before{content:\"\"}.Bosch-IC-podium-speaker:before{content:\"\"}.Bosch-IC-police:before{content:\"\"}.Bosch-IC-poop:before{content:\"\"}.Bosch-IC-post-it:before{content:\"\"}.Bosch-IC-postal-code:before{content:\"\"}.Bosch-IC-power:before{content:\"\"}.Bosch-Ic-print:before{content:\"\"}.Bosch-IC-prototyping:before{content:\"\"}.Bosch-IC-puzzle:before{content:\"\"}.Bosch-IC-quad:before{content:\"\"}.Bosch-IC-question:before{content:\"\"}.Bosch-IC-radar:before{content:\"\"}.Bosch-IC-radio:before{content:\"\"}.Bosch-Ic-radio:before{content:\"\"}.Bosch-IC-redirect:before{content:\"\"}.Bosch-Ic-redo:before{content:\"\"}.Bosch-IC-reference:before{content:\"\"}.Bosch-Ic-refresh:before{content:\"\"}.Bosch-IC-refresh-cloud:before{content:\"\"}.Bosch-Ic-registration:before{content:\"\"}.Bosch-IC-remote:before{content:\"\"}.Bosch-Ic-reset:before{content:\"\"}.Bosch-IC-resolution:before{content:\"\"}.Bosch-Ic-robot-automation:before{content:\"\"}.Bosch-IC-robot-connected:before{content:\"\"}.Bosch-IC-robothead:before{content:\"\"}.Bosch-IC-rocket:before{content:\"\"}.Bosch-Ic-rotation:before{content:\"\"}.Bosch-Ic-rotate-360-degrees:before{content:\"\"}.Bosch-Ic-rotate-clockwise:before{content:\"\"}.Bosch-Ic-rotate-counterclockwise:before{content:\"\"}.Bosch-IC-rotation-y-down:before{content:\"\"}.Bosch-IC-rotation-y-up:before{content:\"\"}.Bosch-Ic-navigation:before{content:\"\"}.Bosch-Ic-measure:before{content:\"\"}.Bosch-IC-ruler-pen:before{content:\"\"}.Bosch-Ic-satelite:before{content:\"\"}.Bosch-Ic-save:before{content:\"\"}.Bosch-IC-scale:before{content:\"\"}.Bosch-Ic-cut:before{content:\"\"}.Bosch-Ic-search:before{content:\"\"}.Bosch-IC-security:before{content:\"\"}.Bosch-IC-security-check:before{content:\"\"}.Bosch-IC-security-user:before{content:\"\"}.Bosch-Ic-sensor:before{content:\"\"}.Bosch-Ic-server:before{content:\"\"}.Bosch-IC-server-expansion:before{content:\"\"}.Bosch-IC-server-rate:before{content:\"\"}.Bosch-IC-service-agent:before{content:\"\"}.Bosch-IC-service-time:before{content:\"\"}.Bosch-Ic-settings:before{content:\"\"}.Bosch-IC-settings-arrows:before{content:\"\"}.Bosch-IC-settings-connected:before{content:\"\"}.Bosch-Ic-share-outline:before{content:\"\"}.Bosch-IC-shield-stop:before{content:\"\"}.Bosch-IC-ship:before{content:\"\"}.Bosch-IC-ship-side:before{content:\"\"}.Bosch-Ic-shoppingcart:before{content:\"\"}.Bosch-IC-shoppingcart-add:before{content:\"\"}.Bosch-IC-shoppingcart-switch:before{content:\"\"}.Bosch-IC-signal-full:before{content:\"\"}.Bosch-IC-signal-half:before{content:\"\"}.Bosch-IC-signal-lost:before{content:\"\"}.Bosch-IC-signpost:before{content:\"\"}.Bosch-IC-simcard:before{content:\"\"}.Bosch-IC-skyscraper:before{content:\"\"}.Bosch-IC-smartcity:before{content:\"\"}.Bosch-IC-smarthome:before{content:\"\"}.Bosch-Ic-phone:before{content:\"\"}.Bosch-IC-smartphone-acoustic:before{content:\"\"}.Bosch-IC-smartphone-arrow-right:before{content:\"\"}.Bosch-IC-smartphone-arrows-x-y-z:before{content:\"\"}.Bosch-IC-smartphone-clock:before{content:\"\"}.Bosch-IC-smartphone-cloud:before{content:\"\"}.Bosch-IC-smartphone-loading-wheel:before{content:\"\"}.Bosch-IC-smartphone-smashed:before{content:\"\"}.Bosch-IC-smartphone-vibration:before{content:\"\"}.Bosch-IC-smartphone-z:before{content:\"\"}.Bosch-Ic-spareparts:before{content:\"\"}.Bosch-IC-spark:before{content:\"\"}.Bosch-IC-speaker-acoustic:before{content:\"\"}.Bosch-IC-speedometer:before{content:\"\"}.Bosch-IC-stadium:before{content:\"\"}.Bosch-IC-stairs:before{content:\"\"}.Bosch-IC-stamp:before{content:\"\"}.Bosch-IC-standby:before{content:\"\"}.Bosch-IC-steering-wheel:before{content:\"\"}.Bosch-IC-steering-wheel-connected:before{content:\"\"}.Bosch-IC-steering-wheel-hands:before{content:\"\"}.Bosch-IC-steps:before{content:\"\"}.Bosch-IC-stethoscope:before{content:\"\"}.Bosch-Ic-stop:before{content:\"\"}.Bosch-IC-stopwatch:before{content:\"\"}.Bosch-IC-storage-local:before{content:\"\"}.Bosch-IC-structure:before{content:\"\"}.Bosch-IC-subtitles:before{content:\"\"}.Bosch-Ic-summary:before{content:\"\"}.Bosch-IC-sun:before{content:\"\"}.Bosch-IC-sun-half-filled:before{content:\"\"}.Bosch-IC-sunshade-table:before{content:\"\"}.Bosch-IC-surveillance:before{content:\"\"}.Bosch-IC-table-chairs:before{content:\"\"}.Bosch-Ic-tablet:before{content:\"\"}.Bosch-IC-team:before{content:\"\"}.Bosch-IC-team-lightbulb:before{content:\"\"}.Bosch-IC-technical-service:before{content:\"\"}.Bosch-Ic-temperature:before{content:\"\"}.Bosch-IC-temperature-high:before{content:\"\"}.Bosch-IC-temperature-low:before{content:\"\"}.Bosch-IC-theater:before{content:\"\"}.Bosch-Ic-dislike:before{content:\"\"}.Bosch-Ic-like:before{content:\"\"}.Bosch-Ic-ticket:before{content:\"\"}.Bosch-IC-touch:before{content:\"\"}.Bosch-IC-touch-sos:before{content:\"\"}.Bosch-IC-towing-truck:before{content:\"\"}.Bosch-IC-train:before{content:\"\"}.Bosch-IC-train-side:before{content:\"\"}.Bosch-Ic-transport-movements:before{content:\"\"}.Bosch-IC-transscript:before{content:\"\"}.Bosch-IC-transscript-off:before{content:\"\"}.Bosch-IC-transscript-on:before{content:\"\"}.Bosch-IC-tree:before{content:\"\"}.Bosch-IC-tricycle:before{content:\"\"}.Bosch-Ic-default-trailer:before{content:\"\"}.Bosch-Ic-taxi-trailer:before{content:\"\"}.Bosch-Ic-shelve-trailer:before{content:\"\"}.Bosch-IC-trophy:before{content:\"\"}.Bosch-IC-truck:before{content:\"\"}.Bosch-IC-tuktuk:before{content:\"\"}.Bosch-Ic-tune:before{content:\"\"}.Bosch-IC-typography:before{content:\"\"}.Bosch-IC-ui:before{content:\"\"}.Bosch-IC-umbrella:before{content:\"\"}.Bosch-Ic-undo:before{content:\"\"}.Bosch-Ic-arrow-expand-up:before{content:\"\"}.Bosch-Ic-arrow-expand-double-up:before{content:\"\"}.Bosch-Ic-sort:before{content:\"\"}.Bosch-Ic-upload:before{content:\"\"}.Bosch-IC-usb:before{content:\"\"}.Bosch-Ic-user-outline:before{content:\"\"}.Bosch-IC-user-advanced:before{content:\"\"}.Bosch-IC-user-beginner:before{content:\"\"}.Bosch-IC-user-desktop:before{content:\"\"}.Bosch-IC-user-down:before{content:\"\"}.Bosch-IC-user-falling:before{content:\"\"}.Bosch-IC-user-hand:before{content:\"\"}.Bosch-IC-user-hand-stop:before{content:\"\"}.Bosch-IC-user-professional:before{content:\"\"}.Bosch-IC-user-run:before{content:\"\"}.Bosch-IC-user-share:before{content:\"\"}.Bosch-IC-user-voice:before{content:\"\"}.Bosch-IC-user-walk:before{content:\"\"}.Bosch-Ic-videocam:before{content:\"\"}.Bosch-Ic-videocam-disabled:before{content:\"\"}.Bosch-IC-video-record:before{content:\"\"}.Bosch-IC-virtual-reality:before{content:\"\"}.Bosch-Ic-volume-disabled:before{content:\"\"}.Bosch-Ic-volume-high:before{content:\"\"}.Bosch-Ic-volume-low:before{content:\"\"}.Bosch-Ic-volume-off:before{content:\"\"}.Bosch-Ic-magic-wand:before{content:\"\"}.Bosch-Ic-hidden-project:before{content:\"\"}.Bosch-Ic-show:before{content:\"\"}.Bosch-IC-water-shower:before{content:\"\"}.Bosch-IC-welcome:before{content:\"\"}.Bosch-IC-wellness:before{content:\"\"}.Bosch-IC-wheelchair:before{content:\"\"}.Bosch-Ic-alert:before{content:\"\"}.Bosch-IC-wide-angled-arrow:before{content:\"\"}.Bosch-Ic-wifi:before{content:\"\"}.Bosch-Ic-window-analysis:before{content:\"\"}.Bosch-Ic-window-browser:before{content:\"\"}.Bosch-Ic-window-console:before{content:\"\"}.Bosch-Ic-gaussian-view:before{content:\"\"}.Bosch-Ic-window-info:before{content:\"\"}.Bosch-IC-window-new:before{content:\"\"}.Bosch-IC-window-resize:before{content:\"\"}.Bosch-Ic-general-scaling-view:before{content:\"\"}.Bosch-Ic-restore-window:before{content:\"\"}.Bosch-Ic-window-statistic:before{content:\"\"}.Bosch-Ic-wishlist:before{content:\"\"}.Bosch-Ic-work-orders:before{content:\"\"}.Bosch-IC-worldwideweb:before{content:\"\"}.Bosch-Ic-wrench:before{content:\"\"}.Bosch-Ic-zoom-in:before{content:\"\"}.Bosch-Ic-zoom-out:before{content:\"\"}.bci-core-timepicker-title{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;font-size:12px;line-height:1.428571429;border-top:1px solid #DFDFE0;padding-top:8px;padding-left:10px;font-weight:500}.bci-core-timepicker-container{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding:8px 0}.bci-core-input-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.bci-core-input-container.divider{-ms-flex-item-align:center;align-self:center;padding:0 10px 7px 10px;font-size:28px}.bci-core-input-container .arrow-button{color:#BFC0C2}.bci-core-input-container input::-webkit-outer-spin-button,.bci-core-input-container input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.bci-core-input-container input[type=text]{height:47px;width:72px;padding:0px 1px 0px 1px;text-align:center;font-size:16px;line-height:24px;font-weight:400;color:#000000;background-color:#EFEFF0;border:0}.bci-core-input-container.no-seconds input[type=text]{width:122px}.hidden{display:none}";

var TimeDirection;
(function (TimeDirection) {
    TimeDirection[TimeDirection["UP"] = 0] = "UP";
    TimeDirection[TimeDirection["DOWN"] = 1] = "DOWN";
})(TimeDirection || (TimeDirection = {}));
const Timepicker = class {
    constructor(hostRef) {
        Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.updatedTime = Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "updatedTime", 7);
    }
    handleTimeInput(newValue) {
        this.hour = !!newValue ? Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(parse(newValue, this.timeFormatString, new Date()), 'HH') : '00';
        this.hour = this.formatTime(this.hour);
        this.minutes = !!newValue ? Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(parse(newValue, this.timeFormatString, new Date()), 'mm') : '00';
        this.minutes = this.formatTime(this.minutes);
        this.seconds = !!newValue ? Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(parse(newValue, this.timeFormatString, new Date()), 'ss') : '00';
        this.seconds = this.formatTime(this.seconds);
    }
    componentDidLoad() {
        this.timeFormatString = this.hideSeconds ? 'HH:mm' : 'HH:mm:ss';
        if (isNaN(Date.parse(this.timeInput))) {
            this.handleTimeInput(this.timeInput);
        }
    }
    getUpdatedTime() {
        let time;
        if (this.hideSeconds) {
            time = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["y"])(new Date(), Number(this.hour), Number(this.minutes)), 'HH:mm');
        }
        else {
            time = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["y"])(new Date(), Number(this.hour), Number(this.minutes), Number(this.seconds)), this.timeFormatString);
        }
        return time;
    }
    emitUpdatedTime() {
        this.updatedTime.emit({
            updatedTime: this.getUpdatedTime(),
            timepickerId: this.bciTimepickerId
        });
    }
    updateTimeOnType(ev, hms, maxValue) {
        let newTime = parseInt(ev.target.value, 10);
        newTime = Math.min(newTime, maxValue);
        newTime = this.formatTime(newTime);
        switch (hms) {
            case 'h':
                this.hour = String(newTime);
                (this.el.shadowRoot.querySelector('input[data-hours="true"]') || {}).value = '' + newTime;
                break;
            case 'm':
                this.minutes = String(newTime);
                (this.el.shadowRoot.querySelector('input[data-minutes="true"]') || {}).value = '' + newTime;
                break;
            case 's':
                this.seconds = String(newTime);
                (this.el.shadowRoot.querySelector('input[data-seconds="true"]') || {}).value = '' + newTime;
                break;
        }
        this.emitUpdatedTime();
    }
    formatTime(value) {
        return value < 10 ? ('0' + value).slice(-2) : value;
    }
    updateTimeOnClick(direction, value, maxValue) {
        if (!value) {
            value = 0;
        }
        value = parseInt(value, 10);
        if (direction === TimeDirection.UP) {
            value = ++value % (maxValue + 1);
        }
        if (direction === TimeDirection.DOWN) {
            value = --value % (maxValue + 1);
        }
        return this.formatTime(value);
    }
    render() {
        return (Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bci-core-timepicker-title" }, this.timeTitle), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bci-core-timepicker-container" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
                'bci-core-input-container': true,
                'no-seconds': this.hideSeconds
            } }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "arrow-button" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "bosch-ic bosch-ic-clickable bosch-ic-up", onClick: () => {
                this.hour = this.updateTimeOnClick(TimeDirection.UP, this.hour, 23);
                this.emitUpdatedTime();
            } })), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", pattern: "[012][0-9]*", maxlength: "2", "data-hours": "true", onBlur: (ev) => this.updateTimeOnType(ev, 'h', 23), value: this.hour }), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "arrow-button" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "bosch-ic bosch-ic-clickable bosch-ic-down", onClick: () => {
                this.hour = this.updateTimeOnClick(TimeDirection.DOWN, this.hour, 23);
                this.emitUpdatedTime();
            } }))), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bci-core-input-container divider" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, ":")), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
                'bci-core-input-container': true,
                'rangeTimePicker': this.rangeTimePicker,
                'no-seconds': this.hideSeconds
            } }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "arrow-button" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "bosch-ic bosch-ic-clickable bosch-ic-up", onClick: () => {
                this.minutes = this.updateTimeOnClick(TimeDirection.UP, this.minutes, 59);
                this.emitUpdatedTime();
            } })), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", pattern: "[0-5][0-9]*", maxlength: "2", "data-minutes": "true", onBlur: (ev) => this.updateTimeOnType(ev, 'm', 59), value: this.minutes }), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "arrow-button" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "bosch-ic bosch-ic-clickable bosch-ic-down", onClick: () => {
                this.minutes = this.updateTimeOnClick(TimeDirection.DOWN, this.minutes, 59);
                this.emitUpdatedTime();
            } }))), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
                'bci-core-input-container': true,
                'divider': true,
                'hidden': this.hideSeconds
            } }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, ":")), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: {
                'bci-core-input-container': true,
                'hidden': this.hideSeconds,
                'rangeTimePicker': this.rangeTimePicker
            } }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "arrow-button" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "bosch-ic bosch-ic-clickable bosch-ic-up", onClick: () => {
                this.seconds = this.updateTimeOnClick(TimeDirection.UP, this.seconds, 59);
                this.emitUpdatedTime();
            } })), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", pattern: "[0-5][0-9]*", maxlength: "2", "data-seconds": "true", onBlur: (ev) => this.updateTimeOnType(ev, 's', 59), value: this.seconds }), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "arrow-button" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "bosch-ic bosch-ic-clickable bosch-ic-down", onClick: () => {
                this.seconds = this.updateTimeOnClick(TimeDirection.DOWN, this.seconds, 59);
                this.emitUpdatedTime();
            } }))))));
    }
    get el() { return Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); }
    static get watchers() { return {
        "timeInput": ["handleTimeInput"]
    }; }
};
Timepicker.style = timepickerCss;

const datetimePickerCss = "@charset \"UTF-8\";/*!\n *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n*  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n*//*!\n *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2020 Robert Bosch GmbH Copyright (C) 2020 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */@font-face{font-family:\"Bosch-Sans\";font-weight:400;src:url(\"..//fonts/BoschSans-Regular.eot\");src:url(\"..//fonts/BoschSans-Regular.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Regular.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Regular.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Regular.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Regular.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:300;src:url(\"..//fonts/BoschSans-Light.eot\");src:url(\"..//fonts/BoschSans-Light.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Light.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Light.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Light.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Light.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:500;src:url(\"..//fonts/BoschSans-Medium.eot\");src:url(\"..//fonts/BoschSans-Medium.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Medium.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Medium.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Medium.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Medium.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:700;src:url(\"..//fonts/BoschSans-Bold.eot\");src:url(\"..//fonts/BoschSans-Bold.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Bold.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Bold.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Bold.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Bold.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Sans\";font-weight:900;src:url(\"..//fonts/BoschSans-Black.eot\");src:url(\"..//fonts/BoschSans-Black.eot?#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/BoschSans-Black.woff2\") format(\"woff2\"), url(\"..//fonts/BoschSans-Black.woff\") format(\"woff\"), url(\"..//fonts/BoschSans-Black.ttf\") format(\"truetype\"), url(\"..//fonts/BoschSans-Black.svg#svgFontName\") format(\"svg\");}@font-face{font-family:\"Bosch-Ic\";font-style:normal;font-stretch:normal;font-weight:normal;src:url(\"..//fonts/Bosch-Icon.eot?mh5qa9\");src:url(\"..//fonts/Bosch-Icon.eot?mh5qa9#iefix\") format(\"embedded-opentype\"), url(\"..//fonts/Bosch-Icon.ttf?mh5qa9\") format(\"truetype\"), url(\"..//fonts/Bosch-Icon.woff?mh5qa9\") format(\"woff\"), url(\"..//fonts/Bosch-Icon.svg?mh5qa9#Bosch-Icon\") format(\"svg\")}/*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2020 Robert Bosch GmbH Copyright (C) 2020 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2018 Robert Bosch GmbH Copyright (C) 2018 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */body{margin:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}main,*{font-family:\"Bosch-Sans\"}::-moz-selection{background-color:#008ECF}::selection,::-moz-selection{background-color:#008ECF}a::-moz-selection{color:#FFFFFF}.lead{margin-bottom:22px;font-size:18px;font-weight:300;line-height:1.4}@media (min-width: 768px){.lead{font-size:24px}}/*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.bosch-ic,.Bosch-Ic{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic:before,.Bosch-Ic:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:24px;vertical-align:middle}.bosch-ic-large,.Bosch-Ic-Large{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic-large:before,.Bosch-Ic-Large:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:28px;vertical-align:middle}.bosch-ic-medium,.Bosch-Ic-Medium{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic-medium:before,.Bosch-Ic-Medium:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:24px;vertical-align:middle}.bosch-ic-normal,.Bosch-Ic-Normal{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic-normal:before,.Bosch-Ic-Normal:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:20px;vertical-align:middle}.bosch-ic-small,.Bosch-Ic-Small{line-height:1;vertical-align:5%;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.bosch-ic-small:before,.Bosch-Ic-Small:before{font-family:\"Bosch-Ic\";font-style:normal;font-weight:normal;font-size:16px;vertical-align:middle}.Bosch-Ic-Disabled,.bosch-ic-disabled,.Bosch-Ic-Disabled:hover,.bosch-ic-disabled:hover,.Bosch-Ic[disabled],.bosch-ic[disabled],.Bosch-Ic[disabled]:hover,.bosch-ic[disabled]:hover{cursor:not-allowed;color:#d4d7da}.Bosch-Ic-Disabled:hover,.bosch-ic-disabled:hover,.Bosch-Ic-Disabled:hover:hover,.bosch-ic-disabled:hover:hover,.Bosch-Ic[disabled]:hover,.bosch-ic[disabled]:hover,.Bosch-Ic[disabled]:hover:hover,.bosch-ic[disabled]:hover:hover{color:#d4d7da}.bosch-ic-clickable,.Bosch-Ic-Clickable{cursor:pointer}.bosch-ic-clickable:hover,.Bosch-Ic-Clickable:hover{color:#7FC6E7}.bosch-ic-clickable:active,.Bosch-Ic-Clickable:active{color:#008ECF}.bosch-ic-clickable:disabled,.bosch-ic-clickable.disabled,.Bosch-Ic-Clickable:disabled,.Bosch-Ic-Clickable.disabled{color:#a8afb5;cursor:not-allowed}.bosch-ic-activated,.Bosch-Ic-Activated{color:#008ECF}.bosch-ic-3d-print:before{content:\"\"}.bosch-ic-a-to-b:before{content:\"\"}.bosch-ic-add:before{content:\"\"}.bosch-ic-address-consumer-data:before{content:\"\"}.bosch-ic-adress-book:before{content:\"\"}.bosch-ic-agility:before{content:\"\"}.bosch-ic-alarm-clock:before{content:\"\"}.bosch-ic-ambulance:before{content:\"\"}.bosch-ic-analysis:before{content:\"\"}.bosch-ic-anchor:before{content:\"\"}.bosch-ic-arrow-down:before{content:\"\"}.bosch-ic-arrow-left:before{content:\"\"}.bosch-ic-arrow-left-down:before{content:\"\"}.bosch-ic-arrow-left-up:before{content:\"\"}.bosch-ic-arrow-right:before{content:\"\"}.bosch-ic-arrow-right-down:before{content:\"\"}.bosch-ic-arrow-right-up:before{content:\"\"}.bosch-ic-arrow-turn-left:before{content:\"\"}.bosch-ic-arrow-turn-right:before{content:\"\"}.bosch-ic-arrow-up:before{content:\"\"}.bosch-ic-arrows:before{content:\"\"}.bosch-ic-arrows-x-y-z:before{content:\"\"}.bosch-ic-artificial-intelligence:before{content:\"\"}.bosch-ic-assembly-line:before{content:\"\"}.bosch-ic-atom:before{content:\"\"}.bosch-ic-augmented-reality:before{content:\"\"}.bosch-ic-autobod:before{content:\"\"}.bosch-ic-back-left:before{content:\"\"}.bosch-ic-back-left-double:before{content:\"\"}.bosch-ic-bar-chart:before{content:\"\"}.bosch-ic-bar-chart-double:before{content:\"\"}.bosch-ic-battery-0:before{content:\"\"}.bosch-ic-battery-1:before{content:\"\"}.bosch-ic-battery-2:before{content:\"\"}.bosch-ic-battery-3:before{content:\"\"}.bosch-ic-battery-4:before{content:\"\"}.bosch-ic-battery-fail:before{content:\"\"}.bosch-ic-battery-li-ion:before{content:\"\"}.bosch-ic-battery-loading:before{content:\"\"}.bosch-ic-bed:before{content:\"\"}.bosch-ic-bicycle:before{content:\"\"}.bosch-ic-bicycle-e:before{content:\"\"}.bosch-ic-blog:before{content:\"\"}.bosch-ic-bluetooth:before{content:\"\"}.bosch-ic-bluetooth-le:before{content:\"\"}.bosch-ic-board-speaker:before{content:\"\"}.bosch-ic-boiler-connected:before{content:\"\"}.bosch-ic-book:before{content:\"\"}.bosch-ic-bookmark:before{content:\"\"}.bosch-ic-bookmark-add:before{content:\"\"}.bosch-ic-bookmark-check:before{content:\"\"}.bosch-ic-bookmark-delete:before{content:\"\"}.bosch-ic-books:before{content:\"\"}.bosch-ic-bookshelf:before{content:\"\"}.bosch-ic-box:before{content:\"\"}.bosch-ic-box-closed:before{content:\"\"}.bosch-ic-box-delivery:before{content:\"\"}.bosch-ic-box-delivery-connected:before{content:\"\"}.bosch-ic-brake-disk:before{content:\"\"}.bosch-ic-briefcase:before{content:\"\"}.bosch-ic-broom:before{content:\"\"}.bosch-ic-broom-cloud-dirt:before{content:\"\"}.bosch-ic-brush:before{content:\"\"}.bosch-ic-bug:before{content:\"\"}.bosch-ic-building:before{content:\"\"}.bosch-ic-cactus:before{content:\"\"}.bosch-ic-calculate:before{content:\"\"}.bosch-ic-calendar:before{content:\"\"}.bosch-ic-calendar-add:before{content:\"\"}.bosch-ic-calendar-settings:before{content:\"\"}.bosch-ic-call:before{content:\"\"}.bosch-ic-call-add:before{content:\"\"}.bosch-ic-call-remove:before{content:\"\"}.bosch-ic-call-sos:before{content:\"\"}.bosch-ic-call-team:before{content:\"\"}.bosch-ic-call-wifi:before{content:\"\"}.bosch-ic-camera:before{content:\"\"}.bosch-ic-camera-switch:before{content:\"\"}.bosch-ic-car:before{content:\"\"}.bosch-ic-car-clock:before{content:\"\"}.bosch-ic-car-connected:before{content:\"\"}.bosch-ic-car-locator:before{content:\"\"}.bosch-ic-car-mechanic:before{content:\"\"}.bosch-ic-car-rental:before{content:\"\"}.bosch-ic-car-seat-connected:before{content:\"\"}.bosch-ic-car-side:before{content:\"\"}.bosch-ic-car-side-user:before{content:\"\"}.bosch-ic-cart:before{content:\"\"}.bosch-ic-certificate:before{content:\"\"}.bosch-ic-certificate-pki:before{content:\"\"}.bosch-ic-change:before{content:\"\"}.bosch-ic-chart-bar:before{content:\"\"}.bosch-ic-chart-check:before{content:\"\"}.bosch-ic-chart-dummy:before{content:\"\"}.bosch-ic-chart-line:before{content:\"\"}.bosch-ic-chat:before{content:\"\"}.bosch-ic-chat-add:before{content:\"\"}.bosch-ic-chat-question-answer:before{content:\"\"}.bosch-ic-chat-remove:before{content:\"\"}.bosch-ic-checklist:before{content:\"\"}.bosch-ic-checkmark:before{content:\"\"}.bosch-ic-chip:before{content:\"\"}.bosch-ic-circle-segment:before{content:\"\"}.bosch-ic-clear-all:before{content:\"\"}.bosch-ic-clipboard:before{content:\"\"}.bosch-ic-clipboard-list:before{content:\"\"}.bosch-ic-clock:before{content:\"\"}.bosch-ic-close:before{content:\"\"}.bosch-ic-close-all:before{content:\"\"}.bosch-ic-cloud:before{content:\"\"}.bosch-ic-cloud-co2:before{content:\"\"}.bosch-ic-cloud-download:before{content:\"\"}.bosch-ic-cloud-nox:before{content:\"\"}.bosch-ic-cloud-upload:before{content:\"\"}.bosch-ic-club-arm-chair:before{content:\"\"}.bosch-ic-coffee-break:before{content:\"\"}.bosch-ic-coin-currency:before{content:\"\"}.bosch-ic-coin-dollar:before{content:\"\"}.bosch-ic-colorpicker:before{content:\"\"}.bosch-ic-colors:before{content:\"\"}.bosch-ic-command:before{content:\"\"}.bosch-ic-communicator:before{content:\"\"}.bosch-ic-compare:before{content:\"\"}.bosch-ic-components:before{content:\"\"}.bosch-ic-components-available:before{content:\"\"}.bosch-ic-components-reservation:before{content:\"\"}.bosch-ic-concierge-bell:before{content:\"\"}.bosch-ic-configuration:before{content:\"\"}.bosch-ic-confirmation:before{content:\"\"}.bosch-ic-connection-off:before{content:\"\"}.bosch-ic-connection-on:before{content:\"\"}.bosch-ic-connectivity:before{content:\"\"}.bosch-ic-construction:before{content:\"\"}.bosch-ic-consumer-goods:before{content:\"\"}.bosch-ic-contract:before{content:\"\"}.bosch-ic-copy:before{content:\"\"}.bosch-ic-cube:before{content:\"\"}.bosch-ic-cube-arrows:before{content:\"\"}.bosch-ic-cube-filled:before{content:\"\"}.bosch-ic-cube-shock:before{content:\"\"}.bosch-ic-cube-stacked:before{content:\"\"}.bosch-ic-customerservice:before{content:\"\"}.bosch-ic-cutlery:before{content:\"\"}.bosch-ic-damper:before{content:\"\"}.bosch-ic-danger-flash:before{content:\"\"}.bosch-ic-data-loss:before{content:\"\"}.bosch-ic-dealer-details:before{content:\"\"}.bosch-ic-delete:before{content:\"\"}.bosch-ic-delivery:before{content:\"\"}.bosch-ic-denied:before{content:\"\"}.bosch-ic-desktop:before{content:\"\"}.bosch-ic-desktop-application-2d:before{content:\"\"}.bosch-ic-desktop-application-3d:before{content:\"\"}.bosch-ic-development:before{content:\"\"}.bosch-ic-devices:before{content:\"\"}.bosch-ic-devices-mobile:before{content:\"\"}.bosch-ic-directory:before{content:\"\"}.bosch-ic-dna:before{content:\"\"}.bosch-ic-do-not-disturb:before{content:\"\"}.bosch-ic-document:before{content:\"\"}.bosch-ic-document-add:before{content:\"\"}.bosch-ic-document-arrow-down:before{content:\"\"}.bosch-ic-document-arrow-up:before{content:\"\"}.bosch-ic-document-audio:before{content:\"\"}.bosch-ic-document-check:before{content:\"\"}.bosch-ic-document-cloud:before{content:\"\"}.bosch-ic-document-copy:before{content:\"\"}.bosch-ic-document-delete:before{content:\"\"}.bosch-ic-document-doc:before{content:\"\"}.bosch-ic-document-edit:before{content:\"\"}.bosch-ic-document-error:before{content:\"\"}.bosch-ic-document-locked:before{content:\"\"}.bosch-ic-document-log:before{content:\"\"}.bosch-ic-document-one:before{content:\"\"}.bosch-ic-document-pdf:before{content:\"\"}.bosch-ic-document-plain:before{content:\"\"}.bosch-ic-document-plain-add:before{content:\"\"}.bosch-ic-document-plain-delete:before{content:\"\"}.bosch-ic-document-ppt:before{content:\"\"}.bosch-ic-document-pub:before{content:\"\"}.bosch-ic-document-rtf:before{content:\"\"}.bosch-ic-document-save-to:before{content:\"\"}.bosch-ic-document-search:before{content:\"\"}.bosch-ic-document-settings:before{content:\"\"}.bosch-ic-document-test:before{content:\"\"}.bosch-ic-document-text:before{content:\"\"}.bosch-ic-document-txt:before{content:\"\"}.bosch-ic-document-vsd:before{content:\"\"}.bosch-ic-document-xls:before{content:\"\"}.bosch-ic-document-xml:before{content:\"\"}.bosch-ic-document-zip:before{content:\"\"}.bosch-ic-dome:before{content:\"\"}.bosch-ic-door:before{content:\"\"}.bosch-ic-door-sensor:before{content:\"\"}.bosch-ic-down:before{content:\"\"}.bosch-ic-down-double:before{content:\"\"}.bosch-ic-download:before{content:\"\"}.bosch-ic-drag-handle:before{content:\"\"}.bosch-ic-dragdrop:before{content:\"\"}.bosch-ic-drop:before{content:\"\"}.bosch-ic-e-charging:before{content:\"\"}.bosch-ic-e-mobility:before{content:\"\"}.bosch-ic-ear-off-disabled-light:before{content:\"\"}.bosch-ic-ear-on:before{content:\"\"}.bosch-ic-eco-system:before{content:\"\"}.bosch-ic-edit:before{content:\"\"}.bosch-ic-education:before{content:\"\"}.bosch-ic-efficiency:before{content:\"\"}.bosch-ic-elevator:before{content:\"\"}.bosch-ic-elevator-alarm:before{content:\"\"}.bosch-ic-elevator-cloud:before{content:\"\"}.bosch-ic-elevator-headset:before{content:\"\"}.bosch-ic-elevator-service:before{content:\"\"}.bosch-ic-emergency-exit:before{content:\"\"}.bosch-ic-emoji-happy:before{content:\"\"}.bosch-ic-emoji-neutral:before{content:\"\"}.bosch-ic-emoji-sad:before{content:\"\"}.bosch-ic-emoji-super-happy:before{content:\"\"}.bosch-ic-emoji-very-sad:before{content:\"\"}.bosch-ic-eu-energy-label:before{content:\"\"}.bosch-ic-excavator:before{content:\"\"}.bosch-ic-exit:before{content:\"\"}.bosch-ic-expansion-arrows:before{content:\"\"}.bosch-ic-explosion:before{content:\"\"}.bosch-ic-export:before{content:\"\"}.bosch-ic-externallink:before{content:\"\"}.bosch-ic-fast-forward:before{content:\"\"}.bosch-ic-faucet:before{content:\"\"}.bosch-ic-favorites:before{content:\"\"}.bosch-ic-fax:before{content:\"\"}.bosch-ic-female:before{content:\"\"}.bosch-ic-film:before{content:\"\"}.bosch-ic-filter:before{content:\"\"}.bosch-ic-filter-success:before{content:\"\"}.bosch-ic-fingerprint:before{content:\"\"}.bosch-ic-fire:before{content:\"\"}.bosch-ic-fire-emergency:before{content:\"\"}.bosch-ic-fireworks:before{content:\"\"}.bosch-ic-first-aid:before{content:\"\"}.bosch-ic-first-aid-cross:before{content:\"\"}.bosch-ic-fit-to-sceen:before{content:\"\"}.bosch-ic-flag:before{content:\"\"}.bosch-ic-flash:before{content:\"\"}.bosch-ic-flask:before{content:\"\"}.bosch-ic-flexpress:before{content:\"\"}.bosch-ic-folder:before{content:\"\"}.bosch-ic-folder-download:before{content:\"\"}.bosch-ic-folder-open:before{content:\"\"}.bosch-ic-folder-upload:before{content:\"\"}.bosch-ic-fork-lift:before{content:\"\"}.bosch-ic-fork-lift-locator:before{content:\"\"}.bosch-ic-forward-right:before{content:\"\"}.bosch-ic-forward-right-double:before{content:\"\"}.bosch-ic-full-empty:before{content:\"\"}.bosch-ic-fullscreen:before{content:\"\"}.bosch-ic-fullscreen-arrows:before{content:\"\"}.bosch-ic-fullscreen-exit:before{content:\"\"}.bosch-ic-g-arrow-down:before{content:\"\"}.bosch-ic-g-arrow-up:before{content:\"\"}.bosch-ic-generator:before{content:\"\"}.bosch-ic-gift:before{content:\"\"}.bosch-ic-glance:before{content:\"\"}.bosch-ic-glas-plate:before{content:\"\"}.bosch-ic-globe:before{content:\"\"}.bosch-ic-globe-arrow:before{content:\"\"}.bosch-ic-glossary:before{content:\"\"}.bosch-ic-grid-view:before{content:\"\"}.bosch-ic-hammer:before{content:\"\"}.bosch-ic-hand:before{content:\"\"}.bosch-ic-hand-motion:before{content:\"\"}.bosch-ic-hand-motion-off-disabled-light:before{content:\"\"}.bosch-ic-handlewithcare:before{content:\"\"}.bosch-ic-handover-add:before{content:\"\"}.bosch-ic-handover-check:before{content:\"\"}.bosch-ic-handover-remove:before{content:\"\"}.bosch-ic-hanger:before{content:\"\"}.bosch-ic-health:before{content:\"\"}.bosch-ic-heart:before{content:\"\"}.bosch-ic-history:before{content:\"\"}.bosch-ic-home:before{content:\"\"}.bosch-ic-home-locator:before{content:\"\"}.bosch-ic-hourglass:before{content:\"\"}.bosch-ic-hydrant:before{content:\"\"}.bosch-ic-ice:before{content:\"\"}.bosch-ic-imagery:before{content:\"\"}.bosch-ic-imagery-add:before{content:\"\"}.bosch-ic-imagery-remove:before{content:\"\"}.bosch-ic-import:before{content:\"\"}.bosch-ic-imprint:before{content:\"\"}.bosch-ic-impulse:before{content:\"\"}.bosch-ic-industry:before{content:\"\"}.bosch-ic-industry-clock:before{content:\"\"}.bosch-ic-industry-connected:before{content:\"\"}.bosch-ic-info:before{content:\"\"}.bosch-ic-info-i:before{content:\"\"}.bosch-ic-interval:before{content:\"\"}.bosch-ic-it-device:before{content:\"\"}.bosch-ic-jewel:before{content:\"\"}.bosch-ic-keyboard:before{content:\"\"}.bosch-ic-label:before{content:\"\"}.bosch-ic-laptop:before{content:\"\"}.bosch-ic-laser:before{content:\"\"}.bosch-ic-layout:before{content:\"\"}.bosch-ic-leaf:before{content:\"\"}.bosch-ic-led:before{content:\"\"}.bosch-ic-brick:before{content:\"\"}.bosch-ic-brick-slanting-1:before{content:\"\"}.bosch-ic-brick-slanting-2:before{content:\"\"}.bosch-ic-less-minimize:before{content:\"\"}.bosch-ic-lightbulb:before{content:\"\"}.bosch-ic-lightbulb-off:before{content:\"\"}.bosch-ic-line-chart:before{content:\"\"}.bosch-ic-link:before{content:\"\"}.bosch-ic-link-broken:before{content:\"\"}.bosch-ic-list-view:before{content:\"\"}.bosch-ic-list-view-mobile:before{content:\"\"}.bosch-ic-livechat:before{content:\"\"}.bosch-ic-locator:before{content:\"\"}.bosch-ic-locator-ip-connected:before{content:\"\"}.bosch-ic-locator-ip-disconnected:before{content:\"\"}.bosch-ic-locator-spot:before{content:\"\"}.bosch-ic-locator-spot-check:before{content:\"\"}.bosch-ic-lock-closed:before{content:\"\"}.bosch-ic-lock-open:before{content:\"\"}.bosch-ic-login:before{content:\"\"}.bosch-ic-logistics:before{content:\"\"}.bosch-ic-logout:before{content:\"\"}.bosch-ic-machine:before{content:\"\"}.bosch-ic-magnet:before{content:\"\"}.bosch-ic-mail:before{content:\"\"}.bosch-ic-mail-forward:before{content:\"\"}.bosch-ic-mail-open:before{content:\"\"}.bosch-ic-mail-out:before{content:\"\"}.bosch-ic-mail-reply:before{content:\"\"}.bosch-ic-male:before{content:\"\"}.bosch-ic-map:before{content:\"\"}.bosch-ic-material-add:before{content:\"\"}.bosch-ic-material-check:before{content:\"\"}.bosch-ic-material-remove:before{content:\"\"}.bosch-ic-maximize:before{content:\"\"}.bosch-ic-mechanic:before{content:\"\"}.bosch-ic-megaphone:before{content:\"\"}.bosch-ic-message:before{content:\"\"}.bosch-ic-mic:before{content:\"\"}.bosch-ic-microphone:before{content:\"\"}.bosch-ic-microphone-classic:before{content:\"\"}.bosch-ic-minimize:before{content:\"\"}.bosch-ic-money-currency:before{content:\"\"}.bosch-ic-money-dollar:before{content:\"\"}.bosch-ic-moneybag-currency:before{content:\"\"}.bosch-ic-moneybag-dollar:before{content:\"\"}.bosch-ic-monument:before{content:\"\"}.bosch-ic-moon:before{content:\"\"}.bosch-ic-motorcycle:before{content:\"\"}.bosch-ic-motorcycle-side-car:before{content:\"\"}.bosch-ic-motorcycle-side:before{content:\"\"}.bosch-ic-mouse:before{content:\"\"}.bosch-ic-mouse-left:before{content:\"\"}.bosch-ic-mouse-right:before{content:\"\"}.bosch-ic-mouth:before{content:\"\"}.bosch-ic-my-product:before{content:\"\"}.bosch-ic-new-way-work:before{content:\"\"}.bosch-ic-newsletter:before{content:\"\"}.bosch-ic-newspaper:before{content:\"\"}.bosch-ic-nose:before{content:\"\"}.bosch-ic-notepad:before{content:\"\"}.bosch-ic-notepad-edit:before{content:\"\"}.bosch-ic-notification:before{content:\"\"}.bosch-ic-notification-active:before{content:\"\"}.bosch-ic-notification-add:before{content:\"\"}.bosch-ic-notification-remove:before{content:\"\"}.bosch-ic-oil-car:before{content:\"\"}.bosch-ic-omnichannel:before{content:\"\"}.bosch-ic-options:before{content:\"\"}.bosch-ic-origami-boat:before{content:\"\"}.bosch-ic-pallete-car:before{content:\"\"}.bosch-ic-pallete-car-connected:before{content:\"\"}.bosch-ic-panel:before{content:\"\"}.bosch-ic-paperclip:before{content:\"\"}.bosch-ic-paperplane:before{content:\"\"}.bosch-ic-parking:before{content:\"\"}.bosch-ic-pause:before{content:\"\"}.bosch-ic-payment:before{content:\"\"}.bosch-ic-people:before{content:\"\"}.bosch-ic-petrol-station:before{content:\"\"}.bosch-ic-piggybank:before{content:\"\"}.bosch-ic-pin-classic:before{content:\"\"}.bosch-ic-pin-modern:before{content:\"\"}.bosch-ic-plane-side:before{content:\"\"}.bosch-ic-play:before{content:\"\"}.bosch-ic-plug-12v:before{content:\"\"}.bosch-ic-podium-speaker:before{content:\"\"}.bosch-ic-police:before{content:\"\"}.bosch-ic-poop:before{content:\"\"}.bosch-ic-post-it:before{content:\"\"}.bosch-ic-postal-code:before{content:\"\"}.bosch-ic-power:before{content:\"\"}.bosch-ic-print:before{content:\"\"}.bosch-ic-prototyping:before{content:\"\"}.bosch-ic-puzzle:before{content:\"\"}.bosch-ic-quad:before{content:\"\"}.bosch-ic-question:before{content:\"\"}.bosch-ic-radar:before{content:\"\"}.bosch-ic-radio:before{content:\"\"}.bosch-ic-radiotower:before{content:\"\"}.bosch-ic-redirect:before{content:\"\"}.bosch-ic-redo:before{content:\"\"}.bosch-ic-reference:before{content:\"\"}.bosch-ic-refresh:before{content:\"\"}.bosch-ic-refresh-cloud:before{content:\"\"}.bosch-ic-registration:before{content:\"\"}.bosch-ic-remote:before{content:\"\"}.bosch-ic-reset:before{content:\"\"}.bosch-ic-resolution:before{content:\"\"}.bosch-ic-robot:before{content:\"\"}.bosch-ic-robot-connected:before{content:\"\"}.bosch-ic-robothead:before{content:\"\"}.bosch-ic-rocket:before{content:\"\"}.bosch-ic-rotation:before{content:\"\"}.bosch-ic-rotation-360:before{content:\"\"}.bosch-ic-rotation-x-left:before{content:\"\"}.bosch-ic-rotation-x-right:before{content:\"\"}.bosch-ic-rotation-y-down:before{content:\"\"}.bosch-ic-rotation-y-up:before{content:\"\"}.bosch-ic-route:before{content:\"\"}.bosch-ic-ruler:before{content:\"\"}.bosch-ic-ruler-pen:before{content:\"\"}.bosch-ic-satellite:before{content:\"\"}.bosch-ic-save:before{content:\"\"}.bosch-ic-scale:before{content:\"\"}.bosch-ic-scissors:before{content:\"\"}.bosch-ic-search:before{content:\"\"}.bosch-ic-security:before{content:\"\"}.bosch-ic-security-check:before{content:\"\"}.bosch-ic-security-user:before{content:\"\"}.bosch-ic-sensor:before{content:\"\"}.bosch-ic-server:before{content:\"\"}.bosch-ic-server-expansion:before{content:\"\"}.bosch-ic-server-rate:before{content:\"\"}.bosch-ic-service-agent:before{content:\"\"}.bosch-ic-service-time:before{content:\"\"}.bosch-ic-settings:before{content:\"\"}.bosch-ic-settings-arrows:before{content:\"\"}.bosch-ic-settings-connected:before{content:\"\"}.bosch-ic-share:before{content:\"\"}.bosch-ic-shield-stop:before{content:\"\"}.bosch-ic-ship:before{content:\"\"}.bosch-ic-ship-side:before{content:\"\"}.bosch-ic-shoppingcart:before{content:\"\"}.bosch-ic-shoppingcart-add:before{content:\"\"}.bosch-ic-shoppingcart-switch:before{content:\"\"}.bosch-ic-signal-full:before{content:\"\"}.bosch-ic-signal-half:before{content:\"\"}.bosch-ic-signal-lost:before{content:\"\"}.bosch-ic-signpost:before{content:\"\"}.bosch-ic-simcard:before{content:\"\"}.bosch-ic-skyscraper:before{content:\"\"}.bosch-ic-smartcity:before{content:\"\"}.bosch-ic-smarthome:before{content:\"\"}.bosch-ic-smartphone:before{content:\"\"}.bosch-ic-smartphone-acoustic:before{content:\"\"}.bosch-ic-smartphone-arrow-right:before{content:\"\"}.bosch-ic-smartphone-arrows-x-y-z:before{content:\"\"}.bosch-ic-smartphone-clock:before{content:\"\"}.bosch-ic-smartphone-cloud:before{content:\"\"}.bosch-ic-smartphone-loading-wheel:before{content:\"\"}.bosch-ic-smartphone-smashed:before{content:\"\"}.bosch-ic-smartphone-vibration:before{content:\"\"}.bosch-ic-smartphone-z:before{content:\"\"}.bosch-ic-smartwatch-connected:before{content:\"\"}.bosch-ic-spare-parts:before{content:\"\"}.bosch-ic-spark:before{content:\"\"}.bosch-ic-speaker-acoustic:before{content:\"\"}.bosch-ic-speedometer:before{content:\"\"}.bosch-ic-stadium:before{content:\"\"}.bosch-ic-stairs:before{content:\"\"}.bosch-ic-stamp:before{content:\"\"}.bosch-ic-standby:before{content:\"\"}.bosch-ic-steering-wheel:before{content:\"\"}.bosch-ic-steering-wheel-connected:before{content:\"\"}.bosch-ic-steering-wheel-hands:before{content:\"\"}.bosch-ic-steps:before{content:\"\"}.bosch-ic-stethoscope:before{content:\"\"}.bosch-ic-stop:before{content:\"\"}.bosch-ic-stopwatch:before{content:\"\"}.bosch-ic-storage-local:before{content:\"\"}.bosch-ic-structure:before{content:\"\"}.bosch-ic-subtitles:before{content:\"\"}.bosch-ic-subtitles-off-light:before{content:\"\"}.bosch-ic-summary:before{content:\"\"}.bosch-ic-sun:before{content:\"\"}.bosch-ic-sun-half-filled:before{content:\"\"}.bosch-ic-sunshade-table:before{content:\"\"}.bosch-ic-surveillance:before{content:\"\"}.bosch-ic-table-chairs:before{content:\"\"}.bosch-ic-tablet:before{content:\"\"}.bosch-ic-team:before{content:\"\"}.bosch-ic-team-lightbulb:before{content:\"\"}.bosch-ic-technical-service:before{content:\"\"}.bosch-ic-temperature:before{content:\"\"}.bosch-ic-temperature-high:before{content:\"\"}.bosch-ic-temperature-low:before{content:\"\"}.bosch-ic-theater:before{content:\"\"}.bosch-ic-thumb-down:before{content:\"\"}.bosch-ic-thumb-up:before{content:\"\"}.bosch-ic-ticket:before{content:\"\"}.bosch-ic-touch:before{content:\"\"}.bosch-ic-touch-sos:before{content:\"\"}.bosch-ic-towing-truck:before{content:\"\"}.bosch-ic-train:before{content:\"\"}.bosch-ic-train-side:before{content:\"\"}.bosch-ic-transport-movements:before{content:\"\"}.bosch-ic-transscript:before{content:\"\"}.bosch-ic-transscript-off:before{content:\"\"}.bosch-ic-transscript-on:before{content:\"\"}.bosch-ic-tree:before{content:\"\"}.bosch-ic-tricycle:before{content:\"\"}.bosch-ic-trolley-empty:before{content:\"\"}.bosch-ic-trolley-filled-box:before{content:\"\"}.bosch-ic-trolly-filled-files:before{content:\"\"}.bosch-ic-trophy:before{content:\"\"}.bosch-ic-truck:before{content:\"\"}.bosch-ic-tuktuk:before{content:\"\"}.bosch-ic-tune:before{content:\"\"}.bosch-ic-typography:before{content:\"\"}.bosch-ic-ui:before{content:\"\"}.bosch-ic-umbrella:before{content:\"\"}.bosch-ic-undo:before{content:\"\"}.bosch-ic-up:before{content:\"\"}.bosch-ic-up-double:before{content:\"\"}.bosch-ic-up-down:before{content:\"\"}.bosch-ic-upload:before{content:\"\"}.bosch-ic-usb:before{content:\"\"}.bosch-ic-user:before{content:\"\"}.bosch-ic-user-advanced:before{content:\"\"}.bosch-ic-user-beginner:before{content:\"\"}.bosch-ic-user-desktop:before{content:\"\"}.bosch-ic-user-down:before{content:\"\"}.bosch-ic-user-falling:before{content:\"\"}.bosch-ic-user-hand:before{content:\"\"}.bosch-ic-user-hand-stop:before{content:\"\"}.bosch-ic-user-professional:before{content:\"\"}.bosch-ic-user-run:before{content:\"\"}.bosch-ic-user-share:before{content:\"\"}.bosch-ic-user-voice:before{content:\"\"}.bosch-ic-user-walk:before{content:\"\"}.bosch-ic-video:before{content:\"\"}.bosch-ic-video-disabled-light:before{content:\"\"}.bosch-ic-video-record:before{content:\"\"}.bosch-ic-virtual-reality:before{content:\"\"}.bosch-ic-volume-disabled:before{content:\"\"}.bosch-ic-volume-high:before{content:\"\"}.bosch-ic-volume-low:before{content:\"\"}.bosch-ic-volume-off-light:before{content:\"\"}.bosch-ic-wand:before{content:\"\"}.bosch-ic-badge-checkmark:before{content:\"\"}.bosch-ic-watch-off-disabled-light:before{content:\"\"}.bosch-ic-watch-on:before{content:\"\"}.bosch-ic-water-shower:before{content:\"\"}.bosch-ic-welcome:before{content:\"\"}.bosch-ic-wellness:before{content:\"\"}.bosch-ic-wheelchair:before{content:\"\"}.bosch-ic-whistle:before{content:\"\"}.bosch-ic-wide-angled-arrow:before{content:\"\"}.bosch-ic-wifi:before{content:\"\"}.bosch-ic-window-analysis:before{content:\"\"}.bosch-ic-window-browser:before{content:\"\"}.bosch-ic-window-console:before{content:\"\"}.bosch-ic-window-gaussian-view:before{content:\"\"}.bosch-ic-window-info:before{content:\"\"}.bosch-ic-window-new:before{content:\"\"}.bosch-ic-window-resize:before{content:\"\"}.bosch-ic-window-scaling-view:before{content:\"\"}.bosch-ic-window-shuffle:before{content:\"\"}.bosch-ic-window-statistic:before{content:\"\"}.bosch-ic-wishlist:before{content:\"\"}.bosch-ic-work-order:before{content:\"\"}.bosch-ic-worldwideweb:before{content:\"\"}.bosch-ic-wrench:before{content:\"\"}.bosch-ic-zoom-in:before{content:\"\"}.bosch-ic-zoom-out:before{content:\"\"}.bosch-ic-scooter:before{content:\"\"}.bosch-ic-cars-traffic:before{content:\"\"}.bosch-ic-arm-chair:before{content:\"\"}.bosch-ic-car-phone:before{content:\"\"}.bosch-ic-box-lightbulb:before{content:\"\"}.bosch-ic-chair-officedesk:before{content:\"\"}.bosch-ic-calendar-clock:before{content:\"\"}.bosch-ic-document-cv:before{content:\"\"}.bosch-ic-user-run-bag:before{content:\"\"}.bosch-ic-brake-disk-spray:before{content:\"\"}.bosch-ic-circle-abs:before{content:\"\"}.bosch-ic-bright-down:before{content:\"\"}.bosch-ic-bright-up:before{content:\"\"}.bosch-ic-fan:before{content:\"\"}.bosch-ic-sun-moon:before{content:\"\"}.bosch-ic-lightbulb-attention:before{content:\"\"}.bosch-ic-settings-attention:before{content:\"\"}.bosch-ic-danger-hazards:before{content:\"\"}.bosch-ic-windshield-spray:before{content:\"\"}.bosch-ic-windshield-heat:before{content:\"\"}.bosch-ic-light-drop:before{content:\"\"}.bosch-ic-starter:before{content:\"\"}.bosch-ic-turbo:before{content:\"\"}.bosch-ic-settings-lock:before{content:\"\"}.bosch-ic-settings-n:before{content:\"\"}.bosch-ic-light-beam-high:before{content:\"\"}.bosch-ic-light-beam-low:before{content:\"\"}.bosch-ic-glas:before{content:\"\"}.bosch-ic-shirt-ice:before{content:\"\"}.bosch-ic-helmet-fan:before{content:\"\"}.bosch-ic-notification-arrow:before{content:\"\"}.bosch-ic-steering-wheel-arrow:before{content:\"\"}.bosch-ic-circle-arrow:before{content:\"\"}.bosch-ic-tempomat-pit:before{content:\"\"}.bosch-ic-radiator-fan-spray:before{content:\"\"}.bosch-ic-boost-down:before{content:\"\"}.bosch-ic-boost-up:before{content:\"\"}.bosch-ic-circle-lock:before{content:\"\"}.bosch-ic-mp-down:before{content:\"\"}.bosch-ic-mp-up:before{content:\"\"}.bosch-ic-tc-down:before{content:\"\"}.bosch-ic-tc-up:before{content:\"\"}.bosch-ic-danger-arrow-attention:before{content:\"\"}.bosch-ic-user-remove:before{content:\"\"}.bosch-ic-user-add:before{content:\"\"}.bosch-ic-post-it-collection:before{content:\"\"}.bosch-ic-horn:before{content:\"\"}.bosch-ic-desktop-notification:before{content:\"\"}.bosch-ic-router:before{content:\"\"}.bosch-ic-berry:before{content:\"\"}.bosch-ic-chat-language:before{content:\"\"}.bosch-ic-game-controller:before{content:\"\"}.bosch-ic-user-brain:before{content:\"\"}.bosch-ic-mouth-finger:before{content:\"\"}.bosch-ic-excavator-shovel:before{content:\"\"}.bosch-ic-ear-in:before{content:\"\"}.bosch-ic-ear-out:before{content:\"\"}.bosch-ic-lion:before{content:\"\"}.bosch-ic-car-convertible:before{content:\"\"}.bosch-ic-car-sports:before{content:\"\"}.bosch-ic-bear:before{content:\"\"}.bosch-ic-pot:before{content:\"\"}.bosch-ic-bed-double:before{content:\"\"}.bosch-ic-air-hot:before{content:\"\"}.bosch-ic-air-ice:before{content:\"\"}.bosch-ic-air-leaf:before{content:\"\"}.bosch-ic-air-purifier-0:before{content:\"\"}.bosch-ic-air-purifier-1:before{content:\"\"}.bosch-ic-air-purifier-2:before{content:\"\"}.bosch-ic-air-purifier-3:before{content:\"\"}.bosch-ic-air:before{content:\"\"}.bosch-ic-fan-off-disabled-bold:before{content:\"\"}.bosch-ic-ice-off-disabled-bold:before{content:\"\"}.bosch-ic-faucet-boost:before{content:\"\"}.bosch-ic-faucet-mode:before{content:\"\"}.bosch-ic-faucet-off-disabled-bold:before{content:\"\"}.bosch-ic-faucet-schedule:before{content:\"\"}.bosch-ic-fuel-cell:before{content:\"\"}.bosch-ic-heating-floor-off-disabled-bold:before{content:\"\"}.bosch-ic-heating-floor:before{content:\"\"}.bosch-ic-heating-radiator-boost:before{content:\"\"}.bosch-ic-heating-radiator-mode:before{content:\"\"}.bosch-ic-heating-radiator-off-disabled-bold:before{content:\"\"}.bosch-ic-heating-radiator-schedule:before{content:\"\"}.bosch-ic-leaf-simple:before{content:\"\"}.bosch-ic-oil-barrel:before{content:\"\"}.bosch-ic-water-bathtub:before{content:\"\"}.bosch-ic-water-dishwash:before{content:\"\"}.bosch-ic-water-handwash:before{content:\"\"}.bosch-ic-water-hot:before{content:\"\"}.bosch-ic-water-ice:before{content:\"\"}.bosch-ic-water-leaf:before{content:\"\"}.bosch-ic-water-ladder:before{content:\"\"}.bosch-ic-water-purifier-0:before{content:\"\"}.bosch-ic-water-purifier-1:before{content:\"\"}.bosch-ic-water-purifier-2:before{content:\"\"}.bosch-ic-water-purifier-3:before{content:\"\"}.bosch-ic-water-shower-boost:before{content:\"\"}.bosch-ic-water-shower-mode:before{content:\"\"}.bosch-ic-water-shower-off-disabled-bold:before{content:\"\"}.bosch-ic-water-shower-schedule:before{content:\"\"}.bosch-ic-water:before{content:\"\"}.bosch-ic-chart-bar-drop:before{content:\"\"}.bosch-ic-chart-bar-fire:before{content:\"\"}.bosch-ic-chart-bar-flash:before{content:\"\"}.bosch-ic-chart-bar-oil:before{content:\"\"}.bosch-ic-drop-minus:before{content:\"\"}.bosch-ic-drop-plus:before{content:\"\"}.bosch-ic-fan-minus:before{content:\"\"}.bosch-ic-fan-plus:before{content:\"\"}.bosch-ic-home-drops-0:before{content:\"\"}.bosch-ic-home-drops-1:before{content:\"\"}.bosch-ic-home-drops-2:before{content:\"\"}.bosch-ic-home-drops-3:before{content:\"\"}.bosch-ic-home-temperature-in:before{content:\"\"}.bosch-ic-home-temperature-out:before{content:\"\"}.bosch-ic-home-user-in:before{content:\"\"}.bosch-ic-ice-minus:before{content:\"\"}.bosch-ic-ice-plus:before{content:\"\"}.bosch-ic-chimney-sweeper:before{content:\"\"}.bosch-ic-menu-up:before{content:\"\"}.bosch-ic-security-ice:before{content:\"\"}.bosch-ic-security-legionella:before{content:\"\"}.bosch-ic-trolley-case:before{content:\"\"}.bosch-ic-sun-minus:before{content:\"\"}.bosch-ic-sun-plug:before{content:\"\"}.bosch-ic-sun-plus:before{content:\"\"}.bosch-ic-touch-pit:before{content:\"\"}.bosch-ic-temperature-current:before{content:\"\"}.bosch-ic-temperature-set:before{content:\"\"}.bosch-ic-teddy-bear:before{content:\"\"}.bosch-ic-document-svg:before{content:\"\"}.bosch-ic-back-menu:before{content:\"\"}.bosch-ic-car-arrows:before{content:\"\"}.bosch-ic-wrench-cloud:before{content:\"\"}.bosch-ic-weather-cloud-sun:before{content:\"\"}.bosch-ic-weather-cloudy:before{content:\"\"}.bosch-ic-weather-gale:before{content:\"\"}.bosch-ic-weather-mist:before{content:\"\"}.bosch-ic-weather-moon-cloud:before{content:\"\"}.bosch-ic-weather-rain-snow:before{content:\"\"}.bosch-ic-weather-rain-thunder:before{content:\"\"}.bosch-ic-weather-rain:before{content:\"\"}.bosch-ic-weather-snow:before{content:\"\"}.bosch-ic-weather-thunder:before{content:\"\"}.bosch-ic-weather-wind:before{content:\"\"}.bosch-ic-plane-start:before{content:\"\"}.bosch-ic-plane-land:before{content:\"\"}.bosch-ic-graph-power:before{content:\"\"}.bosch-ic-floorplan:before{content:\"\"}.bosch-ic-clock-pause:before{content:\"\"}.bosch-ic-clock-start:before{content:\"\"}.bosch-ic-clock-stop:before{content:\"\"}.bosch-ic-computer-retro:before{content:\"\"}.bosch-ic-smartphone-retro:before{content:\"\"}.bosch-ic-wood:before{content:\"\"}.bosch-ic-solid-fuel:before{content:\"\"}.bosch-ic-appliance-fan:before{content:\"\"}.bosch-ic-appliance-flame:before{content:\"\"}.bosch-ic-appliance-ice:before{content:\"\"}.bosch-ic-appliance-oil:before{content:\"\"}.bosch-ic-appliance-solid-fuel:before{content:\"\"}.bosch-ic-appliance-sun-ice:before{content:\"\"}.bosch-ic-appliance-sun:before{content:\"\"}.bosch-ic-appliance-wood:before{content:\"\"}.bosch-ic-appliance-air-leaf:before{content:\"\"}.bosch-ic-appliance-water-air:before{content:\"\"}.bosch-ic-appliance-water-leaf:before{content:\"\"}.bosch-ic-appliance-water-oil:before{content:\"\"}.bosch-ic-appliance-water:before{content:\"\"}.bosch-ic-appliance-heat-pump-air:before{content:\"\"}.bosch-ic-appliance-heat-pump-ground:before{content:\"\"}.bosch-ic-appliance-heat-pump-water:before{content:\"\"}.bosch-ic-appliance-plug-air:before{content:\"\"}.bosch-ic-appliance-plug-fuel-cell:before{content:\"\"}.bosch-ic-appliance-plug-leaf:before{content:\"\"}.bosch-ic-appliance-plug-water-air:before{content:\"\"}.bosch-ic-thermostat-connected-c:before{content:\"\"}.bosch-ic-thermostat-connected-f:before{content:\"\"}.bosch-ic-image-gallery:before{content:\"\"}.bosch-ic-arrows-caution:before{content:\"\"}.bosch-ic-arrows-diagonal-disabled-bold:before{content:\"\"}.bosch-ic-back-left-end:before{content:\"\"}.bosch-ic-back-right-end:before{content:\"\"}.bosch-ic-bar-chart-search:before{content:\"\"}.bosch-ic-batch:before{content:\"\"}.bosch-ic-calendar-remove:before{content:\"\"}.bosch-ic-call-bluetooth:before{content:\"\"}.bosch-ic-call-deny:before{content:\"\"}.bosch-ic-call-settings:before{content:\"\"}.bosch-ic-caution-sign-clock:before{content:\"\"}.bosch-ic-caution-sign-list:before{content:\"\"}.bosch-ic-core-data:before{content:\"\"}.bosch-ic-cursor-connected:before{content:\"\"}.bosch-ic-cursor:before{content:\"\"}.bosch-ic-dmc-code:before{content:\"\"}.bosch-ic-find-id:before{content:\"\"}.bosch-ic-globe-search:before{content:\"\"}.bosch-ic-interface:before{content:\"\"}.bosch-ic-material-add-manually:before{content:\"\"}.bosch-ic-material-list:before{content:\"\"}.bosch-ic-material-remove-manually:before{content:\"\"}.bosch-ic-material:before{content:\"\"}.bosch-ic-menu-checkmark:before{content:\"\"}.bosch-ic-qr-code:before{content:\"\"}.bosch-ic-sort-alphabetically:before{content:\"\"}.bosch-ic-unpin-classic-disabled-bold:before{content:\"\"}.bosch-ic-unpin-modern-disabled-bold:before{content:\"\"}.bosch-ic-window-search:before{content:\"\"}.bosch-ic-cloud-clock:before{content:\"\"}.bosch-ic-concierge:before{content:\"\"}.bosch-ic-heating-radiator:before{content:\"\"}.bosch-ic-home-user-out:before{content:\"\"}.bosch-ic-hot:before{content:\"\"}.bosch-ic-screen-service:before{content:\"\"}.bosch-ic-sun-ice:before{content:\"\"}.bosch-ic-sun-off-disabled-bold:before{content:\"\"}.bosch-ic-tractor:before{content:\"\"}.bosch-ic-video-recorder-digital:before{content:\"\"}.bosch-ic-windshield-wiper:before{content:\"\"}.bosch-ic-weather-snow-thunder:before{content:\"\"}.bosch-ic-electricity-pylon:before{content:\"\"}.bosch-ic-box-questionmark:before{content:\"\"}.bosch-ic-rainbow:before{content:\"\"}.bosch-ic-medal:before{content:\"\"}.bosch-ic-wheel:before{content:\"\"}.bosch-ic-borescope-connected:before{content:\"\"}.bosch-ic-filter-delete:before{content:\"\"}.bosch-ic-filter-add:before{content:\"\"}.bosch-ic-man:before{content:\"\"}.bosch-ic-woman:before{content:\"\"}.bosch-ic-fridge:before{content:\"\"}.bosch-ic-battery-car:before{content:\"\"}.bosch-ic-bag-escalator:before{content:\"\"}.bosch-ic-shopping-bags:before{content:\"\"}.bosch-ic-car-steering-left:before{content:\"\"}.bosch-ic-car-steering-right:before{content:\"\"}.bosch-ic-thumb-up-down:before{content:\"\"}.bosch-ic-user-run-detection:before{content:\"\"}.bosch-ic-bank:before{content:\"\"}.bosch-ic-transportation:before{content:\"\"}.bosch-ic-government:before{content:\"\"}.bosch-ic-user-music:before{content:\"\"}.bosch-ic-bus:before{content:\"\"}.bosch-ic-car-euro:before{content:\"\"}.bosch-ic-bag:before{content:\"\"}.bosch-ic-plate-tetrapack:before{content:\"\"}.bosch-ic-hospital:before{content:\"\"}.bosch-ic-desktop-structure:before{content:\"\"}.bosch-ic-frog-head:before{content:\"\"}.bosch-ic-sportboat:before{content:\"\"}.bosch-ic-yacht:before{content:\"\"}.bosch-ic-leaf-tilia:before{content:\"\"}.bosch-ic-music:before{content:\"\"}.bosch-ic-oil-lamp:before{content:\"\"}.bosch-ic-windshield-wiper-rear:before{content:\"\"}.bosch-ic-dongle-connected:before{content:\"\"}.bosch-ic-slate:before{content:\"\"}.bosch-ic-appliance-heat-pump-exhaust:before{content:\"\"}.bosch-ic-alert-list:before{content:\"\"}.bosch-ic-arrow-left-end-frame:before{content:\"\"}.bosch-ic-arrow-right-end-frame:before{content:\"\"}.bosch-ic-shape-ellipse:before{content:\"\"}.bosch-ic-shape-rectangle:before{content:\"\"}.bosch-ic-wishlist-add:before{content:\"\"}.bosch-ic-smartphone-disabled-light:before{content:\"\"}.bosch-ic-airbag:before{content:\"\"}.bosch-ic-compass:before{content:\"\"}.bosch-ic-turbine-wind:before{content:\"\"}.bosch-ic-arrows-diagonal-disabled-light:before{content:\"\"}.bosch-ic-ear-off-disabled-bold:before{content:\"\"}.bosch-ic-fan-off-disabled-light:before{content:\"\"}.bosch-ic-faucet-off-disabled-light:before{content:\"\"}.bosch-ic-hand-motion-off-disabled-bold:before{content:\"\"}.bosch-ic-heating-floor-off-disabled-light:before{content:\"\"}.bosch-ic-heating-radiator-off-disabled-light:before{content:\"\"}.bosch-ic-ice-off-disabled-light:before{content:\"\"}.bosch-ic-smartphone-disabled-bold:before{content:\"\"}.bosch-ic-subtitles-off-bold:before{content:\"\"}.bosch-ic-sun-off-disabled-light:before{content:\"\"}.bosch-ic-video-disabled-bold:before{content:\"\"}.bosch-ic-volume-off-bold:before{content:\"\"}.bosch-ic-watch-off-disabled-bold:before{content:\"\"}.bosch-ic-water-shower-off-disabled-light:before{content:\"\"}.bosch-ic-3d-frame-play:before{content:\"\"}.bosch-ic-alert-error-checkmark:before{content:\"\"}.bosch-ic-arrow-up-frame-check:before{content:\"\"}.bosch-ic-arrow-up-frame-error:before{content:\"\"}.bosch-ic-arrows-checkmark:before{content:\"\"}.bosch-ic-assembly-line-settings:before{content:\"\"}.bosch-ic-augmented-reality-player:before{content:\"\"}.bosch-ic-bar-chart-kappa:before{content:\"\"}.bosch-ic-bar-chart-search-detail:before{content:\"\"}.bosch-ic-barcode-checkmark:before{content:\"\"}.bosch-ic-barcode-scan-bulb:before{content:\"\"}.bosch-ic-barcode:before{content:\"\"}.bosch-ic-binary:before{content:\"\"}.bosch-ic-book-lightbulb:before{content:\"\"}.bosch-ic-box-arrow-down:before{content:\"\"}.bosch-ic-box-delivery-checkmark:before{content:\"\"}.bosch-ic-globe-checkmark:before{content:\"\"}.bosch-ic-calendar-boxes:before{content:\"\"}.bosch-ic-calendar-service:before{content:\"\"}.bosch-ic-camera-processor:before{content:\"\"}.bosch-ic-camera-settings:before{content:\"\"}.bosch-ic-chart-line-checkmark:before{content:\"\"}.bosch-ic-checklist-stack:before{content:\"\"}.bosch-ic-checkmark-frame-minimum:before{content:\"\"}.bosch-ic-checkmark-frame-tripple:before{content:\"\"}.bosch-ic-clipboard-checkmark:before{content:\"\"}.bosch-ic-clipboard-list-parts:before{content:\"\"}.bosch-ic-clipboard-settings:before{content:\"\"}.bosch-ic-computer-tower-box:before{content:\"\"}.bosch-ic-connectivity-lock:before{content:\"\"}.bosch-ic-counter-current:before{content:\"\"}.bosch-ic-counter-target:before{content:\"\"}.bosch-ic-cube-checkmark:before{content:\"\"}.bosch-ic-cube-play:before{content:\"\"}.bosch-ic-time-line-settings:before{content:\"\"}.bosch-ic-time-line-view:before{content:\"\"}.bosch-ic-time-line:before{content:\"\"}.bosch-ic-delivery-checkmark:before{content:\"\"}.bosch-ic-desktop-application-3d-play:before{content:\"\"}.bosch-ic-desktop-apps-download:before{content:\"\"}.bosch-ic-desktop-dashboard:before{content:\"\"}.bosch-ic-desktop-graph-checkmark:before{content:\"\"}.bosch-ic-desktop-graph-search:before{content:\"\"}.bosch-ic-desktop-graph:before{content:\"\"}.bosch-ic-development-kit:before{content:\"\"}.bosch-ic-directory-cloud-settings:before{content:\"\"}.bosch-ic-directory-cloud:before{content:\"\"}.bosch-ic-directory-settings:before{content:\"\"}.bosch-ic-document-clock-cycle:before{content:\"\"}.bosch-ic-document-code-stack:before{content:\"\"}.bosch-ic-document-dat-edit:before{content:\"\"}.bosch-ic-document-ohd-arrow-down:before{content:\"\"}.bosch-ic-dolphin:before{content:\"\"}.bosch-ic-energy-management:before{content:\"\"}.bosch-ic-eraser:before{content:\"\"}.bosch-ic-folder-broom:before{content:\"\"}.bosch-ic-folder-check-broom:before{content:\"\"}.bosch-ic-folder-checkmark:before{content:\"\"}.bosch-ic-folder-oes-check:before{content:\"\"}.bosch-ic-folder-open-service:before{content:\"\"}.bosch-ic-folder-reload:before{content:\"\"}.bosch-ic-hand-command:before{content:\"\"}.bosch-ic-heating-start:before{content:\"\"}.bosch-ic-hierarchy-refresh:before{content:\"\"}.bosch-ic-hierarchy-search:before{content:\"\"}.bosch-ic-hierarchy-settings:before{content:\"\"}.bosch-ic-hierarchy:before{content:\"\"}.bosch-ic-hmi-desktop-settings:before{content:\"\"}.bosch-ic-human-machine-interface:before{content:\"\"}.bosch-ic-keys-user-access:before{content:\"\"}.bosch-ic-keys:before{content:\"\"}.bosch-ic-label-edit:before{content:\"\"}.bosch-ic-line-arrow-checkmark:before{content:\"\"}.bosch-ic-link-checkmark:before{content:\"\"}.bosch-ic-lock-closed-checkmark:before{content:\"\"}.bosch-ic-lock-open-checkmark:before{content:\"\"}.bosch-ic-material-search:before{content:\"\"}.bosch-ic-objects-search:before{content:\"\"}.bosch-ic-objects:before{content:\"\"}.bosch-ic-plan-a-to-b:before{content:\"\"}.bosch-ic-plan-chart:before{content:\"\"}.bosch-ic-print-send:before{content:\"\"}.bosch-ic-refresh-analysis:before{content:\"\"}.bosch-ic-remote-desktop-add:before{content:\"\"}.bosch-ic-rfid-checkmark:before{content:\"\"}.bosch-ic-rfid-tag:before{content:\"\"}.bosch-ic-sequence-checkmark:before{content:\"\"}.bosch-ic-server-arrow-up:before{content:\"\"}.bosch-ic-server-arrows:before{content:\"\"}.bosch-ic-server-settings:before{content:\"\"}.bosch-ic-server-share:before{content:\"\"}.bosch-ic-settings-editor:before{content:\"\"}.bosch-ic-survey-checkmark:before{content:\"\"}.bosch-ic-target-dart:before{content:\"\"}.bosch-ic-target-view:before{content:\"\"}.bosch-ic-target:before{content:\"\"}.bosch-ic-thickness-selection:before{content:\"\"}.bosch-ic-toolbox-checkmark:before{content:\"\"}.bosch-ic-toolbox:before{content:\"\"}.bosch-ic-translate:before{content:\"\"}.bosch-ic-tune-vertical-checkmark:before{content:\"\"}.bosch-ic-wand-user-add:before{content:\"\"}.bosch-ic-wand-user-settings:before{content:\"\"}.bosch-ic-wand-user:before{content:\"\"}.bosch-ic-window-globe:before{content:\"\"}.bosch-ic-wrench-change:before{content:\"\"}.bosch-ic-clock-24-7:before{content:\"\"}.bosch-ic-eagle:before{content:\"\"}.bosch-ic-fluorescent-light:before{content:\"\"}.bosch-ic-home-cloud-0:before{content:\"\"}.bosch-ic-home-cloud-1:before{content:\"\"}.bosch-ic-home-cloud-2:before{content:\"\"}.bosch-ic-home-cloud-3:before{content:\"\"}.bosch-ic-home-shadow:before{content:\"\"}.bosch-ic-motorcycle-sport:before{content:\"\"}.bosch-ic-smartphone-connected:before{content:\"\"}.bosch-ic-usb-stick:before{content:\"\"}.bosch-ic-user--setting:before{content:\"\"}.bosch-ic-time-line-clock:before{content:\"\"}.bosch-ic-alarm-fire:before{content:\"\"}.bosch-ic-emergency-front:before{content:\"\"}.bosch-ic-transporter-front:before{content:\"\"}.bosch-ic-truck-front:before{content:\"\"}.bosch-ic-unpin-classic-disabled-light:before{content:\"\"}.bosch-ic-unpin-modern-disabled-light:before{content:\"\"}.bosch-ic-smartphone-ban:before{content:\"\"}.bosch-ic-helmet:before{content:\"\"}.bosch-ic-gate-closed:before{content:\"\"}.bosch-ic-fence:before{content:\"\"}.bosch-ic-desktop-apps:before{content:\"\"}.bosch-ic-candle:before{content:\"\"}.bosch-ic-abort-frame:before{content:\"\"}.bosch-ic-arrow-down-frame:before{content:\"\"}.bosch-ic-arrow-left-down-frame:before{content:\"\"}.bosch-ic-arrow-left-frame:before{content:\"\"}.bosch-ic-arrow-left-up-frame:before{content:\"\"}.bosch-ic-arrow-right-down-frame:before{content:\"\"}.bosch-ic-arrow-right-frame:before{content:\"\"}.bosch-ic-arrow-right-up-frame:before{content:\"\"}.bosch-ic-arrow-up-frame:before{content:\"\"}.bosch-ic-asiapacific-frame:before{content:\"\"}.bosch-ic-cash-frame:before{content:\"\"}.bosch-ic-checkmark-frame:before{content:\"\"}.bosch-ic-copyright-frame:before{content:\"\"}.bosch-ic-download-frame:before{content:\"\"}.bosch-ic-europe-frame:before{content:\"\"}.bosch-ic-lock-closed-frame:before{content:\"\"}.bosch-ic-lock-open-frame:before{content:\"\"}.bosch-ic-my-brand-frame:before{content:\"\"}.bosch-ic-northamerica-frame:before{content:\"\"}.bosch-ic-problem-frame:before{content:\"\"}.bosch-ic-promotion-frame:before{content:\"\"}.bosch-ic-question-frame:before{content:\"\"}.bosch-ic-share-frame:before{content:\"\"}.bosch-ic-southamerica-frame:before{content:\"\"}.bosch-ic-start-play-frame:before{content:\"\"}.bosch-ic-upload-frame:before{content:\"\"}.bosch-ic-world-frame:before{content:\"\"}.bosch-ic-add-frame:before{content:\"\"}.bosch-ic-call-deny-frame:before{content:\"\"}.bosch-ic-call-frame:before{content:\"\"}.bosch-ic-fast-backward-frame:before{content:\"\"}.bosch-ic-fast-forward-frame:before{content:\"\"}.bosch-ic-skip-backward-frame:before{content:\"\"}.bosch-ic-skip-fast-backward-frame:before{content:\"\"}.bosch-ic-skip-fast-forward-frame:before{content:\"\"}.bosch-ic-skip-forward-frame:before{content:\"\"}.bosch-ic-subtract-frame:before{content:\"\"}.bosch-ic-facebook-frame:before{content:\"\"}.bosch-ic-googleplus-frame:before{content:\"\"}.bosch-ic-instagram-frame:before{content:\"\"}.bosch-ic-lineapp-frame:before{content:\"\"}.bosch-ic-linkedin-frame:before{content:\"\"}.bosch-ic-pinterest-frame:before{content:\"\"}.bosch-ic-snapchat-frame:before{content:\"\"}.bosch-ic-tumblr-frame:before{content:\"\"}.bosch-ic-twitter-frame:before{content:\"\"}.bosch-ic-vimeo-frame:before{content:\"\"}.bosch-ic-wechat-frame:before{content:\"\"}.bosch-ic-weibo-frame:before{content:\"\"}.bosch-ic-whatsapp-frame:before{content:\"\"}.bosch-ic-xing-frame:before{content:\"\"}.bosch-ic-youku-frame:before{content:\"\"}.bosch-ic-youtube-frame:before{content:\"\"}.bosch-ic-vk-frame:before{content:\"\"}.bosch-ic-skype-frame:before{content:\"\"}.bosch-ic-alert-error-filled:before{content:\"\"}.bosch-ic-alert-error:before{content:\"\"}.bosch-ic-alert-success-filled:before{content:\"\"}.bosch-ic-alert-success:before{content:\"\"}.bosch-ic-alert-warning-filled:before{content:\"\"}.bosch-ic-alert-warning:before{content:\"\"}/*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n *//*!\n  *  Copyright (C) 2019 Robert Bosch GmbH Copyright (C) 2019 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */.Bosch-IC-find-part:before{content:\"\"}.Bosch-IC-next-station:before{content:\"\"}.Bosch-Ic-HMI:before{content:\"\"}.Bosch-Ic-add-outline:before{content:\"\"}.Bosch-Ic-apas:before{content:\"\"}.Bosch-Ic-abort:before,.bosch-ic-abort:before{content:\"\"}.Bosch-Ic-cash:before{content:\"\"}.Bosch-Ic-pinterest:before{content:\"\"}.Bosch-Ic-problem:before{content:\"\"}.Bosch-Ic-promotion:before{content:\"\"}.Bosch-Ic-arrow-diagonal:before{content:\"\"}.Bosch-Ic-arrow-down-filled:before{content:\"\"}.Bosch-Ic-arrow-down-circle:before{content:\"\"}.Bosch-Ic-arrow-end-left:before{content:\"\"}.Bosch-Ic-arrow-end-right:before{content:\"\"}.Bosch-Ic-arrow-left-down-filled:before{content:\"\"}.Bosch-Ic-arrow-left-filled:before{content:\"\"}.Bosch-Ic-arrow-left-up-filled:before{content:\"\"}.Bosch-Ic-arrow-right-down-filled:before{content:\"\"}.Bosch-Ic-arrow-right-filled:before{content:\"\"}.Bosch-Ic-arrow-right-up-filled:before{content:\"\"}.Bosch-Ic-arrow-up-filled:before{content:\"\"}.Bosch-Ic-batch:before{content:\"\"}.Bosch-Ic-calculator:before{content:\"\"}.Bosch-Ic-calendar-delete:before{content:\"\"}.Bosch-Ic-call-bluetooth:before{content:\"\"}.Bosch-Ic-call-deny-outline:before{content:\"\"}.Bosch-Ic-call-deny:before{content:\"\"}.Bosch-Ic-call-pick-up-outline:before{content:\"\"}.Bosch-Ic-call-pick-up:before{content:\"\"}.Bosch-Ic-call-settings:before{content:\"\"}.Bosch-Ic-clear-all-annotations:before{content:\"\"}.Bosch-Ic-connection:before{content:\"\"}.Bosch-Ic-core-data:before{content:\"\"}.Bosch-Ic-curve-scaling-view:before{content:\"\"}.Bosch-Ic-dashboard:before{content:\"\"}.Bosch-Ic-delete-material-manually:before{content:\"\"}.Bosch-Ic-dmc-code:before{content:\"\"}.Bosch-Ic-document-to-svg:before{content:\"\"}.Bosch-Ic-emergency-order:before{content:\"\"}.Bosch-Ic-fast-backwards:before{content:\"\"}.Bosch-Ic-fast-forwards:before{content:\"\"}.Bosch-Ic-favorite:before{content:\"\"}.Bosch-Ic-go-to:before{content:\"\"}.Bosch-Ic-gps:before{content:\"\"}.Bosch-Ic-home-filled:before{content:\"\"}.Bosch-Ic-input:before{content:\"\"}.Bosch-Ic-interface:before{content:\"\"}.Bosch-Ic-list:before{content:\"\"}.Bosch-Ic-malfunction-history:before{content:\"\"}.Bosch-Ic-malfunction-order:before{content:\"\"}.Bosch-Ic-material-list:before{content:\"\"}.Bosch-Ic-material:before{content:\"\"}.Bosch-Ic-maximize-window:before{content:\"\"}.Bosch-Ic-menu-tree:before{content:\"\"}.Bosch-Ic-minimize-window:before{content:\"\"}.Bosch-Ic-notification-hint:before{content:\"\"}.Bosch-Ic-notification-question:before{content:\"\"}.Bosch-Ic-notification-error:before{content:\"\"}.Bosch-Ic-notification-outline:before{content:\"\"}.Bosch-Ic-notification-success:before{content:\"\"}.Bosch-Ic-notification-warning:before{content:\"\"}.Bosch-Ic-notification:before{content:\"\"}.Bosch-Ic-output:before{content:\"\"}.Bosch-Ic-paste:before{content:\"\"}.Bosch-Ic-qr-code:before{content:\"\"}.Bosch-Ic-remote-cursor:before{content:\"\"}.Bosch-Ic-scale:before{content:\"\"}.Bosch-Ic-search-chart:before{content:\"\"}.Bosch-Ic-search-web:before{content:\"\"}.Bosch-Ic-search-window:before{content:\"\"}.Bosch-Ic-shape-ellipse:before{content:\"\"}.Bosch-Ic-shape-rectangle:before{content:\"\"}.Bosch-Ic-show-more-vertical:before{content:\"\"}.Bosch-Ic-signal:before{content:\"\"}.Bosch-Ic-skip-back:before{content:\"\"}.Bosch-Ic-skip-backward:before{content:\"\"}.Bosch-Ic-StarterKit:before{content:\"\"}.Bosch-Ic-skip-for:before{content:\"\"}.Bosch-Ic-skip-forward:before{content:\"\"}.Bosch-Ic-sort-alphabetically:before{content:\"\"}.Bosch-Ic-switch-language:before{content:\"\"}.Bosch-Ic-snyc-disabled:before{content:\"\"}.Bosch-Ic-sync-disabled:before{content:\"\"}.Bosch-Ic-sync-problem:before{content:\"\"}.Bosch-Ic-sync:before{content:\"\"}.Bosch-Ic-test:before{content:\"\"}.Bosch-Ic-to-order:before{content:\"\"}.Bosch-Ic-to-raw:before{content:\"\"}.Bosch-Ic-transport-orders:before{content:\"\"}.Bosch-Ic-unpin:before{content:\"\"}.Bosch-Ic-user-filled:before{content:\"\"}.Bosch-Ic-video-play:before{content:\"\"}.Bosch-Ic-weblink:before{content:\"\"}.Bosch-Ic-warning-outline:before{content:\"\"}.Bosch-Ic-add-material-manually:before{content:\"\"}.Bosch-Ic-add-material:before{content:\"\"}.Bosch-Ic-add:before{content:\"\"}.Bosch-Ic-adress-consumer:before{content:\"\"}.Bosch-Ic-adressbook:before{content:\"\"}.Bosch-Ic-alarm:before{content:\"\"}.Bosch-Ic-alert:before{content:\"\"}.Bosch-Ic-analysis:before{content:\"\"}.Bosch-Ic-anchor:before{content:\"\"}.Bosch-IC-3d-print:before{content:\"\"}.Bosch-Ic-tours:before{content:\"\"}.Bosch-Ic-add:before{content:\"\"}.Bosch-Ic-adress-consumer:before{content:\"\"}.Bosch-Ic-adressbook:before{content:\"\"}.Bosch-IC-agility:before{content:\"\"}.Bosch-Ic-clock-stop:before{content:\"\"}.Bosch-IC-ambulance:before{content:\"\"}.Bosch-Ic-analysis:before{content:\"\"}.Bosch-Ic-anchor:before{content:\"\"}.Bosch-Ic-arrow-down:before{content:\"\"}.Bosch-Ic-arrow-left:before{content:\"\"}.Bosch-Ic-arrow-left-down:before{content:\"\"}.Bosch-Ic-arrow-left-up:before{content:\"\"}.Bosch-Ic-arrow-right:before{content:\"\"}.Bosch-Ic-arrow-right-down:before{content:\"\"}.Bosch-Ic-arrow-right-up:before{content:\"\"}.Bosch-IC-arrow-turn-left:before{content:\"\"}.Bosch-IC-arrow-turn-right:before{content:\"\"}.Bosch-Ic-arrow-up:before{content:\"\"}.Bosch-IC-arrows:before{content:\"\"}.Bosch-IC-arrows-x-y-z:before{content:\"\"}.Bosch-IC-artificial-intelligence:before{content:\"\"}.Bosch-IC-assembly-line:before{content:\"\"}.Bosch-IC-atom:before{content:\"\"}.Bosch-IC-augmented-reality:before{content:\"\"}.Bosch-Ic-autobod:before{content:\"\"}.Bosch-Ic-arrow-expand-left:before{content:\"\"}.Bosch-Ic-arrow-expand-double-left:before{content:\"\"}.Bosch-IC-bar-chart:before{content:\"\"}.Bosch-IC-bar-chart-double:before{content:\"\"}.Bosch-Ic-battery-empty:before{content:\"\"}.Bosch-Ic-battery-25:before{content:\"\"}.Bosch-Ic-battery-50:before{content:\"\"}.Bosch-Ic-battery-75:before{content:\"\"}.Bosch-Ic-battery-100:before{content:\"\"}.Bosch-Ic-battery-error:before{content:\"\"}.Bosch-IC-battery_Li-Ion:before{content:\"\"}.Bosch-Ic-battery-charging:before{content:\"\"}.Bosch-Ic-help:before{content:\"\"}.Bosch-IC-bed:before{content:\"\"}.Bosch-IC-bicycle:before{content:\"\"}.Bosch-IC-bicycle-e:before{content:\"\"}.Bosch-IC-blog:before{content:\"\"}.Bosch-IC-bluetooth:before{content:\"\"}.Bosch-IC-bluetooth-LE:before{content:\"\"}.Bosch-IC-board-speaker:before{content:\"\"}.Bosch-IC-boiler-connected:before{content:\"\"}.Bosch-IC-book:before{content:\"\"}.Bosch-Ic-bookmark:before{content:\"\"}.Bosch-Ic-bookmark-add:before{content:\"\"}.Bosch-Ic-bookmark-check:before{content:\"\"}.Bosch-Ic-bookmark-delete:before{content:\"\"}.Bosch-IC-books:before{content:\"\"}.Bosch-IC-bookshelf:before{content:\"\"}.Bosch-Ic-box:before{content:\"\"}.Bosch-IC-box-closed:before{content:\"\"}.Bosch-IC-box-delivery:before{content:\"\"}.Bosch-IC-box-delivery-connected:before{content:\"\"}.Bosch-IC-brake-disk:before{content:\"\"}.Bosch-IC-briefcase:before{content:\"\"}.Bosch-IC-broom:before{content:\"\"}.Bosch-IC-broom-cloud-dirt:before{content:\"\"}.Bosch-Ic-brush:before{content:\"\"}.Bosch-Ic-bug:before{content:\"\"}.Bosch-IC-building:before{content:\"\"}.Bosch-IC-cactus:before{content:\"\"}.Bosch-IC-calculate:before{content:\"\"}.Bosch-Ic-calendar:before{content:\"\"}.Bosch-Ic-calendar-add:before{content:\"\"}.Bosch-IC-calendar-settings:before{content:\"\"}.Bosch-Ic-call:before{content:\"\"}.Bosch-IC-call-add:before{content:\"\"}.Bosch-IC-call-remove:before{content:\"\"}.Bosch-IC-call-sos:before{content:\"\"}.Bosch-IC-call-team:before{content:\"\"}.Bosch-Ic-call-wifi:before{content:\"\"}.Bosch-Ic-camera:before{content:\"\"}.Bosch-Ic-camera-switch:before{content:\"\"}.Bosch-IC-car:before{content:\"\"}.Bosch-IC-car-clock:before{content:\"\"}.Bosch-IC-car-connected:before{content:\"\"}.Bosch-IC-car-locator:before{content:\"\"}.Bosch-IC-car-mechanic:before{content:\"\"}.Bosch-IC-car-rental:before{content:\"\"}.Bosch-IC-car-seat-connected:before{content:\"\"}.Bosch-IC-car-side:before{content:\"\"}.Bosch-IC-car-side-user:before{content:\"\"}.Bosch-Ic-milkrun-cart:before{content:\"\"}.Bosch-Ic-certificate:before{content:\"\"}.Bosch-IC-certificate-pki:before{content:\"\"}.Bosch-IC-change:before{content:\"\"}.Bosch-Ic-chart:before{content:\"\"}.Bosch-IC-chart-check:before{content:\"\"}.Bosch-IC-chart-dummy:before{content:\"\"}.Bosch-Ic-diagram:before{content:\"\"}.Bosch-Ic-chat:before{content:\"\"}.Bosch-IC-chat-add:before{content:\"\"}.Bosch-IC-chat-question-answer:before{content:\"\"}.Bosch-IC-chat-remove:before{content:\"\"}.Bosch-Ic-checklist:before{content:\"\"}.Bosch-Ic-checkmark:before{content:\"\"}.Bosch-Ic-chip:before{content:\"\"}.Bosch-IC-circle-segment:before{content:\"\"}.Bosch-IC-clear-all:before{content:\"\"}.Bosch-Ic-clipboard:before{content:\"\"}.Bosch-Ic-clipboard-list:before{content:\"\"}.Bosch-Ic-clock:before{content:\"\"}.Bosch-Ic-abort:before,.bosch-ic-abort:before{content:\"\"}.Bosch-IC-close-all:before{content:\"\"}.Bosch-Ic-cloud:before{content:\"\"}.Bosch-IC-cloud-co2:before{content:\"\"}.Bosch-Ic-cloud-download:before{content:\"\"}.Bosch-IC-cloud-nox:before{content:\"\"}.Bosch-Ic-cloud-upload:before{content:\"\"}.Bosch-IC-club-arm-chair:before{content:\"\"}.Bosch-IC-coffee-break:before{content:\"\"}.Bosch-IC-coin-currency:before{content:\"\"}.Bosch-Ic-currency:before{content:\"\"}.Bosch-Ic-color-picker:before{content:\"\"}.Bosch-IC-colors:before{content:\"\"}.Bosch-Ic-command:before{content:\"\"}.Bosch-IC-communicator:before{content:\"\"}.Bosch-Ic-compare:before{content:\"\"}.Bosch-Ic-components:before{content:\"\"}.Bosch-Ic-components-available:before{content:\"\"}.Bosch-Ic-components-reservation:before{content:\"\"}.Bosch-IC-concierge-bell:before{content:\"\"}.Bosch-IC-configuration:before{content:\"\"}.Bosch-Ic-confirmation:before{content:\"\"}.Bosch-Ic-unconnected:before{content:\"\"}.Bosch-Ic-connected:before{content:\"\"}.Bosch-IC-connectivity:before{content:\"\"}.Bosch-Ic-builder:before{content:\"\"}.Bosch-IC-consumer-goods:before{content:\"\"}.Bosch-IC-contract:before{content:\"\"}.Bosch-Ic-copy:before{content:\"\"}.Bosch-IC-cube:before{content:\"\"}.Bosch-IC-cube-arrows:before{content:\"\"}.Bosch-Ic-StarterKit:before{content:\"\"}.Bosch-IC-cube-shock:before{content:\"\"}.Bosch-IC-cube-stacked:before{content:\"\"}.Bosch-Ic-customerservice:before{content:\"\"}.Bosch-IC-cutlery:before{content:\"\"}.Bosch-IC-damper:before{content:\"\"}.Bosch-IC-danger-flash:before{content:\"\"}.Bosch-IC-data-loss:before{content:\"\"}.Bosch-Ic-dealer:before{content:\"\"}.Bosch-Ic-delete:before{content:\"\"}.Bosch-Ic-delivery:before{content:\"\"}.Bosch-IC-denied:before{content:\"\"}.Bosch-Ic-desktop:before{content:\"\"}.Bosch-IC-desktop-application-2d:before{content:\"\"}.Bosch-IC-desktop-application-3d:before{content:\"\"}.Bosch-IC-development:before{content:\"\"}.Bosch-Ic-devices:before{content:\"\"}.Bosch-IC-devices-mobile:before{content:\"\"}.Bosch-Ic-directory:before{content:\"\"}.Bosch-Ic-dna:before{content:\"\"}.Bosch-Ic-do-not-disturb:before{content:\"\"}.Bosch-Ic-document:before{content:\"\"}.Bosch-Ic-document-add:before{content:\"\"}.Bosch-IC-document-arrow-down:before{content:\"\"}.Bosch-IC-document-arrow-up:before{content:\"\"}.Bosch-Ic-document-audio:before{content:\"\"}.Bosch-IC-document-check:before{content:\"\"}.Bosch-Ic-document-to-cloud:before{content:\"\"}.Bosch-Ic-document-copy:before{content:\"\"}.Bosch-Ic-document-delete:before{content:\"\"}.Bosch-Ic-document-to-doc:before{content:\"\"}.Bosch-Ic-document-edit:before{content:\"\"}.Bosch-Ic-document-error:before{content:\"\"}.Bosch-Ic-document-locked:before{content:\"\"}.Bosch-Ic-log-file:before{content:\"\"}.Bosch-Ic-document-to-one:before{content:\"\"}.Bosch-Ic-document-to-pdf:before{content:\"\"}.Bosch-Ic-document-plain:before{content:\"\"}.Bosch-Ic-document-plain-add:before{content:\"\"}.Bosch-Ic-document-plain-delete:before{content:\"\"}.Bosch-Ic-document-to-ppt:before{content:\"\"}.Bosch-Ic-document-to-pub:before{content:\"\"}.Bosch-Ic-document-to-rtf:before{content:\"\"}.Bosch-Ic-document-save-to:before{content:\"\"}.Bosch-Ic-search-document:before{content:\"\"}.Bosch-Ic-document-settings:before{content:\"\"}.Bosch-Ic-document-test:before{content:\"\"}.Bosch-Ic-document-text:before{content:\"\"}.Bosch-Ic-document-to-txt:before{content:\"\"}.Bosch-Ic-document-to-vsd:before{content:\"\"}.Bosch-Ic-document-to-xls:before{content:\"\"}.Bosch-Ic-document-to-xml:before{content:\"\"}.Bosch-Ic-document-to-zip:before{content:\"\"}.Bosch-IC-dome:before{content:\"\"}.Bosch-IC-door:before{content:\"\"}.Bosch-IC-door-sensor:before{content:\"\"}.Bosch-Ic-arrow-expand-down:before{content:\"\"}.Bosch-Ic-arrow-expand-double-down:before{content:\"\"}.Bosch-Ic-arrow-left-circle:before{content:\"\"}.Bosch-Ic-arrow-right-circle:before{content:\"\"}.Bosch-Ic-arrow-right-down-circle:before{content:\"\"}.Bosch-Ic-arrow-right-up-circle:before{content:\"\"}.Bosch-Ic-arrow-left-down-circle:before{content:\"\"}.Bosch-Ic-arrow-left-up-circle:before{content:\"\"}.Bosch-Ic-arrow-up-circle:before{content:\"\"}.Bosch-Ic-download:before{content:\"\"}.Bosch-IC-drag-handle:before{content:\"\"}.Bosch-IC-dragdrop:before{content:\"\"}.Bosch-IC-drop:before{content:\"\"}.Bosch-IC-e-Charging:before{content:\"\"}.Bosch-IC-e-mobility:before{content:\"\"}.Bosch-IC-ear-off:before{content:\"\"}.Bosch-IC-ear-on:before{content:\"\"}.Bosch-IC-eco-system:before{content:\"\"}.Bosch-Ic-edit:before{content:\"\"}.Bosch-IC-education:before{content:\"\"}.Bosch-IC-efficiency:before{content:\"\"}.Bosch-IC-elevator:before{content:\"\"}.Bosch-IC-elevator-alarm:before{content:\"\"}.Bosch-IC-elevator-cloud:before{content:\"\"}.Bosch-IC-elevator-headset:before{content:\"\"}.Bosch-IC-elevator-service:before{content:\"\"}.Bosch-IC-emergency-exit:before{content:\"\"}.Bosch-IC-emoji-happy:before{content:\"\"}.Bosch-IC-emoji-neutral:before{content:\"\"}.Bosch-IC-emoji-sad:before{content:\"\"}.Bosch-IC-emoji-super-happy:before{content:\"\"}.Bosch-IC-emoji-very-sad:before{content:\"\"}.Bosch-IC-EU-energy-label:before{content:\"\"}.Bosch-IC-excavator:before{content:\"\"}.Bosch-Ic-exit:before{content:\"\"}.Bosch-IC-expansion-arrows:before{content:\"\"}.Bosch-IC-explosion:before{content:\"\"}.Bosch-Ic-export:before{content:\"\"}.Bosch-IC-externallink:before{content:\"\"}.Bosch-IC-fast-forward:before{content:\"\"}.Bosch-IC-faucet:before{content:\"\"}.Bosch-IC-favorites:before{content:\"\"}.Bosch-IC-fax:before{content:\"\"}.Bosch-IC-female:before{content:\"\"}.Bosch-IC-film:before{content:\"\"}.Bosch-Ic-filter:before{content:\"\"}.Bosch-IC-filter-success:before{content:\"\"}.Bosch-IC-fingerprint:before{content:\"\"}.Bosch-IC-fire:before{content:\"\"}.Bosch-IC-fire-emergency:before{content:\"\"}.Bosch-IC-fireworks:before{content:\"\"}.Bosch-Ic-first-aid:before{content:\"\"}.Bosch-IC-first-aid-cross:before{content:\"\"}.Bosch-IC-fit-to-sceen:before{content:\"\"}.Bosch-Ic-flag:before{content:\"\"}.Bosch-Ic-danger-flash-outline:before{content:\"\"}.Bosch-IC-flask:before{content:\"\"}.Bosch-Ic-flexpress:before{content:\"\"}.Bosch-Ic-twitter:before{content:\"\"}.Bosch-Ic-folder:before{content:\"\"}.Bosch-Ic-download-from-folder:before{content:\"\"}.Bosch-Ic-download-frame:before{content:\"\"}.Bosch-IC-folder-open:before{content:\"\"}.Bosch-Ic-upload-to-folder:before{content:\"\"}.Bosch-Ic-fork-lift:before{content:\"\"}.Bosch-IC-fork-lift-locator:before{content:\"\"}.Bosch-Ic-arrow-expand-right:before{content:\"\"}.Bosch-Ic-arrow-expand-double-right:before{content:\"\"}.Bosch-IC-full-empty:before{content:\"\"}.Bosch-Ic-fullscreen:before{content:\"\"}.Bosch-IC-fullscreen-arrows:before{content:\"\"}.Bosch-Ic-fullscreen-exit:before{content:\"\"}.Bosch-IC-g-arrow-down:before{content:\"\"}.Bosch-IC-g-arrow-up:before{content:\"\"}.Bosch-IC-generator:before{content:\"\"}.Bosch-IC-gift:before{content:\"\"}.Bosch-IC-glance:before{content:\"\"}.Bosch-IC-glas-plate:before{content:\"\"}.Bosch-IC-globe:before{content:\"\"}.Bosch-IC-globe-arrow:before{content:\"\"}.Bosch-IC-glossary:before{content:\"\"}.Bosch-Ic-grid:before{content:\"\"}.Bosch-IC-hammer:before{content:\"\"}.Bosch-Ic-hand:before{content:\"\"}.Bosch-IC-hand-motion:before{content:\"\"}.Bosch-IC-hand-motion-off:before{content:\"\"}.Bosch-IC-handlewithcare:before{content:\"\"}.Bosch-Ic-add-material-manually:before{content:\"\"}.Bosch-Ic-handover-check:before{content:\"\"}.Bosch-Ic-remove-from-handover:before{content:\"\"}.Bosch-IC-hanger:before{content:\"\"}.Bosch-Ic-health:before{content:\"\"}.Bosch-IC-heart:before{content:\"\"}.Bosch-Ic-history:before{content:\"\"}.Bosch-Ic-home-outline:before{content:\"\"}.Bosch-IC-home-locator:before{content:\"\"}.Bosch-Ic-sandclock:before{content:\"\"}.Bosch-IC-hydrant:before{content:\"\"}.Bosch-IC-ice:before{content:\"\"}.Bosch-Ic-image:before{content:\"\"}.Bosch-IC-imagery-add:before{content:\"\"}.Bosch-IC-imagery-remove:before{content:\"\"}.Bosch-Ic-import:before{content:\"\"}.Bosch-Ic-imprint:before{content:\"\"}.Bosch-IC-impulse:before{content:\"\"}.Bosch-Ic-fabric:before{content:\"\"}.Bosch-IC-industry-clock:before{content:\"\"}.Bosch-IC-industry-connected:before{content:\"\"}.Bosch-Ic-information:before{content:\"\"}.Bosch-Ic-information-tooltip:before{content:\"\"}.Bosch-IC-interval:before{content:\"\"}.Bosch-IC-it-device:before{content:\"\"}.Bosch-IC-jewel:before{content:\"\"}.Bosch-IC-keyboard:before{content:\"\"}.Bosch-IC-label:before{content:\"\"}.Bosch-Ic-laptop-01:before{content:\"\"}.Bosch-IC-laser:before{content:\"\"}.Bosch-IC-layout:before{content:\"\"}.Bosch-IC-leaf:before{content:\"\"}.Bosch-IC-led:before{content:\"\"}.Bosch-Ic-world:before{content:\"\"}.Bosch-Ic-facebook:before{content:\"\"}.Bosch-Ic-checkmark-outline:before{content:\"\"}.Bosch-Ic-youtube:before{content:\"\"}.Bosch-Ic-share:before{content:\"\"}.Bosch-Ic-user:before{content:\"\"}.Bosch-Ic-upload_outline:before{content:\"\"}.Bosch-Ic-download_outline:before{content:\"\"}.Bosch-Ic-wishlist-add:before{content:\"\"}.Bosch-Ic-youtube-frame:before{content:\"\"}.Bosch-Ic-less-minimize:before{content:\"\"}.Bosch-IC-lightbulb:before{content:\"\"}.bosch-Ic-innovation:before{content:\"\"}.Bosch-IC-line-chart:before{content:\"\"}.Bosch-Ic-link:before{content:\"\"}.Bosch-IC-link-broken:before{content:\"\"}.Bosch-Ic-list-view:before{content:\"\"}.Bosch-Ic-menu:before{content:\"\"}.Bosch-IC-livechat:before{content:\"\"}.Bosch-Ic-location-pin:before{content:\"\"}.Bosch-IC-locator-ip-connected:before{content:\"\"}.Bosch-IC-locator-ip-disconnected:before{content:\"\"}.Bosch-IC-locator-spot:before{content:\"\"}.Bosch-IC-locator-spot-check:before{content:\"\"}.Bosch-Ic-lock-closed:before{content:\"\"}.Bosch-Ic-lock-open:before{content:\"\"}.Bosch-Ic-log-in:before{content:\"\"}.Bosch-Ic-logistics:before{content:\"\"}.Bosch-Ic-log-out:before{content:\"\"}.Bosch-IC-machine:before{content:\"\"}.Bosch-Ic-magnet:before{content:\"\"}.Bosch-Ic-mail:before{content:\"\"}.Bosch-Ic-mail-forward:before{content:\"\"}.Bosch-Ic-mail-open:before{content:\"\"}.Bosch-Ic-mail-out:before{content:\"\"}.Bosch-Ic-mail-answer:before{content:\"\"}.Bosch-IC-male:before{content:\"\"}.Bosch-Ic-map:before{content:\"\"}.Bosch-Ic-add-material:before{content:\"\"}.Bosch-IC-material-check:before{content:\"\"}.Bosch-Ic-remove-material:before{content:\"\"}.Bosch-IC-maximize:before{content:\"\"}.Bosch-IC-mechanic:before{content:\"\"}.Bosch-IC-megaphone:before{content:\"\"}.Bosch-Ic-message:before{content:\"\"}.Bosch-IC-mic:before{content:\"\"}.Bosch-Ic-microphone:before{content:\"\"}.Bosch-IC-microphone-classic:before{content:\"\"}.Bosch-IC-minimize:before{content:\"\"}.Bosch-IC-money-currency:before{content:\"\"}.Bosch-IC-money-dollar:before{content:\"\"}.Bosch-IC-moneybag-currency:before{content:\"\"}.Bosch-IC-moneybag-dollar:before{content:\"\"}.Bosch-IC-monument:before{content:\"\"}.Bosch-IC-moon:before{content:\"\"}.Bosch-IC-mouse:before{content:\"\"}.Bosch-IC-mouse-left:before{content:\"\"}.Bosch-IC-mouse-right:before{content:\"\"}.Bosch-IC-mouth:before{content:\"\"}.Bosch-Ic-my-product:before{content:\"\"}.Bosch-IC-new-way-work:before{content:\"\"}.Bosch-Ic-mail-sent:before{content:\"\"}.Bosch-Ic-news:before{content:\"\"}.Bosch-IC-nose:before{content:\"\"}.Bosch-Ic-notes:before{content:\"\"}.Bosch-Ic-notes-edit:before{content:\"\"}.Bosch-Ic-alarm:before{content:\"\"}.Bosch-IC-notification-active:before{content:\"\"}.Bosch-IC-notification-add:before{content:\"\"}.Bosch-IC-notification-remove:before{content:\"\"}.Bosch-Ic-oil-trailer:before{content:\"\"}.Bosch-IC-omnichannel:before{content:\"\"}.Bosch-Ic-show-more-horizontal:before{content:\"\"}.Bosch-IC-origami-boat:before{content:\"\"}.Bosch-Ic-palette-trailer:before{content:\"\"}.Bosch-IC-pallete-car-connected:before{content:\"\"}.Bosch-IC-panel:before{content:\"\"}.Bosch-Ic-paperclip:before{content:\"\"}.Bosch-IC-paperplane:before{content:\"\"}.Bosch-IC-parking:before{content:\"\"}.Bosch-Ic-pause:before{content:\"\"}.Bosch-Ic-creditcard:before{content:\"\"}.Bosch-IC-people:before{content:\"\"}.Bosch-IC-petrol-station:before{content:\"\"}.Bosch-IC-piggybank:before{content:\"\"}.Bosch-Ic-pin:before{content:\"\"}.Bosch-IC-pin-modern:before{content:\"\"}.Bosch-IC-plane-side:before{content:\"\"}.Bosch-Ic-play:before{content:\"\"}.Bosch-IC-plug-12V:before{content:\"\"}.Bosch-IC-podium-speaker:before{content:\"\"}.Bosch-IC-police:before{content:\"\"}.Bosch-IC-poop:before{content:\"\"}.Bosch-IC-post-it:before{content:\"\"}.Bosch-IC-postal-code:before{content:\"\"}.Bosch-IC-power:before{content:\"\"}.Bosch-Ic-print:before{content:\"\"}.Bosch-IC-prototyping:before{content:\"\"}.Bosch-IC-puzzle:before{content:\"\"}.Bosch-IC-quad:before{content:\"\"}.Bosch-IC-question:before{content:\"\"}.Bosch-IC-radar:before{content:\"\"}.Bosch-IC-radio:before{content:\"\"}.Bosch-Ic-radio:before{content:\"\"}.Bosch-IC-redirect:before{content:\"\"}.Bosch-Ic-redo:before{content:\"\"}.Bosch-IC-reference:before{content:\"\"}.Bosch-Ic-refresh:before{content:\"\"}.Bosch-IC-refresh-cloud:before{content:\"\"}.Bosch-Ic-registration:before{content:\"\"}.Bosch-IC-remote:before{content:\"\"}.Bosch-Ic-reset:before{content:\"\"}.Bosch-IC-resolution:before{content:\"\"}.Bosch-Ic-robot-automation:before{content:\"\"}.Bosch-IC-robot-connected:before{content:\"\"}.Bosch-IC-robothead:before{content:\"\"}.Bosch-IC-rocket:before{content:\"\"}.Bosch-Ic-rotation:before{content:\"\"}.Bosch-Ic-rotate-360-degrees:before{content:\"\"}.Bosch-Ic-rotate-clockwise:before{content:\"\"}.Bosch-Ic-rotate-counterclockwise:before{content:\"\"}.Bosch-IC-rotation-y-down:before{content:\"\"}.Bosch-IC-rotation-y-up:before{content:\"\"}.Bosch-Ic-navigation:before{content:\"\"}.Bosch-Ic-measure:before{content:\"\"}.Bosch-IC-ruler-pen:before{content:\"\"}.Bosch-Ic-satelite:before{content:\"\"}.Bosch-Ic-save:before{content:\"\"}.Bosch-IC-scale:before{content:\"\"}.Bosch-Ic-cut:before{content:\"\"}.Bosch-Ic-search:before{content:\"\"}.Bosch-IC-security:before{content:\"\"}.Bosch-IC-security-check:before{content:\"\"}.Bosch-IC-security-user:before{content:\"\"}.Bosch-Ic-sensor:before{content:\"\"}.Bosch-Ic-server:before{content:\"\"}.Bosch-IC-server-expansion:before{content:\"\"}.Bosch-IC-server-rate:before{content:\"\"}.Bosch-IC-service-agent:before{content:\"\"}.Bosch-IC-service-time:before{content:\"\"}.Bosch-Ic-settings:before{content:\"\"}.Bosch-IC-settings-arrows:before{content:\"\"}.Bosch-IC-settings-connected:before{content:\"\"}.Bosch-Ic-share-outline:before{content:\"\"}.Bosch-IC-shield-stop:before{content:\"\"}.Bosch-IC-ship:before{content:\"\"}.Bosch-IC-ship-side:before{content:\"\"}.Bosch-Ic-shoppingcart:before{content:\"\"}.Bosch-IC-shoppingcart-add:before{content:\"\"}.Bosch-IC-shoppingcart-switch:before{content:\"\"}.Bosch-IC-signal-full:before{content:\"\"}.Bosch-IC-signal-half:before{content:\"\"}.Bosch-IC-signal-lost:before{content:\"\"}.Bosch-IC-signpost:before{content:\"\"}.Bosch-IC-simcard:before{content:\"\"}.Bosch-IC-skyscraper:before{content:\"\"}.Bosch-IC-smartcity:before{content:\"\"}.Bosch-IC-smarthome:before{content:\"\"}.Bosch-Ic-phone:before{content:\"\"}.Bosch-IC-smartphone-acoustic:before{content:\"\"}.Bosch-IC-smartphone-arrow-right:before{content:\"\"}.Bosch-IC-smartphone-arrows-x-y-z:before{content:\"\"}.Bosch-IC-smartphone-clock:before{content:\"\"}.Bosch-IC-smartphone-cloud:before{content:\"\"}.Bosch-IC-smartphone-loading-wheel:before{content:\"\"}.Bosch-IC-smartphone-smashed:before{content:\"\"}.Bosch-IC-smartphone-vibration:before{content:\"\"}.Bosch-IC-smartphone-z:before{content:\"\"}.Bosch-Ic-spareparts:before{content:\"\"}.Bosch-IC-spark:before{content:\"\"}.Bosch-IC-speaker-acoustic:before{content:\"\"}.Bosch-IC-speedometer:before{content:\"\"}.Bosch-IC-stadium:before{content:\"\"}.Bosch-IC-stairs:before{content:\"\"}.Bosch-IC-stamp:before{content:\"\"}.Bosch-IC-standby:before{content:\"\"}.Bosch-IC-steering-wheel:before{content:\"\"}.Bosch-IC-steering-wheel-connected:before{content:\"\"}.Bosch-IC-steering-wheel-hands:before{content:\"\"}.Bosch-IC-steps:before{content:\"\"}.Bosch-IC-stethoscope:before{content:\"\"}.Bosch-Ic-stop:before{content:\"\"}.Bosch-IC-stopwatch:before{content:\"\"}.Bosch-IC-storage-local:before{content:\"\"}.Bosch-IC-structure:before{content:\"\"}.Bosch-IC-subtitles:before{content:\"\"}.Bosch-Ic-summary:before{content:\"\"}.Bosch-IC-sun:before{content:\"\"}.Bosch-IC-sun-half-filled:before{content:\"\"}.Bosch-IC-sunshade-table:before{content:\"\"}.Bosch-IC-surveillance:before{content:\"\"}.Bosch-IC-table-chairs:before{content:\"\"}.Bosch-Ic-tablet:before{content:\"\"}.Bosch-IC-team:before{content:\"\"}.Bosch-IC-team-lightbulb:before{content:\"\"}.Bosch-IC-technical-service:before{content:\"\"}.Bosch-Ic-temperature:before{content:\"\"}.Bosch-IC-temperature-high:before{content:\"\"}.Bosch-IC-temperature-low:before{content:\"\"}.Bosch-IC-theater:before{content:\"\"}.Bosch-Ic-dislike:before{content:\"\"}.Bosch-Ic-like:before{content:\"\"}.Bosch-Ic-ticket:before{content:\"\"}.Bosch-IC-touch:before{content:\"\"}.Bosch-IC-touch-sos:before{content:\"\"}.Bosch-IC-towing-truck:before{content:\"\"}.Bosch-IC-train:before{content:\"\"}.Bosch-IC-train-side:before{content:\"\"}.Bosch-Ic-transport-movements:before{content:\"\"}.Bosch-IC-transscript:before{content:\"\"}.Bosch-IC-transscript-off:before{content:\"\"}.Bosch-IC-transscript-on:before{content:\"\"}.Bosch-IC-tree:before{content:\"\"}.Bosch-IC-tricycle:before{content:\"\"}.Bosch-Ic-default-trailer:before{content:\"\"}.Bosch-Ic-taxi-trailer:before{content:\"\"}.Bosch-Ic-shelve-trailer:before{content:\"\"}.Bosch-IC-trophy:before{content:\"\"}.Bosch-IC-truck:before{content:\"\"}.Bosch-IC-tuktuk:before{content:\"\"}.Bosch-Ic-tune:before{content:\"\"}.Bosch-IC-typography:before{content:\"\"}.Bosch-IC-ui:before{content:\"\"}.Bosch-IC-umbrella:before{content:\"\"}.Bosch-Ic-undo:before{content:\"\"}.Bosch-Ic-arrow-expand-up:before{content:\"\"}.Bosch-Ic-arrow-expand-double-up:before{content:\"\"}.Bosch-Ic-sort:before{content:\"\"}.Bosch-Ic-upload:before{content:\"\"}.Bosch-IC-usb:before{content:\"\"}.Bosch-Ic-user-outline:before{content:\"\"}.Bosch-IC-user-advanced:before{content:\"\"}.Bosch-IC-user-beginner:before{content:\"\"}.Bosch-IC-user-desktop:before{content:\"\"}.Bosch-IC-user-down:before{content:\"\"}.Bosch-IC-user-falling:before{content:\"\"}.Bosch-IC-user-hand:before{content:\"\"}.Bosch-IC-user-hand-stop:before{content:\"\"}.Bosch-IC-user-professional:before{content:\"\"}.Bosch-IC-user-run:before{content:\"\"}.Bosch-IC-user-share:before{content:\"\"}.Bosch-IC-user-voice:before{content:\"\"}.Bosch-IC-user-walk:before{content:\"\"}.Bosch-Ic-videocam:before{content:\"\"}.Bosch-Ic-videocam-disabled:before{content:\"\"}.Bosch-IC-video-record:before{content:\"\"}.Bosch-IC-virtual-reality:before{content:\"\"}.Bosch-Ic-volume-disabled:before{content:\"\"}.Bosch-Ic-volume-high:before{content:\"\"}.Bosch-Ic-volume-low:before{content:\"\"}.Bosch-Ic-volume-off:before{content:\"\"}.Bosch-Ic-magic-wand:before{content:\"\"}.Bosch-Ic-hidden-project:before{content:\"\"}.Bosch-Ic-show:before{content:\"\"}.Bosch-IC-water-shower:before{content:\"\"}.Bosch-IC-welcome:before{content:\"\"}.Bosch-IC-wellness:before{content:\"\"}.Bosch-IC-wheelchair:before{content:\"\"}.Bosch-Ic-alert:before{content:\"\"}.Bosch-IC-wide-angled-arrow:before{content:\"\"}.Bosch-Ic-wifi:before{content:\"\"}.Bosch-Ic-window-analysis:before{content:\"\"}.Bosch-Ic-window-browser:before{content:\"\"}.Bosch-Ic-window-console:before{content:\"\"}.Bosch-Ic-gaussian-view:before{content:\"\"}.Bosch-Ic-window-info:before{content:\"\"}.Bosch-IC-window-new:before{content:\"\"}.Bosch-IC-window-resize:before{content:\"\"}.Bosch-Ic-general-scaling-view:before{content:\"\"}.Bosch-Ic-restore-window:before{content:\"\"}.Bosch-Ic-window-statistic:before{content:\"\"}.Bosch-Ic-wishlist:before{content:\"\"}.Bosch-Ic-work-orders:before{content:\"\"}.Bosch-IC-worldwideweb:before{content:\"\"}.Bosch-Ic-wrench:before{content:\"\"}.Bosch-Ic-zoom-in:before{content:\"\"}.Bosch-Ic-zoom-out:before{content:\"\"}/*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */input{color:#000000;background-color:#efeff0;-webkit-box-shadow:none;box-shadow:none;width:100%;max-width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;caret-color:#000000;cursor:pointer;font-family:\"Bosch-Sans\";font-weight:400;font-size:16px;line-height:24px;border-width:0px 0px 1px 0px;border-color:#BFC0C2;border-style:solid;-webkit-border-radius:0;-moz-border-radius:0;-ms-border-radius:0;border-radius:0;padding:12px 16px 12px 16px}input:active:enabled,input.active,input:focus:enabled{background-color:#dfdfe0;-webkit-box-shadow:none;box-shadow:none}input:active:enabled~.label-top,input.active~.label-top,input:focus:enabled~.label-top{background-color:#dfdfe0}input:active:enabled::-moz-placeholder,input.active::-moz-placeholder,input:focus:enabled::-moz-placeholder{color:#7D8790;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px;opacity:1}input:active:enabled:-ms-input-placeholder,input.active:-ms-input-placeholder,input:focus:enabled:-ms-input-placeholder{color:#7D8790;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px}input:active:enabled::-webkit-input-placeholder,input.active::-webkit-input-placeholder,input:focus:enabled::-webkit-input-placeholder{color:#7D8790;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px}input:active:enabled::-ms-input-placeholder,input.active::-ms-input-placeholder,input:focus:enabled::-ms-input-placeholder{color:#7D8790;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px}input:active:enabled::placeholder,input.active::placeholder,input:focus:enabled::placeholder{color:#7D8790;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px}input:disabled,input:hover:disabled,input.disabled,input[readonly]{color:#BFC0C2;background-color:#efeff0;cursor:not-allowed}input:disabled~.label-top,input:hover:disabled~.label-top,input.disabled~.label-top,input[readonly]~.label-top{color:#BFC0C2;cursor:not-allowed}input:focus{-webkit-box-shadow:none;box-shadow:none;outline:0}input::-ms-expand{border:0;background-color:transparent}input::-moz-placeholder{color:#BFC0C2;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px;opacity:1}input:-ms-input-placeholder{color:#BFC0C2;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px}input::-webkit-input-placeholder{color:#BFC0C2;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px}input::-ms-input-placeholder{color:#BFC0C2;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px}input::placeholder{color:#BFC0C2;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px}input[type=number]{-moz-appearance:textfield}input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.search-input input{padding-right:44px}.search-input::after{font-family:\"Bosch-Ic\";content:\"\";font-size:28px;color:#000000;position:relative;top:0;right:12px;margin-left:-28px;cursor:pointer;z-index:1}textarea{color:#000000;background-color:#efeff0;-webkit-box-shadow:none;box-shadow:none;width:100%;max-width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;caret-color:#000000;cursor:pointer;font-family:\"Bosch-Sans\";font-weight:400;font-size:16px;line-height:24px;border-width:0px 0px 1px 0px;border-color:#BFC0C2;border-style:solid;-webkit-border-radius:0;-moz-border-radius:0;-ms-border-radius:0;border-radius:0;padding:12px 16px 12px 16px;border-width:1px;border-color:#BFC0C2;border-style:solid;-webkit-border-radius:0;-moz-border-radius:0;-ms-border-radius:0;border-radius:0;min-height:96px;resize:vertical}textarea:active:enabled,textarea.active,textarea:focus:enabled{background-color:#dfdfe0;-webkit-box-shadow:none;box-shadow:none}textarea:active:enabled~.label-top,textarea.active~.label-top,textarea:focus:enabled~.label-top{background-color:#dfdfe0}textarea:active:enabled::-moz-placeholder,textarea.active::-moz-placeholder,textarea:focus:enabled::-moz-placeholder{color:#7D8790;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px;opacity:1}textarea:active:enabled:-ms-input-placeholder,textarea.active:-ms-input-placeholder,textarea:focus:enabled:-ms-input-placeholder{color:#7D8790;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px}textarea:active:enabled::-webkit-input-placeholder,textarea.active::-webkit-input-placeholder,textarea:focus:enabled::-webkit-input-placeholder{color:#7D8790;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px}textarea:active:enabled::-ms-input-placeholder,textarea.active::-ms-input-placeholder,textarea:focus:enabled::-ms-input-placeholder{color:#7D8790;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px}textarea:active:enabled::placeholder,textarea.active::placeholder,textarea:focus:enabled::placeholder{color:#7D8790;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px}textarea:disabled,textarea:hover:disabled,textarea.disabled,textarea[readonly]{color:#BFC0C2;background-color:#efeff0;cursor:not-allowed}textarea:disabled~.label-top,textarea:hover:disabled~.label-top,textarea.disabled~.label-top,textarea[readonly]~.label-top{color:#BFC0C2;cursor:not-allowed}textarea:focus{-webkit-box-shadow:none;box-shadow:none;outline:0}textarea::-ms-expand{border:0;background-color:transparent}textarea::-moz-placeholder{color:#BFC0C2;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px;opacity:1}textarea:-ms-input-placeholder{color:#BFC0C2;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px}textarea::-webkit-input-placeholder{color:#BFC0C2;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px}textarea::-ms-input-placeholder{color:#BFC0C2;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px}textarea::placeholder{color:#BFC0C2;font-family:\"Bosch-Sans\";font-weight:300;font-size:16px;line-height:24px}textarea[type=number]{-moz-appearance:textfield}textarea::-webkit-outer-spin-button,textarea::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input.valid,textarea.valid,select.valid{border-color:#70bf54}input.warning,textarea.warning,select.warning{border-color:#fcaf17}input.invalid,input.error,textarea.invalid,textarea.error,select.invalid,select.error{border-color:#e11f26}.form-group{position:relative}.form-group input:first-child,.form-group textarea:first-child,.form-group select:first-child,.form-group .dropdown:first-child{padding:20px 16px 4px 16px}.form-group input:first-child:last-child,.form-group textarea:first-child:last-child,.form-group select:first-child:last-child,.form-group .dropdown:first-child:last-child{padding:12px 16px 12px 16px}.form-group.form-field-numeric .bosch-ic-clickable{position:absolute;top:12px;cursor:pointer}.form-group.form-field-numeric .bosch-ic-clickable:first-of-type+.bosch-ic-clickable{right:12px}.form-group.form-field-numeric .bosch-ic-clickable:first-of-type{right:60px}.form-group.form-field-numeric .label-top{width:calc(100% - 112px)}.form-group.form-field-numeric input{padding-right:106px}.form-group.form-field-numeric input:disabled~.bosch-ic-clickable{cursor:not-allowed}.form-group.form-field-numeric input:disabled~.bosch-ic-clickable,.form-group.form-field-numeric input:disabled~.bosch-ic-clickable:active,.form-group.form-field-numeric input:disabled~.bosch-ic-clickable:hover{color:#BFC0C2}.form-group.form-field-numeric input:nth-last-child(3){padding:12px 16px 12px 16px;padding-right:106px}.form-group div.hint,.form-group div.valid,.form-group div.error,.form-group div.warning,.form-group span.hint,.form-group span.valid,.form-group span.error,.form-group span.warning,.form-group p.hint,.form-group p.valid,.form-group p.error,.form-group p.warning{font-size:12px;padding:8px 16px;font-weight:500}.form-group div.valid,.form-group span.valid,.form-group p.valid{color:#70bf54}.form-group div.warning,.form-group span.warning,.form-group p.warning{color:#fcaf17}.form-group div.error,.form-group span.error,.form-group p.error{color:#e11f26}@-moz-document url-prefix(){.form-group{position:relative}.form-group input:first-child,.form-group textarea:first-child,.form-group select:first-child,.form-group .dropdown:first-child{padding:20px 16px 4px 16px}.form-group input:first-child:last-child,.form-group textarea:first-child:last-child,.form-group select:first-child:last-child,.form-group .dropdown:first-child:last-child{padding:12px 16px 12px 16px}.form-group select:first-child{padding-left:13px}.form-group.form-field-numeric .bosch-ic-clickable{position:absolute;top:12px;cursor:pointer}.form-group.form-field-numeric .bosch-ic-clickable:first-of-type+.bosch-ic-clickable{right:12px}.form-group.form-field-numeric .bosch-ic-clickable:first-of-type{right:60px}.form-group.form-field-numeric .label-top{width:calc(100% - 112px)}.form-group.form-field-numeric input{padding-right:106px}.form-group.form-field-numeric input:disabled~.bosch-ic-clickable{cursor:not-allowed}.form-group.form-field-numeric input:disabled~.bosch-ic-clickable,.form-group.form-field-numeric input:disabled~.bosch-ic-clickable:active,.form-group.form-field-numeric input:disabled~.bosch-ic-clickable:hover{color:#BFC0C2}.form-group.form-field-numeric input:nth-last-child(3){padding:12px 16px 12px 16px;padding-right:106px}}.dark-background input{background-color:#FFFFFF}.dark-background input:active:enabled,.dark-background input.active,.dark-background input:focus:enabled{background-color:#efeff0}.dark-background input:active:enabled~.label-top,.dark-background input.active~.label-top,.dark-background input:focus:enabled~.label-top{background-color:#efeff0}.dark-background textarea{background-color:#FFFFFF}.dark-background textarea:active:enabled,.dark-background textarea.active,.dark-background textarea:focus:enabled{background-color:#efeff0}.dark-background textarea:active:enabled~.label-top,.dark-background textarea.active~.label-top,.dark-background textarea:focus:enabled~.label-top{background-color:#efeff0}/*!\n  *  Copyright (C) 2017 Robert Bosch GmbH Copyright (C) 2017 Robert Bosch Manufacturing Solutions GmbH, Germany. All rights reserved.\n */label{font-family:\"Bosch-Sans\";font-weight:500;font-size:12px;line-height:18px;color:#000000;display:inline;line-height:18px;padding:0 16px 0 0}label.label-top{font-family:\"Bosch-Sans\";font-weight:500;font-size:12px;line-height:18px;color:#000000;background-color:#efeff0;display:block}label.label-top:last-of-type{position:absolute;left:1px;top:1px;z-index:1;padding:4px 0 0 15px;margin:0;width:calc(100% - 48px);max-width:calc(100% - 48px);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}label.label-top-disabled{color:#BFC0C2;cursor:not-allowed}label.label-top-focused{background-color:#dfdfe0}.dark-background label.label-top{background-color:#FFFFFF}.dark-background label.label-top-focused{background-color:#efeff0}:host{display:block;position:relative}:host .bci-core-datetime-picker{display:inline-block;position:relative;top:1px;width:100%}:host .bci-core-datetime-picker input{width:100%}:host .bci-core-datetime-picker input:not(.has-label){padding-left:50px}:host .bci-core-datetime-picker input.has-label{padding-right:50px}:host .bci-core-datetime-picker .input-field{cursor:text}:host .bci-core-datetime-picker .bci-core-calendar-icon{position:absolute;left:14px;top:12px;width:24px;height:24px}:host .bci-core-datetime-picker .bci-core-calendar-icon.has-label{right:14px;left:initial;z-index:1}:host .bci-core-date-time-picker-container{background:#FFFFFF;border:1px solid #A8AFB5;width:292px;position:absolute;left:0;z-index:10}:host .bci-core-date-time-picker-container .bci-core-save{color:#005691;text-align:end;border-top:1px solid #DFDFE0;font-size:16px;padding:5px 10px 5px 0px;height:29px}:host .bci-core-date-time-picker-container .bci-core-save .bosch-ic-clickable{position:relative;top:4px}:host .hidden{display:none}";

const DatetimePicker = class {
    constructor(hostRef) {
        Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.newDateSelected = Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "newDateSelected", 7);
        this.label = '';
        this.placeholder = '';
        this.dateTimePickerInputObj = {
            dateStart: null,
            dateEnd: null,
            timeStart: null,
            timeEnd: null,
            timestampStart: null,
            timestampEnd: null,
            valid: true
        };
    }
    async componentWillLoad() {
        await Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["s"])();
        if (!this.formatDate) {
            this.formatDate = _utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["w"].dateFormat;
        }
        this.setInputPlaceholderText();
        Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["z"])(() => this.setInputPlaceholderText());
    }
    componentDidLoad() {
        this.formatTime = this.hideSeconds ? 'HH:mm' : 'HH:mm:ss';
        if (this.timestampStart) {
            this.dateStart = this.formatTimestamp(this.timestampStart);
            this.timeStart = this.formatTimestamp(this.timestampStart, this.formatTime);
        }
        if (this.timestampEnd) {
            this.dateEnd = this.formatTimestamp(this.timestampEnd);
            this.timeEnd = this.formatTimestamp(this.timestampEnd, this.formatTime);
        }
        if (this.dateStart === undefined && this.dateEnd === undefined && this.timeStart === undefined && this.timeEnd === undefined) {
            return;
        }
        this.dateTimePickerInputObj = Object.assign(Object.assign({}, this.dateTimePickerInputObj), { dateStart: this.dateStart, dateEnd: this.dateEnd, timeStart: this.timeStart, timeEnd: this.timeEnd });
        this.updateDatePickerInput();
    }
    onDateStartChanged(dateStart) {
        this.dateTimePickerInputObj = Object.assign(Object.assign({}, this.dateTimePickerInputObj), { dateStart });
        this.updateDatePickerInput();
    }
    onDateEndChanged(dateEnd) {
        this.dateTimePickerInputObj = Object.assign(Object.assign({}, this.dateTimePickerInputObj), { dateEnd });
        this.updateDatePickerInput();
    }
    onTimeStartChanged(timeStart) {
        this.dateTimePickerInputObj = Object.assign(Object.assign({}, this.dateTimePickerInputObj), { timeStart });
        this.updateDatePickerInput();
    }
    onTimeEndChanged(timeEnd) {
        this.dateTimePickerInputObj = Object.assign(Object.assign({}, this.dateTimePickerInputObj), { timeEnd });
        this.updateDatePickerInput();
    }
    onTimestampStartChanged(timestampStart) {
        this.dateStart = this.formatTimestamp(timestampStart);
        this.timeStart = this.formatTimestamp(timestampStart, this.formatTime);
        this.dateTimePickerInputObj = Object.assign(Object.assign({}, this.dateTimePickerInputObj), { timeStart: this.timeStart, dateStart: this.dateStart });
        this.updateDatePickerInput();
    }
    onTimestampEndChanged(timestampEnd) {
        this.dateEnd = this.formatTimestamp(timestampEnd);
        this.timeEnd = this.formatTimestamp(timestampEnd, this.formatTime);
        this.dateTimePickerInputObj = Object.assign(Object.assign({}, this.dateTimePickerInputObj), { timeEnd: this.timeEnd, dateEnd: this.dateEnd });
        this.updateDatePickerInput();
    }
    onPlaceholderChanged() {
        this.setInputPlaceholderText();
    }
    dateSelectedHandler(ev) {
        const dateStart = ev.detail.startDate;
        const dateEnd = ev.detail.endDate;
        this.dateTimePickerInputObj = Object.assign(Object.assign({}, this.dateTimePickerInputObj), { dateStart, dateEnd });
        this.updateDatePickerInput();
    }
    timeSelectedHandler(ev) {
        if (ev.detail.timepickerId === 'timeStart_' + this.dateTimePickerId) {
            const timeStart = ev.detail.updatedTime;
            this.dateTimePickerInputObj = Object.assign(Object.assign({}, this.dateTimePickerInputObj), { timeStart });
        }
        if (ev.detail.timepickerId === 'timeEnd_' + this.dateTimePickerId) {
            const timeEnd = ev.detail.updatedTime;
            this.dateTimePickerInputObj = Object.assign(Object.assign({}, this.dateTimePickerInputObj), { timeEnd });
        }
        this.updateDatePickerInput();
    }
    hidePickerContainer(ev) {
        ev.stopPropagation();
        ev.preventDefault();
        const currentTarget = ev.composedPath()[0];
        if (currentTarget &&
            currentTarget.offsetParent && (currentTarget.offsetParent.classList.contains('bci-core-datepicker') ||
            currentTarget.offsetParent.classList.contains('bci-core-datetime-picker') ||
            currentTarget.offsetParent.classList.contains('bci-core-date-time-picker-container') ||
            currentTarget.offsetParent.classList.contains('bci-core-datepicker-week-header')) &&
            ev.target['dateTimePickerId'] === this.dateTimePickerId ||
            currentTarget.nodeName === 'BCI-DATETIME-PICKER') {
            return;
        }
        else if (currentTarget && currentTarget.parentElement &&
            ev.target['dateTimePickerId'] === this.dateTimePickerId &&
            (currentTarget.parentElement.classList.contains('bci-core-week-days') ||
                currentTarget.classList.contains('bci-core-week-days'))) {
            return;
        }
        if (this.dateTimePickerContainer && !this.dateTimePickerContainer.classList.contains('hidden')) {
            this.save();
        }
    }
    handleTab(ev) {
        if (ev.key !== 'Tab') {
            return;
        }
        const sourceTarget = ev.composedPath()[0];
        if (this.hideTime ||
            sourceTarget.dataset.seconds &&
                ((sourceTarget.parentElement && sourceTarget.parentElement.classList.contains('rangeTimePicker')) ||
                    !this.rangeDateTime)
                && !ev.shiftKey ||
            (this.hideSeconds && !this.rangeDateTime && sourceTarget.dataset.minutes && !ev.shiftKey) ||
            this.hideSeconds && sourceTarget.dataset.minutes &&
                (sourceTarget.parentElement && sourceTarget.parentElement.classList.contains('rangeTimePicker')) ||
            (sourceTarget && sourceTarget.classList.contains('input-field')) && ev.shiftKey) {
            this.save();
        }
    }
    handleEscape(ev) {
        // in case of 'Escape' or 'Enter'
        if (ev.key !== 'Escape' && ev.key !== 'Enter') {
            return;
        }
        if (this.dateTimePickerContainer && !this.dateTimePickerContainer.classList.contains('hidden')) {
            this.save();
        }
        this.dateTimePickerInput.blur();
    }
    togglePickerContainer() {
        if (!this.dateTimePickerContainer) {
            return;
        }
        this.dateTimePickerContainer.classList.toggle('hidden');
        this.setInputPlaceholderText();
    }
    showPickerContainer() {
        this.inputPlaceholder = '';
        if (this.dateTimePickerContainer && this.dateTimePickerContainer.classList.contains('hidden')) {
            this.dateTimePickerContainer.classList.remove('hidden');
        }
    }
    updateDatePickerInput() {
        if (this.dateTimePickerInput) {
            if (this.dateTimePickerInputObj.dateStart) {
                this.dateTimePickerInput.value = `${this.dateTimePickerInputObj.dateStart}`;
            }
            if (this.dateTimePickerInputObj.dateStart && this.dateTimePickerInputObj.timeStart) {
                this.dateTimePickerInput.value = `${this.dateTimePickerInputObj.dateStart} ${this.dateTimePickerInputObj.timeStart}`;
            }
            if (this.dateTimePickerInputObj.dateEnd) {
                if (this.dateTimePickerInputObj.dateStart !== this.dateTimePickerInputObj.dateEnd) {
                    this.dateTimePickerInput.value += ` – ${this.dateTimePickerInputObj.dateEnd}`;
                    if (this.dateTimePickerInputObj.timeEnd) {
                        this.dateTimePickerInput.value += ` ${this.dateTimePickerInputObj.timeEnd}`;
                    }
                }
                else if (this.dateTimePickerInputObj.timeEnd) {
                    this.dateTimePickerInput.value += ` – ${this.dateTimePickerInputObj.timeEnd}`;
                }
            }
        }
        const validityCheck = this.checkValidity(this.dateTimePickerInputObj);
        this.dateTimePickerInputObj = Object.assign(Object.assign({}, this.dateTimePickerInputObj), validityCheck);
    }
    updateDatePickerComponent(ev) {
        const testDate = /(19\d\d|20\d\d|0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|[012][0-9])[-  /.](19\d\d|20\d\d|0[1-9]|[12][0-9]|3[01])/gm;
        let testTime = /([012][0-9])[:]([0-5][0-9])[:]([0-5][0-9])/gm;
        if (this.hideSeconds) {
            testTime = /([012][0-9])[:]([0-5][0-9])/gm;
        }
        let match;
        let countDateMatches = 0;
        let countTimeMatches = 0;
        const dateObj = {
            dateStart: null,
            dateEnd: null,
            timeStart: null,
            timeEnd: null,
            valid: true
        };
        // Match date input
        while ((match = testDate.exec(ev.target.value)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (match.index === testDate.lastIndex) {
                testDate.lastIndex++;
            }
            if (match[0] !== null) {
                countDateMatches++;
                if (this.rangeDateTime && countDateMatches === 2) {
                    dateObj.dateEnd = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(parse(match[0], this.formatDate, new Date()), this.formatDate);
                }
                else {
                    dateObj.dateStart = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(parse(match[0], this.formatDate, new Date()), this.formatDate);
                }
            }
        }
        // Match time input
        while ((match = testTime.exec(ev.target.value)) !== null) {
            if (match.index === testTime.lastIndex) {
                testTime.lastIndex++;
            }
            if (match[0] !== null) {
                countTimeMatches++;
                if (this.rangeDateTime && countTimeMatches === 2) {
                    dateObj.timeEnd = match[0];
                }
                else {
                    dateObj.timeStart = match[0];
                }
            }
        }
        const validityCheck = this.checkValidity(dateObj);
        this.dateTimePickerInputObj = Object.assign(Object.assign(Object.assign({}, this.dateTimePickerInputObj), dateObj), validityCheck);
    }
    checkValidity(dateObj) {
        const dateStart = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["A"])(parse(dateObj.dateStart, this.formatDate, new Date()));
        const dateEnd = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["A"])(parse(dateObj.dateEnd, this.formatDate, new Date()));
        if (isAfter(dateStart, Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["A"])(this.maxDate)) ||
            isBefore(dateStart, Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["A"])(this.minDate)) ||
            isAfter(dateEnd, Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["A"])(this.maxDate)) ||
            isBefore(dateEnd, Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["A"])(this.minDate)) ||
            isAfter(dateStart, dateEnd)) {
            return { valid: false, timeEnd: null, dateEnd: null };
        }
        else {
            return { valid: true };
        }
    }
    setInputPlaceholderText() {
        if (this.placeholder) {
            this.inputPlaceholder = this.placeholder;
        }
        else {
            if (this.hideTime) {
                this.inputPlaceholder = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["t"])('setDate');
                if (this.rangeDateTime) {
                    this.inputPlaceholder += ' ' + Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["t"])('range');
                }
            }
            else {
                this.inputPlaceholder = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["t"])('setDateTime');
                if (this.rangeDateTime) {
                    this.inputPlaceholder = Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["t"])('setRange');
                }
            }
        }
    }
    /**
     * Returns date and time in any format with utc timezone set by property time-zone or with local browser timezone
     * @param timestamp number
     * @param dateFormat output format (property formatDate by default)
     */
    formatTimestamp(timestamp, formatDate = this.formatDate) {
        if (this.timeZone) {
            return Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(utcToZonedTime(fromUnixTime(timestamp / 1000), this.timeZone), formatDate);
        }
        return Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["p"])(fromUnixTime(timestamp / 1000), formatDate);
    }
    /**
     * Retruns utc timestamp created by timezone from property time-zone or with local browser timezone
     * @param date string parsed with formatDate
     * @param time string in format 00:00
     */
    selectionTimestamp(date, time) {
        if (!date || !this.timeZone) {
            return undefined;
        }
        const dateTime = parse(time ? date + ' ' + time : date, time ? this.formatDate + ' ' + this.formatTime : this.formatDate, new Date());
        return getUnixTime(zonedTimeToUtc(dateTime, this.timeZone)) * 1000;
    }
    save() {
        if (this.dateTimePickerContainer) {
            this.dateTimePickerContainer.classList.add('hidden');
            if (this.dateTimePickerInput.value.trim().length === 0) {
                this.setInputPlaceholderText();
            }
            if (!this.hideTime && !this.dateTimePickerInputObj.timeStart) {
                this.dateTimePickerInputObj.timeStart = this.hideSeconds ? '00:00' : '00:00:00';
            }
            if (!this.hideTime && this.rangeDateTime && !this.dateTimePickerInputObj.timeEnd) {
                this.dateTimePickerInputObj.timeEnd = this.hideSeconds ? '00:00' : '00:00:00';
            }
            if (this.rangeDateTime && !this.dateTimePickerInputObj.dateEnd) {
                this.dateTimePickerInputObj.dateEnd = this.dateTimePickerInputObj.dateStart;
            }
            const timestampStart = this.selectionTimestamp(this.dateTimePickerInputObj.dateStart, this.dateTimePickerInputObj.timeStart);
            let timestampEnd = this.selectionTimestamp(this.dateTimePickerInputObj.dateEnd, this.dateTimePickerInputObj.timeEnd);
            if (this.rangeDateTime && this.dateTimePickerInputObj.dateStart === this.dateTimePickerInputObj.dateEnd) {
                const timeStart = Number(this.dateTimePickerInputObj.timeStart.split(':').join(''));
                const timeEnd = Number(this.dateTimePickerInputObj.timeEnd.split(':').join(''));
                if (timeStart > timeEnd) {
                    timestampEnd = timestampStart;
                    this.dateTimePickerInputObj.dateEnd = this.dateTimePickerInputObj.dateStart;
                    this.dateTimePickerInputObj.timeEnd = this.dateTimePickerInputObj.timeStart;
                }
            }
            this.dateTimePickerInputObj = Object.assign(Object.assign({}, this.dateTimePickerInputObj), { timestampStart, timestampEnd });
            this.updateDatePickerInput();
            this.newDateSelected.emit(this.dateTimePickerInputObj);
        }
    }
    render() {
        return (Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: { 'bci-core-datetime-picker': true, 'form-group': true, 'dark-background': !!this.darkBackground }, id: this.dateTimePickerId }, !this.label && Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "bosch-ic bci-core-calendar-icon bosch-ic-clickable bosch-ic-calendar", onClick: () => this.togglePickerContainer() }), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { id: this.dateTimePickerId + '-input', class: { 'input-field': true, 'invalid': !this.dateTimePickerInputObj.valid, 'has-label': !!this.label }, type: "text", ref: el => this.dateTimePickerInput = el, onFocus: this.showPickerContainer.bind(this), onChange: this.updateDatePickerComponent.bind(this), placeholder: this.inputPlaceholder, value: "" }), !!this.label && Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: "label-top" }, this.label), !!this.label && Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "bosch-ic bci-core-calendar-icon bosch-ic-clickable bosch-ic-calendar has-label", onClick: () => this.togglePickerContainer() })), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bci-core-date-time-picker-container hidden", ref: el => this.dateTimePickerContainer = el }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("bci-datepicker", { bciDatepickerId: this.dateTimePickerId, minDate: this.minDate, maxDate: this.maxDate, rangeDate: this.rangeDateTime, sundayFirst: this.sundayFirst, formatDate: this.formatDate, datePickerInputObj: this.dateTimePickerInputObj }), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("bci-timepicker", { class: { hidden: this.hideTime }, timeInput: this.dateTimePickerInputObj.timeStart, hideSeconds: this.hideSeconds, bciTimepickerId: 'timeStart_' + this.dateTimePickerId, rangeTimePicker: false, timeTitle: "Start time" }), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("bci-timepicker", { class: { hidden: this.hideTime || !this.rangeDateTime }, timeInput: this.dateTimePickerInputObj.timeEnd, hideSeconds: this.hideSeconds, bciTimepickerId: 'timeEnd_' + this.dateTimePickerId, rangeTimePicker: true, timeTitle: "End time" }), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "bci-core-save" }, Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "bosch-ic-clickable", onClick: () => this.save() }, Object(_utils_bdfea2c3_js__WEBPACK_IMPORTED_MODULE_1__["t"])('save'), Object(_index_267cdec7_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "bosch-ic bosch-ic-small bosch-ic-forward-right" }))))));
    }
    static get watchers() { return {
        "dateStart": ["onDateStartChanged"],
        "dateEnd": ["onDateEndChanged"],
        "timeStart": ["onTimeStartChanged"],
        "timeEnd": ["onTimeEndChanged"],
        "timestampStart": ["onTimestampStartChanged"],
        "timestampEnd": ["onTimestampEndChanged"],
        "placeholder": ["onPlaceholderChanged"]
    }; }
};
DatetimePicker.style = datetimePickerCss;





/***/ })

}]);
//# sourceMappingURL=8-es2015.js.map