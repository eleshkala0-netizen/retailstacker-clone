// lib/jwt.ts
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this';

export function signJwtAccessToken(payload: any) {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: '7d',
    });
}

export function verifyJwtAccessToken(token: string) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}