var MarkdownIt = require('markdown-it');
var HTMLParser = require('node-html-parser');
var postcss = require('postcss');
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes = "100vw") {

    let metadata = await Image(src, {
        widths: [375, 500, 701, 900, 1100, 1300, 1500, 1804],
        formats: ["png"],
        urlPath: "assets/uploads/",
        outputDir: "_site/assets/uploads/"
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
    };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
    return Image.generateHTML(metadata, imageAttributes, {
        whitespaceMode: "inline"
    });
}

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("admin");
    eleventyConfig.addPassthroughCopy("posts");
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

    md = new MarkdownIt();
    let markdownIt = require("markdown-it");
    let options = {
        html: true,
        breaks: true,
        linkify: true
    };

    eleventyConfig.setLibrary("md", markdownIt(options));
    eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);


    eleventyConfig.addFilter('log', value => {
        console.log(value)
    })

    eleventyConfig.addFilter("postcss",
        code => {
        return postcss([
            // PostCSS plugins
            require("autoprefixer"),
        ]).process(
            code).css
    });

    eleventyConfig.addCollection("navLinks", function(collectionApi) {
        let sections = collectionApi.getFilteredByTag("section");
        let navLink = [];

        sections.sort(function (a, b) {
            return a.template.frontMatter.data.num - b.template.frontMatter.data.num
          }).forEach((section) => {
            let htmlString = md.render(section.template.frontMatter.content);
            const domText = HTMLParser.parse(htmlString);
            const headers = domText.querySelectorAll('h1, h2');
            let subLink = [];
            
            headers.forEach((header) => {
                if(header.rawTagName === 'h1') {
                    navLink.push(header.innerText);
                } else if(header.rawTagName === 'h2') {
                    subLink.push(header.innerText);
                }
            });

            if(subLink.length > 0) {
                navLink.push(subLink);
            }
        });

        return navLink
    });

    eleventyConfig.addCollection("sectionContent", function(collectionApi) {
        let sections = collectionApi.getFilteredByTag("section");

        return sections.sort(function (a, b) {
            return a.template.frontMatter.data.num - b.template.frontMatter.data.num
        })/*.map((section) => {
            let htmlString = md.render(section.template.frontMatter.content);
            const domText = HTMLParser.parse(htmlString);
            //put proper id's on h1s
            for (let i = 0; i < domText.querySelectorAll('h1').length; i++) {
                domText.querySelectorAll('h1')[i].id = domText.querySelectorAll('h1')[i].innerText.split(' ').join('_');
                console.warn(domText.querySelectorAll('h1')[i].id );
            }        
            // put proper id's on h2s
            for (let i = 0; i < domText.querySelectorAll('h2').length; i++) {
                domText.querySelectorAll('h2')[i].id = domText.querySelectorAll('h2')[i].innerText.split(' ').join('_');
            }
            return `<div class="content">${domText}</div>`;
        });*/

    });

    eleventyConfig.addFilter("formatLinks", function(value) {
        content = ``;
        for(let i = 0; i < value.length; i++) {
            if(Array.isArray(value[i+1])) {
                content += `<li><button class='table-of-content-link'data-link="${value[i].split(' ').join('_')}">${value[i]}</button><ol>`
                
                value[i+1].forEach((subArray) => {
                    content += `<li><button class='table-of-content-link' data-link="${subArray.split(' ').join('_')}">${subArray}</button></li>`;
                });
                
                content+=`</ol></li>`;
                
                i++;
            } else {
                content += `<li><button class='table-of-content-link' data-link="${value[i].split(' ').join('_')}">${value[i]}</button></li>`
            }
        }

        return content;
    });

};