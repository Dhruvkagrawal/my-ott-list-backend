import { Schema, Document } from 'mongoose';

export const MovieSchema = new Schema({
  title: String,
  description: String,
  genres: [String],
  releaseDate: Date,
  director: String,
  actors: [String],
});

export interface Movie extends Document {
  id: string;
  title: string;
  description: string;
  genres: string[];
  releaseDate: Date;
  director: string;
  actors: string[];
}
