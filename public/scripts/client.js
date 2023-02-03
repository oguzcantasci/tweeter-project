/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(function() {

  // Escape function for XSS
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Function to create tweet in HTML
  const createTweetElement = function(tweet) {
    const $tweet = $(`<article class="tweet">
    <header>
      <div>
        <span><img alt='profilep-pic' src ="https://i.imgur.com/73hZDYK.png"/></span>
        <span>${escape(tweet.user.name)}</span>
      </div>
        <span class="username">${escape(tweet.user.handle)}</span>
    </header>
    <p>${escape(tweet.content.text)}</p>
    <footer>
      <span>${timeago.format(tweet.created_at)}</span>
      <div>
        <i class="fa-solid fa-flag"></i>
        <i class="fa-solid fa-retweet"></i>
        <i class="fa-solid fa-heart"></i>
      </div>
    </footer>
  </article>`);
    return $tweet;
  };

  //Function to append a created tweet to HTML
  const renderTweets = function(tweetArray) {
    tweetArray.reverse();
    $('#tweets-container').empty();
    for (let tw of tweetArray) {
      const tweet = createTweetElement(tw);
      $('#tweets-container').append(tweet);
    }
  };

  // Function to show tweets on the webpage
  const loadTweets = function() {
    $.get("/tweets", function(tweets) {
      renderTweets(tweets);
    });
  };

  // Hide errors on page load to reveal them later if necessary
  $(".error-container").hide();
  
  // Load tweets from the tweets database
  loadTweets();

  //  Logic to handle new tweet submission
  $(".new-tweet form").on("submit", function(event) {
    event.preventDefault();
    // Validation checks
    if (!$("#tweet-text").val().trim()) {
      $(".error-text").text("Empty tweet is a bad tweet");
      $(".error-container").slideDown("slow");
      return;
    }
    if ($("#tweet-text").val().length > 140) {
      $(".error-text").text("You have exceeded the chracater limit. Type less FFS!");
      $(".error-container").slideDown("slow");
      return;
    }
    const formData = $(this).serialize();
    //
    $.post("/tweets", formData, function() {
      // On successful submission
      loadTweets(); // Load tweets again
      $("#tweet-text").val(""); // Reset form
      $(".counter").text(140); // Reset character counter
      $(".error-text").text(""); // Reset error
      $(".error-container").slideUp(); // Hide error
    });
  });
});