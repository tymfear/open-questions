my_app.config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('sign_in', {
        url: '/',
        templateUrl: 'auth/_sign_in.html',
        controller: 'AuthCtrl',
        unauthorized_only: true
      })
      .state('sign_up', {
        url: '/sign_up',
        templateUrl: 'auth/_sign_up.html',
        controller: 'AuthCtrl',
        unauthorized_only: true
      });
  }]);
