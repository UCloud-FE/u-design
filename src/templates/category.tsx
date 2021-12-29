import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import Footer from '../components/Footer';
import ComponentList from '../components/ComponentList';
import * as component from './styles.module.scss';
import * as category from './category.module.scss';

const Index = ({ data }) => {
    const { markdownRemark, thumbs } = data;

    return (
        <div className={component.wrapper}>
            <Seo title={markdownRemark.frontmatter.title} />

            <div className={component.contentWrapper}>
                <div className={component.content}>
                    <div className={category.top}>
                        <h1>
                            {markdownRemark.frontmatter.title}
                        </h1>
                        {markdownRemark.frontmatter.description && <p>{markdownRemark.frontmatter.description}</p>}
                    </div>

                    {/* <div className="u-markdown-design-styles" dangerouslySetInnerHTML={{ __html: markdownRemark.html }} >
                    </div> */}
                    <div className={category.list}>
                        <ComponentList markdownRemark={markdownRemark} thumbs={thumbs} />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Index;

export const pageQuery = graphql`
    query CategoryBySlug($id: String!) {
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
                description
                order
            }
        }
        thumbs: allFile(filter: { relativePath: { glob: "component/list/*/thumb.png" } }) {
            nodes {
                relativePath
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    }
`;
