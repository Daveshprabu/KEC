import React, { useState } from 'react';

const Greeting = ({ isUserLoggedIn }) => (
  <div>
    {isUserLoggedIn ? (
      <h1>Welcome</h1>
    ) : (
      <h1>Login again</h1>
    )}
  </div>
);

const Hello = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div>
      <Greeting isUserLoggedIn={userLoggedIn} />
      <button onClick={() => setUserLoggedIn(!userLoggedIn)}>
        {userLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Hello;
 

