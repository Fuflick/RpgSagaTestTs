"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = void 0;
var stringConsts_1 = require("./stringConsts");
var helper_1 = require("./helper");
var logger_1 = require("./logger");
var Unit = /** @class */ (function () {
    function Unit() {
        this.classType = ''; //тип героя
        this.status = '';
        this.burning = false; //горит или нет
        this.skillUsed = false; // использована способность или нет
        this.minHealth = 3; // диапазон здоровья для генерации персонажа
        this.maxHealth = 15;
    }
    Unit.prototype.becameWinner = function () {
        this.status = "winner";
    };
    Object.defineProperty(Unit.prototype, "getStatus", {
        get: function () {
            return this.status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Unit.prototype, "isBurn", {
        get: function () {
            return this.burning;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Unit.prototype, "isSkillUsed", {
        get: function () {
            return this.skillUsed;
        },
        enumerable: false,
        configurable: true
    });
    Unit.prototype.useSkill = function () {
        this.skillUsed = true; // испольщование способности переводит переменную skillUsed в true, а это метод, который это делает
    };
    Object.defineProperty(Unit.prototype, "getHealth", {
        get: function () {
            return this.health;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Unit.prototype, "getDamage", {
        get: function () {
            return this.damage;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Unit.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Unit.prototype.generateUnit = function () {
        this.name = stringConsts_1.heroNames[helper_1.Helper.getRandomInt(0, stringConsts_1.heroNames.length - 1)];
        this.health = helper_1.Helper.getRandomInt(this.minHealth, this.maxHealth);
        this.damage = helper_1.Helper.getRandomInt(1, 5);
    };
    Unit.prototype.takeDamage = function (damage) {
        this.health -= damage;
    };
    Unit.prototype.becameBurning = function () {
        this.burning = true;
    };
    Unit.prototype.attack = function (enemy) {
        console.log("".concat(this.classType, " ").concat(this.getName, " attack ").concat(logger_1.Logger.getCharacterParams(enemy).toString()));
        console.log("".concat(this.getName, " damage = ").concat(this.getDamage));
        console.log("".concat(enemy.getName, " health became ").concat(enemy.getHealth - this.getDamage));
        enemy.takeDamage(this.damage);
    };
    Unit.prototype.burnInFigth = function () {
        this.takeDamage(stringConsts_1.fireDamage);
        logger_1.Logger.characterBurn(this, stringConsts_1.fireDamage);
    };
    Unit.prototype.copy = function () {
        var copy = new Unit();
        copy.name = this.name;
        copy.damage = this.damage;
        copy.classType = this.classType;
        copy.status = '';
        return copy;
    };
    return Unit;
}());
exports.Unit = Unit;
