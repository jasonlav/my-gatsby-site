import React from 'react';
import { Link } from 'gatsby';
import {Helmet} from "react-helmet";

export default class Layout extends React.Component {
  render() {
    return (
        <div id="site">
          <Helmet>
            <title>{this.props.pageTitle}</title>
          </Helmet>
          <header>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
          </header>
          <main>
            {this.props.children}
          </main>
        </div>
    )
  }
}