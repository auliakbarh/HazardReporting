import {appSchema, tableSchema} from '@nozbe/watermelondb';

export const theSchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'hazards',
      columns: [
        {name: 'createdAt', type: 'string', isOptional: true},
        {name: '_id', type: 'string', isOptional: true},
        {name: 'waktuLaporan', type: 'string'},
        {name: 'judulHazard', type: 'string'},
        {name: 'detailLaporan', type: 'string'},
        {name: 'lokasi', type: 'string'},
        {name: 'subLokasi', type: 'string'},
      ],
    }),
  ],
});
