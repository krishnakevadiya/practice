import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3004", id: "manish-local" }];

const getInitialState = (win) => win.store;
const getReducer = (win) => win.reducer;

describe("RCT-211-B20-E1 Evaluation", () => {
  let acc_score = 1;

  data.map(({ submission_link: link, id }) => {
    beforeEach(() => {
      cy.visit(link);
      cy.window().its("store").should("exist");
      if (link.charAt(link.length - 1) != "/") {
        link = link + "/";
      }
    });

    it("checks for the initial store state", () => {
      cy.window().then(getInitialState).should("deep.equal", {
        data: [],
        isLoading: false,
        isError: false,
      });
      cy.window().then(getReducer).should("exist");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("check the reducer function for GET_PRODUCTS_REQUEST state", () => {
      cy.window().then((win) => {
        const reducer = getReducer(win);
        const newState = reducer(
          {
            data: [],
            isLoading: false,
            isError: false,
          },
          { type: "GET_PRODUCTS_REQUEST" }
        );
        expect(newState).to.deep.equal({
          data: [],
          isLoading: true,
          isError: false,
        });
      });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("checks reducer function for GET_PRODUCTS_SUCCESS", () => {
      cy.intercept("GET", "**/mockapi/get-products").as("getProducts");
cy.visit(link)
      cy.wait("@getProducts").then((res) => {
        cy.window().then((win) => {
          const reducer = getReducer(win);
          const newState = reducer(
            {
              data: [],
              isLoading: false,
              isError: false,
            },
            { type: "GET_PRODUCTS_SUCCESS", payload: res.response.body.data }
          );

          expect(newState).contain({
            data: res.response.body.data,
            isLoading: false,
            isError: false,
          });
        });
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("checks reducer function for GET_PRODUCTS_FAILURE", () => {
      cy.window().then((win) => {
        const reducer = getReducer(win);
        const newState = reducer(
          {
            data: [],
            isLoading: false,
            isError: false,
          },
          { type: "GET_PRODUCTS_FAILURE" }
        );

        expect(newState).contain({
          isError: true,
        });
      });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("checks for loading indicator handler for Get Products API request", () => {
      cy.intercept("GET", "**/mockapi/get-products").as("getRequest");
            cy.visit(link);

      cy.get('[data-tesid="loading"]').should("exist");
      cy.wait("@getRequest").then(() => {
        cy.get('[data-tesid="loading"]').should("not.exist");
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("checks if 40 products are being shown in the UI", () => {
      cy.intercept("GET", "**/mockapi/get-products").as("getRequest");
            cy.visit(link);

      cy.wait("@getRequest").then(() => {
        cy.get('[data-testid="productcard"]').should("have.length", 40);
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("checks for error handling on Get Products API request", () => {
      cy.intercept("GET", "**/mockapi/get-products", {
        forceNetworkError: true,
      }).as("failedGetRequest");
            cy.visit(link);

      cy.wait("@failedGetRequest").then(() => {
        cy.get('[data-testid="error"]').should("exist");
        cy.get('[data-testid="product-card"]').should("not.exist");
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`generate score`, () => {
      console.log("final score:", acc_score);
      ////////////// this should not be chnages
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
