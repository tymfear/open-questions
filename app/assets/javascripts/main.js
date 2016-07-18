my_app = angular.module('openQuestions', ['ui.router', 'templates', 'Devise', 'ui-notification']);
my_app.run(['$rootScope', '$state', 'Auth', function ($rootScope, $state, Auth) {
  $rootScope.$state = $state;
  
  $rootScope.$on("$stateChangeError", console.log.bind(console));

  $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
    if (toState.authenticate) {
      Auth.currentUser().then(null, function () {
        $state.go("sign_in");
        event.preventDefault();
      });
    }

    if (toState.unauthorized_only) {
      Auth.currentUser().then(function () {
        $state.transitionTo("features");
        event.preventDefault();
      });
    }
  });
}]);

my_app.config(['$urlRouterProvider', '$locationProvider',
  function ($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $urlRouterProvider.otherwise('/');
  }]);
