import * as React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import ToC from '../components/ToC';
import Footer from '../components/Footer';
import { delLast } from '../utils';
import Edit from "../images/edit.svg";
import * as styles from './styles.module.scss';

const Index = ({ data, location }) => {
    const markdownRemark = data.markdownRemark;
    const slug = markdownRemark.fields.slug;
    const specName = delLast(slug.split('/spec/')[1], '/');
    
    return (
        <div className={styles.wrapper}>
            <Seo title={markdownRemark.frontmatter.title} />

            <div className={styles.contentWrapper}>
                <ToC headings={markdownRemark.headings || []} location={location} />
                <div className={styles.content}>
                    <div className={styles.top}>
                        <h1>
                            {
                                markdownRemark.frontmatter.title ?
                                markdownRemark.frontmatter.title :
                                specName
                            }
                            <a href={`https://github.com/UCloud-FE/u-design/blob/main/content/spec/${specName}/index.md`} target="_blank"><Edit /></a>
                        </h1>
                        {
                            markdownRemark.frontmatter.description &&
                            <p>{markdownRemark.frontmatter.description}</p>
                        }
                    </div>

                    <section dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
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
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
    }
`;
