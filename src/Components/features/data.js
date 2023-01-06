import { createSlice } from "@reduxjs/toolkit";
import { Pass } from "react-bootstrap-icons";

const initialStateValue = [
    {date: "2022/1/25", values: -7},
    {date: "2022/2/12", values: 3},
    {date: "2022/3/11", values: 7},
    {date: "2022/4/1", values: 5},
    {date: "2022/5/27", values: 7},
    {date: "2022/6/10", values: 5},
    {date: "2022/7/2", values: 1},
];

export const dataSlice = createSlice({
  name: "data",
  initialState: { value: initialStateValue },
  reducers: {
    changeDate: (state, action) => {
        console.log(action.payload);
        if(action.payload.from != -1 &&  action.payload.to != -1){
            let data = initialStateValue.map(e => {
                let date = new Date(e.date)
                let month = date.getMonth()
                if (action.payload.from <= month && action.payload.to >= month){
                    return e
                }
            })
            data = data.filter(( element ) => {
                return element !== undefined;
             });
             state.value = data
        }else if (action.payload.from == -1 && action.payload.to != -1){

            let data = initialStateValue.map(e => {
                let date = new Date(e.date)
                let month = date.getMonth()
                if (action.payload.to >= month){
                    return e
                }
            })
            data = data.filter(( element ) => {
                return element !== undefined;
             });
             state.value = data

        }else if (action.payload.from != -1 && action.payload.to == -1){

            let data = initialStateValue.map(e => {
                let date = new Date(e.date)
                let month = date.getMonth()
                if (action.payload.from <= month){
                    return e
                }
            })
            data = data.filter(( element ) => {
                return element !== undefined;
             });
             state.value = data

        }else{
            state.value = initialStateValue;
        }

    },
  },
});

export const { changeDate } = dataSlice.actions;
export default dataSlice.reducer;