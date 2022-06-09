import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { GetPostByIdQuery, useGetPostByIdQuery } from '../../generated/graphql';
import graphqlRequestClient from '../../lib/client/graphqlRequestClient';

const DetailPage: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  const { data, error, isLoading } = useGetPostByIdQuery<
    GetPostByIdQuery,
    Error
  >(graphqlRequestClient, {
    postId: pid as string,
  });

  if (error) return <div>{error.message}</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <div>{data?.post?.id}</div>
      <div>{data?.post?.title}</div>
      <div>{data?.post?.body}</div>
      <div>
        {data?.post?.comments?.map(comment => {
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
};

export default DetailPage;
