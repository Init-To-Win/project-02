const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UserRecord extends Model {}

UserRecord.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: "user", key: "id" },
    },
    record_id: {
      type: DataTypes.INTEGER,
      references: { model: "record", key: "id" },
    },
  },
  { sequelize, feezeTableName: true, modelName: "user_record" }
);

module.exports = UserRecord;
