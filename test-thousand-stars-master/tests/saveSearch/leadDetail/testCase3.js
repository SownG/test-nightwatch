export default {
    '@tags': ['SaveSearch'],
    'Add saved search có amenities': (client) => {
        const leadDetail = client.page.leadDetail();
        const waitForAPICallback = client.globals.waitForAPICallback;
        const loginPage = client.page.loginPage();
        const constantsLogin = client.globals.constantsLogin;

        client.url('http://localhost:7811/lead-detail/bc8412a0-1b96-4b28-883d-9cc44b2e4481');
        leadDetail
            .login(constantsLogin.emailPass, constantsLogin.passwordPass);
        client.pause(waitForAPICallback);
        leadDetail.expect.element('@main').to.be.visible;
        leadDetail.creatNew();
        client.pause(waitForAPICallback);
        leadDetail
            .setValueInput('Test label 3' , 21666)
        client.pause(waitForAPICallback);
        leadDetail.setAmenities();
        client.pause(waitForAPICallback);
        leadDetail.submit();
        client.pause(waitForAPICallback);
        leadDetail.expect.element('@firstSaveSearch').text.to.equal('Test label 3: 21666')
        client.end();
    }
};