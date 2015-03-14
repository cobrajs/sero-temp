angular.module('sero.student', [])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'student', {
    url: '/student',
    views: {
      'main': {
        controller: 'StudentCtrl',
        templateUrl: 'student/student.tpl.html'
      }
    },
    data:{ pageTitle: 'Student' }
  });
})

.controller('StudentCtrl', function($scope) {
});
