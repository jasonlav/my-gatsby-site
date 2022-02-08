import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import {Helmet} from "react-helmet";

export default class About extends React.Component {
  render() {
    return (
        <Layout pageTitle="About">
          <h1>About</h1>
          Go to <Link to="/">Home</Link> page
        </Layout>
    )
  }
}