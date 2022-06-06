const visit = require('unist-util-visit');
const toString = require('mdast-util-to-string');
const cheerio = require(`cheerio`);

module.exports = ({ markdownAST, markdownNode }, pluginOptions) => {
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

    return markdownAST;
};
