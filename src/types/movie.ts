import {GenreKey} from "@/assets/dictionaries/genres";

export type MovieType = {
  title: string,
  posterUrl: string,
  releaseYear: number,
  description: string,
  genre: GenreKey,
  id: string,
  rating: number,
  director: string,
  reviewIds: string[],
}