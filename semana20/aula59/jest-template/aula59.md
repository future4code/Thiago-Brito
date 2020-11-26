### Exercicios aula59

1)
```ts
a)
export interface  character{
name:string,
hitpoints:number,
strength:number,
defense:number
}
```
b)
```ts
import { character } from "./models/character";

export const validateCharacter = (input:character):boolean=>{
    if (
        !input.name ||
        input.hitpoints === undefined||
        input.strength === undefined||
        input.defense === undefined
        ){
            return false;
        }
       

    if (input.hitpoints <=0|| 
        input.strength <=0||
        input.defense <=0
        ){
            return false;

        }
       return true;
}
```

2)
```ts
describe("",()=>{
   a) test("should return false for empty name", ()=>{
        const result = validateCharacter({
            name:"",
            hitpoints:1500,
            strength:200,
            defense:500
        });
        expect(result).toBe(false);

    })
    b)test("should return false for no hitpoints", ()=>{
        const result = validateCharacter({
            name:"chrono",
            hitpoints:0,
            strength:800,
            defense:500
        });
        expect(result).toBe(false);
    })
    c)test("should return false for no strength", ()=>{
        const result = validateCharacter({
            name:"magus",
            hitpoints:1500,
            strength:0,
            defense:400
        });
        expect(result).toBe(false);
    })
    d)test("should return false for no defense", ()=>{
        const result = validateCharacter({
            name:"ayla",
            hitpoints:1500,
            strength:1000,
            defense:0
        });
        expect(result).toBe(false);
    })

    e)test("should return false for negative stat", ()=>{
        const result = validateCharacter({
            name:"magus",
            hitpoints:1500,
            strength:-200,
            defense:400
        });
        expect(result).toBe(false);

    })
    
    f)test("should return valid information", ()=>{
        const result = validateCharacter({
            name:"chrono",
            hitpoints:1500,
            strength:800,
            defense:500
        });
        expect(result).toBe(true);
        
    })

})

3)
a)
export const performAttack = (attacker: Character, defender: Character) => {
  if (!validateCharacter(attacker) || !validateCharacter(defender)) {
    throw new Error("Invalid character");
  }

  if (attacker.strength > defender.defense) {
    defender.hitpoints -= attacker.strength - defender.defense;
  }
};
```
b)
```ts
import { Character } from "./models/character";

export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.hitpoints -= attacker.strength - defender.defense;
    }
  };
```
c)
Na inversao de dependencia podemos invés de chamar a função validateCharacter, criar um parametro chamado Validator que tem como valor a interface Character.

4)
a)
PerformAtack, por que ele precisa da funçao validateCharacter para funcionar

b)
```ts
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return true
		});
});
```

c)
```ts
test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
			return false
		});
});
5)
```
a)
import { Character } from "../src/models/character";
import { performAttack } from "../src/performAtack";

describe("",()=>{
    test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
          return true;
        });
    
        const attacker: Character = {
          name: "chrono",
          hitpoints: 1500,
          defense: 200,
          strength: 800,
        };
    
        const defender: Character = {
          name: "lavos",
         hitpoints: 1500,
          defense: 600,
          strength: 2000,
        };
    
        performAttack(attacker, defender, validatorMock as any);
    
        expect(defender.hitpoints).toEqual(1300);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
      });
})
```ts
