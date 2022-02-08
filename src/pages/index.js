import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

export default class IndexPage extends React.Component {
  render() {
    return (
        <Layout pageTitle="Home">
          <h1>Home</h1>
          Go to <Link to="/about">About</Link> page
        </Layout>
    )
  }
}
