import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavSelectionComponent } from './nav-selection/nav-selection.component';
import { NavOptionComponent } from './nav-option/nav-option.component';

@NgModule({
  declarations: [
    AppComponent,
    NavSelectionComponent,
    NavOptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
