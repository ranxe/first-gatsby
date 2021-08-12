import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "./layout";

// markup
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <title>Zero Page</title>
      <h1>First site with Gatsby!</h1>
      <nav>
        <ul>
          <Link to="/about">About</Link>
          <Link to="/material">Material-ui</Link>
        </ul>
      </nav>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="A butterfly named 'WADO NABI'"
        src="../images/gremlin.png"
      />
    </Layout>
  );
};

export default IndexPage;
