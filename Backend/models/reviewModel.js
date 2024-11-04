import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Candidate from "./candidateModel.js"; 

const Review = sequelize.define(
  "reviews",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    candidate_id: { type: DataTypes.INTEGER, allowNull: false },
    review_text: { type: DataTypes.TEXT },
    rating: { type: DataTypes.INTEGER, allowNull: false, validate: { min: 1, max: 5 } },
  },
  {
    tableName: "reviews",
    timestamps: true,
  }
);

Review.belongsTo(Candidate, {
  foreignKey: "candidate_id",
  onDelete: "CASCADE",
});

export default Review;
