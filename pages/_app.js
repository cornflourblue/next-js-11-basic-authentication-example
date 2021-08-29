import Head from 'next/head';

import 'styles/globals.css';
import { Nav, RouteGuard } from 'components';

export default App;

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Next.js 11 - Basic HTTP Authentication Example</title>

                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            </Head>

            <div className="app-container bg-light">
                <Nav />
                <div className="container pt-4 pb-4">
                    <RouteGuard>
                        <Component {...pageProps} />
                    </RouteGuard>
                </div>
            </div>

            {/* credits */}
            <div className="text-center mt-4">
                <p>
                    <a href="https://jasonwatmore.com/post/2021/08/29/next-js-basic-http-authentication-tutorial-with-example-app" target="_top">Next.js 11 - Basic Authentication Tutorial with Example App</a>
                </p>
                <p>
                    <a href="https://jasonwatmore.com" target="_top">JasonWatmore.com</a>
                </p>
            </div>
        </>
    );
}
