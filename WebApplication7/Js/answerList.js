questApp.directive("answerList", function() {
    return function (scope, element, attrs) {

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
                answerElem.append(dateElem);
            }
        }
    }
});