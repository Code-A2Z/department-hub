import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import noticesReducer from './slices/noticeSlice';
export const store=configureStore({
    reducer:{
        auth: authReducer,
        notices: noticesReducer,
    }
});