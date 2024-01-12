"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helper_1 = require("./helper");
var logger_1 = require("./logger");
var readline = require("readline");
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.fight = function () {
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question('Enter heroes count: ', function (input) {
            var number = parseFloat(input); // Преобразование введенной строки в число
            var unit1 = helper_1.Helper.generateCharacter(); //создание первых двух персонажей 
            var unit2 = helper_1.Helper.generateCharacter();
            if (isNaN(number)) // Проверка на успешное преобразование
             {
                console.log('Not correct number.');
            }
            else {
                var winner = logger_1.Logger.fighting(unit1, unit2); // метод, отвечающий за само сражение
                for (var i = 2; i < number; i++) {
                    var enemy = helper_1.Helper.generateCharacter();
                    winner = logger_1.Logger.fighting(winner, enemy);
                }
                console.log("".concat(logger_1.Logger.getCharacterParams(winner), " became champion!!!!!\nCongratulations, ").concat(winner.getName));
            }
            rl.close(); // Закрытие интерфейса readline
        });
    };
    return Game;
}());
var game = new Game();
game.fight();
