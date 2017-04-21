import {autoinject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';

@autoinject
export class App {
  heading = 'Sign Up';
  email = '';
  password = '';
  signupError = 'asd';

  auth: AuthService;
  constructor(auth: AuthService) {
    this.auth = auth;
  }

  signup() {
    return this.auth.signup("blah", this.email, this.password)
    .then((response) => {
      console.log("Singed Up", response);
    })
    .catch(error => {
      console.log("I AM IN THE ERROR error", error)
      error.text().then((text) =>{
          console.log(error)
          this.signupError = text;
        });
    })
  }
}
