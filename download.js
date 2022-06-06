const fs = require('fs');
const axios = require('axios');

async function getMarkdownFromGithub(){
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

try {
    getMarkdownFromGithub();
} catch(e){
    console.error(e);
}
