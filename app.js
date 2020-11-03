const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

	inquirer
	.prompt([
	  {
		type: "confirm",
		message: "Let's build your new team!",
		name: "message"
	  },
	  {
		type: "confirm",
		message: "Shall we begin?",
		name: "validate"
	  },
	  
	])
	.then(function(response){
		if(response.validate === true){
			function buildNewTeam();
		}
		else {
			console.log("Come back when you're ready!");
		}
		return
	})
	
function buildNewTeam(){

}



function addManager(){
	inquirer
	.prompt([
	  {
		type: "input",
		message: "What is the manager's name?",
		name: "manager name"
	  },
	  {
		type: "number",
		message: "What is the manager's id number?",
		name: "manager id"
	  },
	  {
		type: "input",
		message: "What is the manager's email address?",
		name: "manager email"
	  },
	  {
		type: "number",
		message: "What is the manager's office number?",
		name: "office number"
	  }
	])
	.then(function(answer) {
  
	  var filename = manager.html.toLowerCase().split(' ').join('') + ".json";
	
	  fs.writeFile(filename, JSON.stringify(answer, null, '\t'), function(err) {
	
		if (err) {
		  return console.log(err);
		}
	
		console.log("Success!");
	
	  });
	});
		
};
function addEngineer(){
	inquirer
	.prompt([
	  {
		type: "input",
		message: "What is the engineer's name?",
		name: "engineer name"
	  },
	  {
		type: "input",
		message: "What is the engineer's gitHub username?",
		name: "gitHub name"
	  },
	  {
		type: "number",
		message: "What is the engineers's id number?",
		name: "engineer id"
	  },
	  {
		type: "input",
		message: "What is the engineer's email address?",
		name: "engineer email"
	  }
	  
	])
	.then(function(answer) {
  
	  var filename = answer.name.toLowerCase().split(' ').join('') + ".json";
	
	  fs.writeFile(filename, JSON.stringify(answer, null, '\t'), function(err) {
	
		if (err) {
		  return console.log(err);
		}
	
		console.log("Success!");
	
	  });
	});
		
};
function addIntern(){
	inquirer
	.prompt([
	  {
		type: "input",
		message: "What is the intern's name?",
		name: "intern name"
	  },
	  {
		type: "input",
		message: "What is the intern's school name?",
		name: "school name"
	  },
	  {
		type: "number",
		message: "What is the intern's id number?",
		name: "intern id"
	  },
	  {
		type: "input",
		message: "What is the intern's email address?",
		name: "intern email"
	  }
	])
	.then(function(answer) {
  
	  var filename = answer.name.toLowerCase().split(' ').join('') + ".json";
	
	  fs.writeFile(filename, JSON.stringify(answer, null, '\t'), function(err) {
	
		if (err) {
		  return console.log(err);
		}
	
		console.log("Success!");
	
	  });
	});
		
};



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
employees => {
	html.push
}

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
const createFile = (filename, extension) => {
	const filePath = `${process.cwd()}/${filename}.${extension}`
	shell.touch(filePath);
	return filePath;
  };

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
