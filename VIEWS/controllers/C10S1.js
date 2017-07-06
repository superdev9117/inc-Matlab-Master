app.controller('codeCtrlC10S1', function($scope, $http) {

    $scope.q1hints;


    $scope.q1 = "1. What is junk as a result of the given Matlab code fragment? <br> <code>a = [0  1  2];<br>b = [3  -1  2];<br><br>junk = 0;<br>for k = 1:3<br>&ensp;junk = junk + a(4-k).*b(k);<br>end<br></code>"

    $scope.q2 = "2. What is stuff as a result of the MATLAB code fragment below? <br> <code> a = [0  -1  1  4  3  -3  2];<br>b = [3  -1  2];<br><br>stuff = 0;<br>for k = 1:3<br>&ensp;stuff = stuff + a(2*k).*b(4-k);<br>end<br></code>"
    $scope.q3 = "3. What is count as a result of the given Matlab code fragment? <br> <code>x = [-6  -2  5  0  -3];<br><br>count = 0;<br>for index = 1: length(x)<br>&ensp;if x(index) >= 0<br>&ensp;&ensp;count = count + 1;<br>&ensp;end<br>end<br> </code>"

    $scope.q4 = "4. What is count as a result of the MATLAB code fragment below? <br> <code>x = [1  -2  3];<br><br>count = 0;<br>for index = 1: length(x)<br>&ensp;for k = 1:3<br>&ensp;&ensp;count = count + x(index)*k;<br>&ensp;end<br>end<br> </code>"
    $scope.q5 = "5. What is var1 as a result of the given Matlab code fragment? <br> <code>x = [7    13    11     3     5];<br><br>y = 0:7;<br>for index = 1:2:length(x)<br>&ensp;var1(index) = x(index) + y(index+1);<br>end<br>var2 = var1(3) + 2;<br> </code>"
    $scope.q6 = "6. What is count as a result of the MATLAB code fragment below? <br> <code>a = [3  2  1  0  -1  -2]<br><br>for k = 1:length(a)<br>&ensp;if a(k) <= -1<br>&ensp;&ensp;break<br>&ensp;end<br>&ensp;count = a(k) + k;<br>end<br> </code>"
    $scope.q7 = "7. What is num resulting from the code below? <br> <code>A = [4  -2  5; 3  7  -6]<br><br>num = A(1,1);<br>for m = 1:2<br>&ensp;for n = 1:3<br>&ensp;&ensp;if A(m,n) > num<br>&ensp;&ensp;&ensp;num = A(m,n)<br>&ensp;&ensp;end<br>&ensp;end<br>end<br> </code>"
    $scope.q8 = "8. What is z after the code below executes? <br> <code>var = [-3  4  -4  5  0  -2  6  1  4  8];<br>x = 5;<br>index = 1;<br>while x>2<br>&ensp;z(index) = var(2*x);<br>&ensp;index = index + 2;<br>&ensp;x = x - 1;<br>end<br>z(2+index) = 1;<br> </code>"
    $scope.q9 = "9. What is count after the code below executes? <br> <code>n = [0  2  1  -2  -1  3  -3];<br>count = 0;<br>index = 1;<br>while n(index) < 3<br>&ensp;count = 2*n(index);<br>ensp;index = index +1;<br>end<br> </code>"
    /*<br> <code> </code>*/
    $scope.q1options = [
        { text: "[0 6 5]", hints: "", correct: 0, type: "mc" },
        { text: "[6 -1 0]", hints: "", correct: 0, type: "mc" },
        { text: "0", hints: "", correct: 0, type: "mc" },
        { text: "5", hints: "", correct: 1, type: "mc" },
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
        { text: "[0 1 2]", hints: "", correct: 0, type: "mc" },
        { text: "3", hints: "", correct: 1, type: "mc" },
    ]

    $scope.q4options = [
        { text: "10", hints: "", correct: 1, type: "sa" }
    ]

    $scope.q5options = [
        { text: "16", hints: "", correct: 0, type: "mc" },
        { text: "[8 14 10]", hints: "", correct: 0, type: "mc" },
        { text: "[8 15 14 7 10]", hints: "", correct: 0, type: "mc" },
        { text: "[8 0 14 0 10]", hints: "", correct: 1, type: "mc" },
    ]

    $scope.q6options = [
        { text: "10", hints: "", correct: 1, type: "sa" }
    ]

    $scope.q7options = [
    { text: "[5 7]", hints: "", correct: 0, type: "mc" },
    { text: "[0 0 5 0 7 0]", hints: "", correct: 0, type: "mc" },
    { text: "[5 7]", hints: "", correct: 0, type: "mc" },
    { text: "[7]", hints: "", correct: 1, type: "mc" },
     ]

    $scope.q8options = [
        { text: "10", hints: "", correct: 1, type: "sa" }
    ]

    $scope.q9options = [
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
        { question: $scope.q9, options: $scope.q9options, hint: $scope.q1hints },
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
