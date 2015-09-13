angular.module('current.directives', [])


.directive('currentSummary', function($timeout, $filter) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/current-summary.html',
    scope: true,
    link: function($scope, $element, $attr) {
    }
  }
 })


.directive('currentDetail', function($timeout, $filter) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/current-detail.html',
    scope: true,
    link: function($scope, $element, $attr) {
    }
  }
 })

.directive('currentTime', function($timeout, $filter) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/current-time.html',
    scope: true,
    link: function($scope, $element, $attr) {
    }
  }
 })

.directive('currentWeather', function($timeout, $filter) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/current-weather.html',
    scope: true,
    link: function($scope, $element, $attr) {
    }
  }
 })

;