import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-tshest-код-брони-l');
  this.route('i-i-s-tshest-код-брони-e',
  { path: 'i-i-s-tshest-код-брони-e/:id' });
  this.route('i-i-s-tshest-код-брони-e.new',
  { path: 'i-i-s-tshest-код-брони-e/new' });
  this.route('i-i-s-tshest-место-на-рейс-l');
  this.route('i-i-s-tshest-место-на-рейс-e',
  { path: 'i-i-s-tshest-место-на-рейс-e/:id' });
  this.route('i-i-s-tshest-место-на-рейс-e.new',
  { path: 'i-i-s-tshest-место-на-рейс-e/new' });
  this.route('i-i-s-tshest-пассажир-l');
  this.route('i-i-s-tshest-пассажир-e',
  { path: 'i-i-s-tshest-пассажир-e/:id' });
  this.route('i-i-s-tshest-пассажир-e.new',
  { path: 'i-i-s-tshest-пассажир-e/new' });
  this.route('i-i-s-tshest-посад-талон-l');
  this.route('i-i-s-tshest-посад-талон-e',
  { path: 'i-i-s-tshest-посад-талон-e/:id' });
  this.route('i-i-s-tshest-посад-талон-e.new',
  { path: 'i-i-s-tshest-посад-талон-e/new' });
  this.route('i-i-s-tshest-рейс-l');
  this.route('i-i-s-tshest-рейс-e',
  { path: 'i-i-s-tshest-рейс-e/:id' });
  this.route('i-i-s-tshest-рейс-e.new',
  { path: 'i-i-s-tshest-рейс-e/new' });
});

export default Router;
