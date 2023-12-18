import { useState } from 'react';

function List() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Toto', avatar: 'https://i.pravatar.cc/150?u=Toto' },
    { id: 2, name: 'Titi', avatar: 'https://i.pravatar.cc/150?u=Titi' },
    { id: 3, name: 'Tata', avatar: 'https://i.pravatar.cc/150?u=Tata' },
  ]);

  const addUser = () => {
    let newUser = { id: 4, name: 'Fiorella', avatar: 'https://i.pravatar.cc/150?u=Tata' };
    setUsers([ ...users, newUser ]); // On fait une copie du tableau
    console.log(users);
  }

  return (
    <>
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <h2>{user.name}</h2>
          </li>
        )}
      </ul>
      <button onClick={addUser}>Ajouter</button>
    </>
  );
}

export default List
