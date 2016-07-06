my_app.factory('features', ['$http', 'Notification', function ($http, Notification) {
    var o = {
        features: [
            {
                git_id: '123',
                title: 'Test feature',
                user: {gitname: 'tymfear', id: '1'}
            }]
    };


    o.getAll = function () {
        //return $http.get('/features.json').success(function (data) {
        //    angular.copy(data, o.posts);
        //});

    };

    o.get = function (id) {
        return $http.get('/features/' + id + '.json').then(function (res) {
            return res.data;
        });
    };

    o.create = function (post) {
        return $http.post('/features.json', post)
            .then(function (response) {
                o.posts.push(response.data);
                Notification.success({message: response.data.notice});
            }, function (response) {
                Notification.error({message: response.data.error});
            });
    };

    return o;
}]);
