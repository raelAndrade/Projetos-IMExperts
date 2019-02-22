import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent}
]

/*@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
*/
/*export class AppRoutingModule { }*/
