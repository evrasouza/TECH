/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://mytechtale.com/')
  })

  it('apresentar menus', () => {
    cy.get('.sf-with-ul > span')
    cy.get('#menu-item-1919 > a > span')
    cy.get('#menu-item-2151 > a > span')
  })

  it('validar obrigatoriedade campo nome', () => {
    cy.get('.wpcf7-list-item-label').click()
    cy.get('.wpcf7-submit').click()

  })


})