import express, {Express} from "express"
import { feedRoutes } from "./routes/feedRoutes"
import cors from "cors"
import { userRoutes } from "./routes/userRoutes"
import { friendRoutes } from "./routes/friendRoutes"



const app: Express = express()
app.use(express.json())
app.use(cors())
app.use("/posts", feedRoutes)
app.use("/user", userRoutes )
app.use("/friend", friendRoutes)

   

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})