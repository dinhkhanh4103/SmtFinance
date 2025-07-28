import { getDBConnection } from '../sqlite';
import { UserEntity } from '../entities/UserEntity';
import { BaseRepository } from './BaseRepository';

export class UserRepository extends BaseRepository {
  constructor() {
    super(UserEntity);
  }

  async findByName(name) {
    const db = await getDBConnection();
    const query = `SELECT * FROM ${this.entity.tableName} WHERE name = ?;`;
    const res = await db.executeSql(query, [name]);
    const results = [];
    res.forEach(result => {
      for (let i = 0; i < result.rows.length; i++) {
        results.push(result.rows.item(i));
      }
    });
    return results;
  }
}
