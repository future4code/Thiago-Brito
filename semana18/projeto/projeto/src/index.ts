import express from 'express'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById'
import getRecipeById from './endpoints/getRecipeById'
import login from './endpoints/login'
import getUserProfile from './endpoints/getUserProfile'
import createRecipe from './endpoints/createRecipe'

dotenv.config()

export const connection = knex({
   client: 'mysql',
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306
   }
})


const app = express()
app.use(express.json())
app.use(cors())

app.get("/", async function(req,res){
   res.send(await connection.raw('show tables'))
})

app.post('/user/signup', createUser)
app.post("/user/login", login)
app.get('/user/profile', getUserProfile)
app.get('/user/:id', getUserById)
app.post('/recipe',createRecipe)
app.get('/recipe/:id', getRecipeById)


app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})

