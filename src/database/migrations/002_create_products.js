export const up = async (db) => {
  const query = `
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      price REAL
    );
  `;
  await db.executeSql(query);
  console.log('✅ Migration 002: Created products table');
};
