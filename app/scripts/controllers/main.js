'use strict';

/**
 * @ngdoc function
 * @name polhydroApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the polhydroApp
 */
angular.module('polhydroApp')
  .controller('MainCtrl', function ($scope) {
        $scope.todos = [];
        $scope.addTodo = function () {
            $scope.todos.push($scope.todo);
            $scope.todo = '';
        };
        $scope.removeTodo = function (index) {
            $scope.todos.splice(index, 1);
        };
  });
