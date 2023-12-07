import { Unit } from "../unit";

export class Magican extends Unit{
    minHealth = 5;
    maxHealth = 15;
    
    classType = 'Magican';

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