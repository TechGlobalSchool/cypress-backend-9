class BackendPage {
  /* Locators */

  getFirstName() {
    return cy.get('[name="FIRST_NAME"]')
  }

  getLastName() {
    return cy.get('[name="LAST_NAME"]')
  }

  getEmail() {
    return cy.get('[name="EMAIL"]')
  }

  getDOB() {
    return cy.get('[name="DOB"]')
  }

  getAddButton() {
    return cy.get('[type="submit"]')
  }

  getDeleteAllButton() {
    return cy.get('.common_row__fyD66 > button')
  }

  getUserList() {
    return cy.get('div > section:last-child > div')
  }

  getModal() {
    return cy.get('#mymodal')
  }

  getModalEmail() {
    return this.getModal().find('[name="EMAIL"]')
  }

  getModalUpdateButton() {
    return this.getModal().find('[type="submit"]')
  }

  /**
   * Creates a user on the backendpage for techglobal-training app
   *
   * @param {string} - firstName
   * @param {string} - lastName
   * @param {string} - email
   * @param {string} - dob
   */
  createUser(firstName, lastName, email, dob) {
    this.getFirstName().type(firstName)
    this.getLastName().type(lastName)
    this.getEmail().type(email)
    this.getDOB().type(dob)
    this.getAddButton().click()
  }

  getUserEditButton(user) {
    return this.getUserList().contains('.common_list__UR80V', user).find('svg').first().click()
  }

  getUserDeleteButton(user) {
    return this.getUserList().contains('.common_list__UR80V', user).find('svg').last().click()
  }
}

module.exports = BackendPage
