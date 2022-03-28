import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
  const { friendId } = useParams();
  const [friendDetail, setFriendDetail] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setFriendDetail(data));
  }, [friendId]);
  return (
    <div>
      <h2>This is details of friend no:{friendId}</h2>
      <div>
        <h3>{friendDetail.name}</h3>
        <h4>{friendDetail.email}</h4>
        <h4>{friendDetail.address?.city}</h4>
        <h5>{friendDetail.website}</h5>
      </div>
    </div>
  );
};

export default FriendDetail;