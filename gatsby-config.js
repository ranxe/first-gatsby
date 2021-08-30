module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Zero world",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    // {
    // resolve: `gatsby-source-contentful`,
    // options: {
    // spaceId: `your_space_id`,
    // Learn about environment variables: https://gatsby.dev/env-vars
    // accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    // host: `preview.contentful.com`,
    // },
    // },
  ],
};
