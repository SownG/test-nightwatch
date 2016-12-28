const successCommand = {
    loadPage() {
        return this
         .waitForElementVisible('@main', 5000)
    }
}
export default {
    commands: [successCommand],
    elements: {
        main: {
          selector: '//div[@class="left-column"]',
          locateStrategy: 'xpath'
        }
    }
};
