let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn'],
    'Active Mission':true,

    retreat:function () {
        console.log("We are losing, retreat!")
    },
    takeoff() {
        console.log("Blast off!")
    }
  };
  
  let crewCount=spaceship.numCrew;
  let propName='Active Mission';

  let isActive=spaceship['Active Mission'];
console.log(spaceship["Active Mission"]);
  console.log(spaceship[propName]);

//add a new property to spaceship
spaceship.numEngines=8;
//delete a property
delete spaceship['homePlanet'];

spaceship.retreat();
spaceship.takeoff();

let spaceshipEnterprise = {
    passengers: [{name: 'Space Dog'}], 
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      backup: {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  
  let capFave = spaceshipEnterprise.crew.captain['favorite foods'][0];
  
  let firstPassenger = spaceshipEnterprise.passengers[0];

  let spaceshipKlingon = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 


//Loops to iterate through objects
for (let crewMember in spaceshipKlingon.crew) {
  console.log(`${crewMember}: ${spaceshipKlingon.crew[crewMember].name}`)
};

for (let crewMember in spaceshipKlingon.crew) {
  console.log(`${spaceshipKlingon.crew[crewMember].name}: ${spaceshipKlingon.crew[crewMember].degree}`)
};
for (let crewMember in spaceshipKlingon.crew) {
  console.log(`${crewMember}: ${spaceshipKlingon.crew[crewMember].name}
  :${spaceshipKlingon.crew[crewMember].degree}`)
};