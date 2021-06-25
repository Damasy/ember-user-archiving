import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class UsersUserController extends Controller {
  @tracked user;

  get archivingMsg() {
    if (this.model.archived) {
      return 'User is archived..';
    }
    return 'User is not archived..';
  }

  @action
  userArchive() {
    this.model.archived = !this.model.archived;
    this.updateDB();
  }

  updateDB() {
    fetch('/api/users/' + this.model.id, {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ archived: this.model.archived }),
    });
  }
}
