
app.directive('pagePreview', [
    '$http',
    '$compile',
    '$log',
    'panelService',
    function ($http, $compile, $log, panelService) {
        return {
            restrict: 'E',
            scope: {},
            link: function (scope, element, attrs) {
                scope.panel = panelService;
                scope.$watch('panel.type', function() {
                    $http({
                        method: 'GET',
                        url: 'partials/layout' + scope.panel.type + '.html'
                    })
                    .then(
                        function successCallback(response) {
                            // Some success
                            $log.log("PAGEPREVIEW: returned success");
                            element.html(response.data);
                            $compile(element.contents())(scope);
                        },
                        function errorCallback(response) {
                            // Some error
                            $log.log("PAGEPREVIEW: returned error");
                        }
                    );
                });
            }
        };
    }
]);

app.directive('hvuModule', [
    '$http',
    '$compile',
    '$log',
    '$sanitize', 
    '$sce',
    function ($http, $compile, $log, $sanitize, $sce) {
        var linker = function (scope, element, attrs) {
            scope.youtube = "";
          
            $http({
                method: 'GET',
                url: 'modules/'+ scope.module.type + '.html'
            })
            .then(
                function successCallback(response) {
                    // Some success
                    $log.log("MODULE: returned success");
                    if ( scope.module.type === 'video' ){
                        scope.youtube = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + scope.module.src);
                    }
                    element.html(response.data);
                    $compile(element.contents())(scope);
                },
                function errorCallback(response) {
                    // Some error
                    $log.log("MODULE: returned error");
                }
            );
            
        };
        return {
            restrict: 'E',
            scope: {
                module: '='
            },
            link: linker
        };
    }
]);
/**************************************************************************************\
    name: draggable 
    Description: the window between two worlds.
    Relys on: An object in the visable scope called item. 
\**************************************************************************************/
app.directive('draggable', [
    '$log', 
    function($log) {
        return {
            restrict: 'A',
            link: function(scope, elm, attrs) {
                var jqueryElm = $(elm[0]);
                $(jqueryElm).draggable(
                    {
                        drag: function(){
                            var offset = $(this).offset();
                            var xPos = offset.left;
                            var yPos = offset.top;
                            var id = $(this).attr("id");
                            var i = parseInt(id, 10);
                            var viewWidth = window.innerWidth;
                            var viewHeight = window.innerHeight;
                            $('#posX').text('x: ' + xPos);
                            $('#posY').text('y: ' + yPos);
                            scope.$apply(
                                function(){
                                    $log.log(scope);
                                    scope.item.x = ((xPos/viewWidth)* 100); 
                                    scope.item.y = ((yPos/viewHeight)* 100); /*scope.element[0].input = id;*/
                                }
                            );
                        }
                    }
                );
            }
        };
    }
]);
/**************************************************************************************\
    name: draggable 
    Description: the window between two worlds.
\**************************************************************************************/
app.directive('hvuElement', function($compile, $timeout) {
    return {
        restrict: 'A',
        replace: true,
        link: function (scope, ele, attrs) {
            scope.$watch(scope.i, function() {
                //var copy = html;
                //ele.html("");
                var html = '<div draggable id="' + scope.i + '" class="ui-widget-content">' + attrs.hvuElement + '</div>'; //scope.element.x.toString()
                // ele.html;
                ele.html(html);//scope.element.input);//'<div style="position: fixed; left: 260px; top: 0px;"> hello position: relative; left: 30px;  </div>');
                var compiled = $compile(ele.contents())(scope);

            })
        }
    };
});
