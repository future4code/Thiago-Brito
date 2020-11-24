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