import { useState } from "react";

const Team = () => {
    const teamStyle = {
        border: '2px solid red',
        margin: '10px',
        padding: '10px',
        borderRadius: '15px'
    }

    const [team, setTeam] = useState(11)

    const add = () =>{
        setTeam(team + 1)
    }

    const Remove = () =>{
        setTeam(team - 1)
    }
    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button className="team" onClick={add}>Add</button>
            <button className="team" onClick={Remove}>Remove</button>
        </div>
    );
};

export default Team;