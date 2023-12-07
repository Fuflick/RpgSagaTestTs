import { fireDamage, heroNames } from "./stringConsts";
import { Helper} from "./helper";
import { Logger } from "./logger";


export class Unit{
    classType = '';
     
    private burning = false;

    get isBurn(): boolean{
        return this.burning;
    }

    protected health: number;

    get getHealth(): number{
        return this.health;
    }
    
    protected minHealth = 3;
    protected maxHealth = 15;

    private damage: number;

    get getDamage(): number{
        return this.damage;
    }

    private name: string;
    
    get getName(): string{
        return this.name;
    }

    generateUnit() {
        this.name = heroNames[Helper.getRandomInt(0, heroNames.length - 1)];
        this.health = Helper.getRandomInt(this.minHealth, this.maxHealth);
        this.damage = Helper.getRandomInt(1, 5);
    }

    public takeDamage(damage: number){
        this.health -= this.getDamage;
    }

    becameBurning(){
        this.burning = true;
    }

    finishBurning(){
        this.burning = false;
    }

    attack(enemy: Unit){
        console.log(`${this.classType} ${this.getName} attack ${Logger.getCharacterParams(enemy).toString()}`);
        console.log(`${this.getName} damage = ${this.getDamage}`);
        console.log(`${enemy.getName} health became ${enemy.getHealth - this.getDamage}}]`)
        enemy.takeDamage(this.damage);
    }

    protected burnInFigth(){
        if (this.isBurn){
            this.health -= fireDamage;
            Logger.characterBurn(this, fireDamage);
        }
    }
}