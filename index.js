function getCity(){
    var city = document.getElementById("city").value;
    return city;
}


function getTemp(){
  var image =  document.getElementById("weatherImg"); 
  var resultTable = document.getElementById("tableId");
  var city = getCity();
  var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=9e23dfc778426296a0a07440dc2916b9&units=metric";
    fetch(url)
      .then(function(response) {  
          if (response.status != 200) {  
            resultTable.style = "display:none";
            image.style = "display:none";
            alert("Введены неверные данные!");             
          }else{
            response.json().then(function(data) {
              console.log(data);  
              var temp = data.main.temp;
              var humidity = data.main.humidity;
              var wind = data.wind.speed;
              var weatherImg = data.weather[0].main;
              resultTable.style = "display:inline"
              document.getElementById("resultTemp").innerHTML = temp +" ^C"; 
              document.getElementById("resultHumidity").innerHTML = humidity +" %";   
              document.getElementById("resultWind").innerHTML = wind +" м/с";        
              if(weatherImg == "Clouds")  {
                image.src = "cloudy.jpg";
                image.style = "display:inline"
              }else{
                if(weatherImg == "Clear"){
                  image.src = "sunny.jpg";
                  image.style = "display:inline"
                }else{
                  if(weatherImg == "Rain"){
                    image.src = "rainy.jpg";
                    image.style = "display:inline"
                  }else{
                    if(weatherImg == "Snow"){
                      image.src = "snow.jpg";
                      image.style = "display:inline"
                    }
                  }
                }
              }
            });  
          }
        }  
      ) 
}
