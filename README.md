Welcome to the Depression Assessment App, were a user can go through a simple quiz to see if they should reach out to a therapist for help dealing with depression.

To install, clone this repo and the backend repo, located [here](https://github.com/wolenskyatwork/depression-api).
Run 'npm run start' to get this project going, localhost:3000 will open in your default browser.

Run through the questions to see how you score.

Some notes on organization:

State is managed with Redux and Redux-Saga. Redux-Saga handles making all async calls to the backend.

Containers/ dumb components

Optimization to stateless compmonents!

--ADD decision making process for which data came from the API
-- When calls to the API are actualy made

Note: Accessibility is not taken into account here - Decision to use <div> vs <button> component was tough.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). This comes with basic functionality and webpack, react, and testing.
