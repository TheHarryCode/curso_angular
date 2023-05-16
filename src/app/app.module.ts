import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { MycompenentPageComponent } from './mycompenent-page/mycompenent-page.component';
import { PageMainComponent } from './page-main/page-main.component';
import { LastPageComponent } from './last-page/last-page.component';

@NgModule({
  declarations: [	
    AppComponent,
    MycomponentComponent,
    MycompenentPageComponent,
      PageMainComponent,
      LastPageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
