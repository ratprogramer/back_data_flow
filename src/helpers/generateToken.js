import jwt from 'jsonwebtoken';


export function generateToken (data,key){
    console.log(data);
    
    const token = jwt.sign(data,key,{expiresIn:'1h'})
    return token 
}