"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Archer = void 0;
var unit_1 = require("../unit");
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        var _this = _super.call(this) || this;
        _this.minHealth = 7;
        _this.maxHealth = 20;
        _this.classType = 'Archer';
        return _this;
    }
    Archer.prototype.generateUnit = function () {
        _super.prototype.generateUnit.call(this);
    };
    Archer.prototype.attack = function (enemy) {
        _super.prototype.attack.call(this, enemy);
    };
    return Archer;
}(unit_1.Unit));
exports.Archer = Archer;
