import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../model/User"

export function generateToken(
    payload: AuthenticationData
 ): string {
    return jwt.sign(
       payload,
       process.env.JWT_KEY as string,
       {
          expiresIn: process.env.JWT_EXPIRES_IN
       }
    )
 }
 
export function getTokenData(
    token: string
 ): AuthenticationData {
    const result: any = jwt.verify(
       token,
       process.env.JWT_KEY as string
    )
 
    return { id: result.id, }
 }
 
