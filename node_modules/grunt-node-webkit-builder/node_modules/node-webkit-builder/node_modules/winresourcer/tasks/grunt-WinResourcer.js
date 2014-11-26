'use strict';
module.exports = function(grunt) {

	grunt.registerMultiTask('winresourcer', 'Edit windows executable resources', function() {
		var winresourcer = require("../lib/WinResourcer.js");
		var done = this.async();
		winresourcer(this.data, function(error) {
			done(!error);
		});
	});

};
