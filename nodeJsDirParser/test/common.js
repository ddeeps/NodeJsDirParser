'use strict';

global.chai = require('chai');
global.sinon = require('sinon');
global.sinonChai = require('sinon-chai');
global.chai.use(global.sinonChai);
global.expect = global.chai.expect;
global.assert = require('assert');
global.path = require('path');
global.mock = require('mock-fs');
global.util = require('../utils/util.js');
global.fs = require('fs');