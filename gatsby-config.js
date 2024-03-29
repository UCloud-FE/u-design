module.exports = {
    pathPrefix: `/u-design`,
    flags: {
        PARALLEL_QUERY_RUNNING: true,
    },
    siteMetadata: {
        title: `UCloud Design`,
        author: {
            name: `UCloud`,
            summary: `UCloud Design`,
        },
        description: `UCloud Design Components`,
    },
    plugins: [
        'gatsby-plugin-layout',
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                // allowDeclareFields: true,
                //   isTSX: true, // defaults to false
                //   jsxPragma: `jsx`, // defaults to "React"
                //   allExtensions: true, // defaults to false
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                cssLoaderOptions: {
                    camelCase: false,
                },
            },
        },
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content`,
                name: `content`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.md`, `.mdx`],
                gatsbyRemarkPlugins: [
                    `gatsby-remark-autolink-headers`,
                    {
                        resolve: require.resolve(`./plugins/gatsby-remark-custom-extend`),
                    },
                    `gatsby-remark-extract-image-attributes`,
                    // {
                    //     resolve: `gatsby-remark-relative-images`,
                    //     options: {
                    //         // [Optional] The root of "media_folder" in your config.yml
                    //         // Defaults to "static"
                    //         staticFolderName: 'content',
                    //         // [Optional] Include the following fields, use dot notation for nested fields
                    //         // All fields are included by default
                    //         // include: ['featured'],
                    //         // [Optional] Exclude the following fields, use dot notation for nested fields
                    //         // No fields are excluded by default
                    //     },
                    // },
                    // {
                    //     resolve: `gatsby-remark-images`,
                    //     options: {
                    //         maxWidth: 1440,
                    //         linkImagesToOriginal: false,
                    //         showCaptions: true,
                    //         quality: 70,
                    //         // wrapperStyle: fluidResult => {
                    //         //     return '';
                    //         // },
                    //     },
                    // },
                    // {
                    //     resolve: `gatsby-remark-responsive-iframe`,
                    //     options: {
                    //         wrapperStyle: `margin-bottom: 1.0725rem`,
                    //     },
                    // },
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-plugin-smoothscroll`,
        `gatsby-transformer-sharp`,
        // 'gatsby-plugin-sharp',
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                // Defaults used for gatsbyImageData and StaticImage
                defaults: {
                    formats: [`auto`],
                },
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
        // {
        //   resolve: `gatsby-plugin-google-analytics`,
        //   options: {
        //     trackingId: `ADD YOUR TRACKING ID HERE`,
        //   },
        // },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `UCloud Design`,
                short_name: `UDesign`,
                start_url: `/`,
                // background_color: `#ffffff`,
                // theme_color: `#663399`,
                // theme_color_in_head: false,
                display: `minimal-ui`,
                icons: [
                    {
                        src: `static/favicon.ico`,
                        type: 'image/ico',
                    },
                ],
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-gatsby-cloud`,
        // `gatsby-plugin-netlify-cms`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
        {
            resolve: 'gatsby-plugin-load-script',
            options: {
                async: false,
                src: 'https://ucloud-fe.github.io/react-components/recodo/dist/main.min.js',
                crossorigin: 'anonymous',
            },
        },
    ],
};
