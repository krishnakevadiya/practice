const {createTask, deleteTask, updateTask } = require("../crud");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
global.score = 1;

jest.dontMock("fs");

describe("crud application", function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
  });

  it("todo list is empty initially", function () {
    expect(localStorage.getItem("todo")).toBe(null);
    global.score += 2;
  });

  it("create task works properly", function () {
    expect(localStorage.getItem("todo")).toBe(null);
    createTask("Buy Milk")
    var todo = localStorage.getItem("todo")
    var expectedAns = [
      {
        id: 1,
        isCompleted: false,
        title: "Buy Milk"
      }
    ]
    expect(todo).toBe(JSON.stringify(expectedAns))

    createTask("Buy Eggs")
    var todo2 = localStorage.getItem("todo")
    var expectedAns = [
      {
        id: 1,
        isCompleted: false,
        title: "Buy Milk"
      },
      {
        id: 2,
        isCompleted: false,
        title: "Buy Eggs"
      }
    ]
    expect(todo2).toBe(JSON.stringify(expectedAns))

    global.score += 2;
  });

  it("delete task works properly", function () {
    deleteTask(1)

    var todo = localStorage.getItem("todo")
    var expectedAns = [
      {
        id: 2,
        isCompleted: false,
        title: "Buy Eggs"
      }
    ]
    expect(todo).toBe(JSON.stringify(expectedAns))

    global.score += 2;
  });

  it("update task works properly", function () {
    updateTask(2)

    var todo = localStorage.getItem("todo")
    var expectedAns = [
      {
        id: 2,
        isCompleted: true,
        title: "Buy Eggs"
      }
    ]
    expect(todo).toBe(JSON.stringify(expectedAns))

    createTask("Buy stamps")
    updateTask(3)

    var todo = localStorage.getItem("todo")
    var expectedAns = [
      {
        id: 2,
        isCompleted: true,
        title: "Buy Eggs"
      },
      {
        id: 3,
        isCompleted: true,
        title: "Buy stamps"
      }
    ]
    expect(todo).toBe(JSON.stringify(expectedAns))

    global.score += 3;
  });

});

afterAll(() => {
  console.log("Final Score is", global.score);
});
