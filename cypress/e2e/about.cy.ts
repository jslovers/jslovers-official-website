describe("template spec", () => {
    it("about section renders correctly", () => {
      cy.visit("/about");
      cy.dataCy("about-section").should("exist");
  
      cy.findByRole("heading", {
        name: /who are we \?/i,
      }).should("exist");
  
      cy.findByRole("button", {
        name: /learn more/i,
      }).should("exist");
  
      cy.findByRole("heading", {
        name: /our purpose/i,
      }).should("exist");
  
      cy.findByRole("heading", {
        name: /meet the team/i,
      }).should("exist");
  
      cy.findByRole("heading", {
        name: /our story/i,
      }).should("exist");
  
      cy.findByRole("button", {
        name: /how it all started\?/i,
      }).should("exist");
  
      cy.findByRole("button", {
        name: /our first meetup/i,
      }).should("exist");
  
      cy.findByRole("button", {
        name: /making the friendly and helping culture/i,
      }).should("exist");
  
      cy.findByRole("heading", {
        name: /join jslovers for free/i,
      }).should("exist");
  
      cy.findByRole("textbox")
        .should("exist")
        .should("have.attr", "placeholder", "Enter your email");
  
      cy.findByRole("button", {
        name: /join for free/i,
      }).should("exist");
    });
  });
  