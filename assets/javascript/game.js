$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var score = 0;
    var rand = Math.floor(Math.random()*100)+19;

    $("#wins").text(wins);
    $("#losses").text(losses);
    $(".random-number").text(rand);

    var crystals = {
        crystal1: Math.floor(Math.random()*12)+1,
        crystal2: Math.floor(Math.random()*12)+1,
        crystal3: Math.floor(Math.random()*12)+1,
        crystal4: Math.floor(Math.random()*12)+1
    };

    $(".crystal").on("click", function(){
        //Access the object dynamically using the clicked image's id
        score+=crystals[this.id];
        $("#num").text(score);

        //game is either won or lost
        if (score >= rand){
            //reset crystal values
            crystals.crystal1 = Math.floor(Math.random()*12)+1;
            crystals.crystal2 = Math.floor(Math.random()*12)+1;
            crystals.crystal3 = Math.floor(Math.random()*12)+1;
            crystals.crystal4 = Math.floor(Math.random()*12)+1;

            //loss
            if (score > rand){
                losses++;
                $("#losses").text(losses);
                $("#result").text("You lost!!");
            }
            //win
            else{
                wins++;
                $("#wins").text(wins);
                $("#result").text("You won!!");
            }

            //reset game
            score = 0;
            $("#num").text(score);
            rand = Math.floor(Math.random()*100)+19;
            $(".random-number").text(rand);

        }
    })
});