module.exports = {
  siteMetadata: {
    title: 'Ryanpedia',
    desc: 'The Free Ryyclopedia',
    probox: [
      ['Born', 'Tobias Vincent Maguire June 27, 1975 (age 42) Santa Monica, California, U.S.'],
      ['Residence', 'Los Angeles, California, U.S.'],
      ['Occupation', 'Actor, producer'],
      ['Years active', '1989–present'],
      ['Spouse(s)', 'Jennifer Meyer (m. 2007; div. 2017)'],
      ['Children', '2'],
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/static/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown-pages',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-embed-video'],
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cms',
    'gatsby-image',
  ],
};

