import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import config from './auth-config';
import {HttpClient} from 'aurelia-fetch-client';

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .plugin('aurelia-auth', (baseConfig) => {
      baseConfig.configure(config);
    });

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
