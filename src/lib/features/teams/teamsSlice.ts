import { getDataTeams } from "@/api/teams";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState: any = {
  teams: [],
};

const actionGetTeams = createAsyncThunk(
  "teams/actionGetTeams",
  async (qty: any) => {
    const response = await getDataTeams(qty);
    return response.data.results;
  }
);

export const teamsSlice = createSlice({
  name: "teamsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actionGetTeams.fulfilled, (state, action) => {
      state.teams = action.payload;
    });
  },
});

export { actionGetTeams, initialState };
export default teamsSlice.reducer;
