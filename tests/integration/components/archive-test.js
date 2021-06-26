import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | archive', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('userArchive', function() {
      return true;
    });
    this.set('user', {
      attributes: {
        archived: true
      }
    })
    await render(hbs`<Archive @userArchive={{this.userArchive}}/>`);
    //await this.pauseTest();
    assert.dom('[data-test-archive-button]').hasText('Archive user');
    assert.dom('p.has-text-white').exists();

    await click('[data-test-archive-button]')
  });
});
