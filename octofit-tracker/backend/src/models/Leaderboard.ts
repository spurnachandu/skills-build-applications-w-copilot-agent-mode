import { Schema, model, Types } from 'mongoose';

export interface ILeaderboard {
  _id?: string;
  user: Types.ObjectId;
  totalPoints: number;
  activitiesCount: number;
  rank: number;
  lastUpdated: Date;
}

const leaderboardSchema = new Schema<ILeaderboard>({
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

export const Leaderboard = model<ILeaderboard>('Leaderboard', leaderboardSchema);
