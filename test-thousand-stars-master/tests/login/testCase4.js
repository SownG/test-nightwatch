export default {
	'@tags': ['login'],
  	'User Log in success': (client) => {
		const loginPage = client.page.loginPage();
		const mainPage = client.page.mainPage();
		const constantsLogin = client.globals.constantsLogin;
		loginPage
			.navigate()
			.login(constantsLogin.emailPass, constantsLogin.passwordPass);
		mainPage.expect.element('@main').to.be.visible;
		client.end();
	  }
};