var btn=document.getElementById("btn2");
var list=document.getElementById("list");
var input=document.getElementById("text");

var curr='';
input.addEventListener('input',function(e){
    curr= e.target.value;
});
input.addEventListener('keyup',function(e){
   if(e.keyCode ==13){
     addlist();
   }
});

function addlist(){


   if(curr!==undefined&& curr!==null&&curr!==""){
    var newe =document.createElement('li')
    var text=document.createTextNode(curr)
    newe.appendChild(text);
    newe.id="item"+(list.childElementCount +1 )
    list.appendChild(newe)

    input.value='';
    curr='';
   }

   else{
      alert("ERROR Plz Fill something")
   }
   

}
btn.addEventListener('click',addlist);
