import type { NextPage } from 'next';
import { GetAllPostsQuery, useGetAllPostsQuery } from '../generated/graphql';
import graphqlRequestClient from '../lib/client/graphqlRequestClient';

const Home: NextPage = () => {
  const { data, error, isLoading } = useGetAllPostsQuery<
    GetAllPostsQuery,
    Error
  >(graphqlRequestClient, {});

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      {data?.posts?.map(post => {
        return (
          <div key={post?.id}>
            <div>{post?.id}</div>
            <div>{post?.title}</div>
            <div>{post?.body}</div>
            <div>
              {post?.comments?.map(comment => {
                return (
                  <div key={comment?.id}>
                    <div>{comment?.id}</div>
                    <div>{comment?.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
