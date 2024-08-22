import { useEffect, useReducer } from "react";
import { UserContext } from "./UserContext";
import { getUsers } from "../services/usersService";
import { userReducer } from "./userReducer";
import { userTypes } from "./userTypes";

const initialState = {
    users: [],
    userSelected: null,
}

export const UserProvider = ({ children }) => {
    // const [users, setUsers] = useState([]);
    // const [userSelected, setUserSelected] = useState(null);

    const [state, dispatch] = useReducer(userReducer, { ...initialState });

    const handleSelected = (id) => {
        dispatch({
            type: userTypes.SELECCIONAR_USUARIO,
            payload: {
                id
            }
        })
        // const user = users.find(user => user.id === id);
        // setUserSelected(user);
    }

    useEffect(() => {
        getUsers().then((users) => {
            //setUsers(users);
            dispatch({
                type: userTypes.AGREGAR_USUARIO,
                payload: {
                  users // users: users
                }
            });
        });
    }, [])

  return (
    <UserContext.Provider value={{
        ...state,
        handleSelected
    }}>
        { children }
    </UserContext.Provider>    
  )
}
