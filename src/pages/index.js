import * as React from 'react';
import { Link } from 'gatsby';
import Seo from '../components/seo';
import Footer from '../components/Footer';
import Banner from "../images/index-banner.png"
import * as styles from './index.module.scss';

const Index = ({ location }) => {
    return (
        <div className={styles.w}>
            <div className={styles.c}>
                <Seo title="首页" />
                <h2>高效、清晰、一致的<br />企业级中后台设计系统</h2>
                <p>
                        由 UCloud 前端与 UED 团队设计、开发并维护，一款企业级中后台设计体系，服务 UCloud 云计算业务，帮助团队更高效的工作。
                    </p>

                <div className={styles.actions}>
                    <Link className={styles.start} to="/component/category/all" itemProp="url">
                        开始使用
                    </Link>
                    
                    <a href="https://github.com/UCloud-FE/react-components" className={styles.github}>Github</a>
                </div>
                <img className={styles.banner} src={Banner} alt="Banner" />
            </div>
            <Footer />
        </div>
    );
};

export default Index;
