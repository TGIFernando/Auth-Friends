import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../Utility/axiosWithAuth'
import { Link } from 'react-router-dom'

import Friend from './Friend'

const FriendsList = () => {
    const [friendsList, setFriendsList] = useState([])

    useEffect(()=>{
        axiosWithAuth().get('/friends')
            .then(res => {
                setFriendsList(res.data)
            }).catch(err => {
                console.log("Error: ", err)
            })
    },[])

    return(
        <div>
            <Link to='/addfriend'>Add Friend</Link>
            {friendsList.reverse().map(friend => <Friend key={friend.id} data={friend} setFriendsList={setFriendsList}/>)}
        </div>
    )
}

export default FriendsList