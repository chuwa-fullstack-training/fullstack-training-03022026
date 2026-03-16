import { createSlice } from "@reduxjs/toolkit";

const todoNameSlice = createSlice({
    name:'todoName',
    initialState:{name:""},
    reducers:{
        clear:state=>{state.name='';},
        setName:(state,action)=>{
            state.name=action.payload;
        }
    }
});

export const { clear, setName } = todoNameSlice.actions;
export default todoNameSlice.reducer;