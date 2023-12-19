import { useState } from 'react';

function List() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Toto', avatar: 'https://i.pravatar.cc/150?u=Toto' },
    { id: 2, name: 'Titi', avatar: 'https://i.pravatar.cc/150?u=Titi' },
    { id: 3, name: 'Tata', avatar: 'https://i.pravatar.cc/150?u=Tata' },
  ]);
  const [newName, setNewName] = useState('');
  const [editing, setEditing] = useState(null);

  const addUser = () => {
    let newUser = { id: (users[users.length - 1]?.id ?? 0) + 1, name: newName, avatar: 'https://i.pravatar.cc/150?u=Tata' };
    setUsers([ ...users, newUser ]); // On fait une copie du tableau
    setNewName('');
    console.log(users);
  }

  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  }

  const editUser = () => {
    /* setUsers(users.map(user => {
      if (user.id === editing.id) {
        return editing;
      }

      return user;
    })) */

    setUsers(users.map(user => user.id === editing.id ? editing : user))
    setEditing(null)
  }

  return (
    <>
      <h2>Utilisateurs ({users.length})</h2>
      {editing &&
        <>
          On édite {JSON.stringify(editing)}
          <input type="text" value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} />
          <button onClick={editUser}>Modifier</button>
        </>
      }
      <ul>
        {users.map(user =>
          <li key={user.id}>
            <h2 onClick={() => setEditing(user)}>{user.name} ({user.id})</h2>
            <button onClick={() => deleteUser(user.id)}>❌</button>
          </li>
        )}
      </ul>
      <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} />
      <button onClick={addUser} disabled={newName.length === 0}>Ajouter</button>
    </>
  );
}

export default List
