import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { PropsWithChildren } from 'react';

const GRAPHQL_ENDPOINT = 'http://localhost:8080/graphql';

const ServerApolloProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const client = new ApolloClient({
    uri: GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ServerApolloProvider;
