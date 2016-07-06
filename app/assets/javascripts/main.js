my_app = angular.module('openQuestions', ['ui.router', 'templates', 'Devise', 'ui-notification']);
my_app.run(function($rootScope) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
});
