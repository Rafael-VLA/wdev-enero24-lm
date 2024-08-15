
// import { Fragment } from 'react'
// import { users } from "../data/users"
// import { Card } from "./Card";
import { useEffect } from "react";
import { User } from "./User";
import { useState } from "react";
import { Loader } from "./Loader";

const getUsers = async() => {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())

  return users;
}

export const ListUsers = () => {
  const [isLoading, setIsLoading] = useState(true)

  const [users, setUsers] = useState([]) 
  
  useEffect(() => {
    getUsers().then(data => {
      setUsers(data)
      setIsLoading(false)
    })
  })

  return (
    <>
      <h2 className="mb-2 text-2xl font-semibold text-gray-900">Usuarios</h2>

      <ul className="space-y-1 text-gray-500 list-disc list-inside">
          {
            isLoading && (
              <div className="flex justify-center w-full">
                <Loader />
              </div>
            )
          }

          {
           (isLoading === false) && users.map((user) => {

            return (
              <User name={user.name} email={user.email} key={user.id} />
            )
            
           }) 
          }

          {/* <li>
              At least 10 characters (and up to 100 characters)
          </li>
          <li>
              At least one lowercase character
          </li>
          <li>
              Inclusion of at least one special character, e.g., ! @ # ?
          </li> */}
      </ul>
    </>
  )
}
