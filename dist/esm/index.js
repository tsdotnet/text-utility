import * as textUtility from './Utility';
import * as padding from './Padding';
// Re-export all utility functions individually for easy access
export { EMPTY, getHashCode, repeat, fromChars, escapeRegExp, trim, supplant, format, startsWith, endsWith } from './Utility';
// Re-export all padding functions individually  
export { padStringLeft, padStringRight, padNumberLeft, padNumberRight, padLeft, padRight } from './Padding';
// Also export as namespaces for those who prefer that approach
export { textUtility, padding };
export default textUtility;
//# sourceMappingURL=index.js.map