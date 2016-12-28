export default {
    '@tags': ['SaveSearch'],
    'Save search success': (client) => {
        const leadDetailAdd = client.page.leadDetailAdd();
        const successPage = client.page.successPage();
        const constantsLeadAdd = client.globals.constantsLeadAdd;
        const waitForAPICallback = client.globals.waitForAPICallback;
        const loginPage = client.page.loginPage();
        const constantsLogin = client.globals.constantsLogin;

        let day = new Date();
        let time = day.getTime().toString();

        // Login
        loginPage
            .navigate()
            .login(constantsLogin.emailPass, constantsLogin.passwordPass);
        client.pause(waitForAPICallback);

        // Lead-detail/add
        leadDetailAdd
            .navigate()
            .enterNewLeadDetails( constantsLeadAdd.firstName, constantsLeadAdd.lastName, time + constantsLeadAdd.emailAddress, constantsLeadAdd.phoneNumber,constantsLeadAdd.party);
        client.pause(waitForAPICallback);
        leadDetailAdd.chooseParty();
        client.pause(waitForAPICallback);
        leadDetailAdd.enterLocation();
        client.pause(waitForAPICallback);
        leadDetailAdd.submitHaveLocation();
        client.pause(waitForAPICallback);

        // Check success
        successPage.loadPage();
        successPage.expect.element('@main').to.be.visible;
        client.end();
      }
};