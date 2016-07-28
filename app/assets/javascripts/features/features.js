my_app.service('features', ['$http', 'Notification', '$state', '$stateParams',
  function ($http, Notification, $state, $stateParams) {
    var self = this;
    self.features = [];

    self.getAll = function () {
      return $http.get('/features.json').success(function (data) {
        self.features = data;
      });

    };

    self.get = function (id) {
      return $http.get('/features/' + id + '.json')
    };

    self.create = function (feature) {
      return $http.post('/features.json', feature)
        .then(
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

    self.update = function (feature) {
      return $http.put('/features/' + $stateParams.id + '.json', feature);
    };
  }]);
