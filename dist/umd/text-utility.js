(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.tsdotnet = global.tsdotnet || {}, global.tsdotnet.textUtility = global.tsdotnet.textUtility || {})));
})(this, (function (exports) { 'use strict';

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Licensing: MIT
     */
    const EMPTY = '';
    function getHashCode(source) {
        let hash = 0 | 0;
        if (source.length === 0)
            return hash;
        for (let i = 0, l = source.length; i < l; i++) {
            const ch = source.charCodeAt(i);
            hash = (hash << 5) - hash + ch;
            hash |= 0;
        }
        return hash;
    }
    function repeat(source, count) {
        if (source == null)
            throw new Error('Cannot repeat null or undefined.');
        if (typeof source !== 'string')
            throw new TypeError('Expected \'source\' to be string.');
        let result = EMPTY;
        if (source !== '' && !isNaN(count)) {
            for (let i = 0; i < count; i++) {
                result += source;
            }
        }
        return result;
    }
    function fromChars(chOrChars, count = 1) {
        if (chOrChars instanceof Array) {
            let result = EMPTY;
            for (const char of chOrChars) {
                result += String.fromCharCode(char);
            }
            return result;
        }
        else {
            return repeat(String.fromCharCode(chOrChars), count);
        }
    }
    function escapeRegExp(source) {
        return source.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
    }
    function trim(source, chars, ignoreCase) {
        if (chars === EMPTY)
            return source;
        if (chars) {
            const escaped = escapeRegExp(chars instanceof Array ? chars.join() : chars);
            return source.replace(new RegExp('^[' + escaped + ']+|[' + escaped + ']+$', 'g' + (ignoreCase ? 'i' : '')), EMPTY);
        }
        return source.replace(/^\s+|\s+$/g, EMPTY);
    }
    function supplant(source, params) {
        const oIsArray = params instanceof Array;
        return source.replace(/{([^{}]*)}/g, (a, b) => {
            let n = b;
            if (oIsArray) {
                const i = parseInt(b, 10);
                if (!isNaN(i))
                    n = i;
            }
            const r = params[n];
            switch (typeof r) {
                case 'string':
                case 'number':
                case 'boolean':
                    return r;
                default:
                    return r && typeof r.toString == 'function' ? r.toString() : a;
            }
        });
    }
    function format(source, ...args) {
        return supplant(source, args);
    }
    function canMatch(source, match) {
        if (typeof source != 'string' || !match)
            return false;
        if (source === match)
            return true;
        if (match.length < source.length)
            return null;
    }
    function startsWith(source, pattern) {
        const m = canMatch(source, pattern);
        return typeof m == 'boolean' ? m : source.indexOf(pattern) === 0;
    }
    function endsWith(source, pattern) {
        const m = canMatch(source, pattern);
        return typeof m == 'boolean' ? m : source.lastIndexOf(pattern) === source.length - pattern.length;
    }

    var textUtility = /*#__PURE__*/Object.freeze({
        __proto__: null,
        EMPTY: EMPTY,
        endsWith: endsWith,
        escapeRegExp: escapeRegExp,
        format: format,
        fromChars: fromChars,
        getHashCode: getHashCode,
        repeat: repeat,
        startsWith: startsWith,
        supplant: supplant,
        trim: trim
    });

    /*!
     * @author electricessence / https://github.com/electricessence/
     * Originally based upon: https://github.com/vwxyz/padding
     * Licensing: MIT
     */
    const SPACE = ' ';
    const ZERO = '0';
    function padStringLeft(source, minLength, pad = SPACE) {
        return pad && minLength > 0 ? repeat(pad, minLength - source.length) + source : source;
    }
    function padStringRight(source, minLength, pad = SPACE) {
        return pad && minLength > 0 ? source + repeat(pad, minLength - source.length) : source;
    }
    function padNumberLeft(source, minLength, pad = ZERO) {
        if (typeof source != 'number')
            throw new Error('Cannot pad non-number.');
        if (!source)
            source = 0;
        return padStringLeft(source + EMPTY, minLength, pad + EMPTY);
    }
    function padNumberRight(source, minLength, pad = ZERO) {
        if (typeof source != 'number')
            throw new Error('Cannot pad non-number.');
        if (!source)
            source = 0;
        return padStringRight(source + EMPTY, minLength, pad + EMPTY);
    }
    function padLeft(source, minLength, pad) {
        switch (typeof source) {
            case 'string':
                return padStringLeft(source, minLength, pad);
            case 'number':
                return padNumberLeft(source, minLength, pad);
        }
        throw new Error('Invalid source type.');
    }
    function padRight(source, minLength, pad) {
        switch (typeof source) {
            case 'string':
                return padStringRight(source, minLength, pad);
            case 'number':
                return padNumberRight(source, minLength, pad);
        }
        throw new Error('Invalid source type.');
    }

    var Padding = /*#__PURE__*/Object.freeze({
        __proto__: null,
        padLeft: padLeft,
        padNumberLeft: padNumberLeft,
        padNumberRight: padNumberRight,
        padRight: padRight,
        padStringLeft: padStringLeft,
        padStringRight: padStringRight
    });

    exports.EMPTY = EMPTY;
    exports.default = textUtility;
    exports.endsWith = endsWith;
    exports.escapeRegExp = escapeRegExp;
    exports.format = format;
    exports.fromChars = fromChars;
    exports.getHashCode = getHashCode;
    exports.padLeft = padLeft;
    exports.padNumberLeft = padNumberLeft;
    exports.padNumberRight = padNumberRight;
    exports.padRight = padRight;
    exports.padStringLeft = padStringLeft;
    exports.padStringRight = padStringRight;
    exports.padding = Padding;
    exports.repeat = repeat;
    exports.startsWith = startsWith;
    exports.supplant = supplant;
    exports.textUtility = textUtility;
    exports.trim = trim;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=text-utility.js.map
