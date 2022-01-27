import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SampleService {
  getData() {
    return [
      { id: 1, name: 'basva', place: 'manvi' },
      { id: 2, name: 'sai', place: 'kadapa' },
      { id: 3, name: 'charan', place: 'tirupathi' },
    ];
  }

  validate() {
    let isLogged = localStorage.getItem('isLogged');
    return isLogged == 'true' ? true : false;
  }

}
