import * as jwt from 'jsonwebtoken';
import { LoginDto } from 'src/auth/dto/login.dto';
export const generateToken = ({ user, password }:LoginDto) => {
    return jwt.sign({ user, password }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION_TIME })
}