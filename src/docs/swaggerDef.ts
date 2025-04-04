import {version} from '../../package.json';
import {PORT} from '../secrets';

export const swaggerDef = {
    openapi: '3.0.0',
    info: {
      title: 'node-js app with typescript for ecommerce app',
      version, 
      license: {
        name: 'MIT',
        url: 'The licence is missing till now',
      },
    },
    servers: [
      {
        url: `http://localhost:${PORT}/api/`,
      },
    ],
  };