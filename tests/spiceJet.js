var spiceJetTest = {}

var addOnsData = require('../testsAssets/spiceAssets')
var searchCityData = require('../testsAssets/spiceAssets2')

module.exports = {
    beforeEach: browser => {
        spiceJetTest = browser.page.spiceJetObject()
        spiceJetTest.navigate()
    },
    after: browser => {
        spiceJetTest.end()
    },
    'test1': browser => {
        addOnsData.forEach(test => {
            spiceJetTest
                .addOnsManager(test)
        }
        )
    },
    'test2': browssr => {
        searchCityData.forEach(test=>{
            spiceJetTest
            .searchManager(test)
        }
    
        )
    }    
}