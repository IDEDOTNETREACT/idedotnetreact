class Foo {
  // Static method
  static M() {
    return "Hello";
  }
}
console.log(Foo.M()); //static method can be called without creating an instance of the class
// Static methods are called on the class itself, not on instances of the class.
// They are often used for utility functions or factory methods that do not require access to instance properties.
