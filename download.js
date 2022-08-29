const fs = require('fs');
const fse = require('fs-extra');
const axios = require('axios');

const docsDir = 'content/component/api-docs';
const components = require('./content/components.json');

if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir);
}

async function getMarkdownFromGithub() {
    const [{ data: readmePage }, { data: developPage }, { data: changeLogPage }] = await Promise.all([
        axios('https://raw.githubusercontent.com/UCloud-FE/react-components/master/README.md'),
        axios('https://raw.githubusercontent.com/UCloud-FE/react-components/master/DEVELOP.md'),
        axios('https://raw.githubusercontent.com/UCloud-FE/react-components/master/CHANGELOG.md'),
    ]);

    fs.writeFileSync('content/docs/readme.md', readmePage);
    fs.writeFileSync('content/docs/develop.md', developPage);
    fs.writeFileSync('content/docs/changelog.md', changeLogPage);

    console.log('download done.');
}

function parseComponents() {
    components.forEach(component => {
        const componentDoc = require(`./recodo/${component.name}.doc.json`);

        for (const subComponentName in componentDoc) {
            const subComponent = componentDoc[subComponentName];

            const dir = `${docsDir}/${component.name}`;
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }

            if (subComponentName !== 'README') {
                fs.writeFileSync(
                    `${dir}/${subComponentName}.md`,
                    `## ${subComponentName}\n\n### Props\n\n\`\`\`js {"props": "${subComponentName}"}\n\`\`\`\n\n` +
                        subComponent.info,
                );
            }

            fse.copySync(`react-components/src/components/${component.name}/__demo__`, `${dir}/__demo__`);

            fs.readdirSync(__dirname + `/${dir}/__demo__`).forEach(file => {
                let rawCode = fs.readFileSync(`${dir}/__demo__/${file}`, { encoding: 'utf8' });
                let demoCode = rawCode.replace(/src\//g, '@ucloud-fe/react-components/lib/');
                demoCode = demoCode.replace(/shared\//g, '../../../../../react-components/shared/');
                demoCode = demoCode.replace(/..\/..\/..\/..\/index/g, '../../../../../src/allComponents.js');
                fs.writeFileSync(`${dir}/__demo__/${file}`, demoCode);
            });
        }
    });
}

try {
    getMarkdownFromGithub();
    parseComponents();
} catch (e) {
    console.error(e);
    process.exit(1);
}
