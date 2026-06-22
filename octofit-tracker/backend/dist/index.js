import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import { configureServer, logServerInfo } from './server.js';
import usersRouter from './routes/users.js';
import teamsRouter from './routes/teams.js';
import activitiesRouter from './routes/activities.js';
import leaderboardRouter from './routes/leaderboard.js';
import workoutsRouter from './routes/workouts.js';
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;
// Configure CORS and host support for Codespaces and localhost
configureServer(app);
// Connect to MongoDB
connectDB();
// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'API is running' });
});
// API Routes
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);
// Start server
app.listen(PORT, () => {
    console.log(`🚀 Backend server running on port ${PORT}`);
    logServerInfo(PORT);
});
//# sourceMappingURL=index.js.map