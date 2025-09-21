import db from '../config/db.js';
import ApiError from '../utils/ApiError.js';

export async function createUser({ username, email }) {
  try {
    const [result] = await db.query(
      'INSERT INTO users (username, email) VALUES (?, ?)',
      [username, email]
    );
    return await getUserById(result.insertId);
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      throw new ApiError(409, 'Username or email already exists');
    }
    throw err;
  }
}

export async function getUserById(id) {
  const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  if (rows.length === 0) {
    throw new ApiError(404, 'User not found');
  }
  return rows[0];
}

export async function getAllUsers() {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
}
