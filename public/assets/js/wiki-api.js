wikiSearch();
var divEl = document.getElementById("articleSearch");
function wikiSearch(searchInput) {
  $("#searchBtn").on("click", function (event) {
    var searchInput = $("#user-input").val().trim();
    var url =
      "https://en.wikipedia.org/w/api.php?action=query&prop=categories&list=search&titles=" +
      searchInput +
      "&format=json&srsearch=" +
      searchInput +
      "&origin=*";

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      //.then(function(response) {console.log(response);})
      //.then(function(data){return data.innerText;})
      .then(function (data) {
        console.log(data.query.search[0].snippet);
        console.log(data);
        $("#articleSearch").empty();
        var articleResponses = data.query.search[0].snippet;
        console.log(articleResponses);
        var pEl = document.createElement("p");
        pEl.innerHTML = JSON.stringify(articleResponses).replace(
          '<span class="searchmatch">',
          ""
        );

        class CustomReplacer {
          constructor(value) {
            pEl.value = value;
          }
          [Symbol.replace](string) {
            return string.replace('<span class="searchmatch">', "");
          }
        }
        console.log(pEl.toString().replace(new CustomReplacer()));
        //pEl.innerText = JSON.stringify(data.query.search[0].snippet);
        //var newPEl = pEl.toString().replace(/<span class=\"searchmatch">/g, '');
        // newPEl.textContent = pEl;
        // var sel = document.getElementsByTagName('<p>').innerHTML;
        // console.log(sel);
        // var redo = newPEl + sel;
        // console.log(redo);
        // var userArticle = $('<p>' + JSON.stringify(articleResponses) + '</p>');
        // console.log(userArticle);
        divEl.append(pEl);
      });
  });
}
