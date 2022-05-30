import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from '../components/seo';
import ToC from '../components/ToC';
import Footer from '../components/Footer';
import * as styles from './styles.module.scss';

const Index = ({ data, location }) => {
    const [scrollCurrentHash, setScrollCurrentHash] = useState('');
    const markdownRemark = data.mdx;
    const { headings, fields } = markdownRemark;

    const handleScroll = () => {
        const el = document.querySelector('#docs_s_w');
        const top = el.scrollTop;
        let sections = el.querySelectorAll('[aria-label]');
        let currentHash;

        for (let i = 0; i < sections.length; i++) {
            if (sections[i].parentElement.tagName === 'H4') {
                continue;
            }

            var itemTop = sections[i].parentElement.offsetTop;
            console.log(sections[i].hash);
            if (top > itemTop - 120) {
                currentHash = decodeURIComponent(sections[i].hash);
            } else {
                break;
            }
        }

        setScrollCurrentHash(currentHash);
    };

    useEffect(() => {
        const el = document.querySelector('#docs_s_w');
        el.addEventListener('scroll', handleScroll);
        return () => el.removeEventListener('scroll', handleScroll);
    }, []);

    const getToC = () => {
        if (fields.slug === '/docs/changelog/') {
            return null;
        }
        return <ToC currentHash={scrollCurrentHash} headings={markdownRemark.headings || []} location={location} />;
    };

    return (
        <div className={styles.wrapper}>
            <Seo title={headings[0]?.value} />

            <div className={styles.contentWrapper} id="docs_s_w">
                {getToC()}
                <div className={styles.content}>
                    <section className="u-markdown-docs-styles">
                        <MDXRenderer>{markdownRemark.body}</MDXRenderer>
                    </section>
                </div>
                <Footer />
            </div>
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
