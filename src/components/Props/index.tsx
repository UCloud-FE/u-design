import React from 'react';
import Highlight, { Prism, PrismTheme } from 'prism-react-renderer';
import nightOwlLight from 'prism-react-renderer/themes/nightOwlLight';
import { propsCls, propsTableCls, propsTableDeprecatedCls, propsTableDescTagTitleCls, propsTableWrapCls } from './cls';
import ErrorBoundary from '../ErrorBoundary';

const highlightCode = (code, language) =>
    code ? (
        <Highlight Prism={Prism} code={code} theme={nightOwlLight as PrismTheme} language={language}>
            {({ tokens, getLineProps, getTokenProps }) => (
                <>
                    {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </>
            )}
        </Highlight>
    ) : null;

const Type = prop => {
    const { tsType, type } = prop;
    const res = (() => {
        if (tsType) {
            switch (tsType.name) {
                case 'signature':
                case 'union':
                case 'Array':
                    return highlightCode(tsType.raw, 'typescript');
                case 'literal':
                    return highlightCode(tsType.value, 'typescript');
                default:
                    return tsType.name;
            }
        }
        return highlightCode(type?.name, 'javascript');
    })();
    return res || '';
};

const Description = prop => {
    const { description } = prop;
    return (
        <>
            <div>{description?.description}</div>
            {description?.tags?.map((tag, i) => (
                <div key={i}>
                    <div className={propsTableDescTagTitleCls}>@{tag.title}</div>
                    {tag.description}
                </div>
            ))}
        </>
    );
};

const RootDescription = prop => {
    const { description } = prop;
    const deprecatedStyle = {
        color: '#f44336',
        fontWeight: 'bold',
    };

    return (
        <div style={{ paddingBottom: 16 }}>
            <div>{description?.description}</div>
            {description?.tags?.map((tag, i) => {
                const style = tag.title === 'deprecated' ? deprecatedStyle : {};

                return (
                    <div key={i} style={style}>
                        {tag.title} : {tag.description}
                    </div>
                );
            })}
        </div>
    );
};

const getTags = (description): { deprecated?: true; ignore?: true } => {
    const tags = {};
    description?.tags?.forEach(tag => {
        tags[tag.title] = true;
    });
    return tags;
};

const Props = ({ name, subName }: { name: string; subName?: string }) => {
    const componentInfo = require(`../../../recodo/${name}.info.json`);
    const info = componentInfo?.[subName || name]?.info;
    const description = info?.description;
    const props = info?.props || {};
    const propKeys = Object.keys(props);

    if (!propKeys.length) return null;

    return (
        <ErrorBoundary>
            {description && <RootDescription description={description} />}
            <div className={propsCls}>
                <div className={propsTableWrapCls}>
                    <table className={propsTableCls}>
                        <colgroup>
                            <col style={{ width: '100px' }} />
                            <col style={{ width: '200px' }} />
                            <col style={{ width: '80px' }} />
                            <col style={{ width: '80px' }} />
                            <col />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>Prop Name</th>
                                <th>Type</th>
                                <th>Required</th>
                                <th>Default</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {propKeys.map(key => {
                                const prop = props[key];
                                const { required, defaultValue, description } = prop;
                                const tags = getTags(description);
                                if (tags.ignore) return null;
                                return (
                                    <tr key={key} className={tags.deprecated ? propsTableDeprecatedCls : ''}>
                                        <td>{key}</td>
                                        <td>
                                            <Type {...prop} />
                                        </td>
                                        <td>{required ? 'required' : ''}</td>
                                        <td>{defaultValue?.value}</td>
                                        <td>
                                            <Description {...prop} />
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </ErrorBoundary>
    );
};

export default Props;
