import { Pool } from 'pg';
export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'password',
    database: 'apiemployees',
    port: 5432
});