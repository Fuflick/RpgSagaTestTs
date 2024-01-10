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

  static generateCharacter(): Unit {
    let character: Unit;
    switch (Helper.getRandomEnumValue(Classes)) {
        case Classes.WARRIOR:
            character = new Warrior();
            break;
        
        case Classes.ARCHER:
            character = new Archer();
            break;

        case Classes.MAGICAN:  // Исправлено: была опечатка в названии класса
            character = new Magican();
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
    } else {
        // Вернуть что-то по умолчанию или бросить ошибку, в зависимости от вашего случая
        throw new Error("Failed to generate character");
    }
}

}
 