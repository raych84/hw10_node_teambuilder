// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, email, id) {
    this.name = name;
    this.id = 100;
    this.email = "test@test.com";
  }
};

getName = () => {
  return name
};
getId = () => {
  return id
};
 getEmail = () => {
  return email
};
getRole = () => {
  return "Employee"
}





// notes for self
// name, email, role.
// class Polygon {
// 	constructor(height, width) {
// 	  this.area = height * width;
// 	}
//   }

//   console.log(new Polygon(4, 3).area);
// expected output: 12

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
//   // Getter
//   get area() {
//     return this.calcArea();
//   }
//   // Method
//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Rectangle(10, 10);

// console.log(square.area); // 100
// Static methods and properties
module.exports = Employee;