import Head from "next/head";

const PageHead = (props) => {
  const { title = "Guava Disease" } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/guava.png" type="image/x-icon" />
    </Head>
  );
};
export default PageHead;
