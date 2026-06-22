import { Schema, model } from 'mongoose';
const workoutSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    type: {
        type: String,
        required: true,
        enum: ['strength', 'cardio', 'flexibility', 'hiit', 'mixed'],
    },
    duration: {
        type: Number,
        required: true,
    },
    difficulty: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        default: 'intermediate',
    },
    exercises: [String],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
export const Workout = model('Workout', workoutSchema);
//# sourceMappingURL=Workout.js.map