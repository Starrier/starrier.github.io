// A local search script with the help of [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search)
// Copyright (C) 2017
// Liam Huang <http://github.com/Liam0205>
// This library is free software; you can redistribute it and/or modify
// it under the terms of the GNU Lesser General Public License as
// published by the Free Software Foundation; either version 2.1 of the
// License, or (at your option) any later version.

var searchFunc = function (path, search_id, content_id) {
  'use strict';
  var $input = document.getElementById(search_id);
  var $resultContent = document.getElementById(content_id);

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function highlight(text, keywords) {
    var result = escapeHtml(text);
    keywords.forEach(function (keyword) {
      if (!keyword) return;
      var regS = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
      result = result.replace(regS, function (match) {
        return '<span class="search-keyword">' + match + '</span>';
      });
    });
    return result;
  }

  function cleanBody(content, title) {
    var text = (content || '').replace(/\s+/g, ' ').trim();
    if (title && text.indexOf(title) === 0) {
      text = text.slice(title.length).trim();
    }
    return text
      .replace(/原文地址：\s*/g, '')
      .replace(/原文作者：\s*/g, '')
      .replace(/本文永久链接：\s*/g, '')
      .replace(/特别说明当前文章内容迁移中，如有问题，请提交 issues 谢谢~~/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function snippetAround(text, keyword, radius) {
    var index = text.toLowerCase().indexOf(keyword);
    if (index < 0) {
      return text.slice(0, radius * 2);
    }
    var start = Math.max(0, index - radius);
    var end = Math.min(text.length, index + keyword.length + radius);
    var slice = text.slice(start, end);
    if (start > 0) slice = '...' + slice;
    if (end < text.length) slice = slice + '...';
    return slice;
  }

  $.ajax({
    url: path,
    dataType: 'json',
    success: function (datas) {
      $resultContent.innerHTML = '';

      $input.addEventListener('input', function () {
        var keywords = this.value.trim().toLowerCase().split(/[\s\-]+/).filter(Boolean);
        $resultContent.innerHTML = '';
        if (!keywords.length) {
          return;
        }

        var str = '<ul class="search-result-list">';
        var hasResult = false;

        datas.forEach(function (data) {
          var title = (data.title || 'Untitled').trim();
          var excerpt = (data.excerpt || '').trim();
          var tags = data.tags || [];
          var url = (data.url || '').trim();
          var body = cleanBody(data.content || '', title);
          var haystack = (title + ' ' + tags.join(' ') + ' ' + excerpt + ' ' + body).toLowerCase();
          var isMatch = keywords.every(function (keyword) {
            return haystack.indexOf(keyword) >= 0;
          });

          if (!isMatch || !url) {
            return;
          }

          hasResult = true;
          var tagHtml = tags.map(function (tag) {
            return '<span class="search-result-tag">' + highlight(tag, keywords) + '</span>';
          }).join('');
          var snippetSource = body || excerpt;
          var snippet = snippetAround(snippetSource, keywords[0], 42);

          str += '<li><a class="search-result-item" href="' + escapeHtml(url) + '">';
          str += '<div class="search-result-head">';
          str += '<div class="search-result-title">' + highlight(title, keywords) + '</div>';
          str += '<span class="search-result-go" aria-hidden="true"><i class="fa fa-hand-pointer-o"></i></span>';
          str += '</div>';
          if (tagHtml) {
            str += '<div class="search-result-tags">' + tagHtml + '</div>';
          }
          if (excerpt) {
            str += '<p class="search-result-excerpt">' + highlight(excerpt, keywords) + '</p>';
          }
          if (snippet) {
            str += '<p class="search-result-content">' + highlight(snippet, keywords) + '</p>';
          }
          str += '</a></li>';
        });

        str += '</ul>';
        if (!hasResult) {
          $resultContent.innerHTML = '<ul><span class="local-search-empty">没有找到内容，请尝试更换检索词。</span></ul>';
          return;
        }
        $resultContent.innerHTML = str;
      });
    }
  });
};

var getSearchFile = function (path) {
  searchFunc(path, 'local-search-input', 'local-search-result');
};
