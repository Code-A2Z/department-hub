import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const loginUser=createAsyncThunk(
    'auth/loginUser',
    async({email,password}, thunkAPI)=>{
        try{
            const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      
        }
        const mockData={
            token:'mock-jwt-token',
            user:{id:'user123',name:'Admin User',role:'admin'},
        };
        return mockData;
    } catch(error){
        return thunkAPI.rejectWithValue(error.message);
    }
}
);
const authSlice= createSlice({
    name:'auth',
    initialState:{
        user:null,
        isAuthenticated: false,
        loading: 'idle',
        error: null,
    },
    reducers:{
        //asynchronous reducer to handle user logout
        logout:(state)=>{
            state.user=null;
            state.user=null;
            state.isAuthenticated=false;
            state.error=null;
        },
    },
    extraReducers:(builder)=>{
        builder
            .addCase(loginUser.pending,(state)=>{
                state.loading='pending';
            })
            .addCase(loginUser.fulfilled,(state,action)=>{
                state.loading='succeeded';
                state.isAuthenticated=true;
                state.user=action.payload.user,
                state.error=null;
            })
            .addCase(loginUser.rejected,(state,action)=>{
                state.loading='failed';
                state.isAuthenticated=false;
                state.user=null,
                state.error=action.payload;
            });      
    },
});
export const {logout}= authSlice.actions;
export default authSlice.reducer;