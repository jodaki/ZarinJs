import React, { Component, setState} from 'react'
import axios from 'axios'



export default class Users extends Component {

  state = {
   users: [], 
   isloader: true
  }
  
    async componentDidMount(){
      const respanse = await axios.get('https://reqres.in/api/users')
        this.setState({users: respanse.data.data, isloader: false})
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
          isloader ? (<h1 className='text-center display-6 border m-6'>loding..</h1>) :(
            <div className="container mt-4">
              <button onClick={()=>{this.hendelUpdate()}} className='btn btn-primary btn-sm m-4' >Update</button>
              <div className="row">
              {
                this.state.users.map((user)=>{
                  return(
                      <div className='col-4'> 
                        <img  className='rounded-circle' src={user.avatar} alt="avatar" />
                        <p className='m-2'> {user.first_name}{user.last_name}</p>
                        <span className='m-2'>id: {user.id}</span>
                          <div className='col-12'>
                           
                           <button onClick={() =>{this.hendelDelete(user)}} className='btn btn-sm btn-warning m-2'>Delete</button>
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
