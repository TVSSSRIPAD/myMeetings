import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';
import './AddMeeting.css';
const AddMeeting = (props) => {
    const { addMeet, message } = useContext(GlobalContext);
    useEffect(() => {
        // getTransactions();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const [date, setDate] = useState('');
    const [startTime, setStart] = useState('');
    const [endTime, setEnd] = useState('');
    const [desc, setDesc] = useState('');
    const handleBack = () => {
        props.history.push('/');
    };
    return (
        <div>
            <div className="navbar">
                BRAND / Add Meeting
            </div>
            <Alert key={message} variant="primary" style={{"display"  : message ? "block" : "none"}}>{message}</Alert>
            <button className="btn-back-to-meet" onClick={() => handleBack()}>Back</button>
            <div className="add-meet-form">
                <div className="add-meet-date">
                    <input type="date" id="birthday" name="birthday" onChange={(e) => setDate(e.target.value)}></input>
                </div>
                <div className="add-meet-time">
                    <div>
                        <input type="text" placeholder="start-time" onChange={(e) => setStart(e.target.value)}></input>
                    </div>
                    <div>
                        <input type="text" placeholder="end-time" onChange={(e) => setEnd(e.target.value)}></input><br />
                    </div>
                </div>
                <div className="add-meet-desc">
                    <input type="textarea" placeholder="Desc" onChange={(e) => setDesc(e.target.value)}></input>
                </div>
            </div>
            <button className="btn-save-meet" onClick={() => addMeet(date, startTime, endTime, desc)} >Save</button>
        </div>
    );
};

export default AddMeeting;