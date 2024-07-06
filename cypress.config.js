const { defineConfig } = require('cypress')
const oracledb = require('oracledb')
require('dotenv').config()

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  env: {
    baseUrl: 'https://api.tech-global-training.com/students',
    oracleDB: {
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      connectionString: process.env.DB_HOST,
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

      on('task', {
        async runQuery(query) {
          let connection

          // Establish a connection do OracleDB and send query, send error if connection or query is failed.
          try {
            connection = await oracledb.getConnection(config.env.oracleDB)

            // This is the part where we send the query, and return to its result.
            const result = await connection.execute(query)
            return result.rows
          } catch (err) {
            throw new Error(err)
          } finally {
            // After succesfully establishing the connection and sending the query
            if (connection) {
              await connection.close()
            }
          }
        },
      })
    },
    baseUrl: process.env.BASE_URL,
  },
})
