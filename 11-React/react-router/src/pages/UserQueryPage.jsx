
import { useParams, useNavigate } from 'react-router-dom'
// import { useUserContext } from '../hooks/useUserContext';
import { useEffect, useState } from 'react';
import { getUserById } from '../services/usersService';

export const UserQueryPage = () => {

  const [user, setUser] = useState(null)

  const { userId } = useParams();
  const navigate = useNavigate();
  //const { users } = useUserContext();

  
  useEffect(() => {
    //if(users.length === 0) return;
    //const currentUser = users.find(e => e.id.toString() === userId) || null;

    getUserById(userId).then(user => {
        setUser(user)
    }).catch((err) => {
      console.log(err);
      navigate("*")
    })
    
  }, [userId, navigate])

  if(user === null){
    return null;
  }

  return (
    <div>
      <h1>Usuario address</h1>
      <pre>{ JSON.stringify(user.address) }</pre>
    </div>
  )
}
