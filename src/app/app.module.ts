import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PreventBubblingDirective } from './directives/prevent-bubbling.directive';

@NgModule({
  declarations: [
    AppComponent,
    PreventBubblingDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
