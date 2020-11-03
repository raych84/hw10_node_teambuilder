// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Intern {
	constructor(name, role, email, id, school ){
	  this.name = name;
	  this.role = role;
	  this.email = email;
	  this.id = id;
	  this.school = school;
	}
	}
	// getRole() = this.role;
	// getSchool() = this.school;



	module.exports = Intern;