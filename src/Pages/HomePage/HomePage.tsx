import React, { useEffect } from 'react';
import { useStateContext } from '../../Providers';
import FetchUsers from '../../Dispatchers';
import Users from '../../Components/Users';

const HomePage = () => {
  const { dispatch, state } = useStateContext();
  const { users } = state;

  useEffect(() => {
    if (users === null) FetchUsers(dispatch);
  }, [users]);

  return (
    <div className="container">
      <Users  
        users={users}
      />
    </div>
  )
};

export default HomePage;
