import Body from "@/components/Body";
import Layout from "@/components/Layout";
import axios from "axios";
import Head from "next/head";

axios.defaults.baseURL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:8080";
axios.defaults.withCredentials = true;

const Home = () => {
  return (
    <>
      <Head>
        <title>FoodScout</title>
      </Head>
      <Layout>
        <Body />
      </Layout>
    </>
  );
};

export default Home;
