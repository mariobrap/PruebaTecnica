import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import * as jwt from 'jsonwebtoken';

@Injectable()
export class ValidateJwtMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {
        const token = req.headers['authorization'];
        if(token){
            try {
                const test = jwt.verify(token.split(' ')[1],process.env.JWT_SECRET);
            } catch (error:any) {
                return res.status(401).json({'error':error.message});
            }
        }
        else{
            return res.status(400).json({'error':'Token is missing'});
        }
        next();
    }

}