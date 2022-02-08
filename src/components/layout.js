import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import {Helmet} from "react-helmet";
import * as Styles from './layout.module.scss';

const Layout = ({pageTitle, children}) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        id
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
      <div id="site">
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <header>
          <div>{data.site.siteMetadata.title}</div>
          <nav className={Styles.nav}>
            <ul className={Styles.navItems}>
              <li className={Styles.navItem}><Link to="/">Home</Link></li>
              <li className={Styles.navItem}><Link to="/about">About</Link></li>
              <li className={Styles.navItem}><Link to="/blog">Blog</Link></li>
            </ul>
          </nav>
        </header>
        <main className={Styles.main}>
          {children}
        </main>
      </div>
  )
}

export default Layout;