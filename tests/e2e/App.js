var assert = require('assert');

describe('Cowboy Horoscope', () => {
    it('should have the right title', () => {
        browser.url('localhost:3000');
        var title = browser.getTitle();
        assert.equal(title, 'Cowboy Horoscope');
    });

    it('does not show horoscope on page load', () => {
        browser.url('localhost:3000');
        let horoscopeText = browser
            .element('[data-test="horoscope"]')
            .getText();
        
        assert.equal('', horoscopeText);
    });

    it('reveals horoscope', () => {
        browser.url('localhost:3000');

        // Tab through because I really don't want to dig
        // through the react select third party element...
        browser.keys("Tab");
        browser.keys(["M", "a", "y"]);
        browser.keys(["Tab", "Tab"]);
        browser.keys(["1", "0"]);
        browser.keys("Tab");
        
        browser.click('[data-test="reveal-horoscope"]');

        let horoscopeText = browser
            .element('[data-test="horoscope"]')
            .getText();

        assert.notEqual('', horoscopeText);
    });
});