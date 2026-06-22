import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        const codespaceName = process.env.CODESPACE_NAME;
        const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
        await mongoose.connect(mongoUri);
        console.log(`✅ MongoDB connected to octofit_db`);
    }
    catch (error) {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    }
};
export default connectDB;
//# sourceMappingURL=database.js.map