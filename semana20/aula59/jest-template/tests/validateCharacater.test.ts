import { validateCharacter } from "../src/validateCharacter"

describe("",()=>{
    test("should return false for empty name", ()=>{
        const result = validateCharacter({
            name:"",
            hitpoints:1500,
            strength:200,
            defense:500
        });
        expect(result).toBe(false);

    })
    test("should return false for no hitpoints", ()=>{
        const result = validateCharacter({
            name:"chrono",
            hitpoints:0,
            strength:800,
            defense:500
        });
        expect(result).toBe(false);
    })
    test("should return false for no strength", ()=>{
        const result = validateCharacter({
            name:"magus",
            hitpoints:1500,
            strength:0,
            defense:400
        });
        expect(result).toBe(false);
    })
    test("should return false for no defense", ()=>{
        const result = validateCharacter({
            name:"ayla",
            hitpoints:1500,
            strength:1000,
            defense:0
        });
        expect(result).toBe(false);
    })

    test("should return false for negative stat", ()=>{
        const result = validateCharacter({
            name:"magus",
            hitpoints:1500,
            strength:-200,
            defense:400
        });
        expect(result).toBe(false);

    })
    
    test("should return valid information", ()=>{
        const result = validateCharacter({
            name:"chrono",
            hitpoints:1500,
            strength:800,
            defense:500
        });
        expect(result).toBe(true);
        
    })

})
