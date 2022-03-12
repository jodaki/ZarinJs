import React, { Component, setState} from 'react'
import axios from 'axios'
export default class Users extends Component {

  state = {
   users: []
  }
  // async componentDidMount(){
  //   const respanse = await axios.get('https://reqres.in/api/users')
  //   console.log(respanse);
  //   this.setState({users: respanse.data.data})

  // }
  componentDidMount(){
    axios.get('https://reqres.in/api/users')
    .then(res => {
      const users = res.data.data
      this.setState({users})
    })
  }
  render() {
    return (
      <>
        <button onClick={this.handleCreate} className='btn btn-primary btn-sm m-4'>Update</button>
        <div className="row">
        {
          this.state.users.map((user)=>{
            return(
              <div className='col-4'> 
                <img  className='rounded-circle' src={user.avatar} alt="avatar" />
                <p>Name: {user.first_name}{user.last_name}</p>
                <span>id: {user.id}</span>
                
              </div>
            )
          })


        }            
        </div>
      </>
    )
  }
 
}


