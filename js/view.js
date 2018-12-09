var getView = (function(){

    var image =  document.getElementById("weatherImg"); 
    var resultTable = document.getElementById("tableId");


    function showData(data){
        var temp = data.main.temp;
        var humidity = data.main.humidity;
        var wind = data.wind.speed;
        var weatherImg = data.weather[0].main;

        document.getElementById("resultTemp").innerHTML = temp +" ^C"; 
        document.getElementById("resultHumidity").innerHTML = humidity +" %";   
        document.getElementById("resultWind").innerHTML = wind +" м/с";        
        /*if(weatherImg == "Clouds")  {
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
            }*/
    }

    return {
        showData : showData
    }
})();