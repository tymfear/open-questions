my_app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $stateProvider
            .state('features', {
                url: '/',
                templateUrl: 'features/_features.html',
                controller: 'FeaturesCtrl'
            });

        $urlRouterProvider.otherwise('/');
    }]);
