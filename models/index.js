const Artist = require("./Artist");
const ForSale = require("./ForSale");
const Record = require("./Record");
const Review = require("./Review");
const User = require("./User");

Artist.hasMany(Record, {
  foreignKey: "artist_id",
});

Record.belongsTo(Artist, {
  foreignKey: "artist_id",
});

Record.hasMany(Review, {
  foreignKey: "record_id",
});

Review.belongsTo(Record, {
  foreignKey: "record_id",
});

User.hasMany(Review, {
  foreignKey: "user_id",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
});

Record.hasMany(ForSale, {
  foreignKey: "record_id",
});

ForSale.belongsTo(Record, {
  foreignKey: "record_id",
});

User.hasMany(ForSale, {
  foreignKey: "user_id",
});

ForSale.belongsTo(User, {
  foreignKey: "user_id",
});

User.belongsToMany(Record, {
  through: { model: UserRecord, foreignKey: "user_id" },
  as: "user_records",
});

Record.belongsToMany(User, {
  through: { model: UserRecord, foreignKey: "record_id" },
  as: "record_users",
});

module.exports = { Artist, ForSale, Record, Review, User, UserRecord };
