/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Bio = () => {
    const data = useStaticQuery(graphql`
        query BioQuery {
            site {
                siteMetadata {
                    author {
                        name
                        summary
                    }
                    social {
                        twitter
                    }
                }
            }
        }
    `);

    // Set these values by editing "siteMetadata" in gatsby-config.js
    // const author = data.site.siteMetadata?.author;
    // const social = data.site.siteMetadata?.social;

    return <div className="bio">bio</div>;
};

export default Bio;
