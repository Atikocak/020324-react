describe("Login page tests", () => {
  beforeEach(() => {
    // Arrange
    cy.visit("/login");
  });

  it("Login form submit test", () => {
    // Act
    cy.get('[data-cy="login-email-input"]').type("ali@bas.com");
    cy.get('[data-cy="login-password-input"]').type("123456");
    cy.get('[data-cy="login-remember-input"]').check();
    cy.get('[data-cy="login-submit-btn"]').click();

    // Assert
    cy.contains("Home Page");
  });
});
