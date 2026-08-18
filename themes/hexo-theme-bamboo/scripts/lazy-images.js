'use strict';

hexo.extend.filter.register('after_post_render', function (data) {
  if (!data.content) {
    return data;
  }
  data.content = data.content.replace(/<img\b([^>]*)>/gi, function (match, attrs) {
    if (/\bloading\s*=/i.test(attrs)) {
      return match;
    }
    var extra = ' loading="lazy" decoding="async"';
    if (/\s\/\s*>$/.test(match) || /\/\s*>$/.test(match)) {
      return '<img' + attrs.replace(/\s*\/\s*>$/, extra + ' />');
    }
    return '<img' + attrs.replace(/>$/, extra + '>');
  });
  return data;
});
