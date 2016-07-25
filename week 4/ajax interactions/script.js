var apikey = "db7dd0d48cb8d76da7f394772761ea69";
document.addEventListener("DOMContentLoaded", bindButtons);

function bindButtons()
{
	document.getElementById("weatherSubmit").addEventListener("click", submitweather);
	document.getElementById("POSTSubmit").addEventListener("click", submitPOST);
}

function submitweather()
{
	var req = new XMLHttpRequest();
	var payload;
	if (zip.value != "")
	{
		payload = "zip=" + zip.value + ",us";
	}
	else if (citystate.value != "")
	{
		payload = "q=" + citystate.value + ",us";
		payload = payload.replace(/\s/g, "");
	}
	else
	{
		alert("no location entered");
		return;
		
	}
	req.open("GET", "http://api.openweathermap.org/data/2.5/weather?" + payload + "&appid=" + apikey, false);
	req.send(null);
	var response = JSON.parse(req.responseText);
	console.log(response);
	document.getElementById("location").textContent = response.name;
	document.getElementById("temp").textContent = round(response.main.temp - 273.15, 2)  + " C";
	document.getElementById("humidity").textContent = response.main.humidity + "%";
	event.preventDefault();
}

function submitPOST()
{
	var req = new XMLHttpRequest();
    var payload = {input1:null,input2:null};
    payload.input1 = document.getElementById("input1").value;
    payload.input2 = document.getElementById("input2").value;
	console.log(payload.input1);
    req.open("POST", "http://httpbin.org/post", true);
    req.setRequestHeader("Content-Type", "application/json");
    req.addEventListener("load",function(){
      if(req.status >= 200 && req.status < 400){
        var response = JSON.parse(JSON.parse(req.responseText).data);
        document.getElementById("return1").textContent = response.input1;
        document.getElementById("return2").textContent = response.input2;
      } else {
        console.log("Error in network request: " + request.statusText);
      }});
    req.send(JSON.stringify(payload));
    event.preventDefault();
}

function round(value, decimals) 
{
    return Number(Math.round(value+"e"+decimals)+"e-"+decimals);
}