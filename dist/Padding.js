"use strict";
/*!
 * @author electricessence / https://github.com/electricessence/
 * Originally based upon: https://github.com/vwxyz/padding
 * Licensing: MIT
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.padRight = exports.padLeft = exports.padNumberRight = exports.padNumberLeft = exports.padStringRight = exports.padStringLeft = void 0;
const Utility_1 = require("./Utility");
const SPACE = ' ';
const ZERO = '0';
function padStringLeft(source, minLength, pad = SPACE) {
    return pad && minLength > 0 ? (0, Utility_1.repeat)(pad, minLength - source.length) + source : source;
}
exports.padStringLeft = padStringLeft;
function padStringRight(source, minLength, pad = SPACE) {
    return pad && minLength > 0 ? source + (0, Utility_1.repeat)(pad, minLength - source.length) : source;
}
exports.padStringRight = padStringRight;
function padNumberLeft(source, minLength, pad = ZERO) {
    // noinspection SuspiciousTypeOfGuard
    if (typeof source != 'number')
        throw new Error('Cannot pad non-number.');
    if (!source)
        source = 0;
    return padStringLeft(source + Utility_1.EMPTY, minLength, pad + Utility_1.EMPTY);
}
exports.padNumberLeft = padNumberLeft;
function padNumberRight(source, minLength, pad = ZERO) {
    // noinspection SuspiciousTypeOfGuard
    if (typeof source != 'number')
        throw new Error('Cannot pad non-number.');
    if (!source)
        source = 0;
    return padStringRight(source + Utility_1.EMPTY, minLength, pad + Utility_1.EMPTY);
}
exports.padNumberRight = padNumberRight;
function padLeft(source, minLength, pad) {
    switch (typeof source) {
        case 'string':
            return padStringLeft(source, minLength, pad);
        case 'number':
            return padNumberLeft(source, minLength, pad);
    }
    throw new Error('Invalid source type.');
}
exports.padLeft = padLeft;
function padRight(source, minLength, pad) {
    switch (typeof source) {
        case 'string':
            return padStringRight(source, minLength, pad);
        case 'number':
            return padNumberRight(source, minLength, pad);
    }
    throw new Error('Invalid source type.');
}
exports.padRight = padRight;
//# sourceMappingURL=Padding.js.map