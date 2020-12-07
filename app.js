const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "./output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const teamMembers = [];
const idArray = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// ref week 5 day 1,2
function appMenu() {

	function addManager() {
		console.log("Let's build that awesome team!");
		inquirer
			.prompt([
				{
					type: "input",
					message: "What is the manager's name?",
					name: "managerName"
				},
				{
					type: "number",
					message: "What is the manager's id number?",
					name: "managerId"
				},
				{
					type: "input",
					message: "What is the manager's email address?",
					name: "managerEmail"
				},

				{
					type: "number",
					message: "What is the manager's office number?",
					name: "officeNumber"
				}
			]).then(answers => {
				const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.officeNumber);
				teamMembers.push(manager);
				idArray.push(answers.managerId);
				buildGreatness();
			});
	}

	function buildGreatness() {
		inquirer
			.prompt([{
				name: "addTypeOfEe",
				type: "list",
				message: "What type of employee would you like add?",
				choices: [
					"Add Manager?",
					"Add Engineer?",
					"Add Intern?",
					"That's all."
				]
			}
				// got this from hw 12
			]).then(function (answers) {
				switch (answers.addTypeOfEe) {
					case "Add Manager?":
						addManager();
						break;

					case "Add Engineer?":
						addEngineer();
						break;

					case "Add Intern?":
						addIntern();
						break;
					default:
						buildNewTeam();

				}
			});
	}

	function addEngineer() {
		inquirer
			.prompt([
				{
					type: "input",
					message: "What is the engineer's name?",
					name: "engineerName"
				},
				{
					type: "number",
					message: "What is the engineers's id number?",
					name: "engineerId"
				},
				{
					type: "input",
					message: "What is the engineer's email address?",
					name: "engineerEmail"
				},
				{
					type: "input",
					message: "What is the engineer's gitHub username?",
					name: "github"
				}
			]).then(answers => {
				const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.gitHub)
				teamMembers.push(engineer);
				idArray.push(answers.engineerId);
				buildGreatness();
			});
	}

	function addIntern() {
		inquirer
			.prompt([
				{
					type: "input",
					message: "What is the intern's name?",
					name: "internName"
				},
				{
					type: "number",
					message: "What is the intern's id number?",
					name: "internId"
				},
				{
					type: "input",
					message: "What is the intern's email address?",
					name: "internEmail"
				},
				{
					type: "input",
					message: "What is the intern's school name?",
					name: "schoolName"
				},

				// tutor provide...need to understand how this is valid
			]).then(answers => {
				const intern = new Intern(answers.interName, answers.interId, answers.internEmail, answers.schoolName)
				teamMembers.push(intern);
				idArray.push(answers.internId);
				buildGreatness();
			});
	}

	function buildNewTeam() {
		if (!fs.existsSync(OUTPUT_DIR)) {
			fs.mkdirSync(OUTPUT_DIR)
		}
		fs.writeFileSync(outputPath, render(teamMembers), "utf-8");


		// After you have your html, you're now ready to create an HTML file using the HTML
		// returned from the `render` function. Now write it to a file named `team.html` in the
		// `output` folder. You can use the variable `outputPath` above target this location.
		// Hint: you may need to check if the `output` folder exists and create it if it
		// does not.

	}
	addManager();
}

// USE WEEK 5 DAY 5 MINI PROJECT


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
// tutor provided


// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
appMenu();