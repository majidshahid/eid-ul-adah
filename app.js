





  setInterval(function() { 
    var countDownDate = new Date("Jul 20, 2021 ").getTime();        
   var now = new Date().getTime();
   var distance = countDownDate - now;

   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   console.log(days);
   console.log(hours);
   console.log(minutes);
   document.getElementById('day').innerHTML =days;
   document.getElementById('hours').innerHTML =hours;
   document.getElementById('mint').innerHTML =minutes
 
 
 },1000)