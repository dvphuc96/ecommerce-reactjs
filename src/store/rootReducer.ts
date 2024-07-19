import { combineReducers } from "@reduxjs/toolkit";
import { managementUserReducer } from "./managementUser";

export const rootReducer = combineReducers({
    managementUser: managementUserReducer,
})