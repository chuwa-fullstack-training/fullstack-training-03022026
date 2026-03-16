import { createSlice } from "@reduxjs/toolkit";

const markSlice = createSlice({
    name:'mark',
    initialState: {current:false},
    reducers:{
        setToFalse:state=>{state.current=false;},
        setToTrue:state=>{state.current=true;},
        reverse:state=>{state.current=!state.current}
    }
})

export const {setToFalse,setToTrue,reverse} = markSlice.actions;
export default markSlice.reducer;