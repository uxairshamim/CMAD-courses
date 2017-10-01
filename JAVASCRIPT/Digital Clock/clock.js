
function digitalClock(){

var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();
var seconds = time.getSeconds();

var sessions = "AM"



if (hours == 0){

    hours = 12;

}

 

if(hours > 12){

    
    hours = hours - 12;
    sessions = "PM";
  
   

}

if(hours < 10){

    hours ='0'+hours;

}

if(minutes < 10){

    minutes = '0'+minutes;
}

if(seconds < 10){

    seconds = '0'+seconds;
}

var currentTime = hours+":"+minutes+":"+seconds+" "+sessions;

document.getElementById("clock").innerHTML = currentTime; 



}


setInterval(digitalClock,1000);
