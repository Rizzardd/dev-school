import React, { useState } from "react";
import axios from "axios";

function TesteAPI(){
    const [name, setName] = useState(null);
    const [username, setUserName] = useState('');
    
    return (
        <div>
            <input value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
            <button onClick={async () => {
                const busca = await axios.get('https://api.github.com/users/' + username);
                console.log(busca.data);
                setName(busca.data.name);
            }}>buscar</button>
        </div>
    )
}

export default TesteAPI;