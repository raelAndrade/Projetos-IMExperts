/**
 * App-module defines the application's root module. In it you declare the components that belong to this module.
 */

// BrowserModule, NgModule, FormModule are internal Angular modules.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom components are imported from their definition files
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { CuSearchComponent } from './cu-search/cu-search.component';
import { IDOLService } from './services/IDOLService';


/**
 * Custom components are included in the declarations array of NgModule decorator
 */
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    CardComponent,
    CuSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import FormsModule to let the application access to all of the template-driven forms features, including ngModel.
    FormsModule,
    // if you want to use HttpClient you need to import HttpClientModule
    HttpClientModule
  ],
  providers: [
    IDOLService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

