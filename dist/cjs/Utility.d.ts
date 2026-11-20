/*!
 * @author electricessence / https://github.com/electricessence/
 * Licensing: MIT
 */
export declare const EMPTY = "";
export declare function getHashCode(source: string): number;
export declare function repeat(source: string, count: number): string;
export declare function fromChars(char: number, count: number): string;
export declare function fromChars(chars: number[]): string;
export declare function escapeRegExp(source: string): string;
export declare function trim(source: string, chars?: string | string[], ignoreCase?: boolean): string;
export declare function supplant(source: string, params: {
    [key: string]: any;
} | any[]): string;
export declare function format(source: string, ...args: any[]): string;
export declare function startsWith(source: string, pattern: string): boolean;
export declare function endsWith(source: string, pattern: string): boolean;
