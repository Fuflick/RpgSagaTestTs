import { Warrior } from "./unitClasses/warriror";
import { Helper } from "./helper";
import { Archer } from "./unitClasses/archer";
import { Logger } from "./logger";
import { Unit } from "./unit";
import { Classes } from "./stringConsts";

class Game{
  
    fight() {
        for (var i = 0; i < 10; i++){
            
            let unit1 = Helper.generateCharacter();
            let unit2 = Helper.generateCharacter();

            Logger.fighting(unit1, unit2);

        }    
    }
} 

const game = new Game();
    game.fight();