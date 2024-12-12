// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class✅
class Motorbike extends Vehicle { //☑️This makes it to where the Motorbike class inherits properties from the Vehicle class
  // TODO: Declare properties of the Motorbike class✅
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels✅
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])✅
  vin: string; //☑️Declaring the properties and declaring the types of these properties
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // TODO: Create a constructor that accepts the properties of the Motorbike class✅
    // TODO: The constructor should call the constructor of the parent class, Vehicle✅
    // TODO: The constructor should initialize the properties of the Motorbike class✅
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not✅
    constructor( //☑️Constructor function to accept properties of Motorbike class and create and initialize the object
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[]
    ) {
      super(); //☑️"super()" is what calls the constructor of the parent class, Vehicle

      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.topSpeed = topSpeed;

      if (wheels.length !== 2) {
        this.wheels = [new Wheel(), new Wheel()]
      }
      else {
        this.wheels = wheels;
      }
    }

  // TODO: Implement the wheelie method✅
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"✅
    wheelie() {
      console.log(`This ${this.make} ${this.model} motorbike is doing a wheelie!`); //☑️Uses string template literals to log which motorbike is doing a wheelie
    }
  // TODO: Override the printDetails method from the Vehicle class✅
  override printDetails():void { //☑️What override is doing is making changes and making a new implementation of a method that is already defined in the parent class
    super.printDetails(); //☑️This is what calls the printDetails method from the parent class, Vehicle
    console.log(`VIN: ${this.vin}`); //☑️Again using string template literals to log the details of this specific vehicle
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
  }
  // TODO: The method should call the printDetails method of the parent class✅
  // TODO: The method should log the details of the Motorbike✅
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels✅
}

// Export the Motorbike class as the default export
export default Motorbike;
