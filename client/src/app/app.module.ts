import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

<<<<<<< HEAD
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MyTestParentComponent } from './my-test-parent/my-test-parent.component';
import { MyTestChildComponent } from './my-test-child/my-test-child.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MyTestParentComponent,
    MyTestChildComponent
=======
@NgModule({
  declarations: [
    AppComponent
>>>>>>> 2e361cc3531fbc4f6956d823cd4d1f69f0446b20
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
