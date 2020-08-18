import React , {useContext,useEffect} from 'react';
import {GlobalContext} from '../context/GlobalState';
import Meeting from './MeetingItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
const List = (props) => {
    const {getMeetings, meetings, curr, today} = useContext(GlobalContext);
    useEffect(()=>{
        getMeetings('');
        //eslint-disable-next-line react-hooks/exhaustive-deps
    } ,[]);
    const handleAdd = () => {
        props.history.push('/addmeeting');
    }
    const prevClick = () => {
        getMeetings('prev')
    }
    const nextClick = () => {
        getMeetings('next');
        // disabled={today > curr}
    }
    return (
        <div>
        <button onClick={() => prevClick()} >Prev</button> {curr}/08/2020
        <button onClick={() => nextClick()}>Next</button>
            {meetings.map(meeting => (
                <Meeting meeting = {meeting} key={meeting.start_time + meeting.end_time} />
            ))}

        <Button className="button" disabled={today > curr} onClick={() => handleAdd()}>
            Add Meeting
        </Button>
        </div>
    );
}
 
export default List;