import * as React from 'react';
import * as styles from './styles.module.scss';

export type Heading = {
    value: string;
    depth: number;
};

const ToC = (props: { headings: Heading[]; className?: string; location: any }) => {
    const { headings, className, location, ...rest } = props;

    return (
        <div {...rest} className={`${styles.wrapper} ${className || ''}`}>
            <h2>目录</h2>
            <div className={styles.innerScroll}>
                {props.headings.map(heading => {
                    if (heading.depth !== 2) {
                        return null;
                    }

                    const hash = encodeURIComponent(heading.value.replace(/\s+/g, '-').toLowerCase());
                    const isCurrent = location.hash === '#' + hash;

                    return (
                        <div className={`${styles.to} ${isCurrent ? styles.current : ''}`} key={heading.value}>
                            <a href={`#${hash}`}>{heading.value}</a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ToC;
