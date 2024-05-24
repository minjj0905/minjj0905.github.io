import React, { PropsWithChildren } from 'react';

const PostCard: React.FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default PostCard;
