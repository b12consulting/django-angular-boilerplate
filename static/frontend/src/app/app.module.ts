import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './users/login/login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
