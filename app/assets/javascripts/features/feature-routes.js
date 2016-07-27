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
          featuresPromise: ['features', function(features){
            return features.getAll();
          }]
        }
      })
      .state('feature', {
        url: '/features/:id',
        templateUrl: 'features/_feature.html',
        controller: 'FeaturesCtrl',
        authenticate: true,
        title: 'Feature'
      })
      .state('newFeature', {
        url: '/new_feature',
        templateUrl: 'features/_newFeature.html',
        controller: 'FeaturesCtrl',
        authenticate: true,
        title: 'Create New Feature'
      })
      .state('editFeature', {
        url: '/features/:id/edit',
        templateUrl: 'features/_newFeature.html',
        controller: 'EditFeatureCtrl',
        authenticate: true,
        title: 'Edit Feature'
      })
  }]);
