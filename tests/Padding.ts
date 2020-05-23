import {expect} from 'chai';
import {padLeft, padRight} from '../src/Padding';

describe('.padLeft()', () => {
	it('should pad to the left', () => {
		expect(padLeft('X', 3, 'Y')).equal('YYX');
		expect(padLeft('X', 3)).equal('  X');
		expect(padLeft(1, 3, 0)).equal('001');
		expect(padLeft(1, 3)).equal('001');
		expect(padLeft(1, 3, 2)).equal('221');
	});
});

describe('.padRight()', () => {
	it('should pad to the right', () => {
		expect(padRight('X', 3, 'Y')).equal('XYY');
		expect(padRight('X', 3)).equal('X  ');
		expect(padRight(1, 3, 0)).equal('100');
		expect(padRight(1, 3)).equal('100');
		expect(padRight(1, 3, 2)).equal('122');
	});
});
