'use strict';

angular.module('angularBlogDemoApp')
  /**
   * @ngdoc function
   * @name angularBlogDemoApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Primary Controller of the angularBlogDemoApp
   */
  .controller('MainCtrl', function (blogService) {

    this.posts = blogService.posts.query() || [];

    this.addPost = function() {
      this.form.postedOn = Date.now();
      this.posts.push(this.form);
      this.form = null;
    };

    this.getTimestamp = function() {
      return Date.now();
    };

  });
