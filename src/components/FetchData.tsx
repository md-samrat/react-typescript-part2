import { useEffect, useState } from "react"
import type { User } from "../type/user"
import { fetchUser } from "../services/userService"

function FetchData() {
    const [users,setUsers] = useState<User[]>([])
    
    useEffect(()=>{
        const loadUser = async() =>{
            try {
                const response = await fetchUser();
                setUsers(response.data)
            } catch (error) {
                console.log(error)
            }
        } 
        loadUser()
    },[])
  return (
    <div>
        <h1>Users</h1>
        <div>
            {
                users.map((user)=><div key={user.id}>{user.name}</div>)
            }
        </div>
    </div>
  )
}

export default FetchData