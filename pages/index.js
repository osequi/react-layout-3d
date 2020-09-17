import Head from "next/head";

import Layout from "../src/components/Layout";

const Home = () => {
  return (
    <Layout>
      <article>
        <h3>Article</h3>
        <p>Article body</p>
      </article>

      <article>
        <h3>Article2</h3>
        <p>Article2 body</p>
      </article>
    </Layout>
  );
};

export default Home;
