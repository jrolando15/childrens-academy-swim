module.exports = {
  siteMetadata: {
    title: `Children's Academy Swim Program`,
    description: `Information about the Children's Academy swim program.`,
    author: `@childrensacademy`,
    siteUrl: `https://www.childrensacademy.edu/swim`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `childrens-academy-swim`,
        short_name: `swim`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // Ensure this path is correct
      },
    },
    {
      resolve: 'gatsby-plugin-force-file-loader',
      options: {
        rules: ['fonts', 'images', 'media'],
      },
    },
    `gatsby-plugin-netlify`, // Added the new plugin here
  ],
};



