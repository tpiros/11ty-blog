module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('css');
  eleventyConfig.addPassthroughCopy('img');
  eleventyConfig.addPassthroughCopy('js');
  eleventyConfig.addPassthroughCopy('vendor');
  eleventyConfig.addPassthroughCopy('admin');

  eleventyConfig.addHandlebarsHelper('formatDate', value => {
    const ISOcode = 'en-GB';
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const d = new Date(value);
    return `${d.toLocaleDateString(ISOcode, options)}`;
  });

  eleventyConfig.addHandlebarsHelper('reverseByDate', data => {
    data.sort((a,b) => {
      return new Date(b.date) - new Date(a.date);
    });
  });

  eleventyConfig.addLayoutAlias('post', 'layouts/post.hbs');
  
};