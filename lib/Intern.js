// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Intern {
	constructor(name, email, id, school ){

		  this.school = school;
	}
	
	
	getSchool(){
		return this.school
	}
	getRole(){
		return "Intern"
		}
}


	module.exports = Intern;