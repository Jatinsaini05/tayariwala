import Head from "next/head";
import Script from "next/script";

export default function Favicon({ favicon, scripts }) {
  return (
    <>
      {favicon && (
        <Head>
          <meta name="msapplication-square" content={favicon} />
          <link rel="icon" type="image/x-icon" href={favicon} />
          <link rel="apple-touch-icon" href={favicon} />
        </Head>
      )}
      {scripts?.length > 0 &&
        scripts.map(({ innerHTML, ...attributes }, index) => (
          <Script
            strategy="beforeInteractive"
            key={index}
            {...attributes}
            dangerouslySetInnerHTML={
              innerHTML ? { __html: innerHTML } : undefined
            }
          />
        ))}
    </>
  );
}
