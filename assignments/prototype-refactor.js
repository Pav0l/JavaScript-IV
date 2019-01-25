/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
// function GameObject(args) {
//     this.createdAt = args.createdAt;
//     this.dimensions = args.dimensions;
//   }
//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`
//   }


//   function CharacterStats(args) {
//     GameObject.call(this, args);
//     this.healthPoints = args.healthPoints;
//     this.name = args.name;
//   }
//   CharacterStats.prototype = Object.create(GameObject.prototype);
//   CharacterStats.prototype.takeDamage = function() {
//     return `${this.name} took damage.`
//   }
        
//   function Humanoid(args) {
//     CharacterStats.call(this, args);
//     this.team = args.team;
//     this.weapons = args.weapons;
//     this.language = args.language;
//   }
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
//   Humanoid.prototype.greet = function () {
//     return `${this.name} offers a greeting in ${this.language}`
//   }

class GameObject {
    constructor(args) {
        const { createdAt, dimensions } = args;
        this.createdAt = createdAt;
        this.dimensions = dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.` 
    }
}

class CharacterStats extends GameObject{
    constructor(args) {
        super(args);
        const { healthPoints, name } = args;
        this.healthPoints = healthPoints;
        this.name = name;
    }
    takeDamage() {
        return `${this.name} took damage.`
    }
}

class Humanoid extends CharacterStats {
    constructor(args) {
        super(args);
        const { team, weapons, language } = args;
        this.team = team;
        this.weapons = weapons;
        this.language = language;
    }
    greet() {
        return `${this.name} offers a greeting in ${this.language}`
    }
}


const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});
  
const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
});
  
const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
});
  
console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  
// Stretch task: 
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
// * Give the Hero and Villains different methods that could be used to remove health points from objects 
// which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

// function Villain(args) {
//     Humanoid.call(this, args);
//   }
//   Villain.prototype = Object.create(Humanoid.prototype);
//   Villain.prototype.curse = function (atckTarget) {
//     console.log(`${this.name} casted his curse on you!`)
//     return atckTarget.healthPoints -= 1;
// }

// function Hero (args) {
//     Humanoid.call(this, args);
// }
// Hero.prototype = Object.create(Humanoid.prototype);
// Hero.prototype.blast = function (atckTarget) {
//     console.log(`${this.name} attacked with his spell!`);
//     return atckTarget.healthPoints -= 1;
// }

class Hero extends Humanoid {
    blast(atckTarget) {
        console.log(`${this.name} attacked with his spell!`);
        return atckTarget.healthPoints -= 1;
    }
}

class Villain extends Humanoid{
    curse(atckTarget) {
        console.log(`${this.name} casted his curse on you!`)
        return atckTarget.healthPoints -= 1;
    }
}
  
const villainChar = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 3,
      height: 5,
    },
    healthPoints: 15,
    name: 'Lich King',
    team: 'Scourge',
    weapons: [
      'Frostmourne',
    ],
    language: 'Necromancer',
});
  
const heroChar = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 3,
      width: 5,
      height: 2,
    },
    healthPoints: 15,
    name: 'Anduin Wrynn',
    team: 'Alliance',
    weapons: [
      'Sword',
    ],
    language: 'Human',
});
  
const battle = function(char1, char2, hp = 15) {
    let isAlive = true;
    char1.healthPoints = hp;
    char2.healthPoints = hp;
    while (isAlive) {
      console.log('New round begins:')
      isAlive = char1.healthPoints > 1 && char2.healthPoints > 1;
      let rng = Math.random();
      rng > 0.5 ? char1.curse(char2) : char2.blast(char1);
      console.log(`${char1.name} has ${char1.healthPoints}HP left.${char2.name} has ${char2.healthPoints}HP left.`)
    }
    char1.healthPoints > 1 ? 
    console.log(`${char1.name.toUpperCase()} has WON the battle!`, char2.destroy()) :
     console.log(`${char2.name.toUpperCase()} has WON the battle!`, char1.destroy());
};
battle(villainChar, heroChar);
