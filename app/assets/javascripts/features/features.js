my_app.service('features', ['$http', 'Notification', '$state', function ($http, Notification, $state) {
  var self = this;
  self.features = [];
  self.feature = {};

  self.getAll = function () {
    return $http.get('/features.json').success(function (data) {
      self.features = data;
    });

  };

  self.get = function (id) {
    return $http.get('/features/' + id + '.json').then(function (response) {
      self.feature = response.data;
    });
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

  self.update = function(feature){
    return $http.patch('/features.json', feature)
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
}]);
