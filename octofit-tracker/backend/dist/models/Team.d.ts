import { Types } from 'mongoose';
export interface ITeam {
    _id?: string;
    name: string;
    description: string;
    leader: Types.ObjectId;
    members: Types.ObjectId[];
    createdAt: Date;
}
export declare const Team: import("mongoose").Model<ITeam, {}, {}, {}, import("mongoose").Document<unknown, {}, ITeam> & ITeam & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=Team.d.ts.map