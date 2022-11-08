import { Request, Response, NextFunction } from 'express';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../models/User';

dotenv.config();

export const Auth = {
    private: async (req: Request, res: Response, next: NextFunction) => {
        let success = false;
        // Fazer verificação de auth
        if(req.headers.authorization) {
            const [authType, token] = req.headers.authorization.split(' ');
            if(authType === 'Bearer') {
                try {
                    JWT.verify(
                        token,
                        process.env.JWT_SECRET_KEY as string
                    );
                    success = true;
                } catch (e) {}
            }
        }

        if(success) {
            // Manda pro próximo item, que no caso vai chamar o controller privado
            next();
        } else {
            res.status(403); // Not authorized
            res.json({ error: 'Não autorizado' });
        }
    }
}