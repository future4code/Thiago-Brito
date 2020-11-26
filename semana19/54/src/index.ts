import express from 'express'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
import createUser from './controller/createUser'
import {connection} from "./connection/knex"
import login from './controller/login'
import getAllUsers from './controller/getAllUsers'


dotenv.config()



const app = express()
app.use(express.json())
app.use(cors())
app.put("/signup", createUser )
app.post("/login",login )
app.get("/all",getAllUsers )
app.get("/", async function(req,res){
   res.send(await connection.raw('show tables'))
})


app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})


