import { describe, it, expect } from 'vitest';
import * as TextUtility from '../src/Utility';

const s1 = '	 HI  ';
const s2 = '.-.-xHIX//\\';

describe('EMPTY constant', () => {
	it('should be empty string', () => {
		expect(TextUtility.EMPTY).toBe('');
	});
});

describe('.getHashCode()', () => {
	it('should return 0 for empty string', () => {
		expect(TextUtility.getHashCode('')).toBe(0);
	});

	it('should return different hash codes for different strings', () => {
		const hash1 = TextUtility.getHashCode('hello');
		const hash2 = TextUtility.getHashCode('world');
		expect(hash1).not.toBe(hash2);
	});

	it('should return same hash code for same string', () => {
		const hash1 = TextUtility.getHashCode('test');
		const hash2 = TextUtility.getHashCode('test');
		expect(hash1).toBe(hash2);
	});
});

describe('.repeat()', () => {
	it('should repeat string multiple times', () => {
		expect(TextUtility.repeat('x', 3)).toBe('xxx');
		expect(TextUtility.repeat('ab', 2)).toBe('abab');
	});

	it('should return empty for zero count', () => {
		expect(TextUtility.repeat('x', 0)).toBe('');
	});

	it('should return empty for NaN count', () => {
		expect(TextUtility.repeat('x', NaN)).toBe('');
	});

	it('should return empty for empty source', () => {
		expect(TextUtility.repeat('', 5)).toBe('');
	});

	it('should throw error for null source', () => {
		expect(() => TextUtility.repeat(null as any, 5)).toThrow('Cannot repeat null or undefined.');
	});

	it('should throw error for undefined source', () => {
		expect(() => TextUtility.repeat(undefined as any, 5)).toThrow('Cannot repeat null or undefined.');
	});

	it('should throw TypeError for non-string source', () => {
		expect(() => TextUtility.repeat(123 as any, 5)).toThrow('Expected \'source\' to be string.');
	});
});

describe('.fromChars()', () => {
	it('should convert character codes to string', () => {
		expect(TextUtility.fromChars([65, 66, 67])).toBe('ABC');
		expect(TextUtility.fromChars([72, 101, 108, 108, 111])).toBe('Hello');
	});

	it('should repeat single character code', () => {
		expect(TextUtility.fromChars(65, 3)).toBe('AAA');
		expect(TextUtility.fromChars(88, 1)).toBe('X');
	});

	it('should handle empty array', () => {
		expect(TextUtility.fromChars([])).toBe('');
	});
});

describe('.escapeRegExp()', () => {
	it('should escape special regex characters', () => {
		expect(TextUtility.escapeRegExp('.*+?^${}()|[]\\/')).toBe('\\.\\*\\+\\?\\^\\$\\{\\}\\(\\)\\|\\[\\]\\\\\\/');
		expect(TextUtility.escapeRegExp('hello')).toBe('hello');
	});
});

describe('.trim()', () => {
	it('should leave a string without leading or trailing whitespace', () => {
		expect(TextUtility.trim(s1)).toBe('HI');
	});

	it('should leave a string without leading or trailing trim characters (string)', () => {
		expect(TextUtility.trim(s2, '.-/\\x', true)).toBe('HI');
	});

	it('should leave a string without leading or trailing trim characters (array)', () => {
		expect(TextUtility.trim(s2, ['.', '-', '/', '\\', 'x', 'X'])).toBe('HI');
	});

	it('should leave a string untouched if no trim characters', () => {
		expect(TextUtility.trim(s2, '')).toBe(s2);
	});

	it('should handle undefined chars parameter', () => {
		expect(TextUtility.trim('  hello  ')).toBe('hello');
	});

	it('should handle case sensitivity', () => {
		expect(TextUtility.trim('AAAhelloAAA', 'a', false)).toBe('AAAhelloAAA');
		expect(TextUtility.trim('AAAhelloAAA', 'a', true)).toBe('hello');
	});
});

describe('.format(source,..args)', () => {
	it('should replace contents of a string', () => {
		expect(TextUtility.format(
			'Hello, my name is {0} and I\'m number {length}.', 'George', 2))
			.toBe('Hello, my name is George and I\'m number 2.');
	});

	it('should handle missing parameters', () => {
		expect(TextUtility.format('Hello {0} {1}', 'world')).toBe('Hello world {1}');
	});

	it('should handle empty format string', () => {
		expect(TextUtility.format('', 'test')).toBe('');
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
			.toBe('Hello, my name is George and I like cheese. [object Object] {y}');
	});

	it('should work with arrays using numeric indexes', () => {
		expect(TextUtility.supplant('Hello {0} and {1}!', ['world', 'everyone']))
			.toBe('Hello world and everyone!');
	});

	it('should handle different types', () => {
		expect(TextUtility.supplant('Number: {num}, Boolean: {bool}', {
			num: 42,
			bool: true
		})).toBe('Number: 42, Boolean: true');
	});

	it('should handle objects with toString method', () => {
		const obj = { toString: () => 'custom string' };
		expect(TextUtility.supplant('Object: {obj}', { obj }))
			.toBe('Object: custom string');
	});

	it('should handle null/undefined values', () => {
		expect(TextUtility.supplant('Value: {val}', { val: null }))
			.toBe('Value: {val}');
		expect(TextUtility.supplant('Value: {val}', { val: undefined }))
			.toBe('Value: {val}');
	});

	it('should handle array index properties', () => {
		const arr = ['a', 'b', 'c'];
		expect(TextUtility.supplant('Length: {length}, Item: {1}', arr))
			.toBe('Length: 3, Item: b');
	});

	it('should handle invalid numeric indexes gracefully', () => {
		expect(TextUtility.supplant('Test {abc}', ['item']))
			.toBe('Test {abc}');
	});
});

describe('.startsWith(source,pattern)', () => {
	it('should detect pattern at beginning', () => {
		expect(TextUtility.startsWith(
			'Hello, my name is',
			'Hello'))
			.toBe(true);
	});

	it('should not detect pattern at beginning', () => {
		expect(TextUtility.startsWith(
			'Hello, my name is',
			'is'))
			.toBe(false);
	});

	it('should handle exact match', () => {
		expect(TextUtility.startsWith('hello', 'hello')).toBe(true);
	});

	it('should handle empty pattern', () => {
		expect(TextUtility.startsWith('hello', '')).toBe(false);
	});

	it('should handle non-string source', () => {
		expect(TextUtility.startsWith(123 as any, 'test')).toBe(false);
	});

	it('should handle pattern longer than source', () => {
		expect(TextUtility.startsWith('hi', 'hello')).toBe(false);
	});
});

describe('.endsWith(source,pattern)', () => {
	it('should detect pattern at end', () => {
		expect(TextUtility.endsWith(
			'Hello, my name is',
			'is'))
			.toBe(true);
	});

	it('should not detect pattern at end', () => {
		expect(TextUtility.endsWith(
			'Hello, my name is',
			'Hello'))
			.toBe(false);

		expect(TextUtility.endsWith(
			'Hello, my name is',
			'is '))
			.toBe(false);
	});

	it('should handle exact match', () => {
		expect(TextUtility.endsWith('hello', 'hello')).toBe(true);
	});

	it('should handle empty pattern', () => {
		expect(TextUtility.endsWith('hello', '')).toBe(false);
	});

	it('should handle non-string source', () => {
		expect(TextUtility.endsWith(123 as any, 'test')).toBe(false);
	});

	it('should handle pattern longer than source', () => {
		expect(TextUtility.endsWith('hi', 'hello')).toBe(false);
	});
});
