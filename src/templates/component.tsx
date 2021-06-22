import * as React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/seo';
import Footer from '../components/Footer';
import ToC from '../components/ToC';
import ComponentList from '../components/ComponentList';
import allComponents from '../../content/components.json';
import { delLast } from '../utils';
import * as styles from './styles.module.scss';

const Index = ({ data, location }) => {
    const { markdownRemark, thumbs } = data;
    const slug = markdownRemark.fields.slug;
    const  componentName = delLast(slug.split('/component/list/')[1], '/');
    const currentComponent = allComponents.find(item => item.name === componentName);
    
    // if(!currentComponent){
    //     return '404';
    // }

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
                                `${currentComponent?.name || ''} ${currentComponent?.zh_cn || ''}`
                            }
                        </h1>
                        {
                            markdownRemark.frontmatter.description &&
                            <p>{markdownRemark.frontmatter.description}</p>
                        }
                    </div>
                    {!markdownRemark?.fields?.slug?.includes('/component/category/') && (
                        <div className={styles.tabs}>
                            <ul>
                                <li>设计</li>
                                <li>开发</li>
                                <li>Design Token</li>
                            </ul>
                        </div>
                    )}
                    <section dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
                    {markdownRemark?.fields?.slug?.includes('/component/category/') ? (
                        <ComponentList markdownRemark={markdownRemark} thumbs={thumbs} />
                    ) : null}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Index;

export const pageQuery = graphql`
    query ComponentBySlug($id: String!) {
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
