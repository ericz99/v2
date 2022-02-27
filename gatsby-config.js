module.exports = {
  siteMetadata: {
    title: 'Eric Zhang - Software Engineer',
    author: {
      name: 'Eric Zhang',
      summary: 'who lives and works in Brooklyn Ny, building useful things.'
    },
    description: 'Hello, I am a software engineer!',
    siteUrl: 'https://ericzhang.xyz/'
  },
  /* Your site config here */
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'montserrat:300,400,500',
          'source sans pro:300,400,400i,700', // you can also specify font weights and styles
          'Dela Gothic One:300,400,500',
          'Quicksand:300,400,500'
        ],
        display: 'swap'
      }
    }
  ]
};
