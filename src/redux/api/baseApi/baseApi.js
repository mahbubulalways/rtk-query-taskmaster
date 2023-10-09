import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    // getTasks: builder.query({
    //   query: () => "/tasks",
    //   providesTags: ["Tasks"],
    // }),
    // postTasks: builder.mutation({
    //   query: (payload) => ({
    //     url: "/tasks",
    //     method: "POST",
    //     body: payload,
    //   }),
    //   invalidatesTags:['Tasks']
    // }),
    // updateTaskStatus: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/tasks/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   invalidatesTags: ["Tasks"],
    // }),
  }),
});
// export const {
//   useGetTasksQuery,
//   usePostTasksMutation,
//   useUpdateTaskStatusMutation,
// } = baseApi;
