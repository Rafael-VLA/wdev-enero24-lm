import { User } from "./User"
import { useUserContext } from "../hooks/useUserContext"

export const ListUsers = () => {
    const { users } = useUserContext()

    return (
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
    )
}
