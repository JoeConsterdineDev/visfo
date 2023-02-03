import React, { useEffect, useState } from 'react';
import { useStateContext } from '../../Providers';
import FetchUsers from '../../Dispatchers';
import Users from '../../Components/Users';
import Input from '../../Components/Input';

const HomePage = () => {
  const { dispatch, state } = useStateContext();
  const { users } = state;
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (users === null) FetchUsers(dispatch);
  }, [users]);

  const setInputValue = (value: string) => {
    setValue(value);
  }

  const resetFilters = () => {
    setValue('');
  }

  return (
    <div className="container">
      <Input
        setInputValue={setInputValue}
        resetFilters={resetFilters}
      />
      <Users  
        users={users}
        value={value}
      />
    </div>
  )
};

export default HomePage;
