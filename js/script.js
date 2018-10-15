$( document ).ready(function() {
    console.log("ready now")
    
    
    $("#bonsoir").click(function(){
        if(all.className=='jour'){
            one='jour';
            two='nuit';
            document.getElementById("bonsoir").innerHTML = "Passer en mode jour";
            document.getElementById("welcome").innerHTML = "Bonsoir,";
        }
        else {
            one='nuit';
            two='jour';
            document.getElementById("bonsoir").innerHTML = "Passer en mode nuit";
            document.getElementById("welcome").innerHTML = "Bonsoir,";
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
        
        /*getElementById
        innerHTML*/
    
        
        /*x=x.map(x.className'nuit');*/
        
        
    })

});