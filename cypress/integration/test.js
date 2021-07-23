
describe('Is form able to be submitted', function() {
 it('Types in input fields, clicks toppings, and submits', function () {
    cy.visit('localhost:3004')

    cy.get('#order-pizza')
    .click()

    cy.get('input[name="name"]')
    .type('testing123')

    cy.get('#special-text')
    .type('testing instructions')

    cy.get('#size-dropdown')
    .select('small')

    cy.get('#cheese')
    .check()

    cy.get('#pepperoni')
    .check()

    cy.get('#sausage')
    .check()

    cy.get('#bacon')
    .check()

    cy.get('#ham')
    .check()

    cy.get('#order-button')
    .click()
 })
})