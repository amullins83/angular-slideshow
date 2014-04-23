slideShow = angular.module("slideShow", ['ng', 'ngSanitize'])

slideShow.service "slides",
  ($http)->
    slides = []
    $http.get("data/slides.json").success(
      (data)->
        data.forEach (slide)->
          slides.push
              active: false
              title:  slide.title
              uri:    slide.uri
    
    return slides

slideShow.controller "slideCtrl", ($scope, slides) ->
  $scope.slideSource = slides
  $scope.activeSlide = 0
  
  $scope.jumpTo = (i) ->
    if i >= 0 and i < $scope.slideSource.length
      $scope.activeSlide = i
      $scope.refresh()
  
  $scope.up = ->
    $scope.activeSlide += 1
    $scope.activeSlide %= $scope.slideSource.length
    $scope.refresh()
  
  $scope.down = ->
    if($scope.activeSlide > 0)
      $scope.activeSlide -= 1
    else
      $scope.activeSlide = $scope.slideSource.length - 1

    $scope.refresh()
  
  $scope.setActive = (index) ->
    $scope.slideSource.forEach (slide) ->
      slide.active = false
    
    if $scope.slideSource[index]
      $scope.slideSource[index].active = true
  
  $scope.refresh = ->
    $scope.setActive $scope.activeSlide

slideShow.directive "slideShow",
  ->
    restrict: 'E'
    templateUrl: "tpl/slide-show.html"
    controller: "slideCtrl"


slideShow.directive "slide",
  ->
    restrict: 'E'
    scope:
        slideContent: "="
    transclude: true
    templateUrl: "tpl/slide.html"
    controller: "slideCtrl"
    link: ($scope) ->
        $scope.refresh()
