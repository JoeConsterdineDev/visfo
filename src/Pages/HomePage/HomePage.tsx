import React, { useEffect } from 'react';
import { useStateContext } from '../../Providers';
import FetchUsers from '../../Dispatchers';

const HomePage = () => {
  const { dispatch, state } = useStateContext();
  const { users } = state;

  useEffect(() => {
    if (users === null) FetchUsers(dispatch);
  }, [users]);

  return (
    <p>Hello World</p>
  )
};

export default HomePage;
