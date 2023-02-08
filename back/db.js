import { createPool } from 'mysql2/promise';
export const pool = createPool ({
  host : 'localhost',
  user : 'root',
  password : 'Codilupi21@',
  port: 3306,
  database: 'moviesdb'
});

