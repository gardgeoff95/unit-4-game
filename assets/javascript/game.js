


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



    var redNumb = getRandomInt(1,13);
    var purpNumb = getRandomInt(1,13);
    var blueNumb = getRandomInt(1,13);
    var greenNumb = getRandomInt(1,13);

    console.log(redNumb);













    $(redGem).on("mouseover", function () {
        

    })
    $(purpGem).on("click", function () {
        alert("hello");
    })

    $(blueGem).on("click", function () {
        alert("hello");
    })

    $(greenGem).on("click", function () {
        alert("hello");
    })

})

