var date= new Date();
var eidDay = new Date('19 july 2021');
var dateMili = date.getTime();
var eidDayMili = eidDay.getTime();
 var diff = eidDayMili - dateMili;
 
      var day =Math.round( diff/ (1000*60*60*24));
       var hours = Math.round( (diff % (1000*60*60*24)) / (1000*60*60));
       var min = Math.round((diff %  (1000*60*60)) /(1000*60) )
    
       console.log(min)
 
function foo(){
    document.getElementById('day').innerHTML +=day;
 document.getElementById('hours').innerHTML +=hours;
 document.getElementById('mint').innerHTML +=min
}
foo()