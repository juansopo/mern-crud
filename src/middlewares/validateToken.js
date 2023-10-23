import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from "../config.js"
export const authRequired = (req, res, next) =>{
    console.log('validating...')
    const {token} = req.cookies

    if(!token) return res.status(401).json({message: "Sin autorizacion"})

    jwt.verify(token, TOKEN_SECRET, (err, decoded) =>{
        if(err) return res.status(403).json({message:"token invalido"})

        req.user = decoded
        console.log(decoded)
        next();
    })

}