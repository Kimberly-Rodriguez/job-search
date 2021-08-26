// initial probing of museAPI to see how it reacts
var userInput = "Accounting";
var preppedInput = "";
var locationInput = "Los Angeles, California";

//properly formats all spaces and comas from the location input
function prepareInput() {
preppedInput = locationInput.replace(/ /g, "%20")
prepLoc = preppedInput.replace(/,/g, "%2C")
    console.log(preppedInput);

}

// function set up to pass the prepped location input 
function museFetch() {
    prepareInput()
    console.log(prepLoc);
    var url = "https://www.themuse.com/api/public/jobs?category=" + userInput + "&location=" + prepLoc + "&page=1&descending=true";
    fetch(url, {
        method: 'get', //get is the default

    })
        .then(function (response) {
            return response.json();
        })
    
        .then(function (data) {
            $("footer").html(data.results[0].contents);
            console.log(data);
        });
};

museFetch();

