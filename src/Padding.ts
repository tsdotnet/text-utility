/*!
 * @author electricessence / https://github.com/electricessence/
 * Originally based upon: https://github.com/vwxyz/padding
 * Licensing: MIT
 */

import {EMPTY, repeat} from './Utility';

const SPACE = ' ';
const ZERO = '0';

export function padStringLeft (source: string, minLength: number, pad: string = SPACE): string
{
	return pad && minLength>0 ? repeat(pad, minLength - source.length) + source : source;
}

export function padStringRight (source: string, minLength: number, pad: string = SPACE): string
{
	return pad && minLength>0 ? source + repeat(pad, minLength - source.length) : source;
}

export function padNumberLeft (
	source: number,
	minLength: number,
	pad: string | number = ZERO): string
{
	// noinspection SuspiciousTypeOfGuard
	if(typeof source!='number') throw new Error('Cannot pad non-number.');
	if(!source) source = 0;
	return padStringLeft(source + EMPTY, minLength, pad + EMPTY);
}

export function padNumberRight (
	source: number,
	minLength: number,
	pad: string | number = ZERO): string
{
	// noinspection SuspiciousTypeOfGuard
	if(typeof source!='number') throw new Error('Cannot pad non-number.');
	if(!source) source = 0;
	return padStringRight(source + EMPTY, minLength, pad + EMPTY);
}

export function padLeft (source: string, minLength: number, pad?: string): string;
export function padLeft (source: number, minLength: number, pad?: string | number): string;
export function padLeft (source: string | number, minLength: number, pad?: string | number): string
{
	switch(typeof source)
	{
		case 'string':
			return padStringLeft(source, minLength, pad as any);
		case 'number':
			return padNumberLeft(source, minLength, pad);
	}
	throw new Error('Invalid source type.');
}

export function padRight (source: string, minLength: number, pad?: string): string;
export function padRight (source: number, minLength: number, pad?: string | number): string;
export function padRight (source: string | number, minLength: number, pad?: string | number): string
{
	switch(typeof source)
	{
		case 'string':
			return padStringRight(source, minLength, pad as any);
		case 'number':
			return padNumberRight(source, minLength, pad);
	}
	throw new Error('Invalid source type.');
}
