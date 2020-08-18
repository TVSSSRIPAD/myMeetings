import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './List.css';
import Meeting from './MeetingItem';
const List = (props) => {
    const { getMeetings, meetings, curr, today } = useContext(GlobalContext);
    useEffect(() => {
        getMeetings('');
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleAdd = () => {
        props.history.push('/addmeeting');
    };
    const prevClick = () => {
        getMeetings('prev');
    };
    const nextClick = () => {
        getMeetings('next');
        // disabled={today > curr}
    };
    return (
        <div className="main">
            <div className="navigator">
                <button className="btn-prev" onClick={() => prevClick()}>Prev
                <i className="fa fa-angle-left" aria-hidden="true"></i>
                </button>
                {curr} Aug 2020
                <button className="btn-next" onClick={() => nextClick()}>Next</button>
            </div>
            {meetings.map(meeting => (
                <Meeting meeting={meeting} key={meeting.start_time + meeting.end_time} />
            ))}

            <button className="btn-add" disabled={today > curr} onClick={() => handleAdd()}>
                Add Meeting
        </button>
        </div>
    );
};

export default List;