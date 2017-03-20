Welcome to the Depression Assessment App, were a user can go through a simple quiz to see if they should reach out to a therapist for help dealing with depression.

# Installation

* clone this repo
* clone the [backend repo](https://github.com/wolenskyatwork/depression-api)
* run `npm run start` for both.

That's it! Run through the questions to see how you score.

## Some notes on organization ->

State is managed with Redux and Redux-Saga. Redux-Saga handles making all async calls to the backend, and uses selector functions to check if the data has already been loaded in order to prevent unnecessary calls.

React components are split into containers, which handles state and dispatch, and containers, which simple receive props and act accordingly.

## Navigation ->

Interesting in terms of how to handle back button, and if a user tried to just hit the results page. Within the results page, there is a view for when a user hits that page without a score. Also, if the user tries to go back to the assessment, the assessment resets.

Decision making process for which data came from the API ->
I decided to put anything a medical person might be inputting into a CMS, as data to be reached through the API. For example, the questions array could be changed to have different questions, different length based on new research. So the code is flexible with regards to simply making a request for this data.

Also there's no header or return link to homepage, but that would be something to wrap around components at a higher level, would also eliminate the need for the `<div className='page_wrapper' />` that I use on all the components.

## Potential optimizations ->
-Stateless components for homepage and results page
-Fine tune when to make the calls to the API, particularly the questions, answers, and severity stuff.

## Accessibility ->
Taken into account in terms of semantic hierarchy, but not in terms of using a traditional button element, which is friendly to keyboard navigation. Decision was made in order to quickly use onClick callbacks on buttons without the messiness of using a button, although in a live app this functionality would have to be greatly extended or a button div used.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). This comes with basic functionality and webpack, react, and testing.
