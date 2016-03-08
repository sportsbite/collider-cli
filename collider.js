#!/usr/bin/env node

'use strict';

var pkg            = require('./package.json')
var cli            = require('commander');
var updateNotifier = require('update-notifier');

updateNotifier({ pkg }).notify();

cli
  .version( pkg.version )
  .command( 'run', 'runs an existing project', { isDefault: true } )
  .command( 'new <dir>', 'creates a new project in a directory' )
  .parse( process.argv );
