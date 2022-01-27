import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
import { SampleService } from '../services/sample.service';

@Injectable({
  providedIn: 'root',
})
export class SampleGuard implements CanActivate, CanDeactivate<RegisterComponent>
{
  constructor(private sampleService: SampleService) {}
  canDeactivate() {
    return false;
  }

  canActivate() {
    if (this.sampleService.validate()) {
      return true;
    } else {
      alert('login to access');
      return false;
    }
  }
}
