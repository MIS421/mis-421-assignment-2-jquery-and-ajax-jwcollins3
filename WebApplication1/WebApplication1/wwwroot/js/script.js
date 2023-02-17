var len;
var results = '';

function timeNow() {
    var time = new Date();
    time = time.getHours() + ":" + time.getMinutes();

    $('#time').html('<p class = "text">' + time + '</p>')
    $('#time').css("visibility", "visible");
}

function timeView() {
    timeNow();
    $('#time').dialog()
}

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "17a86c0b6ae1439e8e6f7ce90dd8c158");
      },
      type: "GET",
    })
    .done(function (data) {
        len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
          results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
        }
        var Search = document.getElementById("searchResults");
        Search.style.visibility = "visible";

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

function feelingLucky() {
    var params = {
        "q": $("#query").val(),
        "count": "50",
        "offset": "0",
        "mkt": "en-us"
    };

    $.ajax({
        url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "17a86c0b6ae1439e8e6f7ce90dd8c158");
        },
        type: "GET",
    })
        .done(function (data) {
            results += "<p><a href='" + data.webPages.value[0].url + "'>" + data.webPages.value[0].name + "</a>: " + data.webPages.value[0].snippet + "</p>";
            window.open(results);
            var Search = document.getElementById("searchResults");
            Search.style.visibility = "visible";

            $('#searchResults').html(results);
            $('#searchResults').dialog();
        })
        .fail(function () {
            alert("error");
        });

    
}

function searchEvent() {
    apiSearch();
}

function backgroundChange() {
    document.body.style.backgroundImage = "url('https://imgix.bustle.com/fatherly/2018/05/dafjashfjaskfas-1.jpg?w=768&h=416&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2')";
}

