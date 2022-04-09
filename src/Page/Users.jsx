import React, { Component, setState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import UsersLoder from './UsersLoder'


export default class Users extends Component {

  state = {
   users: [], 
   isloader: true
  }
  
    async componentDidMount(){
      const respanse = await axios.get('https://reqres.in/api/users')
         this.setState({users: respanse.data.data, isloader: false})
      // this time out 
      // setTimeout(() => {
      //   this.setState({users: respanse.data.data, isloader: false})

      // }, 1000);
    }
  // componentDidMount(){
  //   axios.get('https://reqres.in/api/users')
  //   .then(res => {
  //     const users = res.data.data
  //     this.setState({users})
  //   })
  // }
  render() {

    const isloader = this.state.isloader
    return (
      <div>
        { 
          isloader ? (<div className="row"><UsersLoder /></div>) :(
            <div className="container mt-4">
              <div className="row">
              {
                this.state.users.map((user)=>{
                  return(
                      <div className='col-4'> 
                        <img  className='rounded-circle' src={user.avatar} alt="avatar" />
                        <p className='m-2'> {user.first_name}{user.last_name}</p>
                        <span className='m-2'>id: {user.id}</span>
                        <span className='m-2'>id: {user.email}</span>
                          <div className='col-12'>


                          {/* //button for a users show */}
                          <Link to={`users/${user.id}`}>
                            <button className='btn btn-sm btn-warning m-2'>show</button>
                          </Link>

                           <button onClick={() =>{this.hendelGreate(user)}} className='btn btn-sm btn-danger m-2'>Greate</button>
                          </div>
                         
                      </div>
                  )
                })
              }
            </div>
            </div>
          )
          
        }         
        
      </div>
    )
  }
   
  hendelGreate = () => {
    console.log('handelGreate');
  }
  hendelDelete = (user) => {
    console.log(user);
  }
  hendelUpdate = (user) => {
    console.log(user);
  }
 
}

{/* <button onClick={this.handleCreate} className='btn btn-primary btn-sm m-4'>Update</button>
        <div className="row"></div> */}
