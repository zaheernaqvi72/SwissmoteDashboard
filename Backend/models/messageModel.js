import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import User from "./userModel.js";

const Message = sequelize.define(
  "messages",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    sender_id: { type: DataTypes.INTEGER },
    recipient_id: { type: DataTypes.INTEGER },
    message: { type: DataTypes.TEXT, allowNull: false },
    status: {
      type: DataTypes.ENUM("sent", "delivered", "read"),
      defaultValue: "sent",
    },
  },
  {
    tableName: "messages",
    timestamps: true,
  }
);

Message.belongsTo(User, { as: "Sender", foreignKey: "sender_id", onDelete: "CASCADE" });
Message.belongsTo(User, { as: "Recipient", foreignKey: "recipient_id", onDelete: "CASCADE" });

export default Message;

