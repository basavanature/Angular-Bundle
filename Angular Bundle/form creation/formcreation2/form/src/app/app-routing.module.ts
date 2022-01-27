import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {path:'',redirectTo:'./register',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'reg',component:RegisterComponent},
  {path:'sample',component:SampleComponent},
  {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
