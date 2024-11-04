import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Announcement = sequelize.define(
  "announcements",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING(255), allowNull: false },
    description: { type: DataTypes.TEXT },
    image: { type: DataTypes.STRING(255) },
    status: {
      type: DataTypes.ENUM("draft", "published"),
      defaultValue: "draft",
    },
    type: {
      type: DataTypes.ENUM("general", "event", "news"),
      defaultValue: "general",  
  },

  },
  {
    tableName: "announcements",
    timestamps: true,
  }
);

export default Announcement;
