import axios from 'axios'
import React, { Component, createRef } from 'react'

export default class Login extends Component {

  email = createRef()
  password = createRef()

  HendelSubmit = async(e) => {
    e.preventDefault()
    console.log('email',this.email.current.value);
    console.log('pasword',this.password.current.value);
      const regster ={ 
        email: this.email.current.value, 
        password: this.password.current.value
        }
        if( regster.email && regster.password){
          const responsive =  await axios.post('https://reqres.in/api/login', regster)
          console.log(responsive)
        }
      
    }
  



  render() {
    return (
      <div className='container mt-4'>
          <form onSubmit={this.HendelSubmit}>
            <label htmlFor="email">email</label>
            <br/>
            <input id='email' ref={this.email} type="text" placeholder='email' />
            <br/>
            <label htmlFor="password">password</label>
            <br/>
            <input id='password' ref={this.password} type="password" placeholder='password' />
            <br/>
            <button type='submit'>submit</button>
          </form>
      </div>
    )
  }
}


