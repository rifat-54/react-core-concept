import { useState } from "react"

export default function Team(){

    const [team,setTeam]=useState(11);
    const teamStyle={
        margin:'10px',
        border:'2px solid yellow',
        padding:'10px'

    }

    const addTeam=()=>{
        const newteam=team+1;
        setTeam(newteam);
    }
    const removeTeam=()=>{
        setTeam(team-1);
    }

    return(
        <div style={teamStyle}>
            <h3>Team : {team}</h3>
            <button onClick={addTeam}>add</button>
            <button onClick={removeTeam}>Remove</button>
        </div>
    )
}