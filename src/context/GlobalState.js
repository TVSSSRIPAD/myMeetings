import React , {createContext , useReducer} from 'react';
import AppReducer from './AppReducer'
import axios from 'axios'
//Initial State

const initialState = {
    meetings : [],
    error : null,
    today : 17,
    curr : 17,
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
        else day = state.curr - 1;
        
        var date = `${day}`
        try{
            
            const res = await axios.get(` https://cors-anywhere.herokuapp.com/http://fathomless-shelf-5846.herokuapp.com/api/schedule?date="${date}/8/2019}"`);
            // Sample : {
            //     start_time: 12:30,
            //     end_time: 13:00,
            //     description: "development team of XYZ project: brainstorming session",
            //     participants: ["Sahil Arora", "Neha"]
            // }
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
    }


    return (<GlobalContext.Provider value={{
        meetings : state.meetings,
        error : state.error,
        curr : state.curr,
        loading : state.loading,
        today : state.today,
        getMeetings,
        addMeet
    }}>
        {children}
    </GlobalContext.Provider>)

}