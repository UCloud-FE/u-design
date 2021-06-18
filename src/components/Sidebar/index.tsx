import * as React from 'react';
import * as styles from './styles.module.scss';
import { Link } from 'gatsby';

export interface SidebarItem {
    title: string;
    slug: string;
    to?: (Item) => string;
    items?: SidebarItem[];
}

const Index = ({ items, location }: { items: SidebarItem[]; location: any }) => {
    const prefixPath = `${__PATH_PREFIX__}`;

    return (
        <aside className={styles.wrapper}>
            <div className={styles.inner}>
                {items.map(item => {
                    // 只一级标题
                    if (!item.items || item?.items?.length === 0) {
                        const url = (item.to && item.to(item)) || item.slug;
                        const isCurrent = prefixPath
                            ? location.pathname === `${prefixPath}${url}`
                            : location.pathname === url;

                        return (
                            <Link
                                to={item.slug}
                                key={item.title}
                                className={`${styles.h1} ${styles.oh} ${isCurrent ? styles.current : ''}`}
                            >
                                {item.title}
                            </Link>
                        );
                    }

                    // 二级标题
                    if (item?.items?.length > 0) {
                        const { title, items } = item;

                        return (
                            <div key={item.title}>
                                <div className={styles.h1}>{title}</div>
                                <ul>
                                    {items.map(item => {
                                        const url = (item.to && item.to(item)) || item.slug;
                                        const isCurrent = prefixPath
                                            ? location.pathname === `${prefixPath}${url}`
                                            : location.pathname === url;

                                        return (
                                            <li
                                                key={item.slug}
                                                className={`${styles.h2} ${isCurrent ? styles.current : ''}`}
                                            >
                                                <Link to={item.slug}>
                                                    <span>{item.title}</span>
                                                </Link>
                                            </li>
                                        );
                                    })}
                                </ul>
                                <hr />
                            </div>
                        );
                    }
                })}
            </div>
        </aside>
    );
};

export default Index;
