const leadDetailCommands = {
    login(email, pass) {
        return this
          .setValue('@emailInput', email)
          .setValue('@passInput', pass)
          .click('@loginButton')
    },
    creatNew() {
        return this
            .click('@creatNew')
    },
    setValueInput(label, location) {
        return this
            .setValue('@inputLabel', label )
            .setValue('@searchLocationInput', location )
            .waitForElementVisible('@resultSearchLocation', 2000)
            .click('@resultSearchLocation')
            .click('@checkboxSingleFamily')
    },
    setAmenities() {
        return this
            .waitForElementVisible('@amenityIcon', 5000)
            .click('@amenityIcon')
    },
    openEditPopup() {
        return this
            .click('@editSaveSearch')
    },
    editSaveSearch(label, location, priceMin, priceMax, sqft ) {
        return this
            .clearValue('@inputLabel')
            .setValue('@inputLabel', label )
            .setValue('@searchLocationInput', location )
            .waitForElementVisible('@editResultSearchLocation', 2000)
            .click('@editResultSearchLocation')
            .click('@checkboxCondos')
            .click('@checkboxApartments')
            .click('@checkboxLand')
            .setValue('@inputPriceMin', priceMin)
            .setValue('@inputPriceMax', priceMax)
            .click('@selectBedRoom')
            .waitForElementPresent('@optionBedRoom', 2000)
            .click('@optionBedRoom')
            .waitForElementPresent('body', 2000)
            .click('@selectBaths')
            .waitForElementPresent('@optionBaths', 2000)
            .click('@optionBaths')
            .waitForElementPresent('body', 2000)
            .setValue('@inputSqft', sqft)
            .waitForElementPresent('body', 2000)
            .click('@selectDayOnMarket')
            .waitForElementPresent('@optionDayOnMarket', 2000)
            .click('@optionDayOnMarket')

    },
    submit() {
        return this
            .click('@saveButton')
    }
};

export default {
    url: 'http://localhost:7811/lead-detail/ddf0298b-5232-4949-98ca-799c278245e9',
    commands: [leadDetailCommands],
    elements: {
        //login page element
        emailInput: {
            selector: 'input[type=text]'
        },
        passInput: {
            selector: 'input[name=password]'
        },
        loginButton: {
            selector: '//button[@class="pb-button"]',
            locateStrategy: 'xpath'
        },
        message: {
            selector: '//div[@class="message-bin"]',
            locateStrategy: 'xpath'
        },
        // lead detail page element
        creatNew: {
          selector: '//button[@class="ylopo-button"]/span[text()="Create New"]',
          locateStrategy: 'xpath'
        },
        inputLabel: {
            selector: 'input[name="label"]',
        },
        searchLocationInput: {
            selector: '//input[@class="google-autocomplete react-tagsinput-input"]',
            locateStrategy: 'xpath'
        },
        resultSearchLocation: {
            selector: '//div[@class="pac-container pac-logo"]',
            locateStrategy: 'xpath'
        },
        saveButton: {
          selector: '//button[@class="actionButton ylopo-button"]/span[text()="Submit and Save"]',
          locateStrategy: 'xpath'
        },
        checkboxSingleFamily: {
            selector: 'input[value="house"]',
        },
        checkboxCondos: {
            selector: 'input[value="condo"]',
        },
        checkboxApartments: {
            selector: 'input[value="apt"]',
        },
        checkboxLand: {
            selector: 'input[value="land"]',
        },
        inputPriceMin: {
            selector: 'input[name="priceMin"]',
        },
        inputPriceMax: {
            selector: 'input[name="priceMax"]',
        },
        selectBedRoom: {
            selector: 'div[name="bedrooms"]',
        },
        optionBedRoom: {
            selector: '//div[contains(@style,"padding: 16px 0px; display: table-cell; user-select: none; width: 192px;")]/div[position()=6]',
            locateStrategy: 'xpath'
        },
        selectBaths: {
             selector: 'div[name="baths"]',
        },
        optionBaths: {
            selector: '//div[contains(@style,"padding: 16px 0px; display: table-cell; user-select: none; width: 192px;")]/div[position()=7]',
            locateStrategy: 'xpath'
        },
        selectDayOnMarket: {
             selector: '//div[@class="time-on-market-select searchField"]/div[@class="select-field-wrapper"]',
             locateStrategy: 'xpath'
        },
        optionDayOnMarket: {
            selector: '//div[contains(@style,"padding: 16px 0px; display: table-cell; user-select: none; width: 256px;")]/div[position()=5]',
            locateStrategy: 'xpath'
        },
        inputSqft: {
            selector: 'input[name="s_sqftMin"]',
        },
        firstSaveSearch: {
            selector: '//table[@class="lead-search-list"]/tbody/tr[@class="row-standard"][position()=1]/td[@class = "column1 ylopo-row-column"]',
            locateStrategy: 'xpath'
        },
        amenitiesBlock: {
            selector: 'div[class="featured-wrapper"]'
        },
        amenityIcon: {
            selector: '//div[@class="amenity-icon"][position()=2]/div',
            locateStrategy: 'xpath'
        },
        editSaveSearch: {
            selector: '//table[@class="lead-search-list"]/tbody/tr[@class="row-standard"][position()=1]/td[@class = "column3 ylopo-row-column"]/a',
            locateStrategy: 'xpath'
        },
        editResultSearchLocation: {
            selector: '//div[@class="pac-container pac-logo"][position()=2]',
            locateStrategy: 'xpath'
        },
        main: {
          selector: '//div[@class="left-column"]',
          locateStrategy: 'xpath'
        }
    }
};