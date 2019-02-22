import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { CuSearchComponent } from './cu-search/cu-search.component';

//const routes: Routes = [];
const routes: Routes = [
  { path: '', redirectTo: 'idolqueryform', pathMatch: 'full'},
  { path: 'cards', component: CardListComponent },
  { path: 'idolqueryform', component: CuSearchComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
