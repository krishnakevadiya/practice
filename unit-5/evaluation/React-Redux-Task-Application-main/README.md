## React-Redux-Task-Application

## Submission Instructions [Please note]

## Maximum Marks - 15

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if proper GET request is being made and initial data is present on UI - 1 mark
 ✅ Check if the initial data is being shown on the Navbar  - 1 mark
 ✅ Check if the user is redirected to the EditPage on click of Edit button - 1 mark
 ✅ Check if the data in the EditPage input boxes are prefilled with the data - 1 mark
 ✅ Check if the prefilled data presists even with page refresh - 1 mark
 ✅ Check: PATCH request, redirecting the user to homepage is request is successful, and shows updated data on UI - 3 marks
 ✅ Check: POST request for Add task, re-directed to homepage if successful and shows added data on UI  - 3 marks
 ✅ Check: DELETE request, should remove task from UI and update the navbar with the new count as well - 3 marks
```

### Note : Submitting just the boileplate on CP will give you `TestFailed` error , build the features one by one and submit to see the failed and passed tests.

### Testing Objectives

- Ability to set up a Redux and connect it with your React application
- Ability to use Redux, and Redux-Thunk, for storing and accessing application data, respectively
- Ability to create a CRUD application, using JSON-server

### Problem Statement

- Create the following application: Task Application using the boilerplate code provided in the zip file

### Getting Started

- Unzip the boilerplate file and then copy the "**contents**" of the unzipped file (`rct-211-b21-e4-evaluation`), in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install`
  - `npm start`
  - `npm run server` -> to start the json-server
- **_Note_**:

1. Libraries needs to be installed by yourself
2. Make sure that the json-server is up and running at port 8080
3. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it
4. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server url

### Understanding Component Structure

- App
  - Navbar
  - MainRoutes
    - Path: “/”, Page: Homepage
      - TaskItems component
    - Path: “/edit/:id", Page: Editpage
    - Path: “/add”, Page: AddTask

**NOTE**: Redux is mandatory for this application

1. Use the provided ActionTypes and DO NOT change the initial state in the reducer file.
2. Some of the boilerplate is provided. You are expected to write all the other remaining parts (action-creators, reducer file logic, etc) to set up the redux store.
3. Make sure Redux is connected with your React application properly, and you have access to the Redux store data

### JSON Data:

- db.json file is included in the boilerplate zip file, with the initial shoes data. **Do not overwrite/modify this data**

### Features to build:

1. READ:

- Fetch the tasks data when the application mounts, inside the Homepage components, and render it by mapping the data through the TaskItems component

2. UPDATE:

- On clicking the Edit button on the TaskItem component, the user should be redirected to the `/edit/:id` page, where the data should be prefilled on the input tag and select tag based on the id.
- The data on the input tag and select tag should persist on even with page refresh.
- Make a PATCH request to update the data, and update the data in the Redux store as well, to reflect the change in the data. (Do NOT make/chain a GET request, after the PATCH request)
- Redirect the user to the homepage, if the PATCH request is successful, and the count on the navbar should be updated as well.

3. CREATE:

- The user should be able to add task, by giving the task title, the status should be 'false' by default.
- On clicking the 'Add Task' button, a POST request should be made and the data inside the Redux store should be updated as well, to include the newly added data.
  (Do NOT make/chain a GET request, after the POST request)
- On successful request, redirect the user to the homepage, and the count on the navbar should be updated as well.

4. DELETE:

- The user should be able to delete a task, by making a DELETE api request, after clicking the delete button on the Task Item card.
- The data should be removed from the Redux store as well (Do NOT make/chain a GET request after the DELETE request)
- The count should be updated on the UI as well.

### Application Screenshots:

![Imgur](https://i.imgur.com/WslykPU.png)
![Imgur](https://i.imgur.com/dYdYqFq.png)
![Imgur](https://i.imgur.com/nBfFZju.png)
![Imgur](https://i.imgur.com/wyKUbNM.png)
![Imgur](https://i.imgur.com/nBfFZju.png)

### To test application locally

- Go to cypress/e2e/rct-211-b21-c2.cy.js file
- ![](https://i.imgur.com/nMJCCDL.png)
- comment-out the first import line (1), and un-commnent the second data variable (lines 3 - 9)
- and run this command: `npx cypress run`
- After testing the application locally, ensure, to revert back the above changes, to it original condition, before submitting uploading the code on GitHub or submitting the link to CP platform.

### Important Instructions:

- Do not remove `data-testid=’xxx’` from anywhere inside the code. They are the test inputs, removing them, may lead to low scores.
- Do not change the current folder structure, and names of components provided.
- Only use the data present in the db.json file, and do not modify the data in the json file.
- DO NOT UPLOAD screenshots or video files generated from local cypress testing, to GitHub.

#### General Instructions

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- So we request you to read the problem carefully and debug before itself
- We also request you to not to just submit it last minute
- Try to keep one submission at a time
