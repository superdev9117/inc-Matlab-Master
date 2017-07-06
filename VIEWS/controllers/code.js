//Angular App

//var codeApp = angular.module('codeApp', ['ui.ace']);

app.controller('codeCtrl', function($scope){
    $scope.aceOptions = {
        theme: 'solarized_dark',
        mode: 'text',
        useWrapMode : true
    };
    $scope.textField = 'Example';

    $scope.init =  function(input, options)
    {
        $scope.aceOptions = options;
        $scope.textField = input;
    };
});