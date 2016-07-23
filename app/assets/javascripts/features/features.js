my_app.service('features', ['$http', 'Notification', function ($http, Notification) {
    var self = this;
    self.features;

    self.getAll = function () {
        return $http.get('/features.json').success(function (data) {
            self.features = data;
        });

    };

    self.get = function (id) {
        return $http.get('/features/' + id + '.json').then(function (res) {
            return res.data;
        });
    };

    self.create = function (post) {
        return $http.post('/features.json', post)
            .then(function (response) {
                o.posts.push(response.data);
                Notification.success({message: response.data.notice});
            }, function (response) {
                Notification.error({message: response.data.error});
            });
    };
}]);
