import { Schema, model, Types } from 'mongoose';

export interface ITeam {
  _id?: string;
  name: string;
  description: string;
  leader: Types.ObjectId;
  members: Types.ObjectId[];
  createdAt: Date;
}

const teamSchema = new Schema<ITeam>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  leader: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Team = model<ITeam>('Team', teamSchema);
