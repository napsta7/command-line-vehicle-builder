// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface✅
class Truck extends Vehicle implements AbleToTow{ //☑️The Truck class is inheriting properties from the Vehicle class and the AbleToTow interface
  vin: string; //☑️Declaring the properties and the types of these properties
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
  // TODO: Declare properties of the Truck class✅
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity✅
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)✅

  constructor ( //☑️Constructor function to accept properties of the Truck class and create and initialize the object
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super(); //☑️This is what calls the constructor of the parent class, vehicle
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    if (wheels.length !== 4) { //☑️If else statement to determine if the truck already has 4 wheel objects if it does not already
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    }
    else {
      this.wheels = wheels;
    }
    this.towingCapacity = towingCapacity;
  }
  // TODO: Create a constructor that accepts the properties of the Truck class✅
    // TODO: The constructor should call the constructor of the parent class, Vehicle✅
    // TODO: The constructor should initialize the properties of the Truck class✅
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not✅

  // TODO: Implement the tow method from the AbleToTow interface✅
  tow(vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make an model of the vehicle if it exists✅
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity✅
    // TODO: If it is, log that the vehicle is being towed✅
    // TODO: If it is not, log that the vehicle is too heavy to be towed✅
    const { make, model, weight} = vehicle; //☑️This is destructuring the make, model, and weight and storing it in the vehicle variable
    if (weight <= this.towingCapacity) { //☑️If else statement to see if the vehicle's weight is less than or equal to the truck's towing capacity, and if it is, the console will log which vehicle is being towed, but if not, the console will log that the vehicle is too heavy to be towed
      console.log(`This vehicle is being towed: ${make} ${model}`);
    }
    else {
      console.log(`This vehicle is too heavy to be towed: ${make} ${model}`);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class✅
    // TODO: The method should call the printDetails method of the parent class✅
    // TODO: The method should log the details of the Truck✅
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels✅
    override printDetails(): void { //☑️Override is making a new implementation of the printDetails method, which already exists in the parent Vehicle class
      super.printDetails(); //☑️This is how the printDetails method is being called from the parent Vehicle class
      console.log(`VIN: ${this.vin}`); //☑️Logging the details of the truck using template literals
      console.log(`Make:; ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Weight: ${this.weight}`);
      console.log(`Top Speed: ${this.topSpeed}`);
      console.log(`Towing Capacity: ${this.towingCapacity}`);
      console.log(
        `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
      );
      console.log(
        `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
      );
      console.log(
        `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
      );
      console.log(
        `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
      );
    }
}

// Export the Truck class as the default export
export default Truck;
