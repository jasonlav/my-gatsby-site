import React from "react";
import {Link} from "gatsby";
import Layout from "../components/layout";
import '../components/styles.scss';
import {StaticImage} from 'gatsby-plugin-image';

const About = () => {
  return (
      <Layout pageTitle="About">
          <h1>About</h1>
          Go to <Link to="/">Home</Link> page
          <StaticImage
              alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
              src="../images/clifford.jpg"
              sizes={[50, 100]}
          />
        </Layout>
  )
}

export default About;