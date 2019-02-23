var expect = require('expect');
var {generateMessage, generateLocationMessage} = require ('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Ben';
    var text = 'some message';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Ben';
    var lat = 15;
    var long = 19;
    var message = generateLocationMessage(from, lat, long);

    expect(typeof message.createdAt).toBe('number');
    expect(message.url).toBe(`https://www.google.com/maps?q=${lat},${long}`);
    })

  });
});
