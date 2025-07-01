const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginTOC = require('eleventy-plugin-toc');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(syntaxHighlight);

    // Add the sitemap plugin with image grabbing enabled
    eleventyConfig.addPlugin(sitemap, {
        sitemap: {
            hostname: "https://aryan-gupta.is-a.dev",
        },
        images: {
            grab: true,
            featuredImage: "image"
        }
    });

    eleventyConfig.setLibrary(
        'md',
        markdownIt({
            html: true,
            linkify: true,
            typographer: true,
        }).use(markdownItAnchor, {
            slugify: s => s.trim().toLowerCase().replace(/[\s+,.']/g, '-').replace(/[()]/g, ''),
            permalink: markdownItAnchor.permalink.ariaHidden({
                placement: 'before',
                class: 'heading-anchor-link',
                symbol: '#',
                level: [2,3,4]
            })
        })
    );

    eleventyConfig.addPlugin(pluginTOC, {
        tags: ['h2', 'h3'],
        wrapper: 'nav',
        wrapperClass: 'toc',
        ul: true,
        flat: false
    });

    eleventyConfig.addCollection("research", function(collectionApi) {
        return collectionApi.getFilteredByTag("research");
    });

    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/favicon-32x32.png");
    eleventyConfig.addPassthroughCopy("robots.txt");
    // The sitemap.xml passthrough has been removed

    eleventyConfig.addFilter("readableDate", (dateObj, format = "DD") => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat(format);
    });

    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });

    eleventyConfig.addFilter("truncate", (content, length = 150, end = "...") => {
        if (!content || typeof content !== 'string') return '';
        if (content.length <= length) return content;
        let truncated = content.substring(0, length);
        let lastSpace = truncated.lastIndexOf(' ');
        if (lastSpace > length / 2) {
            truncated = truncated.substring(0, lastSpace);
        }
        return truncated + end;
    });

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    return {
        dir: {
            input: "src",
            includes: "_includes",
            layout: "_includes/layouts/",
            output: "docs"
        },
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
};