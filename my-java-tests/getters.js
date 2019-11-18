const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 75,
    //getters are methods that get and return the internal properties of an object. 
    //getter and setters cannot share the same name as the getter/setter property
    get energyLevel() {
        if (typeof this._energyLevel === 'number') {
            return `My current energy level is ${this._energyLevel}`
        } else {
            return "System malfunction: cannot retrieve energy level"
        }
    },
    set numOfSensors(num) {
        if (typeof num === 'number' && num >= 0) {
            this._numOfSensors = num;
        } else {
            console.log('Pass in a number that is greater than or equal to 0');
        }
    }
};
//getters do not need to be called with a set of ()
console.log(robot.energyLevel);
robot.numOfSensors = 100;
console.log(robot._numOfSensors);

const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile, //destructing, short-hand
        beep() {
            console.log('Beep Boop');
        },


    }
}

const tinCan = robotFactory('P-500', true);
tinCan.beep();

const roboto = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
//destructive assignment, variable created with the name of an object's key that is wrapped in {}
  const {functionality}=roboto;
  functionality.beep();

  const mrRobot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// object.keys returns an array of a given object's own enumerable property names. 
const robotKeys = Object.keys(mrRobot);

console.log(robotKeys);

// object.entries returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
    //similar to for..in loop without the prototype properties.
const robotEntries = Object.entries(mrRobot)
console.log(robotEntries);

// object.assign(target, source) copies values of all enumerable own properties from one or more sources to a target object
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, mrRobot);

console.log(newRobot);