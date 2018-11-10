$(document).ready(function () {
    console.log("ready now");
    start();
    var Over = false;
});

//change class on button click
function changeClass() {
    if (all.className == 'jour') {
        one = 'jour';
        two = 'nuit';
        document.getElementById("bonsoir").innerHTML = "Passer en mode jour";
        document.getElementById("welcome").innerHTML = "Bonsoir,";
        var i = backgroundToDay.length;

        function change() {
            $("body").css("background-color", backgroundToDay[i]);
            i--;
        }
        setInterval(change, 1000);
    } else {
        one = 'nuit';
        two = 'jour';
        document.getElementById("bonsoir").innerHTML = "Passer en mode nuit";
        document.getElementById("welcome").innerHTML = "Bonjour,";
        var i = 0;

        function change() {
            $("body").css("background-color", backgroundToDay[i]);
            i++;
        }
        setInterval(change, 1000);
    }
    classRename(one, two);
}

function classRename(itIs, itWill) {
    var x = document.getElementsByClassName(itIs);
    var i = x.length;
    while (i > 0) {
        console.log("coucou" + i);
        x[0].className = itWill;
        i = i - 1
    }
}

var backgroundToDay = ["#130029", "#402B5C", "#6D5690", "#9A81C4", "#c7acf8"];

var hDebut = 99;
var h = 777;
var itWas = 888;

function start() {
    itWas = h;
    h = new Date().getMinutes(); //gethours 
    console.log("h=" + h);
    console.log('debut' + hDebut);
    console.log('ancienne heure' + itWas);
    if (hDebut == 99) {
        hDebut = 0;
        if (h >= 30 && h <= 60) { //7 et 20
            console.log('debout');
            document.getElementById("welcome").innerHTML = "Bonjour,";
            classRename('nuit', 'jour');
            $("body").css("background-color", "#c7acf8")
        } else {
            console.log('dodo');
            document.getElementById("welcome").innerHTML = "Bonsoir,";
            classRename('jour', 'nuit');
            $("body").css("background-color", "#130029")
        }

    } else {
        if (h == 30 && itWas == 29) {
            console.log('debout');
            document.getElementById("welcome").innerHTML = "Bonjour,";
            classRename('nuit', 'jour');
            var i = 0;

            function change() {
                $("body").css("background-color", backgroundToDay[i]);
                i++;
            }
            setInterval(change, 1000);
        } else if (h == 0 && itWas == 59) {
            console.log('dodo');
            document.getElementById("welcome").innerHTML = "Bonsoir,";
            classRename('jour', 'nuit');
            var i = backgroundToDay.length;

            function change() {
                $("body").css("background-color", backgroundToDay[i]);
                i--;

            }
            setInterval(change, 1000);
        }
    }
    setTimeout(start, 6000);


}

function buttonClickGET() {
    var url = "https://api.openweathermap.org/data/2.5/weather?q=Grenoble,fr&appid=59b30ffd6943cd67a8cacf9da8d2a99b&units=metric"

    $.get(url, callBackGetSuccess).done(function () {
            //alert( "second success" );
        })
        .fail(function () {
            alert("error");
        })
        .always(function () {
            //alert( "finished" );
        });
}

var callBackGetSuccess = function (data) {
    var element = document.getElementById("zone_meteo");
    if (data.main.temp <= 0) {
        element.innerHTML = "Brrr. Il gêle. Il fait " + data.main.temp + " °C.";
    } else if (data.main.temp < 10) {
        element.innerHTML = "Il fait froid. La température est de " + data.main.temp + " °C.";
    } else if (data.main.temp < 20) {
        element.innerHTML = data.main.temp + " °C. Il fait bon à Grenoble.";
    } else {
        element.innerHTML = "Il fait trop chaud. Température : " + data.main.temp + " °C.";
    }
}