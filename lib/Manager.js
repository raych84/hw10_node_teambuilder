// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee")
class Manager {
	constructor(name, role, email, id, officeNumber ){
	  this.name = name;
	  this.role = role;
	  this.email = email;
	  this.id = id;
	  this.officeNumber = officeNumber;
	}
	}

	getRole() = this.role;
	getOfficeNumber() = this.officeNumber;


	module.exports = Manager;