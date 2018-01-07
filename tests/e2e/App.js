var assert = require('assert');

describe('Cowbody Horoscope', function() {
    it('should have the right title', function () {
        browser.url('localhost:3000');
        var title = browser.getTitle();
        assert.equal(title, 'Cowboy Horoscope');
    });
});