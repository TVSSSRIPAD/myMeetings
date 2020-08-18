import React , {useState, useEffect} from 'react'
const Meeting = ({meeting}) => {
    const [pers, setPers] = useState('');
    useEffect(() => {
        var users = ''; 
        for(var i of meeting.participants){
            users+= ` ${i} `
        }
        setPers(users)
    }, [meeting])
    // participants = 
    return (
        <div>
            <li className="list-item">
            {/* start_time: 12:30,
            //     end_time: 13:00,
            //     description: "development team of XYZ project: brainstorming session",
            //     participants: ["Sahil Arora", "Neha"] */}
                Meeting from {meeting.start_time} to {meeting.end_time} on {meeting.description} with {pers}
            </li>
        </div>
    );
}
 
export default Meeting;