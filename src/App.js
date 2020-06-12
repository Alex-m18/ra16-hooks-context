import React, { useState } from 'react';
import List from './components/List/List';
import './App.css';
import useJsonFetch from './hooks/useJsonFetch';
import Details from './components/Details/Details';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUserID, setSelectedUserID] = useState(null);

  const [{ data, loading }] = useJsonFetch(`${process.env.REACT_APP_USERS_URL}/users.json`);
  if (data && (JSON.stringify(users) !== JSON.stringify(data))) setUsers(data);

  return (
    <div className='App'>
      { loading && <div>{'Loading...'}</div> }
      <List
        items={users}
        selected={selectedUserID}
        onClick={(id) => setSelectedUserID(id)}
      />
      { selectedUserID && <Details info={users.find((o) => o.id === selectedUserID)}/> }
    </div>
  );
}

export default App;
