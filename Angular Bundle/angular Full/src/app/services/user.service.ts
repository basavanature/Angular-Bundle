import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  getDataApi(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getData() {
    return [
      { name: 'ronaldo', sports: 'football', id: 7 },
      { name: 'messi', sports: 'soccer', id: 13 },
      { name: 'naymer', sports: 'snooker', id: 17 },
      { name: 'karana', sports: 'hockey', id: 20 },
      { name: 'rajnikanth', sports: 'godgames', id: 100 },
      { name: 'einstein', sports: 'physics', id: 107 },
      { name: 'tesla', sports: 'car', id: 177 },
    ];
  }
  constructor(private http:HttpClient) {}
}
