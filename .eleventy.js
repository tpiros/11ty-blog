module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('vendor');
  eleventyConfig.addPassthroughCopy('admin');

  eleventyConfig.addHandlebarsHelper('formatDate', value => {
    const d = new Date(value);
    return `${d.toLocaleDateString()}`;
  });

  eleventyConfig.addHandlebarsHelper('reverseByDate', data => {
    data.sort((a,b) => {
      return new Date(b.date) - new Date(a.date);
    });
  });

  eleventyConfig.addLayoutAlias('post', 'layouts/post.hbs');

  return {
    pathPrefix: '/',
    markdownTemplatEngine: 'liquid',
    htmlTemplateEngine: 'hbs',
    dataTemplateEngine: 'hbs',
    passthroughFileCopy: true,
    dir: {
      input: '.',
      includes: '_includes',
      output: '_site'
    }
  };

  
};