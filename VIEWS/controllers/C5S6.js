app.controller('codeCtrlC5S6', function($scope, $http) {

    $scope.q1hints;

    $scope.q1 = "1. What is B as a result of the following commands?" +
        "<br> <code>>> A = [1 2; 3 4; 5 6] <br> >> B = [A,zeros(2,3)] </code>"
        /*<br> <code> </code>*/


    $scope.q2 = "2. What is B as a result of the following commands?" +
        "<br> <code>>> A = [1 2 3; 4 5 6] <br> >> B = [A;zeros(2,3)] </code>"
    $scope.q3 = "3. What is B as a result of the following commands?" +
        "<br> <code>>> A = [1 2 3; 4 5 6] <br> >> B = [A,zeros(2,3)] </code>"

    $scope.q1options = [
        { text: "B = <br> 1 2 0 0 <br> 3 4 0 0 ,br> 5 6 0 0 <br>", hints: "names don’t matter, it’s the order in the list.", correct: true, type: "ms", chosen: 0 },
        { text: "B = <br> 1 2 3 <br> 4 5 6 <br> 0 0 0 <br> 0 0 0 <br>", hints: "function doesn’t affect value of var1 in the workspace", correct: true, type: "ms", chosen: 0 },
        { text: "B = 1 2 3 0 0 0 <br> 4 5 6 0 0 0 <br>", hints: "function doesn’t affect value of var1 in the workspace", correct: false, type: "ms", chosen: 0 },
        { text: "None of the above ", hints: "var1 is not defined in the workspace.", correct: false, type: "ms", chosen: 0 },

    ]

    $scope.q2options = [
        { text: "B = <br> 1 2 3 0 0 0<br> 4 5 6 0 0 0<br>", hints: "names don’t matter, it’s the order in the list.", correct: true, type: "ms", chosen: 0 },
        { text: "B = <br> 1 4 0 0 <br> 2 5 0 0 <br> 3 6 0 0<br>", hints: "names don’t matter, it’s the order in the list.", correct: false, type: "ms", chosen: 0 },
        { text: "B = <br> 1 2 3 <br> 4 5 6 <br> 0 0 0 <br> 0 0 0 ,br>", hints: "only the second element of x is sent to the function.", hints: "names don’t matter, it’s the order in the list.", correct: false, type: "ms", chosen: 0 },
        { text: "None of the above", hints: "", correct: true, type: "mc" },


    ]

    $scope.q3options = [
        { text: "B = <br> 1 4 0 0 <br> 2 5 0 0 <br> 3 6 0 0 <br>", hints: "names don’t matter, it’s the order in the list", correct: true, type: "ms", chosen: 0 },
        { text: "B = <br> 1 2 3 <br> 4 5 6<br> 0 0 0 <br> 0 0 0 <br>", hints: "names don’t matter, it’s the order in the list.", correct: true, type: "ms", chosen: 0 },
        { text: "B = <br> 1 2 3<br> 4 5 6<br> 0 0 0 <br> 0 0 0 <br>", hints: "only the second element of x is sent to the function.", hints: "names don’t matter, it’s the order in the list.", correct: false, type: "ms", chosen: 0 },
        { text: "None of the above", hints: "the value of var and x in the base workspace do not affect their values in the function’s workspace.", correct: false, type: "ms", chosen: 0 },


    ]


    $scope.q1options = shuffle($scope.q1options)
    $scope.q2options = shuffle($scope.q2options)
    $scope.q3options = shuffle($scope.q3options)


    $scope.options = {
        selected: 'none'
    };



    $scope.questions = [
        { question: $scope.q1, options: $scope.q1options, hint: $scope.q1hints },
        { question: $scope.q2, options: $scope.q2options, hint: $scope.q1hints },
        { question: $scope.q3, options: $scope.q3options, hint: $scope.q1hints },
    ]

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

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
            for (var i = 0; i < options.length; i++) {
                if (options[i].chosen != options[i].correct) {
                    console.log(options[i].chosen)
                    console.log(options[i].correct)
                    $scope.q1hints = "incorrect"
                    tracker++
                    break;
                }

            }

            if (tracker == 0) {
                $scope.q1hints = "correct"
            }

        }
    }



});
