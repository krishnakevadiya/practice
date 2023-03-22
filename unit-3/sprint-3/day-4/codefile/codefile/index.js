class Vehicle {
  constructor(t, r) {
    this.type = t;
    this.regNumber = r;
  }
}

class Car extends Vehicle {
  constructor(regNumber) {
   
    super("Car", regNumber);
  }
}
class Bike extends Vehicle {
  constructor(regNumber) {
    
    super("Bike", regNumber);
  }
}
class Truck extends Vehicle {
  constructor(regNumber) {
  
    super("Truck", regNumber);
  }
}

class Slot {
  constructor(number, type) {
    this.number = number;
    this.type = type;
    this.isBooked = false;
  }
}

class ParkingFloor {
  constructor(floorNumber, maxSlots) {
    this.floorNumber = floorNumber;
        this.parkingSpots = [];
    
    for (let i = 0; i < maxSlots; i++) {
     
      if (i === 0) {
        
        this.parkingSpots.push(new Slot(i, "Bike"));
      }
      
      else if (i == 1) {
        this.parkingSpots.push(new Slot(i, "Car"));
  
      } else if(i==2){
        this.parkingSpots.push(new Slot(i, "Truck"));
      }
    }
  }
}

class Mall {
  constructor(numberofFloors) {
    this.floors = [];
    this.numberofFloors = numberofFloors;
 
    for (let i = 0; i < numberofFloors; i++) {
      
      this.floors.push(new ParkingFloor(i, numberofFloors));
    }
  }

  parkVehicle(vehicle) {
    let type = vehicle.type;
   
    let slot = this.findSlot(type);
    if (!slot) {
      console.log("all slots full");
      return false;
    }
    slot.foundedSlot.isBooked = true;
    console.log("slot:", slot);
  }
  findSlot(userVehicleType) {
    // go to first floor . check all slots
    // go to 2nd check all slots
    // this.floors[0].parkingSpots
    for (let i = 0; i < this.numberofFloors; i++) {
      for (let slot of this.floors[i].parkingSpots) {
        // type - bike
        // true && false I
        if (slot.type === userVehicleType && !slot.isBooked) {
          return { floorNumber: i, foundedSlot: slot };
        }
      }
    }
    return false;
  }
}
let m1 = new Mall(3);
let b1 = new Bike("MH29 BT 6723");
let b2 = new Bike("MH12 BT 6767");
let b3 = new Bike("MH12 BT 6767");
let b4 = new Bike("MH12 BT 6767");
m1.parkVehicle(b1);
m1.parkVehicle(b2);
m1.parkVehicle(b3);
m1.parkVehicle(b4);

let c1 = new Car("MH12 BT 6767");
m1.parkVehicle(c1);
let c2 = new Car("MH12 BT 6767");
m1.parkVehicle(c2);
let c3 = new Car("MH12 BT 6767");
m1.parkVehicle(c3);
let c4 = new Car("MH12 BT 6767");
m1.parkVehicle(c4);
let c5 = new Car("MH12 BT 6767");
m1.parkVehicle(c5);

let t1 = new Truck("MH32 BT 6767");

let t2 = new Truck("MH52 BT 6767");

let t3 = new Truck("MH62 BT 6767");

let t4 = new Truck("MH72 BT 6767");
m1.parkVehicle(t1);
m1.parkVehicle(t2);
m1.parkVehicle(t3);
m1.parkVehicle(t4);