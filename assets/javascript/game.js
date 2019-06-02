


$(document).ready(function () {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
 
    var redGem = $("#redGem");
    var purpGem = $("#purpGem");
    var blueGem = $("#blueGem");
    var greenGem = $("#greenGem");

    var redText = $("#redText");
    var greenText = $("#greenText");
    var purpleText = $("#purpleText");
    var blueText = $("#blueText");

    var blueRand = getRandomInt(1, 13);
    var purpRand = getRandomInt(1, 13);
    var greenRand = getRandomInt(1, 13);
    var redRand = getRandomInt(1, 13);
    

    var totalScore = 0;
    var goalScore =  getRandomInt(19, 120);

    var wins = 0;
    $("#wins").text(wins);
    var losses = 0;
    $("#losses").text(losses);
    

    $("#goalScore").text(goalScore);
    
    $(redText).text(redRand);
    $(greenText).text(purpRand);
    $(purpleText).text(greenRand);
    $(blueText).text(blueRand);
    
    function switcher(gem, text, number) {
        $(gem).on("mouseenter", function () {            
            $(text).css("visibility","visible");
        }).on("mouseleave", function () {
            $(text).css("visibility", "hidden");

        }).on("click",function(){
            console.log(number);
            totalScore += number;
            console.log(totalScore)
            $("#currentScore").text(totalScore);
            if (totalScore == goalScore){
               
                wins ++;
                $("#wins").text(wins);
                goalScore = getRandomInt(19, 120);
                $("#goalScore").text(goalScore);
              
                
            } else if (totalScore > goalScore){
                losses ++;
                $("#losses").text(losses);
                goalScore = getRandomInt(19, 120);
                $("#goalScore").text(goalScore); 
                totalScore = 0;
                $("#currentScore").text(totalScore);  
                
            }
        })
    }
    

    switcher(redGem, redText, redRand);
    switcher(greenGem, greenText, greenRand);
    switcher(purpGem, purpleText, purpRand);
    switcher(blueGem, blueText, blueRand);
    


    




    

  
   

})