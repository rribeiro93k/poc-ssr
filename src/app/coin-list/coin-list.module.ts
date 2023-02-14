import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CoinListComponent } from './coin-list.component';
import { CoinListService } from './coin-list.service';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule
  ],
  declarations: [CoinListComponent],
  providers: [CoinListService],
  exports: [CoinListComponent]
})
export class CoinListModule {}
