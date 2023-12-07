import { Unit } from "../unit";


export class Warrior extends Unit{
    minHealth = 10;
    maxHealth = 30;
    
    classType = 'Warrior';

    generateUnit(): void {
        super.generateUnit();
    }
    
    attack(enemy: Unit): void {
        super.attack(enemy);
    }

    constructor(){
        super();
    }
}