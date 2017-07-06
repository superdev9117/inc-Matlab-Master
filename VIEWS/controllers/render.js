// Zach Render Controller
app.controller('renderController', [
	'$scope', 
	'serverService',  
	function($scope, serverService){

    $scope.element = [];         // The JSON elements, where everything goes.
    $scope.i = 0;                // The counter for setting IDs and correct indexing.
    $scope.Title = "Raspberry";  // Title of the webpage
    $scope.input = "";           // HTML input for the box
    $scope.id = "0";             // ID nuff sed. panel id that you get back
    $scope.panelID = [];         // All the module ID's no wait thats not right. thats wrong... i was mistaken.
                                 // The array of panel ID's you get back from the server.
    /******************************************************************************************\
        Name: addElement
        Description: Basic add element, takes the HTML input element and creates a JSON object
        which is then rendered from a scope watch from down below. 
    \******************************************************************************************/
    $scope.addElement = function(){
        $scope.element.push({
            x: 50,
            y: 50,
            input: $scope.input
        });
        $scope.i ++;
    };
    /******************************************************************************************\
        Name: panelLoad
        Description: The server call to get all the panel IDs from the database. 
    \******************************************************************************************/
    $scope.panelLoad = function(){
        serverService.getPanels().then(function(dataFromService) {
            if (dataFromService.hasOwnProperty('error')) {
                $scope.errors.push(dataFromService);
            }
            //dataFromService;
            $scope.panelID.length = 0;
            for (var i = 0; i < dataFromService.length; i++) {
                $scope.panelID.push(dataFromService[i]);
            }
        }, function(error) {
            // the error will come in via here
            $scope.errors.push({
                error: "Get Panel Failure"
            });
        });
    };
    /******************************************************************************************\
        Name: addElement2
        Description: WHen you request items from the database, it needs the x and y coordiantes
        to add the HTML page.  
    \******************************************************************************************/
    $scope.addElement2 = function(xPOS, yPOS, string){
        $scope.element.push({
            x: xPOS,
            y: yPOS,
            input: string
        });
        $scope.i ++;
    };
    /******************************************************************************************\
        Name: pdf
        Description: Takes a PDF from a browse file picket, and uploads it as an IFRAME module,
        this function can also be used to create html links to PDF's 
    \******************************************************************************************/
    $scope.pdf = function()
    {
        var reader = new FileReader(),
            file = $('#file')[0];

        if (!file.files.length) {
            alert('no file uploaded');
            return false;
        }
        // Look at the reader. You have to do onLoad, it would go through the function too fast,
        // Would spit out null because issues.
        // Slow, possibly store in database.
        reader.onload = function(){
            $scope.element.push({
                x: 0,
                y: 0,
                input: '<iframe src="' + reader.result + '" style="height:20em" width="100%">]</iframe>'
            });
            $scope.i ++;
        };

        reader.readAsDataURL(file.files[0]);
    };
    /******************************************************************************************\
        Name: submit
        Description: This is how you save a panel. 
    \******************************************************************************************/
    $scope.submit = function() {
        serverService.sendPanel($scope.element).then(function(dataFromService) {
            if (dataFromService.hasOwnProperty('error')) {
                $scope.errors.push(dataFromService);
            }
            $scope.ID = dataFromService.panel._id;
        }, function(error) {
            // the error will come in via here
            $scope.errors.push({
                error: "Send Panel Failure"
            });
        });
    };
    /******************************************************************************************\
        Name: get
        Description: Get a Panel by passing an ID 
    \******************************************************************************************/
    $scope.get = function(ID) {
        $scope.i = 0;
        serverService.getID(ID).then(function(dataFromService) {
            if (dataFromService.hasOwnProperty('error')) {
                $scope.errors.push(dataFromService);
            }

            $scope.element.length = 0;
            for (var i = 0; i < dataFromService.modules.length; i++) {
                $scope.element.push(dataFromService.modules[i]);
                $scope.i++;
            }

        }, function(error) {
            // the error will come in via here
            $scope.errors.push({
                error: "Get Panel failure"
            });
        });
    };
}]);