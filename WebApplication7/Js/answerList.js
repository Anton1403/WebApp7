/*questApp.directive("answerList", function() {
    return  function (scope, element, attrs) {

        var data = scope[attrs["answerList"]];

        if (angular.isArray(data.answers)) {
            var divElem = angular.element("<div>").addClass("answers");
            element.append(divElem);
            var ulElem = angular.element("<ul>");
            element.append(ulElem);
            for (var i = 0; i < data.answers.length; i++) {
                var liElem = angular.element('<li>');
                liElem.append(angular.element('<p>').text(data.answers[i].text));
                ulElem.append(liElem);

                var answerElem = angular.element('<div>').addClass("answer");
                answerElem.append(angular.element('<b>').text(data.answers[i].author));
                liElem.append(answerElem);
                var iElem = angular.element('<i>').text(data.answers[i].date)
                var dateElem = angular.element('<p>').append(iElem);
                liElem.append(dateElem);
            }
        
        }
    }}
});
*/

/*questApp.directive("answerList", function () {
    return {
        link: function (scope, element, attrs) {

            var data = scope[attrs["answerList"] || attrs["source"]];

            if (angular.isArray(data.answers)) {
                var divElem = angular.element("<div>").addClass("answers");
                if (element[0].nodeName == "#comment") {
                    element.parent().append(divElem);
                }
                else {
                    element.append(divElem);
                }
                for (var i = 0; i < data.answers.length; i++) {
                    var answerElem = angular.element('<div>').addClass("answer");
                    var voteElem = angular.element('<div>').addClass("vote");

                    var voteUpElem = angular.element('<a>').addClass("vote-up");
                    voteElem.append(voteUpElem);
                    var rateElem = angular.element('<span>').addClass("rate").text(data.answers[i].rate);
                    voteElem.append(rateElem);
                    var voteDownElem = angular.element('<a>').addClass("vote-down");
                    voteElem.append(voteDownElem);
                    answerElem.append(voteElem);

                    answerElem.append(angular.element('<b>').text(data.answers[i].text));
                    answerElem.append(angular.element('<p>').text(data.answers[i].author));
                    var iElem = angular.element('<i>').text(data.answers[i].date);
                    var dateElem = angular.element('<p>').append(iElem);
                    answerElem.append(dateElem);
                    divElem.append(answerElem);
                }
            }
        },
        restrict: "EACM"
    }
});
*/

questApp.directive("answerList", function ($compile) {
    return function (scope, element, attrs) {
        var content = "<div class='answers'>" +
            "<div ng-repeat='answer in question.answers' class='answer'>" +
            "<div class='vote'>" +
            "<a class='vote-up' ng-click='voteUp(answer)'></a>" +
            "<span class='rate'>{{answer.rate}}</span>" +
            "<a class='vote-down' ng-click='voteDown(answer)'></a>" +
            "</div>" +
            "<b>{{answer.text | formatText}}</b>" +
            "<p>{{answer.author}}</p>" +
            "<p><i>{{answer.date}}</i></p>" +
            "</div></div>";
        var answersElem = angular.element(content);
        var compileFn = $compile(answersElem);
        compileFn(scope);
        element.append(answersElem);
    }
});