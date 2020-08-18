import React , {createContext , useReducer} from 'react';
import AppReducer from './AppReducer'
import axios from 'axios'
//Initial State

const initialState = {
    meetings : [],
    error : null,
    today : 15,
    curr : 15,
    message : '',
    loading : true
} 

//Create Context
export const GlobalContext = createContext(initialState);

//Provider component
export const GlobalProvider = ({children}) => {
    const [state , dispatch] =  useReducer(AppReducer, initialState);
    
    //actions
    async function getMeetings(dayString) {
        var day = state.curr;
        if(dayString === 'next') day = state.curr + 1;
        else if(dayString === 'prev')day = state.curr - 1;
        
        var date = `${day}`
        try{
            
            const res = await axios.get(` https://cors-anywhere.herokuapp.com/http://fathomless-shelf-5846.herokuapp.com/api/schedule?date="${date}/8/2019}"`);
            console.log(res.data);
            dispatch({
                type : 'GET_MEETINGS',
                payload : res.data,
                curr : day
            });
        }catch(err){
            dispatch({
                type : 'ERROR',
                payload : 'Couldn\'t load the data. Try Again!!'
            });
        }
        
    } 
    async function addMeet(day , startTime, endTime, desc){
        // check logic
        console.log(day);
        var date=+(day[8] +day[9]); //get  date
        var meets;
        //get meetings on that date
        try{
            
            const res = await axios.get(` https://cors-anywhere.herokuapp.com/http://fathomless-shelf-5846.herokuapp.com/api/schedule?date="${date}/8/2019}"`);
            // console.log(res.data);
            meets = res.data;
        }catch(err){
            console.log("Error");
        }
        var avail = true;
        for(var m of meets){
        //   console.log(m);
                console.log(m.start_time);
                // console.log(startTime[0]);
               if(((startTime[0] + startTime[1]) === (m.start_time[0] + m.start_time[1])) || ((endTime[0] + endTime[1]) === (m.end_time[0] + m.end_time[1]))){
                   dispatch({
                    type : 'BUSY',
                    payload : 'Slot Not Available',
                    curr : state.curr
                   })
                   avail = false;
               }
        }
        if(avail){
            dispatch({
                type : 'OK',
                payload : 'Slot Available. Meeting Added',
                curr : state.curr
               })
        }

    }
    function clear(){
        dispatch({
            type : 'CLEAR'
        })
    }

    return (<GlobalContext.Provider value={{
        meetings : state.meetings,
        error : state.error,
        curr : state.curr,
        loading : state.loading,
        today : state.today,
        message : state.message,
        getMeetings,
        addMeet,
        clear
    }}>
        {children}
    </GlobalContext.Provider>)

}