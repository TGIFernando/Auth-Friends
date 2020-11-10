
import React, {useState} from 'react';
import { axiosWithAuth } from '../Utility/axiosWithAuth';

const initialFormValues = {
    name: '',
    age: '',
    email: '',
}

const Friend = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [verifying, setVerifying] = useState(false)
    const [styling, setStyling] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        const newName = formValues.name ? formValues.name : props.data.name;
        const newAge = formValues.age ? formValues.age : props.data.age;
        const newEmail = formValues.email ? formValues.email : props.data.email;
        
        let editedObj = {
            name: newName,
            age: newAge,
            email: newEmail,
        }
        axiosWithAuth()
        .put(`/friends/${props.data.id}`, editedObj)
        .then(res=>{
            props.setFriendsList(res.data);
            setStyling(false)
        })
    }

    const deleteFriend = e => {
        if (verifying) {
        console.log(props.data.id)
        axiosWithAuth()
        .delete(`/friends/${props.data.id}`)
        .then(res=>{
            props.setFriendsList(res.data)
            setStyling(false)
        })
    } else {
        return null;
    }
    }

    const handleChange = e => {
        setFormValues({
            ...formValues, 
            [e.target.name]: e.target.value
        })
    }


    return(
        <div>
            <h1>Name: {props.data.name}</h1>
            <h2>Age: {props.data.age}</h2>
            <h2>Email: {props.data.email}</h2>

            {!styling ? <>
            <button onClick={()=>setStyling(true)}>EDIT FRIEND</button>
            <button onClick={()=>{setVerifying(!verifying); deleteFriend()}}>{verifying ? 'ARE YOU SURE?' : 'DELETE FRIEND'}</button> </>: <><button onClick={handleSubmit}>SUBMIT CHANGES</button><button onClick={() => {
                setStyling(false)
            }}>CANCEL</button></>}

            {styling && <form>
                <label htmlFor='name'>CHANGE NAME?
                    <input
                    type='text'
                    name='name'
                    value={formValues.name}
                    onChange={handleChange}
                    />
                </label><br/>
                <label htmlFor='age'>CHANGE AGE?
                    <input
                    type='text'
                    name='age'
                    value={formValues.age}
                    onChange={handleChange}
                    />
                </label><br/>
                <label htmlFor='email'>CHANGE EMAIL?
                    <input
                    type='text'
                    name='email'
                    value={formValues.email}
                    onChange={handleChange}
                    />
                </label>
                </form>}
        </div>
    )
}

export default Friend