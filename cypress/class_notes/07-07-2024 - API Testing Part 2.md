


		API Overall Recap

		What is API ?

			It consist of some set of rules and protocols that acts as a bridge between two application.

		What kind of Web Services you know ?

			- SOAP
			- REST
			- GraphQL


		Difference between SAOP and REST

			SOAP is based on using XML.
			REST is more flexible and easier to use and mostly based on JSON requests.


		Difference between XML and JSON

			JSON is lightweit and much faster, but less secure.
			XML is slower, but more secure.



		What is Payload ?

			Request body.

		What does CRUD stands for ?

			Create		- POST			=> Requires a Request Body.
			Read		- GET
			Update		- PUT or Patch	=> Requires a Request Body.
			Delete		- DELETE


		Main components of API?

			Endpoint
			Request Header
			Request Body for Post, Put, or Patch

			Response Header
			Response Body
			Response Status


		Difference between Put and Patch?

			Patch only updates partial information in the request body, while PUT request updates everything doesn't matter how many information you have refactored.


		Status codes you know ?

			100 - Informational
			200 - Success
			300 - Redirect
			400 - Client Error
			500 - Server Error


		Why we need endpoint ?

			Endpoints are key components to access any webservice you need.


		What are the tools you use while you are testing the API?

			Postman
			Cypress
			Playwright
			Network tab
			Swagger


		Why API Documentation is important ?

			It will provide set of instructions to comminucate with any specific api

				- Endpoints
				- Headers
				- Request/Response body
				- Error Messages.

				"User" = "askudh1i2u",
				"1234" = "ds1waw"

			{
				username: 'askudh1i2u',
				password: 'ds1waw'
			}


			- Swagger
			- Network Tab
			- Confluence/Jira	


			Difference between Authorization and Authentication

				Authentication is identification while Authorization what are your permissions.

			What is the Method Chaining in API?


				It involves linking multiple API calls together.



			Meyhod to interact with the API on Cypress

			cy.request('PUT', 'endpoint')


			cy.request({
				method: 'POST',
				url: 'endpoint',
				auth: 'Beaerer 123123123sadyv1y2gdi712ge7i21'
				body: {
					username: 'user',
					password: 'password'
				}
			})





			When to choose API over UI testing, and some cases that you want to do API testing ?

			1. Speed: Tests that are taking a lot of time on UI can be handled through the API much faster, and reliable.

			2. Early Testing: API testing can be conducted on the early stages of development cycle. This would allow us to detect the problems on the early stages to feedback to developers.

			3. Automation Feasibility: API Testsing process in general are much easier to test compared to UI testing. As long as requirements and expectations are well-defined the testing the api is very straightforward and faster.

			4. Performance Testing: APIs are tested to ensure they meet the performance benchmarks, such as response times and throughput. Using the API it is easier to simulate large number of requests and anlyze performance metrics.

			5. Security Testing: APIs often carry a sensitive data and peform some critical operations. The security vulnerabilities, such as SQl injection, authentication flaws, or to catch data leaks are easier to detect.

			6. Integration Testing: APIs are the glue that connects different modules or services with an application or accross different applications. Testing these integrations through API allows for comprehensive checks on data flow, and overall system integrity.

			7. Handling negative and boundry cases: API testing allows testers to simulate wide range of scenarios, including error conditions and boundry cases. (invalid inputs, edge cases). This would identify us how system behaves under different conditions.

	