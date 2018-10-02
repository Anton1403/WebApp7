questApp.controller('AnswerController', function AnswerController($scope) {
    $scope.save = function(answer, answerForm) {
        if (answerForm.$valid) {
            alert(answer.author + ", Ваш ответ сохранен");
        }
    };
})