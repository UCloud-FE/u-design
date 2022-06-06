module.exports = {
    pathPrefix: `/u-design`,
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
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `md_images`,
                path: `${__dirname}/content/images`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.md`, `.mdx`],
                gatsbyRemarkPlugins: [
                    {
                        resolve: require.resolve(`./plugins/gatsby-remark-custom-extend`),
                    },
                    `gatsby-remark-extract-image-attributes`,
                    {
                        resolve: `gatsby-remark-relative-images`,
                        options: {
                            // [Optional] The root of "media_folder" in your config.yml
                            // Defaults to "static"
                            staticFolderName: 'content',
                            // [Optional] Include the following fields, use dot notation for nested fields
                            // All fields are included by default
                            // include: ['featured'],
                            // [Optional] Exclude the following fields, use dot notation for nested fields
                            // No fields are excluded by default
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1440,
                            linkImagesToOriginal: false,
                            showCaptions: true,
                            quality: 70,
                            // wrapperStyle: fluidResult => {
                            //     return '';
                            // },
                        },
                    },
                    {
                        resolve: `gatsby-remark-responsive-iframe`,
                        options: {
                            wrapperStyle: `margin-bottom: 1.0725rem`,
                        },
                    },
                    // {
                    //     resolve: 'gatsby-remark-attr',
                    //     options: {
                    //         allowDangerousDOMEventHandlers: true,
                    //     },
                    // },
                    // {
                    //     resolve: `gatsby-remark-image-attributes`,
                    //     options: {
                    //         // ?Boolean=true
                    //         //   If true (the default), all CSS
                    //         //   property names will be recognized
                    //         //   as styleAttribute.
                    //         styleAttributes: true,

                    //         // ?Boolean=false
                    //         //   If true, all attributes that
                    //         //   aren't styleAttributes, will be
                    //         //   added as data-* attributes to the
                    //         //   image.
                    //         dataAttributes: false,
                    //     },
                    // },
                    // {
                    //     resolve: 'gatsby-remark-custom-blocks',
                    //     options: {
                    //         blocks: {
                    //             'image-center': {
                    //                 classes: 'u-md-image-center',
                    //                 title: 'optional',
                    //             },
                    //             danger: {
                    //                 classes: "danger",
                    //             },
                    //         },
                    //     },
                    // },
                    `gatsby-remark-autolink-headers`,
                    `gatsby-remark-prismjs`,
                    `gatsby-remark-copy-linked-files`,
                    `gatsby-remark-smartypants`,
                ],
            },
        },
        `gatsby-plugin-smoothscroll`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-svg`,
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
        `gatsby-plugin-netlify-cms`,
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
