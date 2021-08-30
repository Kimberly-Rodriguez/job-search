// initial probing of museAPI to see how it reacts
var categoryInput = "";
var locationInput = "";
var prepLoc = "";
var prepCat = "";
var queryString = './results.html?category=' + categoryInput + '&location=' + prepLoc;

var lastSearch = localStorage.getItem("lastSearch");

// sets the results navbar tab to redirect to the previous search
//THIS IS IMPORTANT- without it the search history breaks after going from results back to history
if (!lastSearch) {
    $(".results").attr("href", "#");
}
else {
    $(".results").attr("href", lastSearch);
};

//properly formats all spaces and comas from the location and catergory input
function prepareInput() {
    prepLoc = locationInput.trim();
    prepLoc = prepLoc.replace(/ /g, "%20");
    prepLoc = prepLoc.replace(/,/g, "%2C");
    console.log(prepLoc);
    prepCat = categoryInput.replace(/ /g, "%20");
}




//queryString stores prepared inputs as a URL
function setQuery() {
queryString = './results.html?category=' + prepCat + '&location=' + prepLoc;
}

//Sets queryString as our new URL and redirects us
function redirectUrl() {
location.assign(queryString);
}

//event listener for a button click, receiving user input, prepping it
// and pushing the prepped inputs to our url
$(".uk-button").on("click", function(event){
    event.preventDefault();
    categoryInput = $(".categoryInput").val();
    locationInput = $(".locationInput").val();
    // console.log(categoryInput);
    // console.log(locationInput);
    prepareInput();
    // console.log(prepLoc);
    // console.log(prepCat);
    setQuery();
    console.log(queryString);
    redirectUrl();
});