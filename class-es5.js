



// let animal = {
//     walk(){
//         if(!this.isSleeping){
//             console.log("animal is walking");
//         }
//     },
//     sleep(){
//         this.isSleeping = true;
//     }
// }

// animal.sleep();
// animal.walk();

// let rabbit = {
//     name: "White rabbit",
//     __proto__: animal
// }
// rabbit.walk();
// rabbit.sleep();


function Car(){
     
}

Car.prototype.drive = function(){
    console.log("vroom");
}

Car.prototype.honk = function(){
    console.log("honk honk...");
}

let benz = new Object();
benz.__proto__ = Car.prototype;


benz.drive();
benz.honk();