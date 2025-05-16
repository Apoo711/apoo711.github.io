// eleventy.config.js
const { DateTime } = require("luxon"); // Import Luxon library for dates
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(syntaxHighlight);
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