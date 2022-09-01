import React from 'react';
import PropTypes from 'prop-types';

import { SubAreaWrap, titleCls, subAreaContentCls } from './style';

const SubArea = ({ title, children, ...rest }) => {
    return (
        <SubAreaWrap {...rest}>
            <div className={titleCls}>{title}</div>
            <div className={subAreaContentCls}>{children}</div>
        </SubAreaWrap>
    );
};
SubArea.propTypes = {
    /** 标题 */
    title: PropTypes.node,
    /** @ignore */
    children: PropTypes.node
};

export default React.memo(SubArea);
