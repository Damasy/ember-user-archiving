# user-archiving

Feature request: User archiving.

The current web application does not allow for users to be archived, and we would like this functionality to be added.
When visiting a users profile, a button to archive that user should be present, and give an "are you sure" prompt with yes or no options.
If the button is clicked, and yes is selected from the prompt, the user should have a value changed to indicate that they are archived.
We would also like to see if a user is archived or not on their profile itself.

This is a user profile at present:
https://i.imgur.com/BIC34we.png

We would like to have a button added on the right hand side for archiving the user, and have whether they are archived or not added as text on their profile.

After archiving a user, clicking the button to return to the users page should no longer display this user.
This feature does not currently hook into the backend, so refreshing your session will unarchive all users, do not worry about this happening.

## Requirements

* Add an "archive" button to all user profiles, with a confirmation prompt.
* Add an "archived" value of type boolean to the users.
* Display the archived value of true or false on the user profile.
* Change the archived boolean's value with the button created.
* Ensure that the archived value of the user changes when the button is clicked and yes is chosen in the confirmation. If they select "no" when asked if they are sure they would like to archive a user, the user should not be archived.
* All tests must still pass after this functionality is added. (eslint, and ember tests)

## Useful information

* All user data is pulled from a mock back-end located in /server/mocks/users.js. This data correlates to a model in /app/models/users.js
* The user pages are using standard EmberJS routing.
* The CSS framework being used in this project is Bulma.

An example of modifying a value of a user is given on their profiles. They each have a simple boolean named "value", which can be toggled between true, or false with a button click. This button can be found on every users profile.

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