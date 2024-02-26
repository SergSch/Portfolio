import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'recipes',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getAllRecipes: builder.query({
      query: () => 'recipes',
    }),
  }),
});

export const { useGetAllRecipesQuery } = apiSlice;
