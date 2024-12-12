// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike from "./Motorbike.js";
import Wheel from "./Wheel.js";

// define the Cli class
class Cli {
  // TODO: update the vehicles property to accept Truck and Motorbike objects as well✅
  // TODO: You will need to use the Union operator to define additional types for the array✅
  // TODO: See the AbleToTow interface for an example of how to use the Union operator✅
  vehicles: (Car | Truck | Motorbike)[]; //☑️These pipes are used to accept Car objects, OR Truck objects, OR Motorbike objects
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  // TODO: Update the constructor to accept Truck and Motorbike objects as well✅
  constructor(vehicles: (Car | Truck | Motorbike)[]) { //☑️Updating the constructor function with the union operator as well
    this.vehicles = vehicles;
  }

  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // perform actions on the selected vehicle
        this.performActions();
      });
  }

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          // TODO: Update the choices array to include Truck and Motorbike✅
          choices: ['Car', 'Truck', "Motorbike"], //☑️The user is prompted to choose between a car, truck, or motorbike with this array of choices that will appear in the command line
        },
      ])
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
          // create a car
          this.createCar();
        }
        else if (answers.vehicleType === 'Truck') {
          this.createTruck(); //☑️The createTruck method is used here to create a new truck if the user selects 'Truck'
        }
        else if (answers.vehicleType === 'Motorbike') {
          this.createMotorbike(); //☑️The createMotorbike method is used here to create a new motorbike if the user selects 'Motorbike'
        }
        // TODO: add statements to create a truck or motorbike if the user selects the respective vehicle type✅
      });
  }

  // method to create a car
  createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
      ])
      .then((answers) => {
        const car = new Car(
          // TODO: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!✅
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        // push the car to the vehicles array
        this.vehicles.push(car);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // perform actions on the car
        this.performActions();
      });
  }

  // method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
        },
      ])
      .then((answers) => {
        // TODO: Use the answers object to pass the required properties to the Truck constructor✅
        // TODO: push the truck to the vehicles array✅
        // TODO: set the selectedVehicleVin to the vin of the truck✅
        // TODO: perform actions on the truck✅
        const truck = new Truck( //☑️ This accpets parameters of all the required properties
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [],
          parseInt(answers.towingCapacity)
        )
        this.vehicles.push(truck); //☑️This pushes the truck to the array of vehicles
        this.selectedVehicleVin = truck.vin; //☑️As the above TODO comment says, this sets the selectedVehicleVin to the vin of the truck
        this.performActions(); //☑️The performActions method now allows the user to select different actions to perform on the new truck
      });
  }

  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
        },
      ])
      .then((answers) => {
        // TODO: Use the answers object to pass the required properties to the Motorbike constructor✅
        // TODO: push the motorbike to the vehicles array✅
        // TODO: set the selectedVehicleVin to the vin of the motorbike✅
        // TODO: perform actions on the motorbike✅
        const motorbike = new Motorbike( //☑️This accepts parameters of all the required properties for the motorbike
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        this.vehicles.push(motorbike); //☑️This pushes the new motorbike into the vehicles array
        this.selectedVehicleVin = motorbike.vin; //☑️As the above TODO comment says, this sets the selectedVehicleVin to the vin of the new motorbike
        this.performActions(); //☑️The performActions method allows the user to now select different actions to perform on the new motorbike
      });
  }

  // method to find a vehicle to tow
  // TODO: add a parameter to accept a truck object✅
  findVehicleToTow(truck: Truck): void { //☑️findVehicleToTow now has a truck object being passed to it
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle,
            };
          }),
        },
      ])
      .then((answers) => {
        // TODO: check if the selected vehicle is the truck✅
        // TODO: if it is, log that the truck cannot tow itself then perform actions on the truck to allow the user to select another action✅
        // TODO: if it is not, tow the selected vehicle then perform actions on the truck to allow the user to select another action✅
        if (answers.vehicleToTow.vin === truck.vin) { //☑️This checks of the selected vehicle is the same as the truck that the user is trying to tow with, as a truck cannot tow itself
          console.log('The truck cannot tow itself. Please select another vehicle.'); //☑️Lets the user know to select a different vehicle
          this.performActions(); //☑️The user is brought back to the options to perform different actions on the vehicle
        }
        else {
          truck.tow(answers.vehicleToTow); //☑️If the selected vehicle to tow is valid, this implements the tow method on the answer of which vehicle is being towed that the user provided
          this.performActions();
        }
      });
  }

  // method to perform actions on a vehicle
  performActions(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          // TODO: add options to tow and wheelie✅
          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            'Tow', //☑️The tow and wheelie options are now in the choices array for the user to choose from for their vehicle, but if these are selected for an invalid vehicle (ex. trying to perform a wheelie on a car) it will let the user know that this is not valid
            'Wheelie',
            'Select or create another vehicle',
            'Exit',
          ],
        },
      ])
      .then((answers) => {
        // perform the selected action
        if (answers.action === 'Print details') {
          // find the selected vehicle and print its details
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].printDetails();
            }
          }
        } else if (answers.action === 'Start vehicle') {
          // find the selected vehicle and start it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].start();
            }
          }
        } else if (answers.action === 'Accelerate 5 MPH') {
          // find the selected vehicle and accelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].accelerate(5);
            }
          }
        } else if (answers.action === 'Decelerate 5 MPH') {
          // find the selected vehicle and decelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].decelerate(5);
            }
          }
        } else if (answers.action === 'Stop vehicle') {
          // find the selected vehicle and stop it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].stop();
            }
          }
        } else if (answers.action === 'Turn right') {
          // find the selected vehicle and turn it right
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('right');
            }
          }
        } else if (answers.action === 'Turn left') {
          // find the selected vehicle and turn it left
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('left');
            }
          }
        } else if (answers.action === 'Reverse') {
          // find the selected vehicle and reverse it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].reverse();
            }
          }
        }
        // ✅TODO: add statements to perform the tow action only if the selected vehicle is a truck. Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. After calling the findVehicleToTow method, you will need to return to avoid instantly calling the performActions method again since findVehicleToTow is asynchronous.
        else if (answers.action === 'Tow') { //☑️This checks if the user selected the tow method in the performActions array of choices
          const selectedVehicle = this.vehicles.find( //☑️This searches the vehicles array to find the vehicle that matches the VIN of this.selectedVehicleVin, and stores it in "selectedVehicle" to make it easier to get the vehicle the user selected
            (vehicle) => vehicle.vin === this.selectedVehicleVin
          );
          if (selectedVehicle instanceof Truck) { //☑️This makes sure the selected vehicle is a truck, and then the findVehicleToTow method is implemented
            this.findVehicleToTow(selectedVehicle);
            return;
          } else {
            console.log('Only trucks can tow other vehicles.'); //☑️If the selected vehicle is not a truck, the user is notified that only trucks can tow
          }
        }
        // TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike✅
        else if (answers.action === 'Wheelie') { //☑️Checks if the user selected the wheelie method in the performActions array of choices
          const selectedVehicle = this.vehicles.find( //☑️This searches the vehicles array to find the vehicle that matches the VIN of this.selectedVehicleVin, and stores it in "selectedVehicle" to make it easier to get the vehicle the user selected
            (vehicle) => vehicle.vin === this.selectedVehicleVin
          );
          if (selectedVehicle instanceof Motorbike) { //☑️This makes sure the selected vehicle is a motorbike, and then the wheelie method is implemented
            selectedVehicle.wheelie();
          }
          else {
            console.log('Only Motorbikes can perform wheelies.'); //☑️If the selected vehicle is not a motorbike, the user is notified that only motorbikes can perform wheelies.
          }
        }
        else if (answers.action === 'Select or create another vehicle') {
          // start the cli to return to the initial prompt if the user wants to select or create another vehicle
          this.startCli();
          return;
        } else {
          // exit the cli if the user selects exit
          this.exit = true;
        }
        if (!this.exit) {
          // if the user does not want to exit, perform actions on the selected vehicle
          this.performActions();
        }
      });
  }

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;
