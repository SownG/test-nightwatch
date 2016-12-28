export default {
    '@tags': ['SaveSearch'],
    'Save search with empty Location': (client) => {
        const leadDetailAdd = client.page.leadDetailAdd();
        const constantsLeadAdd = client.globals.constantsLeadAdd;
        const waitForAPICallback = client.globals.waitForAPICallback;
        const loginPage = client.page.loginPage();
        const constantsLogin = client.globals.constantsLogin;

        // login
        loginPage
            .navigate()
            .login(constantsLogin.emailPass, constantsLogin.passwordPass);
        client.pause(waitForAPICallback);

        // Lead-detail/add
        leadDetailAdd
            .navigate()
            .enterNewLeadDetails( constantsLeadAdd.firstName, constantsLeadAdd.lastName, constantsLeadAdd.emailAddress, constantsLeadAdd.phoneNumber,constantsLeadAdd.party);
        client.pause(waitForAPICallback);
        leadDetailAdd.chooseParty();
        client.pause(waitForAPICallback);
        leadDetailAdd.submitEmptyLocation();
        client.pause(waitForAPICallback);

        //Check success
        leadDetailAdd
            .assert.cssProperty("@searchLocationInput", "border-color", "rgb(255, 0, 0)");
        client.end();
      }
};