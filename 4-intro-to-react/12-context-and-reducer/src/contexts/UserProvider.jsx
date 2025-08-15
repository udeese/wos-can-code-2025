import { useState } from 'react';
import { createContext } from 'react';

const UserContext = createContext({ username: '' });

function UserProvider({ children }) {
  const [user, setUser] = useState({ username: 'Kermit the Frog' });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export { UserContext };
export default UserProvider;
