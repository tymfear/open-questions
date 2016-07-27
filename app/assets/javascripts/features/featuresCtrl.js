my_app.controller('FeaturesCtrl', [
  '$scope', 'features', 'Auth', '$state', '$stateParams',
  function ($scope, features, Auth, $state, $stateParams) {
    $scope.features = features.features;

    features.get($stateParams.id).then(function(response){ $scope.feature = response.data});

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
  }]);
