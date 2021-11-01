const sequelize = require("./sequalize");
const { Model, DataTypes } = require("sequelize");

class Scoring extends Model {}

Scoring.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    game_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    game_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    game_point: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "game_point",
    timestamps: false,
  }
);

module.exports = Scoring;
