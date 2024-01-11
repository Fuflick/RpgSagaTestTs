"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.getCharacterParams = function (unit) {
        return "".concat(unit.classType, " ").concat(unit.getName);
    };
    Logger.startMessage = function () {
        console.log('Fight started now!!!\n');
    };
    Logger.characterBurn = function (character, firedamage) {
        console.log("".concat(this.getCharacterParams(character).toString(), " burn and take ").concat(firedamage, " damage"));
    };
    Logger.fighting = function (character1, character2) {
        if (character1 != character2) { //проверка на то, не заставляем ли мы драться персонажа с самим собой
            while (character1.getHealth > 0 || character2.getHealth > 0) { // пока кто-то из них не помрёт (пока здоровье 1 > 0 или здоровье 2 > 0)
                if (character1.getHealth > 0) { // если здоровье 1 больше 0, то он получает по башке от 2
                    character2.attack(character1);
                }
                if (character1.getHealth <= 0) { // если после удара по башке здоровье падает до 0 и ниже, то 2 выигрывает
                    console.log("".concat(character2.getName, " wins!\n\n"));
                    break; // и как итог выполнение цикла while заканчивается
                }
                if (character2.getHealth > 0) { // аналогично первым двум if, только теперь 1 бъёт 2 по башке
                    character1.attack(character2);
                }
                if (character2.getHealth <= 0) {
                    console.log("".concat(character1.getName, " wins!\n\n"));
                    break;
                }
            }
        }
    };
    return Logger;
}());
exports.Logger = Logger;
