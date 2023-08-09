import { module, test } from 'qunit';
import { setupTest } from 'device-manager/tests/helpers';

module('Unit | Route | mydevices', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:mydevices');
    assert.ok(route);
  });
});
