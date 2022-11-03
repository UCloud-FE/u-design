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
    style?: object;
}) => {
    const { headings, currentHash, originalHash, className, location, ...rest } = props;

    if (!headings?.length) {
        return null;
    }

    return (
        <div {...rest} className={`${styles.toc} ${className || ''}`}>
            <div className={styles.innerScroll}>
                {headings.map((heading, index) => {
                    const hash = originalHash ? heading.id : heading.value.replace(/\s+/g, '-').toLowerCase();
                    const isHighlight = `#${hash}` === currentHash;

                    if (heading.depth >= 2 && heading.depth <= 4) {
                        let paddingLeft = 0;
                        if (heading.depth === 2) {
                            paddingLeft = 8;
                        } else if (heading.depth === 3) {
                            paddingLeft = 24;
                        } else if (heading.depth === 4) {
                            paddingLeft = 40;
                        }

                        return (
                            <div
                                className={`${styles.to} ${isHighlight ? styles.current : ''}`}
                                key={heading.value + index}
                            >
                                <a
                                    style={{
                                        paddingLeft,
                                    }}
                                    href={`#${hash}`}
                                    data-depth={heading.depth}
                                    title={heading.value}
                                >
                                    <div dangerouslySetInnerHTML={{__html: heading.value}} />
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
