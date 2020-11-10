import React, { Component }  from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

class Login extends Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }

    onChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
        console.log(this.state.credentials)
      };

    onSubmit = e => {
    e.preventDefault();
    // const history = useHistory()
    axios.post('http://localhost:5000/api/login', this.state.credentials)
    .then(req => {
        console.log(req.data)
        localStorage.setItem("token", req.data.payload);
        // history.push('/friends')
    })
    .catch( err => {
        console.log(err)
    });
    };

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' value={this.state.credentials.username} name='username' onChange={this.onChange} placeholder='username'/>
                    <input type='text' value={this.state.credentials.password} name='password' onChange={this.onChange} placeholder='password'/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login