import { Types } from 'mongoose';
export interface ILeaderboard {
    _id?: string;
    user: Types.ObjectId;
    totalPoints: number;
    activitiesCount: number;
    rank: number;
    lastUpdated: Date;
}
export declare const Leaderboard: import("mongoose").Model<ILeaderboard, {}, {}, {}, import("mongoose").Document<unknown, {}, ILeaderboard> & ILeaderboard & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=Leaderboard.d.ts.map