import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// Daily Update Model
const DailyUpdate = sequelize.define(
  "daily_updates",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    update_text: { type: DataTypes.TEXT, allowNull: false },
    
    
  },
  {
    tableName: "daily_updates",
    timestamps: true,
  }
);

export default DailyUpdate;
