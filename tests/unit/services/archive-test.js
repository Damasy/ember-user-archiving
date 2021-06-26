import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | archive', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:archive');
    assert.ok(service);
  });

  test('toggleArchive is working like a charm!', function(assert) {
    let service = this.owner.lookup('service:archive');
    assert.true(service.toggleArchive(false));
  });

  test('getArchivingMsg is working like a charm!', function(assert) {
    let service = this.owner.lookup('service:archive');
    assert.equal(service.getArchivingMsg(true), 'User is archived..');
  });

});
