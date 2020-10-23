import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from "net";

const app: Express = express()

app.use(express.json())
app.use(cors())

type transactions={
    value:number,
    date:number,
    description:string
}

type account ={
    name:string,
    cpf:number,
    dayOfBirth:number
    statement:transactions[]
    balance:0
}
let users:account[] = [{
    name:"Thiago",
    cpf:11122233344,
    dayOfBirth:27041992,
    statement:[],
    balance:0

}]

app.get("/users", (req: Request, res: Response): void =>{

    try{
        res.status(200).send(users);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});

app.post("/users", (req:Request, res:Response):void=>{
    try{
        if(new Date().getFullYear() - (req.body.dayOfBirth / 10000)>= 18){
            const{name,cpf,dayOfBirth, statement, balance}=req.body;
            const user:account ={
                name:name,
                cpf:cpf,
                dayOfBirth:dayOfBirth,
                statement:statement,
                balance:balance
            }
            users.push(user);
            res.status(200).send({message: "User created successfully"});
        } else {
            throw new Error ("must be over 18")
        }

    }catch(error){
        res.status(400).send({
            message: "error.message"
        });
    }

})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address()as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
