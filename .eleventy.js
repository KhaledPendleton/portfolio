const sortByDisplayOrder = require('./src/utils/sort-by-display-order');

module.exports = (config) => {
    config.addPassthroughCopy('./src/images/');

    // Returns work items, sorted by display order
    config.addCollection('work', (collection) => {
        return sortByDisplayOrder(collection.getFilteredByGlob('./src/work/*.md'));
    });

    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'dist'
        }
    };
}