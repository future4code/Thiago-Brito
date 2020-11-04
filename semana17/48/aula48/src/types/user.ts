import { Profession } from "./profession";

export type User = {
   id: string,
   name: string,
   email: string,
   type: Profession[]
}
export type inputData = {
   name: string,
   type: string,
   orderBy:string,
   orderType:string
}