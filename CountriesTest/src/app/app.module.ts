import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import { HistoryTableComponent } from './history-table/history-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCountriesComponent,
    HistoryTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
