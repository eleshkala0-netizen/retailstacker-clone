// scripts/init-db.ts
import 'dotenv/config';
import { initDB } from '../lib/db';

dotenv.config();

async function main() {
    console.log('🚀 Initializing database...');
    try {
        await initDB();
        console.log('✅ Database tables created successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Failed to initialize database:', error);
        process.exit(1);
    }
}

main();