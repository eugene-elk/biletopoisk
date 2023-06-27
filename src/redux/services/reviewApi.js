import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reviewApi = createApi({
  reducerPath: "review",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getReviews: builder.query({ query: () => "reviews" }),
    getReviewsForMovie: builder.query({ query: (movieId) => `reviews?movieId=${movieId}` }),
  }),
});


export const { useGetReviewsForMovieQuery } = reviewApi;