import express, {Express, Request, Response} from "express"
import cors from "cors"
import {country, countries} from "./countries"

const app:Express=express()
app.use(express.json())
app.use(cors())
    app.get("/countries/all",(req:Request, res:Response)=>{
      res.status(200).send(countries)
})

app.get("/countries/search", (req: Request, res: Response)=>{
    let searchedCountry: country[] = countries
    try {
        if(req.query.name){ 
           const result:country[] = countries.filter (
                country => country.name.includes(String(req.query.name)) 
            )
            res.status(200).send(result)
        } 
        if(req.query.capital){
            const result: country[] = countries.filter (
                country => country.capital.includes(String(req.query.capital))
            )
            res.status(200).send(result)
        } 
        if(req.query.continent){
            const result: country[] = countries.filter (
                country => country.continent.includes(String(req.query.continent))
            )
            res.status(200).send(result)
            }
           
    } catch (error) {
        res.status(404).send("Country not found")
    }
})




app.get("/countries/:id", (req: Request, res: Response) => {
    const result: country | undefined = countries.find(
        country => country.id === Number(req.params.id)
    )
    res.status(200).send(result)
})




app.listen(3003,()=>{console.log("servidor sucesso")})
