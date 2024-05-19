import { Schema, Document } from 'mongoose';

export const TVShowSchema = new Schema({
  title: String,
  description: String,
  genres: [String],
  episodes: [
    {
      episodeNumber: Number,
      seasonNumber: Number,
      releaseDate: Date,
      director: String,
      actors: [String],
    },
  ],
});

export interface TVShow extends Document {
  id: string;
  title: string;
  description: string;
  genres: string[];
  episodes: Array<{
    episodeNumber: number;
    seasonNumber: number;
    releaseDate: Date;
    director: string;
    actors: string[];
  }>;
}
