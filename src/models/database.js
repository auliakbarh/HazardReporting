import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import {theSchema} from './schema';
import Hazard from './Hazard';

const adapter = new SQLiteAdapter({
  dbName: 'HazardReportPrototype',
  schema: theSchema,
});

const database = new Database({
  adapter,
  modelClasses: [Hazard],
  actionsEnabled: true,
});

export default database;
