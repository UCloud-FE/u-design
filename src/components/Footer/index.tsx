import * as React from 'react';
import * as styles from './styles.module.scss';

const Index = () => {
    return <footer className={styles.footer}>© {new Date().getFullYear()}, UCloud</footer>;
};

export default Index;
