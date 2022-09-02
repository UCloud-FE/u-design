export default (rawCode)=>{
    let demoStartIndex = rawCode.match(/\/\/\s*demo\s*start\s*/);
    demoStartIndex = demoStartIndex ? demoStartIndex.index + demoStartIndex[0].length : undefined;
    let demoEndIndex = rawCode.match(/\/\/\s*demo\s*end\s*/);
    demoEndIndex = demoEndIndex ? demoEndIndex.index : undefined;

    return rawCode.slice(demoStartIndex, demoEndIndex);
    // .replace(/require\((?:'|")(\..*)(?:'|")\)/g, (match, filePath, offset, string) => {
    //     // replace all required relative file path
    //     filePath = './' + path.join(`./${demoPath}/`, filePath);
    //     return `require('${filePath}')`;
    // }) 
    // + '\nexport default Demo;'; // add demo
}