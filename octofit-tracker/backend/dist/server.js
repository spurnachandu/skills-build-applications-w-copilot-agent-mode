import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
/**
 * Get the API base URL based on the environment
 * - In Codespaces: https://$CODESPACE_NAME-8000.app.github.dev
 * - Locally: http://localhost:8000
 */
export const getApiBaseUrl = () => {
    const codespaceName = process.env.CODESPACE_NAME;
    if (codespaceName) {
        return `https://${codespaceName}-8000.app.github.dev`;
    }
    return 'http://localhost:8000';
};
/**
 * Configure CORS and host support for the Express application
 */
export const configureServer = (app) => {
    const apiBaseUrl = getApiBaseUrl();
    // Configure CORS to accept requests from Codespaces and localhost
    const corsOptions = {
        origin: (origin, callback) => {
            // List of allowed origins
            const allowedOrigins = [
                'http://localhost:5173', // Vite dev server locally
                'http://localhost:8000', // Local backend
                'http://localhost:3000', // Alternative port
            ];
            // Add Codespaces origins dynamically
            const codespaceName = process.env.CODESPACE_NAME;
            if (codespaceName) {
                allowedOrigins.push(`https://${codespaceName}-5173.app.github.dev`); // Frontend
                allowedOrigins.push(`https://${codespaceName}-8000.app.github.dev`); // Backend
            }
            // Allow requests without origin (e.g., curl, mobile apps)
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            }
            else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true,
    };
    app.use(cors(corsOptions));
    app.use(express.json());
};
/**
 * Log server configuration information
 */
export const logServerInfo = (port) => {
    const apiBaseUrl = getApiBaseUrl();
    const codespaceName = process.env.CODESPACE_NAME;
    console.log('\n📋 Server Configuration:');
    console.log(`   Port: ${port}`);
    console.log(`   API Base URL: ${apiBaseUrl}`);
    if (codespaceName) {
        console.log(`   Codespace: ${codespaceName}`);
        console.log(`   Frontend URL: https://${codespaceName}-5173.app.github.dev`);
        console.log(`   Backend URL: https://${codespaceName}-8000.app.github.dev`);
    }
    else {
        console.log('   Environment: localhost');
    }
    console.log('📊 Available Endpoints:');
    console.log(`   Health: ${apiBaseUrl}/api/health`);
    console.log(`   Users: ${apiBaseUrl}/api/users`);
    console.log(`   Teams: ${apiBaseUrl}/api/teams`);
    console.log(`   Activities: ${apiBaseUrl}/api/activities`);
    console.log(`   Leaderboard: ${apiBaseUrl}/api/leaderboard`);
    console.log(`   Workouts: ${apiBaseUrl}/api/workouts\n`);
};
export default {
    getApiBaseUrl,
    configureServer,
    logServerInfo,
};
//# sourceMappingURL=server.js.map