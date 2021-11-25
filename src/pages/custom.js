import React, { useEffect } from 'react';
import Seo from '../components/seo';

const Index = ({ location }) => {
    useEffect(() => {
        const destroy = window['react-components-docs'].renderDesignTokenEditor(document.getElementById('custome-dt'));
    }, []);

    return (
        <div style={{ overflow: "auto", width:"100%"  }}>
            <Seo title="定制" />
            <div id="custome-dt" style={{ maxWidth: 1100, margin: "0 auto", marginTop: 48 }}>
            </div>
        </div>
    );
};

export default Index;
