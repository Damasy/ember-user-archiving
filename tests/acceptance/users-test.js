import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | users', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /users', async function(assert) {
    await visit('/users');

    assert.equal(currentURL(), '/users');
  });
});
