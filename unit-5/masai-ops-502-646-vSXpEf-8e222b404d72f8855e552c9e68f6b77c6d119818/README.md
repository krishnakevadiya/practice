## React-Usereducer-Product-List

## Maximum Marks - 10

## Submission Instructions [Please note]

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Checks for the initial store state  - 1 mark
 ✅ Check the reducer function for GET_PRODUCTS_REQUEST state - 1 mark
 ✅ Checks reducer function for GET_PRODUCTS_SUCCESS - 2 marks
 ✅ Checks reducer function for GET_PRODUCTS_FAILURE - 1 mark
 ✅ Checks for loading indicator handler for Get Products API request - 2 marks
 ✅ Checks if 40 products are being shown in the UI - 1 mark
 ✅ Checks for error handling on Get Products API request - 1 mark
```

#### Testing Objectives in the Evaluation.

1. Able to use the `useReducer` hooks to maintain the application state;
2. Able to use the `useReducer` state management hook to store the different responses for an API call.
3. Can use the data present inside the useReducer state to showcase it in the UI.

#### Problem Statement

Create the following application: Products Page using the boilerplate code provided in the zip file

#### Getting Started

- Make sure the node version is 16
- please make sure you do not push package-lock.json
- Run the following commands
  - `npm install`
  - `npm start`

#### Folder structure

- src
  - Components
    - ProductCard.jsx
  - actionCreators.js // //create action creator functions here, using the action types from actionTypes.js;
  - actionTypes.js // DO NOT MODIFY THIS FILE;
  - app.js
  - reducer.js //Complete the reducer function here
  - initialState.js //Initial State is provided here
  - index.js

#### Steps

- The user should be able to make the GET request, in the App.js component when the App component mounts/loads.
- API call should be made to `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products` (GET request).
- Use axios to make the API request.
- Ensure to maintain the GET request pattern, dispatch the GET_PRODUCTS_REQUEST first, then GET_PRODUCTS_SUCCESS in case of successful response, and GET_PRODUCTS_FAILURE in case of failure.
- Update the reducer state as well, with the appropriate data in case of REQUEST, SUCCESS, or FAILURE.
- While making the GET request, the application should be initially in the Loading state.
- After successful GET request, map through the data present in the reducer, in the UI inside Product Card Component.
- But, incase of unsuccessful request, show the "Error in fetching details" div.

### Note : The submissions will be invalid if `useReducer` hook is not used .

<img width="1473" alt="Screenshot 2022-12-25 at 7 34 10 PM" src="https://user-images.githubusercontent.com/74458714/209471208-b9c99665-0316-4ad9-98e5-09b348256bcb.png">

## Important Instructions:

- Do not remove the `data-testid` attributes from the boilerplate anywhere. Removing them, may lead to low scores
- Do not remove the classNames present on the tags, they are required for the UI.
- The `options`, `type`, `name`, `tags`, etc mentioned above are CASE-SENSITIVE. So ensure to use them in the same format, as given above.
- Do not change the current folder structure, and names of components/files provided.
- **DO NOT USE** `useState` hook anywhere in the application

### Genaral Instructions

- the system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
