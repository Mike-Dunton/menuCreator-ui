import {autoinject} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {FetchConfig} from 'aurelia-auth'
import {AuthService} from 'aurelia-auth';

@autoinject
export class App {
  router: Router;
  configureRouter(config: RouterConfiguration, router: Router){
    config.title = "Menu Creator"
    config.map([
      { route: '', moduleId: 'no-selection', title: 'Welcome', nav: true},
      { route: 'recipes/:id', moduleId: 'recipe-detail', name: "recipes", auth: true, nav: false},
      { route: 'signup', name: 'signup', moduleId: './signup', nav: false, title:'Signup', authRoute: true },
      { route: 'login', name: 'login', moduleId: './login', nav: false, title:'Login', authRoute: true },
      { route: 'logout', name: 'logout', moduleId: './logout', nav: false, title:'Logout', authRoute: true }
    ]);
    this.router = router;
  }

  _isAuthenticated = false;
  auth: AuthService;
  constructor(auth: AuthService) {
    this.auth = auth;
  }
  get isAuthenticated() {
    return this.auth.isAuthenticated();
  };
}
