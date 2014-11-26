'use strict';

var path = require('path');
var spawn = require('child_process').spawn;

module.exports = function(options, callback) {
	var exec = path.resolve(__dirname, '..', 'bin', 'Resourcer.exe');
	
	var args = [];
	
	if (!options.operation) {
		throw new Error("Missing argument 'operation' (Required)");
	}
	var operation;
	switch(options.operation.toLowerCase()) {
		case "add":
			operation = "add";
			break;
		case "upd":
		case "update":
			operation = "upd";
			break;
		case "extract":
		case "ext":
			operation = "ext";
			break;
		case "delete":
		case "del":
			operation = "del";
			break;
		default:
			throw new Error("Invalid argument 'operation'. Should be one of Add, Update, Extract or Delete");
	}
	args.push("-op:"+operation);
	
	if(!options.exeFile) {
		throw new Error("Missing argument 'exeFile' (Required)");
	}
	args.push("-src:"+options.exeFile+"");
	
	if(!options.resourceType) {
		throw new Error("Missing argument 'resourceType' (Required)");
	}
	args.push("-type:"+options.resourceType);
	
	if(!options.resourceName) {
		throw new Error("Missing argument 'resourceName' (Required)");
	}
	args.push("-name:"+options.resourceName);
	
	if(operation !== "del" && operation !== "upd" && !options.lang) {
		throw new Error("Missing argument 'lang' (Required for Add and Extract)");
	}
	if (options.lang) {
		args.push("-lang:"+options.lang);
	}
	
	if(operation !== "del" && !options.resourceFile) {
		throw new Error("Missing argument 'resourceFile' (Required for Add, Update (source file) and Extract (dest file))");
	}
	if (options.resourceFile) {
		args.push("-file:"+options.resourceFile);
	}
	
	if (process.platform !== "win32") {
		args.unshift(exec);
		exec = "wine";
	}

	var child = spawn(exec, args);
	child.stdout.pipe(process.stdout);
	child.stderr.pipe(process.stderr);
	var stderr = '';
	child.on('error', function(err) {
		if (callback) {
			callback(err);
		}
	});
	child.stderr.on('data', function(data) {
		stderr += data;
	});
	child.on('close', function(code) {
		if (code === 0) {
			if (callback) {
				callback(null);
			}
		} else {
			if (callback) {
				callback(stderr);
			}
		}
	});
};