$( document ).ready(function() {
    console.log("ready now")
    start();
    var Over=false;
    //timer(10);
    //transition();
    //degrade(backgroundToDay);
    

});

//changement de classe en apuyant sur le bouton
function changeClass(){
	if(all.className=='jour'){
		one='jour';
		two='nuit';
        document.getElementById("bonsoir").innerHTML = "Passer en mode jour";
        document.getElementById("welcome").innerHTML = "Bonsoir,";
        $("body").css("background-color", "#130029") 
        //document.body.style.backgroundColor = degrade(backgroundToDay);
	}
	else {
		one='nuit';
		two='jour';
        document.getElementById("bonsoir").innerHTML = "Passer en mode nuit";
        document.getElementById("welcome").innerHTML = "Bonjour,";
        $("body").css("background-color", "#c7acf8");
    }
    classRename(one, two)
	
	
}
function classRename(itIs, itWill) {
    var x = document.getElementsByClassName(itIs);
	console.log(x);
	console.log(x.length);
	
	var i = x.length;
	
	while(i>0){
		console.log("coucou"+i);
	    x[0].className=itWill;
	    i=i-1
    }
}

    
var backgroundToDay=["#130029","#402B5C","#6D5690","#9A81C4","#c7acf8"];
//console.log(backgroundToDay[1])

//console.log(colortoday[1])


function start(){
    var h=new Date().getMinutes();//gethours utilisation des minutes pour etre plus rapide
    console.log("h="+h);
    //if(Over==false){
        if(h>=30 && h<=60){//7 et 20
            console.log('debout');
            document.getElementById("welcome").innerHTML = "Bonjour,";
            classRename('nuit', 'jour');
            $("body").css("background-color", "#c7acf8")
        }else{
            console.log('dodo'); 
            document.getElementById("welcome").innerHTML = "Bonsoir,";
            classRename('jour', 'nuit');
            $("body").css("background-color", "#130029")  
        }
    //}
}


/*function transition(){
    //var colortoday=[].concat(backgroundToDay);
    var colortoday=[].concat(backgroundToDay);
    console.log(colortoday[1])
}*/


function timer(i){// i le nombre de secondes voulues dans le timer
    //i=2;
    //console.log(i);
    if (i>0){
        console.log(i)
        setTimeout(function(){timer(i-1)},1000);
    }

}




    // changer les couleurs en fonction de l'heure
function degrade(tab) {
    length=tab.length;
    //console.log(tab.length);
    while (length>=0) {
        if (timer(1)){
            console.log('coucou');
            length-=1
        }
        
    }
    
    
}
    
   // timer(10)
    

   

    
    
    
    
   // setTimeout(start,1000);



/*
 function start(){
        var h=new Date().getHours();
        console.log(h);
        if(Over==false){
            if(h>7 && h<20){
                if (body.className!='day 1'){
                    body.className='day 1';
                    nuit();
                }
            }else{
                if(body.className!='day 2'){
                    body.className='day 2';
                    nuit();
                }
            }
    }
    setTimeout(start,200);
}

    var Over=false;
    
// degrader le changement de couleurs 
var colortonight=["#c7acf8","#a662f3","#720fe2"]

var backtoday=["#720fe2","#a662f3","#c7acf8"]


var colortoday=[].concat(backtoday);
colortoday.reverse();

function buttoncheck(){
    Over=true;
    nuit();
}


function nuit(){
    var btndaynight=document.getElementById("btndaynight");
    if (body.className=='day 1'){
        body.className='day 2';
        nuit1(colortonight,backtonight);
        btndaynight.innerHTML="Click to day mode";
        console.log("go to night mode");
        $(".nuit-jour").text("jour ici");
    }
    else{
        body.className="day 1";
        nuit(colortoday,backtoday);
        btndaynight.innerHTML="Click to niht mode";
        console;log("jour ici");
        $(".nuit-jour").text("nuit ici");
    }
}

function nuit(i,j){
    $('.day').css('background',i[0]);
    $('.day').css('color',j[0]);

    setTimeout(function(){
        if(j.length>0){
            nuit1(i.slice(1),j.slice(1))
        }
    },10)
}


// changer les couleurs en fonction de l'heure
function start(){
    var h=new Date().getHours();
    if(Over==false){
        if(h>7 && h<20){
            if (body.className!='day 1'){
                body.className='day 1';
                nuit();
            }
        }else{
            if(body.className!='day 2'){
                body.className='day 2';
                nuit();
            }
        }
    }
    setTimeout(start,200);
}*/









/*

    $("#bonsoir").click(function(){
        if(all.className=='jour'){
            one='jour';
            two='nuit';
            document.getElementById("bonsoir").innerHTML = "Passer en mode jour";
            document.getElementById("welcome").innerHTML = "Bonsoir,";
            //$("body").fadeTo(4000,("background-color", "#130029"));
        }
        else {
            one='nuit';
            two='jour';
            document.getElementById("bonsoir").innerHTML = "Passer en mode nuit";
            document.getElementById("welcome").innerHTML = "Bonsoir,";
            //$("body").css("background-color", "#c7acf8");
        }
        
        var x = document.getElementsByClassName(one);
        console.log(x);
        console.log(x.length);
        
        var i = x.length;
        
        while(i>0){
            console.log("coucou"+i);
            x[0].className=two;
            i=i-1
        }
        */

    
        /*getElementById
        innerHTML*/
    
        
        /*x=x.map(x.className'nuit');*/
     /*   
        
    })*/


