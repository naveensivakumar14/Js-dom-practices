// Define the Person class
class Person {
    constructor(name, age, gender, city) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.city = city;
    }
  
    // Method to display the person's details
    displayDetails() {
      console.log(`Name: ${this.name}`);
      console.log(`Age: ${this.age}`);
      console.log(`Gender: ${this.gender}`);
      console.log(`City: ${this.city}`);
    }
  }
  
  // Create an object of the Person class
  const person1 = new Person('Naveen', 28, 'Male', 'Erode');
  const person2=new Person('Swathi',28,'Female','Namakkal')
  
  // Call the displayDetails method to print the person's details
  console.log('\nperson 1')
  person1.displayDetails();
  console.log('\nperson 2')
  person2.displayDetails();
  