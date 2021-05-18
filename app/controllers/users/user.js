import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UsersUserController extends Controller {

  @action
  async modifyValue(currentUser) {
    this.model.changeValue();

    // New method for changing user data, but returns an error despite working.
    //await this.store.findRecord('user', currentUser)
    //.then (function (user) {
    //  user.value = !user.value;
    //})
    //.catch (exception => {
    //  console.log(exception);
    //})
    
    // Old method for storing user data. Causes no errors. 
    //this.model.value = !this.model.value;
  }
}
