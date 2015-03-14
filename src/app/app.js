angular.module( 'sero', [
  // Boilerplate
  'templates-app',
  'templates-common',

  // Views
  'sero.home',
  'sero.teacher',
  'sero.student',

  // Plugins
  'ui.router'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | Sero!' ;
    }
  });
})

;

