my_app.service('questions', ['$http', 'Notification', '$state', '$stateParams',
    function ($http, Notification, $state, $stateParams) {
        var self = this;

        self.getAll = function (feature_id) {
            return $http.get('/features/' + feature_id + '/questions.json')
        };

        // self.get = function (id) {
        //     return $http.get('/features/' + id + '.json')
        // };
        //
        // self.create = function (feature) {
        //     return $http.post('/features.json', feature)
        //         .then(
        //             function (response) {
        //                 Notification.success({message: response.data.notice});
        //                 $state.go('feature', {id: response.data.id});
        //             },
        //             function (response) {
        //                 for (var error in response.data) {
        //                     Notification.error({message: response.data[error].toString()});
        //                 }
        //             });
        // };
        //
        // self.update = function (feature) {
        //     return $http.put('/features/' + $stateParams.id + '.json', feature);
        // };
    }]);
