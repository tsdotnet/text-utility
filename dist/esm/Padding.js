import { repeat, EMPTY } from './Utility.js';

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

export { padLeft, padNumberLeft, padNumberRight, padRight, padStringLeft, padStringRight };
//# sourceMappingURL=Padding.js.map
