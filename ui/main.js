var counter=0;
var button=document.getElementById('counter');
button.onclick=function()
{
    
    var request=new XMLHttpRequest();
     request.onreadystatechange=function()
     {
         if(request.readyState===XMLHttpRequest.DONE)
         {if(request.status===200)
           {var counter=request.responseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();}
         }
     };
request.open('GET','http://rohithsrinivaasm.imad.hasura-app.io/counter',true);
request.send(null);
};

};

var submit=document.getElementById('sumbit_btn');
submit.onclick=function(){
     var request=new XMLHttpRequest();
     var nameInput=document.getElementById('name');
      var name=nameInput.value;
     request.onreadystatechange=function()
     {
         if(request.readyState===XMLHttpRequest.DONE)
         {if(request.status===200)
           { var names=request.responseText;
            names=JSON.parse(names);
               
           }
         }
     };
request.open('GET','http://rohithsrinivaasm.imad.hasura-app.io/sumbit?name='+name,true);
request.send(null);
    var names=[];
    var list='';
    for(var i=0;i<names.length;i++){
    list+='<li>' + names[i] + '</li>';
    
}
var ul=document.getElementById('namelist');
ul.innerHTML = list;
};