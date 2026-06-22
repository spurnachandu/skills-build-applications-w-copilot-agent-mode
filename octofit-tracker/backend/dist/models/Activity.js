import { Schema, model } from 'mongoose';
const activitySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['running', 'cycling', 'swimming', 'gym', 'walking', 'other'],
    },
    duration: {
        type: Number,
        required: true,
    },
    distance: {
        type: Number,
        default: null,
    },
    calories: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    description: {
        type: String,
        default: '',
    },
});
export const Activity = model('Activity', activitySchema);
//# sourceMappingURL=Activity.js.map