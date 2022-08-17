import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Seo from '../components/seo';
import Footer from '../components/Footer';
import ToC from '../components/ToC';
import allComponents from '../../content/components.json';
import { delLast } from '../utils';
import * as styles from './styles.module.scss';
import Edit from '../images/edit.inline.svg';

const getDemos = componentDemos => {
    const demos = {};
    componentDemos.edges.forEach(item => {
        let demoComponentName = item.node.name.replace(/^\S/, s => s.toUpperCase()).replace(/-/g, '');
        demos[demoComponentName] = require(`../../content/${item.node.relativePath}`).default;
    });

    demos['Props'] = require(`../components/Props`).default;
    return demos;
};

const getComponentName = (slug: string): string => {
    return delLast(slug.split('/component/list/')[1], '/');
};

const getComponentInfo = (componentName: string): any=> {
    return allComponents.find(item => item.name === componentName);
}

const getTitle = (componentInfo) => {
    return `${componentInfo?.name || ''} ${componentInfo?.zh_cn || ''}`;
};

const TAB_KEY = 'component_tab_i';
const tabs = ['design', 'docs'];
let currentTabIndex = tabs[1];

const Index = ({ data, location }) => {
    const [tabIndex, setTabIndex] = useState(currentTabIndex);
    const [componentDocsToc, setComponentDocsToc] = useState([]);
    const [scrollCurrentHash, setScrollCurrentHash] = useState('');
    const { markdown, componentDocs, componentDemos } = data;
    const [componentName] = useState(getComponentName(markdown.fields.slug));
    const [componentInfo] = useState(getComponentInfo(componentName));

    useEffect(() => {
        const toc = [];
        const links = document.querySelectorAll('#u-component-doc [aria-label]');
        if (tabIndex !== tabs[1]) {
            return;
        }

        const headings = [];
        componentDocs.nodes.forEach(node => {
            headings.push(...node.headings);
        });

        headings.forEach((item, index) => {
            toc.push({
                ...item,
                depth: item.depth,
                id: decodeURIComponent(links[index].hash.split('#')[1]),
                value: decodeURIComponent(links[index].getAttribute("aria-label")),
            });
        });

        setComponentDocsToc(toc);
    }, [tabIndex]);

    const handleScroll = () => {
        const el = document.querySelector('#component_s_w');
        const top = el.scrollTop;
        let sections = el.querySelectorAll('[aria-label]');
        let currentHash;

        for (let i = 0; i < sections.length; i++) {
            // if (sections[i].parentElement.tagName === 'H4') {
            //     continue;
            // }

            var itemTop = sections[i].parentElement.offsetTop;
            if (top > itemTop - 30) {
                currentHash = decodeURIComponent(sections[i].hash);
            } else {
                break;
            }
        }

        setScrollCurrentHash(currentHash);
    };

    useEffect(() => {
        const el = document.querySelector('#component_s_w');
        el.addEventListener('scroll', handleScroll);

        return () => el.removeEventListener('scroll', handleScroll);
    }, [tabIndex]);

    const handleClickTab = index => {
        currentTabIndex = index;
        setTabIndex(index);
    };

    return (
        <div className={styles.wrapper}>
            <Seo title={markdown.frontmatter.title} />
            <div className={styles.contentWrapper} id="component_s_w">
                <ToC
                    style={{ display: tabIndex === tabs[0] ? 'block' : 'none' }}
                    currentHash={scrollCurrentHash}
                    headings={markdown.headings || []}
                    location={location}
                />
                <ToC
                    style={{ display: tabIndex === tabs[1] ? 'block' : 'none' }}
                    currentHash={scrollCurrentHash}
                    originalHash
                    headings={componentDocsToc}
                    location={location}
                />
                <div className={styles.content}>
                    <div className={styles.top}>
                        <h1>
                            {getTitle(componentInfo)}
                            <a
                                href={`https://github.com/UCloud-FE/u-design/blob/main/content/component/list/${componentName}/index.md`}
                                target="_blank"
                            >
                                <Edit />
                            </a>
                        </h1>
                        {markdown.frontmatter.description && <p>{markdown.frontmatter.description}</p>}
                    </div>

                    {
                        !componentInfo?.isHideDesignTab && 
                        <div className={styles.tabs}>
                            <ul>
                                <li
                                    className={`${tabIndex === tabs[0] ? styles.current : ''}`}
                                    onClick={() => {
                                        handleClickTab(tabs[0]);
                                    }}
                                >
                                    <i className={styles.designIcon}></i>
                                    <span>设计</span>
                                </li>
                                <li
                                    className={`${tabIndex === tabs[1] ? styles.current : ''}`}
                                    onClick={() => {
                                        handleClickTab(tabs[1]);
                                    }}
                                >
                                    <i className={styles.devIcon}></i>
                                    文档
                                </li>
                            </ul>
                        </div>
                    }

                    <div
                        style={{ display: tabIndex === tabs[0] ? 'block' : 'none' }}
                        className="u-markdown-design-styles"
                    >
                        {markdown?.frontmatter?.description ? (
                            <MDXProvider>
                                <MDXRenderer>{markdown.body}</MDXRenderer>
                            </MDXProvider>
                        ) : (
                            <>敬请期待</>
                        )}
                    </div>

                    <div
                        id="u-component-doc"
                        style={{ display: tabIndex === tabs[1] ? 'block' : 'none' }}
                        className="u-markdown-dev-styles"
                    >
                        <MDXProvider components={getDemos(componentDemos)}>
                            {componentDocs.nodes.map(node => {
                                return <MDXRenderer key={node.id}>{node.body}</MDXRenderer>;
                            })}
                        </MDXProvider>
                    </div>

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
    query ComponentBySlug($id: String, $componentApiDocsGlob: String, $componentDemosGlob: String) {
        markdown: mdx(id: { eq: $id }) {
            id
            excerpt(pruneLength: 160)
            body
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
        componentDocs: allMdx(filter: { fileAbsolutePath: { glob: $componentApiDocsGlob } }) {
            nodes {
                id
                excerpt
                body
                slug
                tableOfContents
                headings {
                    value
                    depth
                }
            }
        }
        componentDemos: allFile(filter: { relativeDirectory: { glob: $componentDemosGlob } }) {
            edges {
                node {
                    id
                    name
                    relativePath
                }
            }
        }
    }
`;

// previous: mdx(id: { eq: $previousPostId }) {
//     fields {
//         slug
//     }
//     frontmatter {
//         title
//     }
// }
// next: mdx(id: { eq: $nextPostId }) {
//     fields {
//         slug
//     }
//     frontmatter {
//         title
//     }
// }
