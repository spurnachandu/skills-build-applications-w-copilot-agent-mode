export interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    profilePicture?: string;
    bio?: string;
    points: number;
    createdAt: Date;
}
export declare const User: import("mongoose").Model<IUser, {}, {}, {}, import("mongoose").Document<unknown, {}, IUser> & IUser & Required<{
    _id: string;
}>, any>;
//# sourceMappingURL=User.d.ts.map