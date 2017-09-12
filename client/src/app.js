var AjaxRequest = require('./services/ajax_request');
var AnimalsView = require('./views/animals_view.js');

function app(){
    var animalsData = new AjaxRequest('http://localhost:3000/api/animals');
    var animals = new AnimalsView(animalsData);
    animalsData.get(animalsView.render);
}

window.addEventListener('load', app);