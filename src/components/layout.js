import React from 'react';
import {Link} from 'gatsby';
import {Helmet} from "react-helmet";
import * as Styles from './layout.module.scss';

export default class Layout extends React.Component {
  render() {
    return (
        <div id="site">
          <Helmet>
            <title>{this.props.pageTitle}</title>
          </Helmet>
          <header>
            <nav className={Styles.nav}>
              <ul className={Styles.navItems}>
                <li className={Styles.navItem}><Link to="/">Home</Link></li>
                <li className={Styles.navItem}><Link to="/about">About</Link></li>
              </ul>
            </nav>
          </header>
          <main className={Styles.main}>
            {this.props.children}
          </main>
        </div>
    )
  }
}