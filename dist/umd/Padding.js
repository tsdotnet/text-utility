/*!
 * @author electricessence / https://github.com/electricessence/
 * Originally based upon: https://github.com/vwxyz/padding
 * Licensing: MIT
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Utility"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.padStringLeft = padStringLeft;
    exports.padStringRight = padStringRight;
    exports.padNumberLeft = padNumberLeft;
    exports.padNumberRight = padNumberRight;
    exports.padLeft = padLeft;
    exports.padRight = padRight;
    const Utility_1 = require("./Utility");
    const SPACE = ' ';
    const ZERO = '0';
    function padStringLeft(source, minLength, pad = SPACE) {
        return pad && minLength > 0 ? (0, Utility_1.repeat)(pad, minLength - source.length) + source : source;
    }
    function padStringRight(source, minLength, pad = SPACE) {
        return pad && minLength > 0 ? source + (0, Utility_1.repeat)(pad, minLength - source.length) : source;
    }
    function padNumberLeft(source, minLength, pad = ZERO) {
        // noinspection SuspiciousTypeOfGuard
        if (typeof source != 'number')
            throw new Error('Cannot pad non-number.');
        if (!source)
            source = 0;
        return padStringLeft(source + Utility_1.EMPTY, minLength, pad + Utility_1.EMPTY);
    }
    function padNumberRight(source, minLength, pad = ZERO) {
        // noinspection SuspiciousTypeOfGuard
        if (typeof source != 'number')
            throw new Error('Cannot pad non-number.');
        if (!source)
            source = 0;
        return padStringRight(source + Utility_1.EMPTY, minLength, pad + Utility_1.EMPTY);
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
});
//# sourceMappingURL=Padding.js.map