/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(function() {

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

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

  const renderTweets = function(tweetArray) {
    tweetArray.reverse();
    $('#tweets-container').empty();
    for (let tw of tweetArray) {
      const tweet = createTweetElement(tw);
      $('#tweets-container').append(tweet);
    }
  };

  const loadTweets = function() {
    $.get("/tweets", function(tweets) {
      renderTweets(tweets);
    });
  };

  $(".error-container").hide();
  
  loadTweets();

  $(".new-tweet form").on("submit", function(event) {
    event.preventDefault();
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
    $.post("/tweets", formData, function() {
      loadTweets();
      $("#tweet-text").val("");
      $(".counter").text(140);
      $(".error-text").text("");
      $(".error-container").slideUp();
    });
  });
});