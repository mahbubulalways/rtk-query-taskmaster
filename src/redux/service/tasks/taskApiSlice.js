import { baseApi } from "../../api/baseApi/baseApi";

const taskApiService = baseApi.injectEndpoints({
  // tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
      providesTags: ["Tasks"],
    }),
    postTasks: builder.mutation({
      query: (payload) => ({
        url: "/tasks",
        method: "POST",
        body: payload,
      }),
      invalidatesTags:['Tasks']
    }),
    updateTaskStatus: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
  }),
});

export const { useGetTasksQuery,usePostTasksMutation, useUpdateTaskStatusMutation } = taskApiService;
