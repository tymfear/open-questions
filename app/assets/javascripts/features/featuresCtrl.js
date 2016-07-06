my_app.controller('FeaturesCtrl', [
    '$scope',
    'features',
    function ($scope, features) {
        $scope.features = features.features;
    }]);
