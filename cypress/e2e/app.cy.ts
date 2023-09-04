describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("/");
    cy.findByText("About").click();
    // The new url should include "/about"
    cy.url().should("include", "/about");

    // The new page should contain an h1 with "About page"
    cy.findByRole("header").contains("About Page");
  });
});
