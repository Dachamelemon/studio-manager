import { module, test } from 'qunit';
import { setupTest } from 'device-manager/tests/helpers';

module('Unit | Controller | devicetype', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:devicetype');
    assert.ok(controller);
  });
});
