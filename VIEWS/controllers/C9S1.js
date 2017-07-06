app.controller('codeCtrlC9S1', function($scope, $http) {

    $scope.q1hints;


    $scope.q1 = "1. What is junk as a result of the given Matlab code fragment? <br> <code>junk = 3&pi</code>"

    $scope.q2 = "2. Calculate the result of the given Matlab code fragment if the variables have the following values:<br>" +
        "<code>a = 8;  b = 2;  c = 4;  d = 3;  e = 1;<br>x = 1;  <br> if (a<=b | b+c < e) <br>&ensp;x = 2;<br>elseif b< c & c>d<br>&ensp;x = 1;<br>elseif d>=e<br>&ensp;x = 0;<br>else<br>&ensp;x = -1;<br>end<br> </code>"

    $scope.q3 = "3. What is junk as a result of the given Matlab code fragment? <br> <code>junk = 3|0</code>"

    $scope.q4 = "4. What value does the variable x have as the result of the given Matlab code fragment? <br><code> a = 6;  b = 3;  c = 1;  d = 3;  e = -4;<br>x = 1;<br>if (a<=b & c< d)<br>&ensp;x = 3;<br>elseif b< c | c< d<br>&ensp;x = 1;<br>elseif d>=c<br>&ensp;x = 2;<br>else<br>&ensp;x = 0;<br>end<br></code>"

    $scope.q5 = "5. What is junk as a result of the given Matlab code fragment? <br> <code>junk = 3<2<4</code>"

    $scope.q6 = "6. What value does the variable y have as the result of the given Matlab code fragment? <br> <code> x = 3;<br>if x< 0<br>&ensp;y = 0;<br>elseif 0<=x & x< 2<br>&ensp;y = x.^2;<br>elseif x>=2 & x <=3<br>&ensp;y = 2.*x + 1;<br>else<br>&ensp;y = 4;<br>end<br> </code>"

    $scope.q7 = "7. What is junk resulting from the code below? <br> <code>junk = 0.1<0.2<0.5</code>"

    $scope.q8 = "8. What value does the variable y have as the result of the given Matlab code fragment? <br> <code>x = 3;<br>if 0 < x < 2<br>&ensp;y = 4;<br>else<br>&ensp;y = 2;<br>end<br> </code>"

    $scope.q1options = [
        { text: "0", hints: "", correct: 0, type: "mc" },
        { text: "1", hints: "", correct: 0, type: "mc" },
        { text: "None of the above", hints: "", correct: 1, type: "mc" },
    ]

    /*    { text: "", hints: "", correct: 0, type: "mc" },
        { text: "", hints: "", correct: 0, type: "mc"},
        { text: "", hints: "", correct: 1, type: "mc" },*/

    $scope.q2options = [
        { text: "10", hints: "Check out chapter 10.5 tutorials", correct: 1, type: "sa" }, //sa == short answer



    ]

    $scope.q3options = [
        { text: "0", hints: "", correct: 0, type: "mc" },
        { text: "1", hints: "", correct: 0, type: "mc" },
        { text: "None of the above", hints: "", correct: 1, type: "mc" },

    ]

    $scope.q4options = [
        { text: "10", hints: "", correct: 1, type: "sa" }
    ]

    $scope.q5options = [
        { text: "0", hints: "", correct: 0, type: "mc" },
        { text: "1", hints: "", correct: 0, type: "mc" },
        { text: "None of the above", hints: "", correct: 1, type: "mc" }
    ]

    $scope.q6options = [
        { text: "10", hints: "", correct: 1, type: "sa" }
    ]

    $scope.q7options = [
        { text: "0", hints: "", correct: 0, type: "mc" },
        { text: "1", hints: "", correct: 0, type: "mc" },
        { text: "None of the above", hints: "", correct: 1, type: "mc" }
    ]

    $scope.q8options = [
        { text: "10", hints: "", correct: 1, type: "sa" }
    ]

    $scope.q1options = shuffle($scope.q1options)
    $scope.q3options = shuffle($scope.q3options)
    $scope.q5options = shuffle($scope.q5options)
    $scope.q7options = shuffle($scope.q7options)

    $scope.options = {
        selected: ''
    };



    $scope.questions = [
        { question: $scope.q1, options: $scope.q1options, hint: $scope.q1hints },
        { question: $scope.q2, options: $scope.q2options, hint: $scope.q1hints },
        { question: $scope.q3, options: $scope.q3options, hint: $scope.q1hints },
        { question: $scope.q4, options: $scope.q4options, hint: $scope.q1hints },
        { question: $scope.q5, options: $scope.q5options, hint: $scope.q1hints },
        { question: $scope.q6, options: $scope.q6options, hint: $scope.q1hints },
        { question: $scope.q7, options: $scope.q7options, hint: $scope.q1hints },
        { question: $scope.q8, options: $scope.q8options, hint: $scope.q1hints },
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

        } else //handle if its MSQ
        {

        }
    }



});
