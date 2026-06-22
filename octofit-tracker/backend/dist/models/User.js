import { Schema, model } from 'mongoose';
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
        default: null,
    },
    bio: {
        type: String,
        default: '',
    },
    points: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
export const User = model('User', userSchema);
//# sourceMappingURL=User.js.map