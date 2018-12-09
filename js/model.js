var getData = (function(){

    //var city = document.getElementById("city").value;
    

    function getWeather(){
        var city = document.getElementById("city").value;
        var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=9e23dfc778426296a0a07440dc2916b9&units=metric";
        fetch(url)
        .then(function(response) {  
            return response.json()
        })
    }
    
    return{
        getWeather : getWeather
    }

})();