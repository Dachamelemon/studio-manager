import { module, test } from 'qunit';

import { setupTest } from 'device-manager/tests/helpers';

module('Unit | Transform | devicetype', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let transform = this.owner.lookup('transform:devicetype');
    assert.ok(transform);
  });
});
