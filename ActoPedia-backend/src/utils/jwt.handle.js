import jwt from 'jsonwebtoken';
import 'dotenv/config';

const JWT = process.env.JWT_SECRET;

export const sign=(payload)=>{
    const token = jwt.sign(payload, JWT, {
        expiresIn: '1h'
    })
    return token;
}

export const verify=(token)=>{
    const decoded = jwt.verify(token, JWT);
    return decoded;
}