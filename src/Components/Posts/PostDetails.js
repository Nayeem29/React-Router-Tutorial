import React from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
  const { postId } = useParams();
  console.log(postId);
  return (
    <div>
      <p>This is post for id: {postId}</p>
    </div>
  );
};

export default PostDetails;