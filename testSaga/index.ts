import { Helper } from "./helper";
import { Logger } from "./logger";
import * as readline from 'readline';
import { Unit } from "./unit";

class Game{ 
  
    fight() {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Enter heroes count: ', (input: string) => 
        {
            
            const number = parseFloat(input); // Преобразование введенной строки в число

            let unit1 = Helper.generateCharacter(); //создание первых двух персонажей 
            let unit2 = Helper.generateCharacter();
            if (isNaN(number)) // Проверка на успешное преобразование
            {
                console.log('Not correct number.');
            }
            else
            {
                let winner = Logger.fighting(unit1, unit2); // метод, отвечающий за само сражение
                
                for (let i = 2; i < number;  i++){
                    let enemy = Helper.generateCharacter();
                    winner = Logger.fighting(winner, enemy);
                }

                console.log(`${Logger.getCharacterParams(winner)} became champion!!!!!\nCongratulations, ${winner.getName}`);
            }
            rl.close(); // Закрытие интерфейса readline
        });
    }
} 

const game = new Game();
    game.fight();