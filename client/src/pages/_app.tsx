import type { AppProps } from 'next/app';
import ServerApolloProvider from '../graphql/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ServerApolloProvider>
      <Component {...pageProps} />
    </ServerApolloProvider>
  );
}

export default MyApp;
