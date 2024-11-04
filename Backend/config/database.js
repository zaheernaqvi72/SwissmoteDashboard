import { Sequelize } from 'sequelize';

// Create a new instance of Sequelize
const sequelize = new Sequelize('swissmote', 'root', 'Zaheernaqvi@1472', {
    host: 'localhost', 
    dialect: 'mysql',
    logging: false,
});

// Test the database connection
const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

testConnection();

export default sequelize;
