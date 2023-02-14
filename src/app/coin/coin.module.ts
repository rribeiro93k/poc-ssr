import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoinComponent } from './coin.component';

@NgModule({
  declarations: [
    CoinComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [],
  exports: [CoinComponent]
})
export class CoinModule { }
