my_app.controller('AuthCtrl', [
  '$scope', 'Auth', '$state',
  function ($scope, Auth, $state) {
    $scope.signedIn = Auth.isAuthenticated;

    Auth.currentUser().then(function (user){
      $scope.user = user;
    });

    $scope.$on('devise:new-registration', function (e, user){
      $scope.user = user;
    });

    $scope.$on('devise:login', function (e, user){
      $scope.user = user;
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
