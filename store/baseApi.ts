import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.example.com',
  }),
  endpoints: (builder) => ({
    // Add your API endpoints here
  }),
});

export const { } = api;
