module.exports = {
  siteMetadata: {
    title: '책방록',
  },
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve('./src/components/layouts/PageLayout/index.tsx'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'bookroom',
        path: `${__dirname}/bookroom`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: '책방록',
        short_name: '책방록',
        start_url: '/',
        icon: 'static/logo.svg',
      },
    },
  ],
};
