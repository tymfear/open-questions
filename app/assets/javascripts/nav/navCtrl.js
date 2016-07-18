my_app.controller('NavCtrl', [
  '$scope',
  'Auth',
  function ($scope, Auth) {
    $scope.signedIn = Auth.isAuthenticated;
    $scope.sign_out = Auth.logout;

    Auth.currentUser().then(function (user){
      $scope.user = user;
      console.log($scope.user)
    });

    $scope.$on('devise:logout', function (e, user){
      $scope.user = {};
    });
  }]);
