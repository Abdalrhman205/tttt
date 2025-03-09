

// start 
document.addEventListener("DOMContentLoaded",function(){
   var link1= document.getElementById("skill");
   var targetElement1=document.getElementById("skill1");
   link1.addEventListener("click",function (event) {
    event.preventDefault();
    targetElement1.scrollIntoView({
        behavior:"smooth"
    });
   });
    
});
document.addEventListener("DOMContentLoaded",function(){
   var link= document.getElementById("Achievements");
   var targetElement=document.getElementById("Achievements1");
   link.addEventListener("click",function (event) {
    event.preventDefault();
    targetElement.scrollIntoView({
        behavior:"smooth"
    });
   });
    
});
document.addEventListener("DOMContentLoaded",function(){
   var link2= document.getElementById("resume");
   var targetElement2=document.getElementById("resume1");
   link2.addEventListener("click",function (event) {
    event.preventDefault();
    targetElement2.scrollIntoView({
        behavior:"smooth"
    });
   });
    
});
document.addEventListener("DOMContentLoaded",function(){
   var link3= document.getElementById("about");
   var targetElement3=document.getElementById("about1");
   link3.addEventListener("click",function (event) {
    event.preventDefault();
    targetElement3.scrollIntoView({
        behavior:"smooth"
    });
   });
    
});


// end 