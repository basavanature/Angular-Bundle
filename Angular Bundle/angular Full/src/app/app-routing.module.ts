import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleGuard } from './guards/sample.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SampleComponent } from './sample/sample.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'sample', component: SampleComponent,canActivate:[SampleGuard] },
  { path: 'users', component: UserComponent},
  { path: 'products', loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule) },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
