import { module, test } from 'qunit';
import { setupTest } from 'device-manager/tests/helpers';

module('Unit | Route | devicetype', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:devicetype');
    assert.ok(route);
  });
});
