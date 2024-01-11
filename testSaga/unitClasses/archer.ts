import { Unit } from "../unit";
import { Logger } from "../logger";
import { fireDamage } from "../stringConsts";

export class Archer extends Unit{

    minHealth = 7;
    maxHealth = 20;

    classType = 'Archer';

    generateUnit(): void {
        super.generateUnit();
    }

    attack(enemy: Unit): void {
        if (enemy.isBurn){
            console.log(`${Logger.getCharacterParams(this).toString()} attack ${Logger.getCharacterParams(enemy).toString()}`);
            enemy.burnInFigth();
            console.log(`${enemy.getName} healt became ${enemy.getHealth}`)
            console.log(`${this.getName} damage = ${this.getDamage}`);
            enemy.takeDamage(this.getDamage);
            console.log(`${enemy.getName} health became ${enemy.getHealth}`)
        }
        else{

            console.log(`${Logger.getCharacterParams(this).toString()} use fire arrows and ${Logger.getCharacterParams(enemy).toString()} became burning`);
            super.attack(enemy);
            enemy.becameBurning();
        }
    }

    constructor(){
        super();
    }
   
}