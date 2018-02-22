// GLOBAL VARIABLES
// ====================================================
var q;
var numRecords;
var begin_date;
var end_date;
var baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
var API = '8c52cece1c30420c8a349bd3d79e6547';

// FUNCTIONS
// ====================================================
$(".btn-submit").on("click", function() {

      q = $("#query").attr("data-search");
      numRecords = $("#get-num").attr("data-num");
      begin_date = $("#begin").attr("data-start");
      end_date = $("#end").attr("data-end");


      var url = baseURL + '?q=' + q + '&begin_date=' + begin_date + '&end_date=' + end_date + '&api-key=' + API;

      console.log(url);

      $.ajax({
        url: url,
        method: 'GET',
      }).then(function(response) {
        console.log(url);
        console.log(response);

        var results = response.response.docs;


        for (var i = 0; i < numRecords; i++) {

          var result = $("<div>");

          //TODO: create an icon for the return number....1, 2, 3, and so on
          var returnNum = $("<img>");
          result.append(returnNum);

          // return the article title
          var title = $("<h1>");
          title.text(result[i].docs.headline.main);
          result.append(title);

          // return the article author
          var author = $("<p>");
          author.text("By " + results[i].docs.byline.original);
          result.append(author);

          // the div for returning the articles
          $("#topA").append(result)
        }

      });
    });
    // MAIN LOGIC
    // ====================================================
