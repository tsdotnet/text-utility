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

export { EMPTY, endsWith, escapeRegExp, format, fromChars, getHashCode, repeat, startsWith, supplant, trim };
//# sourceMappingURL=Utility.js.map
