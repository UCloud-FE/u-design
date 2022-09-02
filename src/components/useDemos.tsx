import { graphql, useStaticQuery } from "gatsby";

const useDemos = ()=>{
    const demos = useStaticQuery(graphql`
        query {
            allFile(
                filter: {sourceInstanceName: {eq: "content"}, 
                relativePath: {glob: "**/__demo__/*.jsx"}}
              ) {
                edges {
                  node {
                    relativePath
                    fields {
                      content
                    }
                    name
                  }
                }
              }
        }
    `)
    const edges = demos.allFile.edges;
    const demosMap = {};
    edges.forEach((item)=>{
        const node = item.node;
        const componentName = node.relativePath.split('/')[2];
        demosMap[componentName] = demosMap[componentName] || {};
        demosMap[componentName][node.name] = node.fields.content;
    })


    return demosMap;
}

export default useDemos;