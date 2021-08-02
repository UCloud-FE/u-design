import * as React from 'react';
import * as styles from './styles.module.scss';

export type Heading = {
    value: string;
    depth: number;
    id?: string;
};

const ToC = (props: {
    currentHash?: string;
    originalHash?: boolean;
    headings: Heading[];
    className?: string;
    location: any;
}) => {
    const { headings, currentHash, originalHash, className, location, ...rest } = props;

    if (!headings?.length) {
        return null;
    }

    return (
        <div {...rest} className={`${styles.wrapper} ${className || ''}`}>
            <h2>目录</h2>
            <div className={styles.innerScroll}>
                {headings.map((heading, index) => {
                    const hash = originalHash
                        ? heading.id
                        : heading.value.replace(/\s+/g, '-').toLowerCase();
                    const isHighlight = `#${hash}` === currentHash;

                    if (heading.depth === 2 || heading.depth === 3) {
                        return (
                            <div
                                className={`${styles.to} ${isHighlight ? styles.current : ''}`}
                                key={heading.value + index}
                            >
                                <a
                                    style={{
                                        paddingLeft: heading.depth === 3 ? 16 : 0,
                                    }}
                                    href={`#${hash}`}
                                >
                                    {heading.value}
                                </a>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default ToC;
