my_app.controller('EditFeatureCtrl', [
  '$scope', 'features', 'Auth', '$state', '$stateParams', 'Notification',
  function ($scope, features, Auth, $state, $stateParams, Notification) {
    $scope.feature_id = $stateParams.id;

    features.get($stateParams.id).then(function (response) {
      $scope.f = response.data
    });

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
      }).then(
        function (response) {
          Notification.success({message: response.data.notice});
          $state.go('feature', {id: response.data.id});
        },
        function (response) {
          for (var error in response.data) {
            Notification.error({message: response.data[error].toString()});
          }
        });
    };
  }]);
