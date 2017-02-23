Because front-end libraries are limited to React, Webpack, Bootstrap, and JQuery,
this app uses the App component as the highest level component which maintains the state.

I focused most heavily on creating a reusable form component when planning and implementing this app.

The general idea is that the App component maintains a state for the entire app, and the form component deals with its own state
while the user in interacting w/ the form, but has not submitted. After submit, the App component processes its state given the new information.


This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). This comes with basic functionality and webpack, react, and testing.
