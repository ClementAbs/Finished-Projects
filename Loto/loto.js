function loto(){    


alert("Bienvenue au Loto Javascript !");



a=prompt("Entrer votre num\u00e9ro 1") ;
b = prompt("Entre votre num\u00e9ro 2");
c = prompt("Entre votre num\u00e9ro 3");
d = prompt("Entre votre num\u00e9ro 4");
e = prompt("Entre votre num\u00e9ro 5");



alert("Tirage en cours ... "); 


  objectJavascript = document.getElementById("circle"); 
  objectJavascript2 = document.getElementById("circle2"); 
  objectJavascript2 = document.getElementById("circle3"); 
  objectJavascript2 = document.getElementById("circle4"); 
  objectJavascript2 = document.getElementById("circle5");


  // var myidbis,myidbis2,myidbis3,myidbis4,myidbis5;

// myidbis2  =document.getElementById("circle2bis")
// myidbis2  =document.write(b) ;
// myidbis3  =document.getElementById("circle3bis")
// myidbis3 =document.write(c);
// myidbis4 =document.getElementById("circle4bis")
// myidbis4  =document.write(d);
// myidbis5 =document.getElementById("circle5bis")
// myidbis5 = document.write(e);
 

  objectJavascript=Math.floor(Math.random() * 100);
    objectJavascript2=Math.floor(Math.random() * 100);
      objectJavascript3=Math.floor(Math.random() * 100);
        objectJavascript4=Math.floor(Math.random() * 100);
          objectJavascript5= Math.floor(Math.random() * 100);              //Math.floor(Math.random() * 100);

          if( a== objectJavascript){
          	alert ("Bien jou\u00e9 votre num\u00e9ro 1 correspond");
          }
                    if( b== objectJavascript2){
          	alert ("Bien jou\u00e9 votre num\u00e9ro 2 correspond");
          }
                    if( c== objectJavascript3){
          	alert ("Bien jou\u00e9 votre num\u00e9ro 3 correspond");
          }
                    if( d== objectJavascript4){
          	alert ("Bien jou\u00e9 votre num\u00e9ro 4 correspond");
          }
                    if( e == objectJavascript5){
          	alert ("Bien jou\u00e9 votre num\u00e9ro 5 correspond");
          }

  
  document.getElementById('bis').innerHTML= a;
  document.getElementById('2bis').innerHTML= b;
  document.getElementById('3bis').innerHTML= c;
  document.getElementById('4bis').innerHTML= d;
  document.getElementById('5bis').innerHTML= e;
         
  document.getElementById("circle").innerHTML = objectJavascript;
  document.getElementById("circle2").innerHTML = objectJavascript2;
  document.getElementById("circle3").innerHTML = objectJavascript3;
  document.getElementById("circle4").innerHTML = objectJavascript4;
  document.getElementById("circle5").innerHTML = objectJavascript5;

}




//   alert(objectJavascript);