import { verifyAge } from "../src/casino"
import { Users } from "../src/model/casino"

describe("",()=>{

    test("one brazilian allowed", () => {
        const user: Users = {
            name: "José",
            age: 30,
            nacionality: NACIONALITY.BRAZILIAN
        }
    
        const result = verifyAge(user, 50)
        
        expect(result).toEqual({
            ...user,
            balance: 50
        })
    })



})