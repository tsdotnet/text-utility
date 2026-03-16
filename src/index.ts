import * as textUtility from './Utility.js';
import * as padding from './Padding.js';

// Re-export all utility functions individually for easy access
export {
	EMPTY,
	getHashCode,
	repeat,
	fromChars,
	escapeRegExp,
	trim,
	supplant,
	format,
	startsWith,
	endsWith
} from './Utility.js';

// Re-export all padding functions individually  
export {
	padStringLeft,
	padStringRight,
	padNumberLeft,
	padNumberRight,
	padLeft,
	padRight
} from './Padding.js';

// Also export as namespaces for those who prefer that approach
export {
	textUtility,
	padding
};

export default textUtility;
