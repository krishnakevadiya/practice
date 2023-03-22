# JS-cascade-results

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to make submission - 1 mark(default)
 ✅ Should have defined cascadeResults function - 2 mark
 ✅ Should return expected results for data 1- 2 mark
 ✅ Should return expected results for data 2 -  2 marks
 ✅ Should return expected results for data 3 -  3marks

```

## Installation

- you can use any node version that works for you ( 14+ )
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install** to install the node modules
- Run **npm test** for the test cases.

## Description

- The `cascadeResults` function should accept any number of functions, and it should return a new function that accepts one parameter `param`.
- The returned function should call the first function in the cascadeResults function with the parameter `param`, and call the second function with the result of the first function and so on.
- The returned function should continue calling each function in the cascadeResult function in order, following the same pattern, and return the value from the last function.

### Sample explantion for better understanding

let res = cascadeResult(`x=>x*5`,`x=>x/2`,`x=>x+1`)(`4`)

1. the param is 4
2. function 1 : `x=>x*5` return `4*5 = 20`
3. now invoke the next function with the above returned result
4. function 2 : `x=>x/2` returns `20/2 = 10`
5. now invoke the next function with the above returned result which is 6
6. function 3 : `x=>x+1` returs `10+1 = 11`
7. there are no functions left so return 5 hence the final answer is `11`

#### note : the number of functions passed into cascadeResults is not always 3

## Boilerplate

- Do not change the given folder structure
- inside src you will index.js file that is where you need to write the mentioned methods
- you can find the test case under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not to just submit it last minute
- try to keep one submission at a time
