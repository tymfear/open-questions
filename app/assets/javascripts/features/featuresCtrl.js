my_app.controller('FeaturesCtrl', [
    '$scope', 'features', 'Auth', '$state', '$stateParams', 'Notification', 'featureStatus', 'questions',
    function ($scope, features, Auth, $state, $stateParams, Notification, featureStatus, questions) {
        $scope.features = features.features;
        $scope.questions = [];

        features.get($stateParams.id)
            .then(function (response) {
                $scope.feature = response.data;
            })
            .then(function () {
                questions.getAll($stateParams.id).then(function (r) {
                    $scope.questions = r.data.questions;
                })
            });


        Auth.currentUser().then(function (user) {
            $scope.user = user;
        });
        
        $scope.saveFeature = function () {
            features.create({
                name: $scope.f.name,
                description: $scope.f.description,
                owner: $scope.f.owner,
                user_id: $scope.user.id,
                github_id: $scope.f.github_id
            });
        };

        $scope.changeFeatureStatus = function (status) {
            features.update({status: featureStatus[status]}).then(
                function (response) {
                    Notification.success({message: response.data.notice});
                    $scope.feature = response.data
                },
                function (response) {
                    for (var error in response.data) {
                        Notification.error({message: response.data[error].toString()});
                    }
                });
        };
    }]);
