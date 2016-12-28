export default {
    '@tags': ['SaveSearch'],
    'View Edit screen': (client) => {
        const leadDetail = client.page.leadDetail();
        const waitForAPICallback = client.globals.waitForAPICallback;
        const loginPage = client.page.loginPage();
        const constantsLogin = client.globals.constantsLogin;

        leadDetail
            .navigate()
            .login(constantsLogin.emailPass, constantsLogin.passwordPass);
        client.pause(waitForAPICallback);
        leadDetail.expect.element('@main').to.be.visible;
        leadDetail.creatNew();
        client.pause(waitForAPICallback);
        leadDetail
            .setValueInput('Test label 2' , 21666)
            .submit();
        client.pause(waitForAPICallback);
        leadDetail.openEditPopup();
        client.pause(waitForAPICallback);
        leadDetail.expect.element('@inputLabel').to.have.value.that.equals('Test label 2');
        leadDetail.expect.element('@searchLocationInput').to.be.visible;
        client.end();
    }
};