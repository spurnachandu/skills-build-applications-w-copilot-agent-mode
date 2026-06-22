import { Types } from 'mongoose';
export interface IActivity {
    _id?: string;
    user: Types.ObjectId;
    type: string;
    duration: number;
    distance?: number;
    calories: number;
    date: Date;
    description?: string;
}
export declare const Activity: import("mongoose").Model<IActivity, {}, {}, {}, import("mongoose").Document<unknown, {}, IActivity> & IActivity & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=Activity.d.ts.map