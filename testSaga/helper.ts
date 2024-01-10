import { Unit } from "./unit";
import { Classes } from "./stringConsts";
import { Warrior } from "./unitClasses/warriror";
import { Archer } from "./unitClasses/archer";
import { Magican } from "./unitClasses/magican";

export class Helper{
  static getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  static getRandomEnumValue(enumObj: any): any {
    const enumValues = Object.keys(enumObj)
      .filter(key => isNaN(Number(key)))
      .map(key => enumObj[key]);
  
    const randomIndex = Math.floor(Math.random() * enumValues.length);
    return enumValues[randomIndex];
  }

  static generateCharacter(): Unit  | undefined
   {
        let character: Unit;
        switch (Helper.getRandomEnumValue(Classes)) {
          case Classes.WARRIOR:
            character = new Warrior();
            character.generateUnit();
            return character;
          case Classes.ARCHER:
            character = new Archer();
            character.generateUnit();
            return character;
          case Classes.MAGICAN:
            character = new Magican();
            character.generateUnit();
            return character;
        }
    }     
}
 