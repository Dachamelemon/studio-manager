import { module, test } from 'qunit';

import { setupTest } from 'device-manager/tests/helpers';

module('Unit | Serializer | devicetypes', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('devicetypes');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('devicetypes', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
