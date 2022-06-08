import type { NextPage } from 'next';
import { usePostsQuery } from '../../generated';

const Home: NextPage = () => {
  const { data, loading, error } = usePostsQuery();
  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  return <div>{JSON.stringify(data)}</div>;
};

export default Home;
