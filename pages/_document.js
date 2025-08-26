import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* AOS CSS */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
          rel="stylesheet"
        />
      </Head>
      <body className="font-[Exo 2
]">
        <Main />
        <NextScript />
        {/* AOS JS */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"
          defer
        ></script>
      </body>
    </Html>
  );
}
