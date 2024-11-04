import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./userModel.js";
import Job from "./jobModel.js";
import Assignment from "./assignmentModel.js";
import Candidate from "./candidateModel.js";
import Announcement from "./announcementModel.js";
import Review from "./reviewModel.js";
import DailyUpdate from "./dailyUpdateModel.js";

const File = sequelize.define(
  "files",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    file_name: { type: DataTypes.STRING(255), allowNull: false },
    file_path: { type: DataTypes.STRING(255), allowNull: false },
    file_type: { type: DataTypes.STRING(50) },
    uploaded_by: { type: DataTypes.INTEGER },
    user_id: { type: DataTypes.INTEGER },
    job_id: { type: DataTypes.INTEGER },
    assignment_id: { type: DataTypes.INTEGER },
    candidate_id: { type: DataTypes.INTEGER },
    announcement_id: { type: DataTypes.INTEGER },
    review_id: { type: DataTypes.INTEGER },
    daily_update_id: { type: DataTypes.INTEGER },
    upload_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  {
    tableName: "files",
    timestamps: true,
  }
);

File.belongsTo(User, {
  as: "Uploader",
  foreignKey: "uploaded_by",
  onDelete: "CASCADE",
});
File.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });
File.belongsTo(Job, { foreignKey: "job_id", onDelete: "CASCADE" });
File.belongsTo(Assignment, {
  foreignKey: "assignment_id",
  onDelete: "CASCADE",
});
File.belongsTo(Candidate, {
  foreignKey: "candidate_id",
  onDelete: "CASCADE",
});
File.belongsTo(Announcement, {
  foreignKey: "announcement_id",
  onDelete: "CASCADE",
});
File.belongsTo(Review, { foreignKey: "review_id", onDelete: "CASCADE" });
File.belongsTo(DailyUpdate, {
  foreignKey: "daily_update_id",
  onDelete: "CASCADE",
});

export default File;
