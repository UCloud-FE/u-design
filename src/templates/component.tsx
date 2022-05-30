import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from '../components/seo';
import Footer from '../components/Footer';
import ToC from '../components/ToC';
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

let componentDocsDestroy = () => {};
const TAB_KEY = 'component_tab_i';
const tabs = ['design', 'docs', 'dt'];

const Index = ({ data, location }) => {
    const { mdx } = data;
    const slug = mdx.fields.slug;
    const componentName = getComponentName(slug);
    const [tabIndex, setTabIndex] = useState(tabs[0]);
    const [componentsDocsToc, setComponentsDocsToc] = useState([]);
    const [scrollCurrentHash, setScrollCurrentHash] = useState('');

    const handleScroll = () => {
        const el = document.querySelector('#component_s_w');
        const top = el.scrollTop;
        let sections =
            tabIndex === tabs[0] ? el.querySelectorAll('[aria-label]') : el.getElementsByClassName('recodo-anchor');
        let currentHash;

        for (let i = 0; i < sections.length; i++) {
            if (sections[i].parentElement.tagName === 'H4' && tabIndex === tabs[0]) {
                continue;
            }

            var itemTop = tabIndex === tabs[0] ? sections[i].parentElement.offsetTop : sections[i].offsetTop;
            if (top > itemTop - 120) {
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

        if (localStorage?.getItem(TAB_KEY)) {
            setTabIndex(localStorage?.getItem(TAB_KEY));
        }

        return () => el.removeEventListener('scroll', handleScroll);
    }, [tabIndex]);

    useEffect(() => {
        componentDocsDestroy();
        if (!window['react-components-docs']) {
            return;
        }

        if (tabIndex !== tabs[1]) {
            return;
        }

        componentDocsDestroy = window['react-components-docs'].renderDoc(
            componentName,
            document.querySelector('#u-component-doc'),
            {
                reportAnchorList: data => {
                    const tocData = [];
                    data.children?.forEach(itemA => {
                        tocData.push({
                            value: itemA.text,
                            id: itemA.id,
                            depth: 2,
                        });

                        if (itemA?.children?.length) {
                            itemA.children.forEach(itemB => {
                                if (itemB.text === '说明') {
                                    return;
                                }

                                if (itemB.text === '演示' && itemB?.children?.length) {
                                    itemB.children.forEach(itemC => {
                                        tocData.push({
                                            value: itemC.text,
                                            id: itemC.id,
                                            depth: 3,
                                        });
                                    });

                                    return;
                                }

                                tocData.push({
                                    value: itemB.text,
                                    id: itemB.id,
                                    depth: 3,
                                });
                            });
                        }
                    });

                    setComponentsDocsToc(tocData);
                },
            },
        );
    }, [tabIndex]);

    const handleClickTab = index => {
        localStorage?.setItem(TAB_KEY, index);
        setTabIndex(index);
    };

    const renderCurrentTabContent = () => {
        if (tabIndex === tabs[0]) {
            if (!mdx?.frontmatter?.description) {
                return <>敬请期待</>;
            }
            return (
                <div className="u-markdown-design-styles">
                    <MDXRenderer>{mdx.body}</MDXRenderer>
                </div>
            );
        } else if (tabIndex === tabs[2]) {
            return <div>敬请期待</div>;
        }

        return null;
    };

    return (
        <div className={styles.wrapper}>
            <Seo title={mdx.frontmatter.title} />

            <div className={styles.contentWrapper} id="component_s_w">
                {tabIndex === tabs[0] && (
                    <ToC currentHash={scrollCurrentHash} headings={mdx.headings || []} location={location} />
                )}
                {tabIndex === tabs[1] && (
                    <ToC
                        currentHash={scrollCurrentHash}
                        originalHash
                        headings={componentsDocsToc}
                        location={location}
                    />
                )}
                <div className={styles.content}>
                    <div className={styles.top}>
                        <h1>
                            {getTitle(componentName)}
                            <a
                                href={`https://github.com/UCloud-FE/u-design/blob/main/content/component/list/${componentName}/index.md`}
                                target="_blank"
                            >
                                <Edit />
                            </a>
                        </h1>
                        {mdx.frontmatter.description && <p>{mdx.frontmatter.description}</p>}
                    </div>

                    <div className={styles.tabs}>
                        <ul>
                            <li
                                className={`${tabIndex === tabs[0] && styles.current}`}
                                onClick={() => {
                                    handleClickTab(tabs[0]);
                                }}
                            >
                                <i className={styles.designIcon}></i>
                                <span>设计</span>
                            </li>
                            <li
                                className={`${tabIndex === tabs[1] && styles.current}`}
                                onClick={() => {
                                    handleClickTab(tabs[1]);
                                }}
                            >
                                <i className={styles.devIcon}></i>
                                文档
                            </li>
                            <li
                                className={`${tabIndex === tabs[2] && styles.current}`}
                                onClick={() => {
                                    handleClickTab(tabs[2]);
                                }}
                            >
                                <i className={styles.dtIcon}></i>
                                <span>Design Token</span>
                            </li>
                        </ul>
                    </div>

                    {renderCurrentTabContent()}
                    {tabIndex === tabs[1] && (
                        <div id="u-component-doc" className="u-markdown-dev-styles">
                            <div style={{ textAlign: 'center' }}>loading</div>
                        </div>
                    )}

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
    query ComponentBySlug($id: String!) {
        mdx(id: { eq: $id }) {
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
