const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

//import controllers function
const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");
const { commitRepo } = require("./controllers/commit");
const { pushRepo } = require("./controllers/push");
const { pullRepo } = require("./controllers/pull");
const { revertRepo } = require("./controllers/revert");

//define commands
yargs(hideBin(process.argv))
  .command("init", "Initialise a new repository.", {}, initRepo)
  .command("add <file>", "Add a file to the Staging area", (yargs) => {
    yargs.positional("file", {
        describe: " File to add to the Staging area",
        type: "string",
    });
  }, addRepo)
  .command("commit <message>", "finallize the changes", (yargs) => {
    yargs.positional("message", {
        describe: "any message you want to add",
        type: "string",
    });
  }, commitRepo)
  .command("push", "it will strore the changes to the cloud", {}, pushRepo)
  .command("pull", "it will bring the changes from cloud to local machine", {}, pullRepo)
  .command("revert <commitID>", "revert the files to last commit", (yargs) => {
    yargs.positional("commitID", {
        describe: "revert the files to last commit",
        type: "string",
    });
  }, revertRepo)
  .demandCommand(1, "you need at least one command")
  .help().argv;
