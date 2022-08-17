const visit = require('unist-util-visit');
const fs = require('fs');
const path = require('path');
const cheerio = require(`cheerio`);
const apiDocsDir = '/component/api-docs/';

module.exports = ({ markdownAST, markdownNode }, pluginOptions) => {
    const { fields } = markdownNode;

    // Manipulate AST
    visit(markdownAST, 'html', node => {
        if (!node.value) {
            return;
        }

        const { width, align = 'left' } = node;
        const $ = cheerio.load(node.value);
        if ($('figure.gatsby-resp-image-figure') && width) {
            node.value = `
                <div class="u-md-img-${align}">
                    <div style="max-width: ${width}px; width: ${width}px">
                        ${$(`body`).html()}
                    </div>
                </div>
            `;
        }
    });

    // handle all image nodes
    visit(markdownAST, "image", node => {
        const html = `<img src='${node.url}' alt='${node.alt}' loading='lazy' />`;
        node.type = "html" // this breaks the node type, so always use this plug in at last
        // node.children = undefined
        node.value = html
    });

    if (fields?.slug.indexOf(apiDocsDir) === 0) {
        const componentName = fields?.slug.split('/')[3];
        visit(markdownAST, 'code', (node, index, parent) => {
            try {
                if (node.meta === 'static') {
                    return;
                }

                const meta = JSON.parse(node.meta);
                if (meta?.codepath) {
                    let rawCode = fs.readFileSync(
                        `react-components/src/components/${componentName}/__demo__/${meta.codepath}`,
                        { encoding: 'utf8' },
                    );
                    let demoStartIndex = rawCode.match(/\/\/\s*demo\s*start\s*/);
                    demoStartIndex = demoStartIndex ? demoStartIndex.index + demoStartIndex[0].length : undefined;
                    let demoEndIndex = rawCode.match(/\/\/\s*demo\s*end\s*/);
                    demoEndIndex = demoEndIndex ? demoEndIndex.index : undefined;
                    let code =
                        rawCode
                            .slice(demoStartIndex, demoEndIndex)
                            .replace(/require\((?:'|")(\..*)(?:'|")\)/g, (match, filePath, offset, string) => {
                                // replace all required relative file path
                                filePath = './' + path.join(`./${demoPath}/`, filePath);
                                return `require('${filePath}')`;
                            }) + '\nexport default Demo;'; // add demo

                    node.value = code;
                    node.lang = 'jsx';
                    let demoComponentName = meta.codepath
                        .split('.')[0]
                        .replace(/^\S/, s => s.toUpperCase())
                        .replace(/-/g, '');

                    const codeNode = {
                        type: 'jsx',
                        value: `
                            <div className="demo-show"><${demoComponentName} /></div>
                        `,
                    };

                    const viewCodeBtnNode = {
                        type: 'jsx',
                        value: `<div className="demo-toolbar">
                        <div className="demo-toolbar-view-code" role="button" data-active="false" onClick={(event)=> gatsbyRemarkViewCode(event)}>VIEW CODE</div>
                        </div>`,
                    };

                    parent.children.splice(index, 0, codeNode, viewCodeBtnNode);

                    return index + 3;
                } else if (meta?.props) {
                    const subComponentName = meta?.props;
                    node.type = 'jsx';
                    node.value = `<Props name="${componentName}" subName="${subComponentName}" />`;
                }
            } catch (e) {
                console.warn('node.meta: ', node.meta);
                console.warn('node.value: ', node.value);
                console.warn('node.props: ', node.props);
            }
        });

        visit(markdownAST, `link`, (node, index, parent) => {
            if (node?.data?.hProperties['aria-label']?.indexOf('permalink') < 0) {
                return;
            }

            if (parent.type !== 'heading') {
                return;
            }

            const randomString = Math.random().toString(36).slice(-6) + index;
            const rowUrl = node?.url;
            node.url = rowUrl + randomString;

            const pData = parent.data;
            if (!pData || !pData.id) {
                return;
            }

            node.data.hProperties['aria-label'] = parent?.children[1].value;

            pData.id = pData.id + randomString;
            pData.htmlAttributes.id = pData.htmlAttributes.id + randomString;
            pData.hProperties.id = pData.hProperties.id + randomString;
        });
    }

    return markdownAST;
};
