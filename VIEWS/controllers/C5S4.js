app.controller('codeCtrlC5S4', function($scope, $http) {

    $scope.q1hints;

    $scope.q1 = "1. Select all options below which will return the a 2X2 matrix of “ones” and assigns it to a variable named MyOnesArray."


    $scope.q2 = "2. Select all options below which will return a 3X4 matrix of “zeros” and assigns it to a variable named ZerosArray."

    $scope.q1options = [
        { text: ">> ones(2,2) ", hints: "names don’t matter, it’s the order in the list.", correct: true, type: "ms", chosen: 0 },
        { text: ">>MyOnesArray = ones(2) ", hints: "function doesn’t affect value of var1 in the workspace", correct: true, type: "ms" , chosen: 0},
        { text: ">>MyOnesArray = ones(2,2) ", hints: "function doesn’t affect value of var1 in the workspace", correct: false, type: "ms" , chosen: 0},
        { text: ">> MyOnesArray = [1 1; 1 1] ", hints: "var1 is not defined in the workspace.", correct: false, type: "ms" , chosen: 0},
    
    ]

    $scope.q2options = [
        { text: ">> Array = zeros(3,4) ", hints: "names don’t matter, it’s the order in the list.", correct: true, type: "ms", chosen: 0 },
        { text: ">> ZerosArray = [0, 0, 0, 0; 0 0 0, 0; 0, 0 0 0] ", hints: "names don’t matter, it’s the order in the list.", correct: false, type: "ms", chosen: 0 },
        { text: ">>ZerosArray = zeros(4,3) ", hints: "only the second element of x is sent to the function.", hints: "names don’t matter, it’s the order in the list.", correct: false, type: "ms", chosen: 0  },
        { text: ">> ZerosArray = zeros(3,4) ", hints: "", correct: true, type: "mc" },
        

    ]




    $scope.q1options = shuffle($scope.q1options)
    $scope.q2options = shuffle($scope.q2options)


    $scope.options = {
      selected: 'none'
    };



    $scope.questions = [
        {question: $scope.q1, options: $scope.q1options, hint: $scope.q1hints},
        {question: $scope.q2, options: $scope.q2options, hint: $scope.q1hints},

  ]

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    $scope.CheckAnswer = function(options) {
        console.log(options[0].type)
        console.log($scope.options.selected)
            //if mcq then only check to see if the selected option is correct
        if (options[0].type == "mc") {
            if ($scope.options.selected.correct == 1) {
                console.log("correct answer!")
                $scope.q1hints = "correct answer!"
            } else {
                console.log("incorrect answer!")
                $scope.q1hints = $scope.options.selected.hints
            }
        } else if (options[0].type == "sa") {

            console.log("hello sa")
            if ($scope.options.selected == options[0].text) {
                $scope.q1hints = "correct answer!"
            } else {
                $scope.q1hints = options[0].hints
            }

        } else if (options[0].type == "ms") //handle if its MSQ
        {
            //to keep track of any incorrect answer
            var tracker = 0
            console.log(options)
            for(var i = 0; i<options.length; i++)
            {
                if(options[i].chosen != options[i].correct)
                {
                    console.log(options[i].chosen)
                    console.log(options[i].correct)
                    $scope.q1hints = "incorrect"
                    tracker ++
                    break;
                }

            }

            if(tracker == 0)
            {
                $scope.q1hints = "correct"
            }

        }
    }



});
