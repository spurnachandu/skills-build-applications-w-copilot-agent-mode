import { Schema, model, Types } from 'mongoose';

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

const workoutSchema = new Schema<IWorkout>({
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

export const Workout = model<IWorkout>('Workout', workoutSchema);
