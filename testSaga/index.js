"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("./helper");
var logger_1 = require("./logger");
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.fight = function () {
        for (var i = 0; i < 5; i++) {
            var unit1 = helper_1.Helper.generateCharacter(); //создание двух экземпляров, наследующих класс Unit 
            var unit2 = helper_1.Helper.generateCharacter();
            logger_1.Logger.startMessage(); // стартовое сообщение в начале каждого сражения
            logger_1.Logger.fighting(unit1, unit2); // метод, отвечающий за само сражение
        }
    };
    return Game;
}());
var game = new Game();
game.fight();
