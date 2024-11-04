import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./userModel.js";
import Job from "./jobModel.js";

const Candidate = sequelize.define(
  "candidates",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    user_id: { type: DataTypes.INTEGER },
    job_id: { type: DataTypes.INTEGER },
    status: {
      type: DataTypes.ENUM(
        "hired",
        "pending",
        "rejected",
        "evaluated",
        "future_consideration"
      ),
      defaultValue: "pending",
    },
    applied_for: {
      type: DataTypes.ENUM("fulltime", "internship", "unpaid"),
      allowNull: false,
    },
    resume: { type: DataTypes.STRING(255) },
    cover_letter: { type: DataTypes.TEXT },
    linkedin: { type: DataTypes.STRING(255) },
    github: { type: DataTypes.STRING(255) },
    portfolio: { type: DataTypes.STRING(255) },
    other_links: { type: DataTypes.TEXT },
    experience: { type: DataTypes.TEXT },
    skills: { type: DataTypes.TEXT },
    education: { type: DataTypes.TEXT },
    location: { type: DataTypes.STRING(255) },
    phone_number: { type: DataTypes.STRING(15) },
    availability: { type: DataTypes.TEXT },
    availability_to_start: { type: DataTypes.DATE },
    
  },
  {
    tableName: "candidates",
    timestamps: true,
  }
);

Candidate.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });
Candidate.belongsTo(Job, { foreignKey: "job_id", onDelete: "CASCADE" });

export default Candidate;
