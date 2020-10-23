// eslint-disable-next-line import/no-extraneous-dependencies
const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  info: {
    title: 'Deel Challenge', // Title (required)
    version: '1.0.0', // Version (required)
    description: 'Challenge from Deel', // Description (optional)
  },
  host: 'localhost:3001', // Host (optional)
  basePath: '/', // Base path (optional)
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'], // <-- not in the definition, but in the options
};

const swaggerSpec = swaggerJSDoc(options);

// eslint-disable-next-line no-console
console.log(JSON.stringify(swaggerSpec));
