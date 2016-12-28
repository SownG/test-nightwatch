    export default {
    '@tags': ['SaveSearch'],
    'Check hiển thị dialog [Create new Saved Search]': (client) => {
        const leadDetail = client.page.leadDetail();
        const waitForAPICallback = client.globals.waitForAPICallback;
        const loginPage = client.page.loginPage();
        const constantsLogin = client.globals.constantsLogin;

        leadDetail
            .navigate()
            .login(constantsLogin.emailPass, constantsLogin.passwordPass);
        client.pause(waitForAPICallback);
        leadDetail.expect.element('@main').to.be.visible;
        client.end();
    }
};