/**
 * Login Spec
 *
 * - should display login page correctly
 * - should display alert when email is empty
 * - should display alert when password is empty
 * - should display alert when email and password are wrong
 * - should display home page when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display login page correctly', () => {
    cy.get('h2').should('have.text', 'Login to Discuss');
    cy.get('input[type="email"]').should('have.attr', 'placeholder', 'Email');
    cy.get('input[type="password"]').should('have.attr', 'placeholder', 'Password');
    cy.get('button[type="button"]').should('have.text', 'Login');
  });

  it('should display alert when email is empty', () => {
    cy.get('button[type="button"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[type="email"]').type('email@123.com');
    cy.get('button[type="button"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    cy.get('input[type="email"]').type('email@123.com');
    cy.get('input[type="password"]').type('123456');
    cy.get('button[type="button"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display home page when email and password are correct', () => {
    cy.get('input[type="email"]').type('e2e@tes.com');
    cy.get('input[type="password"]').type('123321');
    cy.get('button[type="button"]').click();
    cy.wait(10000);
    cy.get('.new-thread-button').should('be.visible');
  });
});
