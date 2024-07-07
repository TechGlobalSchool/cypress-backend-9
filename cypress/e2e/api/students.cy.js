import { postRequestBody, putRequestBody } from '../../fixtures/testData.json'

describe('CRUD Operations', () => {
  // after(() => {
  //   cy.request({
  //     method: 'DELETE',
  //     url: `${Cypress.env('baseUrl')}/all/delete`,
  //   })
  // })

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

      // 13,000.00
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
      cy.task('runQuery', `SELECT * FROM students WHERE email = '${response.body.EMAIL}'`).then((rows) => {
        expect(rows).to.have.length(1)

        cy.log(JSON.stringify(rows[0][2]))

        expect(response.body.EMAIL).to.equal(rows[0][2])
      })
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

  /**
   * Create a PUT request
   * Update the student we created
   * Validate the status code is 2xx
   * And console log the response
   */

  it('Update the created student using PUT', () => {
    cy.request({
      method: 'PUT',
      url: `${Cypress.env('baseUrl')}/${studentId}`,
      body: putRequestBody,
    }).then((response) => {
      expect(response.status).to.equal(201)
      console.log(JSON.stringify(response.body))
    })
  })

  /**
   * Send a request and GET the updated user
   * Validate its 2xx
   * Validate the response time us under 1000ms
   * And validate student firstname on the response is matching with your updated name
   */

  it('Get the updated student using GET', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('baseUrl')}/${studentId}`,
    }).then((response) => {
      expect(response.status).to.equal(200)
      expect(response.duration).to.be.below(1000)
      expect(response.body.FIRST_NAME).to.equal(putRequestBody.FIRST_NAME)
    })
  })

  /**
   * Send a request ti DELETE the user we created
   * Validate its 2xx
   */

  it('Delete the student using DELETE', () => {
    cy.request({
      method: 'DELETE',
      url: `${Cypress.env('baseUrl')}/${studentId}`,
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
  })
})
