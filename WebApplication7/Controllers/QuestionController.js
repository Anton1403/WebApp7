
questApp.controller('QuestionController', function QuestionController($scope) {

    $scope.sortparam = '-rate';
    $scope.question = {
        text: 'Какой js-фреймворк лучше использовать?',
        author: 'Иван Иванов',
        date: '20/10/2013',
        answers: [{
            text: 'AngularJS!',
            author: 'Вова Сидоров',
            date: '20/10/2013',
            age: 23,
            rate: 2
        }, {
            text: 'AngularJS лучше всех',
            author: 'Олег Кузнецов',
                date: '20/10/2013',
            age: 25,
            rate: 0
        }, {
            text: 'Я бы использовал knockout',
            author: 'Алексей Апанович',
                date: '21/10/2013',
            age: 33,
            rate: 5
            }, {
                text: 'фигасе ты даешь',
                author: 'Алексей Апанович',
                date: '22/10/2013',
                age: 33,
                rate: 31
        }]
    };
    $scope.voteUp = function (answer) {
        answer.rate++;
    };
    $scope.voteDown = function (answer) {
        answer.rate--;
    };
});