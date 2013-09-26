var process = require("process");
var fs = require("fs");
var path = require("path");

function getTaskFiles() {
    var userHome = getUserHome();
    console.log(userHome);
    return getLiveflow(userHome);
}

function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

function getLiveflow(userHome) {
    var confFolder = path.join(userHome + "/.livewookiee/");
    var filename = "liveflow.md";
    console.log(confFolder);
    var liveFlowPath = path.join(confFolder, filename);
    if (fs.existsSync(confFolder)) {
        if (fs.existsSync(liveFlowPath)) {
            return liveFlowPath;
        } else {
            process.chdir(confFolder);
            fs.writeFileSync(filename, "");
        }
    } else {
        fs.mkdir(confFolder);
        process.chdir(confFolder);
        fs.writeFileSync(filename, "")
    }
    return liveFlowPath;
}

function print_r(obj) { 
	for (var e in obj) {
        console.log(e);
    }
}

exports.getTaskFiles = getTaskFiles;
exports.getUserHome = getUserHome;
exports.getLiveflow = getLiveflow;
exports.print_r = print_r;
