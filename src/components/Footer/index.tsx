import * as React from 'react';
import * as styles from './styles.module.scss';

const Index = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <div>
                    <h2>UCloud</h2>
                    <ul>
                        <li>
                            <a href="https://www.ucloud.cn" target="_blank">
                                UCloud 官网
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.ucloud.cn" target="_blank">
                                UCloud 文档中心
                            </a>
                        </li>
                        <li>
                            <a href="https://console.ucloud.cn" target="_blank">
                                UCloud 控制台
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2>社区</h2>
                    <ul>
                        <li>
                            <a href="https://github.com/UCloud-FE/react-components" target="_blank">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.bottom}>© {new Date().getFullYear()}, UCloud</div>
        </footer>
    );
};

export default Index;
