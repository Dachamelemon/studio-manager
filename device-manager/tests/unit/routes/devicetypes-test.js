import { module, test } from 'qunit';
import { setupTest } from 'device-manager/tests/helpers';

module('Unit | Route | devicetypes', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:devicetypes');
    assert.ok(route);
  });
});
