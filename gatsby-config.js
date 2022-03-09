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
  ],
};
