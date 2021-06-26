import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class UsersUserController extends Controller {
  @tracked user;

  @service('archive') archiveService;

  get archivingMsg() {
    return this.archiveService.getArchivingMsg(this.model.archive);
  }

  @action
  userArchive() {
    this.model.archived = this.archiveService.toggleArchive(
      this.model.archived
    );
    this.archiveService.updateDB(this.model.id, this.model.archived);
  }
}
