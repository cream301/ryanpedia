// sort function for sections based on order set in each markdown file
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
// called by sortNav-- recursive function that takes flat array and turns it into a nested one
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
// sorts navigation links, initial creates an array with navigation link that indicates depth, then calls nestedArrays to turn into a nested array
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

// initial function to properly parse data, sorts navigation links and sections
export function handleData(data) {
  const title = data.site.siteMetadata.title;
  const wikiLogo = data.wikiLogo;
  const probox = data.site.siteMetadata.probox;
  const headshot = data.headShot;
  const contentLinks = [];
  let titleBody = '';
  const sections = [];
  data.allMarkdownRemark.edges.forEach((edge) => {
    if (edge.node.frontmatter.type === 'titleBody') {
      titleBody = edge.node.html;
    } else if (edge.node.frontmatter.type === 'section') {
      sections.push(edge);
      edge.node.headings.forEach((heading) => {
        contentLinks.push(heading);
      });
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
