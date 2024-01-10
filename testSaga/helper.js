"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
var stringConsts_1 = require("./stringConsts");
var warriror_1 = require("./unitClasses/warriror");
var archer_1 = require("./unitClasses/archer");
var magican_1 = require("./unitClasses/magican");
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    Helper.getRandomEnumValue = function (enumObj) {
        var enumValues = Object.keys(enumObj)
            .filter(function (key) { return isNaN(Number(key)); })
            .map(function (key) { return enumObj[key]; });
        var randomIndex = Math.floor(Math.random() * enumValues.length);
        return enumValues[randomIndex];
    };
    Helper.generateCharacter = function () {
        var character;
        switch (Helper.getRandomEnumValue(stringConsts_1.Classes)) {
            case stringConsts_1.Classes.WARRIOR:
                character = new warriror_1.Warrior();
                break;
            case stringConsts_1.Classes.ARCHER:
                character = new archer_1.Archer();
                break;
            case stringConsts_1.Classes.MAGICAN: // Исправлено: была опечатка в названии класса
                character = new magican_1.Magican();
                break;
            // Добавьте обработку для других классов, если необходимо
            default:
                // Обработка значения по умолчанию, если случай не совпадает с ожидаемыми классами
                throw new Error("Unexpected character class");
        }
        // Вызов метода generateUnit только если character определен
        if (character) {
            character.generateUnit();
            return character;
        }
        else {
            // Вернуть что-то по умолчанию или бросить ошибку, в зависимости от вашего случая
            throw new Error("Failed to generate character");
        }
    };
    return Helper;
}());
exports.Helper = Helper;
