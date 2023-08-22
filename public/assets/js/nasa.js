//var to store user input
var userInput;
// var for search history array
var searchHistory = [];

//function to take in user input from search bar and makes a variable to store it
$("#searchBtn").on("click", function (event) {
  event.preventDefault();
  //need to add function to clear out "img-card" on click
  var userInput = $("#user-input").val().trim();
  console.log(userInput);

  search(userInput);
  //if statement to create search history list
  if (!searchHistory.includes(userInput)) {
    searchHistory.push(userInput);
    var prevSearch = $(
      '<li><button type="button">' + userInput + "</button></li>"
    );
    $("#search-history").append(prevSearch);
    console.log(prevSearch);
  }
  //local storage to set user-input
  localStorage.setItem("user-input", JSON.stringify(searchHistory));

  var searchHistoryList = JSON.parse(localStorage.getItem("user-input"));
  if (searchHistoryList !== null) {
    var searchArr = searchHistoryList.length - 1;
    var prevSearchList = searchArr[prevSearchList];
  }
  search(userInput);
});

//function for hitting enter to search
$("#user-input").keyup(function (event) {
  userInput = $("#user-input").val().trim();
  if (event.key === "Enter") {
    console.log(userInput);
    search(userInput);
    if (!searchHistory.includes(userInput)) {
      console.log(searchHistory);
      searchHistory.push(userInput);
      var prevSearch = $(
        '<li><button type="button" id="button">' + userInput + "</button></li>"
      );
      $("#search-history").append(prevSearch);
    }
    localStorage.setItem("user-input", JSON.stringify(searchHistory));

    search(userInput);
  }
});

//function to search nasa api
function search(userInput) {
  //var to auto add constellation to end of user search input
  //var constellation = "%20constellation";
  
  var nasaImageUrl = "https://images-api.nasa.gov/search?q=" + userInput;
  $.ajax({
    url: nasaImageUrl,
    method: "GET",
  }).then(function (searchResponse) {
    console.log(searchResponse);
    $("#nasa-card").empty();
    var imageReturn = searchResponse.collection.items[0].links[0].href;
    console.log(imageReturn);

    var userImage = $('<img src="' + imageReturn + '" />');

    $("#nasa-card").append(userImage);
  });
}

$(document).on("click", "#button", function () {
  var histList = $(this).text();
  search(histList);
});
