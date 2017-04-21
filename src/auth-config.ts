// Specific settings for our application's
// authentication context. These will override
// the default settings provided by aureliauth

var config = {

  // Our Node API is being served from localhost:3001
  baseUrl: 'http://localhost:8080',
  // The API specifies that new users register at the POST /users enpoint.
  signupUrl: 'addUser',
  // Logins happen at the POST /sessions/create endpoint.
  loginUrl: 'auth/login',
  // The API serves its tokens with a key of id_token which differs from
  // aureliauth's standard.
  tokenName: 'token'

}

export default config;
