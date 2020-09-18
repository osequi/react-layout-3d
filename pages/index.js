import Head from "next/head";

import Layout from "../src/components/Layout";

const Article = (
  <article style={{ border: "1px solid" }}>
    <h3>Article</h3>
    <p>Article body</p>
  </article>
);

const Home = () => {
  return (
    <>
      <Layout dimension={2} columns="1fr 1fr" rows="1fr 1fr" spacing="gutter">
        {Article}
        {Article}
        {Article}
        {Article}
      </Layout>
      {/*
		  <Layout>
  <article>
	<h3>Article</h3>
	<p>Article body</p>
  </article>
</Layout>
*/}
    </>
  );
};

export default Home;
