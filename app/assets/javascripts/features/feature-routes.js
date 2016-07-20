my_app.config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('features', {
        url: '/features',
        templateUrl: 'features/_features.html',
        controller: 'FeaturesCtrl',
        authenticate: true,
        title: 'Features',
        resolve: {
          postPromise: ['features', function(features){
            return features.getAll();
          }]
        }
      })
  }]);
