const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Weston's Contacts API",
    description: "An open API for managing contacts",
  },
  host: "",
  schemes: ["http", "https"],
};

const outputFile = "../dist/swagger-output.json";
const endpointsFiles = ["../dist/config/routes/meals.routes.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
