import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialiserModule } from './materialiser/materialiser.module';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DatatableComponent } from './datatable/datatable.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatatableComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialiserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
