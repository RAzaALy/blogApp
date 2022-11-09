import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://61791a83aa7f3400174047a6.mockapi.io/v1";

export const finsApi = createApi({
  reducerPath: "finsApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => '/GetBLogs',
    }),
    getBlog: builder.query({
        query: (id) =>  `/GetBLogs/${id}`
    })
  }),
});

export const { useGetBlogsQuery, useGetBlogQuery } = finsApi;
