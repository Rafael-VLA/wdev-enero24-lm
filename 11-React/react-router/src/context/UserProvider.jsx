import { useEffect, useState } from "react";
import { UserContext } from "./UserContext"

// Trae los usuarios de mi endpoint
const getUsers = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
  
    return data;
}

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [userSelected, setUserSelected] = useState(null)

    const handleSelected = (id) => {
        const user = users.find(user => user.id === id)
        setUserSelected(user)
    }

    useEffect(() => {
        getUsers().then((users) => {
            setUsers(users)
        })
    }, [])

  return (
    <UserContext.Provider value={{
        users,
        userSelected,
        handleSelected
    }}>
        { children }
    </UserContext.Provider>    
  )
}
