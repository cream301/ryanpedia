export function sortSections(a, b) {
  const sec1 = parseInt(a.node.frontmatter.num, 10);
  const sec2 = parseInt(b.node.frontmatter.num, 10);
  let comparison = 0;
  if (sec1 > sec2) {
    comparison = 1;
  } else if (sec1 < sec2) {
    comparison = -1;
  }
  return comparison;
}
export function nestedArrays(array, index) {
  const nest = [];
  let i = index;
  while (i < array.length) {
    if (array[i] === 1) {
      const temp = nestedArrays(array, i + 1);
      nest.push(temp.nest);
      i = temp.i;
    } else if (array[i] === -1) {
      return { nest, i: i + 1 };
    } else {
      nest.push(array[i]);
      i++;
    }
  }
  return { nest, i };
}
export function sortNav(contentLinks) {
  const navOrder = [];
  let currentDepth = 1;
  contentLinks.forEach((link) => {
    if (link.depth == currentDepth) {
      navOrder.push(String(link.value));
      currentDepth = link.depth;
    } else if (link.depth > currentDepth) {
      navOrder.push(1);
      navOrder.push(String(link.value));
      currentDepth = link.depth;
    } else if (link.depth < currentDepth) {
      const levelsOut = currentDepth - link.depth;
      for (let i = 0; i < levelsOut; i++) {
        navOrder.push(-1);
      }
      currentDepth = link.depth;
      navOrder.push(String(link.value));
    }
  });
  if (contentLinks[contentLinks.length - 1].depth > 1) {
    const levelsOut = contentLinks[contentLinks.length - 1].depth - 1;
    for (let i = 0; i < levelsOut; i++) {
      navOrder.push(-1);
    }
  } else { navOrder.push(-1); }

  return nestedArrays(navOrder, 0).nest;
}

export function handleData(data) {
  const title = data.site.siteMetadata.title;
  const wikiLogo = data.wikiLogo;
  const probox = data.site.siteMetadata.probox;
  const headshot = data.headShot;
  const contentLinks = [];
  let titleBody = '';
  const sections = [];
  data.allMarkdownRemark.edges.forEach((edge) => {
    if (edge.node.frontmatter.type === 'contentLinks') {
      edge.node.headings.forEach((heading) => {
        contentLinks.push(heading);
      });
    } else if (edge.node.frontmatter.type === 'titleBody') {
      titleBody = edge.node.html;
    } else if (edge.node.frontmatter.type === 'section') {
      sections.push(edge);
    }
  });
  return {
    title,
    wikiLogo,
    headshot,
    probox,
    contentLinks: sortNav(contentLinks),
    titleBody,
    sections: sections.sort(sortSections),
  };
}
