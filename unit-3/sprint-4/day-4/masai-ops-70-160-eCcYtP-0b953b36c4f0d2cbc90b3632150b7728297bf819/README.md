# JS-masai-job-listing

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ should have basic structure -  1 marks
 ✅ should have drop down - 1 marks
 ✅ should display 10 cards on load - 2 marks
 ✅ should filter by role  - 2 marks
 ✅ should search by language and display results - 2 marks
 ✅ should display no matche found for 0 results - 1 mark
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
  - index.js
- `__tests__`
  - index.spec.js
- README.md
- package.json

## Instructions

- Read entire question carefully for at-least 15 mins, understand it and then code it.
- Don’t jump directly into code.
- Use HTML, CSS and JS DOM to solve this question.

## Problem Statement:

- Your task is to build a page where you can see all jobs listed in form of cards.
- Your UI should look like

![Screenshot 2022-09-07 at 10.29.29 AM.png](https://saber-columnist-50d.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fb5592dad-edd4-4f56-addc-86c576984530%2FScreenshot_2022-09-07_at_10.29.29_AM.png?table=block&id=b2e4e67f-6ba6-423c-8909-35e1af2cd7ea&spaceId=cee71247-c529-4d1e-ad44-34f1b0f1b1c6&width=2000&userId=&cache=v2)

- Populate UI by fetching data from json file provided in the boilerplate

- Design should look similar to given image above.
- Use some dummy or placeholder images for logo.

![Screenshot 2022-09-07 at 10.36.35 AM.png](https://saber-columnist-50d.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F584471a1-ae17-4034-8c34-ec5ce20cd273%2FScreenshot_2022-09-07_at_10.36.35_AM.png?table=block&id=8f956a6e-4914-4bde-b63e-5f005ff22932&spaceId=cee71247-c529-4d1e-ad44-34f1b0f1b1c6&width=2000&userId=&cache=v2)

- Your app should also have filter and search functionality
  - Filter by role (use Select tag with onchange event)
  - Search by language
    - Create a search bar and when user searches for any language for eg: HTML, jobs related to HTML should be displayed.
- Boilerplate
  - You are given the following  functions to complete
    - displayCards - this function should accept data and retutn the maincontainer which will have all the details as cards.
    - filterByRole - this should have the logic to filter the given data by role(FullStack or Frontnd) on selecting a role make sure the results are case insensititve i.e., able to filter for frontend or Frontend
    - searchByLanguage - this should have the logic to filter the given data by language(Java or Javascript HTML or Ruby etc..) on clicking the search button with a valid search keyword input . Make sure the search results are case insensititve i.e., able to filter for Java or java
      - if the there are no results for a particular input print `No match found`

## Submission

- Please submit deployed link and Github link of code.
- **Push your code into `masai-repo`, don’t submit personal repo links.**
- Please double check if deployed version works or not (run deployed version on your laptop and then submit it).
- Please verify your submissions are correct.
- Make sure you follow all instructions carefully.
- Submit before deadline.

### Rubrics / Criteria to be judged upon

- HTML, CSS, JS DOM.
- Filtering and search functionality.
- Pixel perfect UI.
- Code cleanliness.

**Note:- Do not use any other names for the methods other than mentioned.**

####

## Boilerplate

- Do not change the given folder structure
- index.html
- You can find JS code under src folder in a filename index.js
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
