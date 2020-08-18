import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './List.css';
import Meeting from './MeetingItem';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
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
            <div className="navbar">
                BRAND / Meetings
            </div>
            <div className="navigator">
                <button className="btn-prev" onClick={() => prevClick()}>
                    <i className="fa fa-angle-left" aria-hidden="true"></i>
                </button>
                <div className="navigator-date">
                    {curr} Aug 2020
                </div>
                <button className="btn-next" onClick={() => nextClick()}>
                    <i className="fa fa-angle-right" aria-hidden="true"></i>
                </button>
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