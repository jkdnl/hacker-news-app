# Hacker News App

An app provides the news content taken from official Hacker News API.
Each news is available at their personal page alongside with 
the comments tree available for the page.

## Installation

In the terminal run:

>git clone https://github.com/jkdnl/hacker-news-app.git

>yarn install

>yarn start

The app is running on local host.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Stack

* React `v18`
* TypeScript
* Redux, Redux-toolkit
* React-router-dom `v5`


* TailwindCSS
* React-Icons
* Axios

### Features

* Strict Mode is disabled for React and Router compatibility
* The news feed is refreshed automatically every 60s
* User is able to manually refresh the feed (for instance in case some news were not rendered properly)
* User is able to refresh the comments of each news on its respective page
* Only main comments are rendered at the news page, user may load the comment's replies by clicking at the "Show replies" button


