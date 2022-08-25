import React, { useEffect, useState, useRef, useCallback } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Seo from '../components/seo';
import ToC from '../components/ToC';
import Footer from '../components/Footer';
import { delLast } from '../utils';
import Edit from '../images/edit.inline.svg';
import * as styles from './template.module.scss';

const Index = ({ data, location }) => {
    const [scrollCurrentHash, setScrollCurrentHash] = useState('');
    const markdownRemark = data.mdx;
    const slug = markdownRemark.fields.slug;
    const specName = delLast(slug.split('/spec/')[1], '/');
    const wrapperEl = useRef<HTMLDivElement>(null);
    const tocEl = useRef<HTMLDivElement>(null);
    const upEl = useRef<HTMLDivElement>(null);

    const handleScrollToTop = useCallback(()=>{
        wrapperEl.current.scrollTop = 0;
    }, []);

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
        handleShowUp();
    };
   
    const handleShowUp = useCallback(()=>{
        const scrollTop = wrapperEl.current.scrollTop;

        if(scrollTop >= 127){
            upEl.current.style.opacity = '1';
        } else {
            upEl.current.style.opacity = '';
        }
    }, []);

    useEffect(()=>{
        wrapperEl.current.addEventListener('scroll', handleShowUp);
    }, [])

    useEffect(() => {
        tocEl.current.style.position = 'sticky';
        tocEl.current.style.top = '57px';
        wrapperEl.current.addEventListener('scroll', handleScroll);
    }, []);
    

    return (
        <div className={styles.wrapper} ref={wrapperEl}>
            <Seo title={markdownRemark.frontmatter.title} />

            <div className={styles.specHeader}>
                <h1 className={styles.headerH1}>
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

            <div className={styles.content}>
                <div className={styles.markdown}>
                    <section className="u-markdown-design-styles">
                        <MDXRenderer>{markdownRemark.body}</MDXRenderer>
                    </section>
                </div>

                <div className={styles.sidebar}>
                    <div className={styles.toc} ref={tocEl}>
                        <ToC currentHash={scrollCurrentHash} headings={markdownRemark.headings || []} location={location} />
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
