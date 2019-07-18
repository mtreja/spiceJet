var spiceJectMethod = {
    addOnsManager: function (data) {
        this
            .moveToElement("@addOns", 10, 10)
            .api.pause(2000)
        this
            .click(data.selector)
            .api.pause(2000)
        this
            .waitForElementVisible(data.grab, 1000000)
        return this
    },
    searchManager: function (data) {
        this
            .setValue("@departureCity", [data.dCity, this.api.Keys.ARROW_DOWN, this.api.Keys.ENTER])
            .pause(3000)
            .setValue("@arrivalCity", [data.aCity, this.api.Keys.ARROW_DOWN, this.api.Keys.ENTER])
            .pause(3000)
            .click("@currency")
            .click('@currencyUsd')
            .click("@calender")
            .pause(3000)
            .click("@nextMonth")
            .click("@date")
            .pause(3000)
            .click("@passengers")
            .pause(2000)
            .click("@incresae")
            .pause(1000)
            .click('@incresae')
            .pause(1000)
            .click("@done")
            .pause(1000)
            .click("@search")
            .useXpath()
            .verify.containsText('//*[@class="bound-city uppercase"]', "DEPARTURE FLIGHT")
            .click("@class")
            .pause(1000)
            .click("@currencyConvert")
            .pause(2000)
            .click("@selectCurrency")
            .pause(2000)
            .click("@convertInto")
            .pause(2000)
            .click("@convertBdt")
            .pause(2000)
            .setValue("@amount", "1000")
            .pause(2000)
            .click("@convert")
            .pause(2000)
            .click("@continue")
            .useCss()
            .waitForElementVisible('.contact-heading', 500)
        this
            .pause(1000)
        return this


    }
}
module.exports = {
    url: "https://www.spicejet.com/",
    commands:[spiceJectMethod],
    elements: {
        addOns: {
            selector: '(//*[@id="highlight-addons"])[1]',
            locateStrategy: "xpath"
        },
        spiceMax: {
            selector: '//a[contains(text(), "SpiceMax")]',
            locateStrategy: "xpath"
        },
        hotMeals: {
            selector: '//a[contains(text(), "Hot Meals")]',
            locateStrategy: "xpath"
        },
        seatMeal: {
            selector: '//a[contains(text(), "Seat + Meal Combo")]',
            locateStrategy: "xpath"
        },
        you1st: {
            selector: '//a[contains(text(), "You 1st")]',
            locateStrategy: "xpath"
        },
        priorityCheckIn: {
            selector: '//a[contains(text(), "Priority Check-in")]',
            locateStrategy: "xpath"
        },
        spiceMaxText: {
            selector: '//*[@class="addons-heading commercial-heading"]',
            locateStrategy: "xpath"
        },
        hotMealsText: {
            selector: '(//*[@class="addons-heading-hot"])[2]',
            locateStrategy: "xpath"
        },
        seatMealText: {
            selector: '//*[@class="city_discription"]',
            locateStrategy: "xpath"
        },
        you1stText: {
            selector: '//*[@class="addons-heading"]',
            locateStrategy: "xpath"
        },
        priorityCheckInText: {
            selector: '//*[@class="addons-heading"]',
            locateStrategy: "xpath"
        },
        departureCity: {
            selector: '(//*[@value="Departure City"])',
            locateStrategy: "xpath"
        },
        arrivalCity: {
            selector: '(//*[@value="Arrival City"])[1]',
            locateStrategy: "xpath"
        },
        calender: '#ctl00_mainContent_view_date1',
        calender2: {
            selector: '//*[@id="ctl00_mainContent_view_date4"]',
            locateStrategy: "xpath"
        },
        date: {
            selector: '(//a[text()="30"])[2]',
            locateStrategy: "xpath"
        },
        nextMonth: {
            selector: '//*[@class="ui-icon ui-icon-circle-triangle-e"]',
            locateStrategy: "xpath"
        },
        currency: '#ctl00_mainContent_DropDownListCurrency',
        currencyUsd: '#ctl00_mainContent_DropDownListCurrency [value="USD"]',
        passengers: '#divpaxinfo',
        done: '#btnclosepaxoption',
        incresae: '#hrefIncAdt',
        search: {
            selector: '(//*[@type="submit"])[1]',
            locateStrategy: "xpath"
        },
        class: {
            selector: '(//*[@type="radio"])[5]',
            locateStrategy: "xpath"
        },
        currencyConvert: {
            selector: '//*[@id="popUpConverter"]',
            locateStrategy: "xpath"
        },
        selectCurrency: {
            selector: '//*[@id="CurrencyConverterCurrencyConverterView_DropDownListBaseCurrency"]',
            locateStrategy: "xpath"
        },
        convertUsd: {
            selector: '//*[@id="CurrencyConverterCurrencyConverterView_DropDownListBaseCurrency"] //*[@value="USD"]',
            locateStrategy: "xpath"
        },
        convertInto: {
            selector: '//*[@id="CurrencyConverterCurrencyConverterView_DropDownListConversionCurrency"]',
            locateStrategy: "xpath"
        },
        convertBdt: {
            selector: '//*[@id="CurrencyConverterCurrencyConverterView_DropDownListConversionCurrency"] //*[@value="BDT"]',
            locateStrategy: "xpath"
        },
        amount: '#CurrencyConverterCurrencyConverterView_TextBoxAmount',

        convert: {
            selector: '(//*[@type="submit"])[3]',
            locateStrategy: "xpath"
        },
        continue: '#continue-to-contact-page',





    }
}