# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## PDF Generation:
* `npm run build` to build any modifications in react app (needed for updating the static assets like css, images, etc.)
* `npm run ssr` to run the nodejs server on localhost:8000. It serves the react app with ssr and all static assets.
* `npm run pdf` to generate a pdf file from the react app. The node.js server needs to be running while this command.
  * The resulting pdf is saved in the `hn.pdf` file in the root. 

## Editing
* The `browser` folder contains the code for running pupeteer and generating the pdf.
* The `server` folder contains the code for running the nodejs server.
  * This folder will be responsible for fetching and passing the data to the app or serving
  it for the react app to fetch.
* The `src` folder contains the code for the react app - future reports.