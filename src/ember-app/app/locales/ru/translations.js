import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Tshest',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Tshest',
          title: 'Tshest'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
