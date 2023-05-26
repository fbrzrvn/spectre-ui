describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.findByRole('heading', {
      name: /Spectre UI components library/i,
    }).should('exist')
  })
})
