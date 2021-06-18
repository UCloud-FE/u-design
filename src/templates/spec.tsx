import * as React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import ToC from '../components/ToC';
import Footer from '../components/Footer';
import * as styles from './styles.module.scss';

const Index = ({ data, location }) => {
    const post = data.markdownRemark;

    return (
        <div className={styles.wrapper}>
            <Seo title={post.frontmatter.title} />

            <div className={styles.contentWrapper}>
                <ToC headings={post.headings || []} location={location} />
                <div className={styles.content}>
                    <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Index;

export const pageQuery = graphql`
    query SpecBySlug($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            excerpt(pruneLength: 160)
            html
            headings {
                value
                depth
            }
            frontmatter {
                title
            }
        }
    }
`;
