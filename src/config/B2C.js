
export const AppAuthConfig = {
    issuer:
      'https://fidelisalfreddev.b2clogin.com/0a140015-d6fc-42a2-9403-ad3a5ab05719/v2.0/',
    clientId: '5574cce2-7b33-4986-905c-0d49ade2c40d',
    // clientSecret: 'ga0RGNYHvNM5d0SLGQfpQWAPGJ8',
    // redirectUrl: 'urn.ietf.wg.oauth.2.0.oob://oauthredirect',
  
    // redirectUrl: 'msauth://com.fidelisalfred2c.app/ga0RGNYHvNM5d0SLGQfpQWAPGJ8%3D',
    // redirectUrl: 'urn:ietf:wg:oauth:2.0:oob',
  
    redirectUrl: 'vinu://oauth',
    // redirectUrl: "https://fidelisalfreddev.b2clogin.com/oauth2/nativeclient",
    // redirectUrl: 'urn:ietf:wg:oauth:2.0:oob',
    additionalParameters: {prompt: 'login'},
    scopes: ['openid'],
  
    serviceConfiguration: {
      authorizationEndpoint:
        'https://fidelisalfreddev.b2clogin.com/fidelisalfreddev.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_b2c_twitter_signin',
      // authorizationEndpoint1:
      //   "https://fidelisalfreddev.b2clogin.com/fidelisalfreddev.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1_b2c_twitter_signin",
      tokenEndpoint:
        'https://fidelisalfreddev.b2clogin.com/fidelisalfreddev.onmicrosoft.com/oauth2/v2.0/token?p=b2c_1_b2c_twitter_signin',
      revocationEndpoint:
        'https://fidelisalfreddev.b2clogin.com/fidelisalfreddev.onmicrosoft.com/oauth2/v2.0/logout?p=b2c_1_b2c_twitter_signin',
    },
  };