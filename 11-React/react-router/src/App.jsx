
import { ListUsers } from "./components/ListUsers";
import { UserSelected } from "./components/UserSelected";
import { UserContext } from "./context/UserContext";
import { UserProvider } from "./context/UserProvider";


function App() {

  return (
    <UserProvider>

      <UserContext.Consumer>
        {
          ({ userSelected }) => (
            <div className="p-8">
              <div className="flex gap-4">
                <ListUsers />

                {
                  userSelected !== null && (
                    <UserSelected username={userSelected.username} email={userSelected.email} />
                  )
                }
              </div>
          </div>
          )
        }
      </UserContext.Consumer>

      
   </UserProvider>
  )
}

export default App
