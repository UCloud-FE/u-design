const components = require('@ucloud-fe/react-components');
// const components = {};

// function importAll(r) {
//     r.keys().forEach(key => {
//         const name = key.replace(/(^\.\/)|(\/index\.(j|t)sx$)/g, '');
//         const all = r(key);
//         const component = all.default;
//         components[name] = Object.assign(component, all);
//     });
// }

// importAll(require.context('./src/components/', true, /^\.\/[A-Za-z]+\/index\.(j|t)sx$/));

module.exports = components;
