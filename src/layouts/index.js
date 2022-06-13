import * as React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import * as layoutStyles from './layout.module.scss';
import allComponents from '../../content/components.json';
import UDesign from '../images/u-design.png';
import Sidebar from '/src/components/Sidebar';

const Layout = ({ location, children }) => {
    const rootPath = `${__PATH_PREFIX__}/`;
    const isRootPath = location.pathname === rootPath;

    const { navs, category, all, docs, categories, specs, specsCategoryOrder } = useStaticQuery(graphql`
        query {
            navs: allMdx(
                sort: { fields: [frontmatter___order], order: ASC }
                filter: { fileAbsolutePath: { glob: "**/content/*/index.md" } }
            ) {
                nodes {
                    frontmatter {
                        title
                        url
                        match
                    }
                }
            }
            category: mdx(fileAbsolutePath: { glob: "**/content/component/category/index.md" }) {
                frontmatter {
                    title
                }
            }
            all: mdx(fileAbsolutePath: { glob: "**/content/component/list/index.md" }) {
                frontmatter {
                    title
                }
            }
            categories: allMdx(
                sort: { fields: [frontmatter___order], order: ASC }
                filter: { fileAbsolutePath: { glob: "**/content/component/category/**" } }
            ) {
                nodes {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        order
                    }
                }
            }
            specs: allMdx(
                sort: { fields: [frontmatter___order], order: ASC }
                filter: { fileAbsolutePath: { glob: "**/content/spec/*/index.md" } }
            ) {
                nodes {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        category
                        order
                    }
                }
            }
            docs: allMdx(
                sort: { fields: [fields___slug], order: DESC }
                filter: { fileAbsolutePath: { glob: "**/content/docs/*.md" }, fields: { slug: { ne: "/docs/" } } }
            ) {
                nodes {
                    headings {
                        value
                        depth
                    }
                    fields {
                        slug
                    }
                }
            }
            specsCategoryOrder: mdx(fileAbsolutePath: { glob: "**/content/spec/index.md" }) {
                frontmatter {
                    categoryOrder
                }
            }
        }
    `);

    let { categoryOrder } = specsCategoryOrder.frontmatter;
    categoryOrder = categoryOrder.split('|');
    const _categories = categories.nodes.filter(item => item.excerpt);
    let items = [];

    if (location.pathname.includes('/spec/')) {
        const categories = {};
        specs.nodes.forEach(item => {
            if (item.fields.slug.split('/spec/')[1][0] === '_') {
                return;
            }

            const categoryName = item.frontmatter.category;
            categories[categoryName] = categories[categoryName] || [];
            categories[categoryName].push(item);
        });

        items = Object.keys(categories)
            .sort((a, b) => categoryOrder.findIndex(item => item === a) - categoryOrder.findIndex(item => item === b))
            .map(categoryName => {
                const items = categories[categoryName];
                if (items.length === 1) {
                    const { frontmatter, fields } = items[0];
                    return {
                        title: frontmatter.category,
                        slug: fields.slug,
                    };
                }

                if (items.length > 1) {
                    return {
                        title: categoryName,
                        items: items.map(item => {
                            const { frontmatter, fields } = item;
                            return {
                                title: frontmatter.title,
                                slug: fields.slug,
                            };
                        }),
                    };
                }

                return {};
            });
    } else if (location.pathname.includes('/component/')) {
        items = [
            {
                title: category.frontmatter.title,
                items: _categories.map(item => {
                    const { title } = item.frontmatter;
                    const { slug } = item.fields;
                    return {
                        title: title,
                        slug: slug,
                    };
                }),
            },
            {
                title: all.frontmatter.title,
                items: allComponents.map(item => {
                    const { name, zh_cn = '' } = item;

                    return {
                        title: `${name} ${zh_cn}`,
                        slug: `/component/${name}/`,
                    };
                }),
            },
        ];
    } else if (location.pathname.includes('/docs/')) {
        items = docs.nodes.map(item => {
            const { fields, headings } = item;

            return {
                title: fields.slug === '/docs/readme/' ? '组件介绍' : headings[0]?.value,
                slug: fields.slug,
            };
        });
    }

    return (
        <div className={layoutStyles.wrapper} data-is-root-path={isRootPath}>
            <header className={layoutStyles.header}>
                <div className={layoutStyles.logo}>
                    <Link to="/" itemProp="url">
                        <img src={UDesign} alt="logo" />
                    </Link>
                </div>
                <nav>
                    {navs.nodes.map(item => {
                        const { url, title, match } = item.frontmatter;
                        const isCurrent = location.pathname.includes(match);
                        return (
                            <Link
                                key={url}
                                to={url}
                                itemProp="url"
                                className={`${isCurrent ? layoutStyles.current : ''}`}
                            >
                                {title}
                            </Link>
                        );
                    })}
                    <Link
                        key="custom-components"
                        to="/custom"
                        itemProp="url"
                        className={`${location.pathname.includes('/custom') ? layoutStyles.current : ''}`}
                    >
                        定制
                    </Link>
                </nav>
            </header>
            <main className={layoutStyles.main}>
                {items.length ? <Sidebar items={items} location={location} /> : null}
                {children}
            </main>
        </div>
    );
};

export default Layout;
