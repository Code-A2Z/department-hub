import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchNotices=createAsyncThunk(
    'notices/fetchNotices',
    async(_, thunkAPI)=>{
        try{
            const response = await fetch('http://localhost:5000/api/notices');
      if (!response.ok) {
        throw new Error('Failed to fetch notices');
        }
        return data;
    } catch(error){
        //use rejectWithValue to pass error message to reducer
        return thunkAPI.rejectWithValue(error.message);
    }
}
);
const authSlice= createSlice({
    name:'auth',
    initialState:{
        items:[],
        loading: 'idle',
        error: null,
    },
    reducers:{
        //asynchronous reducer to new notices immediately
        addNotice:(state,action)=>{
            state.items.unshift(action.payload);
        },
    },
    extraReducers:(builder)=>{
        builder
            .addCase(fetchNotices.pending,(state)=>{
                state.loading='pending';
            })
            .addCase(loginUser.fulfilled,(state,action)=>{
                state.loading='succeeded';
                state.items=action.payload,
                state.error=null;
            })
            .addCase(fetchNotices.rejected,(state,action)=>{
                state.loading='failed';
                state.error=action.payload;
            });      
    },
});
export const {addNotice}= noticeSlice.actions;
export default noticeSlice.reducer;