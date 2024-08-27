import { User } from "./User"
import { useUserContext } from "../hooks/useUserContext"
import { Fragment } from "react"
import { toast } from 'sonner'

export const ListUsers = () => {
    const { users } = useUserContext()

    const handleClick = () => {
        toast.message('Número de usuarios', {
            description:`El número de usuarios es ${users.length}`,
        })
    }

    return (
        <Fragment>

            <button onClick={handleClick}>Número de usuarios</button>

            <ul className="flex flex-col gap-3">
                {
                    users.map(user => (
                        <User 
                            name={user.name} 
                            email={user.email} 
                            id={user.id} 
                            key={user.id}
                        />
                    ))
                }
            </ul>

        </Fragment>
    )
}
