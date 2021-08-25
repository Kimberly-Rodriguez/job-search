// initial probing of museAPI to see how it reacts
var userInput = "Accounting";
var preppedInput = "";
var locationInput = "";


function prepareInput(){
    locationInput.replace(" ", "%20")

}


function museFetch(){

    var url = "https://www.themuse.com/api/public/jobs?category="+userInput+"&location="+locationInput+"&page=1&descending=true";
fetch(url, {
    method: 'get', //get is the default

})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });
};

museFetch();