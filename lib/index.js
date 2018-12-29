/**
 * @fileoverview A eslint plugin that provides environments and processors for jsbox
 * @author Equal Ma
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require('requireindex');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

// import all rules in lib/rules
// module.exports.rules = requireIndex(__dirname + '/rules');

// import processors
// module.exports.processors = {};

// environments
module.exports.environments = requireIndex(__dirname + '/environments');

// configs
module.exports.configs = requireIndex(__dirname + '/configs');
