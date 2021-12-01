import * as React from 'react';
import * as styles from './styles.module.scss';

const Index = () => {
    return (
        <footer className={styles.w}>
            <div className={styles.c}>
                <div className={styles.top}>
                    <div className={styles.logo}>
                        U Design
                    </div>
                    <ul className={styles.links}>
                        <li>
                            <a href="#" target="_blank">
                                设计原则
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                组件索引
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                主题定制工作
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/UCloud-FE/react-components" target="_blank">
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.bottom}>Copyright © {new Date().getFullYear()} UCloud优刻得科技股份有限公司</div>
            </div>

        </footer>
    );
};

export default Index;
