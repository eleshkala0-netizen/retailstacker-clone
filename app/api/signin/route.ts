// app/api/signin/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { signJwtAccessToken } from '@/lib/jwt';
import bcrypt from 'bcryptjs';
import { query, queryOne } from '@/lib/db';

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json();

        // Validate input
        if (!email || !password) {
            return NextResponse.json(
                { message: 'Email and password are required' },
                { status: 400 }
            );
        }

        // Find user in database
        const user = await queryOne(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );

        // Check if user exists
        if (!user) {
            return NextResponse.json(
                { message: 'Invalid email or password' },
                { status: 401 }
            );
        }

        // Verify password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json(
                { message: 'Invalid email or password' },
                { status: 401 }
            );
        }

        // Generate JWT token
        const token = signJwtAccessToken({
            id: user.id,
            email: user.email,
            name: user.name,
        });

        // Return success
        return NextResponse.json(
            {
                message: 'Login successful',
                user: {
                    id: user.id,
                    email: user.email,
                    name: user.name,
                },
                token,
            },
            { status: 200 }
        );

    } catch (error) {
        console.error('Signin error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}