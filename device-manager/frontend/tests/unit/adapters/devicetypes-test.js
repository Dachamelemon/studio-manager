import { module, test } from 'qunit';

import { setupTest } from 'device-manager/tests/helpers';

module('Unit | Adapter | devicetypes', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:devicetypes');
    assert.ok(adapter);
  });
});
