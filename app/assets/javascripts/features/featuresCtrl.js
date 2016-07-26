my_app.controller('FeaturesCtrl', [
  '$scope', 'features', 'Auth', '$state',
  function ($scope, features, Auth, $state) {
    $scope.feature = features.feature;
    $scope.features = features.features;
    $scope.sign_out = Auth.logout;


    console.log($scope.feature, features.feature);
    Auth.currentUser().then(function (user) {
      $scope.user = user;
    });

    $scope.showFeature = function (id) {
      $state.go('feature', {id: id})
    };

    $scope.createFeature = function () {
      features.create({
        name: $scope.f.name,
        description: $scope.f.description,
        owner: $scope.f.owner,
        user_id: $scope.user.id,
        github_id: $scope.f.github_id
      });
    }
  }]);
