// next
import type { AppProps } from 'next/app';
import { useState } from 'react';

// react-query
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 60,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <Hydrate state={pageProps.dehydratedState}>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
