import { Helper } from "./helper";
import { Logger } from "./logger";

class Game{ 
  
    fight() {
        for (var i = 0; i < 5; i++){
            
            let unit1 =  Helper.generateCharacter(); //создание двух экземпляров, наследующих класс Unit 
            let unit2 = Helper.generateCharacter();
            
            Logger.startMessage(); // стартовое сообщение в начале каждого сражения
            Logger.fighting(unit1, unit2); // метод, отвечающий за само сражение

        }    
    }
} 

const game = new Game();
    game.fight();