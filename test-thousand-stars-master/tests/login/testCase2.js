export default {
	'@tags': ['login'],
  	'User Log in Password Blank': (client) => {
    const loginPage = client.page.loginPage();
	const constantsLogin = client.globals.constantsLogin;
	const waitForAPICallback = client.globals.waitForAPICallback;
    loginPage
      	.navigate()
      	.login(constantsLogin.emailPass, constantsLogin.passwordBlank)
      	.assert.value('@passInput', '');
  	client.pause(waitForAPICallback);
  	loginPage
  		.assert.cssProperty("@passInput", "color", "rgba(255, 0, 0, 1)");
	client.end();
  }
};