my_app.controller('NavCtrl', [
  '$scope', 'Auth', '$state',
  function ($scope, Auth, $state) {
    $scope.signedIn = Auth.isAuthenticated;
    $scope.sign_out = Auth.logout;

    Auth.currentUser().then(function (user){
      $scope.user = user;
    });

    $scope.$on('devise:logout', function (e, user){
      $scope.user = {};
      $state.go('sign_in')
    });
  }]);
