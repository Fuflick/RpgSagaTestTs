import { fireDamage, heroNames } from "./stringConsts";
import { Helper} from "./helper";
import { Logger } from "./logger";


export class Unit{
    classType = ''; //тип героя
     
    private burning = false; //горит или нет

    get isBurn(): boolean{ // метод чтобы узнать, горит или нет
        return this.burning;
    }

    private skillUsed = false; // использована способность или нет

    get isSkillUsed(): boolean{ // метод, чтобы узнать, использована способность или нет
        return this.skillUsed;
    }

    useSkill(){
        this.skillUsed = true; // испольщование способности переводит переменную skillUsed в true, а это метод, который это делает
    }

    protected health: number; //здоровье

    get getHealth(): number{ // метод для получения здоровья
        return this.health;
    }
    
    protected minHealth = 3; // диапазон здоровья для генерации персонажа
    protected maxHealth = 15;

    private damage: number; // урон

    get getDamage(): number{ // метод, чтобы узнать урон
        return this.damage;
    }

    private name: string; // имя
    
    get getName(): string{ // метод, чтобы узнать имя
        return this.name;
    }

    generateUnit() { // метод для установки значений имени, здоровья и урона
        this.name = heroNames[Helper.getRandomInt(0, heroNames.length - 1)];
        this.health = Helper.getRandomInt(this.minHealth, this.maxHealth);
        this.damage = Helper.getRandomInt(1, 5);
    }

    public takeDamage(damage: number){ // метод для получения урона
        this.health -= damage;
    }

    becameBurning(){ // метод чтобы начать гореть
        this.burning = true;
    }

    attack(enemy: Unit){ // метод чтобы атаковать
        console.log(`${this.classType} ${this.getName} attack ${Logger.getCharacterParams(enemy).toString()}`);
        console.log(`${this.getName} damage = ${this.getDamage}`);
        console.log(`${enemy.getName} health became ${enemy.getHealth - this.getDamage}`)
        enemy.takeDamage(this.damage);
    }

    burnInFigth(){ // метод для получения урона от огня в бою
        this.takeDamage(fireDamage);
        Logger.characterBurn(this, fireDamage);
    }
}