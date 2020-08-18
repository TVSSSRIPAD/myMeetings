import React , {useContext, useState, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalState';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
const AddMeeting = (props) => {
    const {addMeet} = useContext(GlobalContext);
    useEffect(()=>{
        // getTransactions();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    } ,[]);
    const [date,setDate] = useState('');
    const [startTime,setStart] = useState('');
    const [endTime,setEnd] = useState('');
    const [desc,setDesc] = useState('');
    const handleBack  = () => {
        props.history.push('/');
    }
    return (
        <div>
            <Button onClick={() => handleBack()}>Back</Button>
            Date : <input type="date" id="birthday" name="birthday" onChange={(e) => setDate(e.target.value)}></input>
            Start Time : <input type="text" placeholder="start-time" onChange={(e) => setStart(e.target.value)}></input>
            End Time : <input type="text" placeholder="end-time" onChange={(e) => setEnd(e.target.value)}></input><br/>
            Description  <input type="text" placeholder="Desc" onChange={(e) => setDesc(e.target.value)}></input>
            <button onClick={() => addMeet(date,startTime,endTime,desc )}>Save</button>
        </div>
    );
}

export default AddMeeting;