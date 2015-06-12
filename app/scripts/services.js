'use strict';

angular.module('angularBlogDemoApp')

  .factory('blogService', function($resource) {

    return {

      posts: $resource('/data/blog_posts.json')

    };

  });
