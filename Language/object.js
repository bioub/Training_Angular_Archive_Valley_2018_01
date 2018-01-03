// 1 - we manipule a lot of existing objects

// defined in the language
console.log(typeof Math); // object

// defined in Node.js only
console.log(typeof process); // object

// defined in browser only
console.log(typeof document); // object

// defined in browser and node
console.log(typeof console); // object

// 2 - objects are extensible
// an object is a key/value system
// like : in python dictionaries
// Java : Maps
// C++ : Hashtable
// PHP : associative arrays

console.log(Math.sum); // undefined

// adding
Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2)); // 3

// modifing
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum('1', '2')); // 3

// deleting
delete Math.sum;

// 3 - two operators to get key
// . operator
console.log(Math.PI);

// [] operator
console['log'](Math['PI']);

// 4 - 3 cases when dealing with new objects

// a - instanciate the objet once :
// object literal (very close to JSON)
const coords = {
  x: 10,
  y: 20,
};

// convert to JSON (serialization of an object)
const json = JSON.stringify(coords);

// ... network ...

const coordsFromJSON = JSON.parse(json);

// loop over the keys
for (let key in coords) {
  const value = coords[key];
}

// b - more than once with no methods
// factory function

function createCoords(x, y, z) {
  x = x || 0;
  y = y || 0;
  z = z || 0;
  return {
    x: x,
    y: y,
    z: z,
  };
}

const coords3d = createCoords(10, 20);
console.log(coords3d.z); // 0

// c - more than once with methods
// constructor function

function Contact(firstName) {
  // arguments, this
  this.firstName = firstName;
}

Contact.prototype.hello = function() {
  return 'Hello my name is ' + this.firstName;
};

const romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(romain.hello()); // Hello my name is Romain

const eric = new Contact('Eric');
console.log(eric.hello()); // Hello my name is Eric

console.log(romain.hello === eric.hello); // true