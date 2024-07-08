'use strict';

const myBicycle = {
  speed: 30,
  gear: 1,
  frameMaterial: 'carbon fibre',
};

// Voeg een methode accelerate toe aan myBicycle
// De methode heeft 1 parameter, een percentage waarmee
// de speed van myBicycle moet worden aangepast

myBicycle.accelerate = function (percentage) {
  this.speed += (percentage * this.speed) / 100;
};

// Laat de fiets 25% versnellen. Log de speed voor en na
// de methode aanroep.
console.log('Speed is ' + myBicycle.speed + 'km/h');
myBicycle.accelerate(25);
console.log('Accelerated to ' + myBicycle.speed + 'km/h');

// Voeg een methode toe die de snelheid beoordeelt
// De methode retourneert een string
// speed [0..10[ 'Walking...'
// speed [10..20[ 'Brakes on...'
// speed [20..40[ 'Pushing...'
// speed [40..60[ 'Peleton style...'
// speed >= 60 'Sagan style...
//
// Stel de speed van myBicycle in op 5
// Test nu bovenstaande methode door in een lusje de speed in stapjes van 10%
// te verhogen (via de methode accelerate) en telkens de geretourneerde string te loggen.
// De iteratie stopt wanneer de speed van myBicycle hoger dan 100 is.

myBicycle.judgeSpeed = function () {
  switch (true) {
    case this.speed < 10:
      return 'Walking...';
    case this.speed < 20:
      return 'Brakes on...';
    case this.speed < 40:
      return 'Pushing...';
    case this.speed < 60:
      return 'Peleton style...';
    default:
      return 'Sagan style...';
  }
};

myBicycle.speed = 5;
while (myBicycle.speed <= 100) {
  myBicycle.accelerate(10);
  console.log(myBicycle.judgeSpeed());
}
