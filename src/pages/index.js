import * as React from "react";
import { Link } from "gatsby";
import { container } from './layout.module.css'

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Zero Page</title>
      <h1>First site with Gatsby!</h1>
      <nav>
        <ul>
          <Link to="/about">About</Link>
          <Link to="/react">React</Link>
        </ul>
      </nav>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
};

export default IndexPage;
