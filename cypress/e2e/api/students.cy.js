import { postRequestBody } from '../../fixtures/testData.json'

describe('CRUD Operations', () => {
  after(() => {
    cy.request({
      method: 'DELETE',
      url: `${Cypress.env('baseUrl')}/all/delete`,
    })
  })

  let studentId

  it('Create a new student using POST', () => {
    // const postRequestBody = {
    //   DOB: '1974-07-28',
    //   EMAIL: 'Sterling.Brakus30@hotmail.com',
    //   FIRST_NAME: 'Oran',
    //   LAST_NAME: 'Walsh',
    //   INSTRUCTOR_ID: 4,
    // }

    // const { DOB, EMAIL } = postRequestBody
    // cy.log(DOB + EMAIL)

    cy.request({
      method: 'POST',
      url: Cypress.env('baseUrl'),
      body: postRequestBody,
      // body: {
      //   DOB: '1974-07-28',
      //   EMAIL: 'Sterling.Brakus30@hotmail.com',
      //   FIRST_NAME: 'Oran',
      //   LAST_NAME: 'Walsh',
      //   INSTRUCTOR_ID: 4,
      // },
    }).then((response) => {
      cy.log(response)

      console.log(JSON.stringify(response.body))
      console.log(JSON.stringify(response.body, null, 2))
      console.log(JSON.stringify(response.body, null, 6))

      expect(response.status).to.equal(201)
      expect(response.duration).to.be.below(1300)

      cy.log(response.body['FIRST_NAME'] + ' ' + response.body.FIRST_NAME)
      expect(response.body.FIRST_NAME).to.equal(postRequestBody.FIRST_NAME)

      // // {
      // FIRST_NAME: 'Oran'
      // }

      // ['FIRST_NAME', 'Oran']

      studentId = response.body.STUDENT_ID

      const numbers = [1, 2, 3]
      const [first, second] = numbers
      cy.log(first + ' ' + second)

      // Object.entries(postRequestBody).forEach(([key, value]) => {
      //   cy.log(key + ' ' + value + ' This is the key value pairs of Request body')
      //   cy.log(response.body[key])

      //   expect(response.body[key]).to.equal(value)
      // })

      cy.validateResponse(response, postRequestBody)
    })
  })

  /**
   * Get the user created
   * And validate your status is 200
   */

  it('Read the creeated student using GET', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('baseUrl')}/${studentId}`,
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
  })
})
