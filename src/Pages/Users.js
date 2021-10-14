import axios from 'axios'
import React,{useState, useEffect} from 'react'

const Users = () => {

    const [user, setUser] = useState([])
    const[mode, setMode] = useState("online")

    useEffect(()=>{
        getData()
    },[])

    
    const getData = ()=>{

        axios.get("http://jsonplaceholder.typicode.com/users").then((response)=>{

        
        setUser(response.data)

        localStorage.setItem("users", JSON.stringify(response.data))


        }).catch((error)=>{

            setUser(JSON.parse(localStorage.getItem("users")))

            setMode("offline")


        })
    }


    return (
        <>

        

<table class="table" style={{margin:"70px 40px"}}>


  <thead>
  <div>
            {mode === "offline" ? <p>You are offline</p> : null }
            
        </div>
    <tr>
      <th scope="col">Sr.No.</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
  {
      user.map((item, index)=>{
          return(
            <tr>
      <th scope="row">{item.id}</th>
      <td>{item.name}</td>
      <td>{item.username}</td>
      <td>{item.email}</td>
    </tr>
          )
      })
  }
    
   
  </tbody>
</table>
            
        </>
    )
}

export default Users
