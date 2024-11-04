import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Job from './jobModel.js';

const Assignment = sequelize.define('assignments', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    job_id: { type: DataTypes.INTEGER },
    description: { type: DataTypes.TEXT },
    due_date: { type: DataTypes.DATE },
    status: {
        type: DataTypes.ENUM('pending', 'in_progress', 'completed'),
        defaultValue: 'pending',
    },


}, {
    tableName: 'assignments',
    timestamps: true,
});

Assignment.belongsTo(Job, { foreignKey: 'job_id', onDelete: 'CASCADE' });

export default Assignment;