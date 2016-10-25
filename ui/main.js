var counter=0;
var button=document.getElementById('button');
button.onclick=function(){

var span=document.getElementById('span');
counter=counter+1;
span.innerhtml=counter.toString();
};