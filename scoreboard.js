var homescore = 0;
var awayscore = 0;

//Add Button of Home Column
document.querySelector(".homeadd-btn").addEventListener("click", function() {
    homescore = homescore + 1;
    document.querySelector(".homescore-3").innerHTML = homescore;
});

//Add Button of Away Column
document.querySelector(".awayadd-btn").addEventListener("click", function() {
    awayscore = awayscore + 1;
    document.querySelector(".awayscore-4").innerHTML = awayscore;
});

//Subtract Button of Home Column
document.querySelector(".homesubtract-btn").addEventListener("click", function() {
    if (homescore > 0) {
        homescore = homescore - 1;
        document.querySelector(".homescore-3").innerHTML = homescore;
    } else {
        document.querySelector(".homescore-3").innerHTML = homescore;
    }
});

//Subtract Button of Away Column
document.querySelector(".awaysubtract-btn").addEventListener("click", function() {
    if (awayscore > 0) {
        awayscore = awayscore - 1;
        document.querySelector(".awayscore-4").innerHTML = awayscore;
    } else {
        document.querySelector(".awayscore-4").innerHTML = awayscore;
    }
});

//Reset Button of Both Columns
document.querySelector(".bothreset-btn").addEventListener("click", function() {
    homescore = 0;
    document.querySelector(".homescore-3").innerHTML = homescore;
    awayscore = 0;
    document.querySelector(".awayscore-4").innerHTML = awayscore;
});