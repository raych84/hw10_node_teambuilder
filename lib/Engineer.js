// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Engineer {
	constructor(name, role, email, id, github) {
		this.name = name;
		this.role = role;
		this.email = email;
		this.id = id;
		this.github = github;
	}
}

	// getName() = this.name;
	// getRole() = this.role;
	// getEmail() = this.email;
	// getId() = this.id;
	// getGithub() = this.github;


module.exports = Engineer;