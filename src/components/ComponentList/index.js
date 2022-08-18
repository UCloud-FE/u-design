import * as React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import allComponents from '../../../content/components.json';
import { delLast } from '../../utils';
import * as styles from './styles.module.scss';

const getThumbRelativePath = componentName => {
    return `component/list/${componentName}/thumb.png`;
};

const Index = ({ markdownRemark, thumbs }) => {
    const slug = markdownRemark.fields.slug;
    let category = delLast(slug.split('/component/category/')[1], '/');
    let components = [];

    if (category === 'all') {
        components = allComponents;
    } else {
        components = allComponents.filter(component => component.category?.includes(category));
    }

    return (
        <div className={styles.wrapper}>
            <ul>
                {components.map(component => {
                    const thumbImage = getImage(
                        thumbs.nodes.find(item => item.relativePath === getThumbRelativePath(component.name)),
                    );

                    return (
                        <li key={component.name}>
                            <Link to={`/component/${component.name}/`}>
                                <span>
                                    {component.name} {component.zh_cn}
                                </span>
                                <div className={styles.thumb}>
                                    {thumbImage ? (
                                        <GatsbyImage alt={component.name} image={thumbImage} />
                                    ) : (
                                        <div style={{ background: '#f2f2f7' }}>
                                            <img width="264" height="172" style={{ opacity: 0, display: 'block' }} />
                                        </div>
                                    )}
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
            <div className={styles.clear} />
        </div>
    );
};

export default Index;
