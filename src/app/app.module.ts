import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontHomeComponent } from './front-home/front-home.component';
import { HomepageComponent } from './homepage/homepage.component'
import { RouterModule, Routes } from '@angular/router';
import { HomecardComponent } from './homecard/homecard.component';
import { AddNewtaskComponent } from './add-newtask/add-newtask.component';
import { NoteContentComponent } from './note-content/note-content.component';
import { NewnoteComponent } from './newnote/newnote.component';
import { ContentCardComponent } from './note-content/content-card/content-card.component';

const appRoutes: Routes = [
  {path: "",component:FrontHomeComponent},
  {path: "home",component:HomepageComponent},
  {path: "note/:name/:id",component:NoteContentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FrontHomeComponent,
    HomepageComponent,
    HomecardComponent,
    AddNewtaskComponent,
    NoteContentComponent,
    NewnoteComponent,
    ContentCardComponent
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
