import { Post } from '@/types';
import React, { PropsWithChildren } from 'react';

type PostCardProps = PropsWithChildren<{
  post: Post;
}>;

const PostCard: React.FC<PostCardProps> = ({ children, post }) => {
  console.log(post);

  return <div>{children}</div>;
};

export default PostCard;
