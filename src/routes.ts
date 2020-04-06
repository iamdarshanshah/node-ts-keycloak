import { Router } from 'express';

const Keycloak = require('keycloak-connect');
const session = require('express-session');
const test = require('./test');

var memoryStore = new session.MemoryStore();
var keycloak = new Keycloak({ store: memoryStore });

const route = Router();

route.get('/testone', keycloak.protect() , test.getResponse);

export default route;