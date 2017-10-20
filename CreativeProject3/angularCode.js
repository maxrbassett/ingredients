

angular.module('Recipes', ['ui.router'])
.factory('postFactory', [function(){
  var o = {
    recipes: []
  };
  return o;
}])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })
      .state('recipes', {
        url: '/recipes',
        templateUrl: '/recipes.html',
        controller: 'PostCtrl'
      })
    $urlRouterProvider.otherwise('home');
}])
.controller('MainCtrl', [
'$scope',
'postFactory',
function($scope, postFactory){
  $scope.posts = postFactory.recipes;
  $scope.getRecipes = function() {
    $scope.recipes.push({title:$scope.divContent});
  };

}
])
.controller('PostCtrl', [
'$scope',
'$stateParams',
'postFactory', 
function($scope, $stateParams, postFactory){
  $scope.ingredients = $stateParams.Bid;
  $scope.addComment = function(){
    if($scope.body === '') { return; }
    $scope.post.comments.push({
      body: $scope.body,
      upvotes: 0
    });
    $scope.body = '';
  };
$scope.incrementUpvotes = function(comment){
  comment.upvotes += 1; 
};
}]);
