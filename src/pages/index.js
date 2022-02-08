import React from "react";
import {Link} from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
      <Layout pageTitle="Home">
        <h1>Home</h1>
        Go to <Link to="/about">About</Link> page
      </Layout>
  )
}

export default IndexPage;