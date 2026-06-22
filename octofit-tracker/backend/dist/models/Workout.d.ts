import { Types } from 'mongoose';
export interface IWorkout {
    _id?: string;
    user: Types.ObjectId;
    name: string;
    description: string;
    type: string;
    duration: number;
    difficulty: string;
    exercises: string[];
    createdAt: Date;
}
export declare const Workout: import("mongoose").Model<IWorkout, {}, {}, {}, import("mongoose").Document<unknown, {}, IWorkout> & IWorkout & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=Workout.d.ts.map