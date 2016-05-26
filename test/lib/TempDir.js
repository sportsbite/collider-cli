// test/lib/TempDir.js
//

'use strict';

var fs = require('fs');
var path = require('path');
var spawnSync = require('child_process').spawnSync;

var mkdirp = require('mkdirp');
var rimraf = require('rimraf');

var TempDir = {
  tmpLocation: null,

  prepare: function () {
    mkdirp.sync(this.tmpLocation);
  },

  clean: function () {
    rimraf.sync(this.tmpLocation);
  },

  getPath: function (name) {
    return path.join(this.tmpLocation, name);
  },

  read: function (name) {
    return fs.readFileSync(this.getPath(name), 'utf8');
  },

  readJson: function (name) {
    return JSON.parse(this.read(name));
  },

  exists: function (name) {
    return fs.accessSync(path.join(this.tmpLocation, name), fs.F_OK);
  },

  collider: function (args) {
    args = args || [];
    return spawnSync('collider', args, { cwd: this.tmpLocation });
  },
};

module.exports = TempDir;