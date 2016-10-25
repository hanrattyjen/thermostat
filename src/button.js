'use strict'

function Button() {
  // this._temp = 20;
}

Button.prototype.up = function(thermostat) {
  thermostat.increase(this);
  // this._temp = 21;
};
