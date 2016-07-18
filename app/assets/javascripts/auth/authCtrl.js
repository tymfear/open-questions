my_app.controller('AuthCtrl', [
    '$scope', 'Auth', '$state', 'Notification',
    function ($scope, Auth, $state, Notification) {
        $scope.signedIn = Auth.isAuthenticated;

        Auth.currentUser().then(function (user) {
            $scope.user = user;
        });

        $scope.$on('devise:new-registration', function (e, user) {
            $scope.user = user;
        });

        $scope.$on('devise:login', function (e, user) {
            $scope.user = user;
        });

        $scope.sign_in = function () {
            Auth.login($scope.user).then(
                function () {
                    $state.go('features');
                    Notification.success({message: 'Welcome back!'});
                }, function (response) {
                    Notification.error({message: response.data.error});
                });
        };

        $scope.sign_up = function () {
            Auth.register($scope.user).then(
                function () {
                    $state.go('features');
                    Notification.success({message: 'Congrats! Signed up successfully!'});
                }, function (response) {
                    for(var error in response.data.errors){
                        Notification.error({message: error + ' ' + response.data.errors[error]});
                    }
                });
        };
    }]);
