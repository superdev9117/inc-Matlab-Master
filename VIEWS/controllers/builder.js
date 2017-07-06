
app.controller('builderController', [
    '$scope',
    '$log',
    'panelService',
    'serverService',
    function ($scope, $log, panelService, serverService ) {
        $scope.panel = {
            type: '',
            markup: '',
            pageName: ''
        };
        $scope.generatePressed = false;
        

        $scope.onGenerate = function () {
            $log.log('Generate pressed!');
            $scope.generatePressed = true;
            panelService.type = $scope.panel.type; // Assign the panel service value to our current scope.
            panelService.markup = $scope.panel.markup; // Assign the panel service value to our current scope.
            $scope.convertMarkup(panelService.markup); // Convert the markup to a JSON object.
            panelService.jsonObject.name = $scope.panel.pageName; // Assign to the panel service the panel name from the current scope.
            $log.info("PANEL SERVICE");
            $log.log(panelService);
        };

        $scope.onSave = function () {
            // Where the saving functionality will go.
            $log.log(panelService);
            alert("Your page has been saved!");
        };
        // Will only remove from the current document page, not from our server. 
        $scope.onRemove = function () {
            // Where the remove from builder page functionality will go.
            var ans = confirm("Are you sure you want to delete it?");
            if ( ans === true ){
              $("page-preview:first").children().remove();
              $scope.generatePressed = false;
            }
        };
        $scope.onLoad = function () {
            // Where the loading functionality will go.
        };
        $scope.convertMarkup = function ( s ) {
            console.log("Conversion has...");
            try {
                console.log(s);
                
                panelService.jsonObject.moduleList = JSON.parse( s );
                console.log("Passed");
            } catch ( e ) {
                panelService.jsonObject.moduleList = null;
                console.log("Failed");
            }
        };
        
        function stripTitles( s ) {
          noCommas = s.split(',');
          for ( var x = 0; x < noCommas.length; x++ )
          {
            
          }
        }
        
    }
]);