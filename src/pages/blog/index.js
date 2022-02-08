import React from "react";
import {graphql,Link} from "gatsby";
import Layout from "../../components/layout";

const BlogPage = ({data}) => {
  return (
      <Layout pageTitle="Blog">
        <h1>Blog</h1>
        <ul>
          {
            data.allMdx.nodes.map(node => (
                <li key={node.id}>
                  <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
                </li>
            ))
          }
        </ul>
      </Layout>
  )
}

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        date(formatString: "MM-DD-YYYY")
      }
      id
      slug
    }
  }
}
`

export default BlogPage;