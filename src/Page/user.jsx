import React, {useState, useEffect} from 'react';
import axios from 'axios'
const User = (props) => {
    const [user, setuser] = useState({})

    useEffect(async () => {
            const respanse = await axios.get(`https://reqres.in/api/users/${props.match.params.id}`)
            setuser(respanse.data.data)
            
    })
    
    return (
        <div>
            <img  className='rounded-circle' src={user.avatar} alt="avatar" />
            <p className='m-2'> {user.first_name}{user.last_name}</p>
            <span className='m-2'>id: {user.id}</span>
        </div>
    );
}

export default User;
