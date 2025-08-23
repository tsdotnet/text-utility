import { describe, it, expect } from 'vitest';
import {
	padLeft, 
	padRight, 
	padStringLeft, 
	padStringRight, 
	padNumberLeft, 
	padNumberRight
} from '../src/Padding';

describe('padStringLeft()', () => {
	it('should pad string to the left', () => {
		expect(padStringLeft('X', 3, 'Y')).toBe('YYX');
		expect(padStringLeft('test', 6, '0')).toBe('00test');
	});

	it('should handle empty pad character', () => {
		expect(padStringLeft('X', 3, '')).toBe('X');
	});

	it('should handle zero or negative minLength', () => {
		expect(padStringLeft('X', 0, 'Y')).toBe('X');
		expect(padStringLeft('X', -1, 'Y')).toBe('X');
	});
});

describe('padStringRight()', () => {
	it('should pad string to the right', () => {
		expect(padStringRight('X', 3, 'Y')).toBe('XYY');
		expect(padStringRight('test', 6, '0')).toBe('test00');
	});

	it('should handle empty pad character', () => {
		expect(padStringRight('X', 3, '')).toBe('X');
	});

	it('should handle zero or negative minLength', () => {
		expect(padStringRight('X', 0, 'Y')).toBe('X');
		expect(padStringRight('X', -1, 'Y')).toBe('X');
	});
});

describe('padNumberLeft()', () => {
	it('should pad number to the left', () => {
		expect(padNumberLeft(1, 3, 0)).toBe('001');
		expect(padNumberLeft(42, 5, '0')).toBe('00042');
	});

	it('should handle zero source', () => {
		expect(padNumberLeft(0, 3, '0')).toBe('000');
	});

	it('should throw error for non-number', () => {
		expect(() => padNumberLeft('not a number' as any, 3, '0'))
			.toThrow('Cannot pad non-number.');
	});
});

describe('padNumberRight()', () => {
	it('should pad number to the right', () => {
		expect(padNumberRight(1, 3, 0)).toBe('100');
		expect(padNumberRight(42, 5, '0')).toBe('42000');
	});

	it('should handle zero source', () => {
		expect(padNumberRight(0, 3, '0')).toBe('000');
	});

	it('should throw error for non-number', () => {
		expect(() => padNumberRight('not a number' as any, 3, '0'))
			.toThrow('Cannot pad non-number.');
	});
});

describe('.padLeft()', () => {
	it('should pad string to the left', () => {
		expect(padLeft('X', 3, 'Y')).toBe('YYX');
		expect(padLeft('X', 3)).toBe('  X');
	});

	it('should pad number to the left', () => {
		expect(padLeft(1, 3, 0)).toBe('001');
		expect(padLeft(1, 3)).toBe('001');
		expect(padLeft(1, 3, 2)).toBe('221');
	});

	it('should throw error for invalid source type', () => {
		expect(() => padLeft({} as any, 3, 'x'))
			.toThrow('Invalid source type.');
	});
});

describe('.padRight()', () => {
	it('should pad string to the right', () => {
		expect(padRight('X', 3, 'Y')).toBe('XYY');
		expect(padRight('X', 3)).toBe('X  ');
	});

	it('should pad number to the right', () => {
		expect(padRight(1, 3, 0)).toBe('100');
		expect(padRight(1, 3)).toBe('100');
		expect(padRight(1, 3, 2)).toBe('122');
	});

	it('should throw error for invalid source type', () => {
		expect(() => padRight({} as any, 3, 'x'))
			.toThrow('Invalid source type.');
	});
});
