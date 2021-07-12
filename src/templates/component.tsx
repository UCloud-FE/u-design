import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Seo from '../components/seo';
import Footer from '../components/Footer';
import ToC from '../components/ToC';
import ComponentList from '../components/ComponentList';
import allComponents from '../../content/components.json';
import { delLast } from '../utils';
import * as styles from './styles.module.scss';
import Edit from '../images/edit.svg';
import { useState } from 'react';

const getComponentName = (slug: string): string => {
    return delLast(slug.split('/component/list/')[1], '/');
};

const getTitle = componentName => {
    const component = allComponents.find(item => item.name === componentName);
    return `${component?.name || ''} ${component?.zh_cn || ''}`;
};

const Index = ({ data, location }) => {
    const { markdownRemark, thumbs } = data;
    const slug = markdownRemark.fields.slug;
    const componentName = getComponentName(slug);
    const [tabIndex, setTabIndex] = useState(0);

    const handleClickTab = index => {
        setTabIndex(index);
    };

    const renderCurrentTabContent = () => {
        if(document.querySelector("#u-component-doc")){
            document.querySelector("#u-component-doc").innerHTML = "";
        }

        if (tabIndex === 0) {
            return (
                <>
                    <div className={styles.markdown}>
                        <section dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
                    </div>
                </>
            );
        } else if(tabIndex === 1){
            try {
                window["react-components-docs"].renderDoc(componentName, document.querySelector("#u-component-doc"));
            } catch(e){
                console.error(e);
            }

            return null;
        } else if(tabIndex === 2){
            return (
                <div>
                    Design Token
                </div>
            );
        }

        return null;
    };

    return (
        <div className={styles.wrapper}>
            <Seo title={markdownRemark.frontmatter.title} />

            <div className={styles.contentWrapper}>
                {
                    tabIndex === 0 && <ToC headings={markdownRemark.headings || []} location={location} />
                }
                <div className={styles.content}>
                    <div className={styles.top}>
                        <h1>
                            {markdownRemark.frontmatter.title
                                ? markdownRemark.frontmatter.title
                                : getTitle(componentName)}
                            {componentName && (
                                <a
                                    href={`https://github.com/UCloud-FE/u-design/blob/main/content/component/list/${componentName}/index.md`}
                                    target="_blank"
                                >
                                    <Edit />
                                </a>
                            )}
                        </h1>
                        {markdownRemark.frontmatter.description && <p>{markdownRemark.frontmatter.description}</p>}
                    </div>
                    {!markdownRemark?.fields?.slug?.includes('/component/category/') && (
                        <div className={styles.tabs}>
                            <ul>
                                <li
                                    className={`${tabIndex === 0 && styles.current}`}
                                    onClick={() => {
                                        handleClickTab(0);
                                    }}
                                >
                                    <i className={styles.designIcon}></i>
                                    <span>设计</span>
                                </li>
                                <li
                                    className={`${tabIndex === 1 && styles.current}`}
                                    onClick={() => {
                                        handleClickTab(1);
                                    }}
                                >
                                    <i className={styles.devIcon}></i>
                                    文档
                                </li>
                                <li
                                    className={`${tabIndex === 2 && styles.current}`}
                                    onClick={() => {
                                        handleClickTab(2);
                                    }}
                                >
                                    <i className={styles.dtIcon}></i>
                                    <span>Design Token</span>
                                </li>
                            </ul>
                        </div>
                    )}

                    {renderCurrentTabContent()}
                    <div id="u-component-doc"></div>
                    {markdownRemark?.fields?.slug?.includes('/component/category/') ? (
                        <ComponentList markdownRemark={markdownRemark} thumbs={thumbs} />
                    ) : null}
                    {/* {previousComponentName && (
                        <Link to={`/component/${previousComponentName}/`} rel="prev">
                            ← {getTitle(previousComponentName)}
                        </Link>
                    )}
                    {nextComponentName && (
                        <Link to={`/component/${nextComponentName}/`} rel="prev">
                            ← {getTitle(nextComponentName)}
                        </Link>
                    )} */}
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Index;

export const pageQuery = graphql`
    query ComponentBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
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
        previous: markdownRemark(id: { eq: $previousPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
        next: markdownRemark(id: { eq: $nextPostId }) {
            fields {
                slug
            }
            frontmatter {
                title
            }
        }
    }
`;
