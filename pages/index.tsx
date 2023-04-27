import Body from "@/components/Body";
import Layout from "@/components/Layout";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>FoodScout</title>
        <link
          href="https://fonts.googleapis.com/css?family=Sarabun"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
        <Body />
      </Layout>
    </>
  );
};

export default Home;
