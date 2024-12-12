// import classes
import Truck from "./classes/Truck.js";
import Car from "./classes/Car.js";
import Motorbike from "./classes/Motorbike.js";
import Wheel from "./classes/Wheel.js";
import Cli from "./classes/Cli.js";

// create an array of vehicles
const vehicles = [];

// TODO: uncomment once trucks are implemented✅
const truck1 = new Truck(Cli.generateVin(),"red", "Ford", "F-150", 2021, 5000, 120, [], 10000); //☑️This is one of the vehicles to be pushed to the vehicles array so that when the user launches the application, there are already some sample vehicles to choose from

// will use default wheels
const car1 = new Car(
  Cli.generateVin(),
  'blue',
  'Toyota',
  'Camry',
  2021,
  3000,
  130,
  []
);

// TODO: uncomment once motorbikes are implemented✅
const motorbike1Wheels = [new Wheel(17, "Michelin"), new Wheel(17, "Michelin")];
const motorbike1 = new Motorbike(Cli.generateVin(), "black", "Harley Davidson", "Sportster", 2021, 500, 125, motorbike1Wheels);

// push vehicles to array
// TODO: uncomment once trucks are implemented✅
vehicles.push(truck1); //☑️Pushing the sample vehicles into the vehicles array so that the user can already have a selection when launching the application
vehicles.push(car1);
// TODO: uncomment once motorbikes are implemented✅
vehicles.push(motorbike1);

// create a new instance of the Cli class
const cli = new Cli(vehicles);

// start the cli
cli.startCli();
