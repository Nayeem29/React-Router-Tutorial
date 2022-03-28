import React, { useEffect, useState } from 'react';
import SingleFrd from './SingleFriend/SingleFrd';

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setFriends(data));
  }, []);
  return (
    <div>
      <h1>This is Friends page</h1>
      {
        friends.map(friend => <SingleFrd key={friend.id} friend={friend}></SingleFrd>)
      }
    </div>
  );
};

export default Friends;