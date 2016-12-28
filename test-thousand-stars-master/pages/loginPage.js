const loginCommands = {
  login(email, pass) {
    return this
      .setValue('@emailInput', email)
      .setValue('@passInput', pass)
      .click('@loginButton')
  }
};

export default {
  url: 'http://localhost:7811/auth',
  commands: [loginCommands],
  elements: {
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
    }
  }
};
