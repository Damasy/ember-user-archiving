import Route from '@ember/routing/route';

export default class UsersRoute extends Route {
  model() {
    // return this.store.findAll('user');
    // eslint-disable-next-line no-undef
    return new Promise((resolve) =>
      this.store.findAll('user').then(
        (users) => resolve(users),
        (err) => {
          console.warn(err);
          resolve([
            {
              id: '3',
              type: 'user',
              attributes: {
                name: 'Bruce Lee',
                image: '/images/Bruce.jpg',
                value: 'false',
                archived: false,
              },
            },
          ]);
        }
      )
    );
  }
}
