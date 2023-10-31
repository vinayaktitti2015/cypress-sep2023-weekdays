const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
const { isFileExist } = require("cy-verify-downloads");
const xlsx = require("node-xlsx").default;
const request = require("request");
const cucumber = require("cypress-cucumber-preprocessor").default;
const mysql = require("mysql2");

function queryTestDb(query, config) {
  // creates a new mysql connection using credentials from cypress.config.js envs
  const connection = mysql.createConnection(config.env.db);

  // start connection to db
  connection.connect();

  // exec query + disconnect to db as a Promise
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        // console.log(results)
        return resolve(results);
      }
    });
  });
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", { downloadFile });

      on("task", { isFileExist });

      on("file:preprocessor", cucumber());

      // event listerner for DB query results
      on("task", {
        queryDB: (query) => {
          return queryTestDb(query, config);
        },
      });

      on("task", {
        parseXlsx(args) {
          return new Promise((resolve, reject) => {
            const r = request(
              { url: args.url, encoding: null },
              function (err, res, body) {
                if (!res) {
                  return reject(new Error("No response"));
                }
                if (res.statusCode !== 200) {
                  return reject(
                    new Error("Bad status code: " + res.statusCode)
                  );
                }
                const sheet = xlsx.parse(body);
                console.log(JSON.stringify(sheet));
                resolve(sheet);
              }
            );
          });
        },
      });
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    watchForFileChanges: true,
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 30000,
    video: true,
    requestTimeout: 5000,
    responseTimeout: 5000,
    //specPattern: "**/*.feature",
    // db credentials for database
    env: {
      db: {
        host: "localhost",
        user: "root",
        database: "Users",
      },
    },
  },
});
