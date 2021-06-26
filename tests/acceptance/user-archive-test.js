import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | user archive', function(hooks) {
  setupApplicationTest(hooks);

  test('it should view all unarchived users', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/', 'it is in home page');
    assert.dom('[data-users-route]').exists();
    // await this.pauseTest();
    await click('[data-users-route]');
    assert.equal(currentURL(), '/users', 'it is in users page');
    await click('[data-user-id="3"]');
    assert.equal(currentURL(), '/users/3', 'it is in Bruce Lee page');
    // await this.pauseTest();
  });
});
