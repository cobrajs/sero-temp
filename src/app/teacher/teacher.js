angular.module('sero.teacher', [])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'teacher', {
    url: '/teacher',
    views: {
      "main": {
        controller: 'TeacherCtrl',
        templateUrl: 'teacher/teacher.tpl.html'
      }
    },
    data:{ pageTitle: 'Teacer' }
  });
})

.controller('TeacherCtrl', function($scope) {
});

