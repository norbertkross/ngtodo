import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontHomeComponent } from './front-home/front-home.component';
import { HomepageComponent } from './homepage/homepage.component'
import { RouterModule, Routes } from '@angular/router';
import { HomecardComponent } from './homecard/homecard.component';

const appRoutes: Routes = [
  {path: "",component:FrontHomeComponent},
  {path: "home",component:HomepageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FrontHomeComponent,
    HomepageComponent,
    HomecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
