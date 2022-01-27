import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropComponent } from './drop/drop.component';
import { KarnatakaComponent } from './karnataka/karnataka.component';
import { KeralaComponent } from './kerala/kerala.component';
import { OdissaComponent } from './odissa/odissa.component';
import { ManipurComponent } from './manipur/manipur.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DropComponent,
    KarnatakaComponent,
    KeralaComponent,
    OdissaComponent,
    ManipurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
