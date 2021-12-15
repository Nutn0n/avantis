/* iPhone Animation */ 

const market = ["SET","HSI", "NDX", "N225"];
var counter = 0;
document.getElementById("iphone-animation").classList.add(market[counter]);
setInterval(function(){ 
    counter++; 
    document.getElementById("iphone-animation").classList.add(market[counter]);
    document.getElementById("iphone-animation").classList.remove(market[counter-1]);
    if(counter == market.length ){
        document.getElementById("iphone-animation").classList.remove(market[counter]);
        counter = 0;
        document.getElementById("iphone-animation").classList.add(market[counter]);
    }
}, 3000);
