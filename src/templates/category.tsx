import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import Footer from '../components/Footer';
import ComponentList from '../components/ComponentList';
import * as component from './template.module.scss';
import * as category from './category.module.scss';

const Index = ({ data }) => {
    const { mdx, thumbs } = data;

    return (
        <div className={component.midWrapper}>
            <Seo title={mdx.frontmatter.title} />

            <div className={component.midHeader}>
                <h1>
                    {mdx.frontmatter.title}
                    {mdx.frontmatter.description && <p>{mdx.frontmatter.description}</p>}
                </h1>
            </div>

            <div className={component.midContent}>
                <div className={category.list}>
                    <ComponentList markdownRemark={mdx} thumbs={thumbs} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Index;

export const pageQuery = graphql`
    query CategoryBySlug($id: String!) {
        mdx(id: { eq: $id }) {
            id
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
                    gatsbyImageData(width: 264, outputPixelDensities: [1])
                }
            }
        }
    }
`;
