import { module, test } from 'qunit';

import { setupTest } from 'device-manager/tests/helpers';

module('Unit | Model | devicetypes', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('devicetypes', {});
    assert.ok(model);
  });
});
