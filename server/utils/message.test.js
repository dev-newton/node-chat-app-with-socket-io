var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        //store response in a variable
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        //assert createdAt is number 
        expect(message.createdAt).toBeA('number');
        //assert text, from match
        expect(message).toInclude({ from, text });   
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Jane';
        var latitude = 15;
        var longitude = 19;
        var url = 'https://www.google.com/maps?q=15,19'

        var locationMessage = generateLocationMessage(from, latitude, longitude);
        //assertions
        expect(locationMessage.createdAt).toBeA('number');
        expect(locationMessage).toInclude({ from, url});
    });
});