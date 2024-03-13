describe("Todo Application", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should add a new todo", () => {
    cy.get(".new-todo-input").clear().type("Learn Cypress{enter}");
    cy.get(".todo-list").should("contain", "Learn Cypress");
  });

  it("Should toggle todo completion", () => {
    cy.get(".new-todo-input").clear().type("Learn Vue.js{enter}");
    cy.get(".todo-item:first .toggle").click();
    cy.get(".todo-item:first").should("have.class", "completed");
  });

  it("Should delete a todo", () => {
    cy.get(".new-todo-input").clear().type("Test deletion{enter}");
    cy.get(".todo-item:first .delete-button").click();
    cy.get(".todo-list").should("not.contain", "Test deletion");
  });
});
