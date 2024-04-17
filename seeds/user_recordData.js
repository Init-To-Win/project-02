const { UserRecord } = require("../models");

const userRecordData = [
  { user_id: 1, record_id: 3 },
  { user_id: 1, record_id: 4 },
  { user_id: 1, record_id: 1 },
  { user_id: 1, record_id: 2 },
  { user_id: 1, record_id: 5 },
  { user_id: 1, record_id: 6 },
  { user_id: 1, record_id: 7 },
  { user_id: 1, record_id: 8 },
  { user_id: 2, record_id: 12 },
  { user_id: 2, record_id: 11 },
  { user_id: 3, record_id: 7 },
  { user_id: 3, record_id: 8 },
  { user_id: 4, record_id: 2 },
  { user_id: 4, record_id: 1 },
  { user_id: 5, record_id: 10 },
  { user_id: 5, record_id: 9 },
  { user_id: 6, record_id: 6 },
  { user_id: 6, record_id: 5 },
  { user_id: 7, record_id: 4 },
  { user_id: 7, record_id: 3 },
  { user_id: 8, record_id: 11 },
  { user_id: 8, record_id: 12 },
  { user_id: 9, record_id: 9 },
  { user_id: 9, record_id: 10 },
  { user_id: 10, record_id: 1 },
  { user_id: 10, record_id: 2 },
  { user_id: 11, record_id: 8 },
  { user_id: 11, record_id: 7 },
  { user_id: 12, record_id: 5 },
  { user_id: 12, record_id: 6 },
];

const seedRecordData = () => UserRecord.bulkCreate(userRecordData);
module.exports = seedRecordData;
