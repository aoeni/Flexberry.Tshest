import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISTshestКодБрониLForm from './forms/i-i-s-tshest-код-брони-l';
import IISTshestМестоНаРейсLForm from './forms/i-i-s-tshest-место-на-рейс-l';
import IISTshestПассажирLForm from './forms/i-i-s-tshest-пассажир-l';
import IISTshestПосадТалонLForm from './forms/i-i-s-tshest-посад-талон-l';
import IISTshestРейсLForm from './forms/i-i-s-tshest-рейс-l';
import IISTshestКодБрониEForm from './forms/i-i-s-tshest-код-брони-e';
import IISTshestМестоНаРейсEForm from './forms/i-i-s-tshest-место-на-рейс-e';
import IISTshestПассажирEForm from './forms/i-i-s-tshest-пассажир-e';
import IISTshestПосадТалонEForm from './forms/i-i-s-tshest-посад-талон-e';
import IISTshestРейсEForm from './forms/i-i-s-tshest-рейс-e';
import IISTshestИнфБроньModel from './models/i-i-s-tshest-инф-бронь';
import IISTshestКодБрониModel from './models/i-i-s-tshest-код-брони';
import IISTshestМестоНаРейсModel from './models/i-i-s-tshest-место-на-рейс';
import IISTshestПассажирModel from './models/i-i-s-tshest-пассажир';
import IISTshestПосадТалонModel from './models/i-i-s-tshest-посад-талон';
import IISTshestРейсModel from './models/i-i-s-tshest-рейс';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-tshest-инф-бронь': IISTshestИнфБроньModel,
    'i-i-s-tshest-код-брони': IISTshestКодБрониModel,
    'i-i-s-tshest-место-на-рейс': IISTshestМестоНаРейсModel,
    'i-i-s-tshest-пассажир': IISTshestПассажирModel,
    'i-i-s-tshest-посад-талон': IISTshestПосадТалонModel,
    'i-i-s-tshest-рейс': IISTshestРейсModel
  },

  'application-name': 'Tshest',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Tshest',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tshest',
          title: 'Tshest'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        tshest: {
          caption: 'Tshest',
          title: 'Tshest',
          'i-i-s-tshest-посад-талон-l': {
            caption: 'Посад талон',
            title: ''
          },
          'i-i-s-tshest-пассажир-l': {
            caption: 'Пассажир',
            title: ''
          },
          'i-i-s-tshest-рейс-l': {
            caption: 'Рейс',
            title: ''
          },
          'i-i-s-tshest-код-брони-l': {
            caption: 'Код брони',
            title: ''
          },
          'i-i-s-tshest-место-на-рейс-l': {
            caption: 'Место на рейс',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-tshest-код-брони-l': IISTshestКодБрониLForm,
    'i-i-s-tshest-место-на-рейс-l': IISTshestМестоНаРейсLForm,
    'i-i-s-tshest-пассажир-l': IISTshestПассажирLForm,
    'i-i-s-tshest-посад-талон-l': IISTshestПосадТалонLForm,
    'i-i-s-tshest-рейс-l': IISTshestРейсLForm,
    'i-i-s-tshest-код-брони-e': IISTshestКодБрониEForm,
    'i-i-s-tshest-место-на-рейс-e': IISTshestМестоНаРейсEForm,
    'i-i-s-tshest-пассажир-e': IISTshestПассажирEForm,
    'i-i-s-tshest-посад-талон-e': IISTshestПосадТалонEForm,
    'i-i-s-tshest-рейс-e': IISTshestРейсEForm
  },

});

export default translations;
