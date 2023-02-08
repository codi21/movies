import app from './app.js';
import { pool } from '../db.js';

app.listen(8000 , () => {
  console.log('listening on port 8000');
})
