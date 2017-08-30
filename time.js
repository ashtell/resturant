function checkopenclose(timesopen, timesclose, datesopen, message) {
    'use strict';
    var date, time, day, open;
    date = new Date();
    time = date.getHours();
    day = date.getDay();
    open = true;
    for (var i = 0; i < datesopen.length; i++){
        if(datesopen[i] === 0 && i == day){
            open = true;
            i = 8;
        }else{
            open = false;
        }
    }
    if((time >= timesopen) && (time < timesclose) && (open === true)){
        var content = message + ' is open!';
        document.getElementById(message).innerHTML = content + '\n';
        document.getElementById(message).style.borderRadius= '15px/50px'
        document.getElementById(message).style.color = '#4F8A10';
        document.getElementById(message).style.backgroundColor = '#DFF2BF';
        return true;
        
    }else{
         var content = message + ' is closed!';
        document.getElementById(message).innerHTML = content + '\n';
        document.getElementById(message).style.borderRadius= '15px/50px';
        document.getElementById(message).style.color = '#D8000C';
        document.getElementById(message).style.backgroundColor = '#FFBABA';
        return false;
    }
}
function runItAll(){
var data = new Date();
var today = data.getDay();
var dayName;
    if(today == 0){
        dayName = "Sunday";
    }else if(today == 1){
        dayName = "Monday";
    }else if(today == 2){
        dayName = "Tuesday";
    }else if(today == 3){
        dayName = "Wednesday";
    }else if(today == 4){
        dayName = "Thursday";
    }else if(today == 5){
        dayName = "Friday";
    }else{
        dayName = "Saturday";
    }
var sunday = 0;
var monday = 1;
var thursday = 4;
var friday = 5;
var saturday = 6;
var hourchange = false;
var hours = data.getHours();
    if(hours == 12){
        hourchange = true;
    }
    else if(hours > 10){
        hours = hours - 12;
        hourchange = true;
    }else{
        hours = "0" + hours;
        hourchange = false;
    }
var minutes = data.getMinutes();
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if(hourchange){
        minutes = minutes + " PM";
    }else{
        minutes = minutes + " AM";
    }
var time = hours + ":" + minutes;
if(today == sunday){
    checkopenclose(11, 20, [1,0,0,0,0,0,0], "The MarketPlace");
    checkopenclose(10,19,[0,0,0,0,0,0,0], "Junction");
    checkopenclose(11,14,[1,0,0,0,0,0,1], "The skyroom");
    checkopenclose(7,21,[1,0,0,0,0,0,1], "The Hub");
    checkopenclose(12,22.5,[0,0,0,0,0,0,0], "Quad Side Cafe");
    checkopenclose(7,19,[1,0,0,0,0,0,1], "Lukes cafe on the Quad");
    checkopenclose(7.5,20,[1,0,0,0,0,0,1], "Artist's Block");
    checkopenclose(7.5,19,[1,0,0,0,0,0,1], "Shaw's Kitchen");
    checkopenclose(7.5,17.5,[1,0,0,0,0,0,1], "The Nook");
    checkopenclose(7,22,[1,0,0,0,0,0,1], "The Quick Stop");
}else if(today >= monday && today <= thursday){
    checkopenclose(11, 20, [1,0,0,0,0,0,0], "The MarketPlace");
    checkopenclose(7,19,[0,0,0,0,0,0,0], "Junction");
    checkopenclose(11,14,[1,0,0,0,0,0,1], "The skyroom");
    checkopenclose(7,21,[1,0,0,0,0,0,1], "The Hub");
    checkopenclose(7,22.5,[0,0,0,0,0,0,0], "Quad Side Cafe");
    checkopenclose(7,19,[1,0,0,0,0,0,1], "Lukes cafe on the Quad");
    checkopenclose(7.5,20,[1,0,0,0,0,0,1], "Artist's Block");
    checkopenclose(7.5,19,[1,0,0,0,0,0,1], "Shaw's Kitchen");
    checkopenclose(7.5,17.5,[1,0,0,0,0,0,1], "The Nook");
    checkopenclose(7,22,[1,0,0,0,0,0,1], "The Quick Stop");
}else if(today == friday){
    checkopenclose(11, 20, [1,0,0,0,0,0,0], "The MarketPlace");
    checkopenclose(7,14,[0,0,0,0,0,0,0], "Junction");
    checkopenclose(11,14,[1,0,0,0,0,0,1], "The skyroom");
    checkopenclose(7,19,[1,0,0,0,0,0,1], "The Hub");
    checkopenclose(7,17,[0,0,0,0,0,0,0], "Quad Side Cafe");
    checkopenclose(7,18,[1,0,0,0,0,0,1], "Lukes cafe on the Quad");
    checkopenclose(7.5,18,[1,0,0,0,0,0,1], "Artist's Block");
    checkopenclose(7.5,14,[1,0,0,0,0,0,1], "Shaw's Kitchen");
    checkopenclose(7.5,15,[1,0,0,0,0,0,1], "The Nook");
    checkopenclose(7,21,[1,0,0,0,0,0,1], "The Quick Stop");
}else if(today == saturday){
    checkopenclose(11, 20, [1,0,0,0,0,0,0], "The MarketPlace");
    checkopenclose(7,19,[0,0,0,0,0,0,1], "Junction");
    checkopenclose(11,14,[1,0,0,0,0,0,1], "The skyroom");
    checkopenclose(7,21,[1,0,0,0,0,0,1], "The Hub");
    checkopenclose(10,17,[0,0,0,0,0,0,0], "Quad Side Cafe");
    checkopenclose(7,19,[1,0,0,0,0,0,1], "Lukes cafe on the Quad");
    checkopenclose(7.5,20,[1,0,0,0,0,0,1], "Artist's Block");
    checkopenclose(7.5,19,[1,0,0,0,0,0,1], "Shaw's Kitchen");
    checkopenclose(7.5,17.5,[1,0,0,0,0,0,1], "The Nook");
    checkopenclose(7,22,[1,0,0,0,0,0,1], "The Quick Stop");
}
if(today >= 1 && today <= 6){
    checkopenclose(21,23,[0,0,0,0,0,0,1], "Junction Late Night");
}
    document.getElementById('update').innerHTML = "Time updated as of " + dayName + " at " + time;
    console.log("updated")
}
runItAll();
window.setInterval(function(){runItAll();}, 60000);
