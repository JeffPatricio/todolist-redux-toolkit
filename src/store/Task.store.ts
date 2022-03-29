import { createSlice } from "@reduxjs/toolkit";

interface AddTaskPayload {
  payload: string;
}

interface RemoveTaskPayload {
  payload: number;
}

export const task = createSlice({
  name: "task",
  initialState: {
    tasks: [
      {
        id: 1,
        title: "Buy bread",
      },
    ],
  },
  reducers: {
    addToList(state, { payload }: AddTaskPayload) {
      const currentBiggestId = state.tasks.reduce((value, curr) => {
        return curr.id > value ? curr.id : value;
      }, 1);

      return {
        ...state,
        tasks: [{ id: currentBiggestId + 1, title: payload }, ...state.tasks],
      };
    },

    removeToList(state, { payload }: RemoveTaskPayload) {
      const filtered = state.tasks.filter((task) => task.id !== payload);

      return { ...state, tasks: filtered };
    },
  },
});

export const { addToList, removeToList } = task.actions;

export default task.reducer;
