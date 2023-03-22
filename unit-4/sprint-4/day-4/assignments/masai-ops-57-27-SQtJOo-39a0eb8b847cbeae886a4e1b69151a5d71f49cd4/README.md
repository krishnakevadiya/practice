# JS-Crud

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ todo list is empty initially- 2 marks
 ✅ create task works properly - 2 marks
 ✅ delete task works properly - 2 marks
 ✅ update task works properly - 3 marks
```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Folder structure

- index.html
- src
  - crud.js
- `__tests__`
  - crud.spec.js
- README.md
- package.json

## Description

- You need to build a CRUD (create, read, update, delete) application - Todo app

  - You are given an input box, and 1 button - Add Task 
  - The user should be able to type into the input box and add it to the list of tasks
  - The list of tasks need to be stored in your local storage with key name ```todo```
  - This is what your schema (array of task objects) should like when you store them
    - ```
      todo: [
       {
        id: 1,
        isCompleted: false,
        title: "Buy Table"
       }
      ]
      ```

- You need to complete the given functions such that your crud works properly

  - ```createTask```
    - This function will take the task title as parameter, and add to your list of existing tasks (if any)
    - This function shpuld get triggered when ```Add Task``` button is clicked
    - The task you added should be visible on the DOM with these details:
    - Id, status, and task title
    - 2 buttons ```Delete Task``` & ```Mark as completed```
  
  - ```DeleteTask```
    - This function will take the id of the task you want to delete as parameter
    - This function should get triggered on the click of ```Delete Task``` button 
  
  - ```UpdateTask```
    - This function will take the id of the task you want to update as parameter
    - This function should get triggered on the click of ```Mark as completed``` button 
  
  
  **NOTE: All of the create, update, delete function should trigger DOM updates in real time


  **Note:- Do not use any other names for the methods other than mentioned.**

  ####

## Boilerplate

- Do not change the given folder structure
- index.html
- You can find JS code under src folder in a filename crud.js
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
