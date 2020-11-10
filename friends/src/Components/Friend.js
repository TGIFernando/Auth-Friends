
import React, {useState, useEffect} from 'react';
import {useParams, useRouteMatch, useHistory} from 'react-router-dom';
import { axiosWithAuth } from '../Utility/axiosWithAuth';

const initialFormValues = {
    name: '',
    age: '',
    email: '',
}

const Friend = (props) => {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [verify, setVerify] = useState(false)

    const history = useHistory()


    return(
        <div>
            <h1>Name: {props.data.name}</h1>
            <h2>Age: {props.data.age}</h2>
            <h2>Email: {props.data.email}</h2>
        </div>
    )
}

export default Friend