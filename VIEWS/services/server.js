
app.service('serverService', function($http, $q) {
    /******************************************************************************************\
        Name: getPanels
        Description: Goes and gets panels ID's
    \******************************************************************************************/
    this.getPanels = function() {
        var deferred = $q.defer();
        $http.get('/api/GET/panels/').success(function(data, status) {
            deferred.resolve(data);
        }).error(function(data, status) {
            deferred.reject(data);
        });

        return deferred.promise;
    };
    /******************************************************************************************\
        Name: sendPanel
        Description: POSTS the panel will all the objects in it, this is the saving function. 
    \******************************************************************************************/
    this.sendPanel = function($dataObject) {
        var deferred = $q.defer();
        $http.post('/api/POST/panel', {
            panel: $dataObject
        }).success(function(data, status) {
            deferred.resolve(data);
        }).error(function(data, status) {
            deferred.reject(data);
        });

        return deferred.promise;
    };
    /******************************************************************************************\
        Name: getID
        Description: Goes and gets a specific panel, and not just the panels ID's 
    \******************************************************************************************/
    this.getID = function($ID) {
        var deferred = $q.defer();
        $http.get('/api/GET/panel/' + $ID).success(function(data, status) {
            deferred.resolve(data);
        }).error(function(data, status) {
            deferred.reject(data);
        });

        return deferred.promise;
    };
});