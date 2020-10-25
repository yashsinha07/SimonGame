var buttonColors = ["red", "blue", "green", "yellow"]
var gamePattern = [];
var userClickedPattern = [];

$(".btn").click(function () {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
});

function nextSequence(){
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    //Animation
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    //Play sound
    playSound(randomChosenColor);
}

function playSound(name) {
    const audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    var self = $("#" + currentColor);

    self.addClass("pressed");

    setTimeout(function () {
        self.removeClass("pressed");
    }, 100);
};

