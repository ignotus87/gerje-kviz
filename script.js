var countQues = 0;
var lang;
var score = 0;
var maxChoices = 4;


document.getElementById("score").textContent = "Pontszám: " + 0;
document.querySelector(".view-results").style.display = "none";
document.querySelector(".quiz").style.display = "none";
document.querySelector(".final-result").style.display = "none";

document.querySelector(".choose-lang").addEventListener("click", function () {

    lang = "questions";
    document.getElementById("ques-left").textContent = "Kérdés: " + (countQues + 1) + "/" + window[lang].length;

    document.querySelector(".quiz").style.display = "block";

    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (i = 0; i < maxChoices; i++) {

        if (i < window[lang][countQues].choices.length) {
            // Choice exists

            document.getElementById("optionWrapper" + i).style.display = "block";

            document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
            document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];
        }
        else {
            // No choice, hide item
            document.getElementById("optionWrapper" + i).style.display = "none";
        }

    };

});





document.querySelector(".submit-answer").addEventListener("click", function () {

    if (document.querySelector('input[name="options"]:checked').value === window[lang][countQues].choices[window[lang][countQues].answer - 1]) {

        score += 10;
        document.getElementById("score").textContent = "Pontszám: " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle correct'>" + (countQues + 1) + "</div>";

    } else {

        score -= 5;
        document.getElementById("score").textContent = "Pontszám: " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle incorrect'>" + (countQues + 1) + "</div>";
    };

    if (countQues < window[lang].length - 1) {
        countQues++;

        document.getElementById("ques-left").textContent = "Kérdés: " + (countQues + 1) + "/" + window[lang].length;
        document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";

        for (i = 0; i <= 3; i++) {
            document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
            document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];
            document.getElementById("opt" + i).checked = false;
        };

    } else {
        document.querySelector(".submit-answer").style.display = "none";
        document.querySelector(".view-results").style.display = "inline-block";
        document.querySelector(".view-results").style.marginTop = "100px";

        document.querySelector(".question").style.display = "none";
        document.querySelector(".choice-wrapper").style.display = "none";
    }

});

document.querySelector(".view-results").addEventListener("click", function () {

    document.querySelector(".final-result").style.display = "block";

    document.querySelector(".solved-ques-no").innerHTML = (countQues + 1) + " kérdést válaszoltál meg a Gerje-patakról.";

    var correct = document.getElementById("ques-view").getElementsByClassName("correct").length;

    document.querySelector(".right-wrong").innerHTML = correct + " helyes és " + ((countQues + 1) - correct) + " téves választ adtál.";

    document.getElementById("display-final-score").innerHTML = "Pontszámod: " + score;

    if (correct / (countQues + 1) > 0.8) {
        document.querySelector(".remark").innerHTML = "Értékelés: Kimagasló! :)";
    } else if (correct / (countQues + 1) > 0.6) {
        document.querySelector(".remark").innerHTML = "Értékelés: Jó, de még van hova fejlődnöd.";

    } else if (correct / (countQues + 1) > 0.4) {
        document.querySelector(".remark").innerHTML = "Értékelés: Megfelelő, ismételd meg, és megjegyzed, amit elhibáztál.";
    } else {
        document.querySelector(".remark").innerHTML = "Értékelés: Elégtelen, próbáld meg újra.";
    }
});

document.getElementById("restart").addEventListener("click", function () {
    location.reload();

});

document.getElementById("about").addEventListener("click", function () {
    window.open("https://www.facebook.com/groups/849386417070893", "_blank");
});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});



/*Smooth Scroll End*/
