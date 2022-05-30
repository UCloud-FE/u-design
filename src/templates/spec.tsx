import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Seo from '../components/seo';
import ToC from '../components/ToC';
import Footer from '../components/Footer';
import { delLast } from '../utils';
import Edit from '../images/edit.svg';
import * as styles from './styles.module.scss';

const Index = ({ data, location }) => {
    const [scrollCurrentHash, setScrollCurrentHash] = useState('');
    const markdownRemark = data.mdx;
    const slug = markdownRemark.fields.slug;
    const specName = delLast(slug.split('/spec/')[1], '/');

    const handleScroll = () => {
        const el = document.querySelector('#spec_s_w');
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
        const el = document.querySelector('#spec_s_w');
        el.addEventListener('scroll', handleScroll);
        return () => el.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.wrapper}>
            <Seo title={markdownRemark.frontmatter.title} />

            <div className={styles.contentWrapper} id="spec_s_w">
                <ToC currentHash={scrollCurrentHash} headings={markdownRemark.headings || []} location={location} />
                <div className={styles.content}>
                    <div className={styles.top}>
                        <h1>
                            {markdownRemark.frontmatter.title ? markdownRemark.frontmatter.title : specName}
                            <a
                                href={`https://github.com/UCloud-FE/u-design/blob/main/content/spec/${specName}/index.md`}
                                target="_blank"
                            >
                                <Edit />
                            </a>
                        </h1>
                        {markdownRemark.frontmatter.description && <p>{markdownRemark.frontmatter.description}</p>}
                    </div>

                    <section className="u-markdown-design-styles">
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
    query SpecBySlug($id: String!) {
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
