import { module, test } from 'qunit';

import { setupTest } from 'device-manager/tests/helpers';

module('Unit | Adapter | devices', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:devices');
    assert.ok(adapter);
  });
});
