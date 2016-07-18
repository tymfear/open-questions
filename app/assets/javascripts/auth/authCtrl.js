my_app.controller('AuthCtrl', [
  '$scope', 'Auth', '$state',
  function ($scope, Auth, $state) {
    $scope.signedIn = Auth.isAuthenticated;
    $scope.sign_out = Auth.logout;

    Auth.currentUser().then(function (user){
      $scope.user = user;
    });

    $scope.$on('devise:new-registration', function (e, user){
      $scope.user = user;
    });

    $scope.$on('devise:login', function (e, user){
      $scope.user = user;
    });

    $scope.$on('devise:logout', function (e, user){
      $scope.user = {};
      $state.go('sign_in')
    });

    $scope.sign_in = function() {
      Auth.login($scope.user).then(function(){
        $state.go('features');
      });
    };

    $scope.sign_up = function() {
      Auth.register($scope.user).then(function(){
        $state.go('features');
      });
    };
  }]);
