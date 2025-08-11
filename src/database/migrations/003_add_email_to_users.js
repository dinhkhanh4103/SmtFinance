export const up = async (db) => {
  const query = `ALTER TABLE users ADD COLUMN email TEXT;`;
  await db.executeSql(query);
  console.log('✅ Migration 003: Added email column to users');
};
