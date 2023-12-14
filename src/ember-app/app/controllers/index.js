import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.tshest.caption'),
          title: i18n.t('forms.application.sitemap.tshest.title'),
          children: [{
            link: 'i-i-s-tshest-посад-талон-l',
            caption: i18n.t('forms.application.sitemap.tshest.i-i-s-tshest-посад-талон-l.caption'),
            title: i18n.t('forms.application.sitemap.tshest.i-i-s-tshest-посад-талон-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-tshest-пассажир-l',
            caption: i18n.t('forms.application.sitemap.tshest.i-i-s-tshest-пассажир-l.caption'),
            title: i18n.t('forms.application.sitemap.tshest.i-i-s-tshest-пассажир-l.title'),
            children: null
          }, {
            link: 'i-i-s-tshest-рейс-l',
            caption: i18n.t('forms.application.sitemap.tshest.i-i-s-tshest-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.tshest.i-i-s-tshest-рейс-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-tshest-код-брони-l',
            caption: i18n.t('forms.application.sitemap.tshest.i-i-s-tshest-код-брони-l.caption'),
            title: i18n.t('forms.application.sitemap.tshest.i-i-s-tshest-код-брони-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-tshest-место-на-рейс-l',
            caption: i18n.t('forms.application.sitemap.tshest.i-i-s-tshest-место-на-рейс-l.caption'),
            title: i18n.t('forms.application.sitemap.tshest.i-i-s-tshest-место-на-рейс-l.title'),
            icon: 'phone',
            children: null
          }]
        }
      ]
    };
  }),
})