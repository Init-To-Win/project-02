const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    record_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "record",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    review_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    stars: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 4,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "review",
  }
);

module.exports = Review;
