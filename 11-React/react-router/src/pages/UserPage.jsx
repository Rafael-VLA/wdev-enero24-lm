import { Fragment } from "react"
import { useUserContext } from "../hooks/useUserContext"
import { UserSelected } from "../components/UserSelected"

export const UserPage = () => {

  const { userSelected } = useUserContext()

  return (
    <Fragment>
      <h1>Usuario seleccionado</h1>
      {
        userSelected !== null && (
          <UserSelected username={userSelected.username} email={userSelected.email} />
        )
      }
    </Fragment>
  )
}
