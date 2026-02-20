module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("mdToHtml", function (text) {
    if (!text) return "";
    text = text.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    text = text.replace(/\*(.+?)\*/g, "<em>$1</em>");
    const lines = text.split("\n");
    let html = "", inList = false;
    for (let line of lines) {
      const t = line.trim();
      if (t.startsWith("- ") || t.startsWith("* ")) {
        if (!inList) { html += "<ul>"; inList = true; }
        html += `<li>${t.slice(2)}</li>`;
      } else {
        if (inList) { html += "</ul>"; inList = false; }
        if (t) html += `<p>${t}</p>`;
      }
    }
    if (inList) html += "</ul>";
    return html;
  });

  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("*.jpg");
  eleventyConfig.addPassthroughCopy("*.png");
  eleventyConfig.addPassthroughCopy("*.webp");
  eleventyConfig.addWatchTarget("./_data/");

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
  };
};
