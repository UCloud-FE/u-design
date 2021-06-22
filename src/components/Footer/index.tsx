import * as React from 'react';
import * as styles from './styles.module.scss';

const Index = () => {
    return (
        <footer className={styles.footer}>
            <ul>
                <li><a href="https://www.ucloud.cn" target="_blank">UCloud 官网</a></li>
                <li><a href="https://docs.ucloud.cn" target="_blank">UCloud 文档中心</a></li>
                <li><a href="https://console.ucloud.cn" target="_blank">UCloud 控制台</a></li>
            </ul>
            <div className={styles.bottom}>
                © {new Date().getFullYear()}, UCloud
            </div>
        </footer>
    )
};

export default Index;
