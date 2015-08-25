'use strict';

/**
 * @ngdoc service
 * @name polhydroApp.appManager
 * @description
 * # appManager
 * Service in the polhydroApp.
 */
angular.module('polhydroApp')
  .service('appManager', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var manager = this;
    // APPLICATION STATE IS DEFINED BY THESE VARIABLES
    manager.state = {
        time: 0, // relative time stamp in hours, in relation to current time
        space: 0 // ID of a selection, be it a catchment, points, or a region
    }
  });
