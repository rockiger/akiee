/* This module deals with entering search via a special entry field */
"use strict";
var assert = require("assert");

var DURATION = 50;

/*
* ==========
* Globals:
*/
var $;

/*
 * =========
 * Constants:
 */

/* Function(jquery) -> Void
 * Consumes jquery-object and toggles the search form
 */
function toggleSearchBox(jquery) {
   console.log("toogleSearchBox");
   $ = jquery;
   if($("#show-searchbox").hasClass("active")) {
        console.log("cancelSearchBox");
        cancelSearchBox(jquery);
   } else {
        console.log("openSearchBox");
        openSearchBox(jquery);
   }
}

/* Void -> Void
 * Closes the search box and clears the form
 */
function cancelSearchBox(jquery) {
    $ = jquery;
    var searchBox = $("#search-form");
    var searchInput = $("#search-input");
    var enterSearchBox = $("#show-searchbox");
    
    searchInput.val("");
    searchBox.slideUp(DURATION);
    $('#list').animate({ top: "52px" }, DURATION);
    $('#list tr').show();
    enterSearchBox.removeClass("active");
}

/* Void -> Void
 * opens the search box and sets the search active
 */

function openSearchBox(jquery) {
    var searchBox = $("#search-form");
    var searchInput = $("#search-input");
    var enterSearchBox = $("#show-searchbox");
    
    $('#list').animate({ top: "107px" }, DURATION);
    searchBox.slideDown(DURATION);
    searchInput.focus();
    enterSearchBox.addClass("active");
}
exports.toggleSearchBox = toggleSearchBox;
exports.cancelSearchBox = cancelSearchBox;