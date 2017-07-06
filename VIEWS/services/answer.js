/*************************************************************************\
    Author: Erick Meyer
    Description: The 'answerService' is a convienent way to package up the 
    answers to be sent to the server. 
\*************************************************************************/
app.service('answerService', [
  '$http',
  function($http){
  this.submitted = {}; // Key pair of id, and submitted answers 
  this.sendResponses = function() {
    $http.post('some URL', submitted );
  };
  
}]);