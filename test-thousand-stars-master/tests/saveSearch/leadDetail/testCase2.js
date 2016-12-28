export default {
    '@tags': ['SaveSearch'],
    'Add một saved search (không có amenities)': (client) => {
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
        leadDetail.expect.element('@firstSaveSearch').text.to.equal('Test label 2: 21666')
        client.end();
    }
};