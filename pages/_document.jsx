import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang='en'>
      <Head title='BukSU IMD DMS'>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png?v=2'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png?v=2'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png?v=2'
        />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='mask-icon'
          href='/safari-pinned-tab.svg?v=2'
          color='#152033'
        />
        <link rel='shortcut icon' href='/favicon.ico?v=2' />
        <meta name='apple-mobile-web-app-title' content='BukSU IMD DMS' />
        <meta name='application-name' content='BukSU IMD DMS' />
        <meta name='msapplication-TileColor' content='#f2c050' />
        <meta name='theme-color' content='#ffffff' />

        {/* OpenGraph */}
        <meta property='og:url' content={process.env.NEXT_PUBLIC_HOST_URL} />
        <meta property='og:title' content='BukSU IMD DMS' />
        <meta
          property='og:description'
          content='The official Document Management System of the Center for Innovative Teaching and Learning.'
        />
        <meta property='og:image' content='/og_image.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
