import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UsersUserController extends Controller {
  @action
  modifyValue(){
    this.model.value = !this.model.value;
  }
}
