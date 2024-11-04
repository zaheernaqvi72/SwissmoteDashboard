import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import sequelize from './config/database.js';
import jobRoutes from './routes/jobRoutes.js';
import assignmentRoutes from './routes/assignmentRoutes.js';
import candidateRoutes from './routes/candidateRoutes.js';
import messageRoutes from './routes/messageRoutes.js';
import announcementRoutes from './routes/announcementRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import dailyUpdateRoutes from './routes/dailyUpdateRoutes.js';
import fileRoutes from './routes/fileRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "5mb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/candidates', candidateRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/announcements', announcementRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/daily-updates', dailyUpdateRoutes);
app.use('/api/files', fileRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

sequelize
  .sync({ force: true })
  .then(() => {
    console.log("Database synced");
  })
  .catch((error) => {
    console.error("Error syncing the database:", error);
  });
