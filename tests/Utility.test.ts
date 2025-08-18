import { describe, it, expect } from 'vitest';
import * as TextUtility from '../src/Utility';

const s1 = '	 HI  ';
const s2 = '.-.-xHIX//\\';
describe('.trim()', () => {
	it('should leave a string without leading or trailing whitespace', () => {
		expect(TextUtility.trim(s1)).equal('HI');
	});

	it('should leave a string without leading or trailing trim characters (string)', () => {
		expect(TextUtility.trim(s2, '.-/\\x', true)).equal('HI');
	});

	it('should leave a string without leading or trailing trim characters (array)', () => {
		expect(TextUtility.trim(s2, ['.', '-', '/', '\\', 'x', 'X'])).equal('HI');
	});

	it('should leave a string untouched if no trim characters', () => {
		expect(TextUtility.trim(s2, '')).equal(s2);
	});
});

describe('.format(source,..args)', () => {
	it('should replace contents of a string', () => {
		expect(TextUtility.format(
			'Hello, my name is {0} and I\'m number {length}.', 'George', 2))
			.equal('Hello, my name is George and I\'m number 2.');
	});
});

describe('.supplant(source,..args)', () => {
	it('should replace contents of a string', () => {
		expect(TextUtility.supplant(
			'Hello, my name is {name} and I like {like}. {x} {y}', {
				name: 'George',
				like: 'cheese',
				x: {}
			}))
			.equal('Hello, my name is George and I like cheese. [object Object] {y}');
	});
});

describe('.startsWith(source,pattern)', () => {
	it('should detect pattern at beginning', () =>
		expect(TextUtility.startsWith(
			'Hello, my name is',
			'Hello'))
			.toBe(true)
	);
	it('should not detect pattern at beginning', () =>
		expect(!TextUtility.startsWith(
			'Hello, my name is',
			'is'))
			.toBe(true)
	);
});

describe('.endsWith(source,pattern)', () => {
	it('should detect pattern at beginning', () =>
		expect(TextUtility.endsWith(
			'Hello, my name is',
			'is'))
			.toBe(true)
	);
	it('should not detect pattern at beginning', () => {
			expect(!TextUtility.endsWith(
				'Hello, my name is',
				'Hello'))
				.toBe(true);

			expect(!TextUtility.endsWith(
				'Hello, my name is',
				'is '))
				.toBe(true);
		}
	);
});
