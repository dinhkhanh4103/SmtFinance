import { getDBConnection } from './sqlite';

// Import tất cả migration
import { up as m001 } from './migrations/001_create_users';
import { up as m002 } from './migrations/002_create_products';
import { up as m003 } from './migrations/003_add_email_to_users';

// Khai báo migration theo thứ tự
const migrations = [m001, m002, m003];

export const runMigrations = async () => {
  const db = await getDBConnection();

  // Lấy version hiện tại
  const [res] = await db.executeSql(`PRAGMA user_version;`);
  const currentVersion = res.rows.item(0).user_version || 0;
  console.log(`📌 Current DB version: ${currentVersion}`);

  // Chạy migration chưa chạy
  for (let i = currentVersion; i < migrations.length; i++) {
    const migration = migrations[i];
    console.log(`⚙️ Running migration ${i + 1}`);
    await migration(db);
    // Tăng version
    await db.executeSql(`PRAGMA user_version = ${i + 1}`);
  }

  console.log(`✅ DB is up to date at version ${migrations.length}`);
};
