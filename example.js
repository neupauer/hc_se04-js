const HC_S04 = require('./index');

const triggerGPIO = 27;
const echoGPIO = 17;

const config = {
  triggerGPIO,
  echoGPIO
};

const $stream = HC_S04.createStream(config);

$stream.subscribe((distance) => {
  console.log(`Distance: ${distance} cm.`);
});
