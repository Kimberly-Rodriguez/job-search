// initial probing of museAPI to see how it reacts
var categoryInput = "Accounting";
var locationInput = "Los Angeles, California";
var prepLoc = "";
var prepCat = "";


//properly formats all spaces and comas from the location input
function prepareInput() {
    prepLoc = locationInput.replace(/ /g, "%20")
    prepLoc = prepLoc.replace(/,/g, "%2C")
    console.log(prepLoc);
    prepCat = categoryInput.replace(/ /g, "%20")

}

// function set up to pass the prepped location input 



//queryString stores a url for us to redirect our own site, pushing the relevant information to the next page
var queryString = './results.html?category=' + categoryInput + '&location=' + prepLoc;

function redirectUrl() {
location.assign(queryString);
}