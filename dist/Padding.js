import { EMPTY, repeat } from './Utility';
const SPACE = ' ';
const ZERO = '0';
/* eslint-disable @typescript-eslint/no-explicit-any */
export function padStringLeft(source, minLength, pad = SPACE) {
    return pad && minLength > 0 ? repeat(pad, minLength - source.length) + source : source;
}
export function padStringRight(source, minLength, pad = SPACE) {
    return pad && minLength > 0 ? source + repeat(pad, minLength - source.length) : source;
}
export function padNumberLeft(source, minLength, pad = ZERO) {
    if (typeof source != 'number')
        throw new Error('Cannot pad non-number.');
    if (!source)
        source = 0;
    return padStringLeft(source + EMPTY, minLength, pad + EMPTY);
}
export function padNumberRight(source, minLength, pad = ZERO) {
    if (typeof source != 'number')
        throw new Error('Cannot pad non-number.');
    if (!source)
        source = 0;
    return padStringRight(source + EMPTY, minLength, pad + EMPTY);
}
export function padLeft(source, minLength, pad) {
    if (typeof source == 'string')
        return padStringLeft(source, minLength, pad);
    if (typeof source == 'number')
        return padNumberLeft(source, minLength, pad);
    throw new Error('Invalid source type.');
}
export function padRight(source, minLength, pad) {
    if (typeof source == 'string')
        return padStringRight(source, minLength, pad);
    if (typeof source == 'number')
        return padNumberRight(source, minLength, pad);
    throw new Error('Invalid source type.');
}
//# sourceMappingURL=Padding.js.map