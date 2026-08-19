'use strict';

function stripHtml(html) {
  return String(html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

hexo.extend.generator.register('local_search_json', function (locals) {
  const root = this.config.root || '/';
  const posts = locals.posts.sort('-date').toArray().map(function (post) {
    return {
      title: post.title || '',
      url: root.replace(/\/?$/, '/') + String(post.path || '').replace(/^\//, ''),
      tags: post.tags ? post.tags.map(function (tag) { return tag.name; }) : [],
      excerpt: stripHtml(post.excerpt || post.description || ''),
      content: stripHtml(post.content || '')
    };
  });

  return {
    path: 'search.json',
    data: JSON.stringify(posts)
  };
});
