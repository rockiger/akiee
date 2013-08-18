var process = require("process")
var fs = require("fs")
var path = require("path")

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
    console.log(confFolder);
    var liveFlowPath = path.join(confFolder, "liveflow.org")
    if (fs.existsSync(confFolder)) {
        if (fs.existsSync(liveFlowPath)) {
            return liveFlowPath;
        } else {
            process.chdir(confFolder);
            fs.writeFileSync("liveflow.org", "");
        }
    } else {
        fs.mkdir(confFolder);
        process.chdir(confFolder);
        fs.writeFileSync("liveflow.org", "")
    }
    return liveFlowPath;
}

exports.getTaskFiles = getTaskFiles;
exports.getUserHome = getUserHome;
exports.getLiveflow = getLiveflow;
