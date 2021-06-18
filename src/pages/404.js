import * as React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';

const NotFoundPage = ({ data, location }) => {
    return (
        <div>
            <Seo title="404: Not Found" />
            <h1>404: Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
    );
};

export default NotFoundPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;
