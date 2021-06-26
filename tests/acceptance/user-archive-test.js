import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | user archive', function(hooks) {
  setupApplicationTest(hooks);

  test('it should view all unarchived users', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    await click('[data-users-route]');
    assert.equal(currentURL(), '/users');
    await click('[data-user-id="3"]');
    assert.equal(currentURL(), '/users/3');
    // await this.pauseTest();
  });
});
