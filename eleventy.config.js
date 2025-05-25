// eleventy.config.js
const { DateTime } = require("luxon"); // Import Luxon library for dates
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginTOC = require('eleventy-plugin-toc');
const markdownIt = require('markdown-it');
const markdownItAnchor = require('markdown-it-anchor');

module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(syntaxHighlight);

    // --- TOC & Anchor Plugin Configuration ---
    eleventyConfig.setLibrary(
        'md',
        markdownIt({
            html: true,
            linkify: true,
            typographer: true,
        }).use(markdownItAnchor, {
            slugify: s => s.trim().toLowerCase().replace(/[\s+,.']/g, '-').replace(/[()]/g, ''), // Ensure consistent slugification
            permalink: markdownItAnchor.permalink.ariaHidden({
                placement: 'before', // Or 'after'
                class: 'heading-anchor-link', // Optional: A class for styling the anchor link
                symbol: '#', // Optional: The symbol for the anchor link
                level: [2,3,4] // Optional: Only add permalinks to h2, h3, h4
            })
        })
    );

    eleventyConfig.addPlugin(pluginTOC, {
        tags: ['h2', 'h3'], // Which heading tags to include in the TOC, h4 can be added if needed
        wrapper: 'nav',           // What element to wrap the TOC in, e.g., 'nav'
        wrapperClass: 'toc',      // Class for the wrapper element
        ul: true,                 // Whether to use an unordered list (ul) or ordered list (ol)
        flat: false               // Whether to generate a flat list or nested list
    });


    // --- Passthrough Copy ---
    // (Keep your existing passthrough copy lines)
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/favicon-32x32.png"); // Adjust if needed

    // --- Filters ---
    // Readable Date Filter (e.g., May 5, 2025)
    eleventyConfig.addFilter("readableDate", (dateObj, format = "DD") => {
        // Luxon format tokens: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat(format);
    });

    // HTML Date String Filter (e.g., 2025-05-05)
    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });

    // Truncate Filter (for excerpts)
    eleventyConfig.addFilter("truncate", (content, length = 150, end = "...") => {
        if (!content || typeof content !== 'string') return '';
        if (content.length <= length) return content;
        let truncated = content.substring(0, length);
        let lastSpace = truncated.lastIndexOf(' ');
        if (lastSpace > length / 2) { // Only truncate at space if it's not too early
            truncated = truncated.substring(0, lastSpace);
        }
        return truncated + end;
    });

    // --- Shortcodes ---
    // Current Year Shortcode
    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    // --- Return Eleventy Options ---
    return {
        dir: {
            input: "src",
            includes: "_includes",
            layout: "_includes/layouts/", // <<< Define layouts subfolder
            output: "docs"
        },
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk"
    };
};
