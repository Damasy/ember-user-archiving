import Service from '@ember/service';

export default class ArchiveService extends Service {
  toggleArchive(isArchived) {
    return !isArchived;
  }

  updateDB(user_id, archived) {
    fetch('/api/users/' + user_id, {
      method: 'PATCH',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ archived: archived }),
    });
  }

  getArchivingMsg(archived) {
    if (archived) {
      return 'User is archived..';
    }
    return 'User is not archived..';
  }
}
