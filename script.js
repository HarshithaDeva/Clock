function showTime() {
    var time= new Date();
    var hr=time.getHours();
    var min=time.getMinutes();
    var sec=time.getSeconds();
    var day=time.getDay();
    var date=time.getDate();
    var mon=time.getMonth();
    var yr=time.getFullYear();
    
  
    var ap="AM";
    if (hr>12){
        hr-=12;
        ap="PM"
    }
    if(hr==0){
        hr=12;
    }
    if(hr<10){hr="0"+hr};
    if(min<10){min="0"+min};
    if(sec<10){sec="0"+sec};

    var week=["Sunday"," Monday", "Tuesday","Wednesday", "Thursday","Friday","Saturday"];
    var months=["January","February","March","April","May","June","July","August","September","October","November","December"]
    crtDate=week[day]+","+date+" "+months[mon]+","+yr;
    crtTime=hr+":"+min+":"+sec+" "+ap;
    document.getElementById("ctime").innerHTML=crtTime;
    document.getElementById("cdate").innerHTML=crtDate;
    setTimeout(showTime,1000);
}
showTime();
