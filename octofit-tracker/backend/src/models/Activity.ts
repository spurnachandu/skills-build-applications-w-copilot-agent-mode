import { Schema, model, Types } from 'mongoose';

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

const activitySchema = new Schema<IActivity>({
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

export const Activity = model<IActivity>('Activity', activitySchema);
