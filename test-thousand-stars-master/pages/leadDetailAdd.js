const addCommands = {
    enterNewLeadDetails(firstName, lastName, emailAddress, phoneNumber, party) {
        return this
            .waitForElementVisible('@inputFirstName', 5000)
            .setValue('@inputFirstName', firstName)
            .setValue('@inputLastName', lastName)
            .setValue('@inputEmailAddress', emailAddress)
            .setValue('@inputPhoneNumber', phoneNumber)
            .click('@inputSelectParty')
    },
    chooseParty() {
        return this
            .click('@chooseParty')
    },
    submitEmptyLocation() {
        return this
            .click('@checkboxCreateSavedSearch')
            .click('@saveButton')
    },
    enterLocation() {
        return this
            .click('@checkboxCreateSavedSearch')
            .waitForElementVisible('@searchLocationInput', 2000)
            .setValue('@searchLocationInput', '34')
    },
    submitHaveLocation() {
        return this
            .click('@resultSearchLocation')
            .waitForElementVisible('@tagsinputLocation', 5000)
            .click('@saveButton')
    }
};

export default {
    url: 'http://localhost:7811/lead-detail/add',
    commands: [addCommands],
    elements: {
        inputFirstName: {
           selector: 'input[name=firstName]',
        },
        inputLastName: {
            selector: 'input[name="lastName"]',
        },
        inputEmailAddress: {
            selector: 'input[name="emailAddress"]',
        },
        inputPhoneNumber: {
            selector: 'input[name="phoneNumber"]',
        },
        inputSelectParty: {
          selector: 'div[name="partyId"]',
        },
        checkboxCreateSavedSearch: {
            selector: 'input[type="checkbox"]',
        },
        chooseParty: {
            selector: '//body[@class="thousand-stars"]/div[contains(@style,"position: fixed; top: 0px; bottom: 0px; left: 0px; right: 0px; z-index: 2000;")]/div/div',
            locateStrategy: 'xpath'
        },
        saveButton: {
          selector: '//button[@class="ylopo-button"]/span[text()="Submit and Save"]',
          locateStrategy: 'xpath'
        },
        resultSearchLocation: {
            selector: 'div[class="pac-container pac-logo"]',
        },
        searchLocationInput: {
            selector: '//input[@class="google-autocomplete react-tagsinput-input"]',
            locateStrategy: 'xpath'
        },
        tagsinputLocation : {
              selector: 'span[class="react-tagsinput-tag"]',
        }
    }
};