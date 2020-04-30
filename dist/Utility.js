/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
export const EMPTY = '';
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Returns a numerical (integer) hash code of the string.  Can be used for identifying inequality of contents, but two different strings in rare cases will have the same hash code.
 * @param source
 * @returns {number}
 */
export function getHashCode(source) {
    /* tslint:disable:no-bitwise */
    let hash = 0 | 0;
    if (source.length === 0)
        return hash;
    for (let i = 0, l = source.length; i < l; i++) {
        const ch = source.charCodeAt(i);
        hash = (hash << 5) - hash + ch;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}
/**
 * Repeats a sequence of characters.
 * @param source
 * @param count
 */
export function repeat(source, count) {
    let result = EMPTY;
    if (!isNaN(count)) {
        for (let i = 0; i < count; i++) {
            result += source;
        }
    }
    return result;
}
export function fromChars(chOrChars, count = 1) {
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
/**
 * Escapes a RegExp sequence.
 * @param source
 * @returns {string}
 */
export function escapeRegExp(source) {
    return source.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}
/**
 * Can trim any character or set of characters from the ends of a string.
 * Uses a Regex escapement to replace them with empty.
 * @param source
 * @param chars A string or array of characters desired to be trimmed.
 * @param ignoreCase
 * @returns {string}
 */
export function trim(source, chars, ignoreCase) {
    if (chars === EMPTY)
        return source;
    if (chars) {
        const escaped = escapeRegExp(chars instanceof Array ? chars.join() : chars);
        return source.replace(new RegExp('^[' + escaped + ']+|[' + escaped + ']+$', 'g' + (ignoreCase ? 'i' : '')), EMPTY);
    }
    return source.replace(/^\s+|\s+$/g, EMPTY);
}
// noinspection SpellCheckingInspection
/**
 * This takes a string and replaces '{string}' with the respected parameter.
 * Also allows for passing an array in order to use '{n}' notation.
 * Not limited to an array's indexes.  For example, {length} is allowed.
 * Based upon Crockford's supplant function.
 * @param source
 * @param params
 * @returns {string}
 */
export function supplant(source, params) {
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
/**
 * This takes a string and replaces '{0}' with the first parameter, '{1} the second, and so on..
 * Not limited to indexes indexes.  For example, {length} is allowed as the number of params.
 * @param source
 * @param args
 * @returns {string}
 */
export function format(source, ...args) {
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
/**
 * Returns true if the pattern matches the beginning of the source.
 * @param source
 * @param pattern
 * @returns {boolean}
 */
export function startsWith(source, pattern) {
    const m = canMatch(source, pattern);
    return typeof m == 'boolean' ? m : source.indexOf(pattern) === 0;
}
/**
 * Returns true if the pattern matches the end of the source.
 * @param source
 * @param pattern
 * @returns {boolean}
 */
export function endsWith(source, pattern) {
    const m = canMatch(source, pattern);
    return typeof m == 'boolean' ? m : source.lastIndexOf(pattern) === source.length - pattern.length;
}
//# sourceMappingURL=Utility.js.map