import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./userModel.js";

const Job = sequelize.define(
  "jobs",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING(255), allowNull: false },
    role_description: { type: DataTypes.TEXT },
    role_type: { type: DataTypes.ENUM("internship", "job"), allowNull: false },
    work_type: {
      type: DataTypes.ENUM("full-time", "part-time"),
      allowNull: false,
    },
    payment_type: { type: DataTypes.ENUM("paid", "unpaid"), allowNull: false },
    salary: { type: DataTypes.DECIMAL(10, 2) },
    skills_required: { type: DataTypes.TEXT },
    status: {
      type: DataTypes.ENUM("active", "closed"),
      defaultValue: "active",
    },
    location_type: {
      type: DataTypes.ENUM("office", "work-from-home", "hybrid"),
      allowNull: false,
    },
    location: { type: DataTypes.STRING(255) },
    company: { type: DataTypes.STRING(255) },
    apply_by: { type: DataTypes.DATE },
    openings: { type: DataTypes.INTEGER, defaultValue: 1 },
    posted_by: { type: DataTypes.INTEGER },

  },
  {
    tableName: "jobs",
    timestamps: true,
  }
);

Job.belongsTo(User, { as: "PostedBy", foreignKey: "posted_by", onDelete: "CASCADE" });

export default Job;
