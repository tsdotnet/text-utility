(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./Utility", "./Padding"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.padding = exports.textUtility = void 0;
    const tslib_1 = require("tslib");
    const textUtility = tslib_1.__importStar(require("./Utility"));
    exports.textUtility = textUtility;
    const padding = tslib_1.__importStar(require("./Padding"));
    exports.padding = padding;
    exports.default = textUtility;
});
//# sourceMappingURL=index.js.map