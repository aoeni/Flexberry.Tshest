import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-tshest-рейс', 'Unit | Model | i-i-s-tshest-рейс', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-tshest-инф-бронь',
    'model:i-i-s-tshest-код-брони',
    'model:i-i-s-tshest-место-на-рейс',
    'model:i-i-s-tshest-пассажир',
    'model:i-i-s-tshest-посад-талон',
    'model:i-i-s-tshest-рейс',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
