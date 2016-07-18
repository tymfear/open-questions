my_app.controller('FeaturesCtrl', [
  '$scope',
  'features',
  'Auth',
  '$state',
  function ($scope, features, Auth, $state) {
    $scope.features = features.features;
    $scope.sign_out = Auth.logout;



    $scope.$on('devise:logout', function (e, user){
      $scope.user = {};
      $state.go('sign_in')
    });
  }]);
