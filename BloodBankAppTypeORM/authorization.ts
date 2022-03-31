import * as jwt from 'jsonwebtoken';
import { Request,Response,NextFunction  } from 'express';

export class Authorization{

  static authenticateToken = async (req:Request, res:Response, next:NextFunction)=> 
  {
    const authHeader = req.headers['authorization']; //Bearer TOKEN
    
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token == null) return res.status(401).json({
    
      error:'Unauthorized Access'
    
    });
    
    jwt.verify(token, 'SECRET', (error:any) => {
    if (error) 
    { 
      res.status(403).json({error : error.message});
    }
    else
    {
      next();
    }
    
    });
      return;
  }
}

export default Authorization;