import { JWT_SECRET } from "../secrets"
import { sign, verify } from "jsonwebtoken"

export const jwtGenerator = (payload: any) => {
    return sign(payload, JWT_SECRET,{expiresIn:'1d'})
}

export const jwtValidator = (token: string) => {
    return verify(token, JWT_SECRET)
}