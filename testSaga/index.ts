import { Helper } from "./helper";
import { Logger } from "./logger";
import * as readline from 'readline';

class Game{ 
  
    fight() {

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question('Enter heroes count: ', (input: string) => 
        {
            
            const number = parseFloat(input); // Преобразование введенной строки в число

            if (isNaN(number)) // Проверка на успешное преобразование
            {
                console.log('Not correct number.');
            }

            for (var i = 0; i < number; i++){
                
                let unit1 =  Helper.generateCharacter(); //создание двух экземпляров, наследующих класс Unit 
                let unit2 = Helper.generateCharacter();
                Logger.startMessage(); // стартовое сообщение в начале каждого сражения
                Logger.fighting(unit1, unit2); // метод, отвечающий за само сражение

            }   
            
            rl.close(); // Закрытие интерфейса readline
        });
    }
} 

const game = new Game();
    game.fight();