/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const createTweetElement = function(tweet) {

    const $tweet = $(`<article class="tweet">
    <header>
      <div>
        <span><img alt='profilep-pic' src ="https://i.imgur.com/73hZDYK.png"/></span>
        <span>${tweet.user.name}</span>
      </div>
        <span class="username">${tweet.user.handle}</span>
    </header>
    <p>${tweet.content.text}</p>
    <footer>
      <span>${tweet.created_at}</span>
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
    for (let tw of tweetArray) {
      const tweet = createTweetElement(tw);
      $('#tweets-container').append(tweet);
    }
  };

  $(".new-tweet form").on("submit", function(event) {
    event.preventDefault();
    const formData = $(this).serialize();
    $.post("/tweets", formData);
  });

  
  renderTweets(data);
});