import { describe, it, expect } from 'vitest';
import * as TextUtilityModule from '../src/index';

describe('index module exports', () => {
	it('should export all utility functions individually', () => {
		expect(TextUtilityModule.EMPTY).toBeDefined();
		expect(TextUtilityModule.getHashCode).toBeDefined();
		expect(TextUtilityModule.repeat).toBeDefined();
		expect(TextUtilityModule.fromChars).toBeDefined();
		expect(TextUtilityModule.escapeRegExp).toBeDefined();
		expect(TextUtilityModule.trim).toBeDefined();
		expect(TextUtilityModule.supplant).toBeDefined();
		expect(TextUtilityModule.format).toBeDefined();
		expect(TextUtilityModule.startsWith).toBeDefined();
		expect(TextUtilityModule.endsWith).toBeDefined();
	});

	it('should export all padding functions individually', () => {
		expect(TextUtilityModule.padStringLeft).toBeDefined();
		expect(TextUtilityModule.padStringRight).toBeDefined();
		expect(TextUtilityModule.padNumberLeft).toBeDefined();
		expect(TextUtilityModule.padNumberRight).toBeDefined();
		expect(TextUtilityModule.padLeft).toBeDefined();
		expect(TextUtilityModule.padRight).toBeDefined();
	});

	it('should export namespaced modules', () => {
		expect(TextUtilityModule.textUtility).toBeDefined();
		expect(TextUtilityModule.padding).toBeDefined();
	});

	it('should export default module', () => {
		expect(TextUtilityModule.default).toBeDefined();
	});

	it('should work with exported functions', () => {
		expect(TextUtilityModule.EMPTY).toBe('');
		expect(TextUtilityModule.repeat('x', 3)).toBe('xxx');
		expect(TextUtilityModule.padLeft('a', 3, 'b')).toBe('bba');
	});
});
