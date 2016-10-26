'use strict';

function Button(thermostat) {
  this.thermostat = thermostat;
}

Button.prototype.up = function() {
  this.thermostat.increase();
};

Button.prototype.down = function() {
  this.thermostat.decrease();
};
