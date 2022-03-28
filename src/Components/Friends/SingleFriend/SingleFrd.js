import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const SingleFrd = ({ friend }) => {
  let navigate = useNavigate();
  const { name, username, id } = friend;

  const showFriendDetail = () => {
    navigate(`/friend/${id}`);
  }
  return (
    <div>
      <h1>Name:{name}</h1>
      <Link to={'/friend/' + id}>Details</Link>
      <br />
      <button onClick={showFriendDetail}>UserID: {username}{id}</button>
    </div>
  );
};

export default SingleFrd;