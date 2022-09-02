import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Seo from '../components/seo';
import Footer from '../components/Footer';
import ToC from '../components/ToC';
import useDemos from '../components/useDemos';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import allComponents from '../../content/components.json';
import { delLast } from '../utils';
import getDemoCode from '../utils/getDemoCode';
import { components } from '../allComponents';
import * as styles from './template.module.scss';
import Edit from '../images/edit.inline.svg';
import { Resizable } from 'react-resizable';
import moment from 'moment';
import demoUtil from '../../react-components/shared/demoUtil';
import darkTheme from '../../react-components/src/components/ThemeProvider/dark';
import SizeInterface from '../../react-components/src/interfaces/Size';
// import ENLocale from '../../react-components/src/components/LocaleProvider/locale/en_US';

const lodash = require('lodash');

// components.Table.ResizableTH = {};
const getDemos = (componentDemos, demos) => {
    const liveComponents = {};
    const scope = {
        React,
        ReactDOM,
        components,
        ...components,
        PropTypes,
        Props: require(`../components/Props`).default,
        Resizable,
        demoUtil,
        _: lodash,
        moment,
        darkTheme,
        SizeInterface,
        ENLocale: {},
    };

    componentDemos.edges.forEach(item => {
        let demoComponentName = item.node.name.replace(/^\S/, s => s.toUpperCase()).replace(/-/g, '');
        let componentName = item.node.relativePath.split('/')[2];
        let demoCode = getDemoCode(demos[componentName][item.node.name]) + '\nrender(<Demo />)';

        liveComponents[demoComponentName] = () => {
            const [active, setActive] = useState(false);
            const haneleViewCode = useCallback(() => {
                setActive(!active);
            }, [active]);

            if(componentName === 'ZForm'){
                if(['Base', 'Name'].includes(demoComponentName)){
                    delete scope.Input;
                    delete scope.Checkbox;
                } else {
                    scope.Input = components.Input;
                    scope.Checkbox = components.Checkbox;
                }
            }

            return (
                <LiveProvider
                    theme={{ plain: { backgroundColor: '#f5f2f0' }, styles: [] }}
                    code={demoCode}
                    noInline={true}
                    scope={{...scope}}
                >
                    <LivePreview />
                    <LiveError />
                    <div className="demo-toolbar">
                        <div
                            className="demo-toolbar-view-code"
                            data-active={active ? 'true' : 'false'}
                            role="button"
                            onClick={haneleViewCode}
                        >
                            VIEW CODE ( LIVE )
                        </div>
                    </div>
                    {active && (
                        <div className="demo-code">
                            <LiveEditor tabSize={2} />
                        </div>
                    )}
                </LiveProvider>
            );
        };
    });

    return liveComponents;
};

const getComponentName = (slug: string): string => {
    return delLast(slug.split('/component/list/')[1], '/');
};

const getComponentInfo = (componentName: string): any => {
    return allComponents.find(item => item.name === componentName);
};

const getTitle = componentInfo => {
    return `${componentInfo?.name || ''} ${componentInfo?.zh_cn || ''}`;
};

const tabs = ['design', 'docs'];
let currentTabIndex = tabs[1];

const Index = ({ data, location }) => {
    const [tabIndex, setTabIndex] = useState(currentTabIndex);
    const [componentDocsToc, setComponentDocsToc] = useState([]);
    const [scrollCurrentHash, setScrollCurrentHash] = useState('');
    const { markdown, componentDocs, componentDemos } = data;
    const [componentName] = useState(getComponentName(markdown.fields.slug));
    const [componentInfo] = useState(getComponentInfo(componentName));
    const wrapperEl = useRef<HTMLDivElement>(null);
    const headerEl = useRef<HTMLDivElement>(null);
    const upEl = useRef<HTMLDivElement>(null);
    const demos = useDemos();

    useEffect(() => {
        const toc = [];
        const links = wrapperEl.current.querySelectorAll('#u-component-doc [aria-label]');
        wrapperEl.current.scrollTop = 0;

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
                value: decodeURIComponent(links[index].getAttribute('aria-label')),
            });
        });

        setComponentDocsToc(toc);
    }, [tabIndex]);

    const handleScrollToTop = useCallback(() => {
        wrapperEl.current.scrollTop = 0;
    }, []);

    const handleScroll = useCallback(() => {
        const top = wrapperEl.current.scrollTop;
        let sections = wrapperEl.current.querySelectorAll('[aria-label]');
        let currentHash;

        for (let i = 0; i < sections.length; i++) {
            // if (sections[i].parentElement.tagName === 'H4') {
            //     continue;
            // }

            var itemTop = sections[i].parentElement.offsetTop;
            if (top > itemTop + 155) {
                currentHash = decodeURIComponent(sections[i].hash);
            } else {
                break;
            }
        }

        setScrollCurrentHash(currentHash);
    }, []);

    const handleFixToc = useCallback(() => {
        const scrollTop = wrapperEl.current.scrollTop;

        if (scrollTop >= 127) {
            upEl.current.style.opacity = '1';
        } else {
            upEl.current.style.opacity = '';
        }

        if (scrollTop >= 117) {
            headerEl.current.style.borderBottomWidth = '0px';
        } else {
            headerEl.current.style.borderBottomWidth = '';
        }
    }, []);

    useEffect(() => {
        wrapperEl.current.addEventListener('scroll', handleFixToc);
    }, []);

    useEffect(() => {
        wrapperEl.current.addEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (componentInfo?.isHideDesignTab) {
            setTabIndex(tabs[1]);
        }
    }, []);

    const handleClickTab = index => {
        currentTabIndex = index;
        setTabIndex(index);
    };

    const MemoMDXProvider = useMemo(() => {
        return (
            <MDXProvider components={getDemos(componentDemos, demos)}>
                {componentDocs.nodes.map(node => {
                    return <MDXRenderer key={node.id}>{node.body}</MDXRenderer>;
                })}
            </MDXProvider>
        );
    }, []);

    return (
        <div className={styles.wrapper} ref={wrapperEl}>
            <Seo title={markdown.frontmatter.title} />
            <div className={styles.componentHeader} ref={headerEl}>
                <h1 className={styles.headerH1}>
                    {getTitle(componentInfo)}
                    <a
                        href={`https://github.com/UCloud-FE/u-design/blob/main/content/component/list/${componentName}/index.md`}
                        target="_blank"
                    >
                        <Edit />
                    </a>
                    {markdown.frontmatter.description && <p>{markdown.frontmatter.description}</p>}
                </h1>
            </div>

            <div className={styles.content}>
                <div className={styles.markdown}>
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
                        {MemoMDXProvider}
                    </div>
                </div>

                <div className={styles.sidebar}>
                    {!componentInfo?.isHideDesignTab && (
                        <div className={styles.tabs}>
                            <ul>
                                <li
                                    className={`${tabIndex === tabs[0] ? styles.current : ''}`}
                                    onClick={() => {
                                        handleClickTab(tabs[0]);
                                    }}
                                >
                                    设计
                                </li>
                                <li
                                    className={`${tabIndex === tabs[1] ? styles.current : ''}`}
                                    onClick={() => {
                                        handleClickTab(tabs[1]);
                                    }}
                                >
                                    文档
                                </li>
                            </ul>
                        </div>
                    )}

                    <div className={styles.toc}>
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
                    </div>
                    <i ref={upEl} onClick={handleScrollToTop} className="uc-fe-icon icon__up" />
                </div>
            </div>
            <Footer />
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
