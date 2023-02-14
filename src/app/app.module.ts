import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinListModule } from './coin-list/coin-list.module';
import { CoinModule } from './coin/coin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CoinModule,
    CoinListModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
