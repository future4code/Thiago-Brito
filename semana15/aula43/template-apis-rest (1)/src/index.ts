//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';
//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
type user = {
    id: number,
    name: string,
    email: string,
    type: UserType,
    age: number
}

let users:user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserType.NORMAL,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]

// 1)
// a) metodo get
// b) entidade users

app.get("/users", (req: Request, res: Response): void =>{

    try{
        res.status(200).send(users);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});
// 2)
app.get("/users/type/:type", (req: Request, res: Response): void =>{

    try{
        if(!(req.params.type.toUpperCase() in UserType)){
            throw new Error();   
        }
        const usersByType = users.filter((user)=>user.type === req.params.type
        )
        res.status(200).send(usersByType);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});
// a) Foi passado atraves de um filtro de tipo
// b) linhas 88 e 89

// 3)
app.get("/users/query", (req: Request, res: Response): void =>{
    const user = users.filter((u)=>u.name===req.query.name)
        if(!user.length){
            throw new Error();
        }

    try{
        res.status(200).send(users);
    }catch(error){
        res.status(400).send({
            message: "Error searching for users"
        });
    }
});
// a)Query
// b) linha 105 a 108

// 4)
app.post("/users/:id", (req: Request, res: Response): void=>{
    try{
        const {id, name, email, age, type} = req.body;
        const user = {
            id:id,
            name:name,
            email:email,
            age:age,
            type:type
        }

        users.push(user);
        res.status(200).send({message: "User created successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})
// a)Nada mudou
// b) Não é apropriado pq o post que cria o usuario, o put só edita

// 5)
app.put("/users/:id", (req: Request, res: Response): void=>{
    try{
        const {id, name, email, age, type} = req.body;
        const user = {
            id:id,
            name:name,
            email:email,
            age:age,
            type:type
        }

        users.push(user);
        res.status(200).send({message: "User edited successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error editing for users"
        });
    }
})
// 6)
app.patch("/users/:id", (req: Request, res: Response): void=>{
    try{
        const {id, name, email, age, type} = req.body;
        const user = {
            id:id,
            name:name,
            email:email,
            age:age,
            type:type
        }

        users.push(user);
        res.status(200).send({message: "User edited successfully"});
    }catch(error){
        res.status(400).send({
            message: "Error inserting for users"
        });
    }
})
// 7)
app.delete("/users/:id", (req: Request, res: Response): void=>{
    let errorCode:number=400
    try{
        const userIndex = users.findIndex((u)=>u.id===Number(req.params.id))
        if(userIndex === -1 ){
            errorCode=404
            throw new Error()
        }
        users.splice(userIndex, 1);
        res.status(200).send({message: "User deleted successfully"});
    }catch(error){
        res.status(400).send({
            message: "Could not delete user"
        });
    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
