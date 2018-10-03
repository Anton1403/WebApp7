var quest = angular.element(document.querySelector(".quest"));
var questHeader = quest.find('h3');
questHeader.remove();
var newDiv = angular.element("<div>");
newDiv.css("width", "80px");
newDiv.css("height", "50px");
newDiv.css("background-color", "blue");
newDiv.text("Hello");
newDiv.on("click",
    function(e) {
        var w = parseInt(newDiv.css("width")) + 10;
        newDiv.css("width", w + "px");
    });
quest.append(newDiv);