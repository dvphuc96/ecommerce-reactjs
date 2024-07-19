import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginSchemaType } from "schema";
import { managementUserService } from "services";
import { handleSleep } from "utils";

export const loginThunk = createAsyncThunk(
  "managementUser/login",
  async (payload: LoginSchemaType, { rejectWithValue }) => {
    try {
      const data = managementUserService.login(payload);
      await handleSleep(3000);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
