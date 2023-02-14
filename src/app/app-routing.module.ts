import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinListComponent } from './coin-list/coin-list.component';
import { CoinComponent } from './coin/coin.component';

const routes: Routes = [
  { path: '', component: CoinComponent },
  { path: 'coin-list', component: CoinListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
