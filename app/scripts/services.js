'use strict';

angular.module('angularBlogDemoApp')
  /**
   * @ngdoc function
   * @name angularBlogDemoApp.factory:blogService
   * @description
   * # blogService
   * Factory for retrieving blog posts.
   */
  .factory('blogService', function($resource) {

    return {

      posts: $resource('/data/blog_posts.json')

    };

  });
