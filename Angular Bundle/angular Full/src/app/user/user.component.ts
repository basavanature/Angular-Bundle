import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  counter = 0;
  count = 0;
  results: any;
  apiData: any;
  private subscription: Subscription = new Subscription();
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getDataApi().subscribe((result) => {
      console.log(result);
    });

    this.results = this.userService.getData();

    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('data1');
        resolve('data2');
        resolve('data3');
      }, 1000);
    });
    promise.then((result) => {
      console.log(result);
    });

    const observable = new Observable((sub) => {
      console.log('observable has been called');
      setInterval(() => {
        sub.next(this.count++);
      }, 1000);
    });

    this.subscription = observable.subscribe((result) => {
      console.log('count = ' + result);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
