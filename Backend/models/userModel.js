import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

// User Model
const User = sequelize.define(
  "users",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    username: { type: DataTypes.STRING(50), unique: true, allowNull: false },
    email: { type: DataTypes.STRING(100), unique: true, allowNull: false },
    password_hash: { type: DataTypes.STRING(255), allowNull: false },
    full_name: { type: DataTypes.STRING(100) },
    role: {
      type: DataTypes.ENUM("applicant", "recruiter", "admin"),
      defaultValue: "applicant",
    },
    phone_number: { type: DataTypes.STRING(15) },
    profile_picture_url: { type: DataTypes.STRING(255) },
    bio: { type: DataTypes.TEXT },
    
  },
  {
    tableName: "users",
    timestamps: true,
  }
);

export default User;
