import React, { useState, useEffect } from 'react';
import './MeetingItem.css';
const Meeting = ({ meeting }) => {
    const [pers, setPers] = useState('');
    useEffect(() => {
        var users = '';
        for (var i of meeting.participants) {
            users += ` ${i} `;
        }
        setPers(users);
    }, []);
    // participants = 
    return (
        <div>
            <div className="meet-item">
                {/* start_time: 12:30,
            //     end_time: 13:00,
            //     description: "development team of XYZ project: brainstorming session",
            //     participants: ["Sahil Arora", "Neha"] */}
                <div className="meet-time">{meeting.start_time} - {meeting.end_time}</div>
                <div className="meet-desc">{meeting.description} with {pers}</div>
            </div>
        </div>
    );
};

export default Meeting;