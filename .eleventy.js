const htmlmin = require("html-minifier");

const now = String(Date.now());

module.exports = function (eleventyConfig) {
  // Allows tailwind to build before restarting
  eleventyConfig.setWatchThrottleWaitTime(1000);

  eleventyConfig.addWatchTarget("./styles/tailwind.config.js");
  eleventyConfig.addWatchTarget("./styles/tailwind.css");

  if (process.env.ELEVENTY_PRODUCTION) {
    eleventyConfig.addPassthroughCopy("images");
  }
  eleventyConfig.addPassthroughCopy("js");

  eleventyConfig.addShortcode("version", function () {
    return now;
  });

  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_PRODUCTION &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });
};
