var counter=0;
var button=document.getElementById('counter');
button.onclick=function(){
    
    var request=new XMLHttpRequest();
     request.onreadystatechange=function(){
         
     };
    var span=document.getElementById('count');
    counter=counter+1;
    span.innerHTML=counter.toString();
};