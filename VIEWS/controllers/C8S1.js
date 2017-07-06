app.controller('codeCtrlC8S1', function($scope, $http) {

    $scope.q1hints;

    $scope.q1 = "<h3>Q1.</h3> The code shown below is saved in the current working directory with the file name fun2.m.<br>" +
                "<code>function [y] = fun2(var1)<br> var2 = 2.*var1 + 1; <br>y = var1 + var2; </code><br><br> The following" + 
                " commands are typed at the command prompt (you may assume that no other variables are defined in the MATLAB workspace prior to typing the commands below):" +
                " <br><br> <code>>>var2 = 2; <br> >>out = fun2(var2); <br> >> y = out + var1; </code> " + 
                "<br><br> What is y resulting from the above commands?  If an error results from the above commands, briefly explain the source of the error.<br>"




    $scope.q2 = "<h3>Q2.</h3> The code shown below is saved in the current working directory with the file name fun.m. <br>" +
                "<code>function [y] = fun1(in1,in2) <br> y = in1.^2 - in2; </code><br><br> " + 
                "The following commands are typed at the command prompt (you may assume that no other variables are defined in the MATLAB workspace prior to typing the commands below):" +
                " <br><br> <code>x = [0;  2;  4];<br>in2 = 3;<br>out = fun1(in2,x(2)); </code> " + 
                "<br><br> What is out resulting from the above commands?  If an error results from the above commands, briefly explain the source of the error.<br>"

   

    $scope.q3 = "<h3>Q3</h3>. The code shown below is saved in the current working directory with the file name fun2.m.<br>" +
                "<code>function y = myfunction(x) <br>y = 3.*x + var; </code><br><br> " + 
                "The following commands are typed at the command prompt:" +
                " <br><br> <code>>> var = 3;<br>>> x = 2;<br>>> var2 = myfun(var); </code> " + 
                "<br><br> What is var2 resulting from the above commands?  If an error results from the above commands, briefly explain the source of the error.<br>"

    $scope.q4 = "<h3>Q4.</h3> <h4>The code shown below is saved in the current working directory with the file name fun2.m. </h4>" +
                "<code>function y = myfunction(x)<br>y = 3.*x + var; </code><br><br> " + 
                "The following commands are typed at the command prompt:" +
                " <br><br> <code>>> var = 3;<br>>> x = 2;<br>>> var2 = myfunction(var); </code> " + 
                "<br><br> What is var2 resulting from the above commands?  If an error results from the above commands, briefly explain the source of the error.<br>"

    $scope.q5 = "<h3>Q5.</h3> <h4>What is num resulting from the code below?</h4>" + 
                "<code>A = [4  -2  5; 3  7  -6]<br>num = A(1,1);<br>for m = 1:2<br>&ensp;for n = 1:3<br>&ensp;&ensp;if A(m,n) > num<br>&ensp;&ensp;&ensp;num = A(m,n)<br>&ensp;&ensp;end<br>&ensp;end<br>end</code>"

    $scope.q1options = [
        { text: "Error, argument names sent to function are inconsistent, it’s var1 in function, var2 in workspace.", hints: "names don’t matter, it’s the order in the list.", correct: 0, type: "mc" },
        { text: "9", hints: "function doesn’t affect value of var1 in the workspace", correct: 0, type: "mc"},
        { text: "12", hints: "function doesn’t affect value of var1 in the workspace", correct: 0, type: "mc" },
        { text: "Error; argument names returned from function are not consistent since y not same as out.", hints: "var1 is not defined in the workspace.", correct: 0, type: "mc" },
        { text: "Error; ", hints: "names don’t matter, it’s the order in the list.", correct: 1, type: "mc" },

    ]

    $scope.q2options = [
        { text: "Error, argument names sent to function are inconsistent. ", hints: "names don’t matter, it’s the order in the list.", correct: 0, type: "mc" },
        { text: "Error, the output variable names returned from the function are inconsistent.", hints: "names don’t matter, it’s the order in the list.", correct: 0, type: "mc"},
        { text: "out = [9;7;5]", hints: "only the second element of x is sent to the function.", hints: "names don’t matter, it’s the order in the list.", correct: 0, type: "mc" },
        { text: "out = 7", hints: "", correct: 1, type: "mc" },
        

    ]

    $scope.q3options = [
        { text: "Error, argument names sent to function are inconsistent.", hints: "names don’t matter, it’s the order in the list", correct: 0, type: "mc" },
        { text: "Error, the output variable names returned from the function are inconsistent. ", hints: "names don’t matter, it’s the order in the list.", correct: 0, type: "mc"},
        { text: "Error, the function name is not the same as the file name.", hints: "only the second element of x is sent to the function.", hints: "names don’t matter, it’s the order in the list.", correct: 0, type: "mc" },
        { text: "var2 = 9", hints: "the value of var and x in the base workspace do not affect their values in the function’s workspace.", correct: 0, type: "mc" },
        { text: "var2 = 12", hints: "the value of var and x in the base workspace do not affect their values in the function’s workspace.", correct: 0, type: "mc" },
        { text: "Error, the variable var is not defined in the function workspace.", hints: "", correct: 1, type: "mc" },


    ]

    $scope.q4options = [
        { text: "Error, argument names sent to function are inconsistent.", hints: "names don’t matter, it’s the order in the list.", correct: 0, type: "mc" },
        { text: "Error, the output variable names returned from the function are inconsistent. ", hints: "names don’t matter, it’s the order in the list.", correct: 0, type: "mc"},
        { text: "Error, the function name is not the same as the file name.", hints: "It is good practice to make the names match, but not required.  MATLAB will use the FILE name", correct: 0, type: "mc" },
        { text: "var2 = 9", hints: "the value of var and x in the base workspace do not affect their values in the function’s workspace.", correct: 0, type: "mc" },
        { text: "var2 = 12 ", hints: "the value of var and x in the base workspace do not affect their values in the function’s workspace.", correct: 0, type: "mc" },
        { text: "Error, the variable var is not defined in the function workspace.", hints: "", correct: 1, type: "mc" },
        

    ]

    $scope.q5options = [
        { text: "num = [<br>\n4 4 5 <br>4 7 4 <br> ]", hints: "num isn’t defined as an array", correct: 0, type: "mc" },
        { text: "num = [5  7]", hints: "num is not defined as an array", correct: 0, type: "mc"},
        { text: "num = [0  0  5  0  7  0] ", hints: "num not defined as array", hints: "names don’t matter, it’s the order in the list.", correct: 0, type: "mc" },
        { text: "num = 5", hints: "TRUE if statement doesn’t terminate FOR loop", correct: 0, type: "mc" },
        { text: "num = 7", hints: "", correct: 1, type: "mc" },
        

    ]
    $scope.q1options = shuffle($scope.q1options)
    $scope.q2options = shuffle($scope.q2options)
    $scope.q3options = shuffle($scope.q3options)
    $scope.q4options = shuffle($scope.q4options)
    $scope.q5options = shuffle($scope.q5options)

    $scope.options = {
      selected: 'none'
    };



    $scope.questions = [
        {question: $scope.q1, options: $scope.q1options, hint: $scope.q1hints},
        {question: $scope.q2, options: $scope.q2options, hint: $scope.q1hints},
        {question: $scope.q3, options: $scope.q3options, hint: $scope.q1hints},
        {question: $scope.q4, options: $scope.q4options, hint: $scope.q1hints},
        {question: $scope.q5, options: $scope.q5options, hint: $scope.q1hints},
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
        console.log(options)
        console.log($scope.options.selected)
        //if mcq then only check to see if the selected option is correct
        if($scope.options.selected.type == "mc")
        {
            if($scope.options.selected.correct == 1)
            {
                console.log("correct answer!")
                $scope.q1hints = "correct answer!"
            }
            else
            {
                console.log("incorrect answer!")
                $scope.q1hints =  $scope.options.selected.hints
            }
        }
        else //handle if its MSQ
        {

        }
    }



});
