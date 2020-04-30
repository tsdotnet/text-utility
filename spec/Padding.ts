import {padLeft, padRight} from '../src/Padding';

describe('.padLeft()', () => {
	it('should pad to the left', () => {
		expect(padLeft('X', 3, 'Y')).toBe('YYX');
		expect(padLeft('X', 3)).toBe('  X');
		expect(padLeft(1, 3, 0)).toBe('001');
		expect(padLeft(1, 3)).toBe('001');
		expect(padLeft(1, 3, 2)).toBe('221');
	});
});

describe('.padRight()', () => {
	it('should pad to the right', () => {
		expect(padRight('X', 3, 'Y')).toBe('XYY');
		expect(padRight('X', 3)).toBe('X  ');
		expect(padRight(1, 3, 0)).toBe('100');
		expect(padRight(1, 3)).toBe('100');
		expect(padRight(1, 3, 2)).toBe('122');
	});
});
