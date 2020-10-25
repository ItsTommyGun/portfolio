module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [require('tailwindcss')],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/
        }
      }
    },
    {
      resolve: `gatsby-plugin-modal-routing`,
      options: {
        appElement: '#___gatsby',
        modalProps: {
          overlayClassName: 'modal-overlay',
          className: 'bg-white m-20 modal-content mx-auto p-20 w-2/3'
        },
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`
    },
  ],
}