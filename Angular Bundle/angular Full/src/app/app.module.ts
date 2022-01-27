import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SampleService } from './services/sample.service';
import { SampleGuard } from './guards/sample.guard';
import { UserComponent } from './user/user.component';
import { AgePipe } from './pipes/age.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AgePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule],
  providers: [SampleService, SampleGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
