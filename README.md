# user-archiving

EmberJS challenge, User Archiving:

This test will present you with a very simple user interface to navigate.
From the home page, your only option will be to go to the users page with a simple button click,
after that, several users will appears for you that are pulled from a mocked back-end.
Clicking on any of these users will take you to their individual profile pages.

The objective of this task is to add an "archived" value to the users, and to add a new button to their profiles that toggles this value.
After clicking the newly made button to archive a user, you should be given an "Are you sure" prompt, to which you can say "yes", or "no".
Clicking no should cancel the action of changing the value for archiving the user, and clicking yes should perform that action.

* All user data is pulled from a mock back-end located in /server/mocks/users.js.
* The user pages are using standard EmberJS routing.
* The CSS framework being used in this project is Bulma, and can be used freely.

An example of modifying a value of a user is given on their profiles. They each have a simple boolean named "value", which can be toggled between true, or false with a button click. This button can be found on every users profile.

![user profile](https://i.imgur.com/9tm4LfN.png)

## Requirements

* Add an "archive" button to all user profiles, with a confirmation prompt.
* Add an "arhived" value of type boolean to the users.
* Display the arhived value of true or false on the user profile.
* Change the archived boolean's value with the button you have created.
* Ensure that the archived value of the user changes when the button is clicked and yes is chosen in the confirmation

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone https://github.com/lekkercode-com/ember-ui`
* `cd user-archiving`
* `npm install`

## Running / Development

* Run `ember serve` in the user-archiving folder.
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* `ember test`
* `ember test --server`

### Deploying

Push your work to your own local git repository. (Change the origin to link to your own git repository.)

* git remote set-url origin http://github.com/your_username/your_repository