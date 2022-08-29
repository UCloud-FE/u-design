import React, { useEffect, useState, useRef } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Seo from '../components/seo';
import ToC from '../components/ToC';
import Footer from '../components/Footer';
import * as styles from './template.module.scss';

const Index = ({ data, location }) => {
    const [scrollCurrentHash, setScrollCurrentHash] = useState('');
    const markdownRemark = data.mdx;
    const { headings, fields } = markdownRemark;
    const wrapperEl = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        const top = wrapperEl.current.scrollTop;
        let sections = wrapperEl.current.querySelectorAll('[aria-label]');
        let currentHash;

        for (let i = 0; i < sections.length; i++) {
            if (sections[i].parentElement.tagName === 'H4') {
                continue;
            }

            var itemTop = sections[i].parentElement.offsetTop;
            if (top > itemTop - 120) {
                currentHash = decodeURIComponent(sections[i].hash);
            } else {
                break;
            }
        }

        setScrollCurrentHash(currentHash);
    };

    useEffect(() => {
        wrapperEl.current.addEventListener('scroll', handleScroll);
    }, []);

    const getToC = () => {
        if (fields.slug === '/docs/changelog/') {
            return null;
        }
        return <ToC currentHash={scrollCurrentHash} headings={markdownRemark.headings || []} location={location} />;
    };

    return (
        <div className={styles.wrapper} id="docs_s_w" ref={wrapperEl}>
            <Seo title={headings[0]?.value} />

            <div className={styles.content}>
                <div className={styles.markdown}>
                    <section className="u-markdown-docs-styles">
                        <MDXRenderer>{markdownRemark.body}</MDXRenderer>
                    </section>
                </div>
                <div className={styles.sidebar}>
                    <div className={styles.toc}>{getToC()}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Index;

export const pageQuery = graphql`
    query DocsBySlug($id: String!) {
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
            }
        }
    }
`;
