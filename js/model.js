var getWeather = (function(){

    var city = getCity();
    var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=9e23dfc778426296a0a07440dc2916b9&units=metric";

    function getData(showData, ){
        fetch(url)
            .then(blob => blob.json())
            .then(data => {showData(data);
        })
    }
    return{
        getData : getData
    }

})();