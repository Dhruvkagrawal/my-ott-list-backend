import { Schema, Document } from 'mongoose';

export const MyListSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      contentId: String,
      contentType: { type: String, enum: ['Movie', 'TVShow'] },
    },
  ],
});

export interface MyList extends Document {
  userId: string;
  items: Array<{
    contentId: string;
    contentType: 'Movie' | 'TVShow';
  }>;
}
