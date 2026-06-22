import { Schema, model } from 'mongoose';
const leaderboardSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    totalPoints: {
        type: Number,
        default: 0,
    },
    activitiesCount: {
        type: Number,
        default: 0,
    },
    rank: {
        type: Number,
        default: 0,
    },
    lastUpdated: {
        type: Date,
        default: Date.now,
    },
});
export const Leaderboard = model('Leaderboard', leaderboardSchema);
//# sourceMappingURL=Leaderboard.js.map