import { Unit } from "../unit";

export class Archer extends Unit{

    minHealth = 7;
    maxHealth = 20;

    classType = 'Archer';

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