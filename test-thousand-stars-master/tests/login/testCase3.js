export default {
	'@tags': ['login'],
  	'User Log in error email or password': (client) => {
    const loginPage = client.page.loginPage();
	const constantsLogin = client.globals.constantsLogin;
	const waitForAPICallback = client.globals.waitForAPICallback;
    loginPage
      	.navigate()
      	.login(constantsLogin.emailError, constantsLogin.passwordError);
  	client.pause(waitForAPICallback);
  	loginPage
  		.assert.containsText('@message', "Invalid username or password.");
	client.end();
  }
};