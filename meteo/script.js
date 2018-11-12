// window.fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&units=metric&appid=a88a8238bc865390fc56584b2607d08f')
// 	.then(res => res.json()) 
// 	.then(resJson => console.log(resJson))





function buttonClickGET() {

	var url="http://api.openweathermap.org/data/2.5/weather?q=Paris&lang=fr&units=metric&appid=a88a8238bc865390fc56584b2607d08f"


	}
	var callBackGetSuccess = function(data){
		console.log("donnees api", data);
		console.log("Meteo temp: " + data.main.temp);		
		var element = document.getElementById("zonemeteo")
		element.innerHTML="La temperature est de " + data.main.temp;
		
	
		}


function buttonClickGET()
{
		var query = document.getElementById("queryLoc").value;

		var url = "http://api.openweathermap.org/data/2.5/weather?q="+query+"&units=metric&appid=a88a8238bc865390fc56584b2607d08f";

		$.get(url, callBackGetSuccess).done(function()	{


		})

		.fail(function(){

			alert("error");

		})



}