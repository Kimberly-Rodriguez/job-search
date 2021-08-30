
var getLocal = localStorage.getItem("searchHistory");
var splitLocal = ""
console.log(getLocal);

//Divides stored URLs by the comma added on line 68 of script-results




splitLocal = getLocal.split(",");
localStorage.setItem("lastSearch", splitLocal[0]);
console.log(splitLocal[0]);


$(".results").attr("href", localStorage.getItem("lastSearch"));



displayHistory();

// sets the results navbar tab to redirect to the previous search
//THIS IS IMPORTANT- without it the search history breaks after going from results back to history


function displayHistory() {
    for (var i = 0; i < splitLocal.length; i++) {
        var parsedSearch = splitLocal[i].split("category=");
        console.log(parsedSearch);
        parsedSearch = parsedSearch[1];
        parsedSearch = parsedSearch.split("&location=");

        var catParsed = parsedSearch[0];
        var locParsed = parsedSearch[1];

        var storedCat = catParsed.replace("%20", " ");
        var storedLoc = locParsed.replace(/%20/g, " ");

        console.log(storedCat);
        console.log(storedLoc);

        $(".his" + [i]).html("<a href='" + splitLocal[i] + "'>" + storedCat + "</br>" + storedLoc + "</a>");

    };

};


/*
var getLocal =  localStorage.getItem('history');

getLocal.split(",");

for (i=0; i<6; i++)


*/




// get local storage
var getLocal = localStorage.getItem("searchHistory");
console.log(getLocal);

var cleanLocal = getLocal.split(",");

console.log(cleanLocal);


// assign that to a variable 

// split by it commas 

// we then need to run a for loop 


