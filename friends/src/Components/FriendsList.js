import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../Utility/axiosWithAuth'

const FriendsList = () => {
    const [friendsList, setFriendsList] = useState([])
    useEffect(()=>{
        axiosWithAuth().get('/friends')
            .then(res => {
                console.log('FriendsList: ', res)
            }).catch(err => {
                console.log("Error: ", err)
            })
    },[])

    return(
        <div>Hello from FriendsList</div>
    )
}

export default FriendsList