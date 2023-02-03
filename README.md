# Tweeter Project

Tweeter is a clone project of Twitter and it's a single-page web application that allows users to post short messages. The app is built using HTML, CSS, JavaScript, jQuery, and AJAX on the front end, and Node, Express, and MongoDB on the back end.

To use the app, install the necessary dependencies, start the web server, and visit the app in a web browser.

## Getting Started

1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>
3. Go to <http://localhost:8080/> in your browser.

## Dependencies

- express
- node 5.10.x or above
- body-parser
- chance
- md5

# Features

- Each tweet has name of the user, user's handle, and social media icons. 

!["Write a tweet and show it on time line"](https://github.com/oguzcantasci/tweeter-project/blob/master/docs/newtweet.gif?raw=true)

- Tweeter is responsive! Layout will automatically adjust to fit the width of the device. with the layout adjusting to fit different devices. Devices with larger(than 1024px) screens will have a two-column layout whereas devices with smaller screens will have single columnd layout where the sections are stacked; profile on top, tweets below.

!["Show responsiveness"](https://github.com/oguzcantasci/tweeter-project/blob/master/docs/responsive.gif?raw=true)



- The app features validation checks to prevent the submission of empty tweets or tweets longer than 140 characters. 

!["Can't write an empty tweet"](https://github.com/oguzcantasci/tweeter-project/blob/master/docs/empty.gif?raw=true)


- Tweets are limited to 140 characters only. 

!["Character limit error"](https://github.com/oguzcantasci/tweeter-project/blob/master/docs/long.gif?raw=true)