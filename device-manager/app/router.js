import EmberRouter from '@ember/routing/router';
import config from 'device-manager/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('device');
  this.route('devicetypes');
  this.route('home');
});
