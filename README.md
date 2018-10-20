# MyReads Project

This project is developed using React and consumes the Books API provided by Udacity. 

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Features

* The App comprises two pages: the home page and the search page.

### Home Page

* The home page shows three bookshelves among which books can be shuffled.
* The home page also has a link to the search page(/search).

### Search Page

* The search page consists of an input search field. As the search terms are entered, relevant results are fetched from the API and shown on the search page.
* Books can be added from the fetched results to the bookshelves on the main page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
