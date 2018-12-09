var view = getView();
var model = getData();

document.getElementById("buttonOk").addEventListener("click", function () {
    getWeather2();
});

function getWeather2() {
    model.getWeather()
        .then(function (result) {
            console.log(result);
            view.showData(result);
        })
        .catch(function (error) {
            console.log(error.message);
        })
}