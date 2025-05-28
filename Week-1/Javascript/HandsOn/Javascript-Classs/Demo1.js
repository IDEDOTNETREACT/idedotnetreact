class student {
  //constructor with parameters
  constructor(name, age) {
    // Initializing properties with parameters
    this.name = name;
    this.age = age;
  }
  // Method to display student details
  // This method is used to display the properties of the student object
  display() {
    console.log(this.name);
    console.log(this.age);
  
  }
}
var obj = new student("sachin", 12);
obj.display();
var obj1 = new student("Ram", 23);
obj1.display();
var obj2 = new student("Virat", 12);
obj2.display();
