app.controller('exampleController', [
    '$scope',       // $scope is the ViewModel for the panel.
    '$log',         // $log contains safe ways to write information out to the console.
    '$sanitize',
    'panelService', // panelService is a CUSTOM service.
    function( $scope, $log, $sanitize, panelService ) {
        'use strict';
        $scope.panel = panelService;
        $log.log("Example controller.");
        
        $scope.questions = [
            'If you have a code statement you would like to do over and over you should probably use a...',
            'When you want code to run only under certain conditions you should use...',
            'Is there a difference fundementally between a while and for loop?',
            'Conditionals are not very usefull. True or false?',
            'Loops will always terminate, you dont need to do anything to prevent it.'
          ];
          
        $scope.showVideo = false;
        
        $scope.correct = false;
        
        $scope.toggleCorrect = function() {
          alert("clicked");
          $scope.correct = !($scope.correct);
          $log.log('TOGGLE CORRECT ________');
          $log.log($scope.correct);
        };
        
        $scope.$watch('$scope.correct', function() {
          if ( $scope.correct === 'false'){
            $scope.showVideo = true;
            $log.log('CORRECT WATCH_______');
            $log.log($scope.showVideo);
          }
        });
    }
]);