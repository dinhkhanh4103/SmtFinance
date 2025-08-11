export const up = async (db) => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      age INTEGER
    );
  `;
  await db.executeSql(query);
  console.log('✅ Migration 001: Created users table');
};
