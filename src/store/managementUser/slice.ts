import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./thunk";
import { storage } from "utils";

type ManagementUserInitialState = {
  userLogin?: unknown;
  accessToken?: string;
  isFetchingLogin?: boolean;
};

const initialState: ManagementUserInitialState = {
  accessToken: storage.get("accessToken"),
  isFetchingLogin: false,
};

const managementUserSlice = createSlice({
  name: "managementUser",
  initialState,
  reducers: {},
  extraReducers(builder: ActionReducerMapBuilder<ManagementUserInitialState>) {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isFetchingLogin = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        storage.save("accessToken", payload?.accessToken);
        state.accessToken = payload?.accessToken;
        state.userLogin = payload;
        state.isFetchingLogin = false;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.isFetchingLogin = false;
      });
  },
});

export const {
  actions: managementUserActions,
  reducer: managementUserReducer,
} = managementUserSlice;
