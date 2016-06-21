'use strict';

module.exports = function uncaughtException(handle) {
  const listeners = process.listeners('uncaughtException');
  process.removeAllListeners('uncaughtException');

  const innerHandle = (err) => {
    process.removeAllListeners('uncaughtException');
    listeners.forEach((listener) => {
      process.on('uncaughtException', listener);
    });
    handle(err);
  }
  process.on('uncaughtException', innerHandle);
}