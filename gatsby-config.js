const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

const { theme } = resolveConfig(tailwindConfig)

module.exports = {
    siteMetadata: {
        title: 'Will Knight - Web Developer',
        author: 'Will Knight',
        description: 'My Development Portfolio',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Will Knight - Web Developer',
                short_name: "A Front-end Web Developer's Portfolio",
                start_url: '/',
                background_color: theme.colors.white,
                theme_color: theme.colors.teal[500],
                icon: 'static/icon.svg',
            },
        },
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [
                    require('tailwindcss'),
                    require('autoprefixer'),
                ],
            },
        },
    ],
}
