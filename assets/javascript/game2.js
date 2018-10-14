$(document).ready(function() {


    // board vaiables
    var wins = 0;
    var losses = 0;
    var myScore = 0;

    var randomNumber = 0;

    // variable to log first gem press
    var oldNumber = 0;

    // variable to log new number and add to oldNumber pressed
    var number = 0;
    //------------------------------------------------------



    function random() {
        // Create the random number for computer
        var min = 19;
        var max = 120;
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        // log random number
        console.log(randomNumber);


        // assign text of random number to board
        $("#random").text(randomNumber);
    };

    random();

    function setCrystal() {
        // Create random number for crystals
        function randomCrystal() {
            var min = 1;
            var max = 12;
            return Math.floor(Math.random() * (max - min + 1)) + min;


        };

        // Assign random numbers to Crystals
        for (var i = 0; i < 4; i++) {
            var crystal = $(".button");
            crystal.each(function() {
                var random = randomCrystal();
                $(this).attr("data", random);
            });
        }
    };
    setCrystal();






    // Converts random String into number and adds old number to new number assigns oldNumber to myscore id
    $(".button").on("click", function() {
        oldNumber = parseInt($(this).attr("data"));
        number += oldNumber;
        console.log(number);
        console.log(oldNumber);
        $("#myscore").text(number);


        if (number === randomNumber) {
            number = 0;
            setCrystal();
            random();
            wins++;
            $("#wins").text("Wins: " + wins);



        } else if (number > randomNumber) {
            number = 0;
            setCrystal();
            random();
            losses++;
            $("#losses").text("Losses: " + losses);


        }






    });
































});