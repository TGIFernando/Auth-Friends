import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../Utility/axiosWithAuth'
import { useHistory } from 'react-router-dom'


const initalValues = {
    name: '',
    age: '',
    email:''
}

const AddFriend = () => {
    const [formValues, setFormValues] = useState(initalValues)
    const [friendsList, setFriendsList] = useState([])

    const history = useHistory()

    useEffect(()=>{
        axiosWithAuth().get('/friends')
            .then(res => {
                setFriendsList(res.data)
            })
    },[])

    const onChange = e => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
        console.log(formValues)
    }

    const onSubmit = e => {
        e.preventDefault()
        axiosWithAuth().post('/friends', {...formValues, id: friendsList.length+1})
            .then(res => {
                console.log(res)
                history.push('/friends')
            })
    }
    return (
        <div>
            <h1>Add a friend</h1>
            <form onSubmit={onSubmit}>
                <label>Name: </label>
                <input onChange={onChange} value={formValues.name} name='name' placeholder='name' type='text'/>

                <label>age: </label>
                <input onChange={onChange} value={formValues.age} name='age' placeholder='age' type='text'/>

                <label>email: </label>
                <input onChange={onChange} value={formValues.email} name='email' placeholder='email' type='text'/>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend