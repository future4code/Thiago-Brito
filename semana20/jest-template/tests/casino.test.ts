
import { verifyAge } from "../src/casino"
import { Casino, NACIONALITY, LOCATION, Users } from "../src/model/casino"

describe("",()=>{

    test("one brazilian allowed", () => {
        const brazilian: Users = {
            name: "José",
            age: 30,
            nacionality: NACIONALITY.BRAZILIAN
        }
    
        const casino:Casino ={
            name:"Casino do Improtta",
            location:LOCATION.BRAZIL

        }
        const result = verifyAge(casino, [brazilian])
        
        expect(result.brazilians.allowed).toEqual(["José"])
    })

    test("one american allowed", () => {
        const american: Users = {
            name: "Carl Jhonson",
            age: 25,
            nacionality: NACIONALITY.AMERICAN
        }
    
        const casino:Casino ={
            name:"Four Dragons Casino",
            location:LOCATION.EUA

        }
        const result = verifyAge(casino, [american])
        
        expect(result.americans.allowed).toEqual(["Carl Jhonson"])
    })
    test("no one allowed", () => {
        const american: Users = {
            name: "Jack",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        };
        const brazilian: Users = {
            name: "Luis",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        };
        const casino:Casino ={
            name:"Four Dragons Casino",
            location:LOCATION.EUA
        };
        const result = verifyAge(casino, [american,
        american,
        brazilian,
        brazilian
        ]);
        
        expect(result.americans.unallowed).toEqual(["Jack, Jack"]);
        expect(result.brazilians.unallowed).toEqual(["Luis, Luis"])
    })

 test("Americans allowed", () => {
        const american: Users = {
            name: "Carl Jhonson",
            age: 25,
            nacionality: NACIONALITY.AMERICAN
        }
        const brazilian: Users = {
            name: "Luis",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }
        const casino:Casino ={
            name:"Four Dragons Casino",
            location:LOCATION.EUA

        }
        const result = verifyAge(casino, [american,
        american,
        brazilian,
        brazilian
        ])
        
        expect(result.americans.allowed).toEqual(["Carl Jhonson, Carl Jhonson"])
        expect(result.brazilians.unallowed).toEqual(["Luis, Luis"])
    })

})