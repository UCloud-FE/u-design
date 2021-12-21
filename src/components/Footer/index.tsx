import * as React from 'react';
import UDesign from "../../images/u-design.png";
import * as styles from './styles.module.scss';

const Index = () => {
    return (
        <footer className={styles.w}>
            <div className={styles.c}>
                <div className={styles.top}>
                    <div className={styles.logo}>
                        <img src={UDesign} alt="logo" />
                    </div>
                    <ul className={styles.links}>
                        <li>
                            <a href="https://github.com/UCloud-FE/react-components" target="_blank">
                                Github
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.bottom}>Copyright © 2021-{new Date().getFullYear()} UCloud 优刻得科技股份有限公司</div>
            </div>

        </footer>
    );
};

export default Index;
