const { displayCards, searchByLanguage, filterByRole } = require("../index");
let data = require("../../data.json");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf8"
);
global.score = 1;

jest.dontMock("fs");

describe("Search and filter list of masai jobs", function () {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
  });

  it("should have basic structure", function () {
    let searchBtn = document.getElementById("search-btn");
    expect(searchBtn.textContent).toBe("Search");
    global.score += 1;
  });

  it("should have drop down  ", function () {
    let dropDown = document.getElementById("change-role");
    expect(dropDown).toBeTruthy();
    expect(dropDown.options.length).toBe(3);
    global.score += 1;
  });
  it("should display 10 cards on load", () => {
    let final = displayCards(data);
    let container = document.getElementById("container");
    expect(container).toBeTruthy();
    expect(container.childNodes.length).toBe(10);
    global.score += 2;
  });
  it("should filter by tech stack ", () => {
    document.querySelector("#change-role").value = "Frontend";
    filterByRole();
    let container = document.getElementById("container");
    expect(container).toBeTruthy();
    expect(container.childNodes.length).toBe(4);
    document.querySelector("#change-role").value = "FullStack";
    filterByRole();
    expect(container.childNodes.length).toBe(6);
    global.score += 2;
  });
  it("should search by language and display results ", () => {
    document.querySelector("#search-input").value = "Java";
    let searchBtn = document.querySelector("#search-btn");
    expect(searchBtn).toBeTruthy();
    searchBtn.addEventListener("click", searchByLanguage);
    searchBtn.click();
    let container = document.getElementById("container");
    expect(container).toBeTruthy();
    expect(container.childNodes.length).toBe(5);
    document.querySelector("#search-input").value = "Javascript";
    searchBtn.click();
    expect(container.childNodes.length).toBe(2);
    global.score += 2;
  });
  it("should display no matche found for 0 results ", () => {
    document.querySelector("#search-input").value = "Jva";
    let searchBtn = document.querySelector("#search-btn");
    expect(searchBtn).toBeTruthy();
    searchBtn.addEventListener("click", searchByLanguage);
    searchBtn.click();
    let container = document.getElementById("container");
    expect(container.childNodes.length).toBe(1);
    expect(container.firstChild.textContent).toBe("No match found");
    global.score += 1;
  });
});

afterAll(() => {
  console.log("Final Score is", global.score);
});
