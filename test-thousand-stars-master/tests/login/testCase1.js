export default {
	'@tags': ['login'],
  	'User Log in Email Blank': (client) => {
		const loginPage = client.page.loginPage();
		const constantsLogin = client.globals.constantsLogin;
		const waitForAPICallback = client.globals.waitForAPICallback;
		loginPage
			.navigate()
			.login( constantsLogin.emailBlank, constantsLogin.passwordPass)
			.assert.value('@emailInput', '');
		client.pause(waitForAPICallback);
		loginPage
			.assert.cssProperty("@emailInput", "color", "rgba(255, 0, 0, 1)");
		client.end();
	  }
};