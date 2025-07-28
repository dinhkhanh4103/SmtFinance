import { getDBConnection } from '../sqlite';

export class BaseRepository {
  constructor(entity) {
    this.entity = entity;
  }

  async createTable() {
    const db = await getDBConnection();
    const columns = Object.entries(this.entity.columns)
      .map(([col, type]) => `${col} ${type}`)
      .join(', ');
    const query = `CREATE TABLE IF NOT EXISTS ${this.entity.tableName} (${columns});`;
    await db.executeSql(query);
  }

  async insert(data) {
    const db = await getDBConnection();
    const keys = Object.keys(data);
    const values = Object.values(data);
    const placeholders = keys.map(() => '?').join(', ');
    const query = `INSERT INTO ${this.entity.tableName} (${keys.join(', ')}) VALUES (${placeholders});`;
    await db.executeSql(query, values);
  }

  async findAll() {
    const db = await getDBConnection();
    const results = [];
    const query = `SELECT * FROM ${this.entity.tableName};`;
    const res = await db.executeSql(query);
    res.forEach(result => {
      for (let i = 0; i < result.rows.length; i++) {
        results.push(result.rows.item(i));
      }
    });
    return results;
  }

  async deleteAll() {
    const db = await getDBConnection();
    const query = `DELETE FROM ${this.entity.tableName};`;
    await db.executeSql(query);
  }
}
