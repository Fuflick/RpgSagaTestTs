import { Unit } from "./unit";

export class Logger{
    static getCharacterParams(unit: Unit){
        return `${unit.classType} ${unit.getName}`
    }

    static startMessage(){
        console.log('Fight started now!!!\n');
    }

    static characterBurn(character: Unit, firedamage: number) {
        console.log(`${this.getCharacterParams(character).toString()} burn and take ${firedamage} damage`);
    }

    static fighting(character1: Unit, character2: Unit){
        if (character1 != character2){ //проверка на то, не заставляем ли мы драться персонажа с самим собой
            while(character1.getHealth > 0 || character2.getHealth > 0){ // пока кто-то из них не помрёт (пока здоровье 1 > 0 или здоровье 2 > 0)

                if (character1.getHealth > 0){ // если здоровье 1 больше 0, то он получает по башке от 2
                    character2.attack(character1);
                }
                if (character1.getHealth <= 0){ // если после удара по башке здоровье падает до 0 и ниже, то 2 выигрывает
                    console.log(`${character2.getName} wins!\n\n`);
                    break; // и как итог выполнение цикла while заканчивается
                }
                if (character2.getHealth > 0){ // аналогично первым двум if, только теперь 1 бъёт 2 по башке
                    character1.attack(character2);
                }
                if (character2.getHealth <= 0){
                    console.log(`${character1.getName} wins!\n\n`);
                    break;
                }
            }
        }
    }
}