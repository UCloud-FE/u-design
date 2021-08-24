import React, { Key, ReactNode, useContext, useMemo } from 'react';

import SelectContext from './SelectContext';
import { OptionWrap } from './style';

export interface OptionProps {
    /** 值，会被用作 key */
    value?: Key;
    /** 是否禁用 */
    disabled?: boolean;
    /**
     * tooltip 提示，可以为文本或 node，也可以是 tooltip 的 props object
     */
    tooltip?: ReactNode | any;
    children?: ReactNode;
}

const Option = ({ value = '', children, ...rest }: OptionProps) => {
    const { handleSearch, searchValue } = useContext(SelectContext);
    const visible = useMemo(
        () =>
            handleSearch(value, {
                value,
                children
            }),
        // change when searchValue change
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [children, handleSearch, value, searchValue]
    );
    return (
        <OptionWrap hidden={!visible} {...rest} itemKey={value}>
            {children}
        </OptionWrap>
    );
};

Option.isMenuItem = true;

export default Option;
