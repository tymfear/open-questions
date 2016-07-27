my_app.controller('EditFeatureCtrl', [
  '$scope', 'features', 'Auth', '$state', '$stateParams',
  function ($scope, features, Auth, $state, $stateParams) {
    $scope.feature_id = $stateParams.id;

    features.get($stateParams.id).then(function(response){ $scope.f = response.data});
    
    features.get($stateParams.id).then(
      function (response) {
        $scope.feature = response
      }
    );

    $scope.saveFeature = function () {
      features.update({
        name: $scope.f.name,
        description: $scope.f.description,
        owner: $scope.f.owner,
        github_id: $scope.f.github_id
      });
    };
  }]);
